/**
 * 遥控器按键映射（可配置）。
 *
 * 规则：
 * - 优先使用 event.key；旧环境退回 keyCode / which。
 * - 不同电视、浏览器发送的网页事件并不相同，映射可以通过
 *   setKeyMap() 或宿主注入的 window.YIWU_KEYMAP 覆盖 / 追加。
 * - 注意：Android 原生 KEYCODE_BACK = 4 是原生层按键码，
 *   并不是网页中的 DOM keyCode，因此默认映射不包含 4。
 */

/** 应用接管的标准操作 */
export type TvAction = 'up' | 'down' | 'left' | 'right' | 'enter' | 'back';

/** 单个操作的映射：key 名称列表 + keyCode 列表 */
export interface KeyBinding {
  keys: string[];
  keyCodes: number[];
}

export type KeyMap = Record<TvAction, KeyBinding>;

/** 默认映射 */
export const DEFAULT_KEYMAP: KeyMap = {
  up: { keys: ['ArrowUp', 'Up'], keyCodes: [38] },
  down: { keys: ['ArrowDown', 'Down'], keyCodes: [40] },
  left: { keys: ['ArrowLeft', 'Left'], keyCodes: [37] },
  right: { keys: ['ArrowRight', 'Right'], keyCodes: [39] },
  enter: { keys: ['Enter'], keyCodes: [13] },
  back: {
    // Escape：桌面与多数遥控器模拟；GoBack / BrowserBack：部分浏览器的返回键名称
    keys: ['Escape', 'Esc', 'GoBack', 'BrowserBack', 'Backspace'],
    // 27 Escape；461 部分电视（如 webOS）的返回键；10009 部分电视（如 Tizen）的返回键；
    // 8 Backspace（部分盒子把返回映射成退格）；166 BrowserBack
    keyCodes: [27, 461, 10009, 8, 166],
  },
};

/** 部分映射，用于覆盖 */
export type PartialKeyMap = Partial<Record<TvAction, Partial<KeyBinding>>>;

const ACTIONS: TvAction[] = ['up', 'down', 'left', 'right', 'enter', 'back'];

/**
 * 合并映射。mode = 'append' 时在默认值基础上追加，'replace' 时替换对应操作。
 */
export function mergeKeyMap(
  base: KeyMap,
  patch: PartialKeyMap | null | undefined,
  mode: 'append' | 'replace' = 'append',
): KeyMap {
  const result = {} as KeyMap;
  for (let i = 0; i < ACTIONS.length; i++) {
    const action = ACTIONS[i];
    const baseBinding = base[action];
    const p = patch ? patch[action] : undefined;
    if (!p) {
      result[action] = { keys: baseBinding.keys.slice(), keyCodes: baseBinding.keyCodes.slice() };
      continue;
    }
    const keys = Array.isArray(p.keys) ? p.keys.filter(isString) : [];
    const codes = Array.isArray(p.keyCodes) ? p.keyCodes.filter(isFiniteNumber) : [];
    result[action] =
      mode === 'replace'
        ? {
            keys: p.keys ? keys : baseBinding.keys.slice(),
            keyCodes: p.keyCodes ? codes : baseBinding.keyCodes.slice(),
          }
        : {
            keys: uniq(baseBinding.keys.concat(keys)),
            keyCodes: uniq(baseBinding.keyCodes.concat(codes)),
          };
  }
  return result;
}

/** 最小化的键盘事件形状，便于测试 */
export interface KeyLike {
  key?: string;
  keyCode?: number;
  which?: number;
}

/**
 * 解析按键对应的操作。
 * 先按 event.key 匹配；key 缺失或为 Unidentified 时再按 keyCode / which 匹配。
 * 若 key 存在但未匹配任何操作，仍会用 keyCode 兜底（部分电视 key 名称不规范）。
 */
export function resolveAction(event: KeyLike, keymap: KeyMap): TvAction | null {
  const key = event.key;
  if (key && key !== 'Unidentified') {
    for (let i = 0; i < ACTIONS.length; i++) {
      if (keymap[ACTIONS[i]].keys.indexOf(key) !== -1) return ACTIONS[i];
    }
  }
  const code = event.keyCode || event.which || 0;
  if (code) {
    for (let i = 0; i < ACTIONS.length; i++) {
      if (keymap[ACTIONS[i]].keyCodes.indexOf(code) !== -1) {
        // key 明确是可打印字符时不按 keyCode 兜底（避免把字母误判为操作）
        if (key && key.length === 1) return null;
        return ACTIONS[i];
      }
    }
  }
  return null;
}

function isString(v: unknown): v is string {
  return typeof v === 'string' && v.length > 0;
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === 'number' && isFinite(v);
}

function uniq<T>(list: T[]): T[] {
  const out: T[] = [];
  for (let i = 0; i < list.length; i++) {
    if (out.indexOf(list[i]) === -1) out.push(list[i]);
  }
  return out;
}

/**
 * 读取宿主（Android WebView 或部署方）预先注入的映射：
 *   window.YIWU_KEYMAP = { mode: 'append', map: { back: { keyCodes: [4] } } }
 * 仅在确认宿主确实把某个键以该 keyCode 发给网页时才应这样配置。
 */
export function readInjectedKeyMap(win: Window | undefined): KeyMap {
  if (!win) return DEFAULT_KEYMAP;
  const injected = (win as unknown as { YIWU_KEYMAP?: { mode?: string; map?: PartialKeyMap } })
    .YIWU_KEYMAP;
  if (!injected || typeof injected !== 'object' || !injected.map) return DEFAULT_KEYMAP;
  return mergeKeyMap(DEFAULT_KEYMAP, injected.map, injected.mode === 'replace' ? 'replace' : 'append');
}
