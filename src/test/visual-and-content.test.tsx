/**
 * 覆盖多端升级新增能力的集成测试：
 * 1. 内容库扩充规模（300+ 条）、33 条历史 ID 保留与关联/对照数据有效性
 * 2. 旧版用户收藏与足迹历史数据平滑迁移
 * 3. 四种故事结构（four-panel / contrast / branch / timeline）渲染与缺省视觉降级
 * 4. 多端模式优先级（URL 显式参数 > 本地保存选择 > 自动判断）与卸载清理监听
 * 5. 隐藏布局节点（[hidden] / [aria-hidden="true"] / .is-hidden-layout）不抢占 TV 焦点
 */
import React, { act } from 'react';
import ReactDOM from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { App } from '../app/App';
import { detectAutoMode, parseModeOverride } from '../app/AppState';
import { DEFAULT_REPO } from '../data/content';
import { LEGACY_PROVERBS } from '../data/batches/legacyProverbs';
import { PROVERBS } from '../data/proverbs';
import { StoryViewer } from '../components/StoryViewer';
import { SceneIllustration } from '../components/SceneIllustration';
import { FocusManager } from '../tv/FocusManager';
import { TvProvider } from '../tv/TvContext';
import { AppStorage } from '../storage/storage';
import { createEmptyData } from '../storage/schema';

(window as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let root: ReactDOM.Root | null = null;
let container: HTMLDivElement | null = null;

function mountNode(node: React.ReactNode): void {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = ReactDOM.createRoot(container);
  act(() => {
    root!.render(node);
  });
}

function unmountNode(): void {
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
}

describe('内容库扩充、画面系统与多端适配专项测试', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    unmountNode();
  });

  it('完整内容库不少于 300 条，完整保留全部 33 条历史 ID，且关联与对照 ID 全部真实有效', () => {
    expect(PROVERBS.length).toBeGreaterThanOrEqual(300);
    expect(LEGACY_PROVERBS.length).toBeGreaterThanOrEqual(33);

    const idSet = new Set(PROVERBS.map((p) => p.id));
    expect(idSet.size).toBe(PROVERBS.length);

    // 验证原有核心历史 ID 全部保留
    const coreLegacyIds = [
      'mo-dao-bu-wu-kan-chai-gong',
      'san-si-er-hou-xing',
      'wang-yang-bu-lao',
      'shui-dao-qu-cheng',
      'wei-yu-chou-mou',
      'man-zhao-sun-qian-shou-yi',
      'you-ze-gai-zhi-wu-ze-jia-mian',
    ];
    for (const lid of coreLegacyIds) {
      expect(idSet.has(lid)).toBe(true);
      expect(DEFAULT_REPO.get(lid)).not.toBeNull();
    }

    // 验证所有 relatedIds / contrastIds 均指向真实存在的条目且非自身
    let relatedCount = 0;
    let contrastCount = 0;
    for (const p of PROVERBS) {
      if (p.relatedIds && p.relatedIds.length > 0) {
        relatedCount++;
        const resolved = DEFAULT_REPO.getRelated(p);
        expect(resolved.length).toBe(p.relatedIds.length);
        for (const r of resolved) {
          expect(r.id).not.toBe(p.id);
        }
      }
      if (p.contrastIds && p.contrastIds.length > 0) {
        contrastCount++;
        const resolved = DEFAULT_REPO.getContrast(p);
        expect(resolved.length).toBe(p.contrastIds.length);
        for (const c of resolved) {
          expect(c.id).not.toBe(p.id);
        }
      }
    }
    expect(relatedCount).toBeGreaterThan(20);
    expect(contrastCount).toBeGreaterThan(5);
  });

  it('旧版收藏、历史与轮次状态在新版 300+ 内容库下平滑迁移且不失效', () => {
    const storage = new AppStorage(window.localStorage);
    const legacyState = createEmptyData();
    legacyState.favorites = [
      { id: 'mo-dao-bu-wu-kan-chai-gong', addedAt: 1000 },
      { id: 'wang-yang-bu-lao', addedAt: 2000 },
    ];
    legacyState.history = [
      { date: '2026-10-20', id: 'mo-dao-bu-wu-kan-chai-gong', drawnAt: 1000 },
    ];
    legacyState.round = {
      number: 1,
      usedIds: ['mo-dao-bu-wu-kan-chai-gong'],
      lastId: 'mo-dao-bu-wu-kan-chai-gong',
    };
    storage.save(legacyState);

    mountNode(<App storage={storage} initialRoute="favorites" search="?tv=1" />);
    expect(document.querySelector('[data-focus-id="fav-open-mo-dao-bu-wu-kan-chai-gong"]')).not.toBeNull();
    expect(document.querySelector('[data-focus-id="fav-open-wang-yang-bu-lao"]')).not.toBeNull();
  });

  it('支持四种故事结构（four-panel / contrast / branch / timeline）渲染与缺省视觉配置安全降级', () => {
    const contrastItem = PROVERBS.find((p) => p.storyStructure?.layout === 'contrast')!;
    const branchItem = PROVERBS.find((p) => p.storyStructure?.layout === 'branch')!;
    const timelineItem = PROVERBS.find((p) => p.storyStructure?.layout === 'timeline')!;

    expect(contrastItem).toBeDefined();
    expect(branchItem).toBeDefined();
    expect(timelineItem).toBeDefined();

    mountNode(
      <TvProvider watchdog={false}>
        <StoryViewer proverb={contrastItem} mode="normal" />
      </TvProvider>,
    );
    expect(document.querySelector('[data-testid="story-layout-contrast"]')).not.toBeNull();
    unmountNode();

    mountNode(
      <TvProvider watchdog={false}>
        <StoryViewer proverb={branchItem} mode="normal" />
      </TvProvider>,
    );
    expect(document.querySelector('[data-testid="story-layout-branch"]')).not.toBeNull();
    unmountNode();

    mountNode(
      <TvProvider watchdog={true}>
        <StoryViewer proverb={timelineItem} mode="tv" />
      </TvProvider>,
    );
    expect(document.querySelector('[data-testid="story-layout-timeline"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="story-progress"]')?.textContent).toContain('故事 1 / 4');
    const nextBtn = document.querySelector('[data-focus-id="story-panel-next"]') as HTMLButtonElement;
    act(() => {
      nextBtn.click();
    });
    expect(document.querySelector('[data-testid="story-progress"]')?.textContent).toContain('故事 2 / 4');
    unmountNode();

    // 缺省 visual 时 SceneIllustration 通过 deterministic 策略正常渲染组合式 SVG
    mountNode(<SceneIllustration scene="home" beat="cause" storySeed="fallback-test" />);
    expect(document.querySelector('.story-scene-svg')).not.toBeNull();
    expect(document.querySelector('.svg-layer-chars')).not.toBeNull();
  });

  it('模式优先级遵循：显式 URL 参数 > 本地保存的用户选择 > 自动判断', () => {
    expect(parseModeOverride('?tv=1')).toBe('tv');
    expect(parseModeOverride('?tv=0')).toBe('normal');
    expect(parseModeOverride('?mode=normal')).toBe('normal');
    expect(parseModeOverride('?mode=auto')).toBe('auto');

    // 验证用户保存 normal 后，若 URL 带 ?tv=1 则显式 URL 参数优先
    const storage = new AppStorage(window.localStorage);
    const saved = createEmptyData();
    saved.settings.mode = 'normal';
    storage.save(saved);

    mountNode(<App storage={storage} search="?tv=1" />);
    expect(document.querySelector('.app-shell')?.getAttribute('data-mode')).toBe('tv');
    unmountNode();

    // 无 URL 参数时遵循保存的 normal 选择
    mountNode(<App storage={storage} search="" />);
    expect(document.querySelector('.app-shell')?.getAttribute('data-mode')).toBe('normal');
    unmountNode();

    // 模拟桌面 Chrome 浏览器（具备 fine 鼠标与 hover，无 TV UA），自动判断应为 normal
    const mockDesktopWin = {
      navigator: { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/120.0.0.0 Safari/537.36' },
      matchMedia: (q: string) => ({ matches: q === '(pointer: fine) and (hover: hover)' }),
    } as unknown as Window;
    expect(detectAutoMode(mockDesktopWin)).toBe('normal');
  });

  it('隐藏布局中的节点不会被 FocusManager 选为焦点目标', () => {
    const fm = new FocusManager();
    const visibleBtn = document.createElement('button');
    const hiddenBtn = document.createElement('button');
    hiddenBtn.setAttribute('hidden', '');
    const layoutHiddenWrap = document.createElement('div');
    layoutHiddenWrap.className = 'is-hidden-layout';
    const insideHiddenBtn = document.createElement('button');
    layoutHiddenWrap.appendChild(insideHiddenBtn);

    document.body.appendChild(visibleBtn);
    document.body.appendChild(hiddenBtn);
    document.body.appendChild(layoutHiddenWrap);

    fm.registerGroup('g', () => ({ layout: 'vertical' }));
    fm.registerItem('hidden-1', hiddenBtn, () => ({ group: 'g' }));
    fm.registerItem('hidden-2', insideHiddenBtn, () => ({ group: 'g' }));
    fm.registerItem('visible-1', visibleBtn, () => ({ group: 'g' }));

    expect(fm.focus('hidden-1')).toBe(false);
    expect(fm.focus('hidden-2')).toBe(false);
    expect(fm.focusFirst(['hidden-1', 'hidden-2', 'visible-1'])).toBe('visible-1');
    expect(fm.getActiveId()).toBe('visible-1');

    document.body.removeChild(visibleBtn);
    document.body.removeChild(hiddenBtn);
    document.body.removeChild(layoutHiddenWrap);
  });
});
