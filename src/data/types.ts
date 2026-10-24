/**
 * 内容数据类型定义。
 *
 * 说明：
 * - 每条内容只有一个「主要类型」category，辅助标签 tags 可以交叉，
 *   不把分类伪装成严格互斥的学术分类。
 * - id 为稳定的拼音短横线标识，长期保存（收藏、足迹）都只使用 id，
 *   绝不使用数组下标。
 * - 支持多种故事呈现结构（可辨识联合类型 StoryStructure）与可组合的 SVG 视觉场景配置（PanelVisual）。
 */

/** 主要类型 */
export type ProverbCategory =
  | 'suyu' // 俗语
  | 'chengyu' // 成语
  | 'guanyongyu' // 惯用语
  | 'geyan' // 格言
  | 'zhenyan' // 箴言
  | 'jingju'; // 警句

/** 15 类核心主题方向（辅助统计与标签归类） */
export type ThemeCategory =
  | '学习与积累'
  | '做事与执行'
  | '谨慎与风险'
  | '人际关系'
  | '沟通与表达'
  | '自省与成长'
  | '诚信与责任'
  | '判断与偏见'
  | '时间与耐心'
  | '得失与取舍'
  | '合作与分工'
  | '家庭与生活'
  | '消费与欲望'
  | '工作与职业'
  | '情绪与心态';

/** 12 类生活情境场景域（用于统计故事生活面覆盖） */
export type LifeSceneDomain =
  | '家庭'
  | '校园'
  | '职场'
  | '商店与市场'
  | '旅途'
  | '社区'
  | '田野与农作'
  | '手工与修理'
  | '网络生活'
  | '团队合作'
  | '朋友交往'
  | '公共生活';

/** 四格故事的节拍：起因、行为或选择、结果、点题 */
export type StoryBeat = 'cause' | 'action' | 'result' | 'point';

/**
 * 故事画格可用的 SVG 背景场景（纯本地内联 SVG 绘制，零外部图片依赖）：
 * 保留原有 12 种键值，并扩展车站/旅途、庭院/社区、田地/果园、河边/桥梁、书房与抽象寓意场景。
 */
export type SceneKind =
  | 'home' // 客厅 / 家中
  | 'kitchen' // 厨房 / 餐桌
  | 'street' // 街道
  | 'office' // 办公室
  | 'school' // 书房 / 教室
  | 'park' // 庭院 / 社区公园
  | 'market' // 商店 / 市场
  | 'night' // 夜晚台灯
  | 'rain' // 风雨出行
  | 'mountain' // 山路 / 远行
  | 'workshop' // 工坊 / 修理台
  | 'phone' // 数字屏幕 / 网络沟通
  | 'station' // 车站 / 旅途
  | 'courtyard' // 庭院 / 邻里院落
  | 'field' // 田地 / 果园
  | 'river' // 河边 / 桥梁
  | 'study' // 书房案头
  | 'metaphor'; // 抽象寓意场景（现代视觉比喻）

/** 可复用角色标识（不同发型、年龄感与服饰） */
export type CharacterId =
  | 'lin' // 青年短发，休闲衬衫
  | 'xiao' // 青年长发/马尾，轻便外套
  | 'chen' // 中年稳重，夹克/工装
  | 'mei' // 中年温和，针织衫/常服
  | 'zhou' // 长者银发，开衫
  | 'sun' // 长者慈祥，盘发
  | 'tong' // 少年学童，校服
  | 'jiang'; // 手艺人/农人，围裙或劳作服

/** 角色动作与神态（不依赖复杂面部细节即可分辨） */
export type CharacterPose =
  | 'thinking' // 思考：托腮/思索
  | 'talking' // 交谈：伸手示意/对话
  | 'acting' // 行动：动手操作/忙碌
  | 'hesitating' // 犹豫：驻足迟疑
  | 'discovering' // 发现：俯身观察/豁然察觉
  | 'relieved' // 释然：舒展放松
  | 'walking' // 行走：迈步向前
  | 'sitting'; // 端坐：桌前/椅上

/** 画格内的人物配置 */
export interface CharacterPlacement {
  id: CharacterId;
  pose: CharacterPose;
  /** 画面水平位置 */
  position?: 'left' | 'center' | 'right';
  /** 朝向 */
  facing?: 'left' | 'right';
}

/** 可复用的道具素材标识 */
export type PropKind =
  | 'book' // 书本
  | 'pen' // 笔与便签
  | 'desk' // 桌椅
  | 'phone' // 手机
  | 'laptop' // 电脑
  | 'bag' // 购物袋/行囊
  | 'goods' // 商品/包裹
  | 'bill' // 账单/清单
  | 'tools' // 修理工具
  | 'wood' // 木板/器物
  | 'rope' // 绳子/线轴
  | 'sapling' // 树苗/绿植
  | 'fruit' // 果实/食材
  | 'basket' // 篮子/收纳箱
  | 'signpost' // 路牌
  | 'bridge' // 桥梁
  | 'stone' // 石头/磨刀石
  | 'clock' // 时钟
  | 'calendar' // 日历
  | 'lamp' // 台灯/路灯
  | 'door' // 门扇
  | 'window' // 窗户
  | 'pot' // 汤锅/茶壶
  | 'umbrella' // 雨伞
  | 'mirror'; // 镜子（自省寓意）

/** 画面叙事元素类型 */
export type NarrativeKind =
  | 'bubble' // 简短对话/思绪气泡提示
  | 'highlight' // 关键物品高亮圈
  | 'arrow' // 路径或因果方向箭头
  | 'contrast' // 前后或左右对照分割
  | 'fork' // 分岔选择路径
  | 'time' // 时间推移标记
  | 'zoom'; // 局部放大聚焦框

/** 画面叙事配置 */
export interface NarrativeElement {
  type: NarrativeKind;
  /** 极简符号或 2～4 字视觉提示；主要对白和正文保留在 HTML 中 */
  label?: string;
  /** 兼容简短文本提示字段 */
  text?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
}

/** 单格故事的组合式视觉配置 */
export interface PanelVisual {
  /** 覆盖或补充背景场景 */
  scene?: SceneKind;
  /** 画格中出现的人物（保持同一故事人物身份一致、姿态递进） */
  characters?: CharacterPlacement[];
  /** 画格中的关键道具（1～3 件） */
  props?: PropKind[];
  /** 重点聚焦道具 */
  focusProp?: PropKind;
  /** 叙事辅助元素 */
  narrative?: NarrativeElement;
  /** HTML 层展示的简短人物对白或动作注脚（不塞入 SVG 内部） */
  dialogue?: string;
  /** 是否为现代视觉比喻（对抽象内容明确标注） */
  isMetaphor?: boolean;
}

/** 出处状态 */
export type SourceStatus =
  | 'classical' // 有较明确的典籍出处（source 中写明）
  | 'folk' // 民间流传，具体出处未核实
  | 'unverified'; // 出处待核实

/** 四格故事中的一格 */
export interface StoryPanel {
  beat: StoryBeat;
  scene: SceneKind;
  /** 一到两句话，适合电视与多端阅读，建议 18～55 字 */
  text: string;
  /** 组合式视觉配置（人物、道具、叙事元素、HTML 对白） */
  visual?: PanelVisual;
}

/** 故事布局一：经典四格故事（起因、选择、结果、点题） */
export interface FourPanelStory {
  layout: 'four-panel';
  panels: [StoryPanel, StoryPanel, StoryPanel, StoryPanel];
}

/** 前后对照中的一侧 */
export interface ContrastSide {
  /** 对照标题，如「做法甲：一味求快」 */
  label: string;
  scene: SceneKind;
  visual?: PanelVisual;
  action: string;
  outcome: string;
  tone: 'caution' | 'positive' | 'neutral';
}

/** 故事布局二：前后对照（两种做法、不同结果） */
export interface ContrastStory {
  layout: 'contrast';
  premise: string;
  premiseScene: SceneKind;
  premiseVisual?: PanelVisual;
  left: ContrastSide;
  right: ContrastSide;
  point: string;
}

/** 选择分支中的一条路径 */
export interface BranchOption {
  /** 分支名称，如「分支 A：先核实再转发」 */
  label: string;
  scene: SceneKind;
  visual?: PanelVisual;
  choice: string;
  result: string;
  recommended?: boolean;
}

/** 故事布局三：选择分支（一个处境、两个选择） */
export interface BranchStory {
  layout: 'branch';
  situation: string;
  situationScene: SceneKind;
  situationVisual?: PanelVisual;
  optionA: BranchOption;
  optionB: BranchOption;
  point: string;
}

/** 时间推进中的一个阶段 */
export interface TimelineStage {
  /** 时间节点标签，如「第一周」「一个月后」「半年后」 */
  timeLabel: string;
  scene: SceneKind;
  visual?: PanelVisual;
  text: string;
}

/** 故事布局四：时间推进（积累或变化的过程） */
export interface TimelineStory {
  layout: 'timeline';
  stages: [TimelineStage, TimelineStage, TimelineStage, TimelineStage];
  point: string;
}

/** 故事结构可辨识联合类型 */
export type StoryStructure =
  | FourPanelStory
  | ContrastStory
  | BranchStory
  | TimelineStory;

export type StoryLayoutKind = StoryStructure['layout'];

/** 轻量列表摘要信息（供列表页分页渲染，避免在列表页解析大体积故事结构） */
export interface ProverbSummary {
  id: string;
  text: string;
  category: ProverbCategory;
  tags: string[];
  plainExplanation: string;
}

/** 一条「一日一悟」完整内容 */
export interface Proverb {
  /** 稳定唯一 id，例如 wang-yang-bu-lao */
  id: string;
  /** 原句 */
  text: string;
  /** 主要类型 */
  category: ProverbCategory;
  /** 辅助标签（可交叉，涵盖主题） */
  tags: string[];
  /** 所属生活场景分类（可选，未显式提供时可根据画格场景自动推导） */
  sceneDomain?: LifeSceneDomain;
  /** 白话解释：一两句话说清意思 */
  plainExplanation: string;
  /** 生活故事标题（虚构生活情境） */
  storyTitle: string;
  /** 四格生活故事，顺序固定：起因、选择、结果、点题 */
  story: [StoryPanel, StoryPanel, StoryPanel, StoryPanel];
  /**
   * 扩展故事呈现结构（可辨识联合类型：four-panel / contrast / branch / timeline）。
   * 未提供时默认按 four-panel 渲染 story 四格数据。
   */
  storyStructure?: StoryStructure;
  /** 深入解释 */
  interpretation: string;
  /** 适用边界：什么时候不适用、容易被误用的地方（必须具体） */
  limits: string;
  /** 具体的思考问题 */
  reflectionQuestion: string;
  /** 出处说明；无法确认时写明「民间流传，具体出处未核实」或「出处待核实」 */
  source: string;
  sourceStatus: SourceStatus;
  /** 相关内容 ID 列表（可选，必须引用真实存在的 ID） */
  relatedIds?: string[];
  /** 可对照理解的内容 ID 列表（可选，必须引用真实存在的 ID） */
  contrastIds?: string[];
  /** 对照说明重点：分别提醒什么、适用条件有何区别（可选） */
  contrastNote?: string;
  /** 常见误解（可选） */
  commonMisreading?: string;
  /** 现代生活中的应用（可选） */
  modernApplication?: string;
}
