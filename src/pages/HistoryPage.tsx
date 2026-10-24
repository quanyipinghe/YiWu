/**
 * 足迹页（每日抽取历史记录）。
 *
 * 功能与焦点规则：
 * - 按抽取日期倒序展示（没打开网站的日期不补抽）。
 * - 分页展示（每页 5 条），避免电视屏幕上出现无限长列表。
 * - 每条显示本地抽取日期、星期、原句、主要类型与白话摘要。
 * - 页码保存在当前路由项 state 中，从详情页返回时自动恢复原页码与原卡片焦点。
 */
import { useLayoutEffect, useMemo, useRef } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter } from '../app/router';
import { categoryLabel } from '../data/content';
import type { Proverb } from '../data/types';
import { formatFullDate, formatWeekday } from '../domain/date';
import { sortHistoryDesc, type HistoryEntry } from '../domain/draw';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup, usePageFocus, useTv } from '../tv/TvContext';

export const HISTORY_PAGE_SIZE = 5;

interface ResolvedHistoryItem {
  entry: HistoryEntry;
  proverb: Proverb;
  focusId: string;
}

export function HistoryPage(): JSX.Element {
  const { repo, data } = useAppState();
  const { current, push, updateState, navigateRoot } = useRouter();
  const { focus } = useTv();

  // 按日期倒序排列并过滤掉未知内容 ID
  const items = useMemo<ResolvedHistoryItem[]>(() => {
    const sorted = sortHistoryDesc(data.history);
    const out: ResolvedHistoryItem[] = [];
    for (let i = 0; i < sorted.length; i++) {
      const entry = sorted[i];
      const p = repo.get(entry.id);
      if (p) {
        out.push({
          entry,
          proverb: p,
          focusId: 'history-item-' + entry.date,
        });
      }
    }
    return out;
  }, [data.history, repo]);

  const totalPages = Math.max(1, Math.ceil(items.length / HISTORY_PAGE_SIZE));
  const rawPage =
    typeof current.state.page === 'number' && current.state.page >= 1
      ? Math.floor(current.state.page)
      : 1;
  const page = Math.min(rawPage, totalPages);

  const pageItems = useMemo(() => {
    const start = (page - 1) * HISTORY_PAGE_SIZE;
    return items.slice(start, start + HISTORY_PAGE_SIZE);
  }, [items, page]);

  const pendingFocusRef = useRef<string[] | null>(null);

  usePageFocus('history', () => {
    if (pageItems.length > 0) {
      return [pageItems[0].focusId];
    }
    return ['history-empty-action'];
  });

  useFocusGroup('history-list', {
    layout: 'vertical',
    exits: {
      left: '@group:nav',
      right: null,
      up: null,
      down: totalPages > 1 ? '@group:history-pager' : null,
    },
    enterTo: 'first',
  });

  useFocusGroup('history-pager', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: pageItems.length > 0 ? pageItems[pageItems.length - 1].focusId : null,
      down: null,
    },
    enterTo: 'first',
  });

  useLayoutEffect(() => {
    const targets = pendingFocusRef.current;
    if (!targets) return;
    pendingFocusRef.current = null;
    if (!focus.focusFirst(targets)) {
      focus.queueFocus(targets);
    }
  }, [page, pageItems, focus]);

  const changePage = (nextPage: number, preferredButton: string) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return;
    const nextStart = (nextPage - 1) * HISTORY_PAGE_SIZE;
    const firstOnNext = items[nextStart];
    const canStayOnButton =
      (preferredButton === 'history-prev' && nextPage > 1) ||
      (preferredButton === 'history-next' && nextPage < totalPages);
    const otherButton =
      preferredButton === 'history-prev' ? 'history-next' : 'history-prev';
    pendingFocusRef.current = canStayOnButton
      ? [preferredButton, otherButton, firstOnNext ? firstOnNext.focusId : '']
      : [otherButton, firstOnNext ? firstOnNext.focusId : ''];
    focus.forget('history');
    updateState({ page: nextPage });
  };

  return (
    <section className="page-section history-page" aria-label="每日足迹">
      <div className="page-top-bar">
        <div>
          <h2 className="section-title">每日足迹</h2>
          <p className="section-subtitle">
            已记录 {items.length} 天 · 当前第 {data.round.number} 轮（本轮已读{' '}
            {data.round.usedIds.length} / {repo.all.length} 句）
          </p>
        </div>
        {totalPages > 1 ? (
          <div className="page-indicator" data-testid="history-page-indicator">
            第 {page} / {totalPages} 页
          </div>
        ) : null}
      </div>

      {pageItems.length === 0 ? (
        <div className="empty-card" data-testid="history-empty">
          <h3 className="empty-title">还没有抽取记录</h3>
          <p className="empty-desc">
            每天打开「今日」页面抽取一句老话，你的阅读足迹会按日期记录在这里。
          </p>
          <FocusButton
            focusId="history-empty-action"
            group="history-list"
            variant="primary"
            onPress={() => navigateRoot('today')}
            nav={{
              left: '@group:nav',
              right: null,
              up: null,
              down: null,
            }}
          >
            去抽取今日一悟
          </FocusButton>
        </div>
      ) : (
        <>
          <ul className="history-card-list" data-testid="history-list">
            {pageItems.map((item, idx) => {
              const upId = idx > 0 ? pageItems[idx - 1].focusId : null;
              const downId =
                idx < pageItems.length - 1
                  ? pageItems[idx + 1].focusId
                  : totalPages > 1
                    ? page > 1
                      ? 'history-prev'
                      : 'history-next'
                    : null;
              return (
                <li
                  key={item.entry.date}
                  className="history-card-row"
                  data-testid={'history-row-' + item.entry.date}
                >
                  <FocusButton
                    focusId={item.focusId}
                    group="history-list"
                    variant="card"
                    onPress={() => push({ name: 'detail', id: item.proverb.id })}
                    nav={{
                      left: '@group:nav',
                      right: null,
                      up: upId,
                      down: downId,
                    }}
                  >
                    <div className="card-row-header">
                      <span className="history-date-badge">
                        {formatFullDate(item.entry.date)}{' '}
                        {formatWeekday(item.entry.date)}
                      </span>
                      <span className="category-badge">
                        {categoryLabel(item.proverb.category)}
                      </span>
                    </div>
                    <div className="history-main-line">
                      <span className="card-row-title">{item.proverb.text}</span>
                      <span className="history-read-more">查看详情 →</span>
                    </div>
                  </FocusButton>
                </li>
              );
            })}
          </ul>

          {totalPages > 1 ? (
            <div className="pager-bar" role="navigation" aria-label="足迹分页">
              <FocusButton
                focusId="history-prev"
                group="history-pager"
                variant="default"
                disabled={page <= 1}
                onPress={() => changePage(page - 1, 'history-prev')}
                nav={{
                  left: '@group:nav',
                  right: page < totalPages ? 'history-next' : null,
                  up: pageItems[pageItems.length - 1].focusId,
                  down: null,
                }}
              >
                ← 上一页
              </FocusButton>

              <span className="pager-status" data-testid="pager-status">
                第 {page} 页，共 {totalPages} 页
              </span>

              <FocusButton
                focusId="history-next"
                group="history-pager"
                variant="default"
                disabled={page >= totalPages}
                onPress={() => changePage(page + 1, 'history-next')}
                nav={{
                  left: page > 1 ? 'history-prev' : '@group:nav',
                  right: null,
                  up: pageItems[pageItems.length - 1].focusId,
                  down: null,
                }}
              >
                下一页 →
              </FocusButton>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
