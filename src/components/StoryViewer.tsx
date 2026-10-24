/**
 * 多布局故事呈现组件（StoryViewer）。
 *
 * 支持四种可辨识联合类型（StoryStructure）：
 * 1. four-panel：四格生活故事（起因、选择、结果、点题）
 * 2. contrast：前后对照（同一处境下的两种做法与不同结果）
 * 3. branch：选择分支（一个处境引出两条分支选择）
 * 4. timeline：时间推进（随时间推移的积累与变化）
 *
 * 多端交互适配：
 * - TV 模式：高亮当前画格并放大展示，提供明确的「上一格 / 下一格」遥控器可聚焦按钮，
 *   底部显示进度（如「故事 2 / 4」）；方向键仅用于移动焦点，不与翻页冲突。
 * - PC 普通模式：2×2 网格或双栏对照展示，支持鼠标与 Tab 键切换。
 * - 手机普通模式：支持纵向通览或逐格查看，支持水平轻扫手势（不阻碍纵向滚动）并保留可见按钮。
 */
import React, { useRef, useState } from 'react';
import { BEAT_LABELS } from '../data/content';
import type { Proverb, StoryBeat, StoryStructure } from '../data/types';
import { FocusButton } from '../tv/FocusButton';
import { useFocusGroup } from '../tv/TvContext';
import { SceneIllustration } from './SceneIllustration';

export interface StoryViewerProps {
  proverb: Proverb;
  mode: 'tv' | 'normal';
  /** TV 模式下向上离开故事控制栏的目标 focusId */
  upTarget?: string;
  /** TV 模式下向下离开故事控制栏的目标 focusId */
  downTarget?: string;
}

const LAYOUT_BADGE_LABELS: Record<StoryStructure['layout'], string> = {
  'four-panel': '四格故事',
  contrast: '前后对照',
  branch: '选择分支',
  timeline: '时间推进',
};

/** 获取条目的结构化故事定义（默认回退为 four-panel） */
export function getStoryStructure(proverb: Proverb): StoryStructure {
  if (proverb.storyStructure) {
    return proverb.storyStructure;
  }
  return {
    layout: 'four-panel',
    panels: proverb.story,
  };
}

export function StoryViewer(props: StoryViewerProps): JSX.Element {
  const { proverb, mode } = props;
  const structure = getStoryStructure(proverb);
  const totalFrames = 4;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileSingleView, setMobileSingleView] = useState<boolean>(false);

  // 触摸滑动手势记录（仅识别明显的水平滑动，绝不阻止垂直滚动）
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  useFocusGroup('detail-story-controls', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: props.upTarget || 'detail-read-area',
      down: props.downTarget || 'detail-next',
    },
    enterTo: 'first',
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < totalFrames - 1 ? prev + 1 : totalFrames - 1));
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current || !e.changedTouches || e.changedTouches.length !== 1) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.x;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.y;
    touchStartRef.current = null;
    // 仅当水平位移超过 48px 且大于垂直位移 1.6 倍时才触发切格，不影响上下滚动
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.6) {
      if (dx < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const activePanel = proverb.story[activeIndex] || proverb.story[0];

  return (
    <div
      className={
        'story-viewer story-layout-' +
        structure.layout +
        (mode === 'tv' ? ' is-tv-story' : ' is-normal-story') +
        (mobileSingleView ? ' is-mobile-single' : '')
      }
      data-testid="story-viewer"
      data-story-layout={structure.layout}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* 故事头部信息 */}
      <div className="story-header">
        <div className="story-title-group">
          <h2 className="story-title">{proverb.storyTitle}</h2>
          <span className="story-layout-badge" data-testid="story-layout-badge">
            {LAYOUT_BADGE_LABELS[structure.layout]}
          </span>
        </div>
        <span className="story-fiction-badge" data-testid="story-fiction-badge">
          虚构生活情境 · 仅供理解语义
        </span>
      </div>

      {/* TV 模式焦点舞台：突出展示当前选中画格的大图与大字 */}
      {mode === 'tv' ? (
        <div className="tv-story-spotlight" data-testid="tv-story-spotlight">
          <div className="tv-spotlight-header">
            <span className="story-panel-num">
              当前焦点画格：第 {activeIndex + 1} / {totalFrames} 格
            </span>
            <span className="story-panel-beat">
              {BEAT_LABELS[activePanel.beat]}
            </span>
          </div>
          <div className="tv-spotlight-body">
            <div className="tv-spotlight-visual">
              <SceneIllustration
                scene={activePanel.scene}
                beat={activePanel.beat}
                visual={activePanel.visual}
                storySeed={proverb.id}
              />
            </div>
            <div className="tv-spotlight-text-wrap">
              <p className="tv-spotlight-text" data-testid="tv-spotlight-text">
                {activePanel.text}
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* 按可辨识联合类型渲染不同故事结构 */}
      {structure.layout === 'contrast' ? (
        <div className="story-contrast-container" data-testid="story-layout-contrast">
          <div className="story-contrast-premise">
            <div className="story-contrast-premise-visual">
              <SceneIllustration
                scene={structure.premiseScene}
                beat="cause"
                visual={structure.premiseVisual}
                storySeed={proverb.id + '-premise'}
              />
            </div>
            <div className="story-contrast-premise-body">
              <span className="story-section-tag">共同处境</span>
              <p className="story-panel-text">{structure.premise}</p>
            </div>
          </div>

          <div className="story-contrast-columns">
            <div className={'story-contrast-side side-' + structure.left.tone}>
              <div className="story-contrast-side-header">
                <span className="story-contrast-label">{structure.left.label}</span>
              </div>
              <SceneIllustration
                scene={structure.left.scene}
                beat="action"
                visual={structure.left.visual}
                storySeed={proverb.id + '-left'}
              />
              <p className="story-contrast-action">
                <strong>做法：</strong>
                {structure.left.action}
              </p>
              <p className="story-contrast-outcome">
                <strong>结果：</strong>
                {structure.left.outcome}
              </p>
            </div>

            <div className="story-contrast-vs" aria-hidden="true">
              对照
            </div>

            <div className={'story-contrast-side side-' + structure.right.tone}>
              <div className="story-contrast-side-header">
                <span className="story-contrast-label">{structure.right.label}</span>
              </div>
              <SceneIllustration
                scene={structure.right.scene}
                beat="result"
                visual={structure.right.visual}
                storySeed={proverb.id + '-right'}
              />
              <p className="story-contrast-action">
                <strong>做法：</strong>
                {structure.right.action}
              </p>
              <p className="story-contrast-outcome">
                <strong>结果：</strong>
                {structure.right.outcome}
              </p>
            </div>
          </div>

          <div className="story-contrast-point">
            <span className="story-section-tag">对照点题</span>
            <p className="story-panel-text">{structure.point}</p>
          </div>
        </div>
      ) : null}

      {structure.layout === 'branch' ? (
        <div className="story-branch-container" data-testid="story-layout-branch">
          <div className="story-branch-root">
            <div className="story-branch-root-header">
              <span className="story-section-tag">面临处境</span>
            </div>
            <SceneIllustration
              scene={structure.situationScene}
              beat="cause"
              visual={structure.situationVisual}
              storySeed={proverb.id + '-sit'}
            />
            <p className="story-panel-text">{structure.situation}</p>
          </div>

          <div className="story-branch-fork-bar" aria-hidden="true">
            <span className="fork-arrow-left">↙ 分支选择一</span>
            <span className="fork-center-dot">分岔路口</span>
            <span className="fork-arrow-right">分支选择二 ↘</span>
          </div>

          <div className="story-branch-options">
            <div
              className={
                'story-branch-card' + (structure.optionA.recommended ? ' is-recommended' : '')
              }
            >
              <div className="story-branch-card-top">
                <span className="story-branch-label">{structure.optionA.label}</span>
                {structure.optionA.recommended ? (
                  <span className="story-branch-rec-pill">稳妥路径</span>
                ) : null}
              </div>
              <SceneIllustration
                scene={structure.optionA.scene}
                beat="action"
                visual={structure.optionA.visual}
                storySeed={proverb.id + '-optA'}
              />
              <p className="story-branch-choice">
                <strong>选择：</strong>
                {structure.optionA.choice}
              </p>
              <p className="story-branch-result">
                <strong>走向：</strong>
                {structure.optionA.result}
              </p>
            </div>

            <div
              className={
                'story-branch-card' + (structure.optionB.recommended ? ' is-recommended' : '')
              }
            >
              <div className="story-branch-card-top">
                <span className="story-branch-label">{structure.optionB.label}</span>
                {structure.optionB.recommended ? (
                  <span className="story-branch-rec-pill">稳妥路径</span>
                ) : null}
              </div>
              <SceneIllustration
                scene={structure.optionB.scene}
                beat="result"
                visual={structure.optionB.visual}
                storySeed={proverb.id + '-optB'}
              />
              <p className="story-branch-choice">
                <strong>选择：</strong>
                {structure.optionB.choice}
              </p>
              <p className="story-branch-result">
                <strong>走向：</strong>
                {structure.optionB.result}
              </p>
            </div>
          </div>

          <div className="story-branch-point">
            <span className="story-section-tag">抉择启示</span>
            <p className="story-panel-text">{structure.point}</p>
          </div>
        </div>
      ) : null}

      {structure.layout === 'timeline' ? (
        <div className="story-timeline-container" data-testid="story-layout-timeline">
          <div className="story-timeline-track" role="list">
            {structure.stages.map((stage, idx) => {
              const beats: StoryBeat[] = ['cause', 'action', 'result', 'point'];
              const isCurrent = activeIndex === idx;
              return (
                <div
                  key={stage.timeLabel + '-' + idx}
                  className={'story-timeline-node' + (isCurrent ? ' is-active-frame' : '')}
                  role="listitem"
                >
                  <div className="timeline-step-head">
                    <span className="timeline-step-dot">{idx + 1}</span>
                    <span className="timeline-time-label">{stage.timeLabel}</span>
                  </div>
                  <SceneIllustration
                    scene={stage.scene}
                    beat={beats[idx] || 'cause'}
                    visual={stage.visual}
                    storySeed={proverb.id}
                  />
                  <p className="story-panel-text">{stage.text}</p>
                </div>
              );
            })}
          </div>
          <div className="story-timeline-point">
            <span className="story-section-tag">时间沉淀</span>
            <p className="story-panel-text">{structure.point}</p>
          </div>
        </div>
      ) : null}

      {/* 四格画格列表（four-panel 主视图，同时为其他布局保留四格结构概览与可访问性） */}
      <div
        className={
          'story-grid' +
          (structure.layout !== 'four-panel' ? ' story-grid-compact' : '')
        }
        role="list"
      >
        {proverb.story.map((panel, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={panel.beat + '-' + index}
              className={
                'story-panel' +
                (isActive ? ' is-active-panel' : '') +
                (mobileSingleView && !isActive ? ' is-hidden-mobile-frame' : '')
              }
              role="listitem"
              data-testid={'story-panel-' + (index + 1)}
            >
              <div className="story-panel-top">
                <span className="story-panel-num">第 {index + 1} 格</span>
                <span className="story-panel-beat">{BEAT_LABELS[panel.beat]}</span>
              </div>
              <SceneIllustration
                scene={panel.scene}
                beat={panel.beat}
                visual={panel.visual}
                storySeed={proverb.id}
              />
              <p className="story-panel-text">{panel.text}</p>
            </div>
          );
        })}
      </div>

      {/* 底部故事翻格控制栏与进度提示 */}
      <div className="story-stepper-bar" aria-label="故事画格进度与切换">
        <FocusButton
          focusId="story-panel-prev"
          group="detail-story-controls"
          variant="ghost"
          disabled={activeIndex <= 0}
          onPress={handlePrev}
          nav={{
            left: '@group:nav',
            right: activeIndex < totalFrames - 1 ? 'story-panel-next' : null,
            up: props.upTarget || 'detail-read-area',
            down: props.downTarget || 'detail-next',
          }}
        >
          ← 上一格
        </FocusButton>

        <span className="story-progress-text" data-testid="story-progress">
          故事 {activeIndex + 1} / {totalFrames}（{BEAT_LABELS[activePanel.beat]}）
        </span>

        <FocusButton
          focusId="story-panel-next"
          group="detail-story-controls"
          variant="ghost"
          disabled={activeIndex >= totalFrames - 1}
          onPress={handleNext}
          nav={{
            left: activeIndex > 0 ? 'story-panel-prev' : '@group:nav',
            right: null,
            up: props.upTarget || 'detail-read-area',
            down: props.downTarget || 'detail-next',
          }}
        >
          下一格 →
        </FocusButton>

        {mode === 'normal' ? (
          <button
            type="button"
            className="btn btn-ghost story-view-toggle-btn"
            onClick={() => setMobileSingleView((v) => !v)}
          >
            {mobileSingleView ? '切换为四格全览' : '切换为单格查看'}
          </button>
        ) : null}
      </div>
    </div>
  );
}
