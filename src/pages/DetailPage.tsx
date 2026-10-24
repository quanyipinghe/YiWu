/**
 * 详情页：分段阅读一句老话。
 *
 * 三个阅读步骤（不在一屏内堆积全部长文）：
 * - 第一步（1/3）：原句 + 白话解释
 * - 第二步（2/3）：四格生活故事（起因、选择、结果、点题，明确标注「虚构生活情境」）
 * - 第三步（3/3）：深入解释 + 适用边界 + 思考问题 + 来源与核实状态
 *
 * 阅读滚动模式：
 * - 提供可聚焦的「阅读滚动模式」入口（detail-read-area）。
 * - 按确认（Enter）进入阅读滚动模式，上下方向键滚动正文容器。
 * - 按返回键（Esc/Back）或再次按确认点击可见的「结束阅读滚动模式」按钮退出，
 *   绝不形成无法退出的焦点陷阱。
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter } from '../app/router';
import { BEAT_LABELS, categoryLabel, SOURCE_STATUS_LABELS } from '../data/content';
import { SceneIllustration } from '../components/SceneIllustration';
import { FocusButton } from '../tv/FocusButton';
import {
  useBackHandler,
  useFocusGroup,
  useInputLayer,
  usePageFocus,
  useTv,
} from '../tv/TvContext';

export interface DetailPageProps {
  id: string;
  onReadingModeChange?: (active: boolean) => void;
}

const STEP_TITLES = [
  '第一步：原句与白话解释',
  '第二步：四格生活故事',
  '第三步：深入解释与适用边界',
];

export function DetailPage(props: DetailPageProps): JSX.Element {
  const { repo, isFavorite, toggleFavorite } = useAppState();
  const { back } = useRouter();
  const { focus } = useTv();

  const proverb = repo.get(props.id);
  const [step, setStep] = useState<number>(0);
  const [readingMode, setReadingMode] = useState<boolean>(false);
  const articleRef = useRef<HTMLDivElement>(null);

  // 同步阅读滚动模式状态给外层（用于底部提示与调试面板）
  useEffect(() => {
    if (props.onReadingModeChange) {
      props.onReadingModeChange(readingMode);
    }
    return () => {
      if (props.onReadingModeChange) {
        props.onReadingModeChange(false);
      }
    };
  }, [readingMode, props]);

  // 页面默认焦点
  usePageFocus('detail:' + props.id, () => {
    if (!proverb) return ['detail-back-empty'];
    return ['detail-next', 'detail-back', 'detail-step-1'];
  });

  useFocusGroup('detail-steps', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: null,
      down: 'detail-read-area',
    },
    enterTo: 'selected',
  });

  useFocusGroup('detail-reader', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: '@group:detail-steps',
      down: '@group:detail-actions',
    },
    enterTo: 'first',
  });

  useFocusGroup('detail-actions', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: 'detail-read-area',
      down: null,
    },
    enterTo: 'first',
  });

  // 阅读滚动模式下的输入层：上下键滚动正文，左右键保持停留而不丢失焦点
  useInputLayer(
    (action) => {
      if (!readingMode) return false;
      const box = articleRef.current;
      if (action === 'down') {
        if (box) box.scrollTop += 120;
        return true;
      }
      if (action === 'up') {
        if (box) box.scrollTop = Math.max(0, box.scrollTop - 120);
        return true;
      }
      if (action === 'left' || action === 'right') {
        // 阅读模式下保持焦点在退出按钮上，防止跑出阅读区
        focus.focus('detail-read-area');
        return true;
      }
      return false;
    },
    readingMode,
  );

  // 阅读滚动模式下，返回键优先退出阅读模式（优先级 60 > 页面返回 20）
  useBackHandler(
    () => {
      if (!readingMode) return false;
      setReadingMode(false);
      focus.focus('detail-read-area');
      return true;
    },
    60,
    readingMode,
  );

  // 切换阅读分段时重置滚动位置，并在第三段（下一段按钮禁用）时确保焦点有效
  useLayoutEffect(() => {
    if (articleRef.current) {
      articleRef.current.scrollTop = 0;
    }
    setReadingMode(false);
    if (step === 2 && focus.getActiveId() === 'detail-next') {
      if (!focus.focus('detail-back')) {
        focus.focus('detail-prev');
      }
    } else if (step === 0 && focus.getActiveId() === 'detail-prev') {
      focus.focus('detail-next');
    }
  }, [step, focus]);

  if (!proverb) {
    return (
      <section className="page-section detail-page" aria-label="内容不存在">
        <div className="empty-card">
          <h2 className="empty-title">未找到该条内容</h2>
          <p className="empty-desc">该条老话可能已被移除或 ID 无效。</p>
          <FocusButton
            focusId="detail-back-empty"
            group="detail-actions"
            variant="primary"
            onPress={() => {
              back();
            }}
            nav={{ left: '@group:nav', right: null, up: null, down: null }}
          >
            返回上一页
          </FocusButton>
        </div>
      </section>
    );
  }

  const favored = isFavorite(proverb.id);

  return (
    <section className="page-section detail-page" aria-label="读懂这句话">
      {/* 顶部步骤切换栏 */}
      <div className="detail-step-bar" role="tablist" aria-label="阅读步骤">
        <FocusButton
          focusId="detail-step-1"
          group="detail-steps"
          variant="chip"
          selected={step === 0}
          onPress={() => setStep(0)}
          nav={{
            left: '@group:nav',
            right: 'detail-step-2',
            up: null,
            down: 'detail-read-area',
          }}
        >
          1. 原句与释义
        </FocusButton>
        <FocusButton
          focusId="detail-step-2"
          group="detail-steps"
          variant="chip"
          selected={step === 1}
          onPress={() => setStep(1)}
          nav={{
            left: 'detail-step-1',
            right: 'detail-step-3',
            up: null,
            down: 'detail-read-area',
          }}
        >
          2. 四格生活故事
        </FocusButton>
        <FocusButton
          focusId="detail-step-3"
          group="detail-steps"
          variant="chip"
          selected={step === 2}
          onPress={() => setStep(2)}
          nav={{
            left: 'detail-step-2',
            right: null,
            up: null,
            down: 'detail-read-area',
          }}
        >
          3. 边界与思考
        </FocusButton>
      </div>

      {/* 可聚焦的阅读滚动模式控制条 */}
      <div className="detail-reading-bar">
        <span className="detail-step-heading" data-testid="detail-step-heading">
          {STEP_TITLES[step]}（{step + 1} / 3）
        </span>
        <FocusButton
          focusId="detail-read-area"
          group="detail-reader"
          variant={readingMode ? 'primary' : 'ghost'}
          selected={readingMode}
          onPress={() => setReadingMode((prev) => !prev)}
          nav={{
            left: '@group:nav',
            right: null,
            up: 'detail-step-' + (step + 1),
            down: step < 2 ? 'detail-next' : 'detail-back',
          }}
        >
          {readingMode
            ? '正在阅读滚动模式（上下键滚动正文 · 按确认或返回结束阅读）'
            : '进入阅读滚动模式（按确认后可用上下键滚动正文）'}
        </FocusButton>
      </div>

      {/* 分段正文容器 */}
      <div
        ref={articleRef}
        className={'detail-article-box' + (readingMode ? ' is-reading-mode' : '')}
        data-testid="detail-article-box"
      >
        {step === 0 ? (
          <div className="detail-step-content step-1" data-testid="detail-step-content-1">
            <div className="badge-group">
              <span className="category-badge">{categoryLabel(proverb.category)}</span>
              {proverb.tags.map((tag) => (
                <span key={tag} className="tag-badge">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="detail-proverb-title" data-testid="detail-proverb-title">
              {proverb.text}
            </h2>
            <div className="detail-block">
              <h3 className="detail-block-title">白话解释</h3>
              <p className="detail-block-text">{proverb.plainExplanation}</p>
            </div>
            <div className="detail-block detail-block-subtle">
              <h3 className="detail-block-title">为什么值得细看</h3>
              <p className="detail-block-text">
                老话往往凝结了某种日常经验，但每句老话都有它的前提。接下来通过一段普通人的生活小故事，看看它在具体情境里怎么用。
              </p>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="detail-step-content step-2" data-testid="detail-step-content-2">
            <div className="story-header">
              <h2 className="story-title">{proverb.storyTitle}</h2>
              <span className="story-fiction-badge" data-testid="story-fiction-badge">
                虚构生活情境 · 仅供理解语义
              </span>
            </div>
            <div className="story-grid" role="list">
              {proverb.story.map((panel, index) => (
                <div
                  key={panel.beat}
                  className="story-panel"
                  role="listitem"
                  data-testid={'story-panel-' + (index + 1)}
                >
                  <div className="story-panel-top">
                    <span className="story-panel-num">第 {index + 1} 格</span>
                    <span className="story-panel-beat">{BEAT_LABELS[panel.beat]}</span>
                  </div>
                  <SceneIllustration scene={panel.scene} />
                  <p className="story-panel-text">{panel.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="detail-step-content step-3" data-testid="detail-step-content-3">
            <div className="detail-grid-two">
              <div className="detail-block">
                <h3 className="detail-block-title">深入理解</h3>
                <p className="detail-block-text" data-testid="detail-interpretation">
                  {proverb.interpretation}
                </p>
              </div>
              <div className="detail-block detail-block-boundary">
                <h3 className="detail-block-title">适用边界（什么时候不适用）</h3>
                <p className="detail-block-text" data-testid="detail-limits">
                  {proverb.limits}
                </p>
              </div>
            </div>

            <div className="detail-block detail-block-question">
              <h3 className="detail-block-title">想一想</h3>
              <p className="detail-block-text" data-testid="detail-question">
                {proverb.reflectionQuestion}
              </p>
            </div>

            <div className="detail-source-row" data-testid="detail-source">
              <span className="source-status-tag">
                {SOURCE_STATUS_LABELS[proverb.sourceStatus]}
              </span>
              <span className="source-text">出处说明：{proverb.source}</span>
            </div>
          </div>
        ) : null}
      </div>

      {/* 底部明确操作按钮：上一段 / 下一段 / 收藏 / 返回 */}
      <div className="detail-bottom-actions">
        <FocusButton
          focusId="detail-prev"
          group="detail-actions"
          variant="default"
          disabled={step === 0}
          onPress={() => {
            if (step > 0) setStep(step - 1);
          }}
          nav={{
            left: '@group:nav',
            right: step < 2 ? 'detail-next' : 'detail-fav',
            up: 'detail-read-area',
            down: null,
          }}
        >
          ← 上一段
        </FocusButton>

        <FocusButton
          focusId="detail-next"
          group="detail-actions"
          variant="primary"
          disabled={step === 2}
          onPress={() => {
            if (step < 2) setStep(step + 1);
          }}
          nav={{
            left: step > 0 ? 'detail-prev' : '@group:nav',
            right: 'detail-fav',
            up: 'detail-read-area',
            down: null,
          }}
        >
          {step < 2 ? '下一段 (' + (step + 2) + '/3) →' : '已是最后一段'}
        </FocusButton>

        <FocusButton
          focusId="detail-fav"
          group="detail-actions"
          variant="default"
          selected={favored}
          onPress={() => toggleFavorite(proverb.id)}
          nav={{
            left: step < 2 ? 'detail-next' : 'detail-prev',
            right: 'detail-back',
            up: 'detail-read-area',
            down: null,
          }}
        >
          {favored ? '★ 已收藏' : '☆ 收藏'}
        </FocusButton>

        <FocusButton
          focusId="detail-back"
          group="detail-actions"
          variant="default"
          onPress={() => {
            back();
          }}
          nav={{
            left: 'detail-fav',
            right: null,
            up: 'detail-read-area',
            down: null,
          }}
        >
          返回
        </FocusButton>
      </div>
    </section>
  );
}
