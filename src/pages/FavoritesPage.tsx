/**
 * 收藏页。
 *
 * 功能与焦点规则：
 * - 顶部分类筛选（全部 + 六大主要类型），状态保存在当前路由项中，从详情返回时保持原筛选与页码。
 * - 仅读取轻量摘要（ProverbSummary）并采用分页展示（每页 6 条），避免收藏增多后一次性渲染长列表。
 * - 每张收藏卡片提供「查看详情」(fav-open-{id}) 与「取消收藏」(fav-remove-{id})。
 * - 从详情页返回列表时，自动恢复原卡片焦点与滚动位置。
 * - 切换筛选条件导致原元素消失时，焦点保持在当前筛选项或第一个结果。
 * - 删除当前收藏后，立即聚焦相邻卡片（优先下一张，无下一张则上一张）；
 *   若列表变为空，则聚焦空状态操作按钮 (fav-empty-action)。
 */
import { useLayoutEffect, useMemo, useRef } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter } from '../app/router';
import { CATEGORIES, categoryLabel } from '../data/content';
import type { ProverbCategory, ProverbSummary } from '../data/types';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup, usePageFocus, useTv } from '../tv/TvContext';

export const FAVORITES_PAGE_SIZE = 6;

type FilterKey = 'all' | ProverbCategory;

interface FilterOption {
  key: FilterKey;
  label: string;
  focusId: string;
}

const FILTER_OPTIONS: FilterOption[] = [
  { key: 'all', label: '全部', focusId: 'fav-filter-all' },
  ...CATEGORIES.map((c) => ({
    key: c.key as FilterKey,
    label: c.label,
    focusId: 'fav-filter-' + c.key,
  })),
];

export function FavoritesPage(): JSX.Element {
  const { repo, data, removeFavorite } = useAppState();
  const { current, push, updateState, navigateRoot } = useRouter();
  const { focus } = useTv();

  const activeCategory: FilterKey =
    typeof current.state.category === 'string'
      ? (current.state.category as FilterKey)
      : 'all';

  // 解析有效收藏条目（仅读取轻量摘要，忽略未知内容 ID，防止旧数据崩溃）
  const allFavorites = useMemo(() => {
    const list: ProverbSummary[] = [];
    for (let i = 0; i < data.favorites.length; i++) {
      const s = repo.getSummary(data.favorites[i].id);
      if (s) list.push(s);
    }
    return list;
  }, [data.favorites, repo]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return allFavorites;
    return allFavorites.filter((item) => item.category === activeCategory);
  }, [allFavorites, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / FAVORITES_PAGE_SIZE));
  const rawPage =
    typeof current.state.page === 'number' && current.state.page >= 1
      ? Math.floor(current.state.page)
      : 1;
  const page = Math.min(rawPage, totalPages);

  const pageItems = useMemo(() => {
    const start = (page - 1) * FAVORITES_PAGE_SIZE;
    return filtered.slice(start, start + FAVORITES_PAGE_SIZE);
  }, [filtered, page]);

  // 待执行的焦点恢复队列（删除收藏、切换筛选或翻页后在 useLayoutEffect 中同步执行）
  const pendingFocusRef = useRef<string[] | null>(null);

  usePageFocus('favorites', () => {
    if (pageItems.length > 0) {
      return ['fav-open-' + pageItems[0].id, 'fav-filter-' + activeCategory];
    }
    return ['fav-empty-action', 'fav-filter-' + activeCategory, 'fav-filter-all'];
  });

  useFocusGroup('fav-filters', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: null,
      down: pageItems.length > 0 ? 'fav-open-' + pageItems[0].id : 'fav-empty-action',
    },
    enterTo: 'selected',
  });

  useFocusGroup('fav-list', {
    layout: 'vertical',
    exits: {
      left: '@group:nav',
      right: null,
      up: 'fav-filter-' + activeCategory,
      down: totalPages > 1 ? '@group:fav-pager' : null,
    },
    enterTo: 'first',
  });

  useFocusGroup('fav-pager', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: pageItems.length > 0 ? 'fav-open-' + pageItems[pageItems.length - 1].id : null,
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
  }, [pageItems, activeCategory, page, focus]);

  const handleSelectFilter = (nextCat: FilterKey) => {
    const nextList =
      nextCat === 'all'
        ? allFavorites
        : allFavorites.filter((item) => item.category === nextCat);
    const remembered = focus.getRemembered('favorites');
    if (remembered && remembered.indexOf('fav-open-') === 0) {
      const remId = remembered.slice('fav-open-'.length);
      const stillVisible = nextList.some((p) => p.id === remId);
      if (!stillVisible) {
        focus.forget('favorites');
      }
    }
    pendingFocusRef.current = [
      'fav-filter-' + nextCat,
      nextList.length > 0 ? 'fav-open-' + nextList[0].id : 'fav-empty-action',
    ];
    updateState({ category: nextCat, page: 1 });
  };

  const handleRemove = (indexInPage: number, id: string) => {
    const globalIdx = (page - 1) * FAVORITES_PAGE_SIZE + indexInPage;
    const nextItem = globalIdx + 1 < filtered.length ? filtered[globalIdx + 1] : null;
    const prevItem = globalIdx - 1 >= 0 ? filtered[globalIdx - 1] : null;
    const targets: string[] = [];
    if (nextItem) {
      targets.push('fav-open-' + nextItem.id);
    }
    if (prevItem) {
      targets.push('fav-open-' + prevItem.id);
    }
    targets.push('fav-empty-action', 'fav-filter-' + activeCategory, 'fav-filter-all');
    focus.forget('favorites');
    pendingFocusRef.current = targets;
    removeFavorite(id);
  };

  const changePage = (nextPage: number, preferredButton: string) => {
    if (nextPage < 1 || nextPage > totalPages || nextPage === page) return;
    const nextStart = (nextPage - 1) * FAVORITES_PAGE_SIZE;
    const firstOnNext = filtered[nextStart];
    const canStayOnButton =
      (preferredButton === 'fav-prev' && nextPage > 1) ||
      (preferredButton === 'fav-next' && nextPage < totalPages);
    const otherButton = preferredButton === 'fav-prev' ? 'fav-next' : 'fav-prev';
    pendingFocusRef.current = canStayOnButton
      ? [preferredButton, otherButton, firstOnNext ? 'fav-open-' + firstOnNext.id : '']
      : [otherButton, firstOnNext ? 'fav-open-' + firstOnNext.id : ''];
    focus.forget('favorites');
    updateState({ page: nextPage });
  };

  return (
    <section className="page-section favorites-page" aria-label="我的收藏">
      <div className="page-top-bar">
        <div>
          <h2 className="section-title">我的收藏</h2>
          <p className="section-subtitle">
            共收藏 {allFavorites.length} 句老话 · 按分类筛选即可快速查找
          </p>
        </div>
        {totalPages > 1 ? (
          <div className="page-indicator" data-testid="favorites-page-indicator">
            第 {page} / {totalPages} 页
          </div>
        ) : null}
      </div>

      {/* 分类筛选栏 */}
      <div className="filter-bar" role="toolbar" aria-label="按类型筛选收藏">
        {FILTER_OPTIONS.map((opt, idx) => {
          const isSelected = activeCategory === opt.key;
          const prevId = idx > 0 ? FILTER_OPTIONS[idx - 1].focusId : '@group:nav';
          const nextId =
            idx < FILTER_OPTIONS.length - 1 ? FILTER_OPTIONS[idx + 1].focusId : null;
          const downTarget =
            pageItems.length > 0 ? 'fav-open-' + pageItems[0].id : 'fav-empty-action';
          return (
            <FocusButton
              key={opt.key}
              focusId={opt.focusId}
              group="fav-filters"
              variant="chip"
              selected={isSelected}
              onPress={() => handleSelectFilter(opt.key)}
              nav={{
                left: prevId,
                right: nextId,
                up: null,
                down: downTarget,
              }}
            >
              {opt.label}
            </FocusButton>
          );
        })}
      </div>

      {/* 列表或空状态 */}
      {pageItems.length === 0 ? (
        <div className="empty-card" data-testid="favorites-empty">
          <h3 className="empty-title">
            {allFavorites.length === 0
              ? '还没有收藏的老话'
              : '该分类下暂无收藏'}
          </h3>
          <p className="empty-desc">
            {allFavorites.length === 0
              ? '在「今日」或「详情」页面遇到有感触的老话，按「收藏」即可保存在这里。'
              : '可以切换到「全部」或其他分类查看已收藏的内容。'}
          </p>
          <FocusButton
            focusId="fav-empty-action"
            group="fav-list"
            variant="primary"
            onPress={() => {
              if (allFavorites.length === 0) {
                navigateRoot('today');
              } else {
                handleSelectFilter('all');
              }
            }}
            nav={{
              left: '@group:nav',
              right: null,
              up: 'fav-filter-' + activeCategory,
              down: null,
            }}
          >
            {allFavorites.length === 0 ? '去今日一悟看看' : '查看全部收藏'}
          </FocusButton>
        </div>
      ) : (
        <>
          <ul className="fav-card-list" data-testid="favorites-list">
            {pageItems.map((item, idx) => {
              const openId = 'fav-open-' + item.id;
              const removeId = 'fav-remove-' + item.id;
              const upOpen =
                idx > 0
                  ? 'fav-open-' + pageItems[idx - 1].id
                  : 'fav-filter-' + activeCategory;
              const downOpen =
                idx < pageItems.length - 1
                  ? 'fav-open-' + pageItems[idx + 1].id
                  : totalPages > 1
                    ? page > 1
                      ? 'fav-prev'
                      : 'fav-next'
                    : null;
              const upRemove =
                idx > 0
                  ? 'fav-remove-' + pageItems[idx - 1].id
                  : 'fav-filter-' + activeCategory;
              const downRemove =
                idx < pageItems.length - 1
                  ? 'fav-remove-' + pageItems[idx + 1].id
                  : totalPages > 1
                    ? page > 1
                      ? 'fav-prev'
                      : 'fav-next'
                    : null;

              return (
                <li
                  key={item.id}
                  className="fav-card-row"
                  data-testid={'fav-item-' + item.id}
                >
                  <FocusButton
                    focusId={openId}
                    group="fav-list"
                    variant="card"
                    onPress={() => push({ name: 'detail', id: item.id })}
                    nav={{
                      left: '@group:nav',
                      right: removeId,
                      up: upOpen,
                      down: downOpen,
                    }}
                  >
                    <div className="card-row-header">
                      <span className="card-row-title">{item.text}</span>
                      <span className="category-badge">
                        {categoryLabel(item.category)}
                      </span>
                    </div>
                    <p className="card-row-desc">{item.plainExplanation}</p>
                  </FocusButton>

                  <FocusButton
                    focusId={removeId}
                    group="fav-list"
                    variant="ghost"
                    ariaLabel={'取消收藏 ' + item.text}
                    onPress={() => handleRemove(idx, item.id)}
                    nav={{
                      left: openId,
                      right: null,
                      up: upRemove,
                      down: downRemove,
                    }}
                  >
                    取消收藏
                  </FocusButton>
                </li>
              );
            })}
          </ul>

          {totalPages > 1 ? (
            <div className="pager-bar" role="navigation" aria-label="收藏分页">
              <FocusButton
                focusId="fav-prev"
                group="fav-pager"
                variant="default"
                disabled={page <= 1}
                onPress={() => changePage(page - 1, 'fav-prev')}
                nav={{
                  left: '@group:nav',
                  right: page < totalPages ? 'fav-next' : null,
                  up: 'fav-open-' + pageItems[pageItems.length - 1].id,
                  down: null,
                }}
              >
                ← 上一页
              </FocusButton>

              <span className="pager-status" data-testid="fav-pager-status">
                第 {page} 页，共 {totalPages} 页
              </span>

              <FocusButton
                focusId="fav-next"
                group="fav-pager"
                variant="default"
                disabled={page >= totalPages}
                onPress={() => changePage(page + 1, 'fav-next')}
                nav={{
                  left: page > 1 ? 'fav-prev' : '@group:nav',
                  right: null,
                  up: 'fav-open-' + pageItems[pageItems.length - 1].id,
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
