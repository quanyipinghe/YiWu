/**
 * 应用全流程遥控器交互集成测试。
 *
 * 全程不使用鼠标点击业务按钮，仅通过派发键盘事件
 * （ArrowUp / ArrowDown / ArrowLeft / ArrowRight / Enter / Escape）
 * 验证：
 * 1. 首页初次进入默认聚焦「抽取今日一悟」，按 Enter 抽取后聚焦「读懂这句话」，长按 Enter 不重复抽签。
 * 2. 详情页三段式阅读、阅读滚动模式进入与退出、从详情返回恢复原焦点。
 * 3. 收藏页分类筛选、从详情返回恢复原卡片焦点、删除收藏后焦点移到相邻卡片或空状态按钮且不丢失。
 * 4. 足迹页分页浏览与从详情返回恢复原页码与焦点。
 * 5. 设置页清空数据二次确认弹窗焦点限制与恢复。
 */
import { act } from 'react';
import ReactDOM from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App, type AppProps } from '../app/App';
import { AppStorage } from '../storage/storage';
import { createEmptyData } from '../storage/schema';
import { createRepo, DEFAULT_REPO } from '../data/content';

// 启用 React 18 act 环境标记
(window as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: ReactDOM.Root | null = null;
let container: HTMLDivElement | null = null;

function renderApp(props?: AppProps): void {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = ReactDOM.createRoot(container);
  act(() => {
    root!.render(<App {...props} />);
  });
}

function pressKey(key: string, keyCode: number, options?: { repeat?: boolean }): void {
  act(() => {
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key,
        keyCode,
        repeat: options?.repeat || false,
        bubbles: true,
        cancelable: true,
      }),
    );
    if (!options?.repeat) {
      window.dispatchEvent(
        new KeyboardEvent('keyup', {
          key,
          keyCode,
          bubbles: true,
          cancelable: true,
        }),
      );
    }
  });
}

const KEYS = {
  up: () => pressKey('ArrowUp', 38),
  down: () => pressKey('ArrowDown', 40),
  left: () => pressKey('ArrowLeft', 37),
  right: () => pressKey('ArrowRight', 39),
  enter: (repeat = false) => pressKey('Enter', 13, { repeat }),
  back: () => pressKey('Escape', 27),
};

function activeFocusId(): string | null {
  const el = document.activeElement as HTMLElement | null;
  return el ? el.getAttribute('data-focus-id') : null;
}

beforeEach(() => {
  container = null;
  root = null;
});

afterEach(() => {
  if (root) {
    act(() => {
      root!.unmount();
    });
    root = null;
  }
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
    container = null;
  }
});

describe('全流程遥控器操作闭环 (App Integration)', () => {
  it.each([['?tv=0', 1], ['?tv=1', 1], ['?tv=1', 2]] as const)('延伸阅读卡片直接跳转，遥控器跟随单列或双列布局（%s，%i 列）', (search, columns) => {
    const storage = new AppStorage(window.localStorage);
    const seed = createEmptyData();
    seed.favorites = [{ id: 'san-si-er-hou-xing', addedAt: 1 }];
    storage.save(seed);
    const repo = createRepo([
      {
        ...DEFAULT_REPO.get('san-si-er-hou-xing')!,
        contrastIds: ['wang-yang-bu-lao'],
        relatedIds: ['mo-dao-bu-wu-kan-chai-gong'],
      },
      DEFAULT_REPO.get('wang-yang-bu-lao')!,
      DEFAULT_REPO.get('mo-dao-bu-wu-kan-chai-gong')!,
    ]);
    renderApp({ repo, storage, search, initialRoute: 'favorites' });
    const button = (id: string) =>
      document.querySelector<HTMLButtonElement>('[data-focus-id="' + id + '"]')!;
    act(() => button('fav-open-san-si-er-hou-xing').click());
    act(() => button('detail-step-3').click());
    const cards = document.querySelectorAll<HTMLButtonElement>('button.relation-card');
    expect(cards.length).toBe(2);
    if (search === '?tv=1') {
      cards.forEach((card, index) => {
        const left = (index % columns) * 220;
        const top = Math.floor(index / columns) * 180;
        card.getBoundingClientRect = () => ({
          left, top, right: left + 200, bottom: top + 160,
          width: 200, height: 160, x: left, y: top, toJSON: () => ({}),
        });
      });
      act(() => button('detail-back').focus());
      KEYS.down();
      expect(activeFocusId()).toBe('detail-contrast-wang-yang-bu-lao');
      if (columns === 1) KEYS.down();
      else KEYS.right();
      expect(activeFocusId()).toBe('detail-related-mo-dao-bu-wu-kan-chai-gong');
      KEYS.enter();
    } else {
      act(() => cards[1].click());
    }
    expect(document.querySelector('[data-testid="detail-proverb-title"]')?.textContent)
      .toBe('磨刀不误砍柴工');
    act(() => button('detail-back').click());
    expect(document.querySelector('[data-testid="detail-proverb-title"]')?.textContent)
      .toBe('三思而后行');
  });

  it('显示模式切换同步根字号模式，卸载后清理，普通模式不提供遥控器阅读入口', () => {
    renderApp({ search: '', initialRoute: 'settings' });
    const button = (id: string) =>
      document.querySelector<HTMLButtonElement>('[data-focus-id="' + id + '"]')!;

    act(() => button('settings-mode-normal').click());
    expect(document.documentElement.getAttribute('data-display-mode')).toBe('normal');
    act(() => button('settings-mode-tv').click());
    expect(document.documentElement.getAttribute('data-display-mode')).toBe('tv');
    act(() => button('settings-mode-normal').click());
    act(() => button('nav-today').click());
    act(() => button('today-draw').click());
    act(() => button('today-read').click());
    expect(document.querySelector('[data-focus-id="detail-read-area"]')).toBeNull();
    act(() => root!.unmount());
    root = null;
    expect(document.documentElement.hasAttribute('data-display-mode')).toBe(false);
  });

  it.each(['?tv=0', '?tv=1'])('鼠标分段阅读仅显示当前段，支持前后切换（%s）', (search) => {
    renderApp({ search, random: () => 0 });

    const button = (id: string) =>
      document.querySelector<HTMLButtonElement>('[data-focus-id="' + id + '"]')!;
    const click = (id: string) => act(() => button(id).click());
    const expectStep = (step: number) => {
      expect(document.querySelector('[data-testid="detail-step-heading"]')?.textContent)
        .toContain('（' + step + ' / 3）');
      expect(document.querySelectorAll('.detail-step-content').length).toBe(1);
      expect(document.querySelector('[data-testid="detail-step-content-' + step + '"]'))
        .not.toBeNull();
    };

    click('today-draw');
    click('today-read');
    expectStep(1);
    expect(button('detail-prev').disabled).toBe(true);

    click('detail-next');
    expectStep(2);
    expect(document.querySelector('[data-testid="story-viewer"]')).not.toBeNull();
    expect(button('detail-prev').disabled).toBe(false);

    click('detail-prev');
    expectStep(1);
    click('detail-next');
    click('detail-next');
    expectStep(3);
    expect(button('detail-next').disabled).toBe(true);

    click('detail-prev');
    expectStep(2);
    click('detail-step-3');
    expectStep(3);
    click('detail-step-1');
    expectStep(1);
    click('detail-back');
    expect(document.querySelector('[data-testid="revealed-card"]')).not.toBeNull();
  });

  it('首页抽签、长按确认防重、进入详情分段阅读、阅读滚动模式与返回恢复焦点', () => {
    let currentDay = new Date(2026, 9, 24, 9, 0, 0);
    renderApp({
      now: () => currentDay,
      random: () => 0,
    });

    // 1. 未抽签时，初次进入默认聚焦 today-draw，且背景色为聚焦暖金色
    expect(activeFocusId()).toBe('today-draw');
    expect(
      window.getComputedStyle(document.activeElement as HTMLElement).backgroundColor,
    ).toBe('rgb(242, 200, 121)');

    // 2. 按 Enter 抽取今日一悟，长按重复 Enter 不会报错或重复抽取
    KEYS.enter(false);
    KEYS.enter(true);
    expect(activeFocusId()).toBe('today-read');
    expect(document.querySelector('[data-testid="today-proverb-text"]')).not.toBeNull();

    // 3. 向右移到「收藏这句话」，按 Enter 收藏，再按左回到「读懂这句话」
    KEYS.right();
    expect(activeFocusId()).toBe('today-favorite');
    KEYS.enter();
    expect((document.activeElement as HTMLElement).getAttribute('aria-pressed')).toBe('true');

    KEYS.left();
    expect(activeFocusId()).toBe('today-read');

    // 4. 按 Enter 进入详情页，默认聚焦「下一段」(detail-next)
    KEYS.enter();
    expect(activeFocusId()).toBe('detail-next');
    expect(document.querySelector('[data-testid="detail-step-content-1"]')).not.toBeNull();

    // 5. 按 Enter 进入第二步（四格生活故事）
    KEYS.enter();
    expect(document.querySelector('[data-testid="detail-step-content-2"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="story-fiction-badge"]')?.textContent).toContain(
      '虚构生活情境',
    );
    expect(document.querySelectorAll('.story-panel').length).toBe(4);

    // 6. 再按 Enter 进入第三步（深入理解与适用边界），此时 detail-next 被禁用，焦点自动移到有效按钮
    KEYS.enter();
    expect(document.querySelector('[data-testid="detail-step-content-3"]')).not.toBeNull();
    expect(activeFocusId()).toBe('detail-back');

    // 7. 向上聚焦 detail-read-area，按 Enter 进入阅读滚动模式，上下键滚动，按 Escape 退出阅读滚动模式
    KEYS.up();
    expect(activeFocusId()).toBe('detail-read-area');
    KEYS.enter();
    const articleBox = document.querySelector(
      '[data-testid="detail-article-box"]',
    ) as HTMLElement;
    expect(articleBox.classList.contains('is-reading-mode')).toBe(true);

    KEYS.down();
    expect(articleBox.scrollTop).toBe(120);
    KEYS.up();
    expect(articleBox.scrollTop).toBe(0);

    // 按返回键优先退出阅读滚动模式，而不是直接离开详情页
    KEYS.back();
    expect(articleBox.classList.contains('is-reading-mode')).toBe(false);
    expect(activeFocusId()).toBe('detail-read-area');

    // 8. 再次按返回键，从详情页返回今日页，并恢复之前记住的焦点 today-read
    KEYS.back();
    expect(activeFocusId()).toBe('today-read');

    // 9. 跨天后触发窗口 focus，自动切换到新日期并聚焦 today-draw
    currentDay = new Date(2026, 9, 25, 8, 0, 0);
    act(() => {
      window.dispatchEvent(new Event('focus'));
    });
    expect(document.querySelector('[data-testid="unrevealed-card"]')).not.toBeNull();
  });

  it('收藏页筛选、从详情返回恢复原卡片焦点、删除收藏后聚焦相邻卡片或空状态按钮', () => {
    const storage = new AppStorage(window.localStorage);
    const seed = createEmptyData();
    seed.favorites = [
      { id: 'yi-kou-chi-bu-cheng-pang-zi', addedAt: 3000 }, // 俗语
      { id: 'wang-yang-bu-lao', addedAt: 2000 }, // 成语
    ];
    storage.save(seed);

    renderApp({ storage, initialRoute: 'favorites' });

    // 初次进入收藏页，默认聚焦第一张收藏卡片
    expect(activeFocusId()).toBe('fav-open-yi-kou-chi-bu-cheng-pang-zi');

    // 向下移动到第二张收藏卡片 wang-yang-bu-lao，按 Enter 进入详情页
    KEYS.down();
    expect(activeFocusId()).toBe('fav-open-wang-yang-bu-lao');
    KEYS.enter();
    expect(activeFocusId()).toBe('detail-next');

    // 按返回键回到收藏页，自动恢复到刚才点击的第二张卡片 fav-open-wang-yang-bu-lao
    KEYS.back();
    expect(activeFocusId()).toBe('fav-open-wang-yang-bu-lao');

    // 向右移到第二张卡片的「取消收藏」按钮并按 Enter 删除：焦点自动移到剩余的相邻卡片
    KEYS.right();
    expect(activeFocusId()).toBe('fav-remove-wang-yang-bu-lao');
    KEYS.enter();
    expect(activeFocusId()).toBe('fav-open-yi-kou-chi-bu-cheng-pang-zi');

    // 再把最后一张收藏也删除：焦点自动移到空状态按钮 fav-empty-action，绝不丢失到 body
    KEYS.right();
    expect(activeFocusId()).toBe('fav-remove-yi-kou-chi-bu-cheng-pang-zi');
    KEYS.enter();
    expect(activeFocusId()).toBe('fav-empty-action');
    expect(document.activeElement).not.toBe(document.body);
  });

  it('足迹页分页浏览，从详情页返回后恢复原页码与原卡片焦点', () => {
    const storage = new AppStorage(window.localStorage);
    const seed = createEmptyData();
    // 构造 6 条不同日期的历史记录（每页 5 条，共 2 页）
    const ids = [
      'yi-kou-chi-bu-cheng-pang-zi',
      'yuan-qin-bu-ru-jin-lin',
      'mo-dao-bu-wu-kan-chai-gong',
      'chi-yi-qian-zhang-yi-zhi',
      'zhong-ren-shi-chai-huo-yan-gao',
      'wang-yang-bu-lao',
    ];
    seed.history = ids.map((id, i) => ({
      date: '2026-10-0' + (i + 1),
      id,
      drawnAt: (i + 1) * 1000,
    }));
    storage.save(seed);

    renderApp({ storage, initialRoute: 'history' });

    // 第 1 页默认聚焦最新日期 2026-10-06
    expect(activeFocusId()).toBe('history-item-2026-10-06');
    expect(
      document.querySelector('[data-testid="history-page-indicator"]')?.textContent,
    ).toContain('第 1 / 2 页');

    // 连续按 5 次下方向键到达分页按钮「下一页」(history-next)，按 Enter 翻到第 2 页
    for (let i = 0; i < 5; i++) KEYS.down();
    expect(activeFocusId()).toBe('history-next');
    KEYS.enter();
    expect(
      document.querySelector('[data-testid="history-page-indicator"]')?.textContent,
    ).toContain('第 2 / 2 页');

    // 按上键聚焦第 2 页的卡片 history-item-2026-10-01，按 Enter 进入详情页
    KEYS.up();
    expect(activeFocusId()).toBe('history-item-2026-10-01');
    KEYS.enter();
    expect(activeFocusId()).toBe('detail-next');

    // 按返回键回到足迹页：依然保持在第 2 页，且焦点恢复到 history-item-2026-10-01
    KEYS.back();
    expect(
      document.querySelector('[data-testid="history-page-indicator"]')?.textContent,
    ).toContain('第 2 / 2 页');
    expect(activeFocusId()).toBe('history-item-2026-10-01');
  });

  it('设置页清空数据弹窗：打开时聚焦取消、焦点限制在弹窗内、返回关闭恢复焦点、确认清空生效', () => {
    const storage = new AppStorage(window.localStorage);
    const seed = createEmptyData();
    seed.favorites = [{ id: 'wang-yang-bu-lao', addedAt: 100 }];
    storage.save(seed);

    renderApp({ storage, initialRoute: 'settings' });

    expect(activeFocusId()).toBe('settings-mode-tv');
    // 向下两次到达「清空本地收藏与足迹」按钮
    KEYS.down();
    expect(activeFocusId()).toBe('settings-motion-full');
    KEYS.down();
    expect(activeFocusId()).toBe('settings-clear-data');

    // 按 Enter 打开二次确认弹窗，默认聚焦「取消」(confirm-clear-cancel)
    KEYS.enter();
    expect(activeFocusId()).toBe('confirm-clear-cancel');

    // 在弹窗内按上、下、左键不会逃出弹窗
    KEYS.up();
    KEYS.down();
    KEYS.left();
    expect(activeFocusId()).toBe('confirm-clear-cancel');

    // 按返回键关闭弹窗，焦点恢复到 settings-clear-data，且数据未被清空
    KEYS.back();
    expect(activeFocusId()).toBe('settings-clear-data');
    expect(storage.load().data.favorites.length).toBe(1);

    // 再次按 Enter 打开弹窗，按右键移到「确认清空」(confirm-clear-confirm)，按 Enter 执行清空
    KEYS.enter();
    KEYS.right();
    expect(activeFocusId()).toBe('confirm-clear-confirm');
    KEYS.enter();

    // 弹窗关闭，焦点恢复到 settings-clear-data，且本地收藏已被清空
    expect(activeFocusId()).toBe('settings-clear-data');
    expect(storage.load().data.favorites.length).toBe(0);
  });

  it('分类筛选切换导致原条目消失时焦点不丢失，且支持遥控器开关 TV 调试面板与 ?tv=0 覆盖', () => {
    const storage = new AppStorage(window.localStorage);
    const seed = createEmptyData();
    seed.favorites = [{ id: 'wang-yang-bu-lao', addedAt: 1000 }]; // 成语
    storage.save(seed);

    // 1. 先验证 ?tv=0 显式参数覆盖为普通模式（普通模式下不强制抢夺焦点）
    renderApp({
      storage,
      initialRoute: 'favorites',
      search: '?tv=0',
      showDebugEntry: true,
    });
    expect(document.querySelector('.app-shell')?.getAttribute('data-mode')).toBe('normal');
    expect(activeFocusId()).toBeNull();
    act(() => {
      root?.unmount();
    });
    container?.remove();
    root = null;
    container = null;

    // 2. 在 TV 模式（?tv=1）下测试遥控器方向键切换分类与开启 TV 调试面板
    renderApp({
      storage,
      initialRoute: 'favorites',
      search: '?tv=1',
      showDebugEntry: true,
    });

    expect(document.querySelector('.app-shell')?.getAttribute('data-mode')).toBe('tv');
    expect(activeFocusId()).toBe('fav-open-wang-yang-bu-lao');

    // 向上移到「全部」筛选项，再向右移到「俗语」筛选项并按 Enter（该分类下无 wang-yang-bu-lao）
    KEYS.up();
    expect(activeFocusId()).toBe('fav-filter-all');
    KEYS.right();
    expect(activeFocusId()).toBe('fav-filter-suyu');
    KEYS.enter();

    // 筛选后原卡片消失，焦点保持在当前筛选项 fav-filter-suyu，按向下键进入空状态按钮
    expect(activeFocusId()).toBe('fav-filter-suyu');
    KEYS.down();
    expect(activeFocusId()).toBe('fav-empty-action');

    // 从左侧主导航进入「设置」页，用遥控器开启 TV 调试面板
    KEYS.left();
    expect(activeFocusId()).toBe('nav-favorites');
    KEYS.down();
    KEYS.down();
    expect(activeFocusId()).toBe('nav-settings');
    KEYS.enter();
    expect(activeFocusId()).toBe('settings-mode-tv');

    // 在设置页向下移动到「开启 TV 调试面板」按钮并按 Enter
    KEYS.down(); // settings-motion-reduced
    KEYS.down(); // settings-clear-data
    KEYS.down(); // settings-toggle-debug
    expect(activeFocusId()).toBe('settings-toggle-debug');
    expect(document.querySelector('[data-testid="tv-debug-panel"]')).toBeNull();

    KEYS.enter();
    expect(document.querySelector('[data-testid="tv-debug-panel"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="debug-focus-id"]')?.textContent).toBe(
      'settings-toggle-debug',
    );
  });
});
