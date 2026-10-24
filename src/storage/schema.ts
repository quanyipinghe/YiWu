/**
 * 本地数据结构与校验 / 迁移。
 *
 * - 使用项目命名空间和数据版本号。
 * - 只保存内容 id，不保存数组下标。
 * - 任何无效字段都会被丢弃或回退默认值，保证损坏数据不会导致崩溃。
 * - 存储中可能存在当前版本内容池里没有的 id（例如内容下线），
 *   这里保留原样，由界面层过滤显示，避免误删用户数据。
 */
import { isDateKey } from '../domain/date';
import type { HistoryEntry, RoundState } from '../domain/draw';

export const DATA_VERSION = 1;

export type DisplayMode = 'tv' | 'normal';
export type MotionPreference = 'full' | 'reduced';

export interface FavoriteEntry {
  id: string;
  addedAt: number;
}

export interface Settings {
  /** null 表示用户尚未选择（默认 TV 模式） */
  mode: DisplayMode | null;
  motion: MotionPreference;
}

export interface AppData {
  version: number;
  history: HistoryEntry[];
  round: RoundState;
  favorites: FavoriteEntry[];
  settings: Settings;
}

export function createEmptyData(): AppData {
  return {
    version: DATA_VERSION,
    history: [],
    round: { number: 1, usedIds: [], lastId: null },
    favorites: [],
    settings: { mode: null, motion: 'full' },
  };
}

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

function isId(v: unknown): v is string {
  return typeof v === 'string' && /^[a-z0-9][a-z0-9-]{0,80}$/.test(v);
}

function toTime(v: unknown): number {
  return typeof v === 'number' && isFinite(v) && v > 0 ? v : 0;
}

function sanitizeHistory(raw: unknown): HistoryEntry[] {
  if (!Array.isArray(raw)) return [];
  const out: HistoryEntry[] = [];
  const seen: Record<string, boolean> = {};
  for (let i = 0; i < raw.length; i++) {
    const item = raw[i];
    if (!isObject(item)) continue;
    if (!isDateKey(item.date) || !isId(item.id)) continue;
    // 同一天只保留第一条，防止重复记录
    if (seen[item.date]) continue;
    seen[item.date] = true;
    out.push({ date: item.date, id: item.id, drawnAt: toTime(item.drawnAt) });
  }
  return out;
}

function sanitizeFavorites(raw: unknown): FavoriteEntry[] {
  if (!Array.isArray(raw)) return [];
  const out: FavoriteEntry[] = [];
  const seen: Record<string, boolean> = {};
  for (let i = 0; i < raw.length; i++) {
    const item = raw[i];
    // 兼容无版本号旧结构：收藏直接是 id 字符串数组
    const id = typeof item === 'string' ? item : isObject(item) ? item.id : null;
    if (!isId(id) || seen[id]) continue;
    seen[id] = true;
    out.push({ id, addedAt: isObject(item) ? toTime(item.addedAt) : 0 });
  }
  return out;
}

function sanitizeRound(raw: unknown, history: HistoryEntry[]): RoundState {
  if (!isObject(raw)) {
    // 旧数据没有轮次信息：用历史记录推算当前轮已抽内容
    const used: string[] = [];
    for (let i = 0; i < history.length; i++) {
      if (used.indexOf(history[i].id) === -1) used.push(history[i].id);
    }
    const last = history.length ? history[history.length - 1].id : null;
    return { number: 1, usedIds: used, lastId: last };
  }
  const usedRaw = Array.isArray(raw.usedIds) ? raw.usedIds : [];
  const usedIds: string[] = [];
  for (let i = 0; i < usedRaw.length; i++) {
    const id = usedRaw[i];
    if (isId(id) && usedIds.indexOf(id) === -1) usedIds.push(id);
  }
  const num = typeof raw.number === 'number' && raw.number >= 1 && isFinite(raw.number) ? Math.floor(raw.number) : 1;
  return { number: num, usedIds, lastId: isId(raw.lastId) ? raw.lastId : null };
}

function sanitizeSettings(raw: unknown): Settings {
  const s = isObject(raw) ? raw : {};
  return {
    mode: s.mode === 'tv' || s.mode === 'normal' ? s.mode : null,
    motion: s.motion === 'reduced' ? 'reduced' : 'full',
  };
}

/**
 * 把任意解析结果整理为当前版本的数据。
 * 支持：当前版本；无版本号的旧结构（收藏为字符串数组、无轮次信息）。
 * 更高版本的数据也会尽量读取已知字段。
 */
export function sanitizeData(raw: unknown): { data: AppData; repaired: boolean } {
  if (!isObject(raw)) return { data: createEmptyData(), repaired: raw !== null && raw !== undefined };
  const history = sanitizeHistory(raw.history);
  const data: AppData = {
    version: DATA_VERSION,
    history,
    round: sanitizeRound(raw.round, history),
    favorites: sanitizeFavorites(raw.favorites),
    settings: sanitizeSettings(raw.settings),
  };
  const repaired =
    raw.version !== DATA_VERSION ||
    (Array.isArray(raw.history) && raw.history.length !== history.length) ||
    (Array.isArray(raw.favorites) && raw.favorites.length !== data.favorites.length);
  return { data, repaired };
}
