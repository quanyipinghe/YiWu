/**
 * 可组合的 SVG 故事场景插画系统。
 *
 * 设计原则：
 * - 纯本地内联 SVG，零外部图片或网络请求，100% 兼容 Chrome 66。
 * - 不使用 SVG foreignObject、重度高斯滤镜或持续运行的 JavaScript 动画，兼顾低端电视芯片。
 * - 由四层可复用素材组合而成：
 *   1. 场景背景层（18 种生活与寓意背景）
 *   2. 道具层（25 种生活与叙事道具）
 *   3. 人物角色层（8 种发型服饰角色 × 8 种肢体动作姿态）
 *   4. 叙事引导层（对话气泡、关键物高亮、因果箭头、对照分割、分岔选择、时间推移、局部放大）
 * - 主要对白与故事正文保留在外部 HTML 中渲染，保证多端排版与无障碍阅读。
 */
import React from 'react';
import type {
  CharacterPlacement,
  NarrativeElement,
  PanelVisual,
  PropKind,
  SceneKind,
  StoryBeat,
} from '../data/types';
import {
  CHARACTER_META,
  POSE_LABELS,
  resolvePanelVisual,
  SCENE_LABELS,
} from '../data/sceneCatalog';

export interface SceneIllustrationProps {
  scene: SceneKind | string;
  beat?: StoryBeat;
  visual?: PanelVisual;
  storySeed?: string;
  /** 是否在画面下方渲染 HTML 场景与角色状态角标、简短对白 */
  showCaption?: boolean;
}

export function SceneIllustration(props: SceneIllustrationProps): JSX.Element {
  const resolved = resolvePanelVisual(
    props.scene,
    props.beat || 'cause',
    props.visual,
    props.storySeed || 'default',
  );

  const primaryChar = resolved.characters[0];
  const poseText = primaryChar ? POSE_LABELS[primaryChar.pose] : '';
  const sceneName = SCENE_LABELS[resolved.scene] || '生活场景';

  return (
    <div
      className="story-scene-wrap"
      data-scene={resolved.scene}
      data-character={primaryChar ? primaryChar.id : 'none'}
      data-pose={primaryChar ? primaryChar.pose : 'none'}
      data-narrative={resolved.narrative.type}
    >
      <svg
        className="story-scene-svg"
        viewBox="0 0 180 96"
        width="180"
        height="96"
        aria-hidden="true"
        focusable="false"
      >
        {/* 画框底板 */}
        <rect
          x="2"
          y="2"
          width="176"
          height="92"
          rx="8"
          fill="#171b24"
          stroke="#343b4a"
          strokeWidth="1.5"
        />

        {/* 1. 场景背景层 */}
        <g className="svg-layer-bg">{renderBackground(resolved.scene)}</g>

        {/* 2. 道具层 */}
        <g className="svg-layer-props">
          {resolved.props.map((prop, idx) => (
            <React.Fragment key={prop + '-' + idx}>{renderProp(prop, idx)}</React.Fragment>
          ))}
        </g>

        {/* 3. 人物角色层 */}
        <g className="svg-layer-chars">
          {resolved.characters.map((char, idx) => (
            <React.Fragment key={char.id + '-' + idx}>
              {renderCharacter(char, idx, resolved.characters.length)}
            </React.Fragment>
          ))}
        </g>

        {/* 4. 叙事元素层 */}
        <g className="svg-layer-narrative">{renderNarrative(resolved.narrative)}</g>
      </svg>

      {props.showCaption !== false ? (
        <div className="story-scene-meta">
          <span className="story-scene-tag">{sceneName}</span>
          {poseText ? <span className="story-pose-tag">状态：{poseText}</span> : null}
          {resolved.isMetaphor ? (
            <span className="story-metaphor-tag">现代视觉比喻</span>
          ) : null}
          {resolved.dialogue ? (
            <span className="story-dialogue-line">「{resolved.dialogue}」</span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/** 1. 渲染 18 种场景背景 */
function renderBackground(scene: SceneKind): JSX.Element {
  switch (scene) {
    case 'home':
      return (
        <g stroke="#505a70" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 客厅窗框与沙发 */}
          <rect x="20" y="16" width="44" height="34" rx="2" fill="#1e2433" stroke="#687591" />
          <line x1="42" y1="16" x2="42" y2="50" stroke="#687591" />
          <line x1="20" y1="33" x2="64" y2="33" stroke="#687591" />
          <rect x="88" y="48" width="66" height="28" rx="4" fill="#252b3b" stroke="#8a7250" />
          <rect x="82" y="54" width="10" height="22" rx="3" fill="#2c3346" />
          <rect x="148" y="54" width="10" height="22" rx="3" fill="#2c3346" />
        </g>
      );

    case 'kitchen':
      return (
        <g stroke="#636d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 料理台与橱柜 */}
          <rect x="22" y="48" width="136" height="28" rx="3" fill="#222836" stroke="#8c7355" />
          <line x1="68" y1="48" x2="68" y2="76" />
          <line x1="114" y1="48" x2="114" y2="76" />
          {/* 抽油烟机与热气 */}
          <polygon points="72,14 118,14 126,26 64,26" fill="#262d3d" stroke="#758099" />
          <path d="M86 42 C86 36, 90 36, 90 30" stroke="#e07a5f" />
          <path d="M98 42 C98 36, 102 36, 102 30" stroke="#e07a5f" />
        </g>
      );

    case 'street':
      return (
        <g stroke="#5e687e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="78" x2="172" y2="78" stroke="#475066" />
          <line x1="16" y1="84" x2="46" y2="84" stroke="#6c758c" strokeDasharray="6 4" />
          <line x1="76" y1="84" x2="106" y2="84" stroke="#6c758c" strokeDasharray="6 4" />
          {/* 街边建筑与路灯 */}
          <rect x="18" y="24" width="38" height="54" fill="#1e2432" />
          <rect x="60" y="18" width="44" height="60" fill="#232938" />
          <rect x="26" y="34" width="10" height="10" fill="#2f384d" />
          <rect x="70" y="28" width="12" height="12" fill="#2f384d" />
          <line x1="148" y1="78" x2="148" y2="26" stroke="#99825c" strokeWidth="2" />
          <path d="M148 26 L136 26" stroke="#99825c" strokeWidth="2" />
          <circle cx="134" cy="28" r="4" fill="#f2c879" stroke="none" />
        </g>
      );

    case 'office':
      return (
        <g stroke="#5c667d" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 办公桌与看板 */}
          <rect x="24" y="54" width="132" height="6" rx="2" fill="#2c3345" stroke="#8a7456" />
          <line x1="40" y1="60" x2="40" y2="78" />
          <line x1="140" y1="60" x2="140" y2="78" />
          <rect x="108" y="16" width="46" height="28" rx="2" fill="#1f2533" stroke="#6b7794" />
          <line x1="116" y1="24" x2="144" y2="24" stroke="#d9b26f" />
          <line x1="116" y1="32" x2="136" y2="32" stroke="#7d88a3" />
        </g>
      );

    case 'school':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 黑板与讲台 */}
          <rect x="24" y="14" width="104" height="42" rx="3" fill="#1d2b28" stroke="#8a7456" strokeWidth="2" />
          <line x1="38" y1="28" x2="88" y2="28" stroke="#d6d1c4" />
          <line x1="38" y1="38" x2="74" y2="38" stroke="#9eb3a8" />
          <rect x="138" y="48" width="24" height="30" fill="#262c3b" />
        </g>
      );

    case 'study':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 书架与书桌 */}
          <rect x="18" y="14" width="52" height="64" fill="#1e2330" stroke="#7c684c" />
          <line x1="18" y1="34" x2="70" y2="34" stroke="#7c684c" />
          <line x1="18" y1="54" x2="70" y2="54" stroke="#7c684c" />
          <rect x="24" y="20" width="6" height="14" fill="#8f3222" stroke="none" />
          <rect x="32" y="22" width="6" height="12" fill="#3b5978" stroke="none" />
          <rect x="40" y="19" width="7" height="15" fill="#b88b4a" stroke="none" />
          <rect x="86" y="54" width="74" height="24" fill="#252b3b" stroke="#8a7456" />
        </g>
      );

    case 'park':
      return (
        <g stroke="#5b6e62" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 78 Q90 72 172 78" stroke="#46594d" />
          {/* 树木与长椅 */}
          <circle cx="38" cy="36" r="18" fill="#1f3328" stroke="#527a61" />
          <circle cx="52" cy="40" r="14" fill="#243b2e" stroke="#527a61" />
          <line x1="42" y1="52" x2="42" y2="76" stroke="#7d6346" strokeWidth="3" />
          <rect x="106" y="58" width="46" height="5" rx="2" fill="#2b3140" stroke="#997b56" />
          <line x1="114" y1="63" x2="114" y2="76" stroke="#997b56" />
          <line x1="144" y1="63" x2="144" y2="76" stroke="#997b56" />
        </g>
      );

    case 'courtyard':
      return (
        <g stroke="#687082" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="78" x2="172" y2="78" stroke="#454d5e" />
          {/* 院墙、屋檐与石桌 */}
          <path d="M14 34 L58 16 L102 34" stroke="#9c7e54" strokeWidth="2" />
          <rect x="24" y="34" width="68" height="44" fill="#1f2533" />
          <rect x="48" y="48" width="20" height="30" fill="#2c2423" stroke="#8f4b3c" />
          <ellipse cx="136" cy="64" rx="20" ry="6" fill="#2a3142" stroke="#7d869c" />
          <line x1="136" y1="70" x2="136" y2="78" />
        </g>
      );

    case 'market':
      return (
        <g stroke="#786b59" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="78" x2="172" y2="78" stroke="#454d5e" />
          {/* 商铺遮阳棚与柜台 */}
          <polygon points="24,30 156,30 144,14 36,14" fill="#8f3222" stroke="#d98a6c" />
          <line x1="32" y1="30" x2="32" y2="78" stroke="#8c7558" />
          <line x1="148" y1="30" x2="148" y2="78" stroke="#8c7558" />
          <rect x="30" y="54" width="120" height="24" fill="#232938" stroke="#8c7558" />
        </g>
      );

    case 'station':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="78" x2="172" y2="78" stroke="#454d5e" />
          {/* 站台顶棚、站牌与列车轮廓 */}
          <path d="M16 24 L164 24" stroke="#8c96ab" strokeWidth="2.5" />
          <line x1="42" y1="24" x2="42" y2="78" stroke="#626d85" strokeWidth="2" />
          <line x1="138" y1="24" x2="138" y2="78" stroke="#626d85" strokeWidth="2" />
          <rect x="68" y="30" width="44" height="14" rx="3" fill="#232b3d" stroke="#d9b26f" />
          <line x1="76" y1="37" x2="104" y2="37" stroke="#f2c879" />
        </g>
      );

    case 'field':
      return (
        <g stroke="#5c7358" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* 田垄与远山 */}
          <path d="M8 56 Q55 44 105 56 T172 52" stroke="#485e45" />
          <line x1="8" y1="78" x2="172" y2="78" stroke="#4d6149" />
          <line x1="28" y1="78" x2="62" y2="56" stroke="#4c6348" />
          <line x1="78" y1="78" x2="98" y2="56" stroke="#4c6348" />
          <line x1="128" y1="78" x2="134" y2="55" stroke="#4c6348" />
          <circle cx="148" cy="24" r="9" fill="#d98a4e" stroke="none" />
        </g>
      );

    case 'river':
      return (
        <g stroke="#526d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* 河岸波纹与拱桥 */}
          <path d="M8 66 Q48 58 90 66 T172 64" stroke="#4a7c9b" strokeWidth="2" />
          <path d="M8 76 Q52 68 94 76 T172 74" stroke="#396078" />
          <path d="M36 64 Q90 34 144 64" fill="#242b3a" stroke="#9c8259" strokeWidth="2" />
        </g>
      );

    case 'night':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 弯月与星辰 */}
          <path d="M138 16 A11 11 0 1 0 152 30 A8 8 0 1 1 138 16 Z" fill="#f2c879" stroke="none" />
          <circle cx="34" cy="20" r="1.5" fill="#f2c879" stroke="none" />
          <circle cx="62" cy="14" r="1.5" fill="#f2c879" stroke="none" />
          <circle cx="108" cy="22" r="1.2" fill="#f2c879" stroke="none" />
        </g>
      );

    case 'rain':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 云层与斜雨 */}
          <path
            d="M42 28 C42 20, 54 16, 66 18 C74 12, 92 14, 96 22 C106 22, 108 30, 98 32 L44 32 C38 32, 38 28, 42 28 Z"
            fill="#252c3d"
            stroke="#6e7b96"
          />
          <line x1="48" y1="38" x2="42" y2="52" stroke="#7ea8d9" />
          <line x1="68" y1="38" x2="62" y2="52" stroke="#7ea8d9" />
          <line x1="88" y1="38" x2="82" y2="52" stroke="#7ea8d9" />
          <line x1="108" y1="38" x2="102" y2="52" stroke="#7ea8d9" />
        </g>
      );

    case 'mountain':
      return (
        <g stroke="#687285" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="78" x2="172" y2="78" stroke="#454d5e" />
          <polygon points="16,78 60,24 106,78" fill="#1f2636" stroke="#5b667d" />
          <polygon points="74,78 118,30 162,78" fill="#1a202e" stroke="#515b70" />
          <path d="M52 78 Q72 62 94 56" stroke="#b89660" strokeWidth="2" />
        </g>
      );

    case 'workshop':
      return (
        <g stroke="#7a6c58" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 木工修理工作台与工具挂板 */}
          <rect x="28" y="54" width="124" height="10" fill="#2c2623" stroke="#997b56" />
          <line x1="40" y1="64" x2="40" y2="78" stroke="#997b56" strokeWidth="2" />
          <line x1="140" y1="64" x2="140" y2="78" stroke="#997b56" strokeWidth="2" />
          <rect x="96" y="16" width="52" height="24" rx="2" fill="#1f2432" stroke="#59637a" />
          <line x1="108" y1="22" x2="108" y2="34" stroke="#d9b26f" />
          <line x1="122" y1="22" x2="122" y2="34" stroke="#e07a5f" />
          <line x1="136" y1="22" x2="136" y2="34" stroke="#d9b26f" />
        </g>
      );

    case 'phone':
      return (
        <g stroke="#626d85" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="10" y1="78" x2="170" y2="78" stroke="#3c4456" />
          {/* 信息卡片背景 */}
          <rect x="104" y="16" width="54" height="44" rx="5" fill="#1f2637" stroke="#6f7e9e" />
          <rect x="112" y="24" width="38" height="10" rx="2" fill="#2e3852" stroke="none" />
          <rect x="112" y="38" width="28" height="8" rx="2" fill="#8f3222" stroke="none" />
        </g>
      );

    case 'metaphor':
    default:
      return (
        <g stroke="#7c6f5a" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* 抽象寓意背景：对称地平线与光环 */}
          <line x1="12" y1="76" x2="168" y2="76" stroke="#595247" />
          <circle cx="90" cy="46" r="28" stroke="#3b3731" strokeDasharray="4 4" />
          <path d="M56 76 L90 48 L124 76" stroke="#8c7554" />
        </g>
      );
  }
}

/** 2. 渲染道具素材（按槽位错开排布，防止重叠） */
function renderProp(prop: PropKind, slotIndex: number): JSX.Element {
  // 槽位基准坐标（右侧或中景）
  const baseX = slotIndex === 0 ? 114 : slotIndex === 1 ? 142 : 84;
  const baseY = 50;

  switch (prop) {
    case 'book':
      return (
        <g transform={`translate(${baseX}, ${baseY})`} stroke="#f2c879" strokeWidth="1.5" fill="#273042">
          <path d="M-12 -6 L0 -3 L12 -6 L12 8 L0 11 L-12 8 Z" />
          <line x1="0" y1="-3" x2="0" y2="11" />
        </g>
      );
    case 'pen':
      return (
        <g transform={`translate(${baseX}, ${baseY})`} stroke="#f2c879" strokeWidth="1.6" fill="none">
          <rect x="-8" y="-8" width="14" height="18" rx="1" fill="#232938" />
          <line x1="-4" y1="-2" x2="2" y2="-2" />
          <line x1="-4" y1="3" x2="2" y2="3" />
          <line x1="4" y1="8" x2="12" y2="-6" stroke="#e07a5f" strokeWidth="2" />
        </g>
      );
    case 'desk':
      return (
        <g transform={`translate(${baseX}, ${baseY + 8})`} stroke="#b89660" strokeWidth="1.6" fill="none">
          <rect x="-16" y="-4" width="32" height="5" fill="#2c2623" />
          <line x1="-12" y1="1" x2="-12" y2="16" />
          <line x1="12" y1="1" x2="12" y2="16" />
        </g>
      );
    case 'phone':
      return (
        <g transform={`translate(${baseX}, ${baseY - 4})`} stroke="#f2c879" strokeWidth="1.5" fill="#1e2536">
          <rect x="-7" y="-12" width="14" height="24" rx="2" />
          <circle cx="0" cy="8" r="1" fill="#f2c879" />
        </g>
      );
    case 'laptop':
      return (
        <g transform={`translate(${baseX}, ${baseY - 2})`} stroke="#d9b26f" strokeWidth="1.5" fill="#202738">
          <rect x="-12" y="-10" width="24" height="15" rx="2" />
          <line x1="-16" y1="6" x2="16" y2="6" strokeWidth="2" />
        </g>
      );
    case 'bag':
      return (
        <g transform={`translate(${baseX}, ${baseY + 2})`} stroke="#e07a5f" strokeWidth="1.5" fill="#332625">
          <rect x="-9" y="-4" width="18" height="18" rx="2" />
          <path d="M-5 -4 C-5 -10, 5 -10, 5 -4" fill="none" />
        </g>
      );
    case 'goods':
      return (
        <g transform={`translate(${baseX}, ${baseY + 2})`} stroke="#d9b26f" strokeWidth="1.5" fill="#2c3344">
          <rect x="-10" y="-2" width="14" height="14" />
          <circle cx="8" cy="6" r="5" fill="#b8432f" />
        </g>
      );
    case 'bill':
      return (
        <g transform={`translate(${baseX}, ${baseY - 4})`} stroke="#f2c879" strokeWidth="1.4" fill="#23293a">
          <rect x="-8" y="-10" width="16" height="22" rx="1" />
          <line x1="-4" y1="-4" x2="4" y2="-4" />
          <line x1="-4" y1="1" x2="4" y2="1" />
          <line x1="-4" y1="6" x2="2" y2="6" stroke="#9fe6a0" />
        </g>
      );
    case 'tools':
      return (
        <g transform={`translate(${baseX}, ${baseY - 2})`} stroke="#f2c879" strokeWidth="1.8" fill="none">
          <line x1="-8" y1="8" x2="8" y2="-8" />
          <rect x="4" y="-11" width="8" height="5" fill="#b8432f" />
          <line x1="-8" y1="-6" x2="8" y2="8" stroke="#9eb3c2" />
        </g>
      );
    case 'wood':
      return (
        <g transform={`translate(${baseX}, ${baseY + 4})`} stroke="#c99b61" strokeWidth="1.5" fill="#3a2e24">
          <rect x="-14" y="-4" width="28" height="9" rx="1" />
          <line x1="-8" y1="0" x2="8" y2="0" />
        </g>
      );
    case 'rope':
      return (
        <g transform={`translate(${baseX}, ${baseY})`} stroke="#d9b26f" strokeWidth="1.8" fill="none">
          <circle cx="0" cy="0" r="8" />
          <circle cx="0" cy="0" r="4" />
          <path d="M6 6 L14 12" />
        </g>
      );
    case 'sapling':
      return (
        <g transform={`translate(${baseX}, ${baseY + 2})`} stroke="#7ec88b" strokeWidth="1.6" fill="none">
          <polygon points="-7,6 7,6 5,18 -5,18" fill="#6b4c35" stroke="#a67c58" />
          <line x1="0" y1="6" x2="0" y2="-8" />
          <path d="M0 -2 Q-9 -8 -4 -13 Q0 -9 0 -2" fill="#3b6e4c" />
          <path d="M0 -4 Q9 -10 4 -15 Q0 -11 0 -4" fill="#3b6e4c" />
        </g>
      );
    case 'fruit':
      return (
        <g transform={`translate(${baseX}, ${baseY + 4})`} stroke="#f2c879" strokeWidth="1.4" fill="#b8432f">
          <circle cx="-4" cy="4" r="5" />
          <circle cx="5" cy="5" r="5" fill="#d98a4e" />
        </g>
      );
    case 'basket':
      return (
        <g transform={`translate(${baseX}, ${baseY + 4})`} stroke="#d9b26f" strokeWidth="1.5" fill="#382e24">
          <polygon points="-11,0 11,0 8,14 -8,14" />
          <path d="M-8 0 C-8 -9, 8 -9, 8 0" fill="none" />
        </g>
      );
    case 'signpost':
      return (
        <g transform={`translate(${baseX}, ${baseY - 4})`} stroke="#f2c879" strokeWidth="1.5" fill="#2c3548">
          <line x1="0" y1="-14" x2="0" y2="22" />
          <polygon points="-10,-10 8,-10 13,-6 8,-2 -10,-2" />
        </g>
      );
    case 'bridge':
      return (
        <g transform={`translate(${baseX - 10}, ${baseY + 8})`} stroke="#d9b26f" strokeWidth="1.6" fill="none">
          <path d="M-18 8 Q0 -8 18 8" />
          <line x1="-18" y1="2" x2="18" y2="2" />
        </g>
      );
    case 'stone':
      return (
        <g transform={`translate(${baseX}, ${baseY + 8})`} stroke="#8d96a8" strokeWidth="1.5" fill="#2f3645">
          <polygon points="-10,10 -6,-2 6,-4 12,10" />
        </g>
      );
    case 'clock':
      return (
        <g transform={`translate(${baseX}, ${baseY - 16})`} stroke="#f2c879" strokeWidth="1.5" fill="#1e2433">
          <circle cx="0" cy="0" r="9" />
          <line x1="0" y1="0" x2="0" y2="-5" />
          <line x1="0" y1="0" x2="4" y2="2" />
        </g>
      );
    case 'calendar':
      return (
        <g transform={`translate(${baseX}, ${baseY - 14})`} stroke="#f2c879" strokeWidth="1.4" fill="#23293a">
          <rect x="-9" y="-9" width="18" height="18" rx="2" />
          <line x1="-9" y1="-3" x2="9" y2="-3" stroke="#e07a5f" />
          <circle cx="-3" cy="3" r="1.2" fill="#f2c879" />
          <circle cx="3" cy="3" r="1.2" fill="#f2c879" />
        </g>
      );
    case 'lamp':
      return (
        <g transform={`translate(${baseX}, ${baseY - 6})`} stroke="#f2c879" strokeWidth="1.5" fill="none">
          <line x1="-6" y1="18" x2="6" y2="18" />
          <line x1="0" y1="18" x2="0" y2="2" />
          <polygon points="-8,2 8,2 5,-6 -5,-6" fill="#b8432f" />
        </g>
      );
    case 'door':
      return (
        <g transform={`translate(${baseX}, ${baseY - 6})`} stroke="#b89660" strokeWidth="1.5" fill="#262022">
          <rect x="-9" y="-14" width="18" height="34" rx="1" />
          <circle cx="5" cy="3" r="1.3" fill="#f2c879" />
        </g>
      );
    case 'window':
      return (
        <g transform={`translate(${baseX}, ${baseY - 16})`} stroke="#7d8da6" strokeWidth="1.4" fill="#1d2433">
          <rect x="-12" y="-10" width="24" height="20" rx="1" />
          <line x1="0" y1="-10" x2="0" y2="10" />
          <line x1="-12" y1="0" x2="12" y2="0" />
        </g>
      );
    case 'pot':
      return (
        <g transform={`translate(${baseX}, ${baseY + 2})`} stroke="#d9b26f" strokeWidth="1.5" fill="#2b3140">
          <path d="M-10 0 L10 0 L8 12 L-8 12 Z" />
          <path d="M-12 0 L12 0" />
          <path d="M-3 -4 C-3 -8, 3 -8, 3 -4" fill="none" stroke="#e07a5f" />
        </g>
      );
    case 'umbrella':
      return (
        <g transform={`translate(${baseX}, ${baseY - 6})`} stroke="#f2c879" strokeWidth="1.5" fill="#8f3222">
          <path d="M-12 0 A12 10 0 0 1 12 0 Z" />
          <line x1="0" y1="0" x2="0" y2="16" fill="none" />
        </g>
      );
    case 'mirror':
    default:
      return (
        <g transform={`translate(${baseX}, ${baseY - 4})`} stroke="#f2c879" strokeWidth="1.5" fill="#222c3c">
          <ellipse cx="0" cy="0" rx="9" ry="13" />
          <line x1="-5" y1="-6" x2="3" y2="6" stroke="#8ab4f8" />
        </g>
      );
  }
}

/** 3. 渲染可复用角色（发型服饰一致 + 8 种清晰肢体姿态） */
function renderCharacter(
  placement: CharacterPlacement,
  index: number,
  total: number,
): JSX.Element {
  const meta = CHARACTER_META[placement.id] || CHARACTER_META.lin;
  let cx = 54;
  if (placement.position === 'center') cx = 82;
  else if (placement.position === 'right') cx = 104;
  else if (total > 1 && index === 1) cx = 92;

  const flip = placement.facing === 'left' ? -1 : 1;

  return (
    <g
      transform={`translate(${cx}, 52) scale(${flip}, 1)`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 身体躯干与服饰色块 */}
      <path
        d="M-9 26 L-7 6 Q0 3 7 6 L9 26 Z"
        fill={meta.outfitColor}
        stroke="#d6d1c4"
        strokeWidth="1.4"
      />
      {/* 领口装饰 */}
      <path d="M-3 6 L0 11 L3 6" stroke={meta.accentColor} strokeWidth="1.5" fill="none" />

      {/* 头部 */}
      <circle cx="0" cy="-4" r="7.5" fill="#e8d5b7" stroke="#2c313d" strokeWidth="1.3" />

      {/* 发型或帽饰（区分人物身份） */}
      {renderHairOrHat(meta.hairStyle, meta.accentColor)}

      {/* 肢体动作与状态标记 */}
      {renderPoseArmsAndCue(placement.pose, meta.accentColor)}
    </g>
  );
}

function renderHairOrHat(
  style: string,
  accent: string,
): JSX.Element {
  switch (style) {
    case 'ponytail':
      return (
        <g fill="#2b2d38" stroke="none">
          <path d="M-8 -6 A8 8 0 0 1 8 -6 L7 -9 L-7 -9 Z" />
          <circle cx="-9" cy="-4" r="3" />
        </g>
      );
    case 'bun':
      return (
        <g fill="#4a4642" stroke="none">
          <path d="M-8 -6 A8 8 0 0 1 8 -6 Z" />
          <circle cx="-6" cy="-11" r="3.2" />
        </g>
      );
    case 'elder-short':
      return <path d="M-8 -6 A8 7 0 0 1 8 -6" fill="#bfc5d1" stroke="#bfc5d1" strokeWidth="2" />;
    case 'hat':
      return (
        <g stroke={accent} strokeWidth="1.5" fill="#5e4b36">
          <ellipse cx="0" cy="-10" rx="11" ry="2.5" />
          <path d="M-6 -10 Q0 -16 6 -10" />
        </g>
      );
    case 'cap':
      return (
        <g fill="#365f73" stroke="none">
          <path d="M-8 -7 A8 7 0 0 1 8 -7 Z" />
          <line x1="2" y1="-8" x2="11" y2="-7" stroke={accent} strokeWidth="2" />
        </g>
      );
    case 'bob':
      return <path d="M-8 -3 C-8 -13, 8 -13, 8 -3" fill="none" stroke="#33292a" strokeWidth="2.8" />;
    case 'parted':
    case 'short':
    default:
      return <path d="M-7.5 -6 A8 7 0 0 1 7.5 -6" fill="#252830" stroke="#252830" strokeWidth="2" />;
  }
}

function renderPoseArmsAndCue(pose: string, accent: string): JSX.Element {
  switch (pose) {
    case 'thinking':
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          {/* 托腮思考手臂 + 思索圆点 */}
          <path d="M3 12 L9 8 L4 1" />
          <circle cx="11" cy="-13" r="1.5" fill={accent} />
          <circle cx="15" cy="-17" r="2.2" fill={accent} />
        </g>
      );
    case 'talking':
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          {/* 伸手表达 + 声波线 */}
          <path d="M5 10 L15 6" />
          <path d="M12 -6 Q15 -4 12 -2" stroke={accent} />
          <path d="M15 -8 Q19 -4 15 0" stroke={accent} />
        </g>
      );
    case 'acting':
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          {/* 双手向前行动操作 */}
          <path d="M4 9 L16 11" />
          <path d="M2 14 L14 16" />
        </g>
      );
    case 'hesitating':
      return (
        <g stroke="#e07a5f" strokeWidth="1.8" fill="none">
          {/* 驻足迟疑 + 问号纹理 */}
          <path d="M-4 10 L-11 15" />
          <path d="M4 10 L9 15" />
          <path d="M10 -15 C10 -18, 15 -18, 14 -14 C13 -12, 12 -12, 12 -10" />
          <circle cx="12" cy="-7" r="0.8" fill="#e07a5f" />
        </g>
      );
    case 'discovering':
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          {/* 豁然发现 + 感叹亮线 */}
          <path d="M5 9 L15 3" />
          <line x1="11" y1="-16" x2="14" y2="-20" stroke={accent} />
          <line x1="15" y1="-13" x2="19" y2="-15" stroke={accent} />
        </g>
      );
    case 'relieved':
      return (
        <g stroke="#9fe6a0" strokeWidth="1.8" fill="none">
          {/* 舒展放松弧线 */}
          <path d="M-6 10 L-12 16" />
          <path d="M6 10 L13 15" />
          <path d="M8 -15 Q13 -19 18 -15" />
        </g>
      );
    case 'walking':
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          <path d="M-5 10 L-11 16" />
          <path d="M5 10 L13 14" />
        </g>
      );
    case 'sitting':
    default:
      return (
        <g stroke="#f2c879" strokeWidth="1.8" fill="none">
          <path d="M4 11 L12 14" />
        </g>
      );
  }
}

/** 4. 渲染叙事视觉引导层（文字不全部塞进 SVG，仅作轻量视觉符号） */
function renderNarrative(narrative: NarrativeElement): JSX.Element {
  switch (narrative.type) {
    case 'bubble':
      return (
        <g transform="translate(26, 18)" stroke="#f2c879" strokeWidth="1.3" fill="#232a3a">
          <rect x="0" y="0" width="24" height="13" rx="4" />
          <polygon points="8,13 13,13 10,17" />
          <line x1="5" y1="6.5" x2="19" y2="6.5" stroke="#f2c879" />
        </g>
      );
    case 'highlight':
      return (
        <g transform="translate(122, 46)" stroke="#f2c879" strokeWidth="1.5" fill="none">
          <circle cx="0" cy="0" r="18" strokeDasharray="3 3" />
        </g>
      );
    case 'arrow':
      return (
        <g transform="translate(76, 22)" stroke="#f2c879" strokeWidth="1.8" fill="none">
          <line x1="0" y1="0" x2="22" y2="0" />
          <polyline points="16,-5 22,0 16,5" />
        </g>
      );
    case 'contrast':
      return (
        <g stroke="#d96b56" strokeWidth="1.5" fill="none">
          <line x1="90" y1="10" x2="90" y2="86" strokeDasharray="4 3" />
        </g>
      );
    case 'fork':
      return (
        <g transform="translate(74, 24)" stroke="#f2c879" strokeWidth="1.6" fill="none">
          <path d="M0 8 L10 8 L20 1" />
          <path d="M10 8 L20 15" stroke="#8ab4f8" />
        </g>
      );
    case 'time':
      return (
        <g transform="translate(154, 18)" stroke="#f2c879" strokeWidth="1.4" fill="#1f2534">
          <circle cx="0" cy="0" r="8" />
          <polyline points="0,-4 0,0 3,2" fill="none" />
        </g>
      );
    case 'zoom':
    default:
      return (
        <g transform="translate(124, 42)" stroke="#f2c879" strokeWidth="1.6" fill="none">
          <circle cx="0" cy="0" r="14" />
          <line x1="10" y1="10" x2="17" y2="17" strokeWidth="2.2" />
        </g>
      );
  }
}
