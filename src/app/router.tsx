/**
 * 简单的应用内路由（不引入第三方路由库）。
 *
 * - 根页面：今日 / 收藏 / 足迹 / 设置，通过导航切换（重置路由栈）。
 * - 详情页压栈；返回时出栈并恢复上一页的状态（页码、筛选）与滚动位置。
 * - 与 history API 同步：压栈时 pushState，使部分电视浏览器把原生返回键
 *   映射为 history.back() 时也能在应用内返回；pushState 不可用时退化为纯内存栈。
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

export type RootName = 'today' | 'favorites' | 'history' | 'settings';

export type Route = { name: RootName } | { name: 'detail'; id: string };

export type RouteState = Record<string, string | number>;

export interface RouteEntry {
  key: number;
  route: Route;
  /** 页面自身的界面状态（页码、筛选等），返回时恢复 */
  state: RouteState;
  /** 离开时主内容区的滚动位置 */
  scrollTop: number;
}

export interface RouterValue {
  current: RouteEntry;
  depth: number;
  /** 切换根页面 */
  navigateRoot: (name: RootName) => void;
  /** 压入新页面 */
  push: (route: Route) => void;
  /** 应用内返回一级；已在根页面返回 false */
  back: () => boolean;
  /** 更新当前页面的界面状态 */
  updateState: (patch: RouteState) => void;
  /** 当前根页面名称（详情页时为其来源根页面） */
  rootName: RootName;
}

const RouterContext = createContext<RouterValue | null>(null);

let entrySeq = 0;
function makeEntry(route: Route): RouteEntry {
  entrySeq++;
  return { key: entrySeq, route, state: {}, scrollTop: 0 };
}

export interface RouterProviderProps {
  children: React.ReactNode;
  /** 主内容滚动容器，用于记录 / 恢复滚动位置 */
  getScrollContainer: () => HTMLElement | null;
  /**
   * 浏览器原生返回（popstate）时调用应用的返回链。
   * 返回 true 表示已处理。
   */
  onNativeBack: () => boolean;
  initial?: RootName;
}

export function RouterProvider(props: RouterProviderProps): JSX.Element {
  const [stack, setStack] = useState<RouteEntry[]>(() => [makeEntry({ name: props.initial || 'today' })]);
  const stackRef = useRef(stack);
  stackRef.current = stack;
  /** 我们压入的 history 条目数 */
  const pushedRef = useRef(0);
  /** 由我们主动触发、需要忽略的 popstate 次数 */
  const ignorePopRef = useRef(0);
  /** 正在处理原生 popstate（此时出栈不能再调用 history.back） */
  const nativePopRef = useRef(false);
  const propsRef = useRef(props);
  propsRef.current = props;

  const saveScroll = (list: RouteEntry[]): RouteEntry[] => {
    const container = propsRef.current.getScrollContainer();
    if (!container || !list.length) return list;
    const copy = list.slice();
    const last = copy[copy.length - 1];
    copy[copy.length - 1] = { ...last, scrollTop: container.scrollTop };
    return copy;
  };

  const historyPush = () => {
    try {
      window.history.pushState({ yiwu: pushedRef.current + 1 }, '');
      pushedRef.current++;
    } catch (e) {
      // pushState 不可用时仅使用内存栈
    }
  };

  const push = useCallback((route: Route) => {
    const next = saveScroll(stackRef.current).concat([makeEntry(route)]);
    stackRef.current = next;
    setStack(next);
    historyPush();
  }, []);

  const popLocal = (): boolean => {
    const cur = stackRef.current;
    if (cur.length <= 1) return false;
    const next = cur.slice(0, cur.length - 1);
    stackRef.current = next;
    setStack(next);
    return true;
  };

  const back = useCallback((): boolean => {
    if (!popLocal()) return false;
    if (nativePopRef.current) {
      // 原生返回已经消耗了一条 history
      pushedRef.current = Math.max(0, pushedRef.current - 1);
    } else if (pushedRef.current > 0) {
      pushedRef.current--;
      ignorePopRef.current++;
      try {
        window.history.back();
      } catch (e) {
        ignorePopRef.current--;
      }
    }
    return true;
  }, []);

  const navigateRoot = useCallback((name: RootName) => {
    const next = [makeEntry({ name })];
    stackRef.current = next;
    setStack(next);
    if (pushedRef.current > 0) {
      const n = pushedRef.current;
      pushedRef.current = 0;
      ignorePopRef.current++;
      try {
        window.history.go(-n);
      } catch (e) {
        ignorePopRef.current--;
      }
    }
  }, []);

  const updateState = useCallback((patch: RouteState) => {
    const cur = stackRef.current;
    const last = cur[cur.length - 1];
    const next = cur.slice(0, cur.length - 1).concat([{ ...last, state: { ...last.state, ...patch } }]);
    stackRef.current = next;
    setStack(next);
  }, []);

  // 监听原生 popstate
  useEffect(() => {
    const onPop = () => {
      if (ignorePopRef.current > 0) {
        ignorePopRef.current--;
        return;
      }
      if (pushedRef.current <= 0) return;
      nativePopRef.current = true;
      const depthBefore = stackRef.current.length;
      let handled = false;
      try {
        handled = propsRef.current.onNativeBack();
      } finally {
        nativePopRef.current = false;
      }
      // 返回由弹窗 / 阅读模式等消费，路由栈未变：补回被浏览器消耗的 history 条目
      if (stackRef.current.length === depthBefore) {
        if (handled) {
          try {
            window.history.pushState({ yiwu: pushedRef.current }, '');
          } catch (e) {
            pushedRef.current = Math.max(0, pushedRef.current - 1);
          }
        } else {
          pushedRef.current = Math.max(0, pushedRef.current - 1);
        }
      }
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const current = stack[stack.length - 1];
  let rootName: RootName = 'today';
  for (let i = stack.length - 1; i >= 0; i--) {
    const r = stack[i].route;
    if (r.name !== 'detail') {
      rootName = r.name;
      break;
    }
  }

  const value = useMemo<RouterValue>(
    () => ({ current, depth: stack.length, navigateRoot, push, back, updateState, rootName }),
    [current, stack.length, navigateRoot, push, back, updateState, rootName],
  );

  return <RouterContext.Provider value={value}>{props.children}</RouterContext.Provider>;
}

export function useRouter(): RouterValue {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter 必须在 RouterProvider 内使用');
  return ctx;
}
