/**
 * 统一存储层。
 *
 * - 键名带命名空间与版本号：yiwu:v1:data。
 * - localStorage 不可用（隐私模式、被禁用、配额满）时降级为当前会话内存，
 *   并通过 status 告知界面提示用户。
 * - 读取失败（无效 JSON 等）时回退为空数据，并把原始文本备份到 yiwu:v1:corrupt。
 * - 只在副作用中调用 save，不在 render 中写入存储。
 */
import { createEmptyData, sanitizeData, type AppData } from './schema';

export const STORAGE_NAMESPACE = 'yiwu';
export const STORAGE_KEY = STORAGE_NAMESPACE + ':v1:data';
export const CORRUPT_BACKUP_KEY = STORAGE_NAMESPACE + ':v1:corrupt';

/** ok：正常持久化；memory：仅当前会话有效 */
export type StorageStatus = 'ok' | 'memory';

/** 最小化的存储接口（与 window.localStorage 兼容，便于测试注入） */
export interface KeyValueBackend {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface LoadResult {
  data: AppData;
  status: StorageStatus;
  /** 需要提示用户的信息 */
  notice: string | null;
}

/** 探测 localStorage 是否真实可用（访问本身也可能抛错） */
export function detectLocalStorage(win: Window | undefined): KeyValueBackend | null {
  if (!win) return null;
  try {
    const ls = win.localStorage;
    if (!ls) return null;
    const probe = STORAGE_NAMESPACE + ':probe';
    ls.setItem(probe, '1');
    ls.removeItem(probe);
    return ls;
  } catch (e) {
    return null;
  }
}

export class AppStorage {
  private status: StorageStatus;
  private memory: string | null = null;

  constructor(private backend: KeyValueBackend | null) {
    this.status = backend ? 'ok' : 'memory';
  }

  getStatus(): StorageStatus {
    return this.status;
  }

  load(): LoadResult {
    if (!this.backend) {
      return {
        data: this.readMemory(),
        status: 'memory',
        notice: '当前浏览器无法使用本地存储，收藏和足迹只在本次打开期间有效。',
      };
    }
    let text: string | null = null;
    try {
      text = this.backend.getItem(STORAGE_KEY);
    } catch (e) {
      this.status = 'memory';
      return {
        data: createEmptyData(),
        status: 'memory',
        notice: '读取本地数据失败，本次改为临时保存，关闭页面后不会保留。',
      };
    }
    if (text === null) return { data: createEmptyData(), status: this.status, notice: null };
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      this.backup(text);
      return {
        data: createEmptyData(),
        status: this.status,
        notice: '本地数据已损坏，已重新开始记录（原数据已备份）。',
      };
    }
    // 旧版本或部分字段异常的数据会被静默整理，不打扰用户
    const result = sanitizeData(parsed);
    return { data: result.data, status: this.status, notice: null };
  }

  /** 保存数据；失败时降级为内存并返回 false */
  save(data: AppData): boolean {
    const text = JSON.stringify(data);
    if (this.backend && this.status === 'ok') {
      try {
        this.backend.setItem(STORAGE_KEY, text);
        return true;
      } catch (e) {
        this.status = 'memory';
      }
    }
    this.memory = text;
    return false;
  }

  /** 清空本应用数据（不影响同域其他应用） */
  clear(): void {
    this.memory = null;
    if (!this.backend) return;
    try {
      this.backend.removeItem(STORAGE_KEY);
      this.backend.removeItem(CORRUPT_BACKUP_KEY);
    } catch (e) {
      // 忽略：已处于降级状态
    }
  }

  private readMemory(): AppData {
    if (!this.memory) return createEmptyData();
    try {
      return sanitizeData(JSON.parse(this.memory)).data;
    } catch (e) {
      return createEmptyData();
    }
  }

  private backup(text: string): void {
    if (!this.backend) return;
    try {
      this.backend.setItem(CORRUPT_BACKUP_KEY, text.slice(0, 200000));
    } catch (e) {
      // 备份失败不影响运行
    }
  }
}
