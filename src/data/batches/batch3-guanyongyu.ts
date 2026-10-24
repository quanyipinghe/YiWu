import { Proverb } from '../types';

// 第三批扩展内容：惯用语篇
export const BATCH_GUANYONGYU: Proverb[] = [
  {
    "id": "da-yu-fang-bian",
    "text": "打预防针",
    "category": "guanyongyu",
    "tags": [
      "谨慎与风险",
      "沟通与表达",
      "家庭与生活"
    ],
    "plainExplanation": "比喻在事情发生或困难出现之前，预先向相关人员讲明可能遇到的波折与底线，让大家在心理和行动上有所防备。",
    "storyTitle": "暑期夏令营行前的独立生活交底",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "十岁的儿子第一次报名参加为期七天的山区自然夏令营，出发前兴奋得只顾往包里塞零食，以为去营地就像住度假酒店。",
        "visual": {
          "scene": "home",
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
        "text": "梅姐没有一味顺着他说好听话，而是提前三天坐下来给他「打预防针」：山里宿舍没有空调只有风扇、每天要自己手洗袜子、想家时每天只能打五分钟电话。",
        "visual": {
          "scene": "station",
          "characters": [
            {
              "id": "mei",
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
        "scene": "courtyard",
        "text": "她还带着儿子在家实战练习了两次拧干衣服和整理行囊；到了营地第三天突降大雨停电，不少毫无心理准备的孩子哭着闹回家。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
        "text": "而早有心理预期的儿子淡定地取出备用手电筒，还帮同屋伙伴一起晾晒衣物，顺利度过了充实难忘的一周。",
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
    "interpretation": "很多时候人们在挫折面前崩溃，不是因为困难本身有多可怕，而是因为它打破了盲目乐观的幻想。把丑话说在前面、把困难预先摊开演练一遍，能极大地增强面对未知风浪的心理韧性。",
    "limits": "打预防针旨在建立合理预期与应对方法，切不可变成用危言耸听去恐吓他人、打击正常的探索热情。",
    "reflectionQuestion": "在开启一项新合作或带家人去新环境前，你通常会只描绘美好前景，还是也会把可能遇到的不便提前说透？",
    "source": "现代汉语常用惯用语，借医学接种疫苗预防疾病之理喻指事先提醒防备。",
    "sourceStatus": "folk",
    "contrastIds": [
      "ma-hou-pao"
    ],
    "contrastNote": "「打预防针」是在事前主动预判风险、帮人做好准备；「马后炮」则是在事后才跳出来指手画脚、于补救毫无益处。",
    "storyStructure": {
      "layout": "contrast",
      "premise": "孩子首次独自参加山区夏令营，出发前家长该如何沟通？",
      "premiseScene": "home",
      "premiseVisual": {
        "scene": "home",
        "characters": [
          {
            "id": "mei",
            "pose": "thinking"
          }
        ],
        "props": [
          "bag"
        ],
        "narrative": {
          "type": "fork",
          "label": "抉择"
        }
      },
      "left": {
        "label": "做法甲：只描摹享乐",
        "action": "一路哄着说像去游乐园一样轻松。",
        "outcome": "结果孩子到营地遇到停电和手洗衣物当场崩溃哭闹。",
        "tone": "caution",
        "scene": "station",
        "visual": {
          "scene": "station",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "umbrella"
          ],
          "narrative": {
            "type": "contrast",
            "label": "只描摹享乐"
          }
        }
      },
      "right": {
        "label": "做法乙：提前打预防针",
        "action": "事先讲明山居简朴条件并在家练习洗衣收包。",
        "outcome": "孩子遇突发大雨从容应对。",
        "tone": "positive",
        "scene": "courtyard",
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
          "narrative": {
            "type": "contrast",
            "label": "提前打预防针"
          }
        }
      },
      "point": "事先把困难讲明、把预期放平，远胜于临场措手不及。"
    }
  },
  {
    "id": "ma-hou-pao",
    "text": "马后炮",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "团队合作",
      "自省与成长"
    ],
    "plainExplanation": "象棋术语中借指事情已经发生、败局已定之后才摆出的攻势；比喻事后才夸夸其谈地说「我早知道会这样」，对解决问题毫无实际帮助。",
    "storyTitle": "社区展板被风吹倒后的两种声音",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "物业在广场搭建露天摄影展板时，大家都在赶进度，小张路过看了一眼底座没放配重沙袋，但当时一句话也没提醒就走了。",
        "visual": {
          "scene": "courtyard",
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
        "text": "下午一阵六级阵风刮过，三块展板轰然倾倒摔裂了铝合金边框；大家正忙着抢救画框时，小张却双手抱胸在旁连连摇头：「我早上看那底座就知道肯定得倒！」",
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
        "scene": "workshop",
        "text": "班长老周听后严肃地对小张说：「如果你早上真看出来了却不吭声，等摔坏了才来放马后炮，这不是本事，而是失职。」",
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
        "scene": "courtyard",
        "text": "随后老周带着大家用膨胀螺栓和配重沙袋重新加固展架，并立下班组规矩：发现隐患当场开口提方案算立功，事后说风凉话一律叫停。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "事后诸葛亮之所以令人反感，是因为它在团队最需要出力补救的时候，用推卸责任的优越感替代了行动。真正的远见是事前提醒防患于未然，真正的担当是事后卷起袖子一起补漏。",
    "limits": "反对放马后炮，绝不等于拒绝事后正式、客观的经验复盘；风凉话重在标榜自己，复盘重在改进流程。",
    "reflectionQuestion": "当身边人或团队不小心把事情搞砸时，你的第一句脱口而出的话是「我早说过吧」，还是「我们现在怎么补救」？",
    "source": "源于中国象棋术语并演化为民间高频熟语，元代杂剧《隔江斗智》已有用例。",
    "sourceStatus": "classical",
    "contrastIds": [
      "da-yu-fang-bian"
    ]
  },
  {
    "id": "chi-ding-xin-wan",
    "text": "吃定心丸",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "诚信与责任"
    ],
    "plainExplanation": "比喻在人心浮动、焦虑不安的关头，给出明确、可靠的信息或承诺，让别人的心神彻底安定下来。",
    "storyTitle": "老楼停水抢修时的公告白板",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "盛夏傍晚六点正是做晚饭的高峰期，小区主供水管突然爆裂导致全楼停水，业主群里顿时炸开了锅，猜测与抱怨声四起。",
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
        "scene": "workshop",
        "text": "物业张经理没有躲在办公室不吭声，而是在十五分钟内赶到抢修坑旁核实进度，随后在单元楼下竖起一块大白板并在群里同步实况。",
        "visual": {
          "scene": "workshop",
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
        "scene": "courtyard",
        "text": "白板上清清楚楚写着：「爆管位置已锁定，配件八点到场，十点整准时恢复供水；一楼物业办现备有二十桶免费应急饮用水供大家取用。」",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
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
        "text": "看到精确到小时的节点与兜底水源，居民们像吃了一颗定心丸，群里瞬间平静下来，九点五十分清澈的自来水如约流出水龙头。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "人们在突发变故中之所以恐慌暴躁，往往不是因为不能忍受暂时的不便，而是因为面对「不知道要等多久、不知道有没有人管」的失控感。一句坦诚透明的进度交底，就是最好的定心丸。",
    "limits": "给别人吃定心丸必须建立在已核实事实和有把握兑现的底线上，切忌为了暂时哄住对方而随口乱开空头支票。",
    "reflectionQuestion": "当你的家人、客户或搭档正因为等待你的结果而焦急不安时，你能否现在就发一条包含明确时间节点的进度消息过去？",
    "source": "现代汉语常用惯用语，源于传统中医安神丸药之比喻。",
    "sourceStatus": "folk",
    "storyStructure": {
      "layout": "branch",
      "situation": "做饭高峰期突发水管爆裂停水，居民群情焦躁，物业该如何响应？",
      "situationScene": "courtyard",
      "situationVisual": {
        "scene": "courtyard",
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
        "label": "分支 A：沉默逃避",
        "choice": "沉默逃避",
        "result": "怕被骂而不敢在群里吭声，导致谣言四起、投诉电话被打爆。",
        "recommended": false,
        "scene": "home",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "phone"
          ],
          "narrative": {
            "type": "arrow",
            "label": "沉默逃避"
          }
        }
      },
      "optionB": {
        "label": "分支 B：给吃定心丸",
        "choice": "给吃定心丸",
        "result": "十五分钟内公布抢修时间表并提供免费应急桶装水，居民安心配合。",
        "recommended": true,
        "scene": "workshop",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "pot"
          ],
          "narrative": {
            "type": "arrow",
            "label": "给吃定心丸"
          }
        }
      },
      "point": "透明的时间节点与实在的兜底措施，是化解群体焦虑最有效的定心丸。"
    }
  },
  {
    "id": "mo-shi-tou-guo-he",
    "text": "摸着石头过河",
    "category": "guanyongyu",
    "tags": [
      "做事与执行",
      "谨慎与风险",
      "学习与积累"
    ],
    "plainExplanation": "涉水过河时因为看不清深浅，先用脚一步步试探水底稳固的石头再往前迈；比喻面对没有现成经验的新事物，边小步探索、边总结规律稳步推进。",
    "storyTitle": "社区老年助餐食堂的四步试水记",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "街道想办一间既实惠又能自负盈亏的社区长者食堂，但之前没有现成模板，一次性砸重金装修大厨房风险极高。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "kitchen",
        "text": "负责人老陈决定「摸着石头过河」：第一个月先借用社区活动室一角，只为二十位高龄独居老人提供预订制午餐盒饭，摸清老人们的咸淡软硬口味。",
        "visual": {
          "scene": "kitchen",
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
        "scene": "market",
        "text": "第二个月根据反馈优化菜单，与周边三家菜农基地建立直采降低三成食材成本；第三个月开放错峰堂食吸引年轻上班族补充客流。",
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
        "scene": "kitchen",
        "text": "半年后运营模式与收支账目彻底跑通，长者食堂这才正式扩建挂牌，月月盈余且饭菜可口，成了全区推广的样板。",
        "visual": {
          "scene": "kitchen",
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
    "interpretation": "面对从未走过的新领域，既不能因为没有现成图纸就站在岸边永远不动，也不能闭着眼睛猛扎进深水区。用最小成本的小步快跑去探路，每踩稳一块石头再迈下一步，是把未知转化为已知的务实智慧。",
    "limits": "摸着石头过河强调在探索期小步试错与复盘，但对于已经有成熟科学规范和安全标准的事项，则应直接遵循规范而不必重复试错。",
    "reflectionQuestion": "你手头那个因为「没做过、心里没底」而迟迟不敢启动的新想法，能不能先设计一个只需花费十分之一成本的「第一块石头」去试一试？",
    "source": "民间传统渡水谚语，近代陈云、邓小平多次引用阐述稳步改革与实践探索方法论。",
    "sourceStatus": "classical",
    "storyStructure": {
      "layout": "timeline",
      "stages": [
        {
          "timeLabel": "第一步·小样试水",
          "text": "先为二十位高龄老人提供预订制盒饭，低成本摸清真实口味与配送痛点。",
          "scene": "courtyard",
          "visual": {
            "scene": "courtyard",
            "characters": [
              {
                "id": "chen",
                "pose": "thinking"
              }
            ],
            "props": [
              "pot"
            ],
            "narrative": {
              "type": "time",
              "text": "第一步·小样试水"
            }
          }
        },
        {
          "timeLabel": "第二步·源头降本",
          "text": "根据首月账单优化损耗，对接郊区基地直采蔬菜降低三成食材成本。",
          "scene": "market",
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
            "narrative": {
              "type": "time",
              "text": "第二步·源头降本"
            }
          }
        },
        {
          "timeLabel": "第三步·错峰开源",
          "text": "在保障老人11点就餐后，12点开放周边上班族堂食以分摊场地人工。",
          "scene": "kitchen",
          "visual": {
            "scene": "kitchen",
            "characters": [
              {
                "id": "chen",
                "pose": "discovering"
              }
            ],
            "props": [
              "desk"
            ],
            "narrative": {
              "type": "time",
              "text": "第三步·错峰开源"
            }
          }
        },
        {
          "timeLabel": "第四步·稳健成型",
          "text": "收支模型彻底跑通后再正式扩建厨房，实现公益服务与长期自负盈亏双赢。",
          "scene": "kitchen",
          "visual": {
            "scene": "kitchen",
            "characters": [
              {
                "id": "chen",
                "pose": "relieved"
              }
            ],
            "props": [
              "signpost"
            ],
            "narrative": {
              "type": "time",
              "text": "第四步·稳健成型"
            }
          }
        }
      ],
      "point": "面对未知新课题，先小步试探踩稳第一块石头，在实践中逐步校准方向。"
    }
  },
  {
    "id": "kai-lv-deng",
    "text": "开绿灯",
    "category": "guanyongyu",
    "tags": [
      "做事与执行",
      "合作与分工",
      "公共生活"
    ],
    "plainExplanation": "交通信号绿灯亮起允许通行；比喻在规则允许范围内为急难或重要事务开辟顺畅通道、提供便利支持。",
    "storyTitle": "政务大厅里的八旬老人绿色窗口",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "八十二岁的独居张奶奶拄着拐杖来到街道便民大厅办理医保异地备案，面对取号机与智能手机扫码验证一时手足无措。",
        "visual": {
          "scene": "office",
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
        "scene": "office",
        "text": "值班主任梅姐看到后立即开启「高龄绿色通道」，把老人扶到免排队爱心专席，改用纸质表代填与人工核验方式办理。",
        "visual": {
          "scene": "office",
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
        "text": "发现老人漏带了一份历史出院小结复印件，梅姐没有让老人再跑一趟医院，而是按容缺受理机制先办妥备案、再通过系统后台联网调阅。",
        "visual": {
          "scene": "home",
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
        "scene": "office",
        "text": "不到十分钟业务全部办结，张奶奶握着梅姐的手直夸：这盏绿灯不仅省了腿脚，更暖了老年人的心窝。",
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
    "interpretation": "规章制度设立的初衷是为了服务人、保障秩序，而不是用冷冰冰的繁文缛节把特殊困难群体挡在门外。在守住真实合规底线的前提下，为急难险重或弱势需求主动开一盏便利的绿灯，体现的是制度的温度。",
    "limits": "开绿灯是指在正当合规范围内简化流程、特事特办，绝不能异化为突破法律底线、为私利搞特权走后门。",
    "reflectionQuestion": "在你负责的业务或日常协作中，面对真正遇到急难情况的求助者，你能否在合规前提下帮对方少跑一趟弯路？",
    "source": "现代汉语常用惯用语，源于现代交通信号灯规则之引申。",
    "sourceStatus": "folk"
  },
  {
    "id": "pao-long-tao",
    "text": "跑龙套",
    "category": "guanyongyu",
    "tags": [
      "工作与职业",
      "情绪与心态",
      "团队合作"
    ],
    "plainExplanation": "原指戏曲舞台上扮演随从兵卒等无台词配角；比喻在团队事务中承担看似不起眼的辅助、杂务或配角工作。",
    "storyTitle": "校园话剧社里的幕后道具师",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "大学话剧社排演年度大戏，小童竞选男女主角落选，只被分配去演一个出场两分钟的路人甲，兼管后台道具搬运。",
        "visual": {
          "scene": "school",
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
        "text": "一起落选的同学觉得跑龙套丢人干脆退了社，小童却留了下来：不仅把路人甲的惊慌神态揣摩了十遍，还主动把松动的木质布景全部加固编号。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "tong",
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
        "scene": "school",
        "text": "正式演出当晚，男主角的佩剑道具在换场时卡死在木箱缝里，眼看舞台就要冷场穿帮，守在侧幕的小童三秒钟精准撬开箱锁递上佩剑。",
        "visual": {
          "scene": "school",
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
        "scene": "courtyard",
        "text": "谢幕时导演特意拉着小童站到舞台中央致敬：一场好戏既需要聚光灯下的主角，更离不开把每一件小事做到极致的幕后功臣。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "tong",
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
    "interpretation": "没有人一上场就是永远的主角。在配角和基础岗位上不敷衍、不轻视，把「跑龙套」当成观察全局、锤炼基本功的练兵场，那份认真的光芒终会被人看见。",
    "limits": "尊重配角价值并踏实做好辅助工作，不等于永远放弃争取核心主责岗位的上进心。",
    "reflectionQuestion": "当你在一项合作中被分配到不起眼的辅助角色时，你是会敷衍应付，还是依然把它做到让人挑不出毛病？",
    "source": "源于传统京剧舞台行话「龙套」（四人一组的兵卒随从角色）。",
    "sourceStatus": "classical"
  },
  {
    "id": "chang-fan-diao",
    "text": "唱反调",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "沟通与表达",
      "团队合作"
    ],
    "plainExplanation": "发表与大多数人或主导者完全相反的意见；有时指故意作对，但在决策讨论中也可指敢于提出逆向风险预警。",
    "storyTitle": "新品立项会上的「蓝军挑刺人」",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "饮品研发团队讨论一款猎奇香菜味气泡水时，大家都在兴头上纷纷附和说一定能成爆款，准备直接下单十万瓶包材。",
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
        "text": "老周主动站出来「唱反调」：他没有泼冷水否定创新，而是拿出一份街采盲测数据，指出九成消费者尝鲜一口后绝不会复购。",
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
        "scene": "market",
        "text": "老周建议先做三千瓶限量快闪测试，不要盲目压下十万瓶库存；市场试水结果正如老周所料，两周后复购率几乎为零。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "office",
        "text": "因为老周当初那句清醒的「反调」，公司省下了二十多万元的包材报废损失，此后重大立项会特意设立了「首席反调官」角色。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
    "interpretation": "当整个团队都陷入群体狂热、异口同声说「没问题」的时候，往往正是风险盲区最大的时候。容忍并倾听那个基于事实唱反调的声音，是防止决策翻车的最后一道刹车片。",
    "limits": "有益的「唱反调」必须基于客观证据并旨在把事情办好；若只是为了抬杠显摆、在决定作出后依然消极拆台，则属有害内耗。",
    "reflectionQuestion": "在大家都一团和气赞同某个大胆计划时，你敢不敢做那个温和但坚定地提出「万一某环节出问题怎么办」的人？",
    "source": "现代汉语常用惯用语，比喻提出相反意见。",
    "sourceStatus": "folk",
    "relatedIds": [
      "zhi-yan-bu-hui"
    ]
  },
  {
    "id": "zou-guo-chang",
    "text": "走过场",
    "category": "guanyongyu",
    "tags": [
      "诚信与责任",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "原指戏曲角色从舞台一端走过到另一端而不停留表演；比喻做事只摆个表面形式应付差事，不解决实际问题。",
    "storyTitle": "拒绝只打钩不弯腰的消防巡检",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "园区仓库每月初都要检查三十具干粉灭火器，以前个别巡检员为了图快，站在门口扫一眼就在检查卡上划满对钩「走过场」。",
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
        "scene": "courtyard",
        "text": "老姜接手安全员后，坚持每具灭火器都要亲手提起来颠一颠干粉是否结块、低头核对压力表指针是否落在绿区、查看保险销铅封。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "workshop",
        "text": "在三号库房角落，他果真查出两具外观崭新但压力表已掉入红区失效的灭火器，当场更换成了满压新瓶。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "jiang",
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
        "text": "半个月后三号库房一台叉车电瓶短路冒烟，值班员拔出那两具新换的灭火器三秒扑灭初起火苗，大家惊叹不走过场才真保命。",
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
    "interpretation": "形式主义的「走过场」最具有欺骗性——纸面上的表格填得整整齐齐，照片拍得漂漂亮亮，唯独真实的隐患纹丝未动。把每一次例行检查都当成实战前的最后核验，才对得起肩上的责任。",
    "limits": "戒除走过场要求简化无意义的重复填表，把精力真正释放到一线实质核查上。",
    "reflectionQuestion": "在你每周例行填写的报表或执行的流程里，有没有哪一项不知不觉变成了机械打钩的「走过场」？",
    "source": "源于传统戏曲舞台调度术语，后引申指敷衍塞责的形式主义。",
    "sourceStatus": "classical"
  },
  {
    "id": "ti-pi-qiu",
    "text": "踢皮球",
    "category": "guanyongyu",
    "tags": [
      "诚信与责任",
      "合作与分工",
      "沟通与表达"
    ],
    "plainExplanation": "像踢球一样把球踢给别人；比喻遇到棘手问题或模糊地带的责任时，各部门或个人互相推诿、谁也不肯接手解决。",
    "storyTitle": "两小区交界处路灯不亮的认领",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "老林家所在的东苑小区与隔壁西苑小区交界巷口有一盏路灯坏了半个月，两边物业互相「踢皮球」，都说电线归对方管。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "lin",
              "pose": "hesitating"
            }
          ],
          "props": [
            "lamp"
          ],
          "focusProp": "lamp",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "office",
        "text": "夜里老人们买菜回家常在黑巷口绊脚，新上任的社区网格员小肖得知后，没有跟着写推诿报告，而是约齐两家物业电工在路灯下现场办公。",
        "visual": {
          "scene": "office",
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
        "text": "顺着线管一查，灯杆立在东苑地界、电源却接在西苑配电箱；小肖当场协调：东苑出新灯泡与镇流器，西苑出电工搭梯更换，电费两家按半年轮流分摊。",
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
        "scene": "street",
        "text": "当晚八点昏暗了半个月的巷口重新亮起温暖灯光，居民们拍手称快：少踢一回皮球，多走一步现场，难题半小时就能解开。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "lin",
              "pose": "relieved"
            }
          ],
          "props": [
            "phone"
          ],
          "focusProp": "phone",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "「踢皮球」看似帮自己躲过了一件麻烦差事，实则损耗了整个系统的公信力，最后往往还要花十倍的精力去处理升级后的矛盾。遇到边界模糊的事，主动上前一步牵头厘清，才是真担当。",
    "limits": "杜绝踢皮球既靠个人主动担当，也需要管理层及时把模糊的权责交界地带用制度明确下来。",
    "reflectionQuestion": "当一件工作处于你和同事的职责交界处时，你是习惯先找理由推给对方，还是先拉上对方一起把事情办妥？",
    "source": "现代汉语常用惯用语，形象比喻互相推卸责任。",
    "sourceStatus": "folk",
    "relatedIds": [
      "ge-si-qi-zhi"
    ]
  },
  {
    "id": "tiao-da-liang",
    "text": "挑大梁",
    "category": "guanyongyu",
    "tags": [
      "工作与职业",
      "自省与成长",
      "诚信与责任"
    ],
    "plainExplanation": "原指承担房屋最核心的承重主梁；比喻在团队或重大项目中勇敢站出来，承担最核心、最艰巨的主导任务。",
    "storyTitle": "主设计师病休时的青年顶梁柱",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "古镇文创展馆布展进入倒计时十天，总设计师突发急性阑尾炎住院手术，整个施工与视觉对接团队瞬间群龙无首。",
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
        "scene": "workshop",
        "text": "平时一直担任副手的小肖没有慌乱退缩，主动向馆长请缨「挑大梁」，白天扎在尘土飞扬的展厅核对展柜尺寸，夜里与医院里的总师视频确认细节。",
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
        "scene": "office",
        "text": "面对展板色差和灯光折射两个突发难题，他带着木工与电工现场打样测试了五种角度，硬是在开展前夜把二十个展区调试得严丝合缝。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "courtyard",
        "text": "展览如期圆满开幕，总师出院看到现场效果后欣慰不已：经历过一次真正的挑大梁，年轻人的肩膀就彻底长硬了。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "温室里的旁观永远练不出真正的统帅力。一个人职场与人生的跃升，往往就发生在那个关键时刻敢于接下烫手山芋、把千斤重担稳稳挑在肩上的瞬间。",
    "limits": "敢于挑大梁不是盲目个人英雄主义包揽一切，而是敢担主责的同时善于协调团队力量共同攻坚。",
    "reflectionQuestion": "如果明天团队负责人突然临时缺席三天，你对整体业务的熟悉程度能否支撑你立刻顶上去挑起大梁？",
    "source": "源于传统木结构建筑与戏曲行话（主角称「挑大梁」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "bao-fo-jiao",
    "text": "临时抱佛脚",
    "category": "guanyongyu",
    "tags": [
      "时间与耐心",
      "学习与积累",
      "谨慎与风险"
    ],
    "plainExplanation": "平时不烧香敬佛，直到危急关头才慌忙去抱住佛脚求保佑；比喻平时拖延懈怠、不作积累，事到临头才仓促突击应付。",
    "storyTitle": "专业技能实操考前夜的通宵突击",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "电工实操等级考提前两个月就公布了考核电路图，小肖前七周每天都觉得「还早呢」，实训室一次也没去练过。",
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
        "scene": "study",
        "text": "直到考试前夜他才慌了神「临时抱佛脚」，抱着教材熬了个通宵死记接线顺序，第二天顶着黑眼圈走上考场操作台。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "workshop",
        "text": "由于缺乏平时的肌肉记忆加上睡眠不足手抖，他在限时四十分钟内压错了两根主控线，通电测试跳闸，遗憾未能过关。",
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
        "scene": "school",
        "text": "补考周期里小肖痛改前非，把任务平摊到每天下午练一套端子排，两个月后从容应考，提前十五分钟满分交卷。",
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
    "interpretation": "仓促突击或许能勉强背下几道死板的填空题，却绝不可能在需要真本事与沉着心态的实战中蒙混过关。把功夫均匀地化在平时的每一天，临场才会有笃定的底气。",
    "limits": "反对平时懈怠的临时抱佛脚，但若确实遇到突发紧急任务，临场全力冲刺准备依然比彻底躺平放弃要好。",
    "reflectionQuestion": "距离你下一个重要的截止日期或考核还有多久？今天做哪一件小事能让你到时候不必熬夜突击？",
    "source": "唐代孟郊诗及宋代释道原《景德传灯录》（「闲时不烧香，急来抱佛脚」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "chao-leng-fan",
    "text": "炒冷饭",
    "category": "guanyongyu",
    "tags": [
      "学习与积累",
      "工作与职业",
      "沟通与表达"
    ],
    "plainExplanation": "把早就做好放凉的剩饭拿出来翻来覆去地炒；比喻说话或做事没有新意与实质增量，只是把老掉牙的旧内容原封不动拿出来重复应付。",
    "storyTitle": "培训讲师舍弃五年前的旧课件",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "企业内训师老周受邀给新入职的零零后员工讲沟通课，起初他想省事，直接把五年前做好的那套老课件拿出来改个日期就去讲。",
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
        "scene": "study",
        "text": "试讲给助教听时，助教委婉指出里面的案例还是十年前的传真机与座机电话，年轻人听起来完全像在「炒冷饭」，很难产生共鸣。",
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
        "scene": "school",
        "text": "老周虚心接受，花了三天时间走进年轻员工工位收集真实痛点，把课程案例全面更新为即时通讯群聊礼仪与跨部门在线文档协作。",
        "visual": {
          "scene": "school",
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
        "text": "培训当天课堂互动热烈，新员工们纷纷记下实操干货，老周也体会到唯有持续注入时代新活水，老经验才能焕发新生命。",
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
    "interpretation": "炒冷饭的本质是思维的懒惰——试图用过去一次的劳动成果无限次套利。哪怕讲的是同一个经典道理，结合当下鲜活的处境做新的阐发与迭代，才是对听众与自己时间的尊重。",
    "limits": "注意区分毫无新意的「炒冷饭」与深入钻研的「温故知新」：前者是机械重复旧套路，后者是在旧基础上提炼新认知。",
    "reflectionQuestion": "你最近提交的方案或总结里，有哪些部分其实是直接复制粘贴旧文档「炒冷饭」的？能否加入一点今年的新思考？",
    "source": "宋代释普济《五灯会元》禅林俗语流变。",
    "sourceStatus": "classical",
    "contrastIds": [
      "wen-gu-zhi-xin"
    ]
  },
  {
    "id": "da-suan-pan",
    "text": "打如意算盘",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "谨慎与风险",
      "消费与欲望"
    ],
    "plainExplanation": "只从自己一厢情愿的有利角度出发去盘算结果，把所有未知变量都想象得完美顺利，完全忽略现实风险与他人的真实反应。",
    "storyTitle": "古镇纪念品摆摊的库存教训",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "五一假期前，小肖看古镇游客多，在心里打起了「如意算盘」：进一千把高价手绘折扇，按每天晴天两百人买算，五天就能净赚一万块。",
        "visual": {
          "scene": "market",
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
        "scene": "rain",
        "text": "他把所有环节都设想得百发百中，既没查气象局的连阴雨预报，也没调研游客其实更偏爱二十元以内的轻巧书签，直接压上了全部生活费进货。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "xiao",
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
        "text": "结果五一期间古镇连下四天大雨，气温骤降根本没人买扇子，仅有的晴天游客也嫌扇子太贵，五天下来只卖出十几把。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "study",
        "text": "看着堆满床底的折扇，小肖深刻领悟到：把计划建立在「万事皆如我意」的幻想上，现实稍微刮阵风就会满盘皆输。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
    "interpretation": "如意算盘之所以危险，是因为它把小概率的「最佳情况」当成了百分之百的「保底情况」。成熟的规划总是按最坏的刮风下雨天做底线抗压测试，再向最好的晴天去努力。",
    "limits": "不做一厢情愿的如意算盘，不是要消灭创业与做事的乐观热情，而是要用扎实的实地调研替代闭门幻想。",
    "reflectionQuestion": "你目前正在盘算的一个计划里，有没有哪个关键前提其实只是你一厢情愿的假设、还没经过现实核验？",
    "source": "清代李宝嘉《官场现形记》等常见俗语。",
    "sourceStatus": "classical"
  },
  {
    "id": "he-xi-ni",
    "text": "和稀泥",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "诚信与责任",
      "合作与分工"
    ],
    "plainExplanation": "原指把泥土掺水搅和成没有棱角的软泥；比喻在是非原则问题上不讲标准、不分对错，一味敷衍折中充当老好人。",
    "storyTitle": "明确责任归属的包装破损复盘会",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "一批发往外地的手工瓷器有五件在途中震裂，包装组怪物流组野蛮装卸，物流组怪包装组省掉了内层气泡柱，双方吵得不可开交。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "scene": "office",
        "text": "以往遇到这种争执，前任主管总是「和稀泥」说：「大家都辛苦了，各打五十大板下次注意就行」，结果同样的破损月月重演。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "chen",
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
        "text": "新上任的陈主管拒绝和稀泥，当场调出打包监控与防震跌落测试标准，查实是包装组漏塞了四角缓冲垫，按章由包装组承担本次返工并修订封箱核对表。",
        "visual": {
          "scene": "workshop",
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
        "scene": "office",
        "text": "是非权责一锤定音后，物流组心服口服，包装组也彻底堵住了操作漏洞，此后连续半年零破损。",
        "visual": {
          "scene": "office",
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
    "interpretation": "无原则的「和稀泥」看似维护了表面的一团和气，实则让认真守规矩的人寒心、让敷衍犯错的人侥幸，最终把整个团队拖入是非不分的泥潭。先分清客观是非，再讲人情冷暖，才是真公正。",
    "limits": "在涉及质量标准、安全规范与契约责任时绝不可和稀泥；但在家庭琐碎口味偏好等无分对错的小事上，则不妨多一点包容妥协。",
    "reflectionQuestion": "你在调解矛盾或管理团队时，是否曾为了不得罪人而用「大家都有责任」掩盖了真正的问题根源？",
    "source": "北方方言熟语演化为现代汉语通用惯用语。",
    "sourceStatus": "folk",
    "relatedIds": [
      "yi-ge-ba-zhang-pai-bu-xiang"
    ]
  },
  {
    "id": "kai-kong-tou-zhi-piao",
    "text": "开空头支票",
    "category": "guanyongyu",
    "tags": [
      "诚信与责任",
      "沟通与表达",
      "人际关系"
    ],
    "plainExplanation": "签发账面上根本没有存款无法兑现的支票；比喻为了敷衍或讨好别人，随口许下自己根本没有能力或根本没打算去兑现的诺言。",
    "storyTitle": "说到做到的班组技能津贴承诺",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "车间上一任负责人在动员大家加班攻关时，总爱拍胸脯「开空头支票」说年底给大家发双倍大奖、批带薪长假，结果到年底总以各种理由赖账。",
        "visual": {
          "scene": "office",
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
        "scene": "workshop",
        "text": "久而久之工人们听到动员令就冷笑，谁也不肯再多出一分力；老姜接任车间主任后，深知修复信任必须从绝不开空头支票开始。",
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
        "text": "在新的技改任务前，老姜先找财务落实了专项资金，把「每提前一天达标、班组每人即时发放三百元现金奖励」写进盖章公示单贴在车间墙上。",
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
        "text": "达标当天下午奖金分文不少打进每位工人卡里，从此老姜在车间说话一言九鼎，大家干劲十足。",
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
    "interpretation": "空头支票也许能骗来别人一次的热血，却会永久透支你未来十年的信誉账户。没有把握办到的事宁可事先坦诚不说，一旦说出口的事哪怕再小也必须砸锅卖铁兑现。",
    "limits": "戒除开空头支票，要求我们在许诺前先核算自身资源与权限边界，不在兴头上乱表态。",
    "reflectionQuestion": "在人际交往中，你有没有为了当时场面上好看而随口说过「包在我身上」，事后却因为办不到而尴尬躲避？",
    "source": "源于近代金融银行业务术语，比喻不兑现的虚假承诺。",
    "sourceStatus": "folk",
    "relatedIds": [
      "yan-chu-bi-xing"
    ]
  },
  {
    "id": "chuan-xiao-xie",
    "text": "穿小鞋",
    "category": "guanyongyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "工作与职业"
    ],
    "plainExplanation": "硬让人穿上尺码过小的鞋子使人寸步难行、暗受折磨；比喻利用手中的职权或便利，在背后暗中刁难、报复曾对自己提过意见的人。",
    "storyTitle": "坦荡重用曾当面挑刺的技术员",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "在一次技术评审会上，年轻技术员小陆当众指出了老周设计方案里的一处散热计算失误，让老周在领导面前颇有些下不来台。",
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
        "scene": "workshop",
        "text": "会后有人悄悄替小陆捏把汗，担心老周在下个月的排班和设备申领上给小陆「穿小鞋」、派苦差事。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "zhou",
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
        "text": "没想到老周不仅没有暗中记仇刁难，反而把最核心的新品温控测试交给了小陆负责，并在季度考评表上给小陆写下了「严谨敢言、功底扎实」的优等评语。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "workshop",
        "text": "老周的坦荡胸怀赢得了全组人的由衷敬重，大家再也不怕提真知灼见，整个团队的技术容错率与凝聚力双双跃升。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "手里有一点权力或资源时，给冒犯过自己的人「穿小鞋」是格局最狭隘的表现。那不仅伤害了具体的同伴，更向所有人发出了「谁说真话谁倒霉」的恶劣信号，最终让自己变成信息茧房里的孤家寡人。",
    "limits": "不给人穿小鞋是胸怀坦荡的职业底线；若自己不幸遭遇不公刁难，也应保留客观证据通过正当渠道申诉。",
    "reflectionQuestion": "当身边有人在公开场合驳了你的面子但道理确实在他那边时，你能否在事后依然公正地对待他？",
    "source": "现代汉语常用惯用语，借旧时缠足小鞋之痛比喻暗中刁难。",
    "sourceStatus": "folk",
    "relatedIds": [
      "wen-guo-ze-xi"
    ]
  },
  {
    "id": "zou-jie-jing",
    "text": "走捷径",
    "category": "guanyongyu",
    "tags": [
      "学习与积累",
      "谨慎与风险",
      "做事与执行"
    ],
    "plainExplanation": "放着正规的大路不走，专挑看似近便省力的小路；比喻在需要扎实积累的事情上企图跳过必要步骤、投机取巧求速成。",
    "storyTitle": "山间古道与危险野路的选择",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "老林带外甥去爬山，正规盘山石阶路虽平缓安全但需绕行四十分钟；外甥指着林间一条陡峭泥泞的野路说：「咱们走捷径穿过去，十五分钟就能到山顶！」",
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
        "text": "老林指着路旁警示牌拦住了他：那条野路看似直线距离短，实则全是松散碎石且没有护栏，前两天刚有人滑倒扭伤脚踝被担架抬下山。",
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
        "scene": "rain",
        "text": "两人老老实实沿着宽阔的青石台阶一步步往上走，沿途不仅欣赏了摩崖石刻与山涧清泉，还在半山凉亭躲过了一阵突如其来的急雨。",
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
        "text": "稳稳登顶后往下看，那条泥泞野路已被雨水冲成滑溜的泥沟，外甥后怕地感慨：原来最稳当的正道，才是最快到达终点的路。",
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
    "interpretation": "在打基础、讲安全与守信誉的事情上，世界上最远的路往往就是所谓的「捷径」。跳过核心基本功省下的一点时间，日后往往要花十倍的代价去返工补课。",
    "limits": "警惕投机取巧的「走捷径」，并不排斥在遵守客观规律的前提下通过工具创新与流程优化来提高效率。",
    "reflectionQuestion": "在你目前的学习或职业规划里，有没有哪条看似诱人的「速成捷径」，背后其实藏着根基不稳的隐患？",
    "source": "《离骚》「夫唯捷径以窘步」流变，现代常用惯用语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "xun-xu-jian-jin",
      "shi-ban-gong-bei"
    ]
  },
  {
    "id": "chi-lao-ben",
    "text": "吃老本",
    "category": "guanyongyu",
    "tags": [
      "学习与积累",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "只靠消耗过去积攒下来的本钱、资历或旧手艺度日，不再继续学习进取或创造新的价值。",
    "storyTitle": "老照相馆的数码修图转型",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "孙师傅的青春照相馆在九十年代曾红极一时，但进入数码与手机摄影时代后，他好几年只守着老式红蓝底证件照手艺「吃老本」，店里冷清得门可罗雀。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
              "pose": "hesitating"
            }
          ],
          "props": [
            "mirror"
          ],
          "focusProp": "mirror",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "study",
        "text": "眼看房租都快交不起，年近六旬的孙师傅决定不再躺在过去的奖状上叹气，报名去夜校跟二十多岁的年轻老师从头学数码微单布光与人像精修软件。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "他把几十年的传统暗房光影美学与现代无损修图技术结合起来，推出「自然不假白、保留岁月质感」的中老年肖像与全家福定制服务。",
        "visual": {
          "scene": "workshop",
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
        "scene": "market",
        "text": "凭着老功底加上新技艺，老照相馆重新排起了预约长队，孙师傅常说老本总有坐吃山空的一天，唯有不断添新柴火才能长旺。",
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
    "interpretation": "过去的成绩、文凭与资历就像银行里的定期存款，如果只支取不存入，在时代飞速迭代的通胀下很快就会贬值见底。把过去的「老本」当成跃升的新起点，而不是混日子的安乐椅。",
    "limits": "不吃老本意味着持续更新知识体系，但并非全盘否定自己过去沉淀下来的核心底层功底。",
    "reflectionQuestion": "如果把五年前就已经掌握的技能全部清零，在过去一年里你新长出来的、能拿得出手的硬本事是什么？",
    "source": "现代汉语常用惯用语，比喻依赖旧有资本不思进取。",
    "sourceStatus": "folk"
  },
  {
    "id": "chang-gao-diao",
    "text": "唱高调",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "做事与执行",
      "诚信与责任"
    ],
    "plainExplanation": "说话只讲脱离实际、听起来冠冕堂皇却根本无法落地的漂亮大道理，而不做具体务实的工作。",
    "storyTitle": "冬季流浪猫安置点的务实方案",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "入冬前社区讨论如何处理院里的几只流浪猫，有人在群里大「唱高调」，一会儿呼吁建豪华恒温玻璃猫舍，一会儿斥责没捐款的邻居缺乏大爱，却从不下楼干一件实事。",
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
        "scene": "office",
        "text": "而其他厌烦猫叫的住户则强烈抗议，两边在群里吵翻了天，流浪猫依然在寒风里乱翻垃圾桶。",
        "visual": {
          "scene": "office",
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
        "scene": "workshop",
        "text": "梅姐没有在群里唱半句道德高调，而是联合两位兽医邻居默默做好三件实事：众筹为五只猫做完绝育防止扰民、在僻静灌木丛深处用废木箱搭好防风猫窝、定人定点清理猫粮残渣。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "mei",
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
        "scene": "courtyard",
        "text": "既护住了小动物过冬，又彻底解决了叫声与卫生困扰，邻居们感慨：干一件落地的实事，胜过在群里唱一千句高调。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "高调之所以招人反感，是因为它用零成本的口头道德优越感，掩盖了对具体现实困难的无视。少讲空洞宏大的口号，多去解决一个具体的痛点、钉牢一颗具体的钉子。",
    "limits": "反对脱离实际的唱高调，不等于放弃高尚的价值追求；理性的理想主义正是把高远目标拆解为脚下可执行的步骤。",
    "reflectionQuestion": "在讨论一个公共议题或工作难题时，你提出的建议是偏向好听却难落地的「高调」，还是立即可执行的「小步实招」？",
    "source": "现代汉语常用惯用语，讽刺言辞高亢而脱离实际。",
    "sourceStatus": "folk",
    "relatedIds": [
      "jiao-ta-shi-di",
      "shen-ti-li-xing"
    ]
  },
  {
    "id": "dang-er-pang-feng",
    "text": "当耳旁风",
    "category": "guanyongyu",
    "tags": [
      "谨慎与风险",
      "沟通与表达",
      "自省与成长"
    ],
    "plainExplanation": "把别人善意的提醒、规劝或操作规范当成从耳边吹过的微风一样，听过就算，完全不放在心上。",
    "storyTitle": "实验室通风橱操作规程的警钟",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "化学实验室每次开课前，管理员陈老师都会反复叮嘱配制挥发性试剂必须在开启强排风的通风橱内进行，个别学生却觉得老师啰嗦，总是「当耳旁风」。",
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
        "text": "一次实验课上，邻桌同学图省事直接在普通实验台上敞口倾倒浓盐酸，刺鼻的白雾瞬间弥漫，呛得周围几人剧烈咳嗽流泪。",
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
        "text": "一直把安全叮嘱牢记在心的小童立即屏息按下墙上的紧急强排风按钮，并递上湿毛巾帮大家撤到走廊通风处，避免了吸入灼伤。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
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
        "scene": "workshop",
        "text": "经历这次惊险后，全班同学再也不敢把安全规程当耳旁风，每次进实验室第一件事就是核对防护眼镜与通风橱风速。",
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
    "interpretation": "那些被前人、长辈或规章制度反反复复念叨的话，之所以显得「老生常谈」，往往是因为每一条背后都曾有过惨痛的代价。把逆耳的叮嘱收进心里变成肌肉记忆，才是对自己真正的负责。",
    "limits": "重视善意提醒不当耳旁风，主要针对安全底线与良言规劝；对于毫无根据的流言蜚语，则恰恰应当作耳旁风一笑置之。",
    "reflectionQuestion": "身边人对你健康或安全最常念叨的那句提醒，你是不是一直当成了「耳旁风」？今天能为它做一个小改变吗？",
    "source": "唐代杜荀鹤诗及明代冯梦龙《醒世恒言》（「却如耳边风一般，全然不睬」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "bu-ting-lao-ren-yan-chi-kui-zai-yan-qian"
    ]
  },
  {
    "id": "gua-yang-tou-mai-gou-rou",
    "text": "挂羊头卖狗肉",
    "category": "guanyongyu",
    "tags": [
      "诚信与责任",
      "消费与欲望",
      "判断与偏见"
    ],
    "plainExplanation": "铺子外面挂着精致的羊头做招牌，里面实际兜售的却是廉价的狗肉；比喻用体面好听的名义做幌子，暗地里兜售低劣货色或干欺骗勾当。",
    "storyTitle": "识破「免费养生讲座」背后的推销局",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "街角新开了一家会馆，门口挂着「社区中老年公益健康科普大讲堂」的红横幅，还每天免费派发六个鸡蛋吸引老人进场。",
        "visual": {
          "scene": "street",
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
        "scene": "market",
        "text": "老林陪老伴去听了一次，发现前十分钟讲的所谓健康常识全是东拼西凑的套话，后五十分钟突然锁上大门，全力推销五千元一盒的无批号磁疗床垫。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "lin",
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
        "scene": "home",
        "text": "老林当场看穿这是典型的「挂羊头卖狗肉」——挂着公益科普的羊头，卖着天价三无保健品的狗肉，立即拉着老伴和几位老街坊离场。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "text": "随后老林将该会馆虚假宣传的录音与传单提交给市场监管所，帮大伙守住了养老钱袋子。",
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
    "interpretation": "凡是名头格外崇高、诱饵格外丰厚，却在核心资质上遮遮掩掩的事物，往往藏着挂羊头卖狗肉的猫腻。不贪进门那六个免费鸡蛋的诱饵，才能看清货架上真正兜售的是什么。",
    "limits": "保持对名实不符骗局的警惕，同时对真正由正规医院、社区举办的公益科普活动则应客观看待。",
    "reflectionQuestion": "你最近在网上或生活中有没有遇到过打着「免费福利、内部学习」旗号，最后却是为了高价割韭菜的套路？",
    "source": "宋代释普济《五灯会元》及《晏子春秋》「悬牛首于门而卖马肉于内」流变。",
    "sourceStatus": "classical",
    "relatedIds": [
      "xun-ming-ze-shi"
    ]
  },
  {
    "id": "chi-bi-men-geng",
    "text": "吃闭门羹",
    "category": "guanyongyu",
    "tags": [
      "情绪与心态",
      "沟通与表达",
      "工作与职业"
    ],
    "plainExplanation": "去拜访或办事时被主人拒之门外；比喻在求职、调研或合作洽谈中遭到冷遇或拒绝。",
    "storyTitle": "非遗调研员三次登门拜访老匠人",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "小肖为撰写地方传统锡器工艺志，满怀热情地去拜访脾气倔强的八旬老锡匠赵师父，结果老人一听说是来采访的，隔着门摆摆手让他走了，结结实实吃了顿「闭门羹」。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "courtyard",
        "text": "小肖没有灰心赌气，打听后得知曾有自媒体去拍视频断章取义博眼球，伤了老人的心；于是他花两周啃透了明清锡器文献并手绘了十几张工艺图。",
        "visual": {
          "scene": "courtyard",
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
        "text": "第二次登门时，小肖没带摄像机，只从门缝递进那本手绘考证笔记；第三次再去时，赵师父主动打开了院门，指着笔记上的一处焊锡配比与他聊了整整一下午。",
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
        "scene": "workshop",
        "text": "小肖感慨：吃闭门羹往往不是终局，而是检验你诚意与专业准备够不够扎实的门槛。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "pot"
          ],
          "focusProp": "pot",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "在人际合作与探索中，「吃闭门羹」是再正常不过的常态。脆弱的人把拒之门外当成对自尊的羞辱而拂袖离去；成熟的人则去分析门为什么关着，用足够的专业度与真诚去铸造开门的钥匙。",
    "limits": "面对闭门羹保持韧性，前提是拜访目的正当且尊重对方边界；若涉及私人生活领域对方明确拒绝打扰，则应知趣退让。",
    "reflectionQuestion": "你上一次在工作或沟通中「吃闭门羹」后，是直接放弃了，还是换了一种更有诚意的方式重新敲开了门？",
    "source": "唐代冯贽《云仙杂记》典故（史凤以羹待客而不见，称闭门羹）。",
    "sourceStatus": "classical"
  },
  {
    "id": "tai-jiao-zi",
    "text": "抬轿子",
    "category": "guanyongyu",
    "tags": [
      "人际关系",
      "判断与偏见",
      "沟通与表达"
    ],
    "plainExplanation": "几个轿夫一齐把坐轿的人高高抬起；比喻为了奉承讨好某人而无原则地互相吹捧、帮腔造势。",
    "storyTitle": "拒绝互相吹捧的读书品鉴会",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老周参加过几次圈子里的作品研讨会，发现大家发言时全在互相「抬轿子」，不管文章写得多平庸都一律夸成传世佳作，听得人如坐针毡。",
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
        "text": "轮到老周自己主办青年作者改稿会时，他开场第一条公约就是：「今天咱们谁也不给谁抬轿子，只讲三成优点、必须提七成具体修改建议。」",
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
        "scene": "park",
        "text": "会上大家卸下客套包袱，逐段推敲字句、直指逻辑漏洞；有位作者改完三稿后由衷感谢老周：「以前别人给我抬轿子抬得我晕乎乎，今天这几盆清醒水才帮我真正长了文笔。」",
        "visual": {
          "scene": "park",
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
        "text": "不抬轿子的改稿会成了全城口碑最硬的写作工坊，真正想精进的人都抢着来报名。",
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
    "interpretation": "被人高高抬在花轿里看似威风八面，实则双脚离地、最容易摔跟头。远离那些只会无脑吹捧抬轿子的圈子，亲近那些敢于让你脚踏实地的朋友，才不会在虚假的赞歌中迷失自我。",
    "limits": "不搞庸俗吹捧的「抬轿子」，不等于吝啬对他人真实成绩的真诚肯定；实事求是的赞赏与无底线吹捧截然不同。",
    "reflectionQuestion": "当周围人都在顺着你的心意夸赞吹捧时，你心里能否保持一分清醒、去听听有没有被轿子遮住的短板？",
    "source": "清代官场小说及近代熟语，喻指奉承吹捧。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wen-guo-ze-xi",
      "zhi-yan-bu-hui"
    ]
  },
  {
    "id": "zhao-tai-jie-xia",
    "text": "给台阶下",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "家庭与生活"
    ],
    "plainExplanation": "当别人在争执或失误中陷入骑虎难下的尴尬境地时，主动说一句缓和的话或提供一个体面的转圜余地，让对方能顺势认错收场。",
    "storyTitle": "餐桌上化解父亲固执的半碗汤",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "父亲做红烧鱼时错把白糖当成盐多放了两勺，端上桌尝了一口明明甜得发腻，可老爷子好面子，嘴硬说这叫苏式本帮新做法，谁说不好吃他就瞪眼。",
        "visual": {
          "scene": "home",
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
        "scene": "kitchen",
        "text": "弟弟刚想当场拆穿嘲笑，梅姐轻轻在桌下碰了弟弟一下，笑着起身去厨房拿回一碟陈醋和生姜丝，给父亲递了个「台阶」。",
        "visual": {
          "scene": "kitchen",
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
        "text": "梅姐笑着说：「爸今天这糖色炒得真亮！要是再淋半勺镇江香醋中和一下，那就是地道的糖醋活鱼了，我来给您调一碗试试。」",
        "visual": {
          "scene": "home",
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
        "text": "父亲顺着台阶点点头，回厨房回锅加醋收汁，端出来果真酸甜适口，全家人高高兴兴吃光了一整盘鱼。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "在亲密关系与日常沟通中，「赢了道理却伤了感情」往往是因为把对方逼到了墙角。当对方心里其实已经知道错了、只是面子上挂不住时，递上一级温和的台阶，是最高情商的善良。",
    "limits": "给台阶下适用于日常生活琐事与已知错的好面子场合；在涉及违法乱纪或重大安全事故问责时，则不可搞纵容式的模糊处理。",
    "reflectionQuestion": "在跟家人或伴侣拌嘴后，当对方已经露出软化迹象时，你是习惯穷追猛打逼对方低头，还是顺手递个台阶一起翻篇？",
    "source": "源于建筑台阶与戏曲下台动作之比喻，现代沟通高频熟语。",
    "sourceStatus": "folk"
  },
  {
    "id": "chui-zhen-feng",
    "text": "吹枕头风",
    "category": "guanyongyu",
    "tags": [
      "家庭与生活",
      "判断与偏见",
      "人际关系"
    ],
    "plainExplanation": "比喻夫妻或亲密伴侣在私下休息时，通过耳语劝说对另一方的判断或决定施加影响；可用作正向规劝，也常警惕偏听偏信。",
    "storyTitle": "老伴在枕边劝阻的高息借款",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林的一位远房表亲找上门，神神秘秘地说有个年化回报百分之三十的海外矿产项目，拉老林把三十万养老金投进去。",
        "visual": {
          "scene": "home",
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
        "text": "老林抹不开亲戚面子又有点心动，当晚躺在床上翻来覆去准备第二天去银行转账；老伴看在眼里，温和但坚定地在耳边吹起了清醒的「枕头风」。",
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
        "scene": "study",
        "text": "老伴帮他算了三笔账：第一，正规银行理财才两三个点，三十个点必有诈；第二，表亲自己都还欠着外债；第三，这笔钱是老两口看病的底线钱，绝不能动。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "lin",
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
        "text": "一席话把老林从发热的头脑中拉了回来，次日婉拒了表亲；半年后那个所谓矿产盘子果真暴雷跑路，老林直夸老伴这阵枕头风吹得好。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "身处局中的人有时容易被面子或贪念蒙住眼睛，而最亲近的伴侣往往能从家庭整体安全的角度看清风险。善意清醒的枕边提醒是家庭的防火墙，但若涉及公共职权与大家庭是非，则需警惕偏听一面之词。",
    "limits": "伴侣间的私下规劝应立足于遵纪守法与理性事实，切不可变成挑拨亲友关系或干预公务公正的私心耳语。",
    "reflectionQuestion": "在做涉及全家利益的决定时，你是否愿意静下心来听听伴侣或家人从另一个角度泼来的清醒提醒？",
    "source": "明代兰陵笑笑生《金瓶梅》及冯梦龙《醒世恒言》常见熟语。",
    "sourceStatus": "classical"
  },
  {
    "id": "da-suan-pan-zhu",
    "text": "铁公鸡",
    "category": "guanyongyu",
    "tags": [
      "消费与欲望",
      "人际关系",
      "得失与取舍"
    ],
    "plainExplanation": "铁铸的公鸡身上一根毛也拔不下来；比喻为人极端吝啬抠门，在应当承担的合理费用或人情往来上一毛不拔。",
    "storyTitle": "AA制聚餐里的那位逃单客",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "几个老同行每月小聚一次交流行业信息，大家都自觉轮流做东或群收款平摊餐费，唯独老钱每次到了结账时刻不是低头假装回电话，就是借口上厕所溜之大吉。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
        "scene": "street",
        "text": "不仅聚餐一毛不拔，平时他来店里找孙老板借包装胶带、拿样品耗材也从不归还，背地里被大家戏称为「铁公鸡」。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "sun",
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
        "text": "后来行业里有一批利润丰厚的联合展销大单，需要找信得过、肯共担前期展位费的伙伴组团，大家不约而同地把老钱排除在了名单之外。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "sun",
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
        "text": "老钱得知后懊悔不已：以为平时拔别人几根毛占了便宜，结果在真正的大机会面前，没人愿意跟一只铁公鸡共事。",
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
    "interpretation": "正常的勤俭节约是对自己物欲的克制，而「铁公鸡」式的吝啬则是想方设法把成本转嫁给身边人。人际交往本质上是一场长线的能量互换，总是只想白占便宜、一毛不拔的人，最终会把自己的路越走越窄。",
    "limits": "不当占人便宜的铁公鸡，并不意味着要走向挥霍充阔的极端；对自己节俭、对朋友厚道有礼，才是健康的财务观。",
    "reflectionQuestion": "在朋友聚会或团队协作中，你是否做到了在共同开销与苦活分担上主动、爽快、不让别人吃亏？",
    "source": "清代李宝嘉《官场现形记》等常见俗语（「铁公鸡一毛不拔」）。",
    "sourceStatus": "classical",
    "contrastIds": [
      "da-zhong-lian-chong-pang-zi"
    ]
  },
  {
    "id": "chuan-yi-tiao-ku-zi",
    "text": "鼻孔出气",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "独立思考",
      "团队合作"
    ],
    "plainExplanation": "常作「一个鼻孔出气」，比喻几个人立场、腔调完全一致，有时指失去独立判断力、盲目跟从小圈子的偏见。",
    "storyTitle": "评审席上独立打分的评委",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "区里举办青年木工创意赛，五位评委中有两位来自同一家大厂，赛前私下暗示陈师父给他们厂的参赛选手统一打高分，大家「一个鼻孔出气」好交差。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "chen",
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
        "scene": "office",
        "text": "陈师父当场婉拒：「手艺比赛看的是榫卯严不严、线条正不正，我的评分笔只跟作品本身出气。」",
        "visual": {
          "scene": "office",
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
        "scene": "study",
        "text": "评审现场，陈师父拿着卡尺逐件实测全部二十件匿名作品，给一位名不见经传但结构精巧的独立学徒打出了全场最高分，并详细写明三项加分实据。",
        "visual": {
          "scene": "study",
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
        "scene": "school",
        "text": "在陈师父详实数据的带动下，其余评委也纷纷回归客观标准，那位独立学徒最终凭实力夺冠，赛事公信力赢得满堂彩。",
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
    "interpretation": "在小圈子里跟人「一个鼻孔出气」虽然省心安全，却意味着交出了自己的脊梁骨与判断力。无论是专业评审还是是非判断，只认客观标准、不看圈子眼色，才配得上专业二字。",
    "limits": "保持独立判断不与偏私者一个鼻孔出气，与团队达成正当共识后的「步调一致、齐心协力」不可混为一谈。",
    "reflectionQuestion": "当身边小圈子都在抱团偏袒某一方时，你能否守住内心的客观尺子，只根据事实本身发声？",
    "source": "宋元以来俗语，《红楼梦》等白话小说常见。",
    "sourceStatus": "classical",
    "relatedIds": [
      "he-er-bu-tong"
    ]
  },
  {
    "id": "chi-ding-men-wan",
    "text": "拍胸脯",
    "category": "guanyongyu",
    "tags": [
      "谨慎与风险",
      "诚信与责任",
      "沟通与表达"
    ],
    "plainExplanation": "用手拍着胸膛表示百分之百打包票；比喻在尚未摸清全部困难与风险之前，就头脑发热地大包大揽、盲目许诺。",
    "storyTitle": "没看图纸就拍胸脯接下的急单",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "客户拿来一批异形曲木椅的定制单要求三天交货，年轻组长小刘看都没看详细工艺图，当场「拍胸脯」打包票说绝对没问题。",
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
        "text": "等客户一走打开图纸才傻了眼：这种复合弧度必须先经过四十八小时蒸汽弯曲定型与二十四小时恒温烘干，物理时间上三天根本不可能做完。",
        "visual": {
          "scene": "workshop",
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
        "scene": "office",
        "text": "老姜知道后带着小刘立刻上门向客户赔礼道歉，拿出热弯工艺参数表坦诚说明需要六天工期，并免费提供十把备用样椅供客户活动应急。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
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
        "text": "客户谅解了实情并同意延期，老姜语重心长地告诫小刘：靠谱的人从不在看清图纸前乱拍胸脯，核实完底线再开口才叫真本事。",
        "visual": {
          "scene": "workshop",
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
    "interpretation": "喜欢当场「拍胸脯」的人，往往是把当下的豪爽痛快凌驾于事后的履约质量之上。真正的专业主义是：在调查清楚客观限制之前保持审慎，一旦经过测算接下任务则全力以赴兑现。",
    "limits": "戒除盲目拍胸脯，不是要在职责范围内推诿退缩，而是养成「先核实条件、再给出准确承诺」的职业习惯。",
    "reflectionQuestion": "当领导或客户问你「这事能不能三天搞定」时，你是习惯先顺口拍胸脯应下来，还是先说「请给我半小时核对一下关键节点再回复您」？",
    "source": "现代汉语常用惯用语，以动作描写比喻大包大揽。",
    "sourceStatus": "folk",
    "relatedIds": [
      "kai-kong-tou-zhi-piao",
      "san-si-er-hou-xing"
    ]
  },
  {
    "id": "bao-cu-tui",
    "text": "抱粗腿",
    "category": "guanyongyu",
    "tags": [
      "工作与职业",
      "自省与成长",
      "判断与偏见"
    ],
    "plainExplanation": "比喻不靠自身扎实的真才实学去立足，而是专门巴结攀附有权势或有资源的人以求走捷径获利。",
    "storyTitle": "靠作品说话的青年插画师",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "出版社招募绘本主创时，同批进来的小张天天忙着打听哪位主编权力大，跑前跑后送茶水「抱粗腿」，画稿却敷衍粗糙。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "tong",
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
        "text": "小童则很少去凑那些热闹应酬，每天安静坐在画板前打磨分镜与色彩肌理，把二十四节气的儿童绘本小样画得细腻灵动。",
        "visual": {
          "scene": "study",
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
        "text": "半年后原主编调任，新来的评审组实行全匿名盲审招标，小张那些靠人情混过初审的粗糙画稿第一轮就被全部淘汰。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
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
        "scene": "office",
        "text": "而小童那套扎实的二十四节气绘本凭借过硬的艺术水准全票中标，她更加笃定：与其费尽心机去抱别人的粗腿，不如把自己的双腿练成打不倒的铁柱。",
        "visual": {
          "scene": "office",
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
    "interpretation": "攀附外部靠山得来的便利，随时会随着靠山的移动而瞬间崩塌；唯有长在自己身上的手艺、学识与口碑，是谁也拿不走的硬通货。把巴结迎合的时间省下来打磨作品，路才会越走越宽。",
    "limits": "反对庸俗攀附的「抱粗腿」，并不排斥与优秀前辈建立真诚平等的学术请教与业务合作关系。",
    "reflectionQuestion": "在你的职业发展中，你把多少精力花在了经营表面人情圈子上，又把多少精力花在了打磨不可替代的专业看家本领上？",
    "source": "近代民间俗语，亦作「抱大腿」，喻指攀附权贵。",
    "sourceStatus": "folk",
    "relatedIds": [
      "da-shu-di-xia-hao-cheng-liang"
    ]
  },
  {
    "id": "qiao-wei-ba",
    "text": "翘尾巴",
    "category": "guanyongyu",
    "tags": [
      "自省与成长",
      "情绪与心态",
      "判断与偏见"
    ],
    "plainExplanation": "比喻在取得一点小小的成绩或受到几句表扬之后，就沾沾自喜、骄傲自大起来，听不进别人的意见。",
    "storyTitle": "月考第一名后的错题本警醒",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "小肖在全校物理竞赛初赛中拿了第一名，老师当众表扬了几句，他回家后便开始「翘尾巴」，觉得复赛闭着眼睛也能拿奖，连基础实验题都不屑再做。",
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
        "text": "父亲看出了他的骄娇二气，周末带他去拜访退休的省队总教练，做了一套往年复赛真题摸底测试。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
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
        "text": "结果两小时下来，小肖在两道看似基础却暗藏边界条件的实验设计题上全军覆没，只拿到及格分，发烫的头脑瞬间清醒过来。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "mirror"
          ],
          "focusProp": "mirror",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "school",
        "text": "小肖收起翘起的尾巴，把那张满是红叉的摸底卷贴在书桌前，老老实实把实验基本功重头梳理了一遍，最终在复赛中稳稳夺银。",
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
    "interpretation": "顺境与赞美是最容易让人「翘尾巴」的温床。一旦尾巴翘起来，眼睛就会朝天看，脚下的坑洼与近处的隐患就全看不见了。越是拿到好成绩的时刻，越要主动给自己找一找短板。",
    "limits": "戒除骄傲翘尾巴，是为了保持清醒的精进状态，而非否定自己的真实努力与合理自信。",
    "reflectionQuestion": "最近一次你取得不错成绩或受到夸奖后，有没有在接下来的任务里出现过因为轻敌大意而犯的低级错误？",
    "source": "现代汉语常用惯用语，生动比喻骄傲自满的神态。",
    "sourceStatus": "folk",
    "relatedIds": [
      "man-zhao-sun-qian-shou-yi"
    ]
  },
  {
    "id": "da-yuan-chang",
    "text": "打圆场",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "团队合作"
    ],
    "plainExplanation": "当在场的人因言语磕碰而气氛僵硬尴尬时，由旁人适时插话缓和气氛、替双方解围，使交流得以顺畅继续。",
    "storyTitle": "老同学聚会上的幽默解围",
    "sceneDomain": "朋友交往",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "毕业十周年同学聚餐上，老张无心说了一句「干咱们这行还没买房就是混得不行」，恰好戳中了刚创业受挫租房住的老李，老李脸色铁青准备拍案离席。",
        "visual": {
          "scene": "market",
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
        "text": "满桌人瞬间安静得掉根针都能听见，老张也意识到自己失言却不知如何收回；坐在一旁的老周立刻端起茶杯站起来「打圆场」。",
        "visual": {
          "scene": "market",
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
        "scene": "courtyard",
        "text": "老周笑着自嘲道：「按老张这标准，我当年结婚还在单位宿舍借住了三年，在座各位今天都得罚我三杯茶！老李那间工作室我上周刚去过，满墙专利证书才是真本事！」",
        "visual": {
          "scene": "courtyard",
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
        "scene": "home",
        "text": "一句话既给失言的老张留了认错台阶，又帮老李挣足了体面，老张顺势向老李敬茶赔罪，满桌重归欢声笑语。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "zhou",
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
    "interpretation": "人际交往中难免有话说急了、开玩笑失了分寸的尴尬时刻。善意的「打圆场」不是模糊大是大非的稀泥，而是用幽默与共情做润滑剂，防止一次无心的口误演变成不可收拾的恩怨。",
    "limits": "打圆场适用于朋友聚会、家庭闲聊中的无心失言解围；在严肃的事故问责或原则是非面前，则不应靠打圆场蒙混过关。",
    "reflectionQuestion": "在聚会或会议中遇到别人因一句无心之言陷入僵局时，你是否掌握一两句温和得体的转场话术来帮大家解围？",
    "source": "源于旧时江湖卖艺围场说合之行话，现代常用交际熟语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhao-tai-jie-xia"
    ]
  },
  {
    "id": "peng-ding-zi",
    "text": "碰钉子",
    "category": "guanyongyu",
    "tags": [
      "自省与成长",
      "沟通与表达",
      "工作与职业"
    ],
    "plainExplanation": "比喻在办事或向人提出要求时，因为准备不足、方法生硬或要求不合理而遭到严词拒绝或受到挫折。",
    "storyTitle": "跨部门借调设备的碰壁与改进",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "小肖负责的新品测试急需借用隔壁实验室的高精度光谱仪，他空着手直接冲进隔壁找王主任说：「把你们光谱仪借我用两天！」结果被王主任一口回绝，结结实实「碰了个钉子」。",
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
        "scene": "workshop",
        "text": "小肖捂着额头回来向师父抱怨王主任太小气；师父却问他：「你知道他们实验室下午正好在赶年度认证测试吗？你连使用时段和样品安全性都没说明，换你你敢借吗？」",
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
        "scene": "office",
        "text": "小肖恍然大悟，先查清隔壁实验室的空闲排期表，写好一份包含样品无腐蚀性证明、借用时段（周六晚八点至十点）及清洁承诺的规范申请单。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "xiao",
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
        "text": "再次登门时，王主任看了一眼详实的错峰方案，二话不说签字批了钥匙，小肖明白了许多钉子其实是自己鲁莽撞上去的。",
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
    "interpretation": "办事「碰钉子」时，先别急着骂钉子太硬。往往是因为我们只考虑了自己的需求，却忽略了对方的顾虑、排期与规则风险。把对方的担忧提前化解在方案里，硬钉子自然就变成了顺畅的卯眼。",
    "limits": "从碰钉子中反思沟通方式，有助于提升协作效率；但若遭遇的是吃拿卡要等不正之风，则应据理依规维权。",
    "reflectionQuestion": "回顾你最近一次请人帮忙或跨部门协作「碰钉子」的经历，如果当时换一种照顾对方顾虑的提法，结果会不会不同？",
    "source": "清代吴趼人《二十年目睹之怪现状》及官场小说常见熟语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "chi-bi-men-geng",
      "fan-qiu-zhu-ji"
    ]
  },
  {
    "id": "la-hou-tui",
    "text": "拖后腿",
    "category": "guanyongyu",
    "tags": [
      "合作与分工",
      "团队合作",
      "沟通与表达"
    ],
    "plainExplanation": "比喻在集体行动或亲友上进时，因为个别成员跟不上节奏或设置无谓阻碍，牵制了整体前进的步伐。",
    "storyTitle": "接力赛前帮慢队友改交接棒",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "班级准备参加校运会四百米混合接力赛，第三棒的小胖体能偏弱，试跑时比前两棒慢了三秒，有队员抱怨他「拖后腿」想换人。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
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
        "scene": "park",
        "text": "队长小童拦住了指责，指出接力赛最容易丢时间的不是绝对跑速，而是交接棒那二十米缓冲区的降速停顿。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "tong",
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
        "scene": "park",
        "text": "小童带着全队陪小胖专门特训盲接棒配合：第二棒提前五米喊口令，小胖提前助跑在最高速瞬间接棒，一分一秒抠细节。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "tong",
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
        "scene": "school",
        "text": "正式比赛时四人交接棒如行云流水零停顿，硬是凭完美的衔接弥补了单棒绝对速度，夺得年级亚军，再也没人提拖后腿三个字。",
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
    "interpretation": "在团队里，当某个环节显得「拖后腿」时，一味埋怨指责只会让对方更加紧张失常。真正优秀的团队会把短板当成流程优化的突破口，用机制配合与互相托举把整条链条拉平。",
    "limits": "团队互助补短板的同时，作为个人也应自觉加强基本功训练，争取不做被动拖累集体的那一环。",
    "reflectionQuestion": "当家里或团队里有人进度稍慢时，你的第一反应是嫌弃他「拖后腿」，还是过去看看卡在哪个具体动作上能搭把手？",
    "source": "现代汉语常用惯用语，比喻牵制或延误整体进展。",
    "sourceStatus": "folk",
    "relatedIds": [
      "qu-chang-bu-duan",
      "tong-zhou-gong-ji"
    ]
  },
  {
    "id": "chi-ya-ba-kui",
    "text": "吃哑巴亏",
    "category": "guanyongyu",
    "tags": [
      "谨慎与风险",
      "诚信与责任",
      "消费与欲望"
    ],
    "plainExplanation": "遭受了实实在在的损失或冤屈，却因为事先没留凭证或碍于某种顾虑而有苦说不出，只能暗自咽下苦果。",
    "storyTitle": "租房交接时的水电表拍照留底",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖第一次毕业租房时，轻信了二房东口头说的「家具完好、水电结清」，既没签补充清单也没拍水电表读数。",
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
        "scene": "office",
        "text": "半年后退租时，二房东指着原本就有一道裂痕的茶几和前任租客留下的三百元水电欠费，硬扣了他一千元押金，小肖因毫无证据只能「吃了个哑巴亏」。",
        "visual": {
          "scene": "office",
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
        "scene": "home",
        "text": "第二次换房时，姐姐梅姐陪他一起验房：用手机带时间水印拍下水电气三表读数、墙面既有划痕，并逐项写进合同附件双方签字摁手印。",
        "visual": {
          "scene": "home",
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
        "scene": "courtyard",
        "text": "一年后期满退租，房东对照清清楚楚的照片与清单，十分钟便痛快退还了全额押金，小肖感叹留好证据才不会吃哑巴亏。",
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
    "interpretation": "吃哑巴亏往往不是因为对方多狡猾，而是因为我们在顺境交接时抹不开面子、省掉了「先小人后君子」的留证步骤。把口头约定落到白纸黑字与时间戳照片上，是对双方诚信最好的保护。",
    "limits": "留存凭证是为了防备纠纷与保障正当权益，并非对所有交往对象都抱持恶意揣测。",
    "reflectionQuestion": "在最近一次涉及金钱往来、物品借用或工作交接中，你是否留下了足以自证清白的客观书面记录？",
    "source": "近代民间熟语，喻指有苦难言的亏损。",
    "sourceStatus": "folk"
  },
  {
    "id": "da-shui-piao",
    "text": "打水漂",
    "category": "guanyongyu",
    "tags": [
      "消费与欲望",
      "得失与取舍",
      "谨慎与风险"
    ],
    "plainExplanation": "用瓦片贴着水面扔出去溅起几朵水花便沉入水底；比喻投入的金钱、心血或时间白白打了水漂，毫无实质回报。",
    "storyTitle": "冲动办卡的健身房年卡教训",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "年初街对面新开一家豪华健身会所，销售员拦住老林热情推销：「今天办三年卡只要三千八，平均一天才三块钱！」老林一冲动就刷了卡。",
        "visual": {
          "scene": "street",
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
        "text": "头一周老林去了两次，之后便觉得换衣服、排队等器械太折腾，加上会所离家要过两个天桥，那张卡在抽屉里整整躺了大半年。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "park",
        "text": "到了十月再去一看，会所因经营不善大门紧锁，三千八百元会费彻底「打了水漂」，连个响声都没听见。",
        "visual": {
          "scene": "park",
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
        "text": "吸取教训后，老林改为每天清晨在社区公园免费步道快走四十分钟，不花一分钱办卡，血压和体重却实实在在降了下来。",
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
    "interpretation": "很多钱之所以会「打水漂」，是因为我们在掏腰包的那一刻，误把「付费的瞬间」当成了「已经拥有自律结果」。凡是不符合自己真实生活动线与使用习惯的大额预付费，十有八九都会沉入水底。",
    "limits": "防范投入打水漂是指拒绝盲目预付和冲动投资；在科学研究或技能探索中必要的试错成本，则不属于无意义的打水漂。",
    "reflectionQuestion": "盘点一下你过去两年办过的会员卡、买过的网课或器材，有哪几笔其实是彻头彻尾「打了水漂」的？",
    "source": "源于民间投石掠水游戏「打水漂」，后引申指投入落空。",
    "sourceStatus": "folk"
  },
  {
    "id": "kai-xiao-chai",
    "text": "开小差",
    "category": "guanyongyu",
    "tags": [
      "学习与积累",
      "做事与执行",
      "时间与耐心"
    ],
    "plainExplanation": "原指旧时士兵私自脱离队伍逃跑；现多比喻在学习、开会或操作过程中思想走神、注意力溜号。",
    "storyTitle": "中药煎制房里的定时沙漏与专注",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "中药房代客煎药讲究文武火候转换，学徒小刘在看守三号砂锅时思想「开了小差」，掏出手机刷起了球赛集锦。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
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
        "scene": "kitchen",
        "text": "短短八分钟走神，锅里名贵的滋补汤药水分熬干糊底，满屋焦味，不仅赔了客人整副药材，砂锅也因干烧炸裂。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "孙药师没有简单罚钱了事，而是立下规矩：进入煎药房一律将手机锁入外间保管箱，每口锅配独立双响倒计时器与手写巡检牌。",
        "visual": {
          "scene": "workshop",
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
        "scene": "study",
        "text": "切断了让思想开小差的诱惑源后，小刘全神贯注守在药炉前看汤色闻药香，连续三千锅代煎药再未出过一次焦糊。",
        "visual": {
          "scene": "study",
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
    "interpretation": "在需要精准把控的操作、驾驶或深度思考中，哪怕只有三十秒的「思想开小差」，都可能让前99%的努力付诸东流。真正的专注不仅靠意志力硬扛，更靠主动清理工作台周围的分心诱惑。",
    "limits": "工作操作时严防开小差，但大脑不可能24小时紧绷；每工作一小时主动安排十分钟休息放空，反而能防止工作时走神。",
    "reflectionQuestion": "你在做哪类事情时最容易不由自主地「思想开小差」？那个把你注意力勾走的诱因通常是什么？",
    "source": "源于近代军营俗语，后泛指注意力分散走神。",
    "sourceStatus": "folk",
    "relatedIds": [
      "zhuan-xin-zhi-zhi"
    ]
  },
  {
    "id": "ji-dan-li-tiao-gu-tou",
    "text": "鸡蛋里挑骨头",
    "category": "guanyongyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "情绪与心态"
    ],
    "plainExplanation": "鸡蛋里面本来就没有骨头，却硬要在里面找出骨头来；比喻带着偏见或成心刁难的态度，在本来做得不错的事情上故意吹毛求疵。",
    "storyTitle": "放下挑剔放大镜的周末家宴",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "以前每次妻子辛苦半天做一桌周末家宴，陈先生动筷子第一句话总是习惯性「鸡蛋里挑骨头」：不是嫌青菜咸了半口，就是嫌汤不够烫。",
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
        "scene": "home",
        "text": "直到有一回妻子出差一周，陈先生自己下厨给全家做饭，光是买菜洗切加掌勺就忙得满头大汗，做出来的菜还一盘生的、一盘糊的。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
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
        "scene": "kitchen",
        "text": "女儿尝了一口却笑眯眯地竖起大拇指：「爸爸做的西红柿炒蛋汤汁拌饭最香了！」陈先生听着女儿的夸奖，想起自己往日对妻子的吹毛求疵，顿时满脸通红。",
        "visual": {
          "scene": "kitchen",
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
        "scene": "home",
        "text": "等妻子出差回来再下厨时，陈先生第一个盛汤端盘，真心实意地夸赞每一道菜的用心，饭桌上的欢笑声比饭菜更香甜。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "chen",
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
    "interpretation": "在严肃的质量质检中需要严苛标准，但在家庭生活与亲密关系里，「鸡蛋里挑骨头」却是最伤人心气的冷暴力。把挑剔瑕疵的放大镜收起来，换成看见对方辛劳付出的望远镜，家里才会充满暖意。",
    "limits": "不在生活琐事与家人付出上鸡蛋里挑骨头，绝不意味着在关键工程安全、药品食品检验上可以放松标准。",
    "reflectionQuestion": "今天回到家面对伴侣或家人做的一件家务，你能否忍住挑那百分之五小毛病的冲动，先去夸夸那百分之九十五的辛劳？",
    "source": "明代兰陵笑笑生《金瓶梅》及清代曹雪芹《红楼梦》常见俗语。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-dao-qie",
    "text": "一刀切",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "像切豆腐一样不管具体部位和差异统统一刀切下去；比喻处理问题时不作具体调查细分，采用简单粗暴的单一规定去对待所有不同情况。",
    "storyTitle": "老小区门禁改造的分类方案",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "物业升级智慧门禁时，起初图省事搞「一刀切」：宣布三天后废除所有实体门禁卡，全员必须使用智能手机小程序动态刷码进门。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "office",
        "text": "通知一出，小区里几十位使用老年按键机、或视力不佳不会操作智能手机的高龄老人以及年幼小学生全都犯了难，在门口排起长队进不去家。",
        "visual": {
          "scene": "office",
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
        "scene": "courtyard",
        "text": "居委会老周得知后立即叫停了这种粗暴的一刀切做法，督促物业实行「三轨并行」：青年人用手机码、老年人保留大字实体加密卡、行动不便者录入人脸或按门铃由值班室远程核验开门。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "home",
        "text": "分类施策后，既堵住了外来闲杂人员尾随漏洞，又没有让任何一位老幼居民在自家门口犯难。",
        "visual": {
          "scene": "home",
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
    "interpretation": "「一刀切」之所以在管理中屡见不鲜，是因为制定规则的人把自己的省事放在了第一位，却把真实世界的复杂性与边缘群体的难处一笔抹杀了。多花一点心思做分类分级适配，才是走心不走形式的治理。",
    "limits": "反对简单粗暴的一刀切，是指在执行方式与过渡方案上因人因地制宜；在违法红线与核心安全准则面前则必须一视同仁。",
    "reflectionQuestion": "你在制定团队规则或家庭约定时，有没有考虑到里面是否存在某种特殊情况需要留出人性化的弹性通道？",
    "source": "现代汉语高频惯用语，批评机械单一的教条做法。",
    "sourceStatus": "folk",
    "relatedIds": [
      "yin-di-zhi-yi"
    ]
  },
  {
    "id": "zou-ma-guan-hua",
    "text": "走马观花",
    "category": "guanyongyu",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "骑在奔跑的马上匆匆看路边的鲜花；比喻观察事物或学习了解情况只停留在表面，浮光掠影、一带而过，没有深入接触实质。",
    "storyTitle": "拒绝打卡式赶路的古建写生",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "古建筑研学团去山西考察三天，有人定下每天跑六个景点的计划，到了千年木塔前拍张剪刀手合影、在门口待五分钟就匆匆上车「走马观花」。",
        "visual": {
          "scene": "street",
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
        "scene": "courtyard",
        "text": "小童却向领队申请脱队，整整两天只安安静静守在一座唐代古寺大殿前，仰头观察斗拱的出跳角度、梁架的月梁弧度与柱础石刻。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "study",
        "text": "她坐在石阶上一笔一画绘出三张剖面速写，还向守庙五十年的老文保员请教了屋顶琉璃脊兽的排水构造。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
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
        "scene": "courtyard",
        "text": "返程分享会上，每天跑六个景点的人连哪座庙供的什么都记混了，而小童对那一处唐代木构的透彻拆解却成了全团最宝贵的研学成果。",
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
    "interpretation": "在短视频与旅游打卡盛行的时代，我们很容易用「我看过、我去过」的数量错觉，掩盖认知的极度肤浅。走马观花看一百处，不如俯下身子把一朵花的根茎叶脉彻底看透。",
    "limits": "初期全面普查时可先快速浏览全貌，但到了核心研究与关键决策阶段则必须杜绝走马观花、沉入一线。",
    "reflectionQuestion": "最近你读过的一本书或去过的一个地方，你是「走马观花」打了个卡，还是真正留下了哪怕一个深入的观察？",
    "source": "唐代孟郊《登科后》诗（「春风得意马蹄疾，一日看尽长安花」）流变。",
    "sourceStatus": "classical"
  },
  {
    "id": "dang-mian-gu-dui-mian-luo",
    "text": "当面鼓对面锣",
    "category": "guanyongyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "诚信与责任"
    ],
    "plainExplanation": "打鼓和敲锣都在当面进行；比喻有问题、有分歧或要核对账目时，双方直接坐到一起面对面把话说清楚，不在背后嘀咕传闲话。",
    "storyTitle": "合作社年终分红账的当面核对",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "果蔬合作社年底结算后，村里私下传出几句闲话，说社长老姜进农资的运费账算得偏高，社员们见面眼神有些微妙。",
        "visual": {
          "scene": "field",
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
        "scene": "office",
        "text": "老姜听说后没有在背后跟人赌气解释，而是立刻在村祠堂摆开长桌，请来会计、农资供货商和全体社员「当面鼓对面锣」现场对账。",
        "visual": {
          "scene": "office",
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
        "text": "他把全年三十八张原始过磅单、加油票和供货商底单全部摊在桌上，请最初有疑问的两位社员亲手拿计算器一笔笔复核。",
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
        "scene": "courtyard",
        "text": "一小时对下来不仅分毫未多算，大家还发现老姜自己垫付了两次修三轮车的钱都没报销；谣言当场烟消云散，合作社人心比以前更齐了。",
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
    "interpretation": "背后的猜忌与传话就像发酵的霉菌，越捂在暗处越容易把小误会变成深仇大恨。「当面鼓对面锣」地把数据、事实与疑问摆在阳光下的桌面上，是击碎猜疑、守住信任最敞亮的做法。",
    "limits": "当面对证沟通时应保持就事论事的平和语气，旨在摆明事实消除误会，而非把对账会变成情绪化的吵架会。",
    "reflectionQuestion": "当你听说某位合作伙伴或亲友对你有一点误会时，你是习惯在心里生闷气，还是主动约对方坐下来当面把话聊透？",
    "source": "近代北方民间熟语，喻指当面把话说明白。",
    "sourceStatus": "folk",
    "relatedIds": [
      "kai-cheng-bu-gong",
      "shi-shi-sheng-yu-xiong-bian"
    ]
  },
  {
    "id": "ba-mai-wen-zhen",
    "text": "对症下药",
    "category": "guanyongyu",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "医生针对查明的具体病症开出相应的药方；比喻处理问题前先找准真正的症结根源，再采取有针对性的解决办法，不胡乱盲投。",
    "storyTitle": "黄叶果树的根系排查与救治",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "小孙果园里有十几棵柑橘树夏天突然叶片发黄卷曲，他以为是缺肥，一连追施了两次高浓度氮肥，结果树叶反而枯落得更厉害了。",
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
        "text": "老农艺师赶来拦住他，拿铁锹挖开树冠滴水线下的泥土「把脉问诊」：发现由于前阵子地势低洼积水，须根已经缺氧发黑腐烂。",
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
        "text": "老农艺师说：「根都烂了吸收不了，你再浇浓肥等于往伤口上撒盐！必须对症下药。」随即带着小孙开深沟排积水、剪除烂根并灌注生根杀菌液。",
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
        "text": "半个月后柑橘树重新抽出了翠绿的新梢，小孙牢记于心：没查清病根就乱下猛药，往往比不治更伤根本。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "fruit"
          ],
          "focusProp": "fruit",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "遇到问题时人们往往由于焦虑而患上「行动强迫症」——不管三七二十一先上一堆猛药再说。然而 symptom（表象）不等于 cause（病因）：同样是黄叶，可能是缺水，也可能是烂根。先花七分力气找准真病因，再用三分力气精准下药。",
    "limits": "对症下药要求诊断先行，在复杂问题中还需注意综合调理与动态观察反馈。",
    "reflectionQuestion": "面对当前让你头疼的一个工作或生活难题，你目前采取的措施是在「治表面的黄叶」，还是在「救地下的病根」？",
    "source": "《三国志·魏书·华佗传》（「佗遂下手，所患寻差……其疗疾，合汤不过数种，心解分剂，不复称量」流变）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shi-shi-qiu-shi",
      "yin-di-zhi-yi"
    ]
  }
];
