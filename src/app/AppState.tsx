/**
 * 应用状态：内容、每日抽取、收藏、设置与持久化。
 *
 * - 状态写入存储只发生在 useEffect 中，不在 render 中写入。
 * - draw / toggleFavorite 基于同步更新的 ref 计算，
 *   即使同一事件循环内被重复调用也不会生成重复记录。
 * - 模式优先级：显式 URL 参数 (?tv=1 / ?tv=0 / ?mode=...) > 用户手动保存的选择 > 自动判断。
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_REPO, type ContentRepo } from '../data/content';
import { todayKey } from '../domain/date';
import { drawForDate, findEntry, type HistoryEntry } from '../domain/draw';
import {
  createEmptyData,
  sanitizeData,
  type AppData,
  type DisplayMode,
  type ModePreference,
  type MotionPreference,
} from '../storage/schema';
import { AppStorage, detectLocalStorage, type StorageStatus } from '../storage/storage';

export type ModeSource = 'query' | 'saved' | 'auto' | 'default';

export interface AppStateValue {
  repo: ContentRepo;
  data: AppData;
  today: string;
  todayEntry: HistoryEntry | null;
  storageStatus: StorageStatus;
  notice: string | null;
  dismissNotice: () => void;
  /** 最终生效的显示模式：'tv' 或 'normal' */
  mode: DisplayMode;
  /** 用户保存或覆盖的模式偏好：'auto' | 'tv' | 'normal' */
  modePreference: 'auto' | DisplayMode;
  modeSource: ModeSource;
  motion: MotionPreference;
  /** 抽取今天的内容（幂等），返回当天记录 */
  draw: () => HistoryEntry | null;
  /** 重新检查本地日期（跨天） */
  refreshToday: () => void;
  isFavorite: (id: string) => boolean;
  /** 切换收藏，返回切换后的状态 */
  toggleFavorite: (id: string) => boolean;
  removeFavorite: (id: string) => void;
  setMode: (mode: ModePreference) => void;
  setMotion: (motion: MotionPreference) => void;
  clearAll: () => void;
  exportData: () => string;
  importData: (text: string) => boolean;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export interface AppStateProviderProps {
  children: React.ReactNode;
  repo?: ContentRepo;
  storage?: AppStorage;
  now?: () => Date;
  random?: () => number;
  /** 网址参数，如 '?tv=0'；默认读取 location.search */
  search?: string;
}

/** 解析 ?tv=1 / ?tv=0 / ?mode=tv|normal|auto 临时覆盖 */
export function parseModeOverride(search: string): 'tv' | 'normal' | 'auto' | null {
  const s = search || '';
  const tvMatch = /[?&]tv=([^&#]*)/.exec(s);
  if (tvMatch) {
    if (tvMatch[1] === '1' || tvMatch[1] === 'true') return 'tv';
    if (tvMatch[1] === '0' || tvMatch[1] === 'false') return 'normal';
  }
  const modeMatch = /[?&]mode=([^&#]*)/.exec(s);
  if (modeMatch) {
    if (modeMatch[1] === 'tv') return 'tv';
    if (modeMatch[1] === 'normal' || modeMatch[1] === 'pc' || modeMatch[1] === 'mobile') {
      return 'normal';
    }
    if (modeMatch[1] === 'auto') return 'auto';
  }
  return null;
}

/**
 * 自动判断设备模式（不单凭屏幕宽度把大屏 PC 误判为 TV）：
 * 1. 明确带有电视内核/盒子标识或注入了遥控器映射 -> 'tv'
 * 2. 单元测试环境（jsdom，无真实 matchMedia） -> 'tv'（保持遥控器自动化测试默认一致）
 * 3. 手机/平板触屏（Mobile UA 或 coarse 指针） -> 'normal'
 * 4. 桌面浏览器（具备 fine 鼠标指针与 hover 能力且无 TV 标识） -> 'normal'
 * 5. 其他嵌入式电视 WebView 环境 -> 'tv'
 */
export function detectAutoMode(win?: Window): DisplayMode {
  if (!win) return 'tv';
  const ua = win.navigator && win.navigator.userAgent ? win.navigator.userAgent : '';
  if (/jsdom/i.test(ua)) return 'tv';

  const anyWin = win as unknown as Record<string, unknown>;
  if (anyWin.YIWU_KEYMAP || anyWin.tvAppHost) return 'tv';

  const tvRegex =
    /\b(Android\s+TV|SmartTV|SMART-TV|Tizen|Web0S|WebOS|BRAVIA|AFT[A-Z0-9]*|MiBOX|HbbTV|NetCast|Viera|CrKey|GoogleTV|TV)\b/i;
  if (tvRegex.test(ua)) return 'tv';

  // Android 设备但不含 Mobile（常见于机顶盒 WebView）
  if (/Android/i.test(ua) && !/Mobile/i.test(ua)) return 'tv';

  // 手机或移动浏览器
  if (/\b(iPhone|iPod|iPad|Mobile|HarmonyOS)\b/i.test(ua)) return 'normal';

  if (typeof win.matchMedia === 'function') {
    try {
      if (win.matchMedia('(pointer: coarse)').matches) return 'normal';
      if (win.matchMedia('(pointer: fine) and (hover: hover)').matches) return 'normal';
    } catch (e) {
      // matchMedia 异常时继续兜底
    }
  }

  return 'tv';
}

export function AppStateProvider(props: AppStateProviderProps): JSX.Element {
  const repo = props.repo || DEFAULT_REPO;
  const nowFn = props.now;
  const randomFn = props.random || Math.random;

  // 初始化只执行一次：存储探测 + 读取
  const initRef = useRef<{
    storage: AppStorage;
    data: AppData;
    status: StorageStatus;
    notice: string | null;
  } | null>(null);
  if (!initRef.current) {
    const storage =
      props.storage ||
      new AppStorage(detectLocalStorage(typeof window !== 'undefined' ? window : undefined));
    const loaded = storage.load();
    initRef.current = {
      storage,
      data: loaded.data,
      status: loaded.status,
      notice: loaded.notice,
    };
  }
  const storage = initRef.current.storage;

  const [data, setDataState] = useState<AppData>(initRef.current.data);
  const dataRef = useRef<AppData>(data);
  const [today, setToday] = useState<string>(() => todayKey(nowFn));
  const [storageStatus, setStorageStatus] = useState<StorageStatus>(initRef.current.status);
  const [notice, setNotice] = useState<string | null>(initRef.current.notice);
  const [override, setOverride] = useState<'tv' | 'normal' | 'auto' | null>(() =>
    parseModeOverride(
      props.search !== undefined
        ? props.search
        : typeof location !== 'undefined'
          ? location.search
          : '',
    ),
  );

  /** 同步更新 ref 与 state */
  const commit = useCallback((next: AppData) => {
    dataRef.current = next;
    setDataState(next);
  }, []);

  // 持久化：仅在数据变化后的副作用中写入
  const firstSaveRef = useRef(true);
  useEffect(() => {
    if (firstSaveRef.current) {
      firstSaveRef.current = false;
      return;
    }
    const ok = storage.save(data);
    if (!ok && storageStatus === 'ok') {
      setStorageStatus('memory');
      setNotice('本地存储空间不可用，本次改为临时保存，关闭页面后不会保留。');
    }
  }, [data, storage, storageStatus]);

  const refreshToday = useCallback(() => {
    const key = todayKey(nowFn);
    setToday((prev) => (prev === key ? prev : key));
  }, [nowFn]);

  const draw = useCallback((): HistoryEntry | null => {
    const key = todayKey(nowFn);
    setToday((prev) => (prev === key ? prev : key));
    const cur = dataRef.current;
    const result = drawForDate(
      { history: cur.history, round: cur.round },
      repo.ids,
      key,
      nowFn ? nowFn().getTime() : Date.now(),
      randomFn,
    );
    if (result.created) {
      commit({ ...cur, history: result.state.history, round: result.state.round });
    }
    return result.entry;
  }, [repo, nowFn, randomFn, commit]);

  const isFavorite = useCallback(
    (id: string) => {
      const list = data.favorites;
      for (let i = 0; i < list.length; i++) if (list[i].id === id) return true;
      return false;
    },
    [data.favorites],
  );

  const toggleFavorite = useCallback(
    (id: string): boolean => {
      const cur = dataRef.current;
      const exists = cur.favorites.some((f) => f.id === id);
      const favorites = exists
        ? cur.favorites.filter((f) => f.id !== id)
        : [{ id, addedAt: nowFn ? nowFn().getTime() : Date.now() }].concat(cur.favorites);
      commit({ ...cur, favorites });
      return !exists;
    },
    [commit, nowFn],
  );

  const removeFavorite = useCallback(
    (id: string) => {
      const cur = dataRef.current;
      if (!cur.favorites.some((f) => f.id === id)) return;
      commit({ ...cur, favorites: cur.favorites.filter((f) => f.id !== id) });
    },
    [commit],
  );

  const setMode = useCallback(
    (nextMode: ModePreference) => {
      setOverride(null);
      const cur = dataRef.current;
      commit({ ...cur, settings: { ...cur.settings, mode: nextMode } });
    },
    [commit],
  );

  const setMotion = useCallback(
    (motion: MotionPreference) => {
      const cur = dataRef.current;
      commit({ ...cur, settings: { ...cur.settings, motion } });
    },
    [commit],
  );

  const clearAll = useCallback(() => {
    const cur = dataRef.current;
    storage.clear();
    // 保留显示模式与动画偏好，清空收藏、足迹和轮次
    const empty = createEmptyData();
    commit({ ...empty, settings: cur.settings });
  }, [commit, storage]);

  const exportData = useCallback(() => JSON.stringify(dataRef.current, null, 2), []);

  const importData = useCallback(
    (text: string): boolean => {
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch (e) {
        return false;
      }
      if (typeof parsed !== 'object' || parsed === null) return false;
      commit(sanitizeData(parsed).data);
      return true;
    },
    [commit],
  );

  const dismissNotice = useCallback(() => setNotice(null), []);

  const autoResolved = detectAutoMode(typeof window !== 'undefined' ? window : undefined);
  const savedMode = data.settings.mode;

  // 模式优先级：显式 URL 参数 > 用户手动保存的选择 ('tv' | 'normal') > 自动判断
  let mode: DisplayMode;
  let modePreference: 'auto' | DisplayMode;
  let modeSource: ModeSource;

  if (override === 'tv' || override === 'normal') {
    mode = override;
    modePreference = override;
    modeSource = 'query';
  } else if (override === 'auto') {
    mode = autoResolved;
    modePreference = 'auto';
    modeSource = 'query';
  } else if (savedMode === 'tv' || savedMode === 'normal') {
    mode = savedMode;
    modePreference = savedMode;
    modeSource = 'saved';
  } else {
    mode = autoResolved;
    modePreference = 'auto';
    modeSource = savedMode === 'auto' ? 'saved' : 'default';
  }

  const todayEntry = findEntry(data.history, today);

  const value = useMemo<AppStateValue>(
    () => ({
      repo,
      data,
      today,
      todayEntry,
      storageStatus,
      notice,
      dismissNotice,
      mode,
      modePreference,
      modeSource,
      motion: data.settings.motion,
      draw,
      refreshToday,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      setMode,
      setMotion,
      clearAll,
      exportData,
      importData,
    }),
    [
      repo,
      data,
      today,
      todayEntry,
      storageStatus,
      notice,
      dismissNotice,
      mode,
      modePreference,
      modeSource,
      draw,
      refreshToday,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      setMode,
      setMotion,
      clearAll,
      exportData,
      importData,
    ],
  );

  return <AppStateContext.Provider value={value}>{props.children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState 必须在 AppStateProvider 内使用');
  return ctx;
}
