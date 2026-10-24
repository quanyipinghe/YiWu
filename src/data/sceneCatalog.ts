/**
 * 故事视觉场景素材目录与解析工具。
 *
 * 职责：
 * - 集中定义所有受支持的场景背景（SceneKind）、角色（CharacterId）、姿态（CharacterPose）、
 *   道具（PropKind）与叙事元素（NarrativeKind），供组件渲染与校验脚本共同引用。
 * - 提供 resolvePanelVisual：优先使用条目显式配置的 visual；若某画格缺省部分子项或传入未知场景，
 *   则提供确定性且保持同一故事人物身份连续的合理兜底，绝不因缺省配置崩溃。
 */
import type {
  CharacterId,
  CharacterPlacement,
  CharacterPose,
  LifeSceneDomain,
  NarrativeElement,
  NarrativeKind,
  PanelVisual,
  PropKind,
  SceneKind,
  StoryBeat,
  ThemeCategory,
} from './types';

export const VALID_SCENE_KINDS: SceneKind[] = [
  'home',
  'kitchen',
  'street',
  'office',
  'school',
  'park',
  'market',
  'night',
  'rain',
  'mountain',
  'workshop',
  'phone',
  'station',
  'courtyard',
  'field',
  'river',
  'study',
  'metaphor',
];

export const SCENE_LABELS: Record<SceneKind, string> = {
  home: '家中客厅',
  kitchen: '厨房餐桌',
  street: '街巷路口',
  office: '办公桌前',
  school: '教室讲堂',
  park: '社区公园',
  market: '商店市集',
  night: '灯下夜读',
  rain: '风雨途中',
  mountain: '山路远行',
  workshop: '工坊修理台',
  phone: '屏幕沟通',
  station: '车站旅途',
  courtyard: '邻里庭院',
  field: '田野果园',
  river: '河岸桥边',
  study: '书房案头',
  metaphor: '寓意之境',
};

export const VALID_CHARACTER_IDS: CharacterId[] = [
  'lin',
  'xiao',
  'chen',
  'mei',
  'zhou',
  'sun',
  'tong',
  'jiang',
];

export interface CharacterMeta {
  id: CharacterId;
  name: string;
  hairStyle: 'short' | 'ponytail' | 'parted' | 'bob' | 'elder-short' | 'bun' | 'cap' | 'hat';
  outfitColor: string;
  accentColor: string;
}

export const CHARACTER_META: Record<CharacterId, CharacterMeta> = {
  lin: {
    id: 'lin',
    name: '青年小林（短发衬衫）',
    hairStyle: 'short',
    outfitColor: '#3b5978',
    accentColor: '#f2c879',
  },
  xiao: {
    id: 'xiao',
    name: '青年小晓（马尾轻衫）',
    hairStyle: 'ponytail',
    outfitColor: '#8c4638',
    accentColor: '#f2c879',
  },
  chen: {
    id: 'chen',
    name: '中年老陈（工装夹克）',
    hairStyle: 'parted',
    outfitColor: '#3e5c47',
    accentColor: '#d9b26f',
  },
  mei: {
    id: 'mei',
    name: '中年梅姐（温和针织）',
    hairStyle: 'bob',
    outfitColor: '#7a4b63',
    accentColor: '#f2c879',
  },
  zhou: {
    id: 'zhou',
    name: '长者周伯（银发开衫）',
    hairStyle: 'elder-short',
    outfitColor: '#5c5346',
    accentColor: '#e2c07d',
  },
  sun: {
    id: 'sun',
    name: '长者孙姨（慈祥盘发）',
    hairStyle: 'bun',
    outfitColor: '#6d4c41',
    accentColor: '#f2c879',
  },
  tong: {
    id: 'tong',
    name: '学童小睿（书包校服）',
    hairStyle: 'cap',
    outfitColor: '#365f73',
    accentColor: '#f4a261',
  },
  jiang: {
    id: 'jiang',
    name: '匠人阿匠（围裙草帽）',
    hairStyle: 'hat',
    outfitColor: '#5e503f',
    accentColor: '#e07a5f',
  },
};

export const VALID_CHARACTER_POSES: CharacterPose[] = [
  'thinking',
  'talking',
  'acting',
  'hesitating',
  'discovering',
  'relieved',
  'walking',
  'sitting',
];

export const POSE_LABELS: Record<CharacterPose, string> = {
  thinking: '思考',
  talking: '交谈',
  acting: '行动',
  hesitating: '犹豫',
  discovering: '发现',
  relieved: '释然',
  walking: '前行',
  sitting: '静坐',
};

export const VALID_PROP_KINDS: PropKind[] = [
  'book',
  'pen',
  'desk',
  'phone',
  'laptop',
  'bag',
  'goods',
  'bill',
  'tools',
  'wood',
  'rope',
  'sapling',
  'fruit',
  'basket',
  'signpost',
  'bridge',
  'stone',
  'clock',
  'calendar',
  'lamp',
  'door',
  'window',
  'pot',
  'umbrella',
  'mirror',
];

export const VALID_NARRATIVE_KINDS: NarrativeKind[] = [
  'bubble',
  'highlight',
  'arrow',
  'contrast',
  'fork',
  'time',
  'zoom',
];

export const ALL_THEME_CATEGORIES: ThemeCategory[] = [
  '学习与积累',
  '做事与执行',
  '谨慎与风险',
  '人际关系',
  '沟通与表达',
  '自省与成长',
  '诚信与责任',
  '判断与偏见',
  '时间与耐心',
  '得失与取舍',
  '合作与分工',
  '家庭与生活',
  '消费与欲望',
  '工作与职业',
  '情绪与心态',
];

export const ALL_LIFE_SCENE_DOMAINS: LifeSceneDomain[] = [
  '家庭',
  '校园',
  '职场',
  '商店与市场',
  '旅途',
  '社区',
  '田野与农作',
  '手工与修理',
  '网络生活',
  '团队合作',
  '朋友交往',
  '公共生活',
];

/** 判断是否为合法的 SceneKind */
export function isValidSceneKind(val: unknown): val is SceneKind {
  return typeof val === 'string' && VALID_SCENE_KINDS.indexOf(val as SceneKind) !== -1;
}

/** 根据故事第一个画格或显式字段推导生活场景分类 */
export function inferLifeSceneDomain(
  explicitDomain: LifeSceneDomain | undefined,
  scenes: SceneKind[],
  tags: string[],
): LifeSceneDomain {
  if (explicitDomain && ALL_LIFE_SCENE_DOMAINS.indexOf(explicitDomain) !== -1) {
    return explicitDomain;
  }
  const primary = scenes[0] || 'home';
  if (primary === 'field') return '田野与农作';
  if (primary === 'workshop') return '手工与修理';
  if (primary === 'market') return '商店与市场';
  if (primary === 'station' || primary === 'mountain' || primary === 'river') return '旅途';
  if (primary === 'school' || primary === 'study') return '校园';
  if (primary === 'office') return tags.indexOf('合作') !== -1 ? '团队合作' : '职场';
  if (primary === 'phone') return '网络生活';
  if (primary === 'courtyard' || primary === 'park') return '社区';
  if (primary === 'street' || primary === 'rain') return '公共生活';
  if (primary === 'kitchen' || primary === 'home' || primary === 'night') return '家庭';
  return '家庭';
}

/** 哈希字符串为非负整数（用于缺省时在同一故事内保持稳定主角身份） */
function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

const SCENE_DEFAULT_PROPS: Record<SceneKind, PropKind[]> = {
  home: ['window', 'sapling'],
  kitchen: ['pot', 'fruit'],
  street: ['signpost', 'bag'],
  office: ['laptop', 'clock'],
  school: ['book', 'pen'],
  park: ['sapling', 'stone'],
  market: ['goods', 'bill'],
  night: ['lamp', 'book'],
  rain: ['umbrella', 'bag'],
  mountain: ['signpost', 'stone'],
  workshop: ['tools', 'wood'],
  phone: ['phone', 'bill'],
  station: ['bag', 'clock'],
  courtyard: ['sapling', 'basket'],
  field: ['sapling', 'fruit'],
  river: ['bridge', 'stone'],
  study: ['book', 'lamp'],
  metaphor: ['mirror', 'signpost'],
};

const BEAT_DEFAULT_POSE: Record<StoryBeat, CharacterPose> = {
  cause: 'hesitating',
  action: 'acting',
  result: 'discovering',
  point: 'relieved',
};

const BEAT_DEFAULT_NARRATIVE: Record<StoryBeat, NarrativeElement> = {
  cause: { type: 'bubble', label: '起因' },
  action: { type: 'arrow', direction: 'right', label: '行动' },
  result: { type: 'highlight', label: '转机' },
  point: { type: 'time', label: '领悟' },
};

export interface ResolvedPanelVisual {
  scene: SceneKind;
  characters: CharacterPlacement[];
  props: PropKind[];
  narrative: NarrativeElement;
  dialogue?: string;
  isMetaphor: boolean;
}

/**
 * 解析并补全单格视觉配置，确保：
 * 1. 非法或缺失的 scene 自动回退至 'home'。
 * 2. 同一故事（相同 storySeed）不同画格在不缺省或半缺省时保持主角身份一致，且动作随节拍递进。
 * 3. 道具与叙事元素齐全。
 */
export function resolvePanelVisual(
  rawScene: SceneKind | string,
  beat: StoryBeat = 'cause',
  visual?: PanelVisual,
  storySeed = 'default-story',
): ResolvedPanelVisual {
  const targetScene = visual && visual.scene ? visual.scene : rawScene;
  const scene: SceneKind = isValidSceneKind(targetScene) ? targetScene : 'home';

  const seedNum = hashSeed(storySeed);
  const defaultCharId = VALID_CHARACTER_IDS[seedNum % VALID_CHARACTER_IDS.length];

  let characters: CharacterPlacement[];
  if (visual && Array.isArray(visual.characters) && visual.characters.length > 0) {
    characters = visual.characters.map((c, idx) => ({
      id: VALID_CHARACTER_IDS.indexOf(c.id) !== -1 ? c.id : defaultCharId,
      pose: VALID_CHARACTER_POSES.indexOf(c.pose) !== -1 ? c.pose : BEAT_DEFAULT_POSE[beat],
      position: c.position || (idx === 0 ? 'left' : 'right'),
      facing: c.facing || (idx === 0 ? 'right' : 'left'),
    }));
  } else {
    characters = [
      {
        id: defaultCharId,
        pose: BEAT_DEFAULT_POSE[beat],
        position: beat === 'result' || beat === 'point' ? 'center' : 'left',
        facing: 'right',
      },
    ];
  }

  let props: PropKind[];
  if (visual && Array.isArray(visual.props) && visual.props.length > 0) {
    props = visual.props.filter((p) => VALID_PROP_KINDS.indexOf(p) !== -1).slice(0, 3);
    if (props.length === 0) props = SCENE_DEFAULT_PROPS[scene].slice(0, 2);
  } else {
    props = SCENE_DEFAULT_PROPS[scene].slice(0, 2);
  }

  const narrative: NarrativeElement =
    visual && visual.narrative && VALID_NARRATIVE_KINDS.indexOf(visual.narrative.type) !== -1
      ? visual.narrative
      : BEAT_DEFAULT_NARRATIVE[beat];

  return {
    scene,
    characters,
    props,
    narrative,
    dialogue: visual ? visual.dialogue : undefined,
    isMetaphor: Boolean((visual && visual.isMetaphor) || scene === 'metaphor'),
  };
}
