/**
 * 焦点管理层（与 React 无关，可独立测试）。
 *
 * 设计要点：
 * - 每个可操作元素以唯一 data-focus-id 注册，并属于一个 data-focus-group。
 * - 使用真实 DOM focus；同时把焦点同步到 data-tv-focused 属性，样式双保险。
 * - 移动顺序：元素级覆盖 → 分组内策略（纵向/横向序号或网格几何）
 *   → 分组出口 → 全局几何查找 → 停留。边界默认停留，不循环。
 * - 弹窗使用作用域栈限制候选范围，关闭后恢复打开前的焦点。
 * - 只遍历已注册元素，不对整个 DOM 树做扫描。
 */
import { findBestCandidate, type Direction, type RectLike } from './geometry';
import { focusWithoutScroll, scrollIntoViewIfNeeded } from './scroll';

export type { Direction } from './geometry';

/**
 * 导航目标：
 * - 普通字符串：目标 focus id
 * - '@content'：当前页面记住的内容焦点或默认焦点
 * - '@group:名称'：进入指定分组（按该分组的 enterTo 规则）
 * - null：明确停留
 */
export type NavTarget = string | null;
export type NavOverrides = Partial<Record<Direction, NavTarget>>;

export interface ItemOptions {
  group: string;
  nav?: NavOverrides;
}

export type GroupLayout = 'vertical' | 'horizontal' | 'grid';

export interface GroupOptions {
  layout: GroupLayout;
  /** 到达分组边界后的出口 */
  exits?: NavOverrides;
  /** 从分组外进入时的落点 */
  enterTo?: 'last' | 'first' | 'selected' | 'nearest';
  /** 是否写入页面焦点记忆（导航栏为 false） */
  remember?: boolean;
}

export interface MoveResult {
  direction: Direction;
  from: string | null;
  to: string | null;
  /** 结果说明，用于调试面板 */
  reason: string;
}

export interface FocusEnv {
  getRect: (el: HTMLElement) => RectLike;
  isVisible: (el: HTMLElement) => boolean;
}

interface ItemRecord {
  id: string;
  el: HTMLElement;
  getOptions: () => ItemOptions;
}

interface GroupRecord {
  name: string;
  getOptions: () => GroupOptions;
  lastFocusedId: string | null;
}

interface ScopeRecord {
  key: string;
  container: HTMLElement;
  returnId: string | null;
  initial: string[];
}

export interface FocusSnapshot {
  activeId: string | null;
  activeGroup: string | null;
  page: string;
  scopeDepth: number;
  lastMove: MoveResult | null;
}

type Listener = (snapshot: FocusSnapshot) => void;

const FOCUSED_ATTR = 'data-tv-focused';

function defaultEnv(): FocusEnv {
  return {
    getRect: (el) => el.getBoundingClientRect(),
    isVisible: (el) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      const style = window.getComputedStyle(el);
      return style.visibility !== 'hidden' && style.display !== 'none';
    },
  };
}

export class FocusManager {
  private items = new Map<string, ItemRecord>();
  private groups = new Map<string, GroupRecord>();
  private scopes: ScopeRecord[] = [];
  private memory = new Map<string, string>();
  private page = '';
  private pageDefaults: () => string[] = () => [];
  private activeId: string | null = null;
  private lastMove: MoveResult | null = null;
  private listeners: Listener[] = [];
  private pendingTimer: number | null = null;
  private pendingToken = 0;
  private watchdogEnabled = true;
  private env: FocusEnv;

  constructor(env?: Partial<FocusEnv>) {
    const d = defaultEnv();
    this.env = {
      getRect: env && env.getRect ? env.getRect : d.getRect,
      isVisible: env && env.isVisible ? env.isVisible : d.isVisible,
    };
  }

  // ---------------------------------------------------------------- 注册

  /** 注册可聚焦元素，返回注销函数（只注销同一元素，兼容 StrictMode 重复挂载） */
  registerItem(id: string, el: HTMLElement, getOptions: () => ItemOptions): () => void {
    const existing = this.items.get(id);
    if (existing && existing.el !== el && existing.el.isConnected && import.meta.env.DEV) {
      // 开发环境提示重复 id
      console.warn('[focus] 重复的 data-focus-id：' + id);
    }
    const record: ItemRecord = { id, el, getOptions };
    this.items.set(id, record);
    el.setAttribute('data-focus-id', id);
    // 若元素在注册前已经获得焦点（例如 autoFocus），同步状态
    if (document.activeElement === el) this.noteFocused(record);
    return () => {
      const cur = this.items.get(id);
      if (cur && cur.el === el) this.items.delete(id);
      if (this.activeId === id && document.activeElement !== el) this.activeId = null;
    };
  }

  registerGroup(name: string, getOptions: () => GroupOptions): () => void {
    const existing = this.groups.get(name);
    const record: GroupRecord = {
      name,
      getOptions,
      lastFocusedId: existing ? existing.lastFocusedId : null,
    };
    this.groups.set(name, record);
    return () => {
      if (this.groups.get(name) === record) this.groups.delete(name);
    };
  }

  // ---------------------------------------------------------------- 查询

  /** 元素是否可以获得焦点：已挂载、未禁用、可见、不在 hidden 祖先内 */
  isFocusable(id: string): boolean {
    const rec = this.items.get(id);
    return !!rec && this.recordFocusable(rec) && this.inActiveScope(rec);
  }

  private recordFocusable(rec: ItemRecord): boolean {
    const el = rec.el;
    if (!el.isConnected) return false;
    if ((el as HTMLButtonElement).disabled) return false;
    if (el.getAttribute('aria-disabled') === 'true') return false;
    if (el.closest('[hidden]')) return false;
    return this.env.isVisible(el);
  }

  private inActiveScope(rec: ItemRecord): boolean {
    const scope = this.scopes.length ? this.scopes[this.scopes.length - 1] : null;
    if (!scope) return true;
    return scope.container.contains(rec.el);
  }

  private candidates(): ItemRecord[] {
    const out: ItemRecord[] = [];
    this.items.forEach((rec) => {
      if (this.recordFocusable(rec) && this.inActiveScope(rec)) out.push(rec);
    });
    return out;
  }

  private groupMembers(group: string): ItemRecord[] {
    const list = this.candidates().filter((r) => r.getOptions().group === group);
    list.sort((a, b) =>
      // DOCUMENT_POSITION_FOLLOWING = 4
      a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1,
    );
    return list;
  }

  private getActiveRecord(): ItemRecord | null {
    const el = document.activeElement as HTMLElement | null;
    if (el && el !== document.body) {
      const id = el.getAttribute('data-focus-id');
      if (id) {
        const rec = this.items.get(id);
        if (rec && rec.el === el) return rec;
      }
    }
    return null;
  }

  getActiveId(): string | null {
    const rec = this.getActiveRecord();
    return rec ? rec.id : null;
  }

  getActiveElement(): HTMLElement | null {
    const rec = this.getActiveRecord();
    return rec ? rec.el : null;
  }

  getPage(): string {
    return this.page;
  }

  getScopeDepth(): number {
    return this.scopes.length;
  }

  getRemembered(page: string): string | null {
    return this.memory.get(page) || null;
  }

  snapshot(): FocusSnapshot {
    const rec = this.getActiveRecord();
    return {
      activeId: rec ? rec.id : null,
      activeGroup: rec ? rec.getOptions().group : null,
      page: this.page,
      scopeDepth: this.scopes.length,
      lastMove: this.lastMove,
    };
  }

  // ---------------------------------------------------------------- 聚焦

  /** 聚焦指定 id，成功返回 true */
  focus(id: string, options?: { scroll?: boolean }): boolean {
    const rec = this.items.get(id);
    if (!rec || !this.recordFocusable(rec) || !this.inActiveScope(rec)) return false;
    focusWithoutScroll(rec.el);
    if (document.activeElement !== rec.el) return false;
    if (!options || options.scroll !== false) scrollIntoViewIfNeeded(rec.el);
    this.noteFocused(rec);
    return true;
  }

  /** 依次尝试多个 id，返回成功的 id */
  focusFirst(ids: Array<string | null | undefined>, options?: { scroll?: boolean }): string | null {
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      if (id && this.focus(id, options)) return id;
    }
    return null;
  }

  /** 记录焦点状态（focusin 与 focus() 都会调用，幂等） */
  private noteFocused(rec: ItemRecord): void {
    if (this.activeId && this.activeId !== rec.id) {
      const prev = this.items.get(this.activeId);
      if (prev) prev.el.removeAttribute(FOCUSED_ATTR);
    }
    // 清理可能残留在已卸载元素上的属性无需处理（元素已离开文档）
    rec.el.setAttribute(FOCUSED_ATTR, 'true');
    this.activeId = rec.id;
    const opts = rec.getOptions();
    const group = this.groups.get(opts.group);
    if (group) group.lastFocusedId = rec.id;
    const remember = group ? group.getOptions().remember !== false : true;
    if (remember && this.scopes.length === 0 && this.page) {
      this.memory.set(this.page, rec.id);
    }
    this.emit();
  }

  // ---------------------------------------------------------------- 移动

  move(dir: Direction): MoveResult {
    const cur = this.getActiveRecord();
    if (!cur || !this.recordFocusable(cur) || !this.inActiveScope(cur)) {
      const recovered = this.ensureFocus();
      return this.finishMove(dir, cur ? cur.id : null, recovered, '恢复焦点');
    }
    const opts = cur.getOptions();

    // 1. 元素级明确覆盖
    if (opts.nav && Object.prototype.hasOwnProperty.call(opts.nav, dir)) {
      const t = opts.nav[dir];
      if (t === null || t === undefined) return this.finishMove(dir, cur.id, null, '元素设置为停留');
      const to = this.focusTarget(t, cur);
      return this.finishMove(dir, cur.id, to, to ? '元素覆盖' : '覆盖目标不可用');
    }

    // 2. 分组内策略
    const group = this.groups.get(opts.group);
    const gopts: GroupOptions = group ? group.getOptions() : { layout: 'grid' };
    const inGroup = this.findInGroup(cur, opts.group, gopts.layout, dir);
    if (inGroup) {
      const ok = this.focus(inGroup.id);
      return this.finishMove(dir, cur.id, ok ? inGroup.id : null, '分组内 ' + gopts.layout);
    }

    // 3. 分组出口
    if (gopts.exits && Object.prototype.hasOwnProperty.call(gopts.exits, dir)) {
      const t = gopts.exits[dir];
      if (t === null || t === undefined) return this.finishMove(dir, cur.id, null, '分组边界停留');
      const to = this.focusTarget(t, cur);
      if (to) return this.finishMove(dir, cur.id, to, '分组出口');
    }

    // 4. 全局几何查找（排除同组）
    const others = this.candidates().filter((r) => r.getOptions().group !== opts.group);
    const best = this.geometric(cur, others, dir);
    if (best) {
      const to = this.enterGroup(best.getOptions().group, best);
      return this.finishMove(dir, cur.id, to, '几何查找');
    }

    // 5. 停留
    return this.finishMove(dir, cur.id, null, '边界停留');
  }

  private finishMove(dir: Direction, from: string | null, to: string | null, reason: string): MoveResult {
    this.lastMove = { direction: dir, from, to, reason };
    this.emit();
    return this.lastMove;
  }

  private findInGroup(
    cur: ItemRecord,
    group: string,
    layout: GroupLayout,
    dir: Direction,
  ): ItemRecord | null {
    const members = this.groupMembers(group);
    if (layout === 'vertical' || layout === 'horizontal') {
      const forward = layout === 'vertical' ? 'down' : 'right';
      const backward = layout === 'vertical' ? 'up' : 'left';
      if (dir !== forward && dir !== backward) return null;
      const idx = members.indexOf(cur);
      if (idx === -1) return null;
      const next = dir === forward ? idx + 1 : idx - 1;
      // 边界不循环
      return next >= 0 && next < members.length ? members[next] : null;
    }
    return this.geometric(
      cur,
      members.filter((m) => m !== cur),
      dir,
    );
  }

  private geometric(cur: ItemRecord, list: ItemRecord[], dir: Direction): ItemRecord | null {
    const from = this.env.getRect(cur.el);
    const cands = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i] === cur) continue;
      cands.push({ item: list[i], rect: this.env.getRect(list[i].el) });
    }
    return findBestCandidate(from, cands, dir);
  }

  /** 解析导航目标并聚焦，返回成功的 id */
  private focusTarget(target: string, cur: ItemRecord | null): string | null {
    if (target === '@content') return this.focusContent();
    if (target.indexOf('@group:') === 0) return this.enterGroup(target.slice(7), null);
    void cur;
    return this.focus(target) ? target : null;
  }

  /** 按分组的 enterTo 规则进入分组 */
  enterGroup(name: string, nearest: ItemRecord | null): string | null {
    const members = this.groupMembers(name);
    if (!members.length) return null;
    const group = this.groups.get(name);
    const enterTo = group ? group.getOptions().enterTo || 'nearest' : 'nearest';
    const order: Array<ItemRecord | null | undefined> = [];
    if (enterTo === 'selected') {
      order.push(members.filter(isSelectedRecord)[0]);
      order.push(group && group.lastFocusedId ? this.items.get(group.lastFocusedId) : null);
    } else if (enterTo === 'last') {
      order.push(group && group.lastFocusedId ? this.items.get(group.lastFocusedId) : null);
    } else if (enterTo === 'nearest') {
      order.push(nearest);
    }
    order.push(members[0]);
    for (let i = 0; i < order.length; i++) {
      const rec = order[i];
      if (rec && members.indexOf(rec) !== -1 && this.focus(rec.id)) return rec.id;
    }
    return null;
  }

  /** 聚焦当前页面的内容区：记忆焦点 → 页面默认焦点 */
  focusContent(): string | null {
    const remembered = this.memory.get(this.page);
    return this.focusFirst([remembered].concat(this.pageDefaults()));
  }

  // ---------------------------------------------------------------- 页面

  /** 设置当前页面及其默认焦点列表，返回清理函数 */
  setPage(key: string, getDefaults: () => string[]): () => void {
    this.page = key;
    this.pageDefaults = getDefaults;
    this.emit();
    return () => {
      if (this.page === key && this.pageDefaults === getDefaults) {
        this.pageDefaults = () => [];
      }
    };
  }

  /** 进入页面时恢复焦点：记忆 → 默认 */
  restorePage(options?: { preferDefault?: boolean }): string | null {
    if (this.scopes.length) return null;
    const remembered = this.memory.get(this.page);
    const defaults = this.pageDefaults();
    const order = options && options.preferDefault ? defaults : [remembered].concat(defaults);
    return this.focusFirst(order);
  }

  /** 清除某个页面的焦点记忆 */
  forget(page: string): void {
    this.memory.delete(page);
  }

  /**
   * 确保有一个有效焦点：
   * 弹窗作用域内 → 页面记忆 → 页面默认 → 导航选中项 → 任意第一个候选
   */
  ensureFocus(): string | null {
    const active = this.getActiveRecord();
    if (active && this.recordFocusable(active) && this.inActiveScope(active)) return active.id;
    const scope = this.scopes.length ? this.scopes[this.scopes.length - 1] : null;
    if (scope) {
      const id = this.focusFirst(scope.initial);
      if (id) return id;
      const first = this.sortedCandidates()[0];
      return first && this.focus(first.id) ? first.id : null;
    }
    const content = this.focusContent();
    if (content) return content;
    const nav = this.enterGroup('nav', null);
    if (nav) return nav;
    const first = this.sortedCandidates()[0];
    return first && this.focus(first.id) ? first.id : null;
  }

  private sortedCandidates(): ItemRecord[] {
    const list = this.candidates();
    list.sort((a, b) => (a.el.compareDocumentPosition(b.el) & 4 ? -1 : 1));
    return list;
  }

  /**
   * 在 React 提交渲染之后尝试聚焦候选列表（例如删除收藏后聚焦相邻卡片）。
   * 若多次尝试都失败则调用 ensureFocus，保证焦点不落到 body。
   */
  queueFocus(ids: Array<string | null | undefined>): void {
    const token = ++this.pendingToken;
    let attempts = 0;
    const tryFocus = () => {
      if (token !== this.pendingToken) return;
      attempts++;
      if (this.focusFirst(ids)) {
        this.pendingTimer = null;
        return;
      }
      if (attempts < 4) {
        this.pendingTimer = window.setTimeout(tryFocus, 16);
      } else {
        this.pendingTimer = null;
        this.ensureFocus();
      }
    };
    if (this.pendingTimer !== null) window.clearTimeout(this.pendingTimer);
    this.pendingTimer = window.setTimeout(tryFocus, 0);
  }

  // ---------------------------------------------------------------- 弹窗作用域

  /** 打开弹窗：限制焦点范围并聚焦首个合理操作，返回关闭函数（恢复焦点） */
  pushScope(key: string, container: HTMLElement, initial: string[]): () => void {
    const active = this.getActiveRecord();
    const scope: ScopeRecord = {
      key,
      container,
      returnId: active ? active.id : this.activeId,
      initial,
    };
    this.scopes.push(scope);
    if (!this.focusFirst(initial)) {
      const first = this.sortedCandidates()[0];
      if (first) this.focus(first.id);
    }
    this.emit();
    let popped = false;
    return () => {
      if (popped) return;
      popped = true;
      const idx = this.scopes.indexOf(scope);
      if (idx === -1) return;
      const wasTop = idx === this.scopes.length - 1;
      this.scopes.splice(idx, 1);
      this.emit();
      if (wasTop) {
        const back = scope.returnId;
        if (!(back && this.focus(back))) this.queueFocus([back]);
      }
    };
  }

  // ---------------------------------------------------------------- DOM 监听

  /** 是否启用焦点看门狗（TV 模式开启，普通模式关闭以免打扰鼠标用户） */
  setWatchdog(enabled: boolean): void {
    this.watchdogEnabled = enabled;
  }

  /** 绑定 document 级 focusin / focusout 监听，返回清理函数 */
  attach(doc: Document): () => void {
    const onFocusIn = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el || !el.getAttribute) return;
      const scope = this.scopes.length ? this.scopes[this.scopes.length - 1] : null;
      if (scope && !scope.container.contains(el)) {
        // 焦点跑到了弹窗外（例如 Tab 或鼠标），拉回弹窗内
        this.ensureFocus();
        return;
      }
      const id = el.getAttribute('data-focus-id');
      if (!id) return;
      const rec = this.items.get(id);
      if (rec && rec.el === el) this.noteFocused(rec);
    };
    const onFocusOut = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && el.removeAttribute) el.removeAttribute(FOCUSED_ATTR);
      if (!this.watchdogEnabled) return;
      window.setTimeout(() => {
        const active = doc.activeElement;
        if (!active || active === doc.body || active === doc.documentElement) {
          this.ensureFocus();
        }
      }, 0);
    };
    doc.addEventListener('focusin', onFocusIn);
    doc.addEventListener('focusout', onFocusOut);
    return () => {
      doc.removeEventListener('focusin', onFocusIn);
      doc.removeEventListener('focusout', onFocusOut);
    };
  }

  // ---------------------------------------------------------------- 订阅

  subscribe(listener: Listener): () => void {
    this.listeners.push(listener);
    return () => {
      const idx = this.listeners.indexOf(listener);
      if (idx !== -1) this.listeners.splice(idx, 1);
    };
  }

  private emit(): void {
    if (!this.listeners.length) return;
    const snap = this.snapshot();
    const list = this.listeners.slice();
    for (let i = 0; i < list.length; i++) list[i](snap);
  }
}

/** 判断元素是否处于 selected（当前页面 / 当前筛选项）状态 */
function isSelectedRecord(rec: ItemRecord): boolean {
  const cur = rec.el.getAttribute('aria-current');
  if (cur && cur !== 'false') return true;
  if (rec.el.getAttribute('aria-pressed') === 'true') return true;
  return rec.el.getAttribute('data-selected') === 'true';
}
