/**
 * 内容索引与分类元数据。
 */
import type { Proverb, ProverbCategory, SourceStatus, StoryBeat } from './types';
import { PROVERBS } from './proverbs';

export interface CategoryMeta {
  key: ProverbCategory;
  label: string;
  /** 一句话说明，避免伪装成严格的学术分类 */
  hint: string;
}

/** 类型顺序即筛选按钮顺序 */
export const CATEGORIES: CategoryMeta[] = [
  { key: 'suyu', label: '俗语', hint: '口头流传、通俗形象的说法' },
  { key: 'chengyu', label: '成语', hint: '结构较固定、多有典故的词组' },
  { key: 'guanyongyu', label: '惯用语', hint: '口语里常用的比喻说法' },
  { key: 'geyan', label: '格言', hint: '可作行为准则的话' },
  { key: 'zhenyan', label: '箴言', hint: '带劝诫意味的话' },
  { key: 'jingju', label: '警句', hint: '简练而发人深省的话' },
];

export function categoryLabel(key: ProverbCategory): string {
  for (let i = 0; i < CATEGORIES.length; i++) {
    if (CATEGORIES[i].key === key) return CATEGORIES[i].label;
  }
  return '老话';
}

export const BEAT_LABELS: Record<StoryBeat, string> = {
  cause: '起因',
  action: '选择',
  result: '结果',
  point: '点题',
};

export const SOURCE_STATUS_LABELS: Record<SourceStatus, string> = {
  classical: '典籍出处',
  folk: '民间流传',
  unverified: '出处待核实',
};

/** 内容仓库：便于测试注入不同内容池 */
export interface ContentRepo {
  all: Proverb[];
  ids: string[];
  get: (id: string) => Proverb | null;
}

export function createRepo(list: Proverb[]): ContentRepo {
  const map: Record<string, Proverb> = {};
  const ids: string[] = [];
  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    if (map[p.id]) continue; // 忽略重复 id
    map[p.id] = p;
    ids.push(p.id);
  }
  return {
    all: list,
    ids,
    get: (id: string) => (Object.prototype.hasOwnProperty.call(map, id) ? map[id] : null),
  };
}

/** 默认内容仓库 */
export const DEFAULT_REPO: ContentRepo = createRepo(PROVERBS);
