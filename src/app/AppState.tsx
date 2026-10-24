/**
 * 应用状态：内容、每日抽取、收藏、设置与持久化。
 *
 * - 状态写入存储只发生在 useEffect 中，不在 render 中写入。
 * - draw / toggleFavorite 基于同步更新的 ref 计算，
 *   即使同一事件循环内被重复调用也不会生成重复记录。
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DEFAULT_REPO, type ContentRepo } from '../data/content';
import { todayKey } from '../domain/date';
import { drawForDate, findEntry, type HistoryEntry } from '../domain/draw';
import { createEmptyData, sanitizeData, type AppData, type DisplayMode, type MotionPreference } from '../storage/schema';
import { AppStorage, detectLocalStorage, type StorageStatus } from '../storage/storage';

export type ModeSource = 'query' | 'saved' | 'default';

export interface AppStateValue {
  repo: ContentRepo;
  data: AppData;
  today: string;
  todayEntry: HistoryEntry | null;
  storageStatus: StorageStatus;
  notice: string | null;
  dismissNotice: () => void;
  mode: DisplayMode;
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
  setMode: (mode: DisplayMode) => void;
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

/** 解析 ?tv=1 / ?tv=0 临时覆盖 */
export function parseModeOverride(search: string): DisplayMode | null {
  const m = /[?&]tv=([^&#]*)/.exec(search || '');
  if (!m) return null;
  if (m[1] === '1' || m[1] === 'true') return 'tv';
  if (m[1] === '0' || m[1] === 'false') return 'normal';
  return null;
}

export function AppStateProvider(props: AppStateProviderProps): JSX.Element {
  const repo = props.repo || DEFAULT_REPO;
  const nowFn = props.now;
  const randomFn = props.random || Math.random;

  // 初始化只执行一次：存储探测 + 读取
  const initRef = useRef<{ storage: AppStorage; data: AppData; status: StorageStatus; notice: string | null } | null>(
    null,
  );
  if (!initRef.current) {
    const storage = props.storage || new AppStorage(detectLocalStorage(typeof window !== 'undefined' ? window : undefined));
    const loaded = storage.load();
    initRef.current = { storage, data: loaded.data, status: loaded.status, notice: loaded.notice };
  }
  const storage = initRef.current.storage;

  const [data, setDataState] = useState<AppData>(initRef.current.data);
  const dataRef = useRef<AppData>(data);
  const [today, setToday] = useState<string>(() => todayKey(nowFn));
  const [storageStatus, setStorageStatus] = useState<StorageStatus>(initRef.current.status);
  const [notice, setNotice] = useState<string | null>(initRef.current.notice);
  const [override, setOverride] = useState<DisplayMode | null>(() =>
    parseModeOverride(props.search !== undefined ? props.search : typeof location !== 'undefined' ? location.search : ''),
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
    (mode: DisplayMode) => {
      setOverride(null);
      const cur = dataRef.current;
      commit({ ...cur, settings: { ...cur.settings, mode } });
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

  const mode: DisplayMode = override || data.settings.mode || 'tv';
  const modeSource: ModeSource = override ? 'query' : data.settings.mode ? 'saved' : 'default';
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
