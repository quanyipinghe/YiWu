/**
 * 四格故事的极简 SVG 场景插画。
 *
 * 设计原则：
 * - 纯内联 SVG，零外部图片请求，兼容 Chrome 66。
 * - 使用温暖克制的线条和色块，辅助阅读理解，不喧宾夺主。
 * - 无持续动画或复杂滤镜，兼顾低性能电视设备。
 */
import type { SceneKind } from '../data/types';

export interface SceneIllustrationProps {
  scene: SceneKind;
}

export function SceneIllustration(props: SceneIllustrationProps): JSX.Element {
  const { scene } = props;
  return (
    <svg
      className="story-scene-svg"
      viewBox="0 0 120 72"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="116" height="68" rx="8" fill="#181c24" stroke="#343b4a" strokeWidth="1.5" />
      {renderScenePaths(scene)}
    </svg>
  );
}

function renderScenePaths(scene: SceneKind): JSX.Element {
  switch (scene) {
    case 'home':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M26 38 L60 14 L94 38" />
          <rect x="34" y="36" width="52" height="24" fill="#232836" />
          <rect x="54" y="44" width="12" height="16" fill="#b8432f" />
          <rect x="40" y="42" width="9" height="9" />
          <rect x="71" y="42" width="9" height="9" />
        </g>
      );
    case 'kitchen':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="20" y1="54" x2="100" y2="54" />
          <path d="M36 54 L40 36 L80 36 L84 54 Z" fill="#232836" />
          <path d="M46 32 L74 32" />
          <path d="M56 28 L64 28" />
          <path d="M48 22 C48 18, 52 18, 52 14" stroke="#e07a5f" />
          <path d="M60 22 C60 18, 64 18, 64 14" stroke="#e07a5f" />
          <path d="M72 22 C72 18, 76 18, 76 14" stroke="#e07a5f" />
        </g>
      );
    case 'street':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="14" y1="56" x2="106" y2="56" />
          <rect x="22" y="24" width="24" height="32" fill="#232836" />
          <rect x="50" y="18" width="26" height="38" fill="#232836" />
          <line x1="88" y1="56" x2="88" y2="26" />
          <circle cx="94" cy="26" r="4" fill="#f2c879" />
          <line x1="28" y1="32" x2="40" y2="32" />
          <line x1="56" y1="28" x2="70" y2="28" />
          <line x1="56" y1="36" x2="70" y2="36" />
        </g>
      );
    case 'office':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="54" x2="102" y2="54" />
          <rect x="38" y="20" width="44" height="26" rx="3" fill="#232836" />
          <line x1="60" y1="46" x2="60" y2="54" />
          <line x1="48" y1="54" x2="72" y2="54" />
          <line x1="46" y1="29" x2="74" y2="29" stroke="#e07a5f" />
          <line x1="46" y1="36" x2="66" y2="36" />
        </g>
      );
    case 'school':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M28 22 C44 20, 56 22, 60 26 C64 22, 76 20, 92 22 L92 52 C76 50, 64 52, 60 56 C56 52, 44 50, 28 52 Z" fill="#232836" />
          <line x1="60" y1="26" x2="60" y2="56" />
          <line x1="36" y1="32" x2="52" y2="32" />
          <line x1="36" y1="40" x2="50" y2="40" />
          <line x1="68" y1="32" x2="84" y2="32" />
          <line x1="68" y1="40" x2="82" y2="40" />
        </g>
      );
    case 'park':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <line x1="16" y1="56" x2="104" y2="56" />
          <circle cx="42" cy="30" r="14" fill="#233229" />
          <line x1="42" y1="44" x2="42" y2="56" />
          <rect x="64" y="44" width="28" height="4" fill="#232836" />
          <line x1="68" y1="48" x2="68" y2="56" />
          <line x1="88" y1="48" x2="88" y2="56" />
        </g>
      );
    case 'market':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="24,28 96,28 88,16 32,16" fill="#b8432f" />
          <line x1="28" y1="28" x2="28" y2="54" />
          <line x1="92" y1="28" x2="92" y2="54" />
          <rect x="24" y="44" width="72" height="12" fill="#232836" />
          <circle cx="46" cy="40" r="4" fill="#f2c879" />
          <circle cx="60" cy="40" r="4" fill="#f2c879" />
          <circle cx="74" cy="40" r="4" fill="#f2c879" />
        </g>
      );
    case 'night':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M78 18 A12 12 0 1 0 92 32 A9 9 0 1 1 78 18 Z" fill="#f2c879" />
          <circle cx="36" cy="22" r="1.5" fill="#f2c879" />
          <circle cx="52" cy="16" r="1.5" fill="#f2c879" />
          <line x1="24" y1="56" x2="96" y2="56" />
          <path d="M38 56 L38 38 L52 38" />
          <polygon points="46,38 58,38 62,46 42,46" fill="#b8432f" />
        </g>
      );
    case 'rain':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M36 32 C36 24, 46 20, 56 22 C62 16, 76 18, 78 26 C86 26, 88 34, 80 36 L38 36 C32 36, 32 32, 36 32 Z" fill="#232836" />
          <line x1="42" y1="42" x2="38" y2="52" stroke="#8ab4f8" />
          <line x1="56" y1="42" x2="52" y2="52" stroke="#8ab4f8" />
          <line x1="70" y1="42" x2="66" y2="52" stroke="#8ab4f8" />
          <line x1="82" y1="42" x2="78" y2="52" stroke="#8ab4f8" />
        </g>
      );
    case 'mountain':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="18,56 48,22 76,56" fill="#232836" />
          <polygon points="52,56 78,28 102,56" fill="#1e2430" />
          <circle cx="92" cy="18" r="6" fill="#b8432f" />
        </g>
      );
    case 'workshop':
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="24" y="42" width="72" height="12" fill="#232836" />
          <line x1="32" y1="54" x2="32" y2="62" />
          <line x1="88" y1="54" x2="88" y2="62" />
          <rect x="44" y="24" width="32" height="12" fill="#b8432f" />
          <line x1="60" y1="36" x2="60" y2="42" />
        </g>
      );
    case 'phone':
    default:
      return (
        <g stroke="#d9b26f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="44" y="12" width="32" height="48" rx="4" fill="#232836" />
          <line x1="54" y1="17" x2="66" y2="17" />
          <circle cx="60" cy="54" r="2" fill="#f2c879" />
          <rect x="50" y="24" width="20" height="10" rx="2" fill="#b8432f" />
          <line x1="50" y1="40" x2="68" y2="40" />
        </g>
      );
  }
}
