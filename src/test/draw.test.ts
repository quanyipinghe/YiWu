/**
 * 每日抽取、本地日期与内容池完整性单元测试。
 */
import { describe, expect, it } from 'vitest';
import { drawForDate, EMPTY_ROUND, sortHistoryDesc, type DrawState } from '../domain/draw';
import { formatFullDate, formatWeekday, isDateKey, toLocalDateKey } from '../domain/date';
import { PROVERBS } from '../data/proverbs';
import { CATEGORIES, DEFAULT_REPO } from '../data/content';

describe('本地日期工具 (date.ts)', () => {
  it('按设备本地时区生成 YYYY-MM-DD，不使用 UTC 日期替代', () => {
    // 构造本地时间 2026-10-24 00:15:00（在东八区对应的 UTC 是前一天 16:15）
    const localEarlyMorning = new Date(2026, 9, 24, 0, 15, 0);
    expect(toLocalDateKey(localEarlyMorning)).toBe('2026-10-24');
    expect(isDateKey('2026-10-24')).toBe(true);
    expect(isDateKey('2026-02-30')).toBe(false);
    expect(isDateKey('invalid')).toBe(false);
    expect(formatFullDate('2026-10-24')).toBe('2026年10月24日');
    expect(formatWeekday('2026-10-24')).toBe('星期六');
  });
});

describe('每日抽取逻辑 (draw.ts)', () => {
  const pool = ['p1', 'p2', 'p3', 'p4'];

  it('同一天结果固定：重复调用返回同一条记录且不产生新条目', () => {
    const initial: DrawState = { history: [], round: EMPTY_ROUND };
    const first = drawForDate(initial, pool, '2026-10-24', 1000, () => 0.4);
    expect(first.created).toBe(true);
    expect(first.entry?.id).toBe('p2');

    // 同一天使用不同随机数再次抽取，结果保持不变
    const second = drawForDate(first.state, pool, '2026-10-24', 2000, () => 0.99);
    expect(second.created).toBe(false);
    expect(second.entry?.id).toBe('p2');
    expect(second.state.history.length).toBe(1);
  });

  it('跨天可重新抽取，且没打开网站的日期不补抽', () => {
    let state: DrawState = { history: [], round: EMPTY_ROUND };
    const d1 = drawForDate(state, pool, '2026-10-20', 1000, () => 0);
    state = d1.state;
    // 跳过 21、22、23 日，直接在 24 日打开
    const d2 = drawForDate(state, pool, '2026-10-24', 5000, () => 0);
    state = d2.state;

    expect(state.history.map((h) => h.date)).toEqual(['2026-10-20', '2026-10-24']);
    expect(d1.entry?.id).not.toBe(d2.entry?.id);
  });

  it('一轮内不重复，全部抽完后开启新一轮，且新一轮第一条避开上一轮最后一条', () => {
    let state: DrawState = { history: [], round: EMPTY_ROUND };
    const drawnInRound1: string[] = [];

    for (let i = 0; i < pool.length; i++) {
      const date = '2026-10-0' + (i + 1);
      const res = drawForDate(state, pool, date, (i + 1) * 1000, () => 0);
      expect(res.created).toBe(true);
      expect(res.newRound).toBe(false);
      expect(drawnInRound1).not.toContain(res.entry!.id);
      drawnInRound1.push(res.entry!.id);
      state = res.state;
    }

    expect(drawnInRound1.length).toBe(pool.length);
    const lastOfRound1 = drawnInRound1[drawnInRound1.length - 1];
    expect(state.round.lastId).toBe(lastOfRound1);

    // 第 5 天开启第 2 轮：即使随机数传 0 或接近 1，第一条也绝不等于 lastOfRound1
    for (const r of [0, 0.2, 0.5, 0.75, 0.999]) {
      const nextRound = drawForDate(state, pool, '2026-10-05', 9000, () => r);
      expect(nextRound.created).toBe(true);
      expect(nextRound.newRound).toBe(true);
      expect(nextRound.state.round.number).toBe(2);
      expect(nextRound.entry!.id).not.toBe(lastOfRound1);
    }
  });

  it('空内容池和单条内容池边界处理正常', () => {
    const initial: DrawState = { history: [], round: EMPTY_ROUND };

    // 空内容池
    const emptyRes = drawForDate(initial, [], '2026-10-24', 1000, () => 0.5);
    expect(emptyRes.entry).toBeNull();
    expect(emptyRes.created).toBe(false);

    // 单条内容池：第 1 天与第 2 天（新一轮）都能正常抽到唯一那条
    const singlePool = ['only-one'];
    const day1 = drawForDate(initial, singlePool, '2026-10-24', 1000, () => 0);
    expect(day1.entry?.id).toBe('only-one');
    const day2 = drawForDate(day1.state, singlePool, '2026-10-25', 2000, () => 0);
    expect(day2.entry?.id).toBe('only-one');
    expect(day2.newRound).toBe(true);
    expect(day2.state.round.number).toBe(2);
  });

  it('历史记录按日期倒序排列', () => {
    const sorted = sortHistoryDesc([
      { date: '2026-10-01', id: 'a', drawnAt: 1 },
      { date: '2026-10-05', id: 'b', drawnAt: 2 },
      { date: '2026-10-03', id: 'c', drawnAt: 3 },
    ]);
    expect(sorted.map((s) => s.date)).toEqual([
      '2026-10-05',
      '2026-10-03',
      '2026-10-01',
    ]);
  });
});

describe('内容数据库完整性 (proverbs.ts)', () => {
  it('提供不少于 30 条完整中文内容，ID 唯一且涵盖全部 6 大分类', () => {
    expect(PROVERBS.length).toBeGreaterThanOrEqual(30);
    expect(DEFAULT_REPO.ids.length).toBe(PROVERBS.length);

    const categoryCount: Record<string, number> = {};
    for (const p of PROVERBS) {
      expect(p.id).toMatch(/^[a-z0-9-]+$/);
      expect(p.text.length).toBeGreaterThanOrEqual(3);
      expect(p.plainExplanation.length).toBeGreaterThanOrEqual(15);
      expect(p.storyTitle.length).toBeGreaterThanOrEqual(4);
      expect(p.story.length).toBe(4);
      expect(p.story.map((s) => s.beat)).toEqual(['cause', 'action', 'result', 'point']);
      for (const panel of p.story) {
        expect(panel.text.length).toBeGreaterThanOrEqual(10);
      }
      expect(p.interpretation.length).toBeGreaterThanOrEqual(30);
      expect(p.limits.length).toBeGreaterThanOrEqual(30);
      expect(p.reflectionQuestion.length).toBeGreaterThanOrEqual(15);
      expect(p.source.length).toBeGreaterThanOrEqual(4);
      categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
    }

    for (const cat of CATEGORIES) {
      expect(categoryCount[cat.key]).toBeGreaterThan(0);
    }
  });
});
