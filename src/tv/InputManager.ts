/**
 * 统一的遥控器输入层。
 *
 * - 整个应用只在 window 上绑定一组 keydown / keyup 监听（start 幂等、可清理）。
 * - 只对应用实际接管的按键调用 preventDefault，不拦截全部键盘事件。
 * - 方向键：长按允许连续移动，但按 repeatIntervalMs 节流（不做长时间 debounce）。
 * - 确认键：长按只触发一次；keydown 中 preventDefault 后手动 click()，
 *   从而阻止原生按钮的隐式 click，保证每次按下只执行一次操作。
 * - 返回键：按优先级依次交给返回处理器（弹窗 > 阅读模式 > 页面 > 根级）。
 */
import { DEFAULT_KEYMAP, resolveAction, type KeyMap, type TvAction } from './keymap';
import type { FocusManager, Direction } from './FocusManager';

/** 输入层：返回 true 表示已消费该操作 */
export type InputLayer = (action: TvAction, event: KeyboardEvent) => boolean;

/** 返回处理器：返回 true 表示已处理 */
export type BackHandler = () => boolean;

export interface KeyInfo {
  key: string;
  keyCode: number;
  action: TvAction | null;
  handled: boolean;
  repeat: boolean;
  time: number;
}

export interface InputOptions {
  /** 长按方向键时连续移动的最小间隔 */
  repeatIntervalMs: number;
  /** 确认 / 返回键视为「同一次长按」的时间窗口（用于没有 event.repeat 的设备） */
  holdWindowMs: number;
}

interface BackEntry {
  handler: BackHandler;
  priority: number;
  seq: number;
}

interface LayerEntry {
  layer: InputLayer;
  seq: number;
}

const DEFAULT_OPTIONS: InputOptions = {
  repeatIntervalMs: 110,
  holdWindowMs: 260,
};

export class InputManager {
  private keymap: KeyMap;
  private options: InputOptions;
  private layers: LayerEntry[] = [];
  private backHandlers: BackEntry[] = [];
  private seq = 0;
  private keyListeners: Array<(info: KeyInfo) => void> = [];
  private activityListeners: Array<() => void> = [];
  private started = 0;
  private detach: (() => void) | null = null;
  /** 记录按住状态：action -> 最近一次 keydown 时间 */
  private held: Partial<Record<TvAction, number>> = {};
  private lastDirectionTime = 0;

  constructor(
    private focus: FocusManager,
    keymap?: KeyMap,
    options?: Partial<InputOptions>,
  ) {
    this.keymap = keymap || DEFAULT_KEYMAP;
    this.options = {
      repeatIntervalMs:
        options && typeof options.repeatIntervalMs === 'number'
          ? options.repeatIntervalMs
          : DEFAULT_OPTIONS.repeatIntervalMs,
      holdWindowMs:
        options && typeof options.holdWindowMs === 'number'
          ? options.holdWindowMs
          : DEFAULT_OPTIONS.holdWindowMs,
    };
  }

  setKeyMap(keymap: KeyMap): void {
    this.keymap = keymap;
  }

  getKeyMap(): KeyMap {
    return this.keymap;
  }

  /** 绑定监听（引用计数，StrictMode 下重复调用也只绑定一次），返回清理函数 */
  start(target: Window): () => void {
    this.started++;
    if (this.started === 1) {
      const onDown = (e: KeyboardEvent) => this.handleKeyDown(e);
      const onUp = (e: KeyboardEvent) => this.handleKeyUp(e);
      target.addEventListener('keydown', onDown);
      target.addEventListener('keyup', onUp);
      this.detach = () => {
        target.removeEventListener('keydown', onDown);
        target.removeEventListener('keyup', onUp);
      };
    }
    let stopped = false;
    return () => {
      if (stopped) return;
      stopped = true;
      this.started--;
      if (this.started === 0 && this.detach) {
        this.detach();
        this.detach = null;
      }
    };
  }

  /** 压入输入层（后压入的先处理），返回移除函数 */
  pushLayer(layer: InputLayer): () => void {
    const entry: LayerEntry = { layer, seq: ++this.seq };
    this.layers.push(entry);
    return () => {
      const idx = this.layers.indexOf(entry);
      if (idx !== -1) this.layers.splice(idx, 1);
    };
  }

  /** 注册返回处理器：priority 越大越先处理；同优先级后注册的先处理 */
  pushBackHandler(handler: BackHandler, priority: number): () => void {
    const entry: BackEntry = { handler, priority, seq: ++this.seq };
    this.backHandlers.push(entry);
    return () => {
      const idx = this.backHandlers.indexOf(entry);
      if (idx !== -1) this.backHandlers.splice(idx, 1);
    };
  }

  /** 执行应用内返回；返回 false 表示应用不再处理（宿主可决定是否退出） */
  handleBack(): boolean {
    this.notifyActivity();
    const list = this.backHandlers.slice().sort((a, b) =>
      b.priority !== a.priority ? b.priority - a.priority : b.seq - a.seq,
    );
    for (let i = 0; i < list.length; i++) {
      if (list[i].handler()) return true;
    }
    return false;
  }

  onKey(listener: (info: KeyInfo) => void): () => void {
    this.keyListeners.push(listener);
    return () => {
      const idx = this.keyListeners.indexOf(listener);
      if (idx !== -1) this.keyListeners.splice(idx, 1);
    };
  }

  /** 任意被接管的操作都会触发（用于跨天检查等） */
  onActivity(listener: () => void): () => void {
    this.activityListeners.push(listener);
    return () => {
      const idx = this.activityListeners.indexOf(listener);
      if (idx !== -1) this.activityListeners.splice(idx, 1);
    };
  }

  private notifyActivity(): void {
    const list = this.activityListeners.slice();
    for (let i = 0; i < list.length; i++) list[i]();
  }

  private emitKey(info: KeyInfo): void {
    const list = this.keyListeners.slice();
    for (let i = 0; i < list.length; i++) list[i](info);
  }

  /** 判断是否为长按产生的重复事件（兼容不设置 event.repeat 的设备） */
  private isRepeat(action: TvAction, e: KeyboardEvent, now: number): boolean {
    const last = this.held[action];
    // 切换到其他按键时清理旧按键的按住状态，兼容部分廉价遥控器偶发丢失 keyup 的情况
    this.held = { [action]: now };
    if (e.repeat) return true;
    return typeof last === 'number' && now - last < this.options.holdWindowMs;
  }

  handleKeyDown(e: KeyboardEvent): void {
    if (e.defaultPrevented) return;
    const action = resolveAction(e, this.keymap);
    const now = Date.now();
    const info: KeyInfo = {
      key: e.key || '',
      keyCode: e.keyCode || e.which || 0,
      action,
      handled: false,
      repeat: !!e.repeat,
      time: now,
    };
    if (!action || e.altKey || e.ctrlKey || e.metaKey) {
      this.emitKey(info);
      return;
    }
    // 文本输入框内：左右、退格、确认交还给输入框
    if (isEditable(e.target)) {
      const backspace = action === 'back' && (e.key === 'Backspace' || e.keyCode === 8);
      if (action === 'left' || action === 'right' || action === 'enter' || backspace) {
        this.emitKey(info);
        return;
      }
    }

    const repeat = this.isRepeat(action, e, now);
    info.repeat = repeat;
    this.notifyActivity();

    if (action === 'enter' || action === 'back') {
      if (repeat) {
        // 长按确认 / 返回：吞掉重复事件，不重复执行
        e.preventDefault();
        info.handled = true;
        this.emitKey(info);
        return;
      }
    } else if (repeat && now - this.lastDirectionTime < this.options.repeatIntervalMs) {
      // 长按方向键：节流
      e.preventDefault();
      info.handled = true;
      this.emitKey(info);
      return;
    }

    // 输入层（阅读模式等）优先
    for (let i = this.layers.length - 1; i >= 0; i--) {
      if (this.layers[i].layer(action, e)) {
        e.preventDefault();
        info.handled = true;
        if (isDirection(action)) this.lastDirectionTime = now;
        this.emitKey(info);
        return;
      }
    }

    if (isDirection(action)) {
      // 方向键用于焦点导航：始终阻止浏览器默认滚动
      e.preventDefault();
      this.lastDirectionTime = now;
      this.focus.move(action);
      info.handled = true;
    } else if (action === 'enter') {
      const el = this.focus.getActiveElement();
      if (el) {
        e.preventDefault();
        el.click();
        info.handled = true;
      } else if (!document.activeElement || document.activeElement === document.body) {
        e.preventDefault();
        this.focus.ensureFocus();
        info.handled = true;
      }
    } else if (action === 'back') {
      if (this.handleBack()) {
        e.preventDefault();
        info.handled = true;
      }
    }
    this.emitKey(info);
  }

  handleKeyUp(e: KeyboardEvent): void {
    const action = resolveAction(e, this.keymap);
    if (action) delete this.held[action];
  }
}

function isDirection(action: TvAction): action is Direction {
  return action === 'up' || action === 'down' || action === 'left' || action === 'right';
}

function isEditable(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el || !el.tagName) return false;
  const tag = el.tagName;
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
  if (tag === 'INPUT') {
    const type = ((el as HTMLInputElement).type || 'text').toLowerCase();
    return ['button', 'submit', 'reset', 'checkbox', 'radio', 'file', 'range', 'color'].indexOf(type) === -1;
  }
  return !!el.isContentEditable;
}
