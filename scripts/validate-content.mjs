/**
 * 内容库结构校验、关联核查、重复风险扫描与统计脚本。
 *
 * 执行方式：
 *   node scripts/validate-content.mjs
 *   npm run check:content
 *
 * 重要说明：
 *   本脚本通过自动化规则检查数据结构、唯一性、视觉资源配置、关联有效性与文本重复风险；
 *   自动化检查通过仅代表数据结构与规则合格，不代表古籍文献事实已经人工学术考证。
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

/** 升级前已有的 33 个历史内容 ID（必须 100% 保留，确保用户收藏与历史足迹不失效） */
export const LEGACY_REQUIRED_IDS = [
  'yi-kou-chi-bu-cheng-pang-zi',
  'yuan-qin-bu-ru-jin-lin',
  'mo-dao-bu-wu-kan-chai-gong',
  'chi-yi-qian-zhang-yi-zhi',
  'zhong-ren-shi-chai-huo-yan-gao',
  'hua-dao-zui-bian-liu-san-fen',
  'che-dao-shan-qian-bi-you-lu',
  'bu-pa-man-jiu-pa-zhan',
  'hao-ji-xing-bu-ru-lan-bi-tou',
  'da-tui-tang-gu',
  'po-leng-shui',
  'zuan-niu-jiao-jian',
  'kai-ye-che',
  'wang-yang-bu-lao',
  'shou-zhu-dai-tu',
  'sai-weng-shi-ma',
  'ba-miao-zhu-zhang',
  'hua-she-tian-zu',
  'bei-gong-she-ying',
  'san-ren-cheng-hu',
  'shui-di-shi-chuan',
  'shu-neng-sheng-qiao',
  'wei-yu-chou-mou',
  'qian-li-zhi-xing-shi-yu-zu-xia',
  'yu-su-ze-bu-da',
  'xue-er-bu-si-ze-wang-si-er-bu-xue-ze-dai',
  'gong-yu-shan-qi-shi-bi-xian-li-qi-qi',
  'ji-suo-bu-yu-wu-shi-yu-ren',
  'zhi-zhi-wei-zhi-zhi-bu-zhi-wei-bu-zhi-shi-zhi-ye',
  'chi-you-suo-duan-cun-you-suo-chang',
  'jian-ting-ze-ming-pian-xin-ze-an',
  'qian-shi-bu-wang-hou-shi-zhi-shi',
  'xing-bai-li-zhe-ban-jiu-shi',
];

const VALID_CATEGORIES = ['suyu', 'chengyu', 'guanyongyu', 'geyan', 'zhenyan', 'jingju'];
const VALID_BEATS = ['cause', 'action', 'result', 'point'];
const VALID_SOURCE_STATUS = ['classical', 'folk', 'unverified'];
const VALID_SCENES = [
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
const VALID_CHARACTERS = ['lin', 'xiao', 'chen', 'mei', 'zhou', 'sun', 'tong', 'jiang'];
const VALID_POSES = [
  'thinking',
  'talking',
  'acting',
  'hesitating',
  'discovering',
  'relieved',
  'walking',
  'sitting',
];
const VALID_PROPS = [
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
const VALID_NARRATIVES = ['bubble', 'highlight', 'arrow', 'contrast', 'fork', 'time', 'zoom'];

const PLACEHOLDER_PATTERNS = [
  /\bTODO\b/i,
  /\bFIXME\b/i,
  /待补充/,
  /示例正文/,
  /占位内容/,
  /测试数据/,
  /此处省略/,
  /要结合实际情况使用[。！]?$/,
  /^你有什么感悟[？?]?$/,
];

const CLICHE_PATTERNS = [
  /这告诉我们/,
  /生活中也是如此/,
  /每个人都会遇到/,
];

/** 15 个标准主题归类映射 */
const THEME_MAP = {
  学习与积累: ['学习', '积累', '读书', '求知', '熟能生巧', '基本功', '学习与积累'],
  做事与执行: ['方法', '计划', '执行', '准备', '行动', '效率', '做事与执行'],
  谨慎与风险: ['谨慎', '风险', '防范', '安全', '细节', '收尾', '谨慎与风险'],
  人际关系: ['人际', '邻里', '相处', '尊重', '体谅', '互助', '人际关系'],
  沟通与表达: ['沟通', '表达', '说话', '倾听', '言语', '劝告', '沟通与表达'],
  自省与成长: ['反思', '自省', '谦逊', '成长', '改过', '复盘', '自省与成长'],
  诚信与责任: ['诚信', '责任', '守信', '担当', '诚实', '承诺', '诚信与责任'],
  判断与偏见: ['判断', '偏见', '核实', '清醒', '独立思考', '流言', '判断与偏见'],
  时间与耐心: ['耐心', '坚持', '时间', '循序渐进', '长期', '火候', '时间与耐心'],
  得失与取舍: ['得失', '取舍', '分寸', '知足', '止损', '变化', '得失与取舍'],
  合作与分工: ['合作', '分工', '协作', '集体', '搭档', '借力', '合作与分工'],
  家庭与生活: ['家庭', '生活', '日常', '家务', '休息', '健康', '家庭与生活'],
  消费与欲望: ['消费', '欲望', '节俭', '攀比', '理财', '务实', '消费与欲望'],
  工作与职业: ['工作', '职业', '职场', '手艺', '专业', '敬业', '工作与职业'],
  情绪与心态: ['情绪', '心态', '豁达', '平静', '从容', '宽心', '情绪与心态'],
};

async function loadProverbs() {
  const esbuild = await import('esbuild');
  const entry = path.join(rootDir, 'src/data/proverbs.ts');
  const result = await esbuild.build({
    entryPoints: [entry],
    bundle: true,
    platform: 'node',
    format: 'esm',
    write: false,
  });
  const code = result.outputFiles[0].text;
  const dataUrl = 'data:text/javascript;base64,' + Buffer.from(code, 'utf8').toString('base64');
  const mod = await import(dataUrl);
  return mod.PROVERBS;
}

function validateVisual(visual, contextLabel, errors) {
  if (!visual || typeof visual !== 'object') return;
  if (visual.scene !== undefined && !VALID_SCENES.includes(visual.scene)) {
    errors.push(`${contextLabel}: 未知的 visual.scene "${visual.scene}"`);
  }
  if (visual.characters !== undefined) {
    if (!Array.isArray(visual.characters) || visual.characters.length === 0) {
      errors.push(`${contextLabel}: visual.characters 必须为非空数组`);
    } else {
      for (const ch of visual.characters) {
        if (!VALID_CHARACTERS.includes(ch.id)) {
          errors.push(`${contextLabel}: 未知的角色 ID "${ch.id}"`);
        }
        if (!VALID_POSES.includes(ch.pose)) {
          errors.push(`${contextLabel}: 未知的角色姿态 "${ch.pose}"`);
        }
      }
    }
  }
  if (visual.props !== undefined) {
    if (!Array.isArray(visual.props)) {
      errors.push(`${contextLabel}: visual.props 必须为数组`);
    } else {
      for (const p of visual.props) {
        if (!VALID_PROPS.includes(p)) {
          errors.push(`${contextLabel}: 未知的道具 "${p}"`);
        }
      }
    }
  }
  if (visual.narrative !== undefined) {
    if (!visual.narrative || !VALID_NARRATIVES.includes(visual.narrative.type)) {
      errors.push(
        `${contextLabel}: 未知的叙事元素类型 "${visual.narrative && visual.narrative.type}"`,
      );
    }
  }
}

export async function runValidation() {
  const proverbs = await loadProverbs();
  const errors = [];
  const warnings = [];

  if (!Array.isArray(proverbs) || proverbs.length === 0) {
    throw new Error('PROVERBS 为空或不是数组');
  }

  const idSet = new Set();
  const textMap = new Map();
  const storySignatureMap = new Map();
  const storyTitleMap = new Map();
  const interpretationSnippetMap = new Map();
  const limitsSnippetMap = new Map();

  const categoryCounts = {};
  const themeCounts = {};
  const sceneCounts = {};
  const lifeDomainCounts = {};
  const layoutCounts = {
    'four-panel': 0,
    contrast: 0,
    branch: 0,
    timeline: 0,
  };
  const sourceStatusCounts = {
    classical: 0,
    folk: 0,
    unverified: 0,
  };

  for (const k of Object.keys(THEME_MAP)) themeCounts[k] = 0;

  // 第一遍：采集所有 ID 并检查唯一性
  for (let i = 0; i < proverbs.length; i++) {
    const p = proverbs[i];
    const loc = `[#${i + 1} ${p && p.id ? p.id : '未知ID'}]`;
    if (!p || typeof p !== 'object') {
      errors.push(`${loc}: 条目不是有效对象`);
      continue;
    }
    if (!p.id || typeof p.id !== 'string' || !/^[a-z0-9][a-z0-9-]{1,80}$/.test(p.id)) {
      errors.push(`${loc}: ID 格式非法 "${p.id}"`);
    } else if (idSet.has(p.id)) {
      errors.push(`${loc}: 发现重复 ID "${p.id}"`);
    } else {
      idSet.add(p.id);
    }
  }

  // 检查原有 33 个历史 ID 是否全部保留
  for (const legacyId of LEGACY_REQUIRED_IDS) {
    if (!idSet.has(legacyId)) {
      errors.push(`缺失原有历史内容 ID: "${legacyId}"（会导致老用户收藏或历史记录失效）`);
    }
  }

  // 第二遍：逐条结构、字段、关联、画面与重复风险校验
  for (let i = 0; i < proverbs.length; i++) {
    const p = proverbs[i];
    const loc = `[${p.id}]`;

    // 1. 原句检查
    const normText = (p.text || '').trim().replace(/[，。！？、；：\s]/g, '');
    if (!p.text || p.text.trim().length < 3) {
      errors.push(`${loc}: 原句缺失或过短`);
    } else if (textMap.has(normText)) {
      errors.push(`${loc}: 原句与 [${textMap.get(normText)}] 重复 ("${p.text}")`);
    } else {
      textMap.set(normText, p.id);
    }

    // 2. 类型检查
    if (!VALID_CATEGORIES.includes(p.category)) {
      errors.push(`${loc}: 非法类型 "${p.category}"`);
    } else {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    }

    // 3. 标签与主题统计
    if (!Array.isArray(p.tags) || p.tags.length < 2) {
      errors.push(`${loc}: tags 至少需要 2 个标签`);
    } else {
      for (const [themeName, keywords] of Object.entries(THEME_MAP)) {
        if (p.tags.some((t) => keywords.some((kw) => t.includes(kw) || kw.includes(t)))) {
          themeCounts[themeName] = (themeCounts[themeName] || 0) + 1;
        }
      }
    }

    // 4. 核心文本字段长度与占位词检查
    const requiredTextFields = [
      { key: 'plainExplanation', min: 15, label: '白话解释' },
      { key: 'storyTitle', min: 4, label: '故事标题' },
      { key: 'interpretation', min: 30, label: '深入解释' },
      { key: 'limits', min: 28, label: '适用边界' },
      { key: 'reflectionQuestion', min: 14, label: '思考问题' },
      { key: 'source', min: 4, label: '出处说明' },
    ];

    for (const field of requiredTextFields) {
      const val = p[field.key];
      if (typeof val !== 'string' || val.trim().length < field.min) {
        errors.push(
          `${loc}: ${field.label} (${field.key}) 缺失或长度不足 ${field.min} 字（当前 ${
            val ? val.length : 0
          } 字）`,
        );
      } else {
        for (const pat of PLACEHOLDER_PATTERNS) {
          if (pat.test(val.trim())) {
            errors.push(`${loc}: ${field.label} 包含占位词或空洞套话 (${pat})`);
          }
        }
        for (const cliche of CLICHE_PATTERNS) {
          if (cliche.test(val)) {
            warnings.push(`${loc}: ${field.label} 出现套话表达 (${cliche})`);
          }
        }
      }
    }

    if (p.storyTitle) {
      const normTitle = p.storyTitle.trim();
      if (storyTitleMap.has(normTitle)) {
        errors.push(`${loc}: 故事标题与 [${storyTitleMap.get(normTitle)}] 完全重复 ("${normTitle}")`);
      } else {
        storyTitleMap.set(normTitle, p.id);
      }
    }

    // 5. 出处状态检查
    if (!VALID_SOURCE_STATUS.includes(p.sourceStatus)) {
      errors.push(`${loc}: 非法出处状态 "${p.sourceStatus}"`);
    } else {
      sourceStatusCounts[p.sourceStatus]++;
    }

    // 6. 四格基础故事与视觉配置检查
    if (!Array.isArray(p.story) || p.story.length !== 4) {
      errors.push(`${loc}: story 必须包含 4 个画格`);
    } else {
      const beats = p.story.map((s) => s && s.beat);
      if (beats.join(',') !== VALID_BEATS.join(',')) {
        errors.push(`${loc}: story 画格 beat 顺序必须为 cause,action,result,point，实际为 ${beats.join(',')}`);
      }
      const panelTexts = [];
      for (let idx = 0; idx < p.story.length; idx++) {
        const panel = p.story[idx];
        if (!panel || typeof panel.text !== 'string' || panel.text.trim().length < 10) {
          errors.push(`${loc}: 第 ${idx + 1} 格故事文字过短或缺失`);
        } else {
          panelTexts.push(panel.text.trim());
          for (const pat of PLACEHOLDER_PATTERNS) {
            if (pat.test(panel.text)) {
              errors.push(`${loc}: 第 ${idx + 1} 格包含占位词 (${pat})`);
            }
          }
        }
        if (!VALID_SCENES.includes(panel.scene)) {
          errors.push(`${loc}: 第 ${idx + 1} 格使用了未注册场景 "${panel.scene}"`);
        } else {
          sceneCounts[panel.scene] = (sceneCounts[panel.scene] || 0) + 1;
        }
        validateVisual(panel.visual, `${loc} story[${idx}]`, errors);
      }

      const fullStoryText = panelTexts.join('|');
      if (storySignatureMap.has(fullStoryText)) {
        errors.push(`${loc}: 故事内容与 [${storySignatureMap.get(fullStoryText)}] 完全相同`);
      } else {
        storySignatureMap.set(fullStoryText, p.id);
      }
    }

    // 7. 扩展故事结构（StoryStructure）校验
    const layout = p.storyStructure ? p.storyStructure.layout : 'four-panel';
    if (!['four-panel', 'contrast', 'branch', 'timeline'].includes(layout)) {
      errors.push(`${loc}: 未知的故事布局 "${layout}"`);
    } else {
      layoutCounts[layout]++;
      if (p.storyStructure) {
        const st = p.storyStructure;
        if (st.layout === 'contrast') {
          if (!st.premise || !st.left || !st.right || !st.point) {
            errors.push(`${loc}: contrast 布局缺少 premise / left / right / point 字段`);
          } else {
            if (!VALID_SCENES.includes(st.premiseScene)) {
              errors.push(`${loc}: contrast.premiseScene 非法 "${st.premiseScene}"`);
            }
            if (!VALID_SCENES.includes(st.left.scene) || !VALID_SCENES.includes(st.right.scene)) {
              errors.push(`${loc}: contrast 左右分支 scene 非法`);
            }
            validateVisual(st.premiseVisual, `${loc} contrast.premise`, errors);
            validateVisual(st.left.visual, `${loc} contrast.left`, errors);
            validateVisual(st.right.visual, `${loc} contrast.right`, errors);
          }
        } else if (st.layout === 'branch') {
          if (!st.situation || !st.optionA || !st.optionB || !st.point) {
            errors.push(`${loc}: branch 布局缺少 situation / optionA / optionB / point 字段`);
          } else {
            if (!VALID_SCENES.includes(st.situationScene)) {
              errors.push(`${loc}: branch.situationScene 非法 "${st.situationScene}"`);
            }
            if (!VALID_SCENES.includes(st.optionA.scene) || !VALID_SCENES.includes(st.optionB.scene)) {
              errors.push(`${loc}: branch 选项 scene 非法`);
            }
            validateVisual(st.situationVisual, `${loc} branch.situation`, errors);
            validateVisual(st.optionA.visual, `${loc} branch.optionA`, errors);
            validateVisual(st.optionB.visual, `${loc} branch.optionB`, errors);
          }
        } else if (st.layout === 'timeline') {
          if (!Array.isArray(st.stages) || st.stages.length !== 4 || !st.point) {
            errors.push(`${loc}: timeline 布局必须包含 4 个 stages 与 point`);
          } else {
            st.stages.forEach((stage, sIdx) => {
              if (!stage.timeLabel || !stage.text || !VALID_SCENES.includes(stage.scene)) {
                errors.push(`${loc}: timeline.stages[${sIdx}] 字段不完整或场景非法`);
              }
              validateVisual(stage.visual, `${loc} timeline.stages[${sIdx}]`, errors);
            });
          }
        }
      }
    }

    // 8. 生活场景域统计
    const domain = p.sceneDomain || '家庭';
    lifeDomainCounts[domain] = (lifeDomainCounts[domain] || 0) + 1;

    // 9. relatedIds / contrastIds 校验（存在性与非自关联）
    if (p.relatedIds !== undefined) {
      if (!Array.isArray(p.relatedIds)) {
        errors.push(`${loc}: relatedIds 必须为数组`);
      } else {
        for (const rid of p.relatedIds) {
          if (rid === p.id) {
            errors.push(`${loc}: relatedIds 出现自关联 "${rid}"`);
          } else if (!idSet.has(rid)) {
            errors.push(`${loc}: relatedIds 引用了不存在的 ID "${rid}"`);
          }
        }
      }
    }
    if (p.contrastIds !== undefined) {
      if (!Array.isArray(p.contrastIds)) {
        errors.push(`${loc}: contrastIds 必须为数组`);
      } else {
        for (const cid of p.contrastIds) {
          if (cid === p.id) {
            errors.push(`${loc}: contrastIds 出现自关联 "${cid}"`);
          } else if (!idSet.has(cid)) {
            errors.push(`${loc}: contrastIds 引用了不存在的 ID "${cid}"`);
          }
        }
      }
    }

    // 10. 大段重复的解释或适用边界检查（取前 24 字作为指纹）
    const interpPrefix = (p.interpretation || '').trim().slice(0, 24);
    if (interpPrefix.length >= 20) {
      if (interpretationSnippetMap.has(interpPrefix)) {
        warnings.push(
          `${loc}: 深入解释开头与 [${interpretationSnippetMap.get(interpPrefix)}] 高度相似`,
        );
      } else {
        interpretationSnippetMap.set(interpPrefix, p.id);
      }
    }
    const limitsPrefix = (p.limits || '').trim().slice(0, 24);
    if (limitsPrefix.length >= 20) {
      if (limitsSnippetMap.has(limitsPrefix)) {
        warnings.push(`${loc}: 适用边界开头与 [${limitsSnippetMap.get(limitsPrefix)}] 高度相似`);
      } else {
        limitsSnippetMap.set(limitsPrefix, p.id);
      }
    }
  }

  // 场景集中度风险检查（单一场景占比不超过 30%）
  const totalPanels = proverbs.length * 4;
  for (const [sc, count] of Object.entries(sceneCounts)) {
    const ratio = count / totalPanels;
    if (ratio > 0.3) {
      warnings.push(
        `场景集中风险：场景 "${sc}" 使用了 ${count}/${totalPanels} 次 (${(ratio * 100).toFixed(1)}%)`,
      );
    }
  }

  return {
    total: proverbs.length,
    legacyPreserved: LEGACY_REQUIRED_IDS.length,
    categoryCounts,
    themeCounts,
    sceneCounts,
    lifeDomainCounts,
    layoutCounts,
    sourceStatusCounts,
    errors,
    warnings,
  };
}

// 直接作为 CLI 执行时打印统计与结果
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  runValidation()
    .then((res) => {
      console.log('====================================================');
      console.log('📊 「一日一悟」内容库校验与统计报告');
      console.log('====================================================');
      console.log(`- 内容总数：${res.total} 条（保留历史 ID：${res.legacyPreserved} 条）`);
      console.log('- 各类型数量：', JSON.stringify(res.categoryCounts));
      console.log('- 各故事布局数量：', JSON.stringify(res.layoutCounts));
      console.log('- 出处核实状态统计：', JSON.stringify(res.sourceStatusCounts));
      console.log('- 各主题覆盖数量：', JSON.stringify(res.themeCounts));
      console.log('- 视觉场景使用分布：', JSON.stringify(res.sceneCounts));

      if (res.warnings.length > 0) {
        console.log(`\n⚠️ 重复与分布风险提示 (${res.warnings.length} 项)：`);
        for (const w of res.warnings.slice(0, 20)) {
          console.log('  - ' + w);
        }
      } else {
        console.log('\n✅ 重复与分布风险扫描：0 项警告（无完全相同故事、无大段重复解释或场景过度集中）。');
      }

      if (res.errors.length > 0) {
        console.error(`\n❌ 内容结构校验未通过 (${res.errors.length} 项错误)：`);
        for (const e of res.errors) {
          console.error('  - ' + e);
        }
        process.exit(1);
      } else {
        console.log('\n✅ 内容结构、唯一性、关联有效性及视觉配置校验全部通过！');
        console.log('（注：脚本自动检查仅验证数据结构与文本规则，不等同于典籍文献事实的人工核验。）');
      }
    })
    .catch((err) => {
      console.error('校验脚本运行异常：', err);
      process.exit(1);
    });
}
