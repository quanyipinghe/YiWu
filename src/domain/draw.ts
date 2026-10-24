/**
 * 每日抽取逻辑（纯函数）。
 *
 * 规则：
 * - 以本地日期 YYYY-MM-DD 为键；同一天只有一条，重复调用返回同一结果。
 * - 一轮内不重复；内容池抽完后开启新一轮。
 * - 内容多于一条时，新一轮第一条避开上一轮最后一条。
 * - 没打开网站的日期不补抽（只在调用当天生成记录）。
 * - 存储中的未知内容 id 会被忽略，不影响抽取。
 */

export interface HistoryEntry {
  /** 本地日期 YYYY-MM-DD */
  date: string;
  /** 内容 id */
  id: string;
  /** 抽取时间戳（毫秒） */
  drawnAt: number;
}

export interface RoundState {
  /** 当前轮次序号，从 1 开始 */
  number: number;
  /** 当前轮已抽过的 id */
  usedIds: string[];
  /** 最近一次抽到的 id（用于新一轮避开） */
  lastId: string | null;
}

export interface DrawState {
  history: HistoryEntry[];
  round: RoundState;
}

export interface DrawResult {
  state: DrawState;
  entry: HistoryEntry | null;
  /** 是否本次新生成 */
  created: boolean;
  /** 是否开启了新一轮 */
  newRound: boolean;
}

export const EMPTY_ROUND: RoundState = { number: 1, usedIds: [], lastId: null };

/** 查找某天的记录 */
export function findEntry(history: HistoryEntry[], date: string): HistoryEntry | null {
  for (let i = 0; i < history.length; i++) {
    if (history[i].date === date) return history[i];
  }
  return null;
}

/**
 * 为指定日期抽取一条内容。
 * @param poolIds 当前内容池 id（顺序稳定）
 * @param random 返回 [0, 1) 的随机数函数，便于测试注入
 */
export function drawForDate(
  state: DrawState,
  poolIds: string[],
  date: string,
  now: number,
  random: () => number,
): DrawResult {
  const existing = findEntry(state.history, date);
  if (existing) return { state, entry: existing, created: false, newRound: false };
  if (!poolIds.length) return { state, entry: null, created: false, newRound: false };

  // 过滤掉内容池中已不存在的 id
  const used: string[] = [];
  for (let i = 0; i < state.round.usedIds.length; i++) {
    const id = state.round.usedIds[i];
    if (poolIds.indexOf(id) !== -1 && used.indexOf(id) === -1) used.push(id);
  }
  let available = poolIds.filter((id) => used.indexOf(id) === -1);
  let roundNumber = state.round.number > 0 ? state.round.number : 1;
  let newRound = false;
  let nextUsed = used;

  if (!available.length) {
    // 开启新一轮
    newRound = true;
    roundNumber += 1;
    nextUsed = [];
    available = poolIds.slice();
    if (poolIds.length > 1 && state.round.lastId) {
      const lastId = state.round.lastId;
      available = available.filter((id) => id !== lastId);
    }
  }

  const r = random();
  const safe = r >= 0 && r < 1 ? r : 0;
  const picked = available[Math.floor(safe * available.length)];
  const entry: HistoryEntry = { date, id: picked, drawnAt: now };
  const nextState: DrawState = {
    history: state.history.concat([entry]),
    round: { number: roundNumber, usedIds: nextUsed.concat([picked]), lastId: picked },
  };
  return { state: nextState, entry, created: true, newRound };
}

/** 按日期倒序排列（不修改原数组） */
export function sortHistoryDesc(history: HistoryEntry[]): HistoryEntry[] {
  return history.slice().sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.drawnAt - a.drawnAt));
}
