/**
 * 焦点管理、遥控器输入层与聚焦背景色单元测试。
 */
import { describe, expect, it, vi } from 'vitest';
import { FocusManager } from '../tv/FocusManager';
import { InputManager } from '../tv/InputManager';
import { DEFAULT_KEYMAP, mergeKeyMap, resolveAction } from '../tv/keymap';
import { installBackBridge } from '../tv/backBridge';
import type { RectLike } from '../tv/geometry';

function makeBtn(id: string, group: string): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'tv-focusable btn btn-default';
  btn.textContent = id;
  btn.setAttribute('data-focus-id', id);
  btn.setAttribute('data-focus-group', group);
  document.body.appendChild(btn);
  return btn;
}

describe('焦点管理与四方向移动 (FocusManager)', () => {
  it('四方向移动、分组边界停留与几何方向查找符合预期', () => {
    const rects: Record<string, RectLike> = {
      g1: { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 },
      g2: { left: 120, top: 0, right: 220, bottom: 40, width: 100, height: 40 },
      g3: { left: 0, top: 60, right: 100, bottom: 100, width: 100, height: 40 },
      g4: { left: 120, top: 60, right: 220, bottom: 100, width: 100, height: 40 },
    };

    const fm = new FocusManager({
      getRect: (el) => rects[el.getAttribute('data-focus-id') || ''] || rects.g1,
      isVisible: () => true,
    });
    const detach = fm.attach(document);

    fm.registerGroup('grid', () => ({
      layout: 'grid',
      exits: { left: null, right: null, up: null, down: null },
    }));

    const b1 = makeBtn('g1', 'grid');
    const b2 = makeBtn('g2', 'grid');
    const b3 = makeBtn('g3', 'grid');
    const b4 = makeBtn('g4', 'grid');

    fm.registerItem('g1', b1, () => ({ group: 'grid' }));
    fm.registerItem('g2', b2, () => ({ group: 'grid' }));
    fm.registerItem('g3', b3, () => ({ group: 'grid' }));
    fm.registerItem('g4', b4, () => ({ group: 'grid' }));

    expect(fm.focus('g1')).toBe(true);
    expect(document.activeElement).toBe(b1);

    // 向右到 g2
    expect(fm.move('right').to).toBe('g2');
    expect(document.activeElement).toBe(b2);

    // 在右边界继续按右：停留，不循环跳转
    expect(fm.move('right').to).toBeNull();
    expect(document.activeElement).toBe(b2);

    // 向下到 g4
    expect(fm.move('down').to).toBe('g4');
    expect(document.activeElement).toBe(b4);

    // 向左到 g3
    expect(fm.move('left').to).toBe('g3');
    expect(document.activeElement).toBe(b3);

    // 向上回到 g1
    expect(fm.move('up').to).toBe('g1');
    expect(document.activeElement).toBe(b1);

    // 在上边界继续按上：停留
    expect(fm.move('up').to).toBeNull();
    expect(document.activeElement).toBe(b1);

    detach();
  });

  it('隐藏或禁用元素不会获得焦点', () => {
    const fm = new FocusManager();
    fm.registerGroup('list', () => ({ layout: 'vertical' }));

    const b1 = makeBtn('item-1', 'list');
    const bDisabled = makeBtn('item-disabled', 'list');
    bDisabled.disabled = true;
    const bHidden = makeBtn('item-hidden', 'list');
    bHidden.hidden = true;
    const bDisplayNone = makeBtn('item-none', 'list');
    bDisplayNone.style.display = 'none';
    const bLast = makeBtn('item-last', 'list');

    fm.registerItem('item-1', b1, () => ({ group: 'list' }));
    fm.registerItem('item-disabled', bDisabled, () => ({ group: 'list' }));
    fm.registerItem('item-hidden', bHidden, () => ({ group: 'list' }));
    fm.registerItem('item-none', bDisplayNone, () => ({ group: 'list' }));
    fm.registerItem('item-last', bLast, () => ({ group: 'list' }));

    expect(fm.focus('item-disabled')).toBe(false);
    expect(fm.focus('item-hidden')).toBe(false);
    expect(fm.focus('item-none')).toBe(false);

    expect(fm.focus('item-1')).toBe(true);
    // 向下移动自动跳过中间所有禁用和隐藏元素，直接落到 item-last
    expect(fm.move('down').to).toBe('item-last');
    expect(document.activeElement).toBe(bLast);
  });

  it('打开弹窗后焦点限制在弹窗内，关闭弹窗恢复原焦点', () => {
    const fm = new FocusManager();
    const detach = fm.attach(document);

    fm.registerGroup('bg', () => ({ layout: 'horizontal' }));
    const bgBtn = makeBtn('bg-btn', 'bg');
    fm.registerItem('bg-btn', bgBtn, () => ({ group: 'bg' }));

    const modalBox = document.createElement('div');
    document.body.appendChild(modalBox);
    const modalCancel = document.createElement('button');
    modalCancel.className = 'tv-focusable';
    modalBox.appendChild(modalCancel);
    const modalConfirm = document.createElement('button');
    modalConfirm.className = 'tv-focusable';
    modalBox.appendChild(modalConfirm);

    fm.registerGroup('modal', () => ({ layout: 'horizontal', remember: false }));
    fm.registerItem('modal-cancel', modalCancel, () => ({ group: 'modal' }));
    fm.registerItem('modal-confirm', modalConfirm, () => ({ group: 'modal' }));

    expect(fm.focus('bg-btn')).toBe(true);
    expect(document.activeElement).toBe(bgBtn);

    // 打开弹窗作用域
    const popScope = fm.pushScope('confirm', modalBox, ['modal-cancel']);
    expect(document.activeElement).toBe(modalCancel);

    // 弹窗打开期间，尝试聚焦背景元素必须失败
    expect(fm.focus('bg-btn')).toBe(false);
    expect(document.activeElement).toBe(modalCancel);

    // 即使外部强行对背景按钮调用 DOM focus()，focusin 守卫也会立即拉回弹窗内
    bgBtn.focus();
    expect(document.activeElement).toBe(modalCancel);

    // 关闭弹窗后，焦点恢复到打开弹窗前的 bg-btn
    popScope();
    expect(document.activeElement).toBe(bgBtn);

    detach();
  });
});

describe('遥控器输入层与宿主桥接 (InputManager & keymap & backBridge)', () => {
  it('确认键只触发一次操作，长按确认不会重复触发，长按方向键节流', () => {
    const fm = new FocusManager();
    const input = new InputManager(fm, DEFAULT_KEYMAP, {
      repeatIntervalMs: 120,
      holdWindowMs: 250,
    });
    const stop = input.start(window);

    fm.registerGroup('row', () => ({ layout: 'horizontal' }));
    const b1 = makeBtn('b1', 'row');
    const b2 = makeBtn('b2', 'row');
    const b3 = makeBtn('b3', 'row');
    fm.registerItem('b1', b1, () => ({ group: 'row' }));
    fm.registerItem('b2', b2, () => ({ group: 'row' }));
    fm.registerItem('b3', b3, () => ({ group: 'row' }));

    let clicks = 0;
    b1.addEventListener('click', () => {
      clicks++;
    });

    fm.focus('b1');

    // 按一次 Enter：只触发 1 次 click，且 defaultPrevented 为 true（阻止浏览器再触发原生按钮 click）
    const enterDown1 = new KeyboardEvent('keydown', {
      key: 'Enter',
      keyCode: 13,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(enterDown1);
    expect(enterDown1.defaultPrevented).toBe(true);
    expect(clicks).toBe(1);

    // 长按产生的重复 keydown（repeat: true 或未松开按键）：不重复触发 click
    const enterRepeat1 = new KeyboardEvent('keydown', {
      key: 'Enter',
      keyCode: 13,
      repeat: true,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(enterRepeat1);
    const enterRepeatNoFlag = new KeyboardEvent('keydown', {
      key: 'Enter',
      keyCode: 13,
      repeat: false,
      bubbles: true,
      cancelable: true,
    });
    window.dispatchEvent(enterRepeatNoFlag);
    expect(clicks).toBe(1);

    // 松开按键后再按一次：可以再次触发
    window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', keyCode: 13, bubbles: true }));
    window.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true, cancelable: true }),
    );
    expect(clicks).toBe(2);

    // 测试旧浏览器仅提供 keyCode（例如 keyCode 39 = 右方向键）与长按方向键节流
    const nowSpy = vi.spyOn(Date, 'now');
    nowSpy.mockReturnValue(1000);
    window.dispatchEvent(
      new KeyboardEvent('keydown', { key: '', keyCode: 39, bubbles: true, cancelable: true }),
    );
    expect(fm.getActiveId()).toBe('b2');

    // 50ms 内的长按重复方向键被节流拦截
    nowSpy.mockReturnValue(1050);
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        keyCode: 39,
        repeat: true,
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(fm.getActiveId()).toBe('b2');

    // 超过 120ms 后允许继续移动
    nowSpy.mockReturnValue(1200);
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        keyCode: 39,
        repeat: true,
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(fm.getActiveId()).toBe('b3');

    nowSpy.mockRestore();
    stop();
  });

  it('支持电视返回键 keyCode 461、可配置按键映射与 window.tvApp.handleBack() 宿主桥接', () => {
    expect(resolveAction({ key: 'Unidentified', keyCode: 461 }, DEFAULT_KEYMAP)).toBe('back');
    expect(resolveAction({ key: '', keyCode: 38 }, DEFAULT_KEYMAP)).toBe('up');

    const custom = mergeKeyMap(DEFAULT_KEYMAP, { back: { keyCodes: [999] } }, 'append');
    expect(resolveAction({ keyCode: 999 }, custom)).toBe('back');

    let backCalled = 0;
    const uninstall = installBackBridge(window, () => {
      backCalled++;
      return true;
    });
    expect(window.tvApp?.handleBack()).toBe(true);
    expect(backCalled).toBe(1);
    uninstall();
  });
});

describe('聚焦样式验证：获得焦点时背景色明显改变，并区分 selected 与 focused', () => {
  it('所有可操作元素聚焦后背景色从深色变为暖金色 #f2c879，且 selected 与 focused 不混淆', () => {
    const fm = new FocusManager();
    const detach = fm.attach(document);
    fm.registerGroup('nav', () => ({ layout: 'vertical' }));

    const navToday = makeBtn('nav-today', 'nav');
    navToday.classList.add('btn-nav', 'is-selected');
    const navFav = makeBtn('nav-favorites', 'nav');
    navFav.classList.add('btn-nav');

    fm.registerItem('nav-today', navToday, () => ({ group: 'nav' }));
    fm.registerItem('nav-favorites', navFav, () => ({ group: 'nav' }));

    // 1. 未聚焦时：普通按钮为 #222631 (rgb(34, 38, 49))，selected 按钮为 #332425 (rgb(51, 36, 37))
    const unfocusedNormalBg = window.getComputedStyle(navFav).backgroundColor;
    const unfocusedSelectedBg = window.getComputedStyle(navToday).backgroundColor;
    expect(unfocusedNormalBg).toBe('rgb(34, 38, 49)');
    expect(unfocusedSelectedBg).toBe('rgb(51, 36, 37)');
    expect(unfocusedNormalBg).not.toBe(unfocusedSelectedBg);

    // 2. 聚焦 nav-favorites 时：背景色明显改变为 #f2c879 (rgb(242, 200, 121))，文字变为 #1c2028 (rgb(28, 32, 40))
    fm.focus('nav-favorites');
    const focusedBg = window.getComputedStyle(navFav).backgroundColor;
    const focusedColor = window.getComputedStyle(navFav).color;
    expect(focusedBg).toBe('rgb(242, 200, 121)');
    expect(focusedColor).toBe('rgb(28, 32, 40)');
    expect(focusedBg).not.toBe(unfocusedNormalBg);

    // 此时 nav-today 仍处于 selected 状态，但未聚焦，背景色保持 selected 底色而非聚焦色
    expect(window.getComputedStyle(navToday).backgroundColor).toBe('rgb(51, 36, 37)');

    // 3. 当焦点移到已处于 selected 的 nav-today 时，背景色同样变为聚焦暖金色 #f2c879
    fm.focus('nav-today');
    expect(window.getComputedStyle(navToday).backgroundColor).toBe('rgb(242, 200, 121)');
    expect(window.getComputedStyle(navFav).backgroundColor).toBe('rgb(34, 38, 49)');

    detach();
  });
});
