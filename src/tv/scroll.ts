/**
 * 滚动兼容工具。
 *
 * 不直接依赖 scrollIntoView 的 options（不同内核对 block: 'nearest'、
 * behavior: 'smooth' 支持不一），而是自己计算最近可滚动祖先的 scrollTop，
 * 只在目标不完全可见时做最小距离的即时滚动，避免每次按键整页跳动。
 */

/** 判断元素是否为可纵向滚动容器 */
function isScrollableY(el: HTMLElement): boolean {
  if (el.scrollHeight <= el.clientHeight + 1) return false;
  const style = window.getComputedStyle(el);
  const oy = style.overflowY;
  return oy === 'auto' || oy === 'scroll';
}

/** 查找最近的可纵向滚动祖先；没有则返回 null（使用窗口滚动） */
export function findScrollParent(el: HTMLElement): HTMLElement | null {
  let node = el.parentElement;
  while (node && node !== document.body && node !== document.documentElement) {
    if (isScrollableY(node)) return node;
    node = node.parentElement;
  }
  return null;
}

/**
 * 让元素在滚动容器内可见。
 * @param margin 额外留白（像素），让焦点元素不贴边
 */
export function scrollIntoViewIfNeeded(el: HTMLElement, margin?: number): void {
  const parent = findScrollParent(el);
  const rect = el.getBoundingClientRect();
  if (parent) {
    const pRect = parent.getBoundingClientRect();
    const m = typeof margin === 'number' ? margin : Math.min(48, pRect.height * 0.08);
    let delta = 0;
    if (rect.top < pRect.top + m) {
      delta = rect.top - pRect.top - m;
    } else if (rect.bottom > pRect.bottom - m) {
      delta = rect.bottom - pRect.bottom + m;
      // 元素比容器还高时，以顶部对齐为准
      if (rect.height > pRect.height - m * 2) delta = rect.top - pRect.top - m;
    }
    if (delta !== 0) parent.scrollTop = parent.scrollTop + delta;
    return;
  }
  // 窗口滚动（普通模式下文档可能整体滚动）
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const m = typeof margin === 'number' ? margin : Math.min(48, vh * 0.08);
  if (rect.top < m) {
    window.scrollBy(0, rect.top - m);
  } else if (rect.bottom > vh - m) {
    window.scrollBy(0, rect.bottom - vh + m);
  }
}

/** 支持 preventScroll 时使用它，避免浏览器自带滚动与我们的滚动叠加 */
let preventScrollSupported: boolean | null = null;

function detectPreventScroll(): boolean {
  if (preventScrollSupported !== null) return preventScrollSupported;
  preventScrollSupported = false;
  try {
    const probe = document.createElement('div');
    probe.focus({
      get preventScroll() {
        preventScrollSupported = true;
        return true;
      },
    } as FocusOptions);
  } catch (e) {
    preventScrollSupported = false;
  }
  return preventScrollSupported;
}

/** 聚焦元素且不触发浏览器默认滚动（不支持时退回普通 focus） */
export function focusWithoutScroll(el: HTMLElement): void {
  if (detectPreventScroll()) {
    el.focus({ preventScroll: true });
  } else {
    el.focus();
  }
}
