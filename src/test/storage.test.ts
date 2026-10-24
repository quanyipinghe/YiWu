/**
 * 存储层单元测试：收藏持久化、损坏数据恢复、存储不可用降级。
 */
import { describe, expect, it } from 'vitest';
import {
  AppStorage,
  CORRUPT_BACKUP_KEY,
  STORAGE_KEY,
  type KeyValueBackend,
} from '../storage/storage';
import { createEmptyData, sanitizeData } from '../storage/schema';

function createMemoryBackend(options?: {
  throwOnGet?: boolean;
  throwOnSet?: boolean;
}): KeyValueBackend & { store: Record<string, string> } {
  const store: Record<string, string> = {};
  return {
    store,
    getItem(key: string) {
      if (options?.throwOnGet) throw new Error('SecurityError');
      return Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null;
    },
    setItem(key: string, value: string) {
      if (options?.throwOnSet) throw new Error('QuotaExceededError');
      store[key] = value;
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
}

describe('统一存储层 (storage.ts & schema.ts)', () => {
  it('收藏与足迹正确持久化与读取', () => {
    const backend = createMemoryBackend();
    const storage = new AppStorage(backend);

    const data = createEmptyData();
    data.favorites = [{ id: 'wang-yang-bu-lao', addedAt: 123456 }];
    data.history = [{ date: '2026-10-24', id: 'wang-yang-bu-lao', drawnAt: 123456 }];
    data.settings.mode = 'tv';

    expect(storage.save(data)).toBe(true);
    expect(storage.getStatus()).toBe('ok');

    const loaded = storage.load();
    expect(loaded.status).toBe('ok');
    expect(loaded.notice).toBeNull();
    expect(loaded.data.favorites).toEqual([
      { id: 'wang-yang-bu-lao', addedAt: 123456 },
    ]);
    expect(loaded.data.history).toEqual([
      { date: '2026-10-24', id: 'wang-yang-bu-lao', drawnAt: 123456 },
    ]);
    expect(loaded.data.settings.mode).toBe('tv');
  });

  it('损坏数据（非法 JSON、非对象、旧版本数据、重复日期）不会导致崩溃，且自动备份原文本', () => {
    const backend = createMemoryBackend();
    backend.store[STORAGE_KEY] = '{bad json';
    const storage = new AppStorage(backend);

    const loaded = storage.load();
    expect(loaded.status).toBe('ok');
    expect(loaded.notice).toContain('损坏');
    expect(loaded.data.favorites).toEqual([]);
    expect(loaded.data.history).toEqual([]);
    expect(backend.store[CORRUPT_BACKUP_KEY]).toBe('{bad json');

    // 测试旧结构（无版本号、收藏为字符串数组、历史含重复日期或非法 ID）
    const sanitized = sanitizeData({
      favorites: ['wang-yang-bu-lao', 'wang-yang-bu-lao', 123, 'INVALID_UPPER'],
      history: [
        { date: '2026-10-24', id: 'wang-yang-bu-lao', drawnAt: 100 },
        { date: '2026-10-24', id: 'shou-zhu-dai-tu', drawnAt: 200 },
        { date: 'bad-date', id: 'shou-zhu-dai-tu', drawnAt: 300 },
      ],
    });
    expect(sanitized.data.favorites.map((f) => f.id)).toEqual(['wang-yang-bu-lao']);
    expect(sanitized.data.history.length).toBe(1);
    expect(sanitized.data.history[0].id).toBe('wang-yang-bu-lao');
    expect(sanitized.data.round.usedIds).toEqual(['wang-yang-bu-lao']);
  });

  it('localStorage 不可用或写入失败时，自动降级为当前会话内存并提示', () => {
    // 1. 初始即无 localStorage
    const noBackendStorage = new AppStorage(null);
    const load1 = noBackendStorage.load();
    expect(load1.status).toBe('memory');
    expect(load1.notice).toContain('本地存储');

    // 在内存模式下依然能在会话内保存和读取
    const d = createEmptyData();
    d.favorites = [{ id: 'shou-zhu-dai-tu', addedAt: 1 }];
    expect(noBackendStorage.save(d)).toBe(false);
    expect(noBackendStorage.load().data.favorites[0].id).toBe('shou-zhu-dai-tu');

    // 2. 运行中写入抛出 QuotaExceededError
    const failingBackend = createMemoryBackend({ throwOnSet: true });
    const runtimeFailStorage = new AppStorage(failingBackend);
    expect(runtimeFailStorage.getStatus()).toBe('ok');
    expect(runtimeFailStorage.save(d)).toBe(false);
    expect(runtimeFailStorage.getStatus()).toBe('memory');
  });
});
