/**
 * 内容数据类型定义。
 *
 * 说明：
 * - 每条内容只有一个「主要类型」category，辅助标签 tags 可以交叉，
 *   不把分类伪装成严格互斥的学术分类。
 * - id 为稳定的拼音短横线标识，长期保存（收藏、足迹）都只使用 id，
 *   绝不使用数组下标。
 */

/** 主要类型 */
export type ProverbCategory =
  | 'suyu' // 俗语
  | 'chengyu' // 成语
  | 'guanyongyu' // 惯用语
  | 'geyan' // 格言
  | 'zhenyan' // 箴言
  | 'jingju'; // 警句

/** 四格故事的节拍：起因、行为或选择、结果、点题 */
export type StoryBeat = 'cause' | 'action' | 'result' | 'point';

/** 四格故事可用的简单场景（由本地 SVG 绘制，不依赖外部图片） */
export type SceneKind =
  | 'home' // 家中客厅
  | 'kitchen' // 厨房餐桌
  | 'street' // 街道小区
  | 'office' // 办公室工位
  | 'school' // 教室书桌
  | 'park' // 公园树木
  | 'market' // 菜市场摊位
  | 'night' // 夜晚台灯
  | 'rain' // 下雨天
  | 'mountain' // 山路远行
  | 'workshop' // 工作台手艺
  | 'phone'; // 手机消息

/** 出处状态 */
export type SourceStatus =
  | 'classical' // 有较明确的典籍出处（source 中写明）
  | 'folk' // 民间流传，具体出处未核实
  | 'unverified'; // 出处待核实

/** 四格故事中的一格 */
export interface StoryPanel {
  beat: StoryBeat;
  scene: SceneKind;
  /** 一到两句话，适合电视阅读，建议 18～45 字 */
  text: string;
}

/** 一条「一日一悟」内容 */
export interface Proverb {
  /** 稳定唯一 id，例如 wang-yang-bu-lao */
  id: string;
  /** 原句 */
  text: string;
  /** 主要类型 */
  category: ProverbCategory;
  /** 辅助标签（可交叉） */
  tags: string[];
  /** 白话解释：一两句话说清意思 */
  plainExplanation: string;
  /** 四格生活故事标题（虚构生活情境） */
  storyTitle: string;
  /** 四格生活故事，顺序固定：起因、选择、结果、点题 */
  story: [StoryPanel, StoryPanel, StoryPanel, StoryPanel];
  /** 深入解释 */
  interpretation: string;
  /** 适用边界：什么时候不适用、容易被误用的地方 */
  limits: string;
  /** 具体的思考问题 */
  reflectionQuestion: string;
  /** 出处说明；无法确认时写明「民间流传，具体出处未核实」或「出处待核实」 */
  source: string;
  sourceStatus: SourceStatus;
}
