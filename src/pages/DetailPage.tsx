/**
 * 详情页：分段或双栏阅读一句老话。
 *
 * 多端布局与交互：
 * - TV 模式：严格三步分段展示（不在一屏内堆积全部长文）：
 *   - 第一步（1/3）：原句 + 白话解释
 *   - 第二步（2/3）：生活故事（支持四格、前后对照、选择分支、时间推进，标注「虚构生活情境」，支持上一格/下一格切换）
 *   - 第三步（3/3）：深入解释 + 适用边界 + 常见误解 + 现代应用 + 思考问题 + 对照/相关老话 + 来源说明
 * - 普通模式（PC / 手机）：
 *   - PC 宽屏采用双栏布局（左侧主故事与释义，右侧深入解释、适用边界、对照反思与关联推荐）；
 *   - 手机窄屏自动变为单列流式布局，无需受限于电视固定高度容器。
 *
 * 阅读滚动模式：
 * - 提供可聚焦的「阅读滚动模式」入口（detail-read-area）。
 * - 按确认（Enter）进入阅读滚动模式，上下方向键滚动正文容器。
 * - 按返回键（Esc/Back）或再次按确认退出，绝不形成焦点陷阱。
 */
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppState } from '../app/AppState';
import { useRouter } from '../app/router';
import { categoryLabel, SOURCE_STATUS_LABELS } from '../data/content';
import { StoryViewer } from '../components/StoryViewer';
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
  '第二步：生活故事与场景',
  '第三步：深入解释与适用边界',
];

export function DetailPage(props: DetailPageProps): JSX.Element {
  const { repo, mode, isFavorite, toggleFavorite } = useAppState();
  const { back, push } = useRouter();
  const { focus } = useTv();

  const proverb = repo.get(props.id);
  const [step, setStep] = useState<number>(0);
  const [readingMode, setReadingMode] = useState<boolean>(false);
  const articleRef = useRef<HTMLDivElement>(null);

  const contrastItems = proverb ? repo.getContrast(proverb) : [];
  const relatedItems = proverb ? repo.getRelated(proverb) : [];
  const relationButtons: Array<{ id: string; focusId: string; label: string; kind: 'contrast' | 'related' }> = [];

  for (let i = 0; i < contrastItems.length; i++) {
    relationButtons.push({
      id: contrastItems[i].id,
      focusId: 'detail-contrast-' + contrastItems[i].id,
      label: '对照：' + contrastItems[i].text,
      kind: 'contrast',
    });
  }
  for (let i = 0; i < relatedItems.length; i++) {
    relationButtons.push({
      id: relatedItems[i].id,
      focusId: 'detail-related-' + relatedItems[i].id,
      label: '相近：' + relatedItems[i].text,
      kind: 'related',
    });
  }

  const firstRelationFocusId =
    (mode === 'normal' || step === 2) && relationButtons.length > 0
      ? relationButtons[0].focusId
      : null;

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
      down: step === 1 ? 'story-panel-prev' : '@group:detail-actions',
    },
    enterTo: 'first',
  });

  useFocusGroup('detail-actions', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: 'detail-read-area',
      down: firstRelationFocusId,
    },
    enterTo: 'first',
  });

  useFocusGroup('detail-relations', {
    layout: 'horizontal',
    exits: {
      left: '@group:nav',
      right: null,
      up: 'detail-back',
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
    if (mode === 'tv') {
      if (step === 2 && focus.getActiveId() === 'detail-next') {
        if (!focus.focus('detail-back')) {
          focus.focus('detail-prev');
        }
      } else if (step === 0 && focus.getActiveId() === 'detail-prev') {
        focus.focus('detail-next');
      }
    }
  }, [step, focus, mode]);

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
  const showStep1 = mode === 'normal' || step === 0;
  const showStep2 = mode === 'normal' || step === 1;
  const showStep3 = mode === 'normal' || step === 2;

  return (
    <section
      className={'page-section detail-page detail-mode-' + mode}
      aria-label="读懂这句话"
    >
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
          2. 故事与场景
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
            down: step === 1 ? 'story-panel-prev' : step < 2 ? 'detail-next' : 'detail-back',
          }}
        >
          {readingMode
            ? '正在阅读滚动模式（上下键滚动正文 · 按确认或返回结束阅读）'
            : '进入阅读滚动模式（按确认后可用上下键滚动正文）'}
        </FocusButton>
      </div>

      {/* 正文容器：TV 模式下按步骤单屏渲染，普通模式下支持 PC 双栏（主故事 + 辅助解释）与手机单列 */}
      <div
        ref={articleRef}
        className={
          'detail-article-box' +
          (readingMode ? ' is-reading-mode' : '') +
          (mode === 'normal' ? ' detail-normal-columns' : '')
        }
        data-testid="detail-article-box"
      >
        <div className="detail-main-column">
          {showStep1 ? (
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
              {mode === 'tv' ? (
                <div className="detail-block detail-block-subtle">
                  <h3 className="detail-block-title">为什么值得细看</h3>
                  <p className="detail-block-text">
                    老话往往凝结了某种日常经验，但每句老话都有它的前提。接下来通过一段普通人的生活小故事，看看它在具体情境里怎么用。
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {showStep2 ? (
            <div className="detail-step-content step-2" data-testid="detail-step-content-2">
              <StoryViewer
                proverb={proverb}
                mode={mode}
                upTarget="detail-read-area"
                downTarget={step < 2 ? 'detail-next' : 'detail-back'}
              />
            </div>
          ) : null}
        </div>

        {showStep3 ? (
          <div className="detail-side-column detail-step-content step-3" data-testid="detail-step-content-3">
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

            {proverb.commonMisreading || proverb.modernApplication ? (
              <div className="detail-grid-two">
                {proverb.commonMisreading ? (
                  <div className="detail-block detail-block-misreading" data-testid="detail-misreading">
                    <h3 className="detail-block-title">常见误读</h3>
                    <p className="detail-block-text">{proverb.commonMisreading}</p>
                  </div>
                ) : null}
                {proverb.modernApplication ? (
                  <div className="detail-block detail-block-modern" data-testid="detail-modern">
                    <h3 className="detail-block-title">现代生活应用</h3>
                    <p className="detail-block-text">{proverb.modernApplication}</p>
                  </div>
                ) : null}
              </div>
            ) : null}

            <div className="detail-block detail-block-question">
              <h3 className="detail-block-title">想一想</h3>
              <p className="detail-block-text" data-testid="detail-question">
                {proverb.reflectionQuestion}
              </p>
            </div>

            {/* 对照理解与相关内容展示区 */}
            {contrastItems.length > 0 || relatedItems.length > 0 ? (
              <div className="detail-block detail-block-relations" data-testid="detail-relations">
                <h3 className="detail-block-title">对照与延伸思考</h3>
                {proverb.contrastNote ? (
                  <p className="detail-contrast-note" data-testid="detail-contrast-note">
                    {proverb.contrastNote}
                  </p>
                ) : contrastItems.length > 0 ? (
                  <p className="detail-contrast-note" data-testid="detail-contrast-note">
                    「{proverb.text}」与下方老话可对照理解：二者分别针对不同的处境与风险提醒，适用条件不同，并非哪一句永远绝对正确。
                  </p>
                ) : null}

                <div className="detail-relation-cards">
                  {contrastItems.map((item) => (
                    <div key={'con-' + item.id} className="relation-card relation-card-contrast">
                      <div className="relation-card-head">
                        <span className="relation-type-pill pill-contrast">可对照理解</span>
                        <strong className="relation-card-title">{item.text}</strong>
                      </div>
                      <p className="relation-card-desc">{item.plainExplanation}</p>
                    </div>
                  ))}
                  {relatedItems.map((item) => (
                    <div key={'rel-' + item.id} className="relation-card relation-card-related">
                      <div className="relation-card-head">
                        <span className="relation-type-pill pill-related">相近互参</span>
                        <strong className="relation-card-title">{item.text}</strong>
                      </div>
                      <p className="relation-card-desc">{item.plainExplanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

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
            down: firstRelationFocusId,
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
            down: firstRelationFocusId,
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
            down: firstRelationFocusId,
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
            down: firstRelationFocusId,
          }}
        >
          返回
        </FocusButton>
      </div>

      {/* 关联与对照条目快捷跳转按钮栏（支持遥控器聚焦与鼠标点击） */}
      {firstRelationFocusId ? (
        <div className="detail-relation-jump-bar" aria-label="关联与对照内容跳转">
          <span className="relation-jump-label">延伸阅读跳转：</span>
          {relationButtons.map((btn, idx) => {
            const prevId = idx > 0 ? relationButtons[idx - 1].focusId : '@group:nav';
            const nextId = idx < relationButtons.length - 1 ? relationButtons[idx + 1].focusId : null;
            return (
              <FocusButton
                key={btn.focusId}
                focusId={btn.focusId}
                group="detail-relations"
                variant="chip"
                onPress={() => {
                  setStep(0);
                  push({ name: 'detail', id: btn.id });
                }}
                nav={{
                  left: prevId,
                  right: nextId,
                  up: 'detail-back',
                  down: null,
                }}
              >
                {btn.label} →
              </FocusButton>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
