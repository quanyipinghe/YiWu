import { Proverb } from '../types';

// 第五批扩展内容：箴言篇
export const BATCH_ZHENYAN: Proverb[] = [
  {
    "id": "shen-du-zi-lv",
    "text": "君子慎其独也",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "品德高尚的人在独自一人、没有任何外人监督和看见的地方，依然高度谨慎地坚守道德与操作准则，绝不暗中敷衍。",
    "storyTitle": "无人监工的隐蔽工程防水层",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "装修师傅老姜独自在业主家做卫生间隐蔽防水工程，业主因出差一周无法到场监工，交代老姜自己看着办就行。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "home",
        "text": "隔壁工地的包工头劝老姜：「反正瓷砖一贴谁也看不见里面，墙面防水少刷两遍、用便宜涂料能省下八百块工料钱。」",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "wood"
          ],
          "focusProp": "wood",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "rain",
        "text": "老姜却谨记「君子慎其独也」的匠人底线：在空无一人的毛坯房里，他依然按最高标准把管根清理、十字交叉满刷三遍柔性防水，并放水做足四十八小时闭水试验。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "三年后整栋楼历经多次震动与梅雨，邻居家墙角纷纷返潮发霉，唯独老姜做的那间卫生间干爽如初，业主逢人便夸老姜是背地里也信得过的真君子。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "window"
          ],
          "focusProp": "window",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "有人在旁盯着时的规矩，往往只是出于对惩罚的恐惧；唯有当所有摄像头关掉、没有任何人知道你有没有偷工减料时，你依然选择把看不见的底子做足，那才叫真正长在骨子里的修养。",
    "limits": "慎独是向内的道德自觉与专业操守，并非要在独处休息时也让精神处于过度紧绷状态。",
    "reflectionQuestion": "如果今天你正在处理的事务没有任何人会检查过程细节，你还会像在聚光灯下一样保持百分之百的标准吗？",
    "source": "《礼记·大学》及《礼记·中庸》（「莫见乎隐，莫显乎微，故君子慎其独也」）。",
    "sourceStatus": "classical",
    "storyStructure": {
      "layout": "contrast",
      "premise": "业主出差不在现场，瓷砖覆盖前的隐蔽防水工程该如何施工？",
      "premiseScene": "workshop",
      "premiseVisual": {
        "scene": "workshop",
        "characters": [
          {
            "id": "jiang",
            "pose": "thinking"
          }
        ],
        "props": [
          "tools"
        ],
        "narrative": {
          "type": "fork",
          "label": "抉择"
        }
      },
      "left": {
        "label": "做法甲：暗中敷衍",
        "action": "趁无人看见少刷两遍防水层省料省力。",
        "outcome": "半年后墙体渗水发霉赔偿返工。",
        "tone": "caution",
        "scene": "rain",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "umbrella"
          ],
          "narrative": {
            "type": "contrast",
            "label": "暗中敷衍"
          }
        }
      },
      "right": {
        "label": "做法乙：君子慎独",
        "action": "独处时依然严格满刷三遍并做足四十八小时闭水测试。",
        "outcome": "十年滴水不漏赢得口碑。",
        "tone": "positive",
        "scene": "home",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "window"
          ],
          "narrative": {
            "type": "contrast",
            "label": "君子慎独"
          }
        }
      },
      "point": "在没人看见的地方依然守住寸心不欺，才是立身处世最硬的底牌。"
    }
  },
  {
    "id": "wu-yi-shan-xiao-er-bu-wei",
    "text": "勿以恶小而为之，勿以善小而不为",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "自省与成长",
      "公共生活"
    ],
    "plainExplanation": "不要因为某件坏事或违规看起来很微小就放纵自己去做，也不要因为某件好事看起来不起眼就觉得没意思而不去做。",
    "storyTitle": "山林步道上的一枚烟头与一只塑料瓶",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "秋日干燥，老林去郊野山林步道徒步，见前面一名游客随手把还没完全熄灭的半截烟头弹进枯叶堆里，还嘟囔着「就一根小烟头能咋的」。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "mountain",
        "text": "老林立刻上前一步把烟头踩灭装进便携锡盒，严肃提醒对方山林干燥、微小的火星足以焚毁整片松林（「勿以恶小而为之」）。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "park",
        "text": "一路上老林自己则践行「勿以善小而不为」：每看到石阶缝里有被遗落的塑料瓶或玻璃碎片，就顺手弯腰捡进随身环保袋里。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "bag"
          ],
          "focusProp": "bag",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "mountain",
        "text": "受老林举手之劳的感染，同行的一对母子也跟着沿路捡起垃圾，下山时整条步道干净得只剩落叶清香。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "大恶往往是从一次「不碍事的小违规」撕开缺口的，而淳厚温暖的世道则是靠无数个「顺手扶一把、弯腰捡一下」的微小善意汇聚而成的。守住微恶的底线，点亮微善的微光，每个人都能改变身边的潮水方向。",
    "limits": "行小善时应量力而行、顺手自然，不必为了追求道德完美而背上沉重的心理包袱。",
    "reflectionQuestion": "今天出门在外，有没有哪一件举手之劳就能办到的「小善」（比如帮后面的人扶一下门）是可以顺手去做的？",
    "source": "《三国志·蜀书·先主传》裴松之注引《诸葛亮集》（刘备遗诏敕后主刘禅语）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "qian-li-zhi-di-kui-yu-yi-xue",
      "ji-shao-cheng-duo"
    ],
    "storyStructure": {
      "layout": "branch",
      "situation": "秋燥时节在山林步道徒步，面对随手乱丢烟头与路边零星垃圾，该如何抉择？",
      "situationScene": "mountain",
      "situationVisual": {
        "scene": "mountain",
        "characters": [
          {
            "id": "lin",
            "pose": "thinking"
          }
        ],
        "props": [
          "signpost"
        ],
        "narrative": {
          "type": "fork",
          "label": "处境"
        }
      },
      "optionA": {
        "label": "分支 A：纵小恶轻小善",
        "choice": "纵小恶轻小善",
        "result": "觉得扔个烟头不碍事、捡个瓶子没意义，结果微火引燃枯叶酿成山林大患。",
        "recommended": false,
        "scene": "mountain",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "stone"
          ],
          "narrative": {
            "type": "arrow",
            "label": "纵小恶轻小善"
          }
        }
      },
      "optionB": {
        "label": "分支 B：戒小恶行小善",
        "choice": "戒小恶行小善",
        "result": "当场熄灭危险烟头并沿途顺手拾起玻璃塑料垃圾，护住整座青山的平安洁净。",
        "recommended": true,
        "scene": "park",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "bag"
          ],
          "narrative": {
            "type": "arrow",
            "label": "戒小恶行小善"
          }
        }
      },
      "point": "再微小的恶行也可能撕开安全缺口，再微小的善举也能汇聚成守护公共家园的力量。"
    }
  },
  {
    "id": "bo-guan-er-yue-qu-hou-ji-er-bo-fa",
    "text": "博观而约取，厚积而薄发",
    "category": "zhenyan",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "工作与职业"
    ],
    "plainExplanation": "广泛深入地阅览观察，从中提炼取用最精粹的核心；经过长年累月深厚的积累沉淀，在关键时刻从容精准地释放出来。",
    "storyTitle": "纪录片导演百本案头书与十分钟短片",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老周受邀拍摄一部仅十分钟的江南古桥文化纪录短片，开机前他没有急着扛机器去取景，而是先扎进图书馆开始了三个月的「博观」与「厚积」。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "field",
        "text": "他通读了五十多部地方水利志、古建营造法式与明清造桥碑记，实地踏勘了八十座石拱桥，写下了十万字的田野调查笔记。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "office",
        "text": "到了正式撰稿与剪辑阶段，他「约取」而「薄发」：忍痛舍弃了九成枝节史料，只精选一座百年单孔石桥的一块龙门石作为叙事核心。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "laptop"
          ],
          "focusProp": "laptop",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "school",
        "text": "成片虽然只有短短十分钟、解说词不足千字，却字字千钧、意境深远，观众赞叹每一帧画面背后都透着万卷书的厚度。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "为什么有人的作品看似篇幅短小却余味无穷，有人的长篇大论却苍白空洞？秘密就在于水面之下的冰山体积。用十倍的「博观厚积」去支撑一分的「约取薄发」，说出来的话、做出来的事才有穿透人心的力量。",
    "limits": "厚积不是只进不出的无限期拖延，当积累达到临界点时，也要勇敢地通过提炼输出（薄发）去检验所学。",
    "reflectionQuestion": "在你目前正在准备的一次重要输出（汇报、文章或设计）背后，你的素材阅读量与实地调研量达到输出篇幅的十倍了吗？",
    "source": "宋代苏轼《稼说送张琥》（「博观而约取，厚积而薄发，吾告子止于此矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ri-ji-yue-lei",
      "shui-dao-qu-cheng"
    ],
    "storyStructure": {
      "layout": "timeline",
      "stages": [
        {
          "timeLabel": "第一阶段·博观群书",
          "text": "潜心研读五十余部地方志与桥梁营造文献，建立深厚的史料底座。",
          "scene": "study",
          "visual": {
            "scene": "study",
            "characters": [
              {
                "id": "zhou",
                "pose": "thinking"
              }
            ],
            "props": [
              "book"
            ],
            "narrative": {
              "type": "time",
              "text": "第一阶段·博观群书"
            }
          }
        },
        {
          "timeLabel": "第二阶段·厚积田野",
          "text": "实地踏勘八十座江南古桥，记录十万字匠人访谈与结构测绘手记。",
          "scene": "river",
          "visual": {
            "scene": "river",
            "characters": [
              {
                "id": "zhou",
                "pose": "walking"
              }
            ],
            "props": [
              "bridge"
            ],
            "narrative": {
              "type": "time",
              "text": "第二阶段·厚积田野"
            }
          }
        },
        {
          "timeLabel": "第三阶段·约取精髓",
          "text": "大刀阔斧舍弃九成冗杂素材，仅凝练一块龙门石的传奇折射时代变迁。",
          "scene": "office",
          "visual": {
            "scene": "office",
            "characters": [
              {
                "id": "zhou",
                "pose": "acting"
              }
            ],
            "props": [
              "pen"
            ],
            "narrative": {
              "type": "time",
              "text": "第三阶段·约取精髓"
            }
          }
        },
        {
          "timeLabel": "第四阶段·薄发成器",
          "text": "十分钟短片字字凝练、震撼人心，以冰山之底托起水面之巅。",
          "scene": "school",
          "visual": {
            "scene": "school",
            "characters": [
              {
                "id": "zhou",
                "pose": "relieved"
              }
            ],
            "props": [
              "lamp"
            ],
            "narrative": {
              "type": "time",
              "text": "第四阶段·薄发成器"
            }
          }
        }
      ],
      "point": "唯有水面之下有着十倍的深厚沉淀，浮出水面的一角才能如此笃定有力。"
    }
  },
  {
    "id": "you-zhao-yi-ri-fan-pu-gui-zhen",
    "text": "见微知著",
    "category": "zhenyan",
    "tags": [
      "判断与偏见",
      "谨慎与风险",
      "工作与职业"
    ],
    "plainExplanation": "看到事物最微小的苗头或局部细节，就能敏锐地推断出其整体状况与未来的发展趋势。",
    "storyTitle": "从餐馆洗手间干净度看后厨品控",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "公司采购部要为百人员工团建挑选一家安全可靠的订餐酒楼，小肖看中了一家大厅水晶灯辉煌、菜单印刷极其精美的网红大酒楼。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "kitchen",
        "text": "老采购陈叔跟着去考察时，没看大厅也没听经理吹嘘，而是先去了一趟酒楼角落的员工洗手间与后巷垃圾桶旁。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "market",
        "text": "出来后陈叔果断摇了摇头：「洗手间洗手液瓶空着积满黑垢、后巷生熟垃圾混倒，连看得见的卫生死角都这么敷衍，看不见的后厨砧板和食材新鲜度绝不可能好。」",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "随后他们选了另一家门头朴素但连抹布都按颜色分类悬挂、地漏锃亮的老餐馆；半个月后那家网红酒楼果真因后厨卫生被通报整改，小肖佩服陈叔见微知著的眼力。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "任何组织或个人的真实底色，都藏在那些「以为没人注意」的边缘细节里。大厅可以花钱装修，汇报PPT可以请人美化，但洗手间的清洁度、工具箱的摆放、对待底层服务员的态度，却是无法伪装的试金石。",
    "limits": "见微知著是基于系统性关联细节的理性推演，需注意与凭单一偶发偏见给他人乱贴标签区分开来。",
    "reflectionQuestion": "在你熟悉的专业领域里，哪一个不起眼的「小细节」最能让你一眼看穿对方整体水平的高低？",
    "source": "《韩非子·说林上》（「圣人见微以知萌，见端以知末」）及宋代苏洵《辨奸论》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "fang-wei-du-jian"
    ]
  },
  {
    "id": "li-shang-wang-lai",
    "text": "礼尚往来",
    "category": "zhenyan",
    "tags": [
      "人际关系",
      "沟通与表达",
      "家庭与生活"
    ],
    "plainExplanation": "在礼节与情义上讲究有来有往：受到别人的恩惠或礼遇，也应当以相应的诚意和善举回敬对方，单方面的索取难以长久。",
    "storyTitle": "对门邻居间那只从不空着还的瓷盘",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "梅姐刚搬进老家属院时，对门的山东大婶端来一盘刚出锅的鲅鱼水饺给她暖房，热腾腾的香气一下子驱散了陌生感。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "home",
        "text": "吃完饺子洗净瓷盘后，梅姐牢记母亲教的「盘子不能空着还，礼尚往来情才长」的规矩，在盘里装满了老家寄来的桂花糕送还过去。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "acting"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "courtyard",
        "text": "没过几天大婶又用盘子端来自己炸的酥肉，梅姐则回赠刚煲好的银耳莲子羹；一只青花瓷盘在两扇门之间来回传递了整整五年。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "正是这有来有往的分寸与惦记，让原本素昧平生的两家人处成了比亲戚还亲的远亲近邻。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "再深厚的情分，如果变成了一方永远理所当然地索取、另一方无休止地单向付出，迟早也会被消耗殆尽。礼尚往来不在乎回礼的金钱贵重与否，而在乎那份「你的好意我收到了，我也同样把你放在心上」的双向回应。",
    "limits": "礼尚往来倡导的是良性温情互动，切忌异化为死要面子、层层加码的人情债攀比，更不可用于权钱交易。",
    "reflectionQuestion": "在过去半年里主动帮过你忙或送过你温暖的朋友中，有没有哪一位是你还没来得及用行动好好回馈一声谢意的？",
    "source": "《礼记·曲礼上》（「礼尚往来。往而不来，非礼也；来而不往，亦非礼也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "bu-yuan-tian-bu-you-ren",
    "text": "不怨天，不尤人",
    "category": "zhenyan",
    "tags": [
      "情绪与心态",
      "自省与成长",
      "做事与执行"
    ],
    "plainExplanation": "遇到逆境挫折时不埋怨老天爷不公，也不怪罪周围的人不好，而是平静接纳现实、低头从自身努力寻找转机。",
    "storyTitle": "大棚被雪压塌后的果断改种",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "早春一场罕见暴雪压塌了菜农老孙的两个塑料大棚，里面精心培育了两个月的早春黄瓜苗全部冻毁，损失惨重。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "隔壁同样受灾的农户蹲在地头捶胸顿足，三天两头骂老天爷不开眼、怪气象台预报不够早，整个人一蹶不振。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "sun",
              "pose": "acting"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "field",
        "text": "老孙心疼了一晚，第二天一早便擦干脸上的雪水，「不怨天，不尤人」：带着儿子焊好变形的钢管支架，抢在惊蛰回暖前改播了生长周期仅三十天的速生小青菜与水萝卜。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "market",
        "text": "四月中旬市场绿叶菜青黄不接，老孙那两棚水灵灵的速生菜卖出了好价钱，不仅把大棚维修费全赚了回来，还略有盈余。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "抱怨老天和怪罪别人，是人在受挫时最本能的止痛药，但它除了耗光你仅存的心气之外，不能帮大棚扶起一根钢管。把向外喷洒怨气的力气收回来，低头去种当下还能种的种子，命运才奈何不了你。",
    "limits": "不怨天尤人是指在逆境中保持自强心态，并不意味着放弃对明确侵权责任方的正当索赔权利。",
    "reflectionQuestion": "当生活突然给你降下一场意料之外的「暴雪」时，你通常会允许自己抱怨多久，然后开始动手清理现场？",
    "source": "《论语·宪问》（「子曰：不怨天，不尤人，下学而上达，知我者其天乎！」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jun-zi-qiu-zhu-ji",
      "tian-xing-jian-jun-zi-zi-qiang-bu-xi"
    ]
  },
  {
    "id": "yi-shen-zuo-ze-qi-shen-zheng",
    "text": "其身正，不令而行；其身不正，虽令不从",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "团队合作",
      "工作与职业"
    ],
    "plainExplanation": "管理者自身行为端正守规，哪怕不三令五申下达强制命令，大家也会自觉照着去做；反之若自身不正，哪怕天天发号施令也没人真心服从。",
    "storyTitle": "食堂里和工人排同一条队的厂长",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "机械厂以前要求全员准点到岗、严禁浪费粮食，可前任厂长自己天天睡到十点才来、在开小灶包间里剩下一大半饭菜，结果车间迟到与倒饭现象屡禁不止。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "老姜调任厂长后，第一天就锁掉了高管小灶包间，每天早晨七点四十分准时穿好工装站在车间门口迎接大家，中午端着不锈钢餐盘和一线工人排同一条队打饭。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "每次吃完饭，老姜餐盘里连一粒米、一片菜叶都不剩，还顺手把餐桌擦得干干净净；他没有开过一次整风训话会。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "kitchen",
        "text": "不到一个月，全厂上下再无一人无故迟到，食堂泔水桶里的剩饭剩菜量直接减少了八成，真正做到了不令而行。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "下属和晚辈从来不是听你怎么说的，而是看你在没人约束自己时是怎么做的。特权意识是瓦解规则最快的腐蚀剂，唯有管理者自己先站在规则线以内，制度才会有不怒自威的尊严。",
    "limits": "领导者以身作则的同时，也需辅以清晰合理的制度奖惩，使正气得以长期固化。",
    "reflectionQuestion": "在你的家庭或所带领的小团队里，有没有哪条规矩是因为你自己偶尔破例，而导致大家也都跟着不拿它当回事了？",
    "source": "《论语·子路》（「子曰：其身正，不令而行；其身不正，虽令不从」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-shen-zuo-ze",
      "shen-ti-li-xing"
    ]
  },
  {
    "id": "ren-zhe-bu-you-zhi-zhe-bu-huo",
    "text": "知者不惑，仁者不忧，勇者不惧",
    "category": "zhenyan",
    "tags": [
      "情绪与心态",
      "判断与偏见",
      "自省与成长"
    ],
    "plainExplanation": "有智慧的人看清事理本质所以不会迷乱困惑，有仁爱宽厚之心的人坦荡无私所以不会患得患失，有道义勇气的人信念坚定所以不会畏缩恐惧。",
    "storyTitle": "山区支教老师的三重定力",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "小童大学毕业选择去偏远山区中学支教两年，起初身边各种声音纷至沓来，有人说她傻、有人说她作秀，她因为内心明晰教育的长远价值而「知者不惑」，毫不动摇。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "mountain",
        "text": "到了山里条件清苦，她把全部心意扑在孩子们身上，不计较个人名利得失，每天看着孩子们眼里求知的光芒便觉充实欢喜，做到了「仁者不忧」。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "tong",
              "pose": "acting"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "rain",
        "text": "第一年夏末突遇山洪冲断出山公路，全校停电断网三天，小童临危不乱、勇者不惧，带着高年级学生点起马灯守护低年级幼童，在教室里镇定读书唱歌直到道路抢通。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "tong",
              "pose": "discovering"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "school",
        "text": "两年支教期满归来，小童不仅点亮了一群山里娃的梦想，自己也修得了一颗不惑、不忧、不惧的强大内心。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "人生的三大内耗莫过于迷茫（惑）、焦虑（忧）与怯懦（惧）。用求真明理的智慧破除迷茫，用放下小我算计的仁心化解焦虑，用坚守正道的担当战胜怯懦，是涵养生命气象的三根支柱。",
    "limits": "不惑、不忧、不惧并非天生无情无畏，而是在经历现实磨砺后不断修炼精进的向往境界。",
    "reflectionQuestion": "在当下这一阶段，困扰你最多的是「看不清方向的惑」、「患得患失的忧」，还是「不敢迈步的惧」？",
    "source": "《论语·子罕》（「子曰：知者不惑，仁者不忧，勇者不惧」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "sui-yu-er-an",
    "text": "君子素其位而行，不愿乎其外",
    "category": "zhenyan",
    "tags": [
      "情绪与心态",
      "工作与职业",
      "自省与成长"
    ],
    "plainExplanation": "君子安于自己当下所处的本职位置去踏实做事，不把心思耗费在职责以外的虚妄贪求与越位攀比上。",
    "storyTitle": "守好一方小小校对席的金牌编审",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "出版社校对室里，有些年轻同事整天心猿意马，嫌校对工作枯燥不出名，上班时不是忙着托关系调去发行部，就是羡慕畅销书编辑上电视风光，手头的书稿却错漏百出。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "老周却笃行「素其位而行」：既然坐在校对席上，就不去眼红舞台上的鲜花，只把眼前每一页清样里的字词标点、引文出处当成自己的战场。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "office",
        "text": "他为了一处古籍引文的异体字能跑三趟善本室核对，三十年经手校对的八百多部学术著作无一因编校质量被召回。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "退休时社里授予他最高终身荣誉奖，许多著名学者在专著后记里专门致谢这位在幕后素位而行、为学术大厦守门的老校对。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "很多人之所以活得痛苦且一事无成，是因为人坐在这个位置上，心却飘在十里外的别人的位置上——既没享受到远方的风光，又把脚下的本职搞得一塌糊涂。站在什么位置就尽好什么本分，把当下这一亩三分地耕深耕透，自有属于你的荣光。",
    "limits": "素其位而行是指专注当下职责不搞越位妄求，绝不是拒绝通过踏实努力去争取合理的职位晋升。",
    "reflectionQuestion": "你在做手头本职工作的时候，有多少精力是真正聚焦在把这件事做透上，又有多少精力耗在了张望别人的位置上？",
    "source": "《礼记·中庸》（「君子素其位而行，不愿乎其外。素富贵，行乎富贵；素贫贱，行乎贫贱」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ge-si-qi-zhi",
      "pao-long-tao"
    ]
  },
  {
    "id": "you-zhao-yi-ri-zhi-zhi-er-hou-you-ding",
    "text": "知止而后有定，定而后能静",
    "category": "zhenyan",
    "tags": [
      "得失与取舍",
      "情绪与心态",
      "判断与偏见"
    ],
    "plainExplanation": "清楚知道自己应当停留在什么目标与边界之内，内心才会有坚定的方向；方向笃定不摇摆，心神才能彻底安静下来。",
    "storyTitle": "砍掉五个杂乱副业后的专注突破",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "前两年小肖总怕错过风口，除了本职平面设计外，晚上同时倒腾微商卖货、代写文案、宠物寄养和直播切片五个副业，每天像没头苍蝇一样上蹿下跳。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "laptop"
          ],
          "focusProp": "laptop",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "结果一年下来每个副业都只赚了几百块辛苦钱，本职设计水平反而严重滑坡，整个人焦虑狂躁、夜夜失眠。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "元旦夜他读到《大学》「知止而后有定，定而后能静」，痛下决心给欲望划出止境：果断关停所有不相关的杂乱副业，确定只深耕「传统品牌包装视觉设计」这一件事。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "知道该停在何处后，他的心瞬间定了下来，安静钻研字体与版式半年，拿下了两家老字号的年度品牌全案，收入与内心平静度双双倍增。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "心为什么静不下来？因为什么都想要、什么风口都想追，不知「止」于何处。知止，就是既知道自己追求的终极目标在哪里，也知道自己的贪欲该在哪里踩刹车。一旦划清了边界，心神便如巨锚入海，定静安虑得随之而来。",
    "limits": "知止是战略上的聚焦与欲望的节制，而非在主业钻研上浅尝辄止，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "如果你必须从目前同时应付的五六件杂事中砍掉三件，只留下最核心的「知止之地」，你会留下哪一件？",
    "source": "《礼记·大学》（「知止而后有定，定而后能静，静而后能安，安而后能虑，虑而后能得」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shi-ke-er-zhi",
      "zhuan-xin-zhi-zhi"
    ]
  },
  {
    "id": "ben-li-er-dao-sheng",
    "text": "君子务本，本立而道生",
    "category": "zhenyan",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "家庭与生活"
    ],
    "plainExplanation": "君子专心致力于打牢事物的根本基础；只要根本真正立稳了，具体的方法、衍生价值与发展道路就会自然而然地生长出来。",
    "storyTitle": "老面馆拒绝花哨装修先熬好一锅汤",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "陈师傅的侄子新盘下一间面馆，开业前准备把仅有的十万元启动资金花八万去搞赛博朋克霓虹灯装修与请网红探店，只留两万买速成浓缩骨汤粉。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "market",
        "text": "陈师傅严厉地拦住了他：「开面馆的『本』是什么？是碗里那口真材实料的热汤和筋道的面条！根本都没立住，花架子越热闹死得越快。」",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "kitchen",
        "text": "在陈师傅督促下，侄子砍掉了华而不实的网红装修，把资金重点投入到采购优质筒骨老母鸡、升级恒温熬汤灶和洁净明厨亮灶上。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "goods"
          ],
          "focusProp": "goods",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "market",
        "text": "面馆开业后虽然门头朴素，但浓郁鲜醇的原汤香气飘满半条街，食客吃过一次便成回头客，生意顺理成章地红火起来。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "任何行业与人生课题都有它的「本」与「末」：餐馆的本是食材味道，医生的本是医术仁心，教育的本是育人品格。如果舍本逐末，在枝叶包装上花十倍力气却任由树根腐烂，大厦顷刻即倾；把根本立得深不可测，枝叶繁茂只是时间问题。",
    "limits": "务本是指把绝大部分资源倾斜在核心根基上，待根基稳固后也可适当美化枝叶，而非完全排斥良好的外在呈现。",
    "reflectionQuestion": "在你所从事的职业或正在经营的家庭关系中，最核心的那个「本」是什么？你最近有没有不小心把力气花在了「末」上？",
    "source": "《论语·学而》（「有子曰：君子务本，本立而道生」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jiu-xiang-bu-pa-xiang-zi-shen"
    ]
  },
  {
    "id": "yi-shen-xing-sheng-yu-yan",
    "text": "先行其言而后从之",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "做事与执行",
      "沟通与表达"
    ],
    "plainExplanation": "先把想要说、想要倡导的事情踏踏实实做出来，然后再去开口表述它；让行动永远跑在豪言壮语的前面。",
    "storyTitle": "先把楼道花架摆整齐再发倡议的楼长",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "单元楼一楼门厅被几户居民杂乱堆放了许多枯死花盆与破旧纸箱，既挡路又影响美观，以前贴过几次清理通知都没人理睬。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "courtyard",
        "text": "新选出的楼长老林没有先在微信群里发长篇大论指责大家，而是利用周六上午自己默默拿来扫帚、铁锹和分层铁艺花架，先把自家的花盆修剪干净摆上货架。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "home",
        "text": "接着他又帮腿脚不便的二楼张奶奶把三盆绿萝擦洗干净整齐码好，把地面扫得一尘不染，最后才在群里发了一张清爽门厅的实拍图，温和倡议大家一起认领归位。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "邻居们看到老林已经流着汗把样板做在了前头，不好意思再拖延，当天下午纷纷下楼把自家杂物清走，门厅从此敞亮如新。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "为什么很多倡议和计划一提出来就招来冷嘲热讽？因为大家听腻了「光说不练」的口号。当你一声不吭先把第一铲土挖好、把第一个样板摆在众人眼前时，你再开口说出的每一个字，都有千钧之力。",
    "limits": "先行其言适用于个人自律承诺与公益倡导；在涉及需要事先征得多人授权的重大公共决策时，则应先沟通共识再行动。",
    "reflectionQuestion": "对于你一直想推进的一件小改造，能不能今天先不发朋友圈、先不声张，默默把第一步做出来再说？",
    "source": "《论语·为政》（「子贡问君子。子曰：先行其言而后从之」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shen-ti-li-xing",
      "yi-shen-zuo-ze"
    ]
  },
  {
    "id": "jun-zi-yu-yu-yi-xiao-ren-yu-yu-li",
    "text": "君子喻于义，小人喻于利",
    "category": "zhenyan",
    "tags": [
      "得失与取舍",
      "诚信与责任",
      "判断与偏见"
    ],
    "plainExplanation": "品行高尚的人看重并通晓道义与责任准则，而格局狭隘的人眼里则只通晓个人的私利算计。",
    "storyTitle": "暴雪封路时不涨一分钱的菜摊",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "rain",
        "text": "冬日罕见暴雪导致高速封路两天，城里叶菜供应骤紧，个别流动摊贩趁机把平时三块钱一斤的大白菜炒到了十二块，满脑子只算计着趁灾捞一笔「利」。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "market",
        "text": "社区菜场里的孙大爷凌晨四点冒雪蹬三轮从自家冷库拉出两千斤耐储冬菜，小黑板上依然稳稳写着平日价：大白菜两元五角、土豆三元。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
              "pose": "acting"
            }
          ],
          "props": [
            "goods"
          ],
          "focusProp": "goods",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "market",
        "text": "同行笑他放着现成的暴利不赚是傻子，孙大爷却正色道：「街坊邻居大雪天买菜本就难，越是这种时候越要讲道义（喻于义），发街坊的难处财我睡不着觉！」",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "为防有人囤积，孙大爷规定每人限购两棵白菜，保住了全社区两百户人家的雪天菜篮子；开春路通后，居民们买菜哪怕多走百米也只认准孙大爷的摊位。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "在顺境的日常买卖中，义与利往往是统一的；唯有在突发危难或巨大诱惑的十字路口，一个人究竟是「先算道义底线」还是「先算口袋私利」，才会瞬间分出高下。守住道义的人看似放弃了眼前的暴利，实则赢得了世间最稳固的人心。",
    "limits": "重义轻利是指在道义与私利冲突时坚守道义底线，绝不是否定合法劳动致富与正常的商业盈利。",
    "reflectionQuestion": "当遇到一个「完全合法但有点损人利己」的赚钱或占便宜机会时，你心里的天平会毫不犹豫地偏向道义那端吗？",
    "source": "《论语·里仁》（「子曰：君子喻于义，小人喻于利」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jian-xiao-li-ze-da-shi-bu-cheng"
    ]
  },
  {
    "id": "yi-shen-bu-er-guo",
    "text": "不迁怒，不贰过",
    "category": "zhenyan",
    "tags": [
      "情绪与心态",
      "自省与成长",
      "人际关系"
    ],
    "plainExplanation": "不会把在甲处受的窝囊气发泄到无辜的乙身上，也不会在同一个错误上重蹈覆辙犯第二次。",
    "storyTitle": "玄关门外抖落的一身风雨气",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "陈先生有天在公司因为合作方临时变卦受了一肚子委屈，下班刚进家门，看到七岁儿子把积木散了一地，放在以前他早就借题发挥拍桌子大吼了。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "home",
        "text": "站在玄关镜子前，陈先生深吸一口气提醒自己「不迁怒」：工作上的窝囊气与孩子无关，绝不能把家人当成负面情绪的垃圾桶；他温和地请儿子把积木收进盒子里。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "mirror"
          ],
          "focusProp": "mirror",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "晚饭后陈先生走进书房践行「不贰过」：复盘白天合作方变卦是因为自己当初漏签了阶段确认函，当即制作了一份标准确认模板存入电脑。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "既没让无辜的家人受气，又给工作漏洞打上了永久补丁，陈先生体会到了颜回那种澄明自控的君子修为。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "「迁怒」是情绪上的失控——因为不敢冲强者发火，便转身向更弱小或更亲近的人宣泄；「贰过」是认知上的懒惰——只顾着懊恼却不修改底层机制，任由自己掉进同一个坑里。修好这两样，便是人生大修行。",
    "limits": "不迁怒并非强行压抑一切情绪，可通过运动、倾诉等健康方式疏导压力，只是绝不拿无辜者撒气。",
    "reflectionQuestion": "回想最近一次你对家人或下属发无名火，那股火气真的是因为对方当下的小事，还是你从别处带回来的「迁怒」？",
    "source": "《论语·雍也》（「有颜回者好学，不迁怒，不贰过」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "chi-yi-qian-zhang-yi-zhi"
    ]
  },
  {
    "id": "you-zhi-jing-cheng-ren-yi-wei-ji-ren",
    "text": "任重而道远",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "时间与耐心",
      "工作与职业"
    ],
    "plainExplanation": "肩上担负的责任极其重大，而前方要走的道路又极其漫长；勉励人做好长期负重前行的思想与体能准备。",
    "storyTitle": "三代治沙人接力染绿的毛乌素沙地",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "四十年前老姜的父亲扛起铁锹走进黄沙漫天的荒漠林场时，面对的是连绵百里的移动沙丘，种下的梭梭与柠条一场狂风就被吹死大半。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "mountain",
        "text": "有人绝望地说这辈子都别想看到沙漠变绿，父亲却在林场界碑上刻下「任重而道远」五个字：担子重，就一锹一锹挖深坑；路途远，就一代接着一代种。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "field",
        "text": "老姜接过父亲磨短了三寸的铁锹，引进草方格固沙与滴灌技术，带着第三代年轻林学毕业生又扎扎实实种了二十年。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "park",
        "text": "如今昔日的不毛沙海已化作三万亩苍翠林海，老姜站在瞭望塔上感慨：正因为早知任重道远，才不会因一时的风沙而停下脚步。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "凡是真正有深远价值的事业——无论是生态修复、百年育人、学术攻坚还是自我品格的完善，从来都不是三年五载就能轻松收工的短跑。看清「任重」，才不会轻浮懈怠；看清「道远」，才懂得保持匀速呼吸的持久耐力。",
    "limits": "认识到任重道远是为了坚定长线定力，同时在具体执行中也应设立阶段性小里程碑，给团队及时的正向激励。",
    "reflectionQuestion": "在你人生中最看重的那份长线责任（如养育子女、深耕专业或守护健康）上，你做好跑一场三十年马拉松的配速准备了吗？",
    "source": "《论语·泰伯》（「曾子曰：士不可以不弘毅，任重而道远」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "bu-ji-kui-bu-wu-yi-zhi-qian-li",
      "chi-zhi-yi-heng"
    ]
  },
  {
    "id": "shen-zhong-zhui-yuan",
    "text": "慎终追远，民德归厚矣",
    "category": "zhenyan",
    "tags": [
      "家庭与生活",
      "诚信与责任",
      "自省与成长"
    ],
    "plainExplanation": "慎重地对待事情的结尾与长辈的谢世，恭敬地追念久远的先人与来路，世道人心与家风品德就会自然变得淳厚笃实。",
    "storyTitle": "清明家祭上重读的祖父助学账本",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "以前每年清明扫墓，晚辈们往往只是匆匆献束花、拍张照就去农家乐聚餐，孩子们对墓碑上曾祖父与祖父的生平事迹一无所知。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "今年清明，老周践行「慎终追远」：在祭扫归来后的家庭茶叙上，郑重请出祖父生前留下的那本泛黄毛边纸账册，带着孙辈逐页品读。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "home",
        "text": "账册里记录着祖父当年自己省吃俭用、却坚持资助村里十二名寒门学子读完师范的每一笔米粮款，以及「宁可自家少穿一件袄，不可让村里断了读书声」的家训。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "十几岁的孙子孙女们听得神情肃穆，第一次真切触摸到了血脉里的仁厚根脉，从此在待人接物与学业上格外敦厚自重。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "一棵不知道自己根系深埋何处的树，是很容易在狂风中飘摇折断的。「慎终」让我们戒除虎头蛇尾的功利凉薄，「追远」让我们在铭记先人风骨与来路艰辛中常怀感恩敬畏。不忘来路，方知归处。",
    "limits": "慎终追远重在传承清正淳厚的精神家风与善始善终的品质，绝非提倡大操大办的封建迷信排场。",
    "reflectionQuestion": "在你的家族长辈或职业引路人身上，有哪一个最打动你的品格故事，是值得你郑重讲给下一代或后辈听的？",
    "source": "《论语·学而》（「曾子曰：慎终追远，民德归厚矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "man-zhao-sun-qian-de-zhong"
    ]
  },
  {
    "id": "sui-shan-bu-wei-sui-e-bu-ju",
    "text": "君子成人之美，不成人之恶",
    "category": "zhenyan",
    "tags": [
      "人际关系",
      "合作与分工",
      "团队合作"
    ],
    "plainExplanation": "品德高尚的人乐于成全别人的好事与善举，而绝不会去怂恿、帮腔或促成别人的坏事与恶行。",
    "storyTitle": "主动帮跨部门同事补齐申报材料的成全",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "公司选拔年度海外研修名额，梅姐由于家庭原因今年不打算申报，而邻组年轻骨干小陆满怀热忱准备了半年，却在截止前两小时发现漏盖了一枚历史项目归档章。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "此时档案室管理员正准备下班，有人私下跟梅姐咬耳朵：「你别管他，他漏盖章选不上，明年名额不就稳归你了吗？」",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "acting"
            }
          ],
          "props": [
            "laptop"
          ],
          "focusProp": "laptop",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "梅姐一笑置之，秉持「君子成人之美」：立刻帮小陆找出当年自己留存的联合项目结项原件，并陪他一路小跑赶在档案室锁门前办妥了核验补章。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "office",
        "text": "小陆如愿获选出国深造，归国后把学到的最新数字化流程毫无保留地帮梅姐团队落地，成全别人的善意最终化作了彼此共同的精进。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "窄小的心胸总以为世间的机会是一块固定的死饼——别人多咬一口，自己就少一口，于是见人有好事便暗中使绊子。而宽广的君子懂得「成人之美」：你在别人搭桥过河时递上一块木板，来日你过河时自会有人为你撑船。",
    "limits": "成人之美的前提是所成之事确系正当向善的「美事」；若朋友想干违纪违法或损人之事，则应坚决劝阻（不成人之恶），绝不帮凶。",
    "reflectionQuestion": "最近身边有没有哪位朋友或同事正在努力促成一件正当的好事，而你恰好能举手之劳帮他添一把柴？",
    "source": "《论语·颜渊》（「子曰：君子成人之美，不成人之恶。小人反是」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jun-zi-tan-dang-dang-xiao-ren-chang-qi-qi",
    "text": "君子坦荡荡，小人长戚戚",
    "category": "zhenyan",
    "tags": [
      "情绪与心态",
      "诚信与责任",
      "自省与成长"
    ],
    "plainExplanation": "君子因为行事光明磊落、不怀私心诡计，所以心胸宽广舒泰；小人因为整日算计个人得失、生怕暗事败露，所以内心常常局促忧惧。",
    "storyTitle": "公开透明账目后的安稳睡眠",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "小区业委会筹办外墙维修基金招标，前任个别委员曾因私下收受施工队烟酒礼卡，整天提心吊胆怕被人举报，开会时眼神闪躲、夜里常失眠惊醒（「长戚戚」）。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "home",
        "text": "老林接任业委会主任后，立下铁规：所有投标商一律在社区监控会议室公开答辩，每一笔询价单与合同原件当天扫描张贴在公告栏，自己连施工队递来的一瓶矿泉水都不喝。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "office",
        "text": "期间有落选包工头心怀不满想找茬抹黑，老林「君子坦荡荡」，直接把全部银行流水与全程录像摆在阳光下任由街道审计核查。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "核查结果清清白白，老林每天散步抬头挺胸、夜里一觉睡到大天亮，深感世上最好的安神药就是不做半点亏心事。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "window"
          ],
          "focusProp": "window",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "为什么有的人哪怕身处高位重金之中，眉头却永远拧成一个死结？因为每一次暗箱操作、每一句违心谎言，都在心里埋下了一颗定时炸弹。活得坦荡透明，不用花半点脑力去圆谎防备，生命才能拥有真正的轻松与舒展。",
    "limits": "坦荡荡是指内心光明无私、行事磊落，而非在公开场合口无遮拦、不顾他人隐私。",
    "reflectionQuestion": "在你的日常工作或社交往来中，有没有哪件因为「不够透明磊落」而让你偶尔想起来心里还会隐隐不安的事？",
    "source": "《论语·述而》（「子曰：君子坦荡荡，小人长戚戚」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-rong-nai-da-wu-yu-ze-gang",
      "dang-mian-gu-dui-mian-luo"
    ]
  },
  {
    "id": "ren-neng-hong-dao-fei-dao-hong-ren",
    "text": "人能弘道，非道弘人",
    "category": "zhenyan",
    "tags": [
      "做事与执行",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "是人通过自己的主动践行与坚守去发扬光大道义与规章，而不是挂着一套现成的道理或制度名头就能自动让人变得伟大。",
    "storyTitle": "让死制度活过来的非遗工坊传承人",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "市里两家传统漆器厂都挂着同样的省级非遗保护铭牌，也都有祖传的《髹漆三十六法》工艺手册。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "甲厂厂长以为只要把非遗金字招牌挂在大门口、把古谱锁在展柜里，名声就能自动给厂子带来订单（「道弘人」），结果工人技艺退化、产品粗糙无人问津。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "乙厂的陈师父深知「人能弘道，非道弘人」：招牌和古谱自己不会说话，必须靠一代代匠人流汗去践行光大；他带着年轻学徒每天苦练百遍推光技法，并开发出适合现代茶席的犀皮漆茶则。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "wood"
          ],
          "focusProp": "wood",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "school",
        "text": "凭着匠人实打实的手艺坚守，乙厂让古老的漆艺在现代生活中重新大放异彩，证明了是活生生的人赋予了技艺与制度真正的生命。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "很多人迷信名校文凭、大厂头衔或墙上挂着的完美规章，以为进了好门第、贴了好标签自己就高人一等。殊不知，文凭、头衔与古训本身只是静态的符号，唯有靠你的双手去笃行、去创造，那份「道」才会因为你而熠熠生辉。",
    "limits": "强调人的主观践行（「人能弘道」），同时也需尊重客观规律与前人法度的指导作用。",
    "reflectionQuestion": "你所拥有的专业资格、岗位头衔或信奉的座右铭，是因为你的日常践行而增光添彩了，还是仅仅停留在名片与签名档上？",
    "source": "《论语·卫灵公》（「子曰：人能弘道，非道弘人」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shen-ti-li-xing"
    ]
  },
  {
    "id": "you-zhao-yi-ri-si-ze-de-zhi",
    "text": "思则得之，不思则不得也",
    "category": "zhenyan",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "只要肯开动脑筋深入思考探究，就能领悟到事物的内在规律与解决办法；如果懒于动脑思考，哪怕答案摆在眼前也无从获得。",
    "storyTitle": "仓库分拣动线的「U型弯」改造",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "图书发货仓五名分拣员每天要走两万五千步，在长达五十米的直线货架间来回折返取书，人人累得腿脚浮肿，大家却习以为常从没动脑想过为什么这么累。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "goods"
          ],
          "focusProp": "goods",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "新调来的小肖每天分拣之余都在观察思考（「思则得之」）：他统计了一周出库单，发现八成订单其实都集中在二十种高频常销书上，却被分散摆在货架最远的两端。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "小肖画了一张动线图向主管提议：将货架改为紧凑的U型布局，把高频前二十名图书集中放置在离打包台最近的三米黄金弧区内。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "workshop",
        "text": "花半天调整货位后，分拣员每天步数直接减少了一半，打包效率反而提升四成；大家感叹每天走同一条路，肯动脑思考一步就能省下万步汗水。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "人与人拉开差距的地方，往往不在于谁的体力更好，而在于面对日复一日的习惯性劳作时，谁的「心之官（思考器官）」还在运转。不把习以为常的痛点当成天经地义，凡事多问一句「为什么会这样、怎么能更好」，处处皆有可乘之机。",
    "limits": "勤于思考需建立在实地观察与数据统计的基础上，避免脱离现场的凭空瞎想。",
    "reflectionQuestion": "在你每天都在重复做的一件家务或日常工作里，如果现在强迫自己动脑思考五分钟，你能找出哪一个可以省力三分之一的改进点？",
    "source": "《孟子·告子上》（「心之官则思，思则得之，不思则不得也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shi-ban-gong-bei"
    ]
  },
  {
    "id": "jun-zi-chi-qi-yan-er-guo-qi-xing",
    "text": "君子耻其言而过其行",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "沟通与表达",
      "自省与成长"
    ],
    "plainExplanation": "君子把「嘴上说得天花乱坠、实际行动却远远跟不上」视为一件值得羞耻的事；主张少说漂亮大话、多交扎实成果。",
    "storyTitle": "年终述职会上用实测样机代替华丽口号",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "公司研发部年中汇报会上，有的项目组做了八十页炫酷的概念动画，大谈「颠覆行业生态、赋能万亿市场」，可问到核心样机进展时却连一块电路板还没焊好。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "laptop"
          ],
          "focusProp": "laptop",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "轮到老姜带领的传感器攻关组上台时，老姜谨记「耻其言而过其行」：他的PPT只有简明扼要的五页实测数据，却直接把三台已经连续无故障运行一千小时的防水传感器样机摆上了会议桌。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "office",
        "text": "老姜平静地说：「我们组嘴笨，不会讲生态黑话，但这三台样机现在就可以泡进水桶里当场通电测试。」",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "workshop",
        "text": "管理层当场测试后报以全场最热烈的掌声，将年度重点资金全额拨给老姜团队；事实证明，干出十分只说八分的人最值得托付。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "在浮躁的汇报文化中，有人习惯了把三分成果吹成十分功劳。然而言语的泡沫吹得越大，当现实的针尖刺破时就越显得滑稽羞耻。让你的作品、数据与实绩永远比你的豪言壮语高出一截，那是职场最稀缺的体面。",
    "limits": "主张行胜于言、不夸大其词，并非在正常汇报中故意隐瞒真实进展或拒绝必要的清晰表达。",
    "reflectionQuestion": "在向外介绍自己的能力或汇报项目进度时，你是习惯把六分把握说成十成，还是习惯扎实做到十成、沉稳说出八分？",
    "source": "《论语·宪问》（「子曰：君子耻其言而过其行」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-shen-xing-sheng-yu-yan",
      "chang-gao-diao"
    ]
  },
  {
    "id": "you-ze-gai-zhi-zhi-guo-bi-gai",
    "text": "过而不改，是谓过矣",
    "category": "zhenyan",
    "tags": [
      "自省与成长",
      "谨慎与风险",
      "做事与执行"
    ],
    "plainExplanation": "无心犯了错误却拒不承认、也不去动手改正，这才是真正彻头彻尾的错误。",
    "storyTitle": "电动车飞线充电的两次提醒与彻底整改",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "一楼住户老赵以前图省事，常从自家客厅窗户甩出一根十米长的插线板到院子里给电动车「飞线充电」，物业第一次提醒时他满不在乎地应付说下次注意。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "过了三天老赵照旧飞线，不料半夜下起阵雨，老林巡逻经过发现插线板指示灯在雨水中滋滋冒火星，立即敲门叫醒老赵拔掉电源。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "老林严肃地对老赵说：「不知危险第一次拉线是无心之失；明明知道会漏电起火还接着干，『过而不改，是谓过矣』，真烧起来整栋楼几百口人怎么办？」",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "老赵看着焦黑的插孔吓出一身冷汗，次日一早主动剪毁了那根长飞线，办好车棚安全充电卡，还主动当起了楼道禁飞线义务宣传员。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "人由于认知局限或一时疏忽犯下第一次错，尚且情有可原；但当错误已经被指出、隐患已经暴露在眼前，却依然因为侥幸或固执而拒绝改正，性质就从「失误」变成了「明知故犯的恶」。立刻止损改过，是把错误清零的唯一通道。",
    "limits": "改过必须落实到彻底消除隐患的具体行动上，绝不能只停留在口头检讨书上。",
    "reflectionQuestion": "你身上有没有哪个明明自己也知道不对、身边人也提醒过不止一次，却一直拖着没彻底改掉的坏习惯？",
    "source": "《论语·卫灵公》（「子曰：过而不改，是谓过矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ren-fei-sheng-xian-shu-neng-wu-guo",
      "wang-yang-bu-lao"
    ]
  },
  {
    "id": "you-zhao-yi-ri-qin-jian-chi-jia",
    "text": "由俭入奢易，由奢入俭难",
    "category": "zhenyan",
    "tags": [
      "消费与欲望",
      "家庭与生活",
      "自省与成长"
    ],
    "plainExplanation": "从节俭朴素的生活习惯变成奢侈挥霍很容易，但一旦养成了奢靡讲究的胃口，再想退回到节俭朴素的日子就极其痛苦艰难了。",
    "storyTitle": "拿掉大牌包装袋后的朴素消费观",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖升职加薪那年，受周围攀比风气影响，短短两个月就由俭入奢：出门非专车不坐、喝水非进口气泡水不喝、买件T恤也要上千元，觉得这才是精致生活。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "market",
        "text": "次年部门绩效回调，他的收入回落到正常水平，可已经养刁了的消费胃口却怎么也降不下来（「由奢入俭难」），哪怕穿回普通纯棉衫都觉得浑身别扭，信用卡很快刷爆。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "mei",
              "pose": "acting"
            }
          ],
          "props": [
            "bag"
          ],
          "focusProp": "bag",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "姐姐梅姐帮他盘清账目后，带他做了一场「盲测实验」：把百元优质国货纯棉衫与千元LOGO衫剪掉标签混在一起穿，小肖根本分不出体感差别。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "看清自己以前只是在为虚荣溢价买单后，小肖用了半年时间才咬牙把消费降回理性区间，感慨守住俭朴底线比事后戒断容易百倍。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "感官的阈值一旦被无节制的奢华推高，原本能带来八十分快乐的粗茶淡饭就会变得索然无味。懂得在顺境收入丰厚时依然保持适度简朴的底色，不是苦行，而是不让自己在未来某一天沦为物欲的囚徒。",
    "limits": "保持俭朴本色是指不染奢靡攀比之习，在能力允许范围内提升健康的居住与学习品质则无可厚非。",
    "reflectionQuestion": "回顾你过去三年新增的固定开销项目，有哪些一旦开通就很难再降回去、其实并没有带来多少真实幸福感的「奢习」？",
    "source": "宋代司马光《训俭示康》引古语（「古人云：由俭入奢易，由奢入俭难」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jing-yi-xiu-shen-jian-yi-yang-de",
      "yi-chao-yi-xi-yi-zhou-yi-fan"
    ]
  },
  {
    "id": "yi-shen-ze-ming-shi-shang-wu-nan-shi",
    "text": "为之，则难者亦易矣；不为，则易者亦难矣",
    "category": "zhenyan",
    "tags": [
      "做事与执行",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "只要真正动手去做，那么再困难的事情也会一步步变得容易起来；如果只停在口头光想不做，那么再简单的事情也会变成无法逾越的难关。",
    "storyTitle": "整理三年积压电子相册的那个周末",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖手机和硬盘里积压了三万多张杂乱无章的照片与视频，内存天天报警；他想整理归档想了整整两年，每次一看到「三万张」这个数字就觉得难如登天而关掉窗口。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "laptop"
          ],
          "focusProp": "laptop",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "这周六他读到彭端淑《为学》中「为之，则难者亦易矣」，决定不再畏难空想，立刻坐到电脑前动手「为之」。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "phone"
          ],
          "focusProp": "phone",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "真正上手后他发现根本没想象中那么恐怖：先用软件一键筛除两千张重复连拍与模糊废片，再按年份和旅行地点建好十二个文件夹批量拖入。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "原本拖延了两年的「世纪难题」，真正动手只花了两个下午就彻底理清，而旁边室友连五百张照片的备份因为「不为」，至今还在嘴上喊难。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "「难」与「易」从来不是固定不变的绝对标签，它们转换的唯一开关就是「为与不为」。在岸上空想一万遍水有多冷，一米宽的水沟也是天堑；挽起裤腿迈进水里走起来，百米宽的河面也会在脚下寸寸缩短。",
    "limits": "动手为之的同时讲究科学方法拆解，能更快实现由难向易的转化，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "你待办清单上那件其实并不需要高深技术、纯粹因为拖延「不为」而显得越来越难的小事是什么？今天花二十分钟干掉它如何？",
    "source": "清代彭端淑《为学一首示子侄》（「天下事有难易乎？为之，则难者亦易矣；不为，则易者亦难矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "tian-xia-wu-nan-shi-zhi-pa-you-xin-ren"
    ]
  },
  {
    "id": "jun-zi-ai-cai-qu-zhi-you-dao",
    "text": "君子爱财，取之有道",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "消费与欲望",
      "得失与取舍"
    ],
    "plainExplanation": "正人君子也坦然承认自己喜爱并追求财富，但获取财富必须遵循正当、合法、合乎良知的正道，绝不赚昧心钱。",
    "storyTitle": "老修车行拒绝小病大修的阳光账单",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "一位外地自驾游客的轿车在半路发出异响开进老姜的汽修店，游客不懂机械，紧张地问是不是变速箱坏了要花几千块大修。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "旁边学徒给老姜使眼色，暗示顺着游客的话换一套总成能净赚三千块；老姜升起底盘一看，其实只是排气管护板松动了一颗螺栓。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "office",
        "text": "老姜拿扳手三分钟拧紧螺栓并加装防松垫片，只收了二十元工时费，正色告诫学徒：「咱们手艺人也想多赚钱改善生活，但『君子爱财，取之有道』，趁人不懂吓唬宰客那是坏良心的盗贼行径！」",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "street",
        "text": "那位游客深受感动，把老姜店铺的实在事迹发到全国自驾游车友会论坛，此后凡路过此地的车友保养维修必奔老姜店里，阳光下的生意越做越红火。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "传统智慧从不虚伪地否定人对财富与美好生活的正当追求（「爱财」），它真正在意的是财富背后的来源是否干净（「有道」）。靠专业价值、诚实劳动赚来的钱，每一分都让人挺直腰杆、睡得安稳。",
    "limits": "取之有道之后，还应配以「用之有度、用之有方」，让财富真正服务于生活与社会。",
    "reflectionQuestion": "在你的行业里，是否存在某种「业内潜规则默许、但其实有点占客户不懂的便宜」的做法？你是如何守住正道的？",
    "source": "《增广贤文》及明清商帮格言，源于孔子「富与贵，是人之所欲也；不以其道得之，不处也」。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jun-zi-yu-yu-yi-xiao-ren-yu-yu-li",
      "tu-zi-bu-chi-wo-bian-cao"
    ]
  },
  {
    "id": "yi-shen-ze-ming-zhi-zu-bu-ru",
    "text": "知足不辱，知止不殆",
    "category": "zhenyan",
    "tags": [
      "得失与取舍",
      "谨慎与风险",
      "情绪与心态"
    ],
    "plainExplanation": "懂得满足而不贪得无厌，就不会招致屈辱；懂得在恰当的界限停下脚步，就不会陷入倾覆的危险。",
    "storyTitle": "老古玩商不碰来路不明重器的铁律",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "老周在古玩街经营文房杂件三十年，只赚眼力范围内阳光合法的微利，日子安稳清闲。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "goods"
          ],
          "focusProp": "goods",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "有一回有人深夜神神秘秘带来一件来路存疑的青铜器和一笔翻五倍的倒手差价，拉老周入局，说只要干这一票就能顶十年利润。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "老周谨记老子「知足不辱，知止不殆」的箴言：自己现有的小店温饱有余，为贪图非分暴利去踩法律与行业红线，必招奇耻大辱与牢狱之灾，当场严词谢绝。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "不出两个月，那伙贪心不足的同行果真因倒卖违禁文物全数落网，唯独知足知止的老周依然在洒满阳光的书斋里安享岁月。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "世上绝大多数身败名裂的故事，主人公在出事前其实早就拥有了足够体面富足的生活；之所以最终跌入深渊，全是因为在已经很满的杯子里还想再强灌一瓢水。知足守住尊严，知止守住安全。",
    "limits": "知足知止是针对非分贪欲与高危红线的清醒节制，并非在学术探索与本职精进上停止脚步。",
    "reflectionQuestion": "当面对一个收益高得离谱、但隐约透着一点擦边球风险的诱惑时，你心里的「知止刹车片」能在一秒钟内踩下去吗？",
    "source": "《老子·第四十四章》（「知足不辱，知止不殆，可以长久」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhi-zu-chang-le",
      "shi-ke-er-zhi"
    ]
  },
  {
    "id": "xin-cheng-ze-ling",
    "text": "精诚所至，金石为开",
    "category": "zhenyan",
    "tags": [
      "沟通与表达",
      "时间与耐心",
      "人际关系"
    ],
    "plainExplanation": "只要心意纯粹真诚到了极点，哪怕是坚硬无比的金属和岩石也会为之感动开裂；比喻至诚之心能化解最坚硬的隔阂与困难。",
    "storyTitle": "年轻社工融化独居退伍老兵的心墙",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "三号楼独居的八旬退伍老兵赵爷爷性格孤僻固执，老伴去世后常年紧闭家门，对上门慰问的社区人员一概隔着防盗门冷言轰走。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "tong",
              "pose": "hesitating"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "刚接管片区的年轻社工小童没有因为吃闭门羹而敷衍放弃，她得知老人耳朵背又爱看军事报刊，便每周二雷打不动把最新一期报纸端端正正夹在老人门把手上。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "tong",
              "pose": "acting"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "home",
        "text": "哪怕老人从不开门道谢，小童每次还在报缝里附上一张大字手写便签提醒降温加衣；直到半年后的一个台风夜，小童冒着狂风暴雨端来一碗热腾腾的姜汤面守在门外。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
              "pose": "discovering"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "防盗门终于「咔哒」一声打开了，赵爷爷红着眼眶把小童迎进屋：「孩子，你这半年不图回报的真心，把爷爷心里这块冷石头彻底捂热了。」",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "tong",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "面对防备心极重的人或看似铁板一块的僵局，花巧的套路与话术往往一触即溃。唯有不掺杂半点功利算计、经得起时间检验的「精诚」，才能像春雨润物一样穿透坚冰。",
    "limits": "精诚所至强调态度上的纯粹真诚与持久耐心，在具体方法上也应尊重对方的意愿节奏，避免变成强人所难的道德骚扰。",
    "reflectionQuestion": "在修复一段重要关系或打动一位关键合作方的过程中，你付出的是「急于求成的套路」，还是「不计短期得失的精诚」？",
    "source": "《庄子·渔父》「真者，精诚之至也，不精不诚，不能动人」及《后汉书·广陵思王荆传》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "chi-bi-men-geng",
      "lu-yao-zhi-ma-li-ri-jiu-jian-ren-xin"
    ]
  },
  {
    "id": "lin-yuan-xian-yu-bu-ru-tui-er-jie-wang",
    "text": "临渊羡鱼，不如退而结网",
    "category": "zhenyan",
    "tags": [
      "做事与执行",
      "学习与积累",
      "情绪与心态"
    ],
    "plainExplanation": "站在深潭边眼巴巴地羡慕水里游动的鱼儿，还不如转过身回家去一针一线地织好捕鱼的网；比喻空怀羡慕幻想不如立即动手准备实力。",
    "storyTitle": "从羡慕同声传译到每天精听一小时",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "外语系学生小肖每次去听国际学术会议，看着同传箱里学长学姐流利精准地做中英同声传译，心里羡慕得不行，回来就在寝室感叹「要是我也有这本事就好了」。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "home",
        "text": "室友一句话点醒了他：「你每次看完回来除了发条朋友圈羡慕三天，连一段五分钟的新闻听写都没练过，光站在潭边流口水鱼能跳进你碗里吗？」",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "phone"
          ],
          "focusProp": "phone",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "小肖羞愧万分，当即决定「退而结网」：删掉手机里的娱乐软件，从每天清晨六点半的一篇标准语速新闻影子跟读、视译与笔记符号训练开始织网。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "school",
        "text": "一千个日夜的一针一线编织后，研究生毕业那年小肖自己也稳稳坐进了国际会议的同传箱，明白了唯有手里的网结实，深潭里的鱼才与你有关。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "互联网时代让我们每天都能在屏幕上看到各行各业顶尖高手的精彩成果，如果只停留在「临渊羡鱼」的仰望与焦虑中，除了徒增自卑毫无益处。关掉屏幕退回书桌，从打好第一个绳结开始织自己的能力之网，才是唯一的破局之道。",
    "limits": "退而结网强调踏实锻造工具与核心技能，待网织成后也要勇敢走向水边付诸实践。",
    "reflectionQuestion": "你目前最羡慕别人的那项能力或生活状态，如果要转化为你今晚就能开始编织的「第一针网眼」，具体是什么训练？",
    "source": "《汉书·董仲舒传》（「古人有言曰：临渊羡鱼，不如退而结网」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-shen-ze-ming-shi-shang-wu-nan-shi",
      "gong-yu-shan-qi-shi-bi-xian-li-qi-qi"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ze-shan-gu-zhi",
    "text": "博学而笃志，切问而近思",
    "category": "zhenyan",
    "tags": [
      "学习与积累",
      "自省与成长",
      "判断与偏见"
    ],
    "plainExplanation": "广泛地学习知识同时抱定坚定的志向，恳切地追问请教同时联系自身当下的实际问题去思考。",
    "storyTitle": "把乡村振兴课题写进田埂的硕士生",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "农学院研究生小童准备开题时，发现有些同学虽然读了几百篇英文文献，但志向摇摆不定，写的论文全是脱离中国农村实际的空洞模型。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "field",
        "text": "导师送给她《论语》「博学而笃志，切问而近思」十个字：博学是为了立定服务三农的志向，发问与思考则必须贴近脚下最近的具体难题。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "tong",
              "pose": "acting"
            }
          ],
          "props": [
            "sapling"
          ],
          "focusProp": "sapling",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "小童带着问题住进县城合作社，每天向种粮大户恳切请教（「切问」）粮食烘干与仓储霉变的具体痛点，结合所学热力学知识贴近思考（「近思」）百亩级农户用得起的低成本通风方案。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "field",
        "text": "最终她研发出的简易改造热风炉帮村里减少了八成梅雨霉谷，毕业论文也因既有学术广度又有泥土温度而获评优秀。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "tong",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "学习最怕两件事：一是「博而不笃」，什么都学了一点皮毛却没有主心骨方向；二是「远而不近」，整天空谈宏大叙事却解决不了身边一个具体问题。把广博的视野收束于笃定的志向，把恳切的发问落脚于切近的现实，学问才会真正长出根须。",
    "limits": "近思是指从切身可及的现实问题切入思考，而非目光短浅地只顾眼前利益。",
    "reflectionQuestion": "你最近在读的书或学的知识，能不能跟一个你眼下最迫切需要解决的具体工作或生活问题直接挂起钩来？",
    "source": "《论语·子张》（「子夏曰：博学而笃志，切问而近思，仁在其中矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "bo-xue-zhi-shen-wen-zhi"
    ]
  },
  {
    "id": "yi-shen-ze-ming-shi-yu-bu-dai",
    "text": "逝者如斯夫，不舍昼夜",
    "category": "zhenyan",
    "tags": [
      "时间与耐心",
      "自省与成长",
      "情绪与心态"
    ],
    "plainExplanation": "消逝的时光就像这奔流不息的河水一样啊，无论白天黑夜都从不停歇半刻；勉励人珍惜光阴、顺应变化而不虚度。",
    "storyTitle": "渡口老船工与青年旅人的江边对话",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "river",
        "text": "三十岁那年，小肖因为一次晋升失利心情消沉，请假来到江边古镇散心，整连三天坐在古渡口石阶上对着江水发呆叹气。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "bridge"
          ],
          "focusProp": "bridge",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "river",
        "text": "守渡口的老周泡了一壶热茶坐到他身旁，指着滚滚东去的春江水说：「两千多年前孔夫子站在河边说『逝者如斯夫，不舍昼夜』，你看这江水，前面撞上礁石溅起浪花，转个弯照样日夜不停往前流。」",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "老周温和地劝道：「时间最公平也最无情，你在这儿懊恼叹气三天，江水流走三千里；你拍拍土重新读书赶路三天，江水也陪你奔流三千里。」",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "river",
        "text": "小肖看着奔流不息的江面豁然开朗，次日便收拾行囊返回岗位开启新的专业备考，不再让宝贵的昼夜白白流失在叹息里。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "面对流逝的光阴，伤春悲秋的感叹毫无意义。江水之所以永远清澈鲜活，正因为它「不舍昼夜」地向前奔流，从不在任何一块绊脚石前停滞腐臭。像流水一样珍惜每一个当下、永不停步地向前生长，是对时间最好的致敬。",
    "limits": "感念光阴流逝是为了惜时笃行，而非陷入「来不及了」的时间恐慌症，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "回望刚刚过去的这一个月，有哪些时间像白水一样毫无痕迹地流走了，又有哪些时刻留下了扎实的浪花？",
    "source": "《论语·子罕》（「子在川上曰：逝者如斯夫！不舍昼夜」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "you-zhao-yi-ri-yan-yu-lv-ji",
    "text": "躬自厚而薄责于人，则远怨矣",
    "category": "zhenyan",
    "tags": [
      "人际关系",
      "自省与成长",
      "沟通与表达"
    ],
    "plainExplanation": "反省检讨自己时把标准定得严格厚重一些，责备要求别人时把分量放得轻微宽容一些，这样就能远离人际间的怨恨与对立。",
    "storyTitle": "演出道具遗落后的团长揽责",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "社区艺术团去外区参加汇演，上台前半小时才发现装有两把二胡松香和备用琴弦的小道具箱落在了大巴车行李舱里，负责拿箱子的新团员小李急得眼泪直打转。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "bag"
          ],
          "focusProp": "bag",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "station",
        "text": "要是换作脾气急的领队，当场训斥一顿只会让小李更加慌乱甚至引发全团埋怨；团长梅姐却践行「躬自厚而薄责于人」。",
        "visual": {
          "scene": "station",
          "characters": [
            {
              "id": "mei",
              "pose": "acting"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "school",
        "text": "梅姐先主动揽下主责：「这事主要怪我——出发前我作为团长没有带着大家做最后一遍装车打钩核对（躬自厚）；小李第一次跟团拿了四个大包，难免顾此失彼（薄责于人）。」",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "随后梅姐沉着安排司机送回备用箱，演出圆满完成；小李因为这份不被当众苛责的体恤感激涕零，此后每次出勤都主动提前一小时清点全场道具，团里一片和睦再无半句怨言。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "人际间绝大多数怨恨，都源于「对自己宽容得像春天，对别人严苛得像寒冬」的双重标准。当你习惯了出了问题先往自己身上多担三分责、对同伴的无心疏漏多留三分情面时，你周围的气场自然就会从针锋相对化为春风和气。",
    "limits": "薄责于人是指在语气与态度上宽厚体谅，事后仍需通过完善流程清单来共同堵住客观漏洞。",
    "reflectionQuestion": "当家里或团队里出现一次配合失误时，你是习惯先用放大镜找别人的错，还是先严格检讨自己这一环漏做了什么？",
    "source": "《论语·卫灵公》（「子曰：躬自厚而薄责于人，则远怨矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "fan-qiu-zhu-ji",
      "tui-ji-ji-ren"
    ]
  },
  {
    "id": "jun-zi-bu-qi-yu-ren",
    "text": "不欺暗室",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "自省与成长",
      "消费与欲望"
    ],
    "plainExplanation": "就算身处幽暗无人看见的屋子里，也绝不干半点欺心弄假的事；形容人表里如一，良知无需外力监督。",
    "storyTitle": "后厨昏暗灯光下坚持倒掉的隔夜卤汤",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "盛夏夜晚十一点打烊后，卤味铺后厨只亮着一盏小灯，陈师傅检查冷柜时发现由于白天停电两小时，一桶价值八百元的老卤汤已有极轻微的发酸迹象。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "night",
        "text": "此时店里空无一人，只要明天一早多加点八角桂皮和大蒜煮开，食客的舌头根本尝不出异样，八百块钱成本就能保住。",
        "visual": {
          "scene": "night",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "kitchen",
        "text": "站在无人看见的后厨暗室里，陈师傅对着良心说：「别人看不见，我自己的手和老天爷看得见；不欺暗室，方对得起门外那块招牌！」他毫不犹豫将整桶卤汤全部倾倒销毁，连夜用新鲜筒骨重吊新汤。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "goods"
          ],
          "focusProp": "goods",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "market",
        "text": "正是这份在无人暗室里依然寸步不让的干净底线，让陈师傅的小铺三十年来没出过一次食安问题，成了街坊心中铁打的放心店。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "「暗室」就是人生没有观众、没有聚光灯、甚至没有任何败露风险的时刻。在暗室里你是选择占那八百块钱的便宜，还是选择守住心头的清白，决定了你究竟是一个靠恐惧维持体面的假君子，还是一个灵魂真正高贵的真君子。",
    "limits": "不欺暗室是最高阶的道德自律，企业管理中在倡导自律的同时也应辅以透明的明厨亮灶制度。",
    "reflectionQuestion": "回想一个完全没有任何人知晓的独处时刻，你是否曾为自己做出了那个「虽然吃点小亏、但对得起良心」的选择而感到自豪？",
    "source": "唐代骆宾王《萤火赋》及宋代《晏氏家训》（「生平不作亏心事，暗室何曾欺鬼神」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shen-du-zi-lv"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ze-ren-zhong-yu-tai-shan",
    "text": "天下兴亡，匹夫有责",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "公共生活",
      "合作与分工"
    ],
    "plainExplanation": "家国社会风气的兴盛与衰微，哪怕是最普通的平民百姓，每个人身上也都担负着自己那一份不可推卸的责任。",
    "storyTitle": "普通市民拍下古建裂痕的守护接力",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "退休工人老林散步路过城郊一座明代石牌坊时，发现底座一根承重石柱因周边积水冲刷出现了一道新裂缝，而牌坊地处偏僻平时很少有专职人员巡查。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "phone"
          ],
          "focusProp": "phone",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "phone",
        "text": "同行的老友劝他：「咱就是个普通退休老头，国家文物有大衙门管，操那份闲心干啥？」",
        "visual": {
          "scene": "phone",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "老林却认真地说：「天下兴亡，匹夫有责。老祖宗留下的宝贝就在咱家门口，咱看见了不吭声，万一塌了咱心里能安稳吗？」他当即用手机拍下多角度裂缝细节与定位，拨通市文物保护热线反映实情。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "文保所专家次日赶到现场，惊叹老林发现得极其及时，立即进场支护灌浆抢险；一座四百年古牌坊因为一位普通市民的责任感得以安然保存。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "很多人一听到「天下兴亡」，就觉得那是庙堂之上大人物的事，跟自己一个升斗小民无关。其实所谓「天下」，正是由我们脚下的一条街道、身边的一座古桥、所处行业的一条风气拼合而成的。守好你手边那一寸公共良知，就是在扛起天下。",
    "limits": "匹夫有责强调在公共利益与社会风气面前的公民责任感，行事方式应通过合法理性渠道进行。",
    "reflectionQuestion": "在你每天生活的社区或所处的行业里，有没有哪一件关乎公共利益的小事，是你作为普通一员也能出一份力去守护的？",
    "source": "明末清初顾炎武《日知录·正始》（「保天下者，匹夫之贱与有责焉耳矣」），近代梁启超概括为「天下兴亡，匹夫有责」。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wu-yi-shan-xiao-er-bu-wei",
      "jian-yi-yong-wei-dang-ren-bu-rang"
    ]
  },
  {
    "id": "yi-shen-ze-ming-da-zhi-ruo-yu",
    "text": "大智若愚，大巧若拙",
    "category": "zhenyan",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "情绪与心态"
    ],
    "plainExplanation": "真正大智慧的人外表看起来往往敦厚朴实、不露锋芒；真正精湛高超的巧技，往往依靠最扎实质朴的基本功，不搞花哨取巧。",
    "storyTitle": "老石匠不靠花招靠千锤百炼的门墩",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "村祠堂重修需要雕刻一对青石抱鼓石门墩，请来了两位石匠：年轻的刘匠人嘴皮子极溜，带来各种电动抛光膏与化学做旧药水，炫耀三天就能出活。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "而六十岁的老姜头话不多、看起来憨厚木讷（「若愚」），只背来一袋钢钎与铁锤，用最笨拙原始的「纯手工錾刻法」一锤一锤慢慢凿（「若拙」）。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "courtyard",
        "text": "刘匠人用电动高速打磨加药水腐蚀，三天就交出了一对油光水滑的石鼓；老姜头则花了整整二十天，顺着青石天然石性凿出苍劲浑厚的狮子纹与留青麻点。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "三年风吹日晒雨淋过后，刘匠人那只取巧的石鼓表面药水层斑驳起壳，而老姜头那只靠「拙功夫」一锤一锤砸出来的门墩却在岁月包浆中愈发古朴威严。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "小聪明喜欢把十分本事炫耀成十二分，生怕别人不知道自己机灵；而大智慧与真巧匠却懂得收敛锋芒，把心神沉入最底层、最笨拙的实干规律中。看似不争不抢、不走捷径的「拙」，恰恰是经得起时间冲刷的至巧。",
    "limits": "大巧若拙是指返璞归真、崇尚扎实功底，绝不是拒绝科学工具或把真正的愚昧懒惰美化成大智若愚。",
    "reflectionQuestion": "在你的专业领域里，有哪些看似「很慢很笨」、但凡是顶尖高手都绝对不会省掉的「拙功夫」？",
    "source": "《老子·第四十五章》（「大直若屈，大巧若拙，大辩若讷」）及宋代苏轼《贺欧阳少师致仕启》（「大勇若怯，大智若愚」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "qin-neng-bu-zhuo",
      "jiao-ta-shi-di"
    ]
  },
  {
    "id": "you-zhao-yi-ri-shang-shan-ruo-shui",
    "text": "上善若水，水善利万物而不争",
    "category": "zhenyan",
    "tags": [
      "人际关系",
      "合作与分工",
      "情绪与心态"
    ],
    "plainExplanation": "最崇高美好的品行就像水一样：水默默滋润万物促其生长，却从不与万物争抢高下与功名，总是安然处身于众人不愿去的低洼之地。",
    "storyTitle": "甘当科研团队底座的实验保障工程师",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "在重点实验室里，大家都争着当第一作者发高分论文、上台领奖，唯独老孙二十年如一日守在实验设备保障与样本预处理岗位上。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "无论是哪位青年博士的课题，老孙都像水一样默默提供最精准的仪器校准与零差错试剂配制（「善利万物」），而到了论文署名排位和评优争功时，他总是主动退到最后（「而不争」）。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
              "pose": "acting"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "school",
        "text": "有朋友替他鸣不平，觉得他干了最苦的底座活却没争到聚光灯；老孙温和一笑：「大家都想当红花，总得有人做浇花的水；看着实验室每年出这么多好成果，我心里比谁都甜。」",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "office",
        "text": "实验室连续三任主任和几十位成才学者，每次提起实验室的定海神针，全都不约而同向从不争功的老孙深深鞠躬。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "水没有固定的硬壳，却能穿透最坚硬的岩石；水从不往高处争抢风头，却汇成了浩瀚无垠的大海。在团队与人世间，做一个像水一样能够赋能他人、填补低洼漏洞、又不汲汲于眼前虚名的人，反而拥有最不可替代的生命力。",
    "limits": "利万物而不争是指不争虚名浮利、甘于成就他人，但在涉及团队核心利益与个人合法劳动报酬时，则应有合理保障。",
    "reflectionQuestion": "在你的家庭或工作团队里，谁是那个像「水」一样平时最不显山露水、但如果少了他整个系统就会干涸卡壳的人？",
    "source": "《老子·第八章》（「上善若水。水善利万物而不争，处众人之所恶，故几于道」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "man-zhao-sun-shi-nai-tian-dao",
      "di-shi-kun-jun-zi-yi-hou-de-zai-wu"
    ]
  },
  {
    "id": "yi-shen-ze-ming-fan-pu-gui-zhen",
    "text": "信言不美，美言不信",
    "category": "zhenyan",
    "tags": [
      "沟通与表达",
      "判断与偏见",
      "谨慎与风险"
    ],
    "plainExplanation": "真实可信的话语往往朴实直白、不那么华丽动听；而那些刻意编织得极其动听、百般讨好的漂亮话，往往不那么真实可信。",
    "storyTitle": "卖房中介的两份截然不同的房源介绍",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖准备买一套二手房自住，第一位中介小刘满嘴「美言」：把一套临高架桥的老房子夸成「城市繁华脉搏景观房、冬暖夏凉绝版风水宝地」，对缺点只字不提。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "street",
        "text": "第二位中介老陈说话却十分朴实直白（「信言不美」）：带看另一套房子时，主动打开北窗指给小肖看：「这房采光户型极好，但北边小窗距离邻居空调外机较近，夏天开窗会有点嗡嗡声，建议换三层夹胶隔音窗。」",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "home",
        "text": "小肖起初嫌老陈说话太实在、不够讨喜，但雨天再去复看小刘推荐的那套「绝版好房」时，却发现阳台严重漏水且高架噪音震耳欲聋。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "window"
          ],
          "focusProp": "window",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "小肖果断找老陈签下了那套优缺点透明的房子，换上隔音窗后住得舒心踏实，彻底明白了不讨巧的实话才最值得信赖。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "为什么骗子和忽悠大师的话总是那么顺耳动听？因为他们不需要对客观现实负责，只需要迎合你的幻想与虚荣。而说真话的人必须尊重事实的棱角，自然做不到句句如蜜糖。学会对满分美言多留个心眼，对朴素实话多一分敬重。",
    "limits": "信言不美强调真话往往质朴无华，但并不意味着说真话就必须态度粗暴恶劣；温和坦诚地讲实话是最佳境界。",
    "reflectionQuestion": "当你向别人咨询意见或购买大件商品时，如果对方把一件事情说得「只有百分之百的好处、没有一丁点缺点」，你会立刻警觉吗？",
    "source": "《老子·第八十一章》（「信言不美，美言不信。善者不辩，辩者不善」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ting-qi-yan-er-guan-qi-xing"
    ]
  },
  {
    "id": "you-zhao-yi-ri-zi-qiang-ze-wan-qiang",
    "text": "桃李不言，下自成蹊",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "做事与执行",
      "人际关系"
    ],
    "plainExplanation": "桃树和李树从来不会张嘴自我吹嘘，但因为花朵芬芳、果实甘甜，树下自然被慕名来摘果赏花的人踩出了一条小路；比喻为人真诚、品行与实力过硬，无需自夸也能赢得敬重。",
    "storyTitle": "从不发宣传海报的金牌老中医诊室",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "社区医馆里有两位大夫：年轻的赵大夫每天花两小时在各种群里发长篇自我吹嘘文章，给自己冠上十几个响亮头衔；而七十岁的周老先生连智能手机都不怎么玩，只安安静静坐在诊桌后搭脉开方。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "courtyard",
        "text": "周老先生看病极细，一副中药往往只需二三十元，遇到贫困患者还常免去诊金，手写药方字迹工整并附注详细的忌口食疗叮嘱。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "起初图热闹的人去挂赵大夫的号，几次下来发现疗效平平且药价奇贵；而经周老先生调理好的街坊邻居一传十、十传百，全城患者纷纷慕名而来。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "周老先生诊室门前的青石板被络绎不绝的求医者磨得光亮如镜，恰如「桃李不言，下自成蹊」的生动写照。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "在人人急着拿大喇叭自我标榜的时代，「桃李不言」定力显得尤为珍贵。真正有生命力的口碑，从来不是靠自吹自擂喊出来的，而是靠你结出的每一颗甘甜果实，让受惠者用脚投票走出来的。",
    "limits": "桃李不言强调以真才实学与高尚品德立身，在现代协作中也不排斥实事求是地向外界清晰说明自身服务范围。",
    "reflectionQuestion": "在你所处的圈子里，有没有哪位平时话不多、从不自我吹嘘，但大家一遇到真难题第一个就会想去找他的「桃李式人物」？",
    "source": "《史记·李将军列传》太史公赞引谚（「谚曰：桃李不言，下自成蹊。此言虽小，可以谕大也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jiu-xiang-bu-pa-xiang-zi-shen",
      "jun-zi-chi-qi-yan-er-guo-qi-xing"
    ]
  },
  {
    "id": "yi-shen-ze-ming-ze-ren-ru-shan",
    "text": "居安思危，思则有备，有备无患",
    "category": "zhenyan",
    "tags": [
      "谨慎与风险",
      "时间与耐心",
      "做事与执行"
    ],
    "plainExplanation": "身处平安顺遂的环境时能时刻考虑到潜藏的危难，因为有这种忧患思考就会提前做好防备，有了充分防备就能避免灾祸。",
    "storyTitle": "十年无火灾老小区的消防通道铁律",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "老林所住的平安里小区已经连续十年没发生过任何火情，个别新搬来的住户觉得绝对安全，开始把旧衣柜、儿童推车堆进楼道安全出口，还把私家车停在黄色消防网格线上。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "courtyard",
        "text": "老林作为义务消防队长，深知「居安思危，思则有备」：十年平安不是老天爷保佑，而是靠每一天不松懈的防备换来的，一旦在安逸中麻痹大意，大祸随时降临。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "rain",
        "text": "他联合居委会坚持每周三晚拉网式清理楼道堆积物，并在每季度雷打不动举行一次全楼真水实操逃生演练。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "那年冬夜隔壁街区因楼道杂物起火损失惨重，而平安里因为通道永远畅通、人人熟知灭火器位置，将一次厨房初起火情在两分钟内彻底扑灭。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "安逸的日子久了，人最容易患上「风险遗忘症」——把过去靠严密防备换来的平安，误以为是永远不会改变的理所当然。居安思危不是扫兴，而是将危机锁在铁笼里的唯一钥匙。",
    "limits": "居安思危应转化为制度化的定期演练与检查（「有备」），而非口头制造恐慌。",
    "reflectionQuestion": "在你目前觉得最稳固、最不会出事的生活或业务板块里，如果明天突然断供或停摆，你的备用预案在哪里？",
    "source": "《左传·襄公十一年》（魏绛谏晋悼公：「《书》曰：居安思危。思则有备，有备无患，敢以此规」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-bei-wu-huan",
      "you-zhi-jing-cheng-sheng-yu-you-huan"
    ]
  },
  {
    "id": "you-zhao-yi-ri-xin-ping-qi-he",
    "text": "静坐常思己过，闲谈莫论人非",
    "category": "zhenyan",
    "tags": [
      "自省与成长",
      "沟通与表达",
      "人际关系"
    ],
    "plainExplanation": "安静独处的时候，常常反省检视自己身上的过失与不足；与人聚会闲聊的时候，绝不去背后议论、嚼舌根说别人的短处与是非。",
    "storyTitle": "茶水间八卦局里的那位安静离席者",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "午休时间的公司茶水间里，几个同事常聚在一起津津有味地议论其他部门谁婚姻不顺、谁方案搞砸了，还拉路过的梅姐一起评头论足。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "梅姐牢记家训「静坐常思己过，闲谈莫论人非」：背后议论别人是非不仅伤阴德、传出去生嫌隙，更是在白白浪费自己的宝贵心力。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "acting"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "每逢有人挑起他人八卦话头，梅姐总是温和一笑：「别人家里的难处咱们不清楚，不说这个啦」，随后端起茶杯回到工位安静复盘自己上午报表里的两处格式疏漏。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "office",
        "text": "久而久之，全公司都知道梅姐嘴严心正、从不传闲话，无论领导还是同事遇到心里话都最信任她，她也远离了一切无谓的人际旋涡。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "普通人最容易把这两个动作搞反：闲聊时兴致勃勃地拿着放大镜论人是非，独处时却绞尽脑汁为自己的过错找借口开脱。把向外嚼舌根的嘴管住，把向内照自己的灯点亮，耳根清净，德行日进。",
    "limits": "闲谈莫论人非是指不在背后搞人身八卦与恶意中伤；在正式工作复盘或正当监督举报中客观指出问题则属职责所在。",
    "reflectionQuestion": "下次在聚餐或茶水间听到有人开始议论某位不在场朋友的私事八卦时，你能否做到不接话、不添油加醋，或者温和地岔开话题？",
    "source": "明末清初金缨编《格言联璧·接物类》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-ri-san-xing-wu-shen",
      "fan-qiu-zhu-ji"
    ]
  },
  {
    "id": "yi-shen-ze-ming-zhi-xing-he-yi",
    "text": "知是行的主意，行是知的功夫；知是行之始，行是知之成",
    "category": "zhenyan",
    "tags": [
      "做事与执行",
      "学习与积累",
      "自省与成长"
    ],
    "plainExplanation": "认知是指导行动的主心骨，行动则是落实认知的真功夫；认知是行动的开端，而唯有真正付诸行动并取得实效，才算完成了真正的认知（知行合一）。",
    "storyTitle": "读十本游泳书与真正跳下水游百米",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "小肖平时最爱谈论健康养生与时间管理理论，书架上摆满了《高效能人士习惯》《人体运动生理学》，跟人聊起来头头是道，可自己却天天久坐熬夜、连五百米都跑不下来。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "park",
        "text": "父亲指着他的书架引用王阳明心学点拨他：「嘴上背得出游泳口诀不叫真知，跳进水里淹不死、游到对岸才叫『行是知之成』！你现在这叫知行割裂。」",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "xiao",
              "pose": "acting"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "park",
        "text": "小肖如梦初醒，决定把书本上的「知」放进汗水里的「行」去检验：每天傍晚换上跑鞋去公园慢跑三公里，在每一次呼吸调整与肌肉酸痛中真正读懂了什么叫心肺阈值。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "三个月后他体脂率恢复正常、精力充沛，再翻开那些书时感慨万千：没有双脚跑过的路，书上的字永远只是别人的墨水。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "我们常听人说「道理我都懂，就是做不到」。按照王阳明先生的标准，只要你做不到，就说明你根本还没真正「懂」——你只是听过那个名词而已。唯有当一个道理变成了你遇到事情时的下意识行动，知与行才算真正合二为一。",
    "limits": "知行合一强调认知与实践的紧密咬合、在事上磨炼，既反对空谈玄想，也反对盲目蛮干。",
    "reflectionQuestion": "有哪一条你挂在嘴边觉得「我早就懂了」的人生道理，其实你至今还没有在日常生活中真正做到过？",
    "source": "明代王守仁（王阳明）《传习录·卷上》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "bo-xue-zhi-shen-wen-zhi",
      "shen-ti-li-xing"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ju-jing-hui-shen",
    "text": "制心一处，无事不办",
    "category": "zhenyan",
    "tags": [
      "学习与积累",
      "做事与执行",
      "时间与耐心"
    ],
    "plainExplanation": "如果能把散乱飘忽的心念收拢聚集到同一个焦点上，就像凸透镜聚光一样，世间便没有攻克不了的难事。",
    "storyTitle": "微雕艺人屏息凝神的方寸毫芒",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "微雕名家陈老先生能在米粒大小的象牙片上刻出整篇《赤壁赋》，字迹在放大镜下笔笔苍劲飞动，青年学徒觉得这简直是凡人不可企及的神迹。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "陈老先生让学徒拿一面放大镜站在太阳底下照一张白纸：放大镜晃来晃去时，纸面一辈子也不会热；而当手稳稳托住放大镜，把光束死死定在一个小点上十秒钟，白纸「嗤」地冒起了青烟。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
              "pose": "acting"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "陈老先生说：「人的心力就像这阳光， scattered（散漫）时连一张纸都穿不透；但只要你『制心一处』，把杂念全收进刀尖那零点零一毫米上，再硬的石头也能刻出乾坤。」",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
              "pose": "discovering"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "学徒顿悟，每天练功前先静坐十分钟收摄心神，半年后终于也能在方寸石面上稳稳刻出蝇头小楷。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "普通人与顶尖匠人的心力总量其实相差无几，区别在于普通人的心力像普通灯泡一样四散漫射，照亮了满屋子的琐碎焦虑；而高手的心力像激光一样「制心一处」，把全部能量压强集中在一个点上，自然无坚不摧。",
    "limits": "制心一处是指在攻关时段高度聚焦心神，日常作息则需一张一弛，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "如果你把未来三个月散落在十件杂事上的注意力，像放大镜聚光一样全部收拢到唯一一个核心目标上，会发生什么变化？",
    "source": "《佛遗教经》（「制心一处，无事不办」），宋明理学及近代弘一法师常引为治学箴言。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhuan-xin-zhi-zhi",
      "you-zhi-zhe-shi-jing-cheng"
    ]
  },
  {
    "id": "bi-li-qian-ren-wu-yu-ze-gang",
    "text": "壁立千仞，无欲则刚",
    "category": "zhenyan",
    "tags": [
      "诚信与责任",
      "得失与取舍",
      "判断与偏见"
    ],
    "plainExplanation": "悬崖峭壁之所以能够直立千丈高耸入云，是因为它没有任何贪求依赖；人只要没有不正当的私欲软肋，就能在任何诱惑与压力面前刚正不阿。",
    "storyTitle": "质检组长拒收礼卡守住的钢材防线",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "大桥项目进场一批主梁特种螺纹钢，检测组长老姜抽样做抗拉屈服强度试验时，发现其中两个批次的伸长率临界值差了零点五个百分点。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "当晚供货商老板托老姜的老乡送来一张十万元不记名购物卡和一套学区房内部认购指标，求老姜在质检单上「抬抬手签个合格」。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "acting"
            }
          ],
          "props": [
            "bill"
          ],
          "focusProp": "bill",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "workshop",
        "text": "老姜当场把礼卡和指标单拍回桌上：「我住单位公租房踏实，孩子凭本事读书，我不贪你一分钱私利，你拿什么都折不弯我手里的游标卡尺！」",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "office",
        "text": "次日老姜顶住各方说情压力，硬气签下「不合格退场」红章，逼供货商连夜换回达标钢材，像千仞绝壁一样守住了整座大桥的百年安全。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "一个人什么时候最软弱？就是当他心里惦记着不该拿的好处、害怕失去某种特权的时候——贪欲就是别人牵住他鼻子的绳索。当你斩断了非分的私欲（「无欲」），世上便没有任何威逼利诱能让你弯下脊梁。",
    "limits": "无欲则刚是指戒除贪腐私欲以守住刚正原则，并非否定人正常合理的生活需求与工作报酬。",
    "reflectionQuestion": "在你需要做出独立公正判断的时刻，你是否做到了「不拿人手短、不吃人嘴软」，从而拥有一票否决的底气？",
    "source": "清代林则徐自题联下联（「海纳百川，有容乃大；壁立千仞，无欲则刚」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-rong-nai-da-wu-yu-ze-gang",
      "jun-zi-ai-cai-qu-zhi-you-dao"
    ]
  },
  {
    "id": "you-zhao-yi-ri-fan-shi-tu-shi",
    "text": "天下大事，必作于细",
    "category": "zhenyan",
    "tags": [
      "做事与执行",
      "谨慎与风险",
      "工作与职业"
    ],
    "plainExplanation": "普天之下任何宏伟重大的事业，都必定是从最微小、最具体的细节处着手做起的。",
    "storyTitle": "航天级精密焊工的三千个零瑕疵焊点",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "特级焊工老孙所在的班组承担了一台大型深海探测器的耐压舱管路焊接任务，全舱共有三千二百个微小焊点，任何一个焊点有针尖大的气孔，在万米深海高压下都会导致全舱内爆。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "tools"
          ],
          "focusProp": "tools",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "年轻焊工看着庞大的总装图感到无从下手，老孙指着《老子》「天下大事，必作于细」告诫大家：眼里不要只看整台大潜器，要把全部心神落到眼前这一个两毫米的焊点上。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
              "pose": "acting"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "study",
        "text": "老孙带着团队对每一道焊缝实行「三洗三照」：焊前用丙酮擦洗三次除油，焊后用X光探伤逐点拍片编号，把三千二百个微小细节全部做到了零气孔。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "workshop",
        "text": "半年后探测器成功下潜万米海沟传回珍贵影像，老孙抚摸着焊枪感慨：所谓惊天动地的大工程，不过是把每一个不起眼的小焊点做到极致。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "世人都向往做惊天动地的「天下大事」，却常常鄙薄手头那些琐碎枯燥的「小细活」。殊不知宏大从来不是凭空悬浮的，它是由三千个严丝合缝的焊点、一万次准确无误的核对垒起来的。能把小事做细的人，才配得上担纲大事。",
    "limits": "作于细强调在执行落地上抓实关键细节，同时心中仍需有全局蓝图指引，做到大处着眼、小处着手。",
    "reflectionQuestion": "在你目前参与的那个大项目或长远目标里，今天摆在你手边最需要被做到一百分的那个「细处」是什么？",
    "source": "《老子·第六十三章》（「图难于其易，为大于其细。天下难事，必作于易；天下大事，必作于细」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jing-yi-qiu-jing",
      "qian-li-zhi-di-kui-yu-yi-xue"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ze-shan-jian-yi",
    "text": "不畏浮云遮望眼，自缘身在最高层",
    "category": "zhenyan",
    "tags": [
      "判断与偏见",
      "情绪与心态",
      "自省与成长"
    ],
    "plainExplanation": "之所以不怕层层漂浮的云雾遮挡住远望的视线，是因为自己已经站在了高山之巅的最高层；比喻格局与认知站得足够高，就不会被眼前的局部乱象与流言所迷惑。",
    "storyTitle": "站在山顶看清迷雾山谷走向的领队",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "研学队伍在山谷林间穿行时，四周突然升起浓重白雾，十米之外不见人影，两条小岔路被落叶覆盖，队员们在谷底争论不休、人心惶惶。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "signpost"
          ],
          "focusProp": "signpost",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "同样在行业低谷期，公司内部也因短期市场波动流言四起，有人忙着跟风抛售核心研发线去追逐短命噱头。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "umbrella"
          ],
          "focusProp": "umbrella",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "mountain",
        "text": "老周无论在山里还是在企业里都笃信「不畏浮云遮望眼」：他带着两名向导攀上谷侧高出云海五十米的瞭望峰顶，俯瞰之下，脚下浮云不过薄薄一层，远方主河谷的走向与出口在阳光下一目了然。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "book"
          ],
          "focusProp": "book",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "站在十年技术演进与行业本质的「最高层」看清全局后，老周稳稳带领团队穿过眼前的短期迷雾，迎来了最壮阔的日出。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "为什么我们常常被一条耸人听闻的热搜、一次短期的账面波动或几句人际闲话搅得方寸大乱？因为我们站得太低了——贴着地面走，一丛半米高的杂草也能挡住整片天空。把你的阅读厚度、历史视野与时间尺度拉升到「最高层」，眼前的浮云便只是脚下掠过的微风。",
    "limits": "身在最高层是指提升认知格局与长远视野，而非脱离一线群众的高高在上。",
    "reflectionQuestion": "面对当前让你感到迷茫或焦虑的一团「眼前浮云」，如果站在十年后的山顶往下看，它还会挡住你的视线吗？",
    "source": "宋代王安石《登飞来峰》诗（「不畏浮云遮望眼，自缘身在最高层」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-ye-zhang-mu",
      "bu-yao-gao-gu-yi-nian-di-gu-shi-nian"
    ]
  }
];
