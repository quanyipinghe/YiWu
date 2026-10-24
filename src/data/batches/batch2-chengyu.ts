import { Proverb } from '../types';

// 第二批扩展内容：成语篇
export const BATCH_CHENGYU: Proverb[] = [
  {
    "id": "san-si-er-hou-xing",
    "text": "三思而后行",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "在做重要决定或采取行动之前，先经过多角度、多层次的周密思考与权衡，避免冲动盲干。",
    "storyTitle": "老房局部改造的承重墙核查",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林想把客厅与阳台之间的半截配重墙敲掉来扩大采光面积，装修游击队拍胸脯说半天就能砸完。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "text": "老林没有当场动工，而是先去城建档案馆调出原楼体结构施工图，又请物业结构工程师上门现场勘验。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "lin",
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
        "scene": "office",
        "text": "工程师指着图纸严肃告知：这半截墙压着悬挑阳台的主钢筋梁，一旦贸然砸毁极易引发整个阳台倾覆坍塌。",
        "visual": {
          "scene": "office",
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
        "scene": "home",
        "text": "老林庆幸自己动工前多走了核实这一步，最终改用通透折叠玻璃门方案，既保住了结构安全又兼顾了敞亮。",
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
    "interpretation": "冲动往往只看到眼前的单一好处，而深思则是把隐藏的代价、连锁反应与不可逆风险一并摆上桌面。在不可逆的重大事项上停顿片刻、核实三遍，是最稳妥的护身符。",
    "limits": "三思是为了厘清关键风险，绝不意味着必须把所有不确定性百分之百消除才能行动；过度思虑反而会错失良机。",
    "reflectionQuestion": "最近哪一项涉及较大开销或长远影响的决定，你是先核实了底层风险之后才拍板的？",
    "source": "《论语·公冶长》（「季文子三思而后行。子闻之，曰：再，斯可矣」）。",
    "sourceStatus": "classical",
    "contrastIds": [
      "dang-duan-bu-duan-fan-shou-qi-luan"
    ],
    "contrastNote": "「三思而后行」提醒人在信息不明、后果不可逆时审慎权衡；「当断不断，反受其乱」则提醒人在局势已明、拖延只会扩大损失时果断拍板。两者分别针对「盲目冲动」与「优柔寡断」两种偏颇。",
    "commonMisreading": "把反复内耗、害怕担责的拖延症包装成「三思而后行」。",
    "modernApplication": "在签署合同、大额消费、结构改造或公开发表激烈言论前，强制执行「事实核查—最坏后果推演—替代方案比较」三步法。",
    "storyStructure": {
      "layout": "contrast",
      "premise": "老林想拓宽客厅采光，施工队建议直接敲掉阳台连接处的半截矮墙。",
      "premiseScene": "home",
      "premiseVisual": {
        "scene": "home",
        "characters": [
          {
            "id": "lin",
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
        "label": "做法甲：盲目动工",
        "action": "听信口头承诺直接砸毁配重墙。",
        "outcome": "破坏悬挑结构埋下严重安全隐患。",
        "tone": "caution",
        "scene": "workshop",
        "visual": {
          "scene": "workshop",
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
            "type": "contrast",
            "label": "盲目动工"
          }
        }
      },
      "right": {
        "label": "做法乙：三思核验",
        "action": "先调阅原始建筑结构图纸并请工程师勘验。",
        "outcome": "改用安全的折叠玻璃门方案。",
        "tone": "positive",
        "scene": "office",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "book"
          ],
          "narrative": {
            "type": "contrast",
            "label": "三思核验"
          }
        }
      },
      "point": "涉及安全底线与不可逆后果的决定，先核实图纸与事实，远胜于事后补救。"
    }
  },
  {
    "id": "dang-duan-bu-duan-fan-shou-qi-luan",
    "text": "当断不断，反受其乱",
    "category": "chengyu",
    "tags": [
      "得失与取舍",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "到了应当做出决断的时刻却犹犹豫豫、迟迟不肯拍板，反而会因为贻误时机而遭受更大的被动与混乱。",
    "storyTitle": "梅雨季前果园抢收的决断",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "气象台预报三天后有持续一周的强降雨，果农老孙看着树上八九成熟的桃子，犹豫要不要等彻底红透再摘以卖更高价。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "fruit"
          ],
          "focusProp": "fruit",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "邻园老王劝他果断抢收，因为暴雨一旦进园会导致裂果落果；老孙当晚拍板召集全家和临时工连夜采摘入库。",
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
        "scene": "market",
        "text": "另一户果农迟迟舍不得那两毛钱差价，天天观望天气，结果第三天暴雨倾盆，满树熟桃大半裂口烂在泥地里。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "老孙抢收的桃子虽单价略让半分，却完好无损全部售罄，他感慨关键时刻的果断止损比贪求圆满更重要。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "sun",
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
    "interpretation": "决断的难点往往不在于看不清局势，而在于舍不得放弃其中某一头的局部利益。当客观窗口正在急速关闭时，拖延本身就是最昂贵的选择。",
    "limits": "果断决断的前提是核心信息已经明确、继续等待只会恶化局面；若基本事实尚不清楚，仍应先做必要核查而非盲目武断。",
    "reflectionQuestion": "你手头是否有一件明知继续拖着只会更被动、却因为舍不得沉没成本而迟迟没做决断的事？",
    "source": "《史记·春申君列传》（「语曰：当断不断，反受其乱」）。",
    "sourceStatus": "classical",
    "contrastIds": [
      "san-si-er-hou-xing"
    ],
    "contrastNote": "与「三思而后行」互为补集：筹划期重在「三思」以防鲁莽，执行与止损窗口期重在「当断」以防贻误。",
    "storyStructure": {
      "layout": "contrast",
      "premise": "强降雨来临前夕，果园里的桃子已八九成熟，面临是否立即抢收的抉择。",
      "premiseScene": "field",
      "premiseVisual": {
        "scene": "field",
        "characters": [
          {
            "id": "sun",
            "pose": "thinking"
          }
        ],
        "props": [
          "fruit"
        ],
        "narrative": {
          "type": "fork",
          "label": "抉择"
        }
      },
      "left": {
        "label": "做法甲：犹豫观望",
        "action": "舍不得微小的差价迟迟不摘。",
        "outcome": "结果遭遇连日暴雨导致满园裂果血本无归。",
        "tone": "caution",
        "scene": "rain",
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
          "narrative": {
            "type": "contrast",
            "label": "犹豫观望"
          }
        }
      },
      "right": {
        "label": "做法乙：果断抢收",
        "action": "认清天气风险立即组织人力采摘入库。",
        "outcome": "保住九成以上收成安稳度过雨季。",
        "tone": "positive",
        "scene": "market",
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
          "narrative": {
            "type": "contrast",
            "label": "果断抢收"
          }
        }
      },
      "point": "当风险信号已经十分明确时，果断取舍才能守住大局。"
    }
  },
  {
    "id": "shui-dao-qu-cheng",
    "text": "水到渠成",
    "category": "chengyu",
    "tags": [
      "时间与耐心",
      "学习与积累",
      "情绪与心态"
    ],
    "plainExplanation": "水流聚集到一定程度，自然会在大地上冲刷出顺畅的渠道；比喻只要把基础条件一步步准备扎实，目标就会顺理成章地达成，无须强求。",
    "storyTitle": "三年古籍修复基本功的自然结硕果",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "刚进古籍修复室时，小童急着想上手修补宋元善本，师父却让她先从最枯燥的调浆糊、选配皮纸和修整书叶边角练起。",
        "visual": {
          "scene": "study",
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
        "scene": "workshop",
        "text": "第一年她每天练习手指捻纸测厚，第二年潜心比对上百种传统染色纸的纤维肌理，把每一道基础工序练成了肌肉记忆。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "scene": "study",
        "text": "第三年馆里接手一部破损严重的明代地方志，面对虫蛀粘连的书叶，小童惊喜地发现配纸、揭粘、补洞一切都得心应手。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
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
        "scene": "school",
        "text": "修复成果在专家评审会上获得满分，师父微笑道：前两年的每一滴汗水都在挖渠，渠挖通了，成事便只是顺其自然。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
              "pose": "relieved"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "许多人在目标尚未达成时充满焦虑，总想靠拔苗助长去摘果子。其实结果只是条件的副产品——与其紧盯着终点的奖杯患得患失，不如低头把每一个必要条件逐一凑齐。",
    "limits": "水到渠成强调的是主动扎实地积累条件，绝不是坐在原地等待天上掉馅饼的消极无为。",
    "reflectionQuestion": "为了实现你今年的那个重要目标，目前还差哪两个最关键的「水源条件」需要你去默默补齐？",
    "source": "宋代苏轼《答秦太虚书》及朱熹《朱子全书》（「水到渠成，不须预虑」）。",
    "sourceStatus": "classical",
    "storyStructure": {
      "layout": "timeline",
      "stages": [
        {
          "timeLabel": "第一年·练捻纸",
          "text": "放下急躁心态，每天练习调配小麦淀粉浆糊与手指捻纸测厚。",
          "scene": "workshop",
          "visual": {
            "scene": "workshop",
            "characters": [
              {
                "id": "tong",
                "pose": "acting"
              }
            ],
            "props": [
              "tools"
            ],
            "narrative": {
              "type": "time",
              "text": "第一年·练捻纸"
            }
          }
        },
        {
          "timeLabel": "第二年·辨纸性",
          "text": "系统比对上百种传统手工纸的纤维走向与染色配比，记满三册笔记。",
          "scene": "study",
          "visual": {
            "scene": "study",
            "characters": [
              {
                "id": "tong",
                "pose": "thinking"
              }
            ],
            "props": [
              "book"
            ],
            "narrative": {
              "type": "time",
              "text": "第二年·辨纸性"
            }
          }
        },
        {
          "timeLabel": "第三年·承重任",
          "text": "独立承担明代破损方志修复，揭粘、配纸与补洞均游刃有余。",
          "scene": "workshop",
          "visual": {
            "scene": "workshop",
            "characters": [
              {
                "id": "tong",
                "pose": "discovering"
              }
            ],
            "props": [
              "pen"
            ],
            "narrative": {
              "type": "time",
              "text": "第三年·承重任"
            }
          }
        },
        {
          "timeLabel": "第四年·渠自成",
          "text": "修复善本获专家全票认可，扎实基本功自然汇聚成专业声誉。",
          "scene": "school",
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
            "narrative": {
              "type": "time",
              "text": "第四年·渠自成"
            }
          }
        }
      ],
      "point": "把力气花在夯实每一个前置条件上，结果自会顺理成章地到来。"
    }
  },
  {
    "id": "shi-ban-gong-bei",
    "text": "事半功倍",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "学习与积累",
      "工作与职业"
    ],
    "plainExplanation": "只花费一半的气力与工夫，却能取得成倍的成效；形容找准规律、用对工具或方法得当，使效率大幅提升。",
    "storyTitle": "社区普查表格的模板优化",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "街道办往年统计高龄老人服务需求时，都是发空白表让社工手写录入，不仅字迹难辨，汇总核对还要加班整整一周。",
        "visual": {
          "scene": "office",
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
        "scene": "office",
        "text": "今年小肖接手后，花半天时间把常见问题梳理成勾选式电子问卷与大字版纸质打钩卡，并设定自动分类校验公式。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "street",
        "text": "社工们入户走访时只需引导老人勾选对应需求，耗时缩短一半，回办公室扫码即刻生成分类汇总台账。",
        "visual": {
          "scene": "street",
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
        "scene": "office",
        "text": "原本需要七天的统计工作两天半便高质量收官，还零差错筛出了独居老人的紧急维修需求。",
        "visual": {
          "scene": "office",
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
    "interpretation": "勤劳固然可贵，但用战术上的汗水去掩盖方法上的粗糙，往往会陷入低水平重复。动手之前先花十分钟思考「有没有更优的工具或流程」，是开启高效能工作的钥匙。",
    "limits": "追求事半功倍是指优化方法与工具，绝不能演变为偷工减料、跳过必要安全步骤的投机取巧。",
    "reflectionQuestion": "你每天例行处理的事务中，哪一项如果花一小时梳理出标准模板，今后每次都能省下一半时间？",
    "source": "《孟子·公孙丑上》（「故事半古之人，功必倍之，惟此时为然」）。",
    "sourceStatus": "classical",
    "contrastIds": [
      "shi-bei-gong-ban"
    ]
  },
  {
    "id": "shi-bei-gong-ban",
    "text": "事倍功半",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "耗费了加倍的力气与时间，最终取得的成效却只有一半；形容因方向偏离、工具钝拙或方法失当而导致效率极低。",
    "storyTitle": "用钝刨刀硬推老榆木的教训",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "学徒小张急着在傍晚前刨平四根老榆木桌腿，明明察觉手里的刨刀刃口已经发钝卷刃，却舍不得花二十分钟磨刀。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "text": "他咬着牙满头大汗地硬推了两个钟头，胳膊酸痛不说，刨出来的木面还尽是逆纹撕裂的毛刺坑洼。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "scene": "study",
        "text": "陈师父走过来叫停了他，拿过刨刀在油石上稳稳磨了十五分钟，直到刃口泛出冷冽青光。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
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
        "scene": "workshop",
        "text": "换上锋利刀刃后，小张轻轻几推便拉出薄如蝉翼的木花，原本坑洼的木面一刻钟便平整如镜。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
    "interpretation": "很多时候我们感到精疲力竭却收效甚微，不是因为不够努力，而是因为在不顺手的工具、混乱的次序或错误的方向上硬扛。停下来磨快刀刃、校准方向，才是最省力的做法。",
    "limits": "避免事倍功半需要定期复盘工作方法，但也不要走向另一个极端——整天研究工具却迟迟不动手干活。",
    "reflectionQuestion": "回顾上周让你觉得最累却进展最慢的一件事，问题究竟出在力气没使够，还是「刀刃」早就钝了？",
    "source": "《孟子·公孙丑上》引申成语，与「事半功倍」相对。",
    "sourceStatus": "classical",
    "contrastIds": [
      "shi-ban-gong-bei"
    ]
  },
  {
    "id": "xun-xu-jian-jin",
    "text": "循序渐进",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "按照事物内在的先后次序与规律，由浅入深、由易到难地一步步向前推进。",
    "storyTitle": "老年大学书法班的楷书筑基",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "老周刚报名老年大学书法班时，看到别人挥毫泼墨写行草潇洒自如，第一堂课就买来大号羊毫笔想直接临写草书。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "结果笔锋完全不受控制，写出来的字歪七扭八如乱麻，一连几周毫无长进，老周差点灰心退学。",
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
        "scene": "home",
        "text": "授课老师温和地劝他收起草书帖，先从颜体楷书的基本横竖撇捺练起，体会中锋行笔与间架结构的平衡。",
        "visual": {
          "scene": "home",
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
        "scene": "school",
        "text": "老周静下心按楷书、行楷、行书的次序扎扎实实临池两年，如今提笔写春联已见筋骨力道。",
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
    "interpretation": "任何知识体系与技艺都有其不可逾越的底层阶梯。地基尚未打牢就想直接封顶，注定摇摇欲坠；尊重从基础到高阶的自然次序，看似慢，实则一步一个脚印从不返工。",
    "limits": "循序渐进强调步骤清晰扎实，不应被当成故步自封、永远停留在舒适区不敢挑战进阶难度的借口。",
    "reflectionQuestion": "你正在学习的领域里，哪项最基础的功底是你当初略过没练透、如今常常掣肘你的？",
    "source": "宋代朱熹《读书之要》（「读书之法，在循序而渐进，熟读而精思」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "ji-shao-cheng-duo",
    "text": "积少成多",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "家庭与生活"
    ],
    "plainExplanation": "只要持续不断地一点点积累，微小的数量汇聚起来也能变成可观的总量。",
    "storyTitle": "每日三百字田野观察笔记",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "植物爱好者梅姐平时工作繁忙，一直遗憾没能抽出一整块长假去写一本关于家乡野生草木的科普书。",
        "visual": {
          "scene": "field",
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
        "scene": "study",
        "text": "后来她改变了想法，不再等所谓的空闲大块时间，而是每天上下班途中观察一种路边植物，睡前花十五分钟写三百字记录。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
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
        "scene": "study",
        "text": "春天记迎春与紫花地丁，夏天记狗尾草与牵牛，哪怕出差也在手机备忘录里随手记下物候特征，三年如一日从未间断。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
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
        "scene": "school",
        "text": "三年期满整理文档时，竟已攒下三十多万字详实生动的一手笔记与上千张配图，出版社欣然为她结集出版。",
        "visual": {
          "scene": "school",
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
    "interpretation": "人们往往高估一天突击能做成的事，却严重低估每天坚持一点点在三年后产生的复利。把庞大的目标拆解为每天毫不费力就能完成的微小定量，时间自会帮你垒起高山。",
    "limits": "积少成多既适用于好习惯与储蓄，同样也警示坏习惯与微小债务的累积；需警惕负面事物的日积月累。",
    "reflectionQuestion": "如果每天只投入二十分钟做一件有积累价值的小事，坚持一年后你最希望收获什么？",
    "source": "《战国策·秦策四》及《汉书·董仲舒传》（「聚少成多，积小致巨」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "chi-zhi-yi-heng",
    "text": "持之以恒",
    "category": "chengyu",
    "tags": [
      "时间与耐心",
      "做事与执行",
      "自省与成长"
    ],
    "plainExplanation": "怀着恒常坚定的毅力长久坚持下去，不因一时枯燥或短期不见效而半途而废。",
    "storyTitle": "河道志愿巡护队的五年清流账",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "river",
        "text": "五年前老林发起社区护河志愿小队，约定每周六清晨沿穿城小河巡查垃圾并记录排口水质，起初响应者多达三十人。",
        "visual": {
          "scene": "river",
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
        "text": "过了新鲜劲儿后，盛夏酷暑与寒冬冷雨让不少人陆续退出，最冷清的时候只剩老林和两位老街坊顶风冒雨照常出勤。",
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
        "scene": "river",
        "text": "他们不仅每次捡净河岸塑料瓶，还把五年间两百六十次的水质色度与水位变化整理成图文日志，定期反馈给水务部门。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "lin",
              "pose": "discovering"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "park",
        "text": "这份五年不间断的民间监测促成了河道彻底截污改造，如今白鹭重回河湾，越来越多年青人主动加入到周六晨巡队伍中。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "bridge"
          ],
          "focusProp": "bridge",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "做成一件事最难的往往不是开头的激情澎湃，而是度过中间漫长平淡期时的那份笃定。恒心不是咬牙硬撑的苦役，而是把有价值的事内化为像呼吸一样自然的生活节律。",
    "limits": "持之以恒应当建立在方向正确、此事确实值得坚守的前提上；若事实已证明方向完全错误，则应及时调整而非盲目死磕。",
    "reflectionQuestion": "你生命中有没有哪一个坚持了三年以上的好习惯？它给你带来了怎样潜移默化的改变？",
    "source": "清代曹雪芹《红楼梦》及近代治学格言常见，源于《尚书》《论语》尚恒思想。",
    "sourceStatus": "classical"
  },
  {
    "id": "ban-tu-er-fei",
    "text": "半途而废",
    "category": "chengyu",
    "tags": [
      "时间与耐心",
      "自省与成长",
      "做事与执行"
    ],
    "plainExplanation": "路走到一半就停下来放弃了；比喻做事缺乏恒心与韧劲，遇到一点阻挠或倦怠就前功尽弃。",
    "storyTitle": "阳台上三分钟热度的堆肥箱",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖看着网上家庭厨余堆肥种菜的视频心血来潮，一口气买回三个大号堆肥桶、菌糠和全套园艺铲。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
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
        "text": "头两周他还兴致勃勃地切碎果皮菜叶拌菌粉，到了第三周嫌翻堆费力气又有微酸气味，便把桶丢在阳台角落不再管它。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "xiao",
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
        "text": "结果半生不熟的厨余在桶里发臭招虫，不仅一盆花也没种活，最后还得捂着鼻子花大力气清理丢弃。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "courtyard",
        "text": "邻居孙大爷点拨他：任何事情最难熬的就是中间那段发酵期，熬过去是黑金肥土，半路撂挑子就只剩一桶烂菜叶。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "xiao",
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
    "interpretation": "半途而废最可惜的地方，在于你已经付出了前期的启动成本与精力，却在即将跨过拐点前主动放弃了全部收获。立项前少一点冲动摊大饼，启动后多一分咬牙走完闭环的韧性。",
    "limits": "警惕半途而废是针对因懒惰畏难而放弃有价值的目标；若发现项目本身是骗局或方向彻底错误，及时止损不叫半途而废。",
    "reflectionQuestion": "盘点一下你过去一年开的「头」，有哪些是因为渡不过枯燥期而停在半路的？挑一件最小的把它收个尾如何？",
    "source": "《礼记·中庸》（「君子遵道而行，半涂而废，吾弗能已矣」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shi-shi-qiu-shi",
    "text": "实事求是",
    "category": "chengyu",
    "tags": [
      "诚信与责任",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "从真实的客观事物出发，通过周密调查研究探求其内在的客观规律，不夸大、不迎合、不凭空臆断。",
    "storyTitle": "山坡茶园冻害减产的如实上报",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "早春一场倒春寒袭击了高山有机茶园，部分迎风坡茶树嫩芽受冻焦枯，合作社面临向订货商通报产量的关口。",
        "visual": {
          "scene": "mountain",
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
        "scene": "field",
        "text": "有人提议先瞒下冻害实情，甚至掺一点外地普通早茶凑够合同斤数，以免影响合作社今年的评级与预付款。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "office",
        "text": "社长老姜坚决反对，带着技术员逐块丈量受灾茶地，拍下实景照片并测算真实可采春茶产量，第一时间如实发函告知客户。",
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
        "scene": "field",
        "text": "客户起初惊讶，但派人实地核查后反而被老姜不掺一叶假茶的诚实作风深深折服，不仅顺延了交货期还续签了五年包销协议。",
        "visual": {
          "scene": "field",
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
    "interpretation": "面对不利局面或业绩压力时，粉饰太平与虚报数据看似能应付一时，实则是在给未来埋设更大的雷。尊重客观事实、说老实话办老实事，永远是立身处世最硬的底牌。",
    "limits": "实事求是不仅要求如实反映问题，更要求在认清事实的基础上积极寻找解决规律，不能把「情况就是这么糟」当成不作为的挡箭牌。",
    "reflectionQuestion": "当真实数据或进展不如预期时，你敢不敢第一时间不加粉饰地向团队或自己坦诚真相？",
    "source": "《汉书·河间献王刘德传》（「修学好古，实事求是」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "liang-li-er-xing",
    "text": "量力而行",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "得失与取舍",
      "自省与成长"
    ],
    "plainExplanation": "按照自己实际的体力、能力与资源状况来决定行动的规模与深浅，不逞一时之勇，不打无把握之仗。",
    "storyTitle": "徒步穿越峡谷时的海拔折返点",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "周末户外徒步队攀登一座海拔两千米的山峰，行至一千六百米垭口时，浓雾骤起且石阶结了一层薄冰。",
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
        "text": "队里有两位年轻队员高喊着「来都来了必须登顶」，队长老周却查看了全队体能消耗与剩余日照时间，果断下令原地折返。",
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
        "text": "下山途中果真下起冻雨，因为折返及时，全队在天黑路滑前安全回到了山脚农家乐，无人受伤受冻。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "courtyard",
        "text": "当晚新闻播报另一支强行冲顶的队伍被困冰崖动用救援，那两位年轻队员后怕不已，由衷佩服老周认清边界的定力。",
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
    "interpretation": "真正的勇敢不是无视客观限制的鲁莽逞强，而是清楚知道自己与团队的能力边界在哪里。在自然险境、财务投资与精力管理中，懂得在安全线内优雅折返，才能走得更远。",
    "limits": "量力而行旨在防范超出承受极限的冒进风险，不能将其曲解为面对能力范围内正常挑战时的畏缩逃避。",
    "reflectionQuestion": "在最近的工作承接或消费决策中，你有没有因为抹不开面子或攀比心理而揽下超出自身负荷的担子？",
    "source": "《左传·昭公十五年》（「力能则进，否则退，量力而行」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "fang-wei-du-jian",
    "text": "防微杜渐",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "在错误或隐患刚刚露出微小苗头的时候就加以制止，不让它顺势蔓延扩大。",
    "storyTitle": "烘茶机轴承异响的早班排查",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "春茶采制高峰期的清晨，制茶师老陈开机预热杀青滚筒时，敏锐地捕捉到轴承深处传出一丝极轻微的金属摩擦杂音。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "text": "助手觉得机器转速正常，主张先把今天采下的五百斤鲜叶炒完再说；老陈却当即断电停机，拆开防护罩检查。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "scene": "field",
        "text": "拆开后发现固定轴承的定位销已出现一道发丝般的裂纹，若带病满负荷运转两小时，主轴极可能抱死并烧毁整锅明前茶。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "chen",
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
        "text": "老陈花四十分钟换上备用销轴并补足耐高温油脂，机器连续平稳运转十天直到春茶收官，分毫未损。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "任何大崩盘在初期都曾发出过微弱的求救信号——或许是一句不经意的抱怨、一笔微小的坏账、一丝异常的声响。敢于在苗头最微弱时按下暂停键去处理，是最高明的风险控制。",
    "limits": "防微杜渐要求对核心系统的异常苗头保持警觉，但在人际相处中则应保持宽容大度，不必对旁人无心的小瑕疵上纲上线。",
    "reflectionQuestion": "你最近是否察觉到身体、情绪或项目里的某个微小异常信号，却因为忙而选择了假装没听见？",
    "source": "《后汉书·丁鸿传》及宋代司马光《资治通鉴》（「防微杜渐，忧在未萌」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "qian-li-zhi-di-kui-yu-yi-xue"
    ]
  },
  {
    "id": "yin-di-zhi-yi",
    "text": "因地制宜",
    "category": "chengyu",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "田野与农作"
    ],
    "plainExplanation": "根据不同地域的具体地形、土壤、气候等客观实际条件，制定与之相适应的措施与办法，不搞生搬硬套。",
    "storyTitle": "南北坡果园的差异化引种",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "返乡创业的小孙承包了村里一座小山丘，起初想偷懒省事，准备在南坡和北坡全部统一种植网红阳光玫瑰葡萄。",
        "visual": {
          "scene": "mountain",
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
        "scene": "field",
        "text": "老农艺师带着他实地测土温、看日照：南坡光照充足但土层薄且排水快，北坡阴凉湿润且腐殖土深厚。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "acting"
            }
          ],
          "props": [
            "fruit"
          ],
          "focusProp": "fruit",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "field",
        "text": "小孙听从建议放弃了一刀切方案：在向阳抗旱的南坡种柑橘与金银花，在温凉湿润的北坡林下立体套种赤灵芝与淫羊藿。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "discovering"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "market",
        "text": "两年后南坡柑橘甜度爆表、北坡林下药材长势喜人，小孙感叹顺应每块土地的脾气才能让山林真正生金。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
    "interpretation": "外地成功的经验、书本上的标准答案，一旦脱离了具体的水土环境，就可能水土不服。先俯下身子摸清脚下这片土地的真实禀赋，再裁剪出合身的方案，才是务实的智慧。",
    "limits": "因地制宜强调方案对具体环境的适配性，但涉及国家法律法规、质量安全底线等刚性准则时，必须严格遵守，不可借口特殊搞变通。",
    "reflectionQuestion": "你在借鉴别人的成功经验或管理方法时，是否先评估过自己的现实条件与对方有哪些不同？",
    "source": "汉代赵晔《吴越春秋·阖闾内传》（「夫筑城郭，立仓库，因地制宜，岂有天气之数以威邻国者乎？」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "ji-si-guang-yi",
    "text": "集思广益",
    "category": "chengyu",
    "tags": [
      "合作与分工",
      "沟通与表达",
      "团队合作"
    ],
    "plainExplanation": "广泛汇集众人的智慧与意见，吸取各方面的合理建议，从而取得更周全、更优良的效果。",
    "storyTitle": "社区口袋公园改造的居民圆桌会",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "park",
        "text": "街道准备把街角一块荒废空地改造成口袋公园，设计师最初闭门画了一套全是硬质几何铺装与观赏草坪的方案。",
        "visual": {
          "scene": "park",
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
        "scene": "courtyard",
        "text": "动工前居委会老周组织了一场居民议事会，请来带娃宝妈、轮椅老人、夜跑青年和环卫工一起看图提意见。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
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
        "text": "老人提出长椅需要加装扶手才好借力起身，宝妈建议把尖角花坛改为圆弧防撞边，环卫工提醒增设分类果皮箱与洗拖把池。",
        "visual": {
          "scene": "workshop",
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
        "scene": "park",
        "text": "设计师吸纳众议修改施工图，建成后的公园既美观又处处贴心实用，成了全街区人气最旺的温暖角落。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "zhou",
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
    "interpretation": "再聪明的专家也有视角盲区，因为没有人能亲历所有使用者的真实处境。放下「我最懂」的傲慢，把话筒递给真正身处其中的普通人，往往能收集到最接地气的真知灼见。",
    "limits": "集思广益重在广泛听取建设性视角，但汇总之后仍需有主心骨进行专业权衡与拍板，不能变成谁嗓门大就听谁的无休止扯皮。",
    "reflectionQuestion": "你最近负责的一项计划，如果请一位不同岗位或不同年龄段的使用者挑毛病，他可能会指出什么盲点？",
    "source": "三国蜀·诸葛亮《教与军师长史参军掾属》（「夫参署者，集众思，广忠益也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "qu-chang-bu-duan",
    "text": "取长补短",
    "category": "chengyu",
    "tags": [
      "合作与分工",
      "学习与积累",
      "自省与成长"
    ],
    "plainExplanation": "吸取别人的长处，用来弥补自己的短处；也指在合作中让不同专长的人优势互补。",
    "storyTitle": "新老搭档的科普短视频共创",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "博物馆安排老研究员陈老师与年轻编导小肖搭档做文物科普专栏，起初两人互相看不惯：一个嫌对方死板，一个嫌对方浮躁。",
        "visual": {
          "scene": "office",
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
        "text": "一次选题会上两人敞开心扉，发现陈老师肚子里有极其深厚的考古文献功底却不懂镜头语言，小肖擅长视觉剪辑与悬念叙事却常犯史实错误。",
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
        "scene": "phone",
        "text": "于是两人确立协作机制：陈老师把关史料考证与核心立意，小肖负责把晦涩文字转化为生动分镜与动画演示。",
        "visual": {
          "scene": "phone",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "phone"
          ],
          "focusProp": "phone",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "office",
        "text": "两人联合创作的青铜器系列短片既严谨扎实又妙趣横生，全网播放破千万，彼此也在合作中学到了对方的看家本领。",
        "visual": {
          "scene": "office",
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
    "interpretation": "世上没有全知全能的完人。用挑剔的眼光看搭档，看到的处处是短板；用互补的眼光看搭档，对方的长处恰好就是能帮你补齐拼图的宝藏。",
    "limits": "取长补短既包括团队分工中的优势互补，也要求个人主动学习他人的核心方法，不能把自身基础能力的缺失永远推给搭档代劳。",
    "reflectionQuestion": "在你身边的同事或家人中，谁身上有一项恰好能弥补你短板的优点？你向他请教过具体方法吗？",
    "source": "《孟子·滕文公上》（「今滕，绝长补短，将五十里也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "ze-shan-er-cong",
    "text": "择善而从",
    "category": "chengyu",
    "tags": [
      "自省与成长",
      "判断与偏见",
      "学习与积累"
    ],
    "plainExplanation": "看清并辨别出别人身上好的意见、方法或品行，就虚心坦诚地采纳并照着去做，不因面子或门户之见而抗拒。",
    "storyTitle": "车间班组长采纳新员工的摆放建议",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "老姜在机修车间当了十年班组长，工具架上的扳手与量具一直按购买先后顺序混放，大家找工具常要翻找半天。",
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
        "text": "刚入职两周的实习生小李大着胆子提议：按使用频率高低和尺寸大小重新分区，并在背板上画出工具轮廓阴影以便一眼看出缺失。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "office",
        "text": "有老工人觉得毛头小子瞎显摆，老姜却当场蹲在工具架前试了一下，爽快拍板：「谁的法子好就听谁的，咱们今天就按小李说的改！」",
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
        "text": "改造后班组每次交接班清点工具从十五分钟缩短到一分钟，车间里主动提合理化建议的风气也一下子活了起来。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "阻碍一个人进步的往往不是愚笨，而是「我资历比你老，怎么能听你的」那种脆弱的自尊心。把注意力从「这句话是谁说的」切换到「这个方法本身好不好」，就能随时随地汲取养分。",
    "limits": "择善而从的前提是具备甄别「何为善（合理有效）」的判断力，不可不加验证地盲目跟风。",
    "reflectionQuestion": "当一个资历不如你或平时与你有分歧的人提出一条好建议时，你能毫无芥蒂地当场采纳并肯定对方吗？",
    "source": "《论语·述而》（「三人行，必有我师焉：择其善者而从之，其不善者而改之」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jian-xian-si-qi",
    "text": "见贤思齐",
    "category": "chengyu",
    "tags": [
      "自省与成长",
      "学习与积累",
      "情绪与心态"
    ],
    "plainExplanation": "见到品德高尚或本领出众的人，就主动思考如何通过努力向他看齐，而不是心生嫉妒或自怨自艾。",
    "storyTitle": "技能大赛观摩席上的拆解笔记",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "在全市青年花艺与园艺造景大赛上，小童获得了三等奖，而同龄选手林悦的作品无论色彩层次还是节点绑扎都堪称惊艳，摘得桂冠。",
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
        "scene": "workshop",
        "text": "颁奖礼后有同伴酸溜溜地说林悦只是运气好抽到了好花材，小童却主动走到林悦的展位前，细心观察其枝条固定手法并诚恳请教。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "scene": "study",
        "text": "回到工坊后，小童把林悦在枯枝利用、水苔保水上的精妙细节整理成学习卡片，针对自己的薄弱项每天加练两小时。",
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
        "scene": "workshop",
        "text": "次年省赛上小童凭借扎实进阶的技艺斩获金奖，她感叹优秀同行不是用来嫉妒的对手，而是照亮自己前路的灯塔。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "面对身边比自己优秀的人，嫉妒者会想方设法贬低对方以维持心理平衡，而成长者则会把对方当成活生生的教材，拆解其背后的思维与功夫，化钦佩为行动。",
    "limits": "见贤思齐是学习他人内在的优秀品质与方法，而非生搬硬套别人的外在风格、从而迷失自己的独特性。",
    "reflectionQuestion": "最近有一位让你由衷佩服的人，他身上哪一个具体的行为习惯是你从明天起就可以开始效仿的？",
    "source": "《论语·里仁》（「子曰：见贤思齐焉，见不贤而内自省也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "fan-qiu-zhu-ji",
    "text": "反求诸己",
    "category": "chengyu",
    "tags": [
      "自省与成长",
      "情绪与心态",
      "沟通与表达"
    ],
    "plainExplanation": "遇到挫折或事情没办好时，先回过头来从自己身上寻找原因与可改进之处，而不是一味归咎于外界或他人。",
    "storyTitle": "社区读书会冷场后的复盘",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "梅姐满怀热情地在社区举办第一期经典读书会，结果到场居民寥寥无几，互动环节更是鸦雀无声，场面十分冷清。",
        "visual": {
          "scene": "study",
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
        "scene": "study",
        "text": "起初梅姐有些委屈，觉得现在的街坊们太浮躁、根本不爱读书；回家冷静下来后，她决定先从自己的组织方式上找原因。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
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
        "scene": "home",
        "text": "她发现自己选的书目过于艰深晦涩，且开场就照本宣科讲了四十分钟理论，完全没有结合居民关心的家庭与生活话题。",
        "visual": {
          "scene": "home",
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
        "scene": "study",
        "text": "第二期她改选贴近生活的散文集，准备了热茶点心，并以三个生活小问题引导大家聊亲身经历，活动室里顿时笑语盈盈、座无虚席。",
        "visual": {
          "scene": "study",
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
    "interpretation": "把失败归咎于「环境太差、别人太蠢」是最省力的心理防御，但也彻底交出了改变局面的主动权。反求诸己不是自我否定，而是寻找那个唯一掌握在自己手里的「可控变量」。",
    "limits": "反求诸己旨在提升自身的可控部分，但若遇到明显的外部系统性不公或他人恶意侵权，也应据理力争，不可陷入盲目自责。",
    "reflectionQuestion": "最近一件不太顺利的事情中，如果完全抛开外部客观困难，你自己掌握的那部分有哪些可以做得更好？",
    "source": "《孟子·离娄上》（「行有不得者皆反求诸己，其身正而天下归之」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "tui-ji-ji-ren",
    "text": "推己及人",
    "category": "chengyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "公共生活"
    ],
    "plainExplanation": "用自己的心意和感受去推想别人的处境与感受，设身处地为他人着想。",
    "storyTitle": "雨夜外卖箱旁的一杯热姜茶",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "rain",
        "text": "冬夜暴雨倾盆，老林点了一份急用退烧药和热粥，骑手小哥因为雨大路滑加上老小区门牌模糊，比预计时间晚到了十二分钟。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "lin",
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
        "scene": "kitchen",
        "text": "门打开时，浑身湿透的年轻骑手正连声道歉、神色惶恐地担心被差评罚款；老林想起自己儿子也在外地打拼奔波，心头一软。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "lin",
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
        "scene": "home",
        "text": "老林不仅没有责备，反而从厨房端出一早就煮好的热姜茶塞进骑手手里，又递上一条干毛巾让他擦擦头脸雨水。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "text": "之后老林还特意在订单备注里写下小区夜间的清晰绕行指路提示，方便后续每一位冒雨前来的配送员。",
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
    "interpretation": "冷漠往往源于只站在自己的需求里看问题。当我们试着问一句「如果此刻淋在雨里的是我自己或我的家人，我最需要什么」，苛责就会化作体谅，善意便有了具体的落点。",
    "limits": "推己及人是体恤他人的难处，但也需尊重个体差异，不可把「我喜欢这样，所以你也必须喜欢」强加于人。",
    "reflectionQuestion": "今天与你打交道的服务人员、同事或家人中，有谁正承受着某种不容易被看见的压力？",
    "source": "宋代朱熹《论语集注》（「推己及物，所谓恕也」），源于孔子「己所不欲，勿施于人」。",
    "sourceStatus": "classical"
  },
  {
    "id": "yan-chu-bi-xing",
    "text": "言出必行",
    "category": "chengyu",
    "tags": [
      "诚信与责任",
      "人际关系",
      "家庭与生活"
    ],
    "plainExplanation": "话一旦说出口，就一定要照着承诺去兑现落实，不打白条、不敷衍食言。",
    "storyTitle": "冒着小雨兑现的周日动物园之约",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "陈先生月初答应七岁女儿：只要她连续三周自己整理书包不赖床，月底周日就带她去市郊动物园看长颈鹿。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "rain",
        "text": "女儿认认真真坚持了二十一天，不料到了周日清晨天降淅沥小雨，且陈先生前晚加班颇感疲惫，妻子劝他改期算了。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "chen",
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
        "scene": "park",
        "text": "看着女儿眼巴巴守在玄关小雨靴旁的眼神，陈先生深知大人随口一次「下次吧」会击碎孩子对契约的信任，毅然起身备好雨衣出发。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "chen",
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
        "scene": "home",
        "text": "父女俩穿着雨衣在雨中动物园看到了长颈鹿，女儿更加笃信守诺的力量，此后凡事只要答应过大人也必定说到做到。",
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
    "interpretation": "在家庭教育与社会交往中，信任是一座用无数次「说到做到」一砖一瓦垒起来的塔，却可能因为几次轻率的食言而轰然倒塌。少许做不到的华丽承诺，多兑现说出口的每一句朴素诺言。",
    "limits": "若确实遭遇不可抗力无法按原计划履约，应第一时间坦诚说明原因并商定明确的补救时间，不可悄无声息地赖账。",
    "reflectionQuestion": "你最近有没有随口答应了家人或朋友一件「改天一起……」的小事，却一直没真正排进日程表？",
    "source": "《论语·子路》「言必信，行必果」流变，元明戏曲及家训常见。",
    "sourceStatus": "classical"
  },
  {
    "id": "kai-cheng-bu-gong",
    "text": "开诚布公",
    "category": "chengyu",
    "tags": [
      "沟通与表达",
      "合作与分工",
      "诚信与责任"
    ],
    "plainExplanation": "毫不隐瞒地袒露真诚心意，把真实的想法、困难与准则摆到台面上与人公正沟通。",
    "storyTitle": "合作项目延期风险的提前摊牌",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "老周带领团队承接了一批定制展览展柜制作，中期因上游环保阻燃板材批次抽检不合格返厂，工期面临延误五天的风险。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "office",
        "text": "团队里有人建议先瞒着甲方的项目经理，等最后两天实在赶不出来再找借口推脱；老周坚决否决了这种掩耳盗铃的做法。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
        "text": "老周当天带着质检报告和两套赶工补救方案主动约见甲方，坦诚说明原材返工的实情，提议核心主展区按期交付、次展区延后三天。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "office",
        "text": "甲方负责人非但没有发火，反而赞赏老周提前十天预警让他们有充足时间调整布展动线，双方配合得比以往更加紧密。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
    "interpretation": "在合作中，人们最怕的不是听到坏消息，而是到了最后一刻才发现被隐瞒欺骗。遇到困难时越早开诚布公、带着备选方案去沟通，就越能赢得对方的理解与共同解决问题的空间。",
    "limits": "开诚布公是指真诚透明地沟通问题与事实，不等于不顾场合与分寸地宣泄个人负面情绪或泄露涉密隐私。",
    "reflectionQuestion": "在目前的一项合作里，有没有什么你其实有些顾虑、却因为怕气氛尴尬而一直没摆上桌面明说的事？",
    "source": "《三国志·蜀志·诸葛亮传》评语（「诸葛亮之为相国也……开诚心，布公道」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-shen-zuo-ze",
    "text": "以身作则",
    "category": "chengyu",
    "tags": [
      "诚信与责任",
      "家庭与生活",
      "团队合作"
    ],
    "plainExplanation": "用自己实实在在的端正行动，作为要求或引导他人的榜样与准则。",
    "storyTitle": "客厅里的「无手机阅读一小时」",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "梅姐发现上初中的儿子一回家就捧着手机刷个不停，她催促责备了无数次「快去读书」，儿子却总是顶嘴：「你不也在刷手机吗？」",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "scene": "study",
        "text": "这句话点醒了梅姐，她意识到自己一边躺在沙发上看短视频、一边要求孩子专心啃书本，本身就毫无说服力。",
        "visual": {
          "scene": "study",
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
        "text": "从那天起，每晚八点到九点，梅姐和丈夫主动把手机锁进玄关抽屉，坐在餐桌旁安安静静翻阅纸质书并做摘抄。",
        "visual": {
          "scene": "study",
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
        "scene": "home",
        "text": "没有一句说教，仅仅过了四天，儿子也自然而然地把手机放进抽屉，抱着历史读物坐到了父母身边。",
        "visual": {
          "scene": "home",
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
    "interpretation": "行动是无声却最响亮的语言。无论在家庭教育还是团队管理中，要求别人做到的事自己先做到一百分，远比站在道德高地上千叮万嘱有效得多。",
    "limits": "以身作则重在在基本品格、自律习惯上率先垂范，并非要求管理者事必躬亲地包揽所有下属的具体业务细节。",
    "reflectionQuestion": "你平时最常要求孩子、家人或下属改掉的那个毛病，你自己平时是否也偶尔会犯？",
    "source": "《论语·子路》（「其身正，不令而行；其身不正，虽令不从」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shi-ke-er-zhi",
    "text": "适可而止",
    "category": "chengyu",
    "tags": [
      "得失与取舍",
      "情绪与心态",
      "消费与欲望"
    ],
    "plainExplanation": "事情做到恰当、合适的程度就主动停下来，不贪多求满、不过度透支。",
    "storyTitle": "周末大扫除与家人的精力边界",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "以往每次周末大扫除，老林总要较真地把全屋柜顶、窗缝、厨房油网在同一天全部拆洗干净，结果全家累得腰酸背痛还常因疲惫拌嘴。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "scene": "kitchen",
        "text": "今年立夏整理家务时，老林定下了「适可而止」的新规矩：每次大扫除只专注清理一个重点区域，满两小时准时收工休息。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "lin",
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
        "scene": "courtyard",
        "text": "这周六全家人只花了两小时把厨房和冰箱整理得清清爽爽，余下的下午时光一起在院子里泡茶聊天、给花草浇水。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
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
        "scene": "home",
        "text": "家里不仅在接下来的三周里分批变得整洁有序，全家人更把做家务从一场苦役变成了轻松愉快的周末仪式。",
        "visual": {
          "scene": "home",
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
    "interpretation": "过犹不及。无论是运动健身、饮食消费、开玩笑还是推进工作，一旦越过了那个恰到好处的临界点，原本有益的事就会反过来损耗身心与关系。懂得在八分饱、八分满时微笑收手，是长久之道。",
    "limits": "适可而止是针对贪多透支与过度紧绷的调节智慧，在面对核心安全底线或关键技术攻关时，仍需全力以赴不可敷衍。",
    "reflectionQuestion": "在你的日常作息、聚会娱乐或运动锻炼中，哪件事如果能提前半小时「见好就收」，第二天状态会好得多？",
    "source": "宋代朱熹《论语集注》及《古今小说》（「凡事适可而止，不可过分」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-ye-zhang-mu",
    "text": "一叶障目，不见泰山",
    "category": "chengyu",
    "tags": [
      "判断与偏见",
      "自省与成长",
      "得失与取舍"
    ],
    "plainExplanation": "一片小小的树叶挡在眼前，就连巍峨高耸的泰山都看不见了；比喻被局部、细微或眼前的表象所迷惑，看不清事物的全局与长远大势。",
    "storyTitle": "为省五元运费绕路两小时",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "phone",
        "text": "小肖在网上买一袋二十五元的猫砂，结算时发现差三元不够包邮要收五元运费，顿时觉得这五块钱花得太冤。",
        "visual": {
          "scene": "phone",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "street",
        "text": "为了省下这五元运费，他退掉网购单，大热天骑着自行车穿过半个城区去批发市场自提，来回足足花了两个半小时。",
        "visual": {
          "scene": "street",
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
        "scene": "market",
        "text": "路上他口渴买了一瓶六元的冰饮，回来后又累得中暑头晕，原本计划下午写完的兼职设计稿也因此延误被扣了五十元。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "home",
        "text": "小肖看着账单哭笑不得：眼里只死死盯着那五元运费的「树叶」，却把两个多小时宝贵时间和体力这座「泰山」给丢了。",
        "visual": {
          "scene": "home",
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
    "interpretation": "人的注意力像一束聚光灯，当它死死聚焦在某个微小的得失、一句刺耳的批评或一处局部瑕疵上时，周围更庞大的时间成本、健康代价与大局目标就会陷入视野盲区。常退后三步看全貌，才不会因小失大。",
    "limits": "跳出局部看全局，并不意味着可以彻底忽视关键细节，而是要分清「决定成败的核心细节」与「无关大局的枝节」。",
    "reflectionQuestion": "最近有没有哪件小事让你纠结了很久，如果放到一年后的时间尺度来看，它其实根本不值一提？",
    "source": "《鹖冠子·天则》（「一叶蔽目，不见太山；两豆塞耳，不闻雷霆」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yin-xiao-shi-da"
    ]
  },
  {
    "id": "yin-xiao-shi-da",
    "text": "因小失大",
    "category": "chengyu",
    "tags": [
      "得失与取舍",
      "消费与欲望",
      "谨慎与风险"
    ],
    "plainExplanation": "为了贪图一点眼前的微小便宜或利益，结果造成整体上重大的损失。",
    "storyTitle": "三元杂牌插座引发的冰柜停机",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "孙老板给店里新添了一台四千多元的商用冷鲜冰柜，买配套插线板时，嫌三十五元的国标铜芯插座贵，在地摊买了个九块九的杂牌货。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
        "scene": "kitchen",
        "text": "用了一个月后，夏夜高负荷运转时杂牌插座内部劣质铝片发热熔毁跳闸，整台冰柜断电停机了一整夜。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "次日早晨孙老板开门一看，冰柜里价值两千多元的高端冷鲜牛排全部化冻变质，连冰柜压缩机启动器也被瞬时电流击穿。",
        "visual": {
          "scene": "workshop",
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
        "text": "算完维修费与货损账，孙老板悔不当初：为省二十五块钱插座钱，赔进去两千多块，当即把店里所有杂牌插座全部换成了国标正品。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
    "interpretation": "小便宜往往挂着最诱人的价格标签，却把高昂的风险隐匿在背面。在关乎安全、健康、核心设备与信誉的环节上，省下的几块钱往往会在日后以百倍的代价讨还回去。",
    "limits": "戒除因小失大是指不在关键底座上贪便宜，日常非核心消耗品通过正常比价节约开支则属于理性节俭。",
    "reflectionQuestion": "在你的生活或工作中，有没有哪个关乎安全或健康的环节，目前还在凑合使用廉价劣质的替代品？",
    "source": "《吕氏春秋·权勋》及清代李宝嘉《官场现形记》（「你要晓得因小失大，划不来」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "zhi-yan-bu-hui",
    "text": "直言不讳",
    "category": "chengyu",
    "tags": [
      "沟通与表达",
      "诚信与责任",
      "人际关系"
    ],
    "plainExplanation": "说话坦率直接，对存在的问题或缺点毫不隐瞒避忌地指出来。",
    "storyTitle": "宣传册付印前的错字直谏",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "机构五周年纪念画册即将下厂付印五千册，审稿会上大家都围着主编客套夸赞版式大气、色彩精美，一片和气。",
        "visual": {
          "scene": "office",
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
        "scene": "office",
        "text": "负责校对的陈姐仔细翻阅清样后，顶着破坏气氛的压力直言指出：扉页导言里有两处历史年份换算错误，且封底地图图例漏标。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "chen",
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
        "scene": "workshop",
        "text": "主编起初脸上有些挂不住，但当场核对原始档案后惊出一身冷汗——若这五千册带错画册发往外单位，将酿成严重的学术笑话。",
        "visual": {
          "scene": "workshop",
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
        "scene": "office",
        "text": "主编当众向陈姐鞠躬致谢，立刻叫停印刷连夜修正清样，并立下规矩：今后审稿会不讲客套话，只奖挑出硬伤的直言者。",
        "visual": {
          "scene": "office",
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
    "interpretation": "真正的负责不是一团和气地顺情说好话，而是在问题尚未造成不可挽回的后果前，敢于顶着尴尬把真相指出来。直言或许一时拂逆人意，却是对事业和同伴最深沉的保护。",
    "limits": "直言不讳的重点在于「对事不对人、客观指出具体问题」，绝不是借心直口快之名行鲁莽刻薄、当众羞辱他人之实。",
    "reflectionQuestion": "当团队或朋友的方案存在明显硬伤而大家都在客套夸赞时，你敢用温和而坚定的方式把那个硬伤指出来吗？",
    "source": "《晋书·刘波传》及唐代刘知几《史通·直书》（「直言不讳，实录无隐」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "he-er-bu-tong",
    "text": "和而不同",
    "category": "chengyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "合作与分工"
    ],
    "plainExplanation": "在人际相处与合作中保持真诚融洽、相互尊重，但同时保留各自独立的见解与个性，不盲目附和苟同。",
    "storyTitle": "两位老友的评茶论道",
    "sceneDomain": "朋友交往",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老周酷爱武夷岩茶的醇厚岩韵，老友老林则独钟西湖龙井的鲜爽豆香，两人相交三十年，口味与治学路数截然不同。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
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
        "text": "每次周末茶聚，两人常就一首古诗的注解或一款茶的焙火轻重激烈争辩，谁也不肯违心顺着对方说半句敷衍话。",
        "visual": {
          "scene": "market",
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
        "scene": "courtyard",
        "text": "但争辩归争辩，每逢老林出差路过闽北，必定帮老周捎带地道正岩茶；老周去杭州讲学，也总不忘为老林寻访狮峰新茶。",
        "visual": {
          "scene": "courtyard",
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
        "text": "旁人好奇他们为何吵了三十年还这么铁，老周笑道：正因为不必强迫对方变成自己的影子，这份情谊才格外轻松纯粹。",
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
    "interpretation": "不成熟的关系往往要求「你必须和我喜欢一样的东西、持一样的观点」，把一致当成忠诚。而高层次的君子之交，是既能真诚欣赏彼此的差异，又能在不同声音的碰撞中守住互相尊重的温情。",
    "limits": "和而不同是在多元见解中保持友善包容，但在涉及大是大非与法律道德底线时，则必须旗帜鲜明，不可模糊原则。",
    "reflectionQuestion": "面对身边与你生活习惯或观点明显不同的亲友，你能否做到「不强行说服对方，但依然愉快相处」？",
    "source": "《论语·子路》（「子曰：君子和而不同，小人同而不和」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jiang-xin-bi-xin",
    "text": "将心比心",
    "category": "chengyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "家庭与生活"
    ],
    "plainExplanation": "拿自己的心去比照别人的心；指遇事从对方的角度与难处去体会理解，用自己希望被对待的方式去对待他人。",
    "storyTitle": "婆媳同住屋檐下的作息约定",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "婆婆刚从老家搬来同住时，习惯早晨五点半起床在厨房剁肉馅、开吸油烟机做早饭，上夜班才睡下的儿媳梅姐常被惊醒。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "kitchen",
        "text": "梅姐没有带着起床气去指责婆婆，而是想到母亲辈一辈子勤快惯了，早起做饭本是一片心疼晚辈的好意，只是不了解夜班的疲惫。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "mei",
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
        "scene": "courtyard",
        "text": "周末午后梅姐陪婆婆喝茶聊天，先真诚感谢婆婆每天变着花样做饭的辛劳，再轻声说起自己凌晨两点才下班的睡眠难处。",
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
        "text": "婆婆听后满是心疼，主动把早饭改成了静音预约电饭煲熬粥，梅姐也在下班回家时特意轻手轻脚不吵醒浅眠的婆婆。",
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
    "interpretation": "家庭里许多委屈，都源于「我明明是为你好，你怎么还不领情」的错位。将心比心，就是先看见对方行为背后的善意与习惯，再用温和的沟通搭起彼此体谅的桥梁。",
    "limits": "将心比心需要双方共同的善意回应；若对方长期恶意越界、索取无度，则应明确立规矩而非单方面无限退让。",
    "reflectionQuestion": "在与家人的日常相处中，有没有哪件让你觉得烦心的事，如果站在对方的年龄和经历去看，其实是可以理解的？",
    "source": "宋代朱熹《朱子语类》及南宋释普济《五灯会元》（「将心比心，他心即我心」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "tui-ji-ji-ren"
    ]
  },
  {
    "id": "wen-guo-ze-xi",
    "text": "闻过则喜",
    "category": "chengyu",
    "tags": [
      "自省与成长",
      "沟通与表达",
      "情绪与心态"
    ],
    "plainExplanation": "听到别人指出自己的过失或缺点，非但不恼羞成怒，反而因为获得了改正进步的机会而满心欢喜。",
    "storyTitle": "面馆老板的「意见赠卤蛋」牌",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "陈师傅新开的牛肉面馆生意平平，一天有位老食客结账时直言不讳：「你家面条筋道，但汤头酱油味太重盖住了牛骨香，萝卜也切得太厚不入味。」",
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
        "text": "店员在旁听得直皱眉，陈师傅却眼睛一亮，连忙请老食客坐下细问，当场送上一碟小菜道谢，并在后厨连夜按建议调整高汤配比与刀工。",
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
        "text": "尝到甜头的陈师傅干脆在收银台立了块木牌：「凡指出本店汤头、面条或卫生具体不足者，查实即赠卤蛋一枚。」",
        "visual": {
          "scene": "market",
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
        "scene": "home",
        "text": "短短三个月，面馆在食客们的真诚挑刺下改掉了十几个细节毛病，成了整条街回头客最多的金牌面馆。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
              "pose": "relieved"
            }
          ],
          "props": [
            "pen"
          ],
          "focusProp": "pen",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "赞美的话听着舒坦，却很少能帮我们长本事；反倒是那些指出具体短板的逆耳之言，等于免费帮我们做了一次体检。克服被批评时的本能防御，把挑刺者当成帮自己擦镜子的人，成长速度会快上一倍。",
    "limits": "闻过则喜针对的是有事实依据的建设性批评；对于毫无根据的人身攻击或恶意发泄，无需照单全收。",
    "reflectionQuestion": "回想最近一次别人对你工作或生活提出的批评，抛开对方说话的语气，里面有哪三成事实是值得你吸收改进的？",
    "source": "《孟子·公孙丑上》（「子路，人告之以有过，则喜」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "qin-neng-bu-zhuo",
    "text": "勤能补拙",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "后天的勤奋刻苦与反复磨练，完全可以弥补先天资质或手感上的笨拙与不足。",
    "storyTitle": "陶艺工坊里三百只拉坯练习碗",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "小童初学手工陶艺拉坯时，手指协调性远不如同期学员，别人三天就能拉出端正的茶杯，她拉出的泥坯总是歪斜坍塌。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "text": "她没有抱怨自己手笨，而是向师父申请每天晚上下课后留守工坊两小时，把白天的废泥重新揉练，反复体会手掌中心力道与转盘转速的配合。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "text": "整整两个月，她在练习架上摆满了三百只记录着自己失败与改进轨迹的素坯碗，双手磨出了厚茧，手指对泥土厚薄的感知却变得无比敏锐。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
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
        "scene": "workshop",
        "text": "结业展上，小童拉出的薄胎青瓷碗胎壁均匀透光、弧线温润饱满，连当初最灵巧的同学都惊叹不已。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "绝大多数技艺与专业工作，远未达到拼绝对天赋的程度，比拼的往往是谁愿意耐着性子把基本动作重复一千遍。承认自己起步慢一點，然后用扎扎实实的练习量去喂养手感，拙劲终会化为巧劲。",
    "limits": "勤能补拙中的「勤」必须是带着思考与反馈的刻意练习，而不是闭着眼睛把错误的动作机械重复一万遍。",
    "reflectionQuestion": "你有没有哪项曾经觉得自己「天生不擅长」的技能，后来通过老老实实多练几十遍而掌握了门道？",
    "source": "唐代白居易《偷闲走笔题 Let》及宋代邵雍《弄笔吟》（「弄假像真终是假，将勤补拙总输勤」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ben-niao-xian-fei-zao-ru-lin"
    ]
  },
  {
    "id": "wen-gu-zhi-xin",
    "text": "温故知新",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "自省与成长",
      "判断与偏见"
    ],
    "plainExplanation": "重温过去学过的旧知识或经历过的旧案例，能够在新的阅历视角下领悟出全新的道理与见解。",
    "storyTitle": "十年后重读专业基础教材的顿悟",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "结构工程师老周工作十年后遇到了一个复杂连廊抗震设计的瓶颈，翻遍了最新行业论文也没找到简洁的化解思路。",
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
        "scene": "office",
        "text": "周末整理书柜时，他偶然翻出大学二年级那本页面泛黄、记满铅笔笔记的《材料力学》与《结构力学》基础教材。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
        "text": "带着十年工程实战经验重新细读当年死记硬背的虚功原理与变形协调方程，他突然看懂了公式背后精妙的物理直觉。",
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
        "scene": "school",
        "text": "老周受此启发顺藤摸瓜，用最简洁的传力路径解开了连廊节点难题，感慨旧书重读竟像老友重逢般处处是新意。",
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
    "interpretation": "知识不是一次性消费品。初学时我们往往只看懂了字面规则，唯有在经历了现实历练之后回望经典与基础，旧知才会与新阅历发生化学反应，生长出通透的智慧。",
    "limits": "温故是为了知新与启发当下，而不是沉溺于过去的旧经验而拒绝吸收时代发展的新知。",
    "reflectionQuestion": "有没有哪一本你几年前读过的书或学过的课程，如果带着你现在的经历重看一遍，会有完全不同的体会？",
    "source": "《论语·为政》（「子曰：温故而知新，可以为师矣」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "rong-hui-guan-tong",
    "text": "融会贯通",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "把不同领域的知识、方法或道理融合汇聚在一起，彻底理清其底层的共同逻辑，从而达到全面透彻的领悟与运用。",
    "storyTitle": "将木工榫卯融入现代展架设计",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "工业设计师老姜接手了一款环保快闪店展架的设计任务，要求不用一颗铁钉和胶水，且能在半小时内徒手拆装完毕。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
              "pose": "hesitating"
            }
          ],
          "props": [
            "wood"
          ],
          "focusProp": "wood",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "单纯套用现代五金件结构怎么也达不到免工具要求，老姜便想起自己业余钻研过的传统徽派古建筑鲁班锁与燕尾榫。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "jiang",
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
        "text": "他把中国传统穿斗式木构的楔钉咬合原理，与现代模块化铝合金型材的受力分析结合起来，打通了两者的结构逻辑。",
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
        "scene": "office",
        "text": "设计出的展架仅靠三根插销便稳固承重两百斤，拆卸后平铺一箱即可运走，完美展现了跨界知识的贯通之力。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
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
    "interpretation": "孤立的知识点就像散落的珍珠，只有用底层逻辑的丝线将它们穿引起来，才能在面对全新的复杂问题时自由调用。跨领域的迁移与类比，是检验是否真正学透的试金石。",
    "limits": "融会贯通必须建立在对各门具体知识先有扎实掌握的基础上，不可在每个领域都只懂皮毛时就空谈跨界融合。",
    "reflectionQuestion": "你掌握的业余爱好或生活技能中，有没有哪一条原理其实可以迁移运用到你的本职工作里？",
    "source": "宋代朱熹《朱子全书·学六》（「举一而反三，闻一而知十，乃学者用功之深，穷理之熟，然后能融会贯通」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shen-si-shu-lv",
    "text": "深思熟虑",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "判断与偏见",
      "自省与成长"
    ],
    "plainExplanation": "深入细致地思考，反复周密地权衡，把事情的来龙去脉与长远影响想得透彻成熟。",
    "storyTitle": "举家迁居异地前的半年考察表",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林一家去南方某海滨小城旅游了一周，被当地宜人的气候与低房价吸引，家人一时冲动想立刻卖掉老家房子搬过去定居。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "scene": "station",
        "text": "老林劝大家先把旅游滤镜摘下来，花半年时间做一次深思熟虑的实地考察：不仅看春暖花开，更要看梅雨季的潮湿与冬季的医疗配套。",
        "visual": {
          "scene": "station",
          "characters": [
            {
              "id": "lin",
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
        "scene": "street",
        "text": "他在那座小城短租了两个月，实地走访了三甲医院距离、菜市场物价以及外地老人医保异地结算的具体流程。",
        "visual": {
          "scene": "street",
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
        "scene": "home",
        "text": "全面权衡利弊后，一家人决定保留老家住房、每年只在春秋两季去海滨旅居两个月，既享受了风光又保住了医疗与亲缘根基。",
        "visual": {
          "scene": "home",
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
    "interpretation": "「一眼心动」往往只看见了事物最光鲜的切面，而真正的生活是由三百六十五天的柴米油盐与突发状况构成的。在重大人生迁徙或转折前，把四季的冷暖与底层的配套想透，才不会事后追悔。",
    "limits": "深思熟虑重在考察真实核心维度，而非在细枝末节上无休止地纠结内耗。",
    "reflectionQuestion": "如果把你当前正在考虑的一个大决定放进「五年后」的日常场景里去检验，它最可能面临的现实挑战是什么？",
    "source": "《战国策·秦策一》及汉代贾谊《过秦论》（「深谋远虑，行军用兵之道」流变）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "san-si-er-hou-xing"
    ]
  },
  {
    "id": "quan-heng-li-bi",
    "text": "权衡利弊",
    "category": "chengyu",
    "tags": [
      "得失与取舍",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "像用秤称量轻重一样，全面比较一件事情各个方面的好处与弊端，从而做出最切合核心目标的取舍。",
    "storyTitle": "老旧社区书店选址的取舍账",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "老周准备开设第二家社区阅读空间，手里有两个备选铺面：A铺位于繁华商业街口，人流极大但房租高昂且全天嘈杂；B铺在安静老社区内街，租金仅一半但自然过路客少。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "zhou",
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
        "text": "团队为此争执不下，老周拿出一张白纸，紧扣「能否让读者静心阅读并实现五年可持续经营」的核心目标列出利弊权重。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "zhou",
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
        "text": "分析发现：A铺的高昂租金会迫使书店沦为卖网红饮品的打卡店，背离初衷；B铺虽需花力气靠社群活动引流，但安静低成本恰是深度阅读的命脉。",
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
        "scene": "study",
        "text": "老周果断签下B铺，把省下的租金投入到高品质选书与作家沙龙中，半年后老街书房成了全城爱书人专程探访的静谧绿洲。",
        "visual": {
          "scene": "study",
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
    "interpretation": "世上几乎没有「既要租金极低、又要闹市核心、还要绝对安静」的完美选项。权衡利弊的本质，是先明确自己最不可妥协的核心价值是什么，然后坦然接受次要维度上的不完美。",
    "limits": "权衡利弊适用于正当利益与方案优劣的比较；面对违法乱纪或违背良知的事，应一票否决，不可拿去与金钱利益做权衡。",
    "reflectionQuestion": "在你目前纠结的两个选择中，你最不能放弃的那个核心底线究竟是什么？",
    "source": "《淮南子》及唐代陆贽《均节赋税恤百姓六条》（「权轻重之宜，衡利害之节」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jiao-ta-shi-di",
    "text": "脚踏实地",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "诚信与责任",
      "工作与职业"
    ],
    "plainExplanation": "双脚稳稳地踩在坚实的土地上；比喻做人做事认真踏实、一步一个脚印，不搞花架子，不慕虚名。",
    "storyTitle": "农技员泥腿子里的测土配方",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "县农技站来了两位大学毕业生：小赵整天待在空调房里抄报告、做华丽的演示文稿，小孙则天天卷起裤腿跟着老农下田挖土样。",
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
        "scene": "field",
        "text": "小孙花了整整一季，把全乡十二个村、三百多块农田的酸碱度、有机质含量与往年病虫害实况测了个底朝天，鞋底磨破了两双。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
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
        "scene": "study",
        "text": "秋播时爆发罕见根腐病，小赵纸上谈兵的通用方案完全失效，小孙却根据各村土壤底账精准开出差异化轮作与生防处方。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "sun",
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
        "scene": "field",
        "text": "农户们保住了收成，一提到小孙就竖大拇指：「那个两腿泥巴的后生，说出来的话句句管用！」",
        "visual": {
          "scene": "field",
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
    "interpretation": "飘在半空中的概念再动听，落不到泥土里也结不出一粒粮食。无论从事什么行业，真正能帮人解决问题、赢得长久尊重的，永远是深入一线摸清实情的笨功夫。",
    "limits": "脚踏实地强调务实笃行，但并不排斥仰望星空的长远视野与科学理论指导，实干与远见本应相辅相成。",
    "reflectionQuestion": "在你目前负责的事务中，你最近一次亲自深入一线去接触最原始的细节或用户是什么时候？",
    "source": "宋代邵伯温《邵氏闻见前录》卷十八（司马光评苏轼、范祖禹语流变，强调踏实笃行）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shen-zhong-qi-shi",
    "text": "慎重其事",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "诚信与责任",
      "做事与执行"
    ],
    "plainExplanation": "对所经办的事情抱持高度严肃、敬畏和认真的态度，绝不马虎草率。",
    "storyTitle": "老钟表匠交接传家怀表的仪式",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "一位老先生捧着父亲留下的七十年前停摆机械怀表来到修理铺，眼含期盼地请陈师傅设法修复这份家族念想。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
              "pose": "hesitating"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "workshop",
        "text": "哪怕只是一单收费不高的普通维修，陈师傅也慎重其事：先戴上白手套在绒布盘上拍照留存每一处原始划痕，再与客人逐项签字确认。",
        "visual": {
          "scene": "workshop",
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
        "scene": "study",
        "text": "拆解洗油的五天里，他把六十多个微米级齿轮逐一放进专用分格盒编号，连更换下来的一根断裂发条也用小袋封好归还物主。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
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
        "text": "当怀表重新发出清脆匀称的滴答声交还到老人手中时，老人看着那份详尽的保养手记感动得久久握住陈师傅的手。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "你对待手中事务的郑重程度，直接定义了你的人格分量。把别人托付的小事当成大事来办，用一套严谨规范的流程护住每一个细节，这份敬畏心自会让平凡的工作生出光彩。",
    "limits": "慎重其事是指对品质与责任的敬畏，不等于在日常简单沟通中故作高深、繁文缛节。",
    "reflectionQuestion": "别人交给你经手的一件普通事务，你有没有哪些细节处理能让对方一眼感受到你的郑重与可靠？",
    "source": "《三国志·魏书》及明清公牍常见成语，强调处事审慎郑重。",
    "sourceStatus": "classical"
  },
  {
    "id": "tong-zhou-gong-ji",
    "text": "同舟共济",
    "category": "chengyu",
    "tags": [
      "合作与分工",
      "团队合作",
      "人际关系"
    ],
    "plainExplanation": "坐同一条船的人齐心协力一起渡过江河；比喻在面临共同困难或险境时，大家放下成见、团结互助，共同渡过难关。",
    "storyTitle": "暴雨夜农贸市场商户的联手排涝",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "老街农贸市场里，卖干货的老姜与对门卖粮油的老李平时常因门口卸货占道拌嘴，互相憋着一股劲。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "rain",
        "text": "夏夜突降百年一遇的特大暴雨，市场北侧排水沟被冲倒的树木堵死，积水眼看就要漫过门槛淹没两家仓库。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "market",
        "text": "危急关头老姜主动扛起自家备用的大功率抽水泵冲出来，大喊一声：「先别管平时那些磕碰，保住整排铺子的货要紧！」",
        "visual": {
          "scene": "market",
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
        "scene": "street",
        "text": "老李立刻搬出自家全部沙袋，整条通道十二家商户挑灯并肩筑坝、轮流抬高货架，奋战到天明保住了所有人的心血。",
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
    "interpretation": "当众人身处同一条船上时，船若漏水，没有任何一个舱位能独善其身。在共同危机面前放下平日的鸡毛蒜皮，把力气拧成一股绳去堵漏划桨，是既救人又自救的大智慧。",
    "limits": "同舟共济不仅应在危难时刻显现，顺境中也应建立公平的责任分担机制，避免有人只坐船不划桨。",
    "reflectionQuestion": "在你所在的家庭或工作团队遇到外部压力时，大家的第一反应是互相指责抱怨，还是先并肩把难关扛过去？",
    "source": "《孙子兵法·九地》（「夫吴人与越人相恶也，当其同舟而济，遇风，其相救也如左右手」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ren-xin-qi-tai-shan-yi"
    ]
  },
  {
    "id": "ge-si-qi-zhi",
    "text": "各司其职",
    "category": "chengyu",
    "tags": [
      "合作与分工",
      "团队合作",
      "做事与执行"
    ],
    "plainExplanation": "每个人都专心负责好自己分内的职务与环节，不越位乱指挥、也不缺位推诿，使整体高效运转。",
    "storyTitle": "社区义诊现场的有序分流",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "去年社区举办春季老年义诊，五个志愿者没有明确分工，一窝蜂围着登记台转，结果量血压和领资料的地方排起长龙乱成一团。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
        "text": "今年梅姐担任领队，提前按每人特长定岗定责：小肖守在入口引导分流，老林负责叫号维持秩序，她自己专责核对登记慢性病卡。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
        "scene": "office",
        "text": "活动开始后，遇到老人咨询专业用药，志愿者绝不越界乱答，而是统一引导至专科医生诊桌前，每个人把自己的环节守得滴水不漏。",
        "visual": {
          "scene": "office",
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
        "scene": "courtyard",
        "text": "一上午两百多位老人全部顺畅完成体检，耗时比去年缩短一半，老人们连夸今年的队伍像精密齿轮一样稳当。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "好的团队协作不是所有人一窝蜂去抢同一个球，而是像交响乐团一样各守谱面、各司其职。相信搭档能守住他的防线，同时把自己这一环做到极致，整体效能才能最大化。",
    "limits": "各司其职强调权责清晰，但遇到两不管的突发交界地带时，仍需有主动补位意识，不可沦为冷漠的部门墙。",
    "reflectionQuestion": "在你参与的家庭家务或团队项目里，是否因为分工边界模糊而出现过「有人累死、有人闲看」的情况？",
    "source": "《礼记》及汉代史书常见词汇，强调职责分明。",
    "sourceStatus": "classical"
  },
  {
    "id": "gu-quan-da-ju",
    "text": "顾全大局",
    "category": "chengyu",
    "tags": [
      "得失与取舍",
      "合作与分工",
      "团队合作"
    ],
    "plainExplanation": "从整体的、长远的利益出发去考虑和行事，在必要时主动放下局部或个人的小得失。",
    "storyTitle": "老街管网改造中的店铺让道",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "老街实施百年雨污管网全面翻修，施工主井恰好需要借用孙老板杂货店门前的两米宽台阶，工期预计十天。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "若坚决拦着不让开挖，整条老街六十户居民的防洪工程都要卡壳改线，工期将拖延两个月；若配合施工，自家店十天内进出稍有不便。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
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
        "scene": "street",
        "text": "孙老板权衡整条街的长远防洪安全，不仅主动拆掉自家临时雨棚让出作业面，还每天给施工师傅提供免费开水。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "sun",
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
        "scene": "market",
        "text": "因为场地敞亮顺畅，工程仅用七天便提前完工，铺设了崭新的青石板台阶，街坊们感激孙老板的大气，纷纷来他店里采购。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
    "interpretation": "局部利益与整体利益就像树枝与树干：树干若倒了，再繁茂的枝叶也无处依附。在关键时刻懂得收敛一点个人小算盘去成全整体大局，最终往往也会从大局的兴旺中获得更丰厚的回馈。",
    "limits": "提倡顾全大局绝不是无视个体合法权益或道德绑架弱者白白牺牲，组织方也应对让步者给予合理补偿与尊重。",
    "reflectionQuestion": "当个人的一点临时便利与团队或社区的整体推进发生冲突时，你能否痛快地先为大局让一步路？",
    "source": "清代吴趼人《二十年目睹之怪现状》等近代文献常见成语。",
    "sourceStatus": "classical"
  },
  {
    "id": "you-bei-wu-huan",
    "text": "有备无患",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "时间与耐心",
      "做事与执行"
    ],
    "plainExplanation": "事先做好充分的准备与预案，到了临场就能避免祸患与狼狈。",
    "storyTitle": "长途火车上的儿童应急百宝袋",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "station",
        "text": "梅姐带着五岁幼子乘十小时高铁回老家，出发前一天按清单在背包侧袋装好了退烧贴、口服补液盐、两本全新贴纸书和一件薄外套。",
        "visual": {
          "scene": "station",
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
        "text": "同行的表妹笑她出门像搬家；谁知列车开出三小时后，车厢空调冷风强劲，邻座几个孩子无聊哭闹，自家孩子也有点轻微晕车。",
        "visual": {
          "scene": "station",
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
        "scene": "home",
        "text": "梅姐从容地给孩子披上薄外套，贴上防晕贴，又拿出从未拆封的新贴纸书，孩子安安静静玩了一路，邻座小朋友也被吸引过来。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "text": "一路平安抵达终点站，表妹彻底服气：原来旅途的优雅从容，全藏在出发前多想一步的准备袋里。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "世事难料，但我们应对无常的能力是可以提前储备的。多备一份方案B、多存一点应急粮草，也许十次里有九次用不上，但只要用上一次，就能帮你稳稳托住局面。",
    "limits": "有备无患强调针对常见关键风险做精简实用的准备，不必为了极小概率事件把行囊塞得寸步难行。",
    "reflectionQuestion": "你下一次重要出行或重要汇报前，最值得放进「应急百宝袋」里的那件备用物或备用方案是什么？",
    "source": "《尚书·说命中》（「惟事事，乃其有备，有备无患」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wei-yu-chou-mou",
      "fan-shi-yu-ze-li-bu-yu-ze-fei"
    ]
  },
  {
    "id": "ri-ji-yue-lei",
    "text": "日积月累",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "一天天、一月月地持续积累下去；形容经过长期不懈的沉淀，点滴汇聚成深厚的功底。",
    "storyTitle": "五年剪报本炼就的评论底蕴",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "青年编辑小周刚进报社时写评论常感词穷，总编没有给他开速成秘籍，只送他一把剪刀、一瓶胶水和几本牛皮纸空白册。",
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
        "scene": "study",
        "text": "从那天起，小周每天雷打不动精选两篇优质社论或深度报道剪贴入册，并在空白处用红笔写下三百字的结构拆解与批注。",
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
        "text": "春去秋来，牛皮纸册攒满了整整二十四大本，每一页都留着日期与思考的痕迹，他的知识库在岁月中悄然枝繁叶茂。",
        "visual": {
          "scene": "office",
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
        "scene": "study",
        "text": "第五年遇到重大突发公共议题，小周在两小时内写出引经据典、入木三分的千字社论，一鸣惊人背后的底气全在那二十四本剪报里。",
        "visual": {
          "scene": "study",
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
    "interpretation": "真正深厚的学养与手艺，从来没有一夜暴富的神话。它就像钟乳石的生长，每一滴水珠落下时似乎毫无变化，但日积月累之后，终会凝结成别人无法轻易复制的壁垒。",
    "limits": "日积月累贵在分类整理与消化思考，若只是只存不看地囤积网盘资料，则算不上真正的积累。",
    "reflectionQuestion": "如果你从今天开始建立一个属于自己的「每日微积累本」，你最想在里面持续记录什么内容？",
    "source": "宋代朱熹《答周南仲书》（「随时体究，随时讨论，但使日积月累，自然纯熟」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ji-shao-cheng-duo"
    ]
  },
  {
    "id": "jing-yi-qiu-jing",
    "text": "精益求精",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "工作与职业",
      "自省与成长"
    ],
    "plainExplanation": "本身已经做得很好、很精细了，却依然不满足于合格，继续钻研打磨以追求更高的品质境界。",
    "storyTitle": "手工竹笛调音师的零点一毫米",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "制笛师老陈做出的一批苦竹笛经电子校音器检测，音准已完全符合行业优等品标准，徒弟准备直接打包装箱发货。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "text": "老陈却拿起笛子逐支吹奏试听，指出其中三支高音区第六孔在极弱吹奏时音色略显干涩，决定用细砂卷对指孔内壁做零点一毫米的微调抛光。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "scene": "study",
        "text": "徒弟不解：「普通买家根本听不出这毫厘之差，何必多费半天工夫？」老陈答道：「客人也许说不出道道，但吹起来顺不顺气，身体最诚实。」",
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
        "scene": "park",
        "text": "正是这份在合格线之上再往前推一步的执着，让老陈的竹笛成了专业演奏家们一笛难求的传世精品。",
        "visual": {
          "scene": "park",
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
    "interpretation": "从「不及格」到「合格」靠的是遵守规范，而从「合格」到「卓越」靠的则是精益求精的匠心。不满足于「差不多能用就行」，在关键体验上多打磨那百分之五的细节，往往决定了平庸与一流的分水岭。",
    "limits": "精益求精应聚焦于决定核心品质与用户体验的关键处，避免在无关痛痒的细枝末节上陷入完美主义拖延。",
    "reflectionQuestion": "在你最拿手的一项工作里，如果要在「已经合格」的基础上再提升百分之十的品质，可以从哪个细节入手？",
    "source": "《论语·学而》朱熹注（「言治骨角者，既切之而复磋之；治玉石者，既琢之而复磨之，治之已精，而益求其精也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "zhuan-xin-zhi-zhi",
    "text": "专心致志",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "做事与执行",
      "时间与耐心"
    ],
    "plainExplanation": "把全部心思和意念都集中在一件事情上，心无旁骛，不受外界杂音干扰。",
    "storyTitle": "关掉消息弹窗的两小时深度写作",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "小肖以前写研究报告时，电脑上同时挂着三个聊天软件，手机放在手边每五分钟亮一次屏，结果一篇两千字的稿子磨蹭一整天还逻辑支离破碎。",
        "visual": {
          "scene": "office",
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
        "text": "后来他试着实行「番茄专注法」：每天上午九点到十一点，将手机调成静音锁进背包，电脑关闭一切社交网页，只留一个文档窗口。",
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
        "text": "起初前十五分钟心里还隐隐发痒想看消息，进入状态后文思如泉涌，原本要熬一整天的报告不到两小时便一气呵成。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "office",
        "text": "下班前打开手机一看，所谓错过的几十条群消息其实没有一条是真正十万火急的，專心致志反而让他每天多出了大把自由时光。",
        "visual": {
          "scene": "office",
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
    "interpretation": "现代人最大的精力损耗，往往不是工作本身太重，而是频繁在不同任务与碎片消息之间来回切换的「注意力残留」。一次只做一件事，给大脑留出不受打扰的深水区，才能体会到心流的愉悦。",
    "limits": "专心致志需要主动通过物理隔离减少干扰源，但在需要即时协同的应急值守岗位上则需保持通讯畅通。",
    "reflectionQuestion": "今天你能否给自己留出完整的六十分钟，把手机放到另一个房间，专心致志地只做完手头最重要的一件事？",
    "source": "《孟子·告子上》（「今夫弈之为数，小数也；不专心致志，则不得也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shen-ti-li-xing",
    "text": "身体力行",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "诚信与责任",
      "工作与职业"
    ],
    "plainExplanation": "亲自去体验、亲手去实践，用自己的实际行动去推行某种主张，而不是只停留在口头号召。",
    "storyTitle": "垃圾分类督导员的破袋示范",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "小区刚开始推行厨余垃圾破袋分类时，不少居民嫌脏嫌麻烦，把装满剩菜的塑料袋往桶边一丢就走，宣传栏贴满标语也无济于事。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "courtyard",
        "text": "六十五岁的楼长老林没有站在旁边背着手吹哨子训人，而是每天早晚高峰戴上橡胶手套守在分类亭旁，亲手帮居民解开袋口倾倒厨余。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "home",
        "text": "看到满头白发的老林不嫌脏累、还笑眯眯地教大家「捏住袋底两角一抖就不脏手」的小窍门，原本好面子的年轻住户纷纷红了脸。",
        "visual": {
          "scene": "home",
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
        "text": "不到半个月，整栋楼居民都养成了在家分好类、下楼主动破袋投递的习惯，老林用双手把口号变成了社区的新风尚。",
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
    "interpretation": "一千句高高在上的指点，抵不上一次弯下腰去的亲手示范。当你自己卷起袖子走进泥水里去干时，不仅能摸清执行中的真实痛点，更能唤起周围人心底最朴素的认同与跟进。",
    "limits": "身体力行重在关键环节的率先示范与摸底，待机制成熟后仍应转化为全员共守的规范，而非由一人永远包办。",
    "reflectionQuestion": "在倡导家人或团队养成某个新习惯时，你是发号施令多，还是自己先撸起袖子做示范多？",
    "source": "《礼记·中庸》及清代刘献廷《广阳杂记》（「身体力行，不尚空谈」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yi-shen-zuo-ze"
    ]
  },
  {
    "id": "shan-fan-jiu-jian",
    "text": "删繁就简",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "判断与偏见",
      "得失与取舍"
    ],
    "plainExplanation": "删去繁琐冗杂、流于形式的部分，保留最核心、最简明扼要的内容与流程。",
    "storyTitle": "家电说明书改成一张「三步图文卡」",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "某款智能电饭煲原版说明书厚达四十页，塞满了晦涩的电路原理与二十种冷门菜单代码，结果老年用户根本看不懂，售后每天接到上百个询问怎么煮稀饭的电话。",
        "visual": {
          "scene": "office",
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
        "scene": "home",
        "text": "产品体验师小童带着样机去社区找十位老人实地观察，发现老人日常高频需求其实只有「煮白米饭、熬粥、定时预约」三件事。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "scene": "workshop",
        "text": "小童大刀阔斧地删繁就简：保留详尽手册备查的同时，单独设计了一张大字号塑封「三步煮饭卡」，用红黄绿三色圆点直接对应面板按键。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "scene": "home",
        "text": "新卡片随箱附赠后，老年用户的操作求助电话下降了八成，大家直夸这一张纸比四十页书管用百倍。",
        "visual": {
          "scene": "home",
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
    "interpretation": "把简单的事情搞复杂很容易，把复杂的事情提炼得清晰简单却需要真功夫。无论写文章、定制度还是做产品，敢于砍掉那些自我感动却毫无实际价值的繁枝茂叶，核心主干才能真正发挥力量。",
    "limits": "删繁就简是减去冗余的装饰与繁文缛节，但涉及安全警示、关键操作规范等必要信息则不可随意删减。",
    "reflectionQuestion": "你目前负责的一份文档、一个工作流程或家里的一处收纳，如果必须砍掉三分之一的繁琐环节，你会删掉什么？",
    "source": "清代郑燮（郑板桥）书斋联（「删繁就简三秋树，领异标新二月花」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "xun-ming-ze-shi",
    "text": "循名责实",
    "category": "chengyu",
    "tags": [
      "判断与偏见",
      "诚信与责任",
      "消费与欲望"
    ],
    "plainExplanation": "依据事物的名称或宣传称号，去严格考察核对它实际的质地、内容与成效是否相符，不被漂亮名头忽悠。",
    "storyTitle": "拆穿「零添加有机手工酱油」的配料表",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "超市货架上一款新出的酱油包装极尽古朴，正面印着硕大的「古法零添加有机酱油」字样，售价是普通酱油的三倍。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "mei",
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
        "scene": "market",
        "text": "梅姐没有被正面的华丽名头迷惑，而是翻转瓶身仔细查看背面细小的配料表与营养成分表。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "mei",
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
        "text": "一看才发现，所谓「古法零添加」只是注册商标名称，配料表里赫然列着谷氨酸钠、焦糖色与甜味剂，氨基酸态氮含量也仅达最低国标。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "mei",
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
        "scene": "home",
        "text": "梅姐果断放下这瓶噱头大于实质的商品，挑选了另一款包装朴素但配料表里只有水、非转基因黄豆、小麦和食盐的真正优质酱油。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "在概念满天飞的时代，名字可以起得天花乱坠，包装可以做得极具迷惑性。养成「看名头更要核对底层实质」的习惯——买食品看配料表、招人才看实操产出、听承诺看履约记录，才不会为虚名买单。",
    "limits": "循名责实是理性核验事实的科学态度，切莫变成对世间一切事物都抱持阴谋论的冷漠犬儒。",
    "reflectionQuestion": "你最近有没有因为某个课程、商品或项目名字听起来特别高大上就掏了钱，事后却发现名不副实？",
    "source": "《韩非子·定法》（「术者，因任而授官，循名而责实」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "zi-zhi-zhi-ming",
    "text": "自知之明",
    "category": "chengyu",
    "tags": [
      "自省与成长",
      "判断与偏见",
      "情绪与心态"
    ],
    "plainExplanation": "能够清醒、客观地看清自己的真实能力、优势与短板，既不盲目自大，也不妄自菲薄。",
    "storyTitle": "婉拒跨行合伙餐饮的清醒认知",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "老姜的手工皮具工坊这两年攒下了一笔积蓄，一位做餐饮的朋友热情邀他出资五十万合伙开一家网红火锅店，描绘了诱人的回本蓝图。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "study",
        "text": "老姜心动之余回到书房冷静盘点：自己擅长的是安静钻研皮料版型与手缝工艺，对餐饮供应链损耗、前厅排班管理与食品安全一窍不通。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "jiang",
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
        "text": "他清楚认识到：拿自己攒下的辛苦钱去碰完全看不懂门道的陌生行业，不是魄力而是盲目自负，于是诚恳地婉拒了朋友的盛情。",
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
        "scene": "study",
        "text": "一年后那家火锅店因商圈同质化竞争激烈加上后厨管理混乱遗憾倒闭，而老姜把资金投入到自己熟悉的皮具工坊升级中，生意愈发稳健。",
        "visual": {
          "scene": "study",
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
    "interpretation": "看清别人叫做聪明，看清自己才叫明智。知道自己擅长什么，能让你在主场全力深耕；更可贵的是知道自己不擅长什么，这能帮你避开人生绝大多数因为手伸太长而掉进去的深坑。",
    "limits": "有自知之明是认清当下的能力边界以防盲动，并不意味着永远画地为牢、拒绝通过系统学习去拓展新的能力圈。",
    "reflectionQuestion": "如果你给自己的核心能力画一个圈，圈内你最笃定拿手的是哪两件事？圈外你绝对不该轻易去碰的又是什么？",
    "source": "《老子·第三十三章》（「知人者智，自知者明」）及《史记·越王勾践世家》。",
    "sourceStatus": "classical"
  },
  {
    "id": "bing-gui-shen-su",
    "text": "兵贵神速",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "时间与耐心",
      "判断与偏见"
    ],
    "plainExplanation": "用兵打仗最宝贵的是行动果断神速、抢占先机；比喻在局势已经明朗、救灾或窗口稍纵即逝的关键时刻，必须雷厉风行不可拖延。",
    "storyTitle": "台风登陆前两小时的树木加固战",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "气象局发布超强台风橙色预警，预计三小时后狂风前锋抵达城区，老街两侧十几棵浅根系合欢树面临倒伏砸压电线的风险。",
        "visual": {
          "scene": "street",
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
        "scene": "rain",
        "text": "园林抢险队长老姜深知此刻「兵贵神速」：不再等层层书面批复，当即按应急预案调集三组电锯与高空作业车奔赴现场。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "courtyard",
        "text": "队员们争分夺秒疏剪迎风树冠、打入三角斜撑木桩并用钢丝绳加固，赶在第一波十级狂风袭来前十分钟全部撤回安全区。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "rope"
          ],
          "focusProp": "rope",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "street",
        "text": "当晚狂风暴雨肆虐整夜，老街十几棵大树无一倒伏、供电丝毫未断；老姜说平时磨刀要慢，但抢险窗口前必须快如闪电。",
        "visual": {
          "scene": "street",
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
    "interpretation": "「磨刀不误砍柴工」与「兵贵神速」看似相反，实则分属不同阶段：准备期重在沉心磨刀，而一旦时机成熟或险情突发，犹豫一秒就会满盘皆输。在该快的时候毫不拖泥带水，才是真正的执行力。",
    "limits": "兵贵神速适用于局势已明、预案已备的抢抓窗口或应急处置；若方向未明、基础未稳，盲目图快则会陷入欲速不达。",
    "reflectionQuestion": "在你日常处理的事情中，哪些属于「必须慢下来磨刀」的准备期，哪些又属于「必须兵贵神速」的决断窗口？",
    "source": "《三国志·魏书·郭嘉传》（「兵贵神速。今千里袭人，辎重多，难以趋利」）及《孙子兵法·作战》（「兵闻拙速，未睹巧之久也」）。",
    "sourceStatus": "classical",
    "contrastIds": [
      "mo-dao-bu-wu-kan-chai-gong",
      "yu-su-ze-bu-da"
    ]
  },
  {
    "id": "yi-shen-ze-ming-ju-an-si-wei-cheng",
    "text": "博学笃行",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "做事与执行",
      "自省与成长"
    ],
    "plainExplanation": "既要广泛地涉猎学习各方面的知识原理，又要毫无折扣、踏踏实实地将所学付诸具体实践。",
    "storyTitle": "建筑系学生亲手砌出的第一道砖墙",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "建筑系大三的小肖在课堂上把中外建筑史和力学公式背得滚瓜烂熟（「博学」），画出的概念图纸总是全班最炫酷的。",
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
        "scene": "workshop",
        "text": "暑期建造实训课上，老师要求每人亲手用红砖和水泥砂浆砌筑一道一米高的弧形景墙（「笃行」），小肖一拿瓦刀才发现砂浆稠度怎么也调不匀，砌到第三层砖墙就歪斜坍塌了。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
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
        "text": "他收起纸上谈兵的傲气，蹲在工地向瓦工老师傅请教「三一砌砖法」与挂线找平，顶着烈日双手磨出水泡，一砖一瓦重新砌筑。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "school",
        "text": "当那道灰缝均匀、弧线优美的红砖墙稳稳立在阳光下时，小肖终于体会到唯有双手的笃行才能让书本上的博学真正落地生根。",
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
    "interpretation": "博学给了我们看清世界的广角镜，而笃行则给了我们改造世界的双手。只博学而不笃行，容易变成眼高手低的评论家；只蛮干而不博学，容易变成原地打转的苦力。两翼齐飞，方成栋梁。",
    "limits": "博学与笃行应交替循环推进：在学中干、在干中学，不断修正认知偏差。",
    "reflectionQuestion": "你最近学到的一个新方法或新理念，打算在本周的哪一件具体事务中亲手「笃行」检验一次？",
    "source": "《礼记·中庸》「博学之，审问之，慎思之，明辨之，笃行之」凝练成语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "bo-xue-zhi-shen-wen-zhi",
      "yi-shen-ze-ming-zhi-xing-he-yi"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ze-shan-cheng-yu",
    "text": "防患未然",
    "category": "chengyu",
    "tags": [
      "谨慎与风险",
      "做事与执行",
      "家庭与生活"
    ],
    "plainExplanation": "在祸患或事故还没有发生萌芽之前，就提前采取周密的预防措施将其消除在源头。",
    "storyTitle": "浴室防滑垫与扶手的适老化微改造",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "梅姐的父母年过七旬，腿脚依然硬朗，老两口总觉得自己身体好得很，洗澡上厕所跟年轻人一样利索。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "text": "梅姐却深知高龄老人最怕浴室滑倒骨折，一旦出事后悔莫及，必须「防患未然」；她趁周末请来工匠对父母家的卫生间做了一次彻底的适老化改造。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "mei",
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
        "text": "不仅在淋浴区满铺了带吸盘的疏水防滑垫、铲平了门槛高低差，还在马桶旁和花洒下安装了两根承重两百斤的抗菌防滑L型扶手与一张折叠沐浴椅。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "scene": "home",
        "text": "起初老爷子还笑闺女小题大做，直到冬天一次洗热水澡起身头晕，一把抓住了墙上的扶手才没摔倒，从此逢人便夸闺女这步预防棋走在了前头。",
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
    "interpretation": "世界上最成功的救援，是让那场原本可能发生的事故从一开始就没有机会发生。在父母健康、行车安全、数据备份这些输不起的事情上，宁可事前被人笑话「过于小心」，也绝不留到事后在病床前流泪。",
    "limits": "防患未然重在针对高风险场景落地物理与制度防护，而非整日陷入泛化的焦虑。",
    "reflectionQuestion": "你家里或父母住处的浴室、楼梯口与燃气灶旁，是否已经做好了防止滑倒和忘关火的「防患未然」小改造？",
    "source": "《周易·既济·象传》（「君子以思患而预防之」）及《汉书·外戚传》流变。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wei-yu-chou-mou",
      "you-bei-wu-huan"
    ]
  },
  {
    "id": "yi-shen-ze-ming-da-du-po-fu",
    "text": "破釜沉舟",
    "category": "chengyu",
    "tags": [
      "做事与执行",
      "得失与取舍",
      "情绪与心态"
    ],
    "plainExplanation": "渡河之后砸碎做饭的铁锅、凿沉渡河的船只，彻底断掉后退逃跑的念想；比喻在认准目标且退无可退的关键时刻，下定必死决心全力以赴。",
    "storyTitle": "注销游戏账号闭关备考的技师冲刺",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "青年钳工小陈连续两年考高级技师都差了三分落榜，原因在于他总给自己留后路：「反正现在中级工工资也够花，考不上明年再说」，一到晚上复习累了就打开网络游戏玩到半夜。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
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
        "text": "第三年报名当天，小陈决定来一次「破釜沉舟」：当着班组长老姜的面，把玩了五年的满级游戏主机打包寄回老家锁进阁楼，并在车间公告栏立下军令状。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
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
        "text": "彻底斩断了「玩两把解闷」的退路后，他每天下班后全部精力只剩下一条路——在实训台前练锉配精度与啃理论题库。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "chen",
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
        "scene": "workshop",
        "text": "没有了退路的摇摆分心，三个月后小陈以超出合格线二十分的高分一次通关，感慨人有时候必须逼自己一把，把退路堵死才能把前路走通。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "为什么人有退路的时候往往发挥不出全部潜能？因为只要身后还有一张舒服的沙发，遇到第一波困难时大脑就会自动诱惑你「退回去躺着吧」。在经过深思熟虑认准的核心战役上，敢于斩断令自己分心的退路，才能激发出置之死地而后生的爆发力。",
    "limits": "破釜沉舟仅适用于个人戒除惰性、全力攻坚已探明方向的目标；绝不可用于盲目赌博、借高利贷创业或危及家庭基本生存底线的鲁莽冒险。",
    "reflectionQuestion": "为了攻克你今年最重要的那个目标，你敢不敢把那个最常让你分心拖延的「舒适退路」物理锁起来三个月？",
    "source": "《史记·项羽本纪》（「项羽乃悉引兵渡河，皆沉船，破釜甑，烧庐舍，持三日粮，以示士卒必死，无一还心」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-zhi-zhe-shi-jing-cheng",
      "dang-duan-bu-duan-fan-shou-qi-luan"
    ]
  },
  {
    "id": "you-zhao-yi-ri-ju-yi-fan-san",
    "text": "举一反三",
    "category": "chengyu",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "老师指出正方形的一个角，学生就能主动推知其余三个角的道理；比喻善于从一件具体事例或一道题目中掌握底层规律，从而类推解决同类的许多问题。",
    "storyTitle": "从修好一只水龙头到摸透全屋阀门原理",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小童家里厨房冷热水龙头滴水，请水电工老林上门更换陶瓷阀芯时，小童没有躲在客厅看电视，而是在旁仔细观察老林关角阀、撬装饰盖、拧压盖螺母的全套步骤。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "text": "老林讲通了「垫圈密封与陶瓷片错位止水」的底层原理（「举一」），小童当场在笔记本上画下结构简图，并主动追问洗衣机快接龙头与马桶进水阀是不是也是相通的止水逻辑。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "text": "两周后阳台洗衣机龙头与卫生间角阀相继出现渗水，小童「举一反三」，自己拿活动扳手和生料带半小时就全部修复如初，还帮对门独居奶奶修好了滴水的淋浴混水阀。",
        "visual": {
          "scene": "study",
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
        "scene": "home",
        "text": "老林夸赞道：只会照葫芦画瓢的人修一百次还是外行，懂原理能举一反三的人看一次就成了半个内行。",
        "visual": {
          "scene": "home",
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
    "interpretation": "题海战术与机械刷工龄之所以累人，是因为把每一道题、每一件差事都当成了孤立的新问题去死记硬背。而善于「举一反三」的人，每次做完一件事都会往下深挖一层：「这件事背后的通用模型是什么？还能迁移到哪三个地方？」抓住了「一」的树干，千百片树叶自然手到擒来。",
    "limits": "举一反三进行类推时，需先确认新场景与原案例的底层边界条件一致，防止生搬硬套。",
    "reflectionQuestion": "你最近学会的一项具体工作技巧或解决的一个小故障，它的底层方法能不能直接迁移用来解决手头另外两件类似的事？",
    "source": "《论语·述而》（「子曰：不愤不启，不悱不发。举一隅不以三隅反，则不复也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "rong-hui-guan-tong",
      "wen-gu-zhi-xin"
    ]
  },
  {
    "id": "yi-shen-ze-ming-shi-shi-wu-ju-xi",
    "text": "事必躬亲",
    "category": "chengyu",
    "tags": [
      "合作与分工",
      "团队合作",
      "做事与执行"
    ],
    "plainExplanation": "不论事情大小都必定亲自去动手处理；作为个人求真务实是优点，但在团队管理中若不懂授权、大小杂事一把抓，则会累垮自己并闲废下属。",
    "storyTitle": "学会放手授权后焕发生机的馆长",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "老周刚升任区文化馆馆长时，延续了以前当业务骨干时「事必躬亲」的习惯：从年度大展策划，到展厅买几卷双面胶、公众号推文调行距，他都要自己亲手改一遍才放心。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "desk"
          ],
          "focusProp": "desk",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "结果半年下来，老周每天加班到深夜累出了胃病，而馆里十几个年轻馆员却因为「反正馆长最后都要推翻自己重做」而彻底放弃了思考，个个变成了等指令的木偶。",
        "visual": {
          "scene": "office",
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
        "text": "老院长看望他时点拨道：「诸葛亮事必躬亲那是特殊危局，你当馆长如果连买胶带都亲自干，那还要十几个年轻人干什么？抓大放小、定准标准才叫管理。」",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "courtyard",
        "text": "老周痛下决心调整：核心大展方向与安全底线依然亲自把关，而具体布展、新媒体与活动执行则制定清晰验收表全权授权给三位青年组长；三个月后年轻人创意井喷，老周也终于腾出精力谋划全馆五年蓝图。",
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
    "interpretation": "「事必躬亲」是一把双刃剑：在需要深入一线摸底或个人独立创作时，亲力亲为能保证一手真实度；但在带领团队时，过度的事必躬亲往往源于「不信任他人」的控制欲。懂得在关键处躬亲示范、在常规处放手赋能，团队才能长成参天森林。",
    "limits": "此条旨在辩证看待「事必躬亲」与「各司其职」的边界：核心痛点要躬亲摸底，日常执行要授权分工。",
    "reflectionQuestion": "在你目前的家庭家务或团队管理中，有哪些事其实完全可以交给家人或下属去锻炼成长，却因为你「总觉得别人干得不如自己好」而一直死死揽在手里？",
    "source": "《诗经·小雅·节南山》（「弗躬弗亲，庶民弗信」）及《资治通鉴》司马懿评诸葛亮语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ge-si-qi-zhi",
      "shen-ti-li-xing"
    ]
  },
  {
    "id": "yi-shen-ze-ming-wen-ji-qi-wu",
    "text": "闻鸡起舞",
    "category": "chengyu",
    "tags": [
      "时间与耐心",
      "自省与成长",
      "做事与执行"
    ],
    "plainExplanation": "半夜一听到公鸡啼叫就立刻翻身起床练剑习武；比喻有志报国或立志精进的人珍惜清晨时光，及时奋起刻苦磨砺本领。",
    "storyTitle": "冬日五点半操场上的两名晨练挚友",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "night",
        "text": "体育学院的小肖和室友阿杰立志考取国家一级田径裁判与专项体能师资格，但白天课程排得满满当当，晚上回寝室又容易困倦松懈。",
        "visual": {
          "scene": "night",
          "characters": [
            {
              "id": "xiao",
              "pose": "hesitating"
            }
          ],
          "props": [
            "clock"
          ],
          "focusProp": "clock",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "park",
        "text": "两人效仿古人祖逖与刘琨「闻鸡起舞」的典故，约定每天凌晨五点半闹钟一响，谁也不许赖床，互相拍醒对方直接去操场晨训。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "school",
        "text": "寒冬腊月操场看台还凝着白霜，路灯下只有他俩呼出的白气与矫健的跨栏、负重冲刺身影，练完一小时体能后再迎着朝霞背诵规则条文。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "park",
        "text": "整整两年从无一日间断，两人毕业时双双以满分拿下资格证，感叹清晨那段无人打扰的汗水时光是拉开差距的黄金分水岭。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "xiao",
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
    "interpretation": "一天之计在于晨。大多数人的平庸，往往始于早晨闹钟响起时按下的那五次「贪睡键」；而一个人的精气神与自律底色，则是在天色微明、万籁俱寂时的第一声奋起中锻造出来的。有个能互相叫醒「起舞」的挚友，更是人生大幸。",
    "limits": "闻鸡起舞提倡的是早睡早起、惜时笃行，前提是保证夜晚充足睡眠，不可演变成熬夜到凌晨两点再硬撑五点起床的透支行为。",
    "reflectionQuestion": "如果你把每天晚上的无效刷手机时间提前一小时结束睡觉，换来每天清晨一小时神清气爽的「闻鸡起舞」，你最想用这一小时练什么？",
    "source": "《晋书·祖逖传》（祖逖与刘琨共被同寝，中夜闻荒鸡鸣，蹴琨觉曰：「此非恶声也」，因起舞）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "sheng-ren-zhe-you-li-zi-sheng-zhe-qiang",
      "ben-niao-xian-fei-zao-ru-lin"
    ]
  }
];
