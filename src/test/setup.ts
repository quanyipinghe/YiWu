/**
 * Vitest + jsdom 测试环境初始化。
 *
 * 说明：
 * 1. jsdom 没有真实排版引擎，默认 getBoundingClientRect() 全为 0。
 *    这里为可见元素提供默认非零矩形，当元素或祖先带 hidden / display:none / visibility:hidden 时返回全 0，
 *    使焦点可见性判断在单元测试中与真实浏览器一致；具体几何测试可按元素覆盖 getBoundingClientRect。
 * 2. 将真实样式表 src/styles/app.css 注入 document.head，使 getComputedStyle 能真实检验聚焦背景色变化。
 */
import { beforeEach } from 'vitest';
import appCssText from '../styles/app.css?raw';

function ensureStyleInjected(): void {
  if (!document.getElementById('yiwu-test-style')) {
    const style = document.createElement('style');
    style.id = 'yiwu-test-style';
    style.textContent = appCssText;
    document.head.appendChild(style);
  }
}

// 为 jsdom 提供默认 getBoundingClientRect
HTMLElement.prototype.getBoundingClientRect = function (): DOMRect {
  if (!this.isConnected || this.closest('[hidden]')) {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    } as DOMRect;
  }
  let node: HTMLElement | null = this;
  while (node) {
    if (
      node.style &&
      (node.style.display === 'none' || node.style.visibility === 'hidden')
    ) {
      return {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0,
        toJSON: () => ({}),
      } as DOMRect;
    }
    node = node.parentElement;
  }
  return {
    left: 10,
    top: 10,
    right: 170,
    bottom: 58,
    width: 160,
    height: 48,
    x: 10,
    y: 10,
    toJSON: () => ({}),
  } as DOMRect;
};

// 兼容 jsdom 未实现的 scrollBy / scrollTo
window.scrollBy = () => {};
window.scrollTo = () => {};

beforeEach(() => {
  document.body.innerHTML = '';
  ensureStyleInjected();
  try {
    window.localStorage.clear();
  } catch (e) {
    // 忽略自定义 localStorage mock 的情况
  }
});
