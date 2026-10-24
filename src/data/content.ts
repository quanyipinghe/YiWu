/**
 * 内容索引、轻量目录摘要与分类元数据。
 *
 * 性能与兼容说明：
 * - 为兼容 Chrome 66 单文件经典脚本构建，不引入运行时动态模块拆分。
 * - 在仓库层将「轻量目录摘要（ProverbSummary）」与「完整故事详情（Proverb）」分离：
 *   列表页（收藏、足迹、关联推荐）仅读取轻量摘要并配合分页展示，
 *   只有详情页才读取单条完整故事与 SVG 场景配置，避免一次性渲染大量节点。
 */
import type {
  Proverb,
  ProverbCategory,
  ProverbSummary,
  SourceStatus,
  StoryBeat,
} from './types';
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

/** 提取轻量目录摘要（不含故事画格、深入解释等大体积字段） */
export function toSummary(p: Proverb): ProverbSummary {
  return {
    id: p.id,
    text: p.text,
    category: p.category,
    tags: p.tags,
    plainExplanation: p.plainExplanation,
  };
}

/** 内容仓库：提供轻量摘要检索与按需详情读取，便于测试注入不同内容池 */
export interface ContentRepo {
  all: Proverb[];
  ids: string[];
  summaries: ProverbSummary[];
  get: (id: string) => Proverb | null;
  getSummary: (id: string) => ProverbSummary | null;
  getRelated: (proverb: Proverb) => ProverbSummary[];
  getContrast: (proverb: Proverb) => ProverbSummary[];
}

export function createRepo(list: Proverb[]): ContentRepo {
  const map: Record<string, Proverb> = {};
  const summaryMap: Record<string, ProverbSummary> = {};
  const ids: string[] = [];
  const summaries: ProverbSummary[] = [];

  for (let i = 0; i < list.length; i++) {
    const p = list[i];
    if (map[p.id]) continue; // 忽略重复 id
    map[p.id] = p;
    const s = toSummary(p);
    summaryMap[p.id] = s;
    ids.push(p.id);
    summaries.push(s);
  }

  const get = (id: string): Proverb | null =>
    Object.prototype.hasOwnProperty.call(map, id) ? map[id] : null;

  const getSummary = (id: string): ProverbSummary | null =>
    Object.prototype.hasOwnProperty.call(summaryMap, id) ? summaryMap[id] : null;

  const getRelated = (proverb: Proverb): ProverbSummary[] => {
    const out: ProverbSummary[] = [];
    const rel = proverb.relatedIds || [];
    for (let i = 0; i < rel.length; i++) {
      const targetId = rel[i];
      if (targetId === proverb.id) continue;
      const s = getSummary(targetId);
      if (s) out.push(s);
    }
    return out;
  };

  const getContrast = (proverb: Proverb): ProverbSummary[] => {
    const out: ProverbSummary[] = [];
    const con = proverb.contrastIds || [];
    for (let i = 0; i < con.length; i++) {
      const targetId = con[i];
      if (targetId === proverb.id) continue;
      const s = getSummary(targetId);
      if (s) out.push(s);
    }
    return out;
  };

  return {
    all: list,
    ids,
    summaries,
    get,
    getSummary,
    getRelated,
    getContrast,
  };
}

/** 默认内容仓库 */
export const DEFAULT_REPO: ContentRepo = createRepo(PROVERBS);
