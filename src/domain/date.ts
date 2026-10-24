/**
 * 本地日期工具：一律按设备本地时区计算，不用 UTC 日期替代。
 */

const WEEKDAYS = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

function pad2(n: number): string {
  return n < 10 ? '0' + n : String(n);
}

/** 本地日期 YYYY-MM-DD */
export function toLocalDateKey(date: Date): string {
  return date.getFullYear() + '-' + pad2(date.getMonth() + 1) + '-' + pad2(date.getDate());
}

/** 今天的本地日期键 */
export function todayKey(now?: () => Date): string {
  return toLocalDateKey(now ? now() : new Date());
}

/** 校验日期键格式 */
export function isDateKey(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parts = value.split('-');
  const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
  return toLocalDateKey(d) === value;
}

/** 日期键转本地 Date（当天 0 点） */
export function parseDateKey(key: string): Date {
  const parts = key.split('-');
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

/** 「10月24日」 */
export function formatMonthDay(key: string): string {
  const d = parseDateKey(key);
  return d.getMonth() + 1 + '月' + d.getDate() + '日';
}

/** 「2026年10月24日」 */
export function formatFullDate(key: string): string {
  const d = parseDateKey(key);
  return d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() + '日';
}

/** 「星期六」 */
export function formatWeekday(key: string): string {
  return WEEKDAYS[parseDateKey(key).getDay()];
}
