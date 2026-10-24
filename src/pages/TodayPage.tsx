/**
 * 今日页（首页）。
 *
 * 功能与焦点规则：
 * - 未抽签：展示未揭晓签卡，默认聚焦「抽取今日一悟」(today-draw)。
 * - 已抽签：展示今日老话、主要类型、辅助标签、白话解释，
 *   默认聚焦「读懂这句话」(today-read)，右侧为「收藏 / 取消收藏」(today-favorite)。
 * - 同一天刷新或重开结果固定，不提供换签。
 * - 抽签后立即切换到揭晓视图并将焦点移至「读懂这句话」；
 *   动画仅使用轻量 CSS 淡入，在「减少动画」偏好下直接静态展示。
 */
import { useLayoutEffect, useRef, useState } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter } from '../app/router';
import { categoryLabel } from '../data/content';
import { formatFullDate, formatWeekday } from '../domain/date';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup, usePageFocus, useTv } from '../tv/TvContext';

export function TodayPage(): JSX.Element {
  const {
    repo,
    today,
    todayEntry,
    data,
    motion,
    draw,
    isFavorite,
    toggleFavorite,
  } = useAppState();
  const { push } = useRouter();
  const { focus } = useTv();

  const proverb = todayEntry ? repo.get(todayEntry.id) : null;
  const justDrewRef = useRef(false);
  const drawingLockRef = useRef(false);
  const [revealing, setRevealing] = useState(false);

  // 页面默认焦点：未抽签聚焦 today-draw，已抽签聚焦 today-read
  usePageFocus('today', () => {
    if ( repo.all.length === 0 ) return ['nav-today'];
    return proverb ? ['today-read', 'today-favorite'] : ['today-draw'];
  });

  useFocusGroup('today-actions', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: null,
      down: null,
    },
    enterTo: 'first',
  });

  // 刚完成抽签时，立即将焦点移到合理的下一步操作「读懂这句话」
  useLayoutEffect(() => {
    if (justDrewRef.current && proverb) {
      justDrewRef.current = false;
      focus.forget('today');
      if (!focus.focus('today-read')) {
        focus.queueFocus(['today-read']);
      }
    }
  }, [proverb, focus]);

  const handleDraw = () => {
    if (drawingLockRef.current || proverb) return;
    drawingLockRef.current = true;
    justDrewRef.current = true;
    if (motion === 'full') {
      setRevealing(true);
    }
    draw();
    drawingLockRef.current = false;
  };

  // 空内容池兜底
  if (repo.all.length === 0) {
    return (
      <section className="page-section today-page" aria-label="今日一悟">
        <div className="empty-card">
          <h2 className="empty-title">暂无内容</h2>
          <p className="empty-desc">当前内容池为空，请补充内容数据后再试。</p>
        </div>
      </section>
    );
  }

  const favored = proverb ? isFavorite(proverb.id) : false;

  return (
    <section className="page-section today-page" aria-label="今日一悟">
      <div className="today-stage">
        {!proverb ? (
          /* 未揭晓签卡 */
          <div className="proverb-card unrevealed-card" data-testid="unrevealed-card">
            <div className="card-top-meta">
              <span className="meta-pill">每日一签 · 第 {data.round.number} 轮</span>
              <span className="meta-date">
                {formatFullDate(today)} · {formatWeekday(today)}
              </span>
            </div>

            <div className="unrevealed-emblem" aria-hidden="true">
              <span>一</span>
              <span>日</span>
              <span>一</span>
              <span>悟</span>
            </div>

            <h2 className="unrevealed-title">今日老话尚未揭晓</h2>
            <p className="unrevealed-desc">
              每天只抽一句。花一两分钟，通过一个小故事和适用边界，看懂一句老话。
            </p>

            <div className="today-action-row">
              <FocusButton
                focusId="today-draw"
                group="today-actions"
                variant="primary"
                onPress={handleDraw}
                nav={{
                  left: '@group:nav',
                  right: null,
                  up: null,
                  down: null,
                }}
              >
                抽取今日一悟
              </FocusButton>
            </div>

            <p className="remote-inline-hint">
              提示：按遥控器「确认 / OK」键抽取，同一天结果固定不变。
            </p>
          </div>
        ) : (
          /* 已揭晓签卡 */
          <article
            className={
              'proverb-card revealed-card' +
              (revealing && motion === 'full' ? ' is-revealing' : '')
            }
            data-testid="revealed-card"
            data-proverb-id={proverb.id}
          >
            <div className="card-top-meta">
              <div className="badge-group">
                <span className="category-badge" data-testid="today-category">
                  {categoryLabel(proverb.category)}
                </span>
                {proverb.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="meta-date">
                {formatFullDate(today)} · 已抽取
              </span>
            </div>

            <h2 className="proverb-main-text" data-testid="today-proverb-text">
              {proverb.text}
            </h2>

            <div className="plain-explanation-box">
              <div className="box-label">白话解释</div>
              <p className="plain-explanation-text" data-testid="today-plain-explanation">
                {proverb.plainExplanation}
              </p>
            </div>

            <div className="today-action-row">
              <FocusButton
                focusId="today-read"
                group="today-actions"
                variant="primary"
                onPress={() => push({ name: 'detail', id: proverb.id })}
                nav={{
                  left: '@group:nav',
                  right: 'today-favorite',
                  up: null,
                  down: null,
                }}
              >
                读懂这句话
              </FocusButton>

              <FocusButton
                focusId="today-favorite"
                group="today-actions"
                variant="default"
                selected={favored}
                selectedKind="pressed"
                onPress={() => toggleFavorite(proverb.id)}
                nav={{
                  left: 'today-read',
                  right: null,
                  up: null,
                  down: null,
                }}
              >
                {favored ? '★ 已收藏（按确认取消）' : '☆ 收藏这句话'}
              </FocusButton>
            </div>

            <p className="remote-inline-hint">
              提示：按「读懂这句话」分段查看四格故事与适用边界；按左键可回到左侧主导航。
            </p>
          </article>
        )}
      </div>
    </section>
  );
}
