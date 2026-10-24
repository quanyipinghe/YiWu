/**
 * 基于矩形的方向查找（纯函数，便于单元测试）。
 *
 * 算法：
 * 1. 先按方向过滤：候选元素必须整体位于当前元素的目标方向一侧
 *    （允许少量重叠容差），且中心点在该方向上更远。
 * 2. 再分层：与当前元素在垂直方向（左右移动时）或水平方向（上下移动时）
 *    存在投影重叠的候选优先。
 * 3. 同层内按「主方向距离 + 侧向偏移 × 权重」打分，避免跳到对角线远处。
 */

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface RectLike {
  left: number;
  top: number;
  right: number;
  bottom: number;
  width: number;
  height: number;
}

export interface Candidate<T> {
  item: T;
  rect: RectLike;
}

/** 重叠容差（像素），用于抵消缩放、边框等造成的轻微重叠 */
const OVERLAP_TOLERANCE = 4;
/** 侧向偏移权重：越大越倾向于同一行 / 同一列 */
const ORTHOGONAL_WEIGHT = 3;

/** 判断候选是否位于指定方向 */
export function isInDirection(from: RectLike, to: RectLike, dir: Direction): boolean {
  const fcx = from.left + from.width / 2;
  const fcy = from.top + from.height / 2;
  const tcx = to.left + to.width / 2;
  const tcy = to.top + to.height / 2;
  switch (dir) {
    case 'right':
      return to.left >= from.right - OVERLAP_TOLERANCE && tcx > fcx;
    case 'left':
      return to.right <= from.left + OVERLAP_TOLERANCE && tcx < fcx;
    case 'down':
      return to.top >= from.bottom - OVERLAP_TOLERANCE && tcy > fcy;
    case 'up':
      return to.bottom <= from.top + OVERLAP_TOLERANCE && tcy < fcy;
    default:
      return false;
  }
}

/** 侧向投影重叠长度（> 0 表示重叠） */
export function orthogonalOverlap(from: RectLike, to: RectLike, dir: Direction): number {
  if (dir === 'left' || dir === 'right') {
    return Math.min(from.bottom, to.bottom) - Math.max(from.top, to.top);
  }
  return Math.min(from.right, to.right) - Math.max(from.left, to.left);
}

/** 主方向上的间距（边到边，最小为 0） */
export function primaryDistance(from: RectLike, to: RectLike, dir: Direction): number {
  switch (dir) {
    case 'right':
      return Math.max(0, to.left - from.right);
    case 'left':
      return Math.max(0, from.left - to.right);
    case 'down':
      return Math.max(0, to.top - from.bottom);
    case 'up':
      return Math.max(0, from.top - to.bottom);
    default:
      return Infinity;
  }
}

/** 侧向偏移：重叠时为两中心的侧向差，不重叠时为边到边间距 */
export function orthogonalDistance(from: RectLike, to: RectLike, dir: Direction): number {
  const overlap = orthogonalOverlap(from, to, dir);
  if (dir === 'left' || dir === 'right') {
    if (overlap > 0) {
      return Math.abs(from.top + from.height / 2 - (to.top + to.height / 2)) * 0.1;
    }
    return to.top > from.bottom ? to.top - from.bottom : from.top - to.bottom;
  }
  if (overlap > 0) {
    return Math.abs(from.left + from.width / 2 - (to.left + to.width / 2)) * 0.1;
  }
  return to.left > from.right ? to.left - from.right : from.left - to.right;
}

/**
 * 在候选中找出指定方向上最合适的目标；找不到返回 null（焦点停留）。
 */
export function findBestCandidate<T>(
  from: RectLike,
  candidates: Array<Candidate<T>>,
  dir: Direction,
): T | null {
  let best: T | null = null;
  let bestTier = Infinity;
  let bestScore = Infinity;
  for (let i = 0; i < candidates.length; i++) {
    const c = candidates[i];
    if (c.rect.width <= 0 || c.rect.height <= 0) continue;
    if (!isInDirection(from, c.rect, dir)) continue;
    const tier = orthogonalOverlap(from, c.rect, dir) > 0 ? 0 : 1;
    const score =
      primaryDistance(from, c.rect, dir) + orthogonalDistance(from, c.rect, dir) * ORTHOGONAL_WEIGHT;
    if (tier < bestTier || (tier === bestTier && score < bestScore)) {
      best = c.item;
      bestTier = tier;
      bestScore = score;
    }
  }
  return best;
}
