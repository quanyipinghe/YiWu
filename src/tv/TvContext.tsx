/**
 * TV 焦点与输入的 React 集成层。
 *
 * - TvProvider：创建唯一的 FocusManager / InputManager，并负责绑定和清理监听。
 * - useFocusable：注册可聚焦元素（统一实现，避免每个按钮重复写遥控器逻辑）。
 * - useFocusGroup / usePageFocus / useBackHandler / useInputLayer：
 *   分组、页面默认焦点、返回处理与输入层。
 */
import React, { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  FocusManager,
  type FocusSnapshot,
  type GroupOptions,
  type ItemOptions,
} from './FocusManager';
import { InputManager, type BackHandler, type InputLayer } from './InputManager';
import { readInjectedKeyMap } from './keymap';
import { installBackBridge } from './backBridge';

export interface TvContextValue {
  focus: FocusManager;
  input: InputManager;
}

const TvContext = createContext<TvContextValue | null>(null);

export interface TvProviderProps {
  children: React.ReactNode;
  /** 是否启用焦点看门狗（TV 模式开启） */
  watchdog: boolean;
  /** 测试时可注入自定义实例 */
  value?: TvContextValue;
}

/** 创建一套管理器（测试也会用到） */
export function createTvManagers(): TvContextValue {
  const focus = new FocusManager();
  const input = new InputManager(focus, readInjectedKeyMap(typeof window !== 'undefined' ? window : undefined));
  return { focus, input };
}

export function TvProvider(props: TvProviderProps): JSX.Element {
  const ref = useRef<TvContextValue | null>(null);
  if (!ref.current) ref.current = props.value || createTvManagers();
  const value = ref.current;

  // 绑定全局监听；清理函数保证 StrictMode 下不会重复绑定
  useEffect(() => {
    const stopInput = value.input.start(window);
    const detachFocus = value.focus.attach(document);
    const uninstall = installBackBridge(window, () => value.input.handleBack());
    return () => {
      stopInput();
      detachFocus();
      uninstall();
    };
  }, [value]);

  useEffect(() => {
    value.focus.setWatchdog(props.watchdog);
  }, [value, props.watchdog]);

  return <TvContext.Provider value={value}>{props.children}</TvContext.Provider>;
}

export function useTv(): TvContextValue {
  const ctx = useContext(TvContext);
  if (!ctx) throw new Error('useTv 必须在 TvProvider 内使用');
  return ctx;
}

/**
 * 注册可聚焦元素，返回需要挂到元素上的 ref。
 * 选项通过 ref 读取最新值，nav 覆盖等变化无需重新注册。
 */
export function useFocusable<T extends HTMLElement>(
  id: string,
  options: ItemOptions,
): React.RefObject<T> {
  const { focus } = useTv();
  const elRef = useRef<T>(null);
  const optsRef = useRef(options);
  optsRef.current = options;
  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return undefined;
    return focus.registerItem(id, el, () => optsRef.current);
  }, [focus, id]);
  return elRef;
}

/** 注册焦点分组 */
export function useFocusGroup(name: string, options: GroupOptions): void {
  const { focus } = useTv();
  const optsRef = useRef(options);
  optsRef.current = options;
  useLayoutEffect(() => focus.registerGroup(name, () => optsRef.current), [focus, name]);
}

/**
 * 页面焦点：挂载时设置当前页面并恢复焦点（记忆 → 默认）。
 * 子组件的注册（layout effect）先于本 effect 执行，因此此时元素已注册。
 */
export function usePageFocus(pageKey: string, getDefaults: () => string[], autoFocus = true): void {
  const { focus } = useTv();
  const defaultsRef = useRef(getDefaults);
  defaultsRef.current = getDefaults;
  useEffect(() => {
    const getter = () => defaultsRef.current();
    const cleanup = focus.setPage(pageKey, getter);
    if (autoFocus && !focus.restorePage()) {
      focus.queueFocus(getter());
    }
    return cleanup;
    // 仅在页面切换时执行
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus, pageKey]);
}

/** 注册返回处理器（active 为 false 时不注册） */
export function useBackHandler(handler: BackHandler, priority: number, active = true): void {
  const { input } = useTv();
  const handlerRef = useRef(handler);
  handlerRef.current = handler;
  useEffect(() => {
    if (!active) return undefined;
    return input.pushBackHandler(() => handlerRef.current(), priority);
  }, [input, priority, active]);
}

/** 压入输入层（active 为 false 时不压入） */
export function useInputLayer(layer: InputLayer, active: boolean): void {
  const { input } = useTv();
  const layerRef = useRef(layer);
  layerRef.current = layer;
  useEffect(() => {
    if (!active) return undefined;
    return input.pushLayer((a, e) => layerRef.current(a, e));
  }, [input, active]);
}

/** 订阅焦点快照（调试面板使用） */
export function useFocusSnapshot(enabled: boolean): FocusSnapshot | null {
  const { focus } = useTv();
  const [snap, setSnap] = useState<FocusSnapshot | null>(null);
  useEffect(() => {
    if (!enabled) return undefined;
    setSnap(focus.snapshot());
    return focus.subscribe(setSnap);
  }, [focus, enabled]);
  return snap;
}
