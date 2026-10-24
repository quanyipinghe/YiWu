import { Proverb } from '../types';

// 第四批扩展内容：格言篇
export const BATCH_GEYAN: Proverb[] = [
  {
    "id": "you-ze-gai-zhi-wu-ze-jia-mian",
    "text": "有则改之，无则加勉",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "沟通与表达",
      "情绪与心态"
    ],
    "plainExplanation": "对于别人指出的缺点或错误，如果自己身上确实有就痛快地改正，如果没有也把它当作预防提醒来鞭策自己。",
    "storyTitle": "匿名服务意见箱里的那张批评条",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "社区图书馆月末打开读者意见箱，里面有一张匿名纸条写道：「二楼借阅台个别工作人员接电话声音太大，且解答检索问题时语气生硬。」",
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
        "text": "二楼三位馆员看后，有同事第一反应是排查字迹想找出是谁写的、并辩解自己平时说话本来就嗓门大，绝没有态度不好。",
        "visual": {
          "scene": "office",
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
        "text": "组长梅姐却秉持「有则改之，无则加勉」：先带头把座机振铃调成静音闪灯，规定接听电话一律压低音量到三十分贝，同时在检索台旁贴上温和的图文指引。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
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
        "scene": "office",
        "text": "下个月意见箱里多出了三封表扬信，夸赞二楼阅览区安静得连翻书声都格外悦耳，馆员们的服务更是如沐春风。",
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
    "interpretation": "面对外界的批评，本能的自我防卫会驱使我们先去争辩「他说的有一半不准、他态度不好」。但智者懂得把批评当成免费的体检报告——有病治病，无病强身，永远是自己占便宜。",
    "limits": "有则改之无则加勉是君子自省的修养，但若遭遇恶意造谣污蔑侵害名誉底线，则应依法依规澄清事实。",
    "reflectionQuestion": "当听到一句不那么顺耳的评价时，你能否先按下辩解的冲动，问问自己「这里面有没有哪怕十分之一值得我引以为戒」？",
    "source": "《论语》朱熹集注引曾子、子夏语意总结，宋代以来家训与治学通用格言。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wen-guo-ze-xi",
      "fan-qiu-zhu-ji"
    ],
    "storyStructure": {
      "layout": "contrast",
      "premise": "读者意见箱里收到一张批评借阅台接电话声音大、语气生硬的纸条。",
      "premiseScene": "office",
      "premiseVisual": {
        "scene": "office",
        "characters": [
          {
            "id": "mei",
            "pose": "thinking"
          }
        ],
        "props": [
          "book"
        ],
        "narrative": {
          "type": "fork",
          "label": "抉择"
        }
      },
      "left": {
        "label": "做法甲：忙着辩解追查",
        "action": "追查是谁写的纸条并辩解自己天生嗓门大。",
        "outcome": "阅览室噪音依旧，投诉不断升级。",
        "tone": "caution",
        "scene": "office",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "mei",
              "pose": "hesitating"
            }
          ],
          "props": [
            "phone"
          ],
          "narrative": {
            "type": "contrast",
            "label": "忙着辩解追查"
          }
        }
      },
      "right": {
        "label": "做法乙：有改无勉",
        "action": "立刻将座机调为闪灯静音并规范轻声应答礼仪。",
        "outcome": "阅览室环境焕然一新收获好评。",
        "tone": "positive",
        "scene": "study",
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
          "narrative": {
            "type": "contrast",
            "label": "有改无勉"
          }
        }
      },
      "point": "把外界的批评当成擦亮自我的镜子，有则立改、无则防微，方能日新又新。"
    }
  },
  {
    "id": "bu-ji-kui-bu-wu-yi-zhi-qian-li",
    "text": "不积跬步，无以至千里",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "做事与执行"
    ],
    "plainExplanation": "不把半步、一步这样细小的步伐一点点积累起来，就无法抵达千里之外的远方；说明宏大成就皆由点滴实干汇聚而成。",
    "storyTitle": "邮递员二十年走出的山乡邮路图",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "二十年前老姜刚接手大山深处的乡间步班邮路时，全线往返六十里山路，每天要翻越三座山梁、跨过两条溪谷。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "rain",
        "text": "有人觉得这么苦的远路熬不过半年，老姜却只盯着脚下的每一步：晴天一身汗、雨天一身泥，每走过一处险坡就在笔记本上标清里程与避雨石洞。",
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
        "scene": "river",
        "text": "日复一日的跬步累积下来，二十年间他走过的山路总里程超过二十万公里，相当于绕赤道五圈，没有延误过一封录取通知书和汇款单。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "bridge"
          ],
          "focusProp": "bridge",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "退休那年他把积累的手绘山路水文图捐给乡防汛办，感慨再遥远的万里征途，拆开来也不过是脚下踏踏实实的每一步。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "仰望千里之外的目标常让人心生畏惧，而低头迈出半步却是每个人当下就能做到的事。不要轻视今天读完的十页书、写下的五百字、走完的三公里，正是这些不起眼的跬步在丈量你的人生半径。",
    "limits": "积跬步的前提是大的方向朝向千里目标，避免在原地打转的无效重复，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "你向往的那个「千里之外」的目标，折算到今天脚下的这一步「跬步」，具体是什么动作？",
    "source": "《荀子·劝学》（「故不积跬步，无以至千里；不积小流，无以成江海」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ji-shao-cheng-duo"
    ],
    "storyStructure": {
      "layout": "timeline",
      "stages": [
        {
          "timeLabel": "第一年·踏山径",
          "text": "背起三十斤邮包走上六十里步班山路，一步一脚印摸清每处山梁与溪渡。",
          "scene": "mountain",
          "visual": {
            "scene": "mountain",
            "characters": [
              {
                "id": "jiang",
                "pose": "walking"
              }
            ],
            "props": [
              "bag"
            ],
            "narrative": {
              "type": "time",
              "text": "第一年·踏山径"
            }
          }
        },
        {
          "timeLabel": "第五年·战风雨",
          "text": "无论寒暑雨雪从未断班，在笔记本上详细绘出沿途路况与安全避险点。",
          "scene": "rain",
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
            "narrative": {
              "type": "time",
              "text": "第五年·战风雨"
            }
          }
        },
        {
          "timeLabel": "第十年·架心桥",
          "text": "累计行程十万公里，为深山学子与老人零差错送达每一封家书与通知书。",
          "scene": "river",
          "visual": {
            "scene": "river",
            "characters": [
              {
                "id": "jiang",
                "pose": "discovering"
              }
            ],
            "props": [
              "bridge"
            ],
            "narrative": {
              "type": "time",
              "text": "第十年·架心桥"
            }
          }
        },
        {
          "timeLabel": "二十年·至千里",
          "text": "二十万公里山路汇成精准防汛乡图，平凡跬步终成不凡传奇。",
          "scene": "courtyard",
          "visual": {
            "scene": "courtyard",
            "characters": [
              {
                "id": "jiang",
                "pose": "relieved"
              }
            ],
            "props": [
              "signpost"
            ],
            "narrative": {
              "type": "time",
              "text": "二十年·至千里"
            }
          }
        }
      ],
      "point": "远方从不靠空想抵达，把注意力收回到脚下的每一步，时间自会带你跨越千山万水。"
    }
  },
  {
    "id": "ye-jing-yu-qin-huang-yu-xi",
    "text": "业精于勤，荒于嬉",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "学业与技艺的精湛源于勤奋不懈的磨砺，而荒废退步则源于贪图游乐与懈怠放纵。",
    "storyTitle": "民乐团琵琶手寒假前后的指法差距",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "校民乐团两位琵琶首席候选人小童和小芸水平原本在伯仲之间，寒假前团长布置了高难度曲目《十面埋伏》的轮指与扫拂功课。",
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
        "scene": "home",
        "text": "长达一个月的寒假里，小芸觉得过年就该痛快玩乐，把琵琶锁进琴盒，整日熬夜打牌、刷剧游乐，满心以为开学前练两天就能找回手感。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "text": "小童则在走亲访友之余，每天清晨雷打不动戴上玳瑁义甲练琴九十分钟，用节拍器从慢速一拍一拍抠准颗粒感。",
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
        "text": "开学合练第一天，小芸手指生硬连基本换把都频频按错品位，而小童的轮指如大珠小珠落玉盘般清脆铿锵，毫无悬念接任首席。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
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
    "interpretation": "技艺与学识就像逆水行舟，一天不练自己知道，三天不练同行知道，一月荒嬉全场皆知。勤奋不是为了做给别人看，而是为了让指尖与头脑始终保持敏锐的锋芒。",
    "limits": "戒除荒于嬉是指克服沉迷放纵、荒废正业，并非否定劳逸结合的正常休息与文体活动。",
    "reflectionQuestion": "在周末或长假期间，你是否保留了一个哪怕每天只有半小时、让核心专业能力不生锈的「保底习惯」？",
    "source": "唐代韩愈《进学解》（「业精于勤，荒于嬉；行成于思，毁于随」）。",
    "sourceStatus": "classical",
    "storyStructure": {
      "layout": "branch",
      "situation": "长达一个月的寒假，面对高难度琵琶曲目功课，该如何安排假期时光？",
      "situationScene": "school",
      "situationVisual": {
        "scene": "school",
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
          "type": "fork",
          "label": "处境"
        }
      },
      "optionA": {
        "label": "分支 A：贪嬉荒废",
        "choice": "贪嬉荒废",
        "result": "把琴锁进盒子整月沉迷游乐，开学合练时手指生硬频频错音，痛失良机。",
        "recommended": false,
        "scene": "home",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
              "pose": "hesitating"
            }
          ],
          "props": [
            "phone"
          ],
          "narrative": {
            "type": "arrow",
            "label": "贪嬉荒废"
          }
        }
      },
      "optionB": {
        "label": "分支 B：每日勤修",
        "choice": "每日勤修",
        "result": "佳节之余每天雷打不动坚持九十分钟基本功慢练，开学合练一鸣惊人。",
        "recommended": true,
        "scene": "study",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "tong",
              "pose": "acting"
            }
          ],
          "props": [
            "lamp"
          ],
          "narrative": {
            "type": "arrow",
            "label": "每日勤修"
          }
        }
      },
      "point": "精湛的技艺全凭日复一日的勤勉喂养，一时的放纵懈怠足以让昔日功底荒芜。"
    }
  },
  {
    "id": "xing-cheng-yu-si-hui-yu-sui",
    "text": "行成于思，毁于随",
    "category": "geyan",
    "tags": [
      "判断与偏见",
      "自省与成长",
      "谨慎与风险"
    ],
    "plainExplanation": "人的品行与事业成就源于独立审慎的思考，而败坏与失误则往往源于盲目随大流、敷衍随便。",
    "storyTitle": "不跟风抢购网红理财课的退休教师",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "小区广场舞群里最近刮起一阵旋风，十几位老熟人纷纷晒出高额返利截图，拉老周一起交钱报名某「稳赚不赔配音兼职训练营」。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
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
        "text": "看到身边熟人都在随大流交钱，老周没有盲目跟风「随」众，而是回到书房冷静思考：如果真有日赚五百的零门槛好事，对方为何要靠拉人头收高额学费？",
        "visual": {
          "scene": "phone",
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
        "text": "老周上网查验了该公司工商涉诉记录与黑猫投诉平台，发现已有上百人举报其诱骗老人办理高息分期贷款。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "home",
        "text": "老周不仅自己守住了钱包，还打印出核查证据在群里及时劝阻了三位正准备转账的老邻居，避免了一场跟风大损失。",
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
    "interpretation": "「别人都在这么干」是世上最省脑子、却也最危险的行动理由。随波逐流与敷衍随便让人交出了方向盘，唯有在群体热潮面前多问三个为什么，用独立思考筑起护城河，方能行稳致远。",
    "limits": "反对盲从的「随」，不等于在所有事情上都固执己见；经得起逻辑与事实检验的良规公序仍应自觉遵守。",
    "reflectionQuestion": "最近一次你买某样东西或做一个决定，是因为自己真正深思熟虑过需要它，还是因为看到周围人都在跟风？",
    "source": "唐代韩愈《进学解》（「业精于勤，荒于嬉；行成于思，毁于随」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "san-ren-xing-bi-you-wo-shi",
    "text": "三人行，必有我师焉",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "自省与成长",
      "人际关系"
    ],
    "plainExplanation": "几个人走在一起，其中必定有在某一方面可以做我老师的人；指随时随地以谦逊开放的心态向身边的每一个人学习。",
    "storyTitle": "大教授向菜市场摊主请教挑笋经",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "退休植物学教授老周精通植物分类学拉丁学名，但每次春天去菜市场买春笋，挑回家的笋煮出来却总是又老又涩。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "market",
        "text": "这天老周放下教授架子，诚恳地向卖菜三十年的王大姐请教：「大姐，论书本分类我懂，但挑鲜嫩春笋您是我的老师，能教教我怎么看吗？」",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "kitchen",
        "text": "王大姐爽朗一笑，手把手教他「一摸笋壳微湿、二看底部笋肉洁白无空心、三掐根部一掐即出汁」的九字实操口诀。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "study",
        "text": "老周回家一试果真鲜嫩脆甜，他把这套民间挑笋经验恭恭敬敬记进自己的食农笔记里，常对学生说真正的老师遍布街头巷尾。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
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
    "interpretation": "知识的分布从来不是按职称高低垄断的。书斋里的学者未必懂田间老农的节气手感，资深主管也未必比一线客服更懂用户的第一反应。放下身段，人人皆可为师。",
    "limits": "以众人为师既包括学习别人的长处（「择其善者而从之」），也包括以别人的失误为镜鉴来反省自己（「其不善者而改之」）。",
    "reflectionQuestion": "今天你接触过的看似最普通的一个人身上，有没有哪一项小技能或处事态度是值得你悄悄学过来的？",
    "source": "《论语·述而》（「子曰：三人行，必有我师焉：择其善者而从之，其不善者而改之」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ze-shan-er-cong",
      "man-zhao-sun-qian-shou-yi"
    ]
  },
  {
    "id": "jian-xiao-li-ze-da-shi-bu-cheng",
    "text": "见小利则大事不成",
    "category": "geyan",
    "tags": [
      "得失与取舍",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "目光短浅地被眼前芝麻绿豆大的小利益勾走魂魄，就会破坏长远布局与核心信誉，最终成不了大事业。",
    "storyTitle": "茶叶老店拒绝以陈充新的短期暴利",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "清明前夕新茶刚上市产量极少、价格昂贵，有批发商悄悄找茶庄陈掌柜，建议把去年的冷藏陈茶用色素香精翻新后混进明前龙井卖，十天就能多赚八万块。",
        "visual": {
          "scene": "market",
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
        "scene": "market",
        "text": "店里年轻伙计看着八万块差价有些眼热，陈掌柜却一口回绝：「咱们茶庄立店三十年靠的就是一口真茶香，见了这点歪门小利，三十年招牌一朝就砸了。」",
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
        "scene": "study",
        "text": "陈掌柜不仅分毫不掺陈茶，还把去年余下的陈茶明确贴上「隔年口粮茶、半价特惠」标签放在专区坦诚售卖。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
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
        "scene": "market",
        "text": "后来同行掺假被茶客喝出破绽信誉扫地，唯有陈掌柜的茶庄因货真价实被评为省级老字号，长远收益何止十个八万。",
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
    "interpretation": "小利最善于伪装成「不拿白不拿的顺手便宜」。但一个人的精力、信誉与格局是有限的，当你频频弯腰去捡地上的烂芝麻时，不仅错过了前方的金山，更向外界暴露了你底线的廉价。",
    "limits": "不贪损害信誉与全局的「小利」，与日常经营中精打细算、节约每一分合理成本并不矛盾。",
    "reflectionQuestion": "在你长期努力的方向上，目前有哪些看似能马上赚点小钱或博点小名声、实则会分散你核心精力的「小利诱惑」？",
    "source": "《论语·子路》（「无欲速，无见小利。欲速则不达，见小利则大事不成」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yin-xiao-shi-da",
      "yi-ye-zhang-mu"
    ]
  },
  {
    "id": "min-er-hao-xue-bu-chi-xia-wen",
    "text": "敏而好学，不耻下问",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "自省与成长",
      "人际关系"
    ],
    "plainExplanation": "思维敏捷而又热爱学习，并且不以向职位、资历或年龄比自己低的人请教为耻。",
    "storyTitle": "老总工向零零后实习生学快捷键",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "五十八岁的总工程师老姜精通大型桥梁结构计算，但在处理新版三维建模软件的批量图层导出时，总要手动点按上百次，耗时费力。",
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
        "scene": "office",
        "text": "他路过刚入职的零零后实习生小陆工位时，看见小陆敲了几个组合键加一段简短脚本，十秒钟就把两百张图纸排得整整齐齐。",
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
        "scene": "study",
        "text": "老姜没有端着总工的架子不好意思开口，下班后主动端着茶杯坐到小陆桌旁：「小陆师父，今天你得收我这个老徒弟，教教我那个批量导出的绝活。」",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "jiang",
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
        "text": "小陆受宠若惊地倾囊相授，老姜一笔一画记在小本上当场练熟，全院上下见总工都如此虚怀若谷，互学互助的风气蔚然成风。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "jiang",
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
    "interpretation": "一个人的心理年龄是从什么时候开始变老的？就是从他觉得自己「拉不下脸向晚辈和外行请教」的那一刻开始的。在真才实学面前没有辈分高低，谁掌握了更好的方法，谁就是这一刻的良师。",
    "limits": "不耻下问贵在真诚求教并尊重对方的智力劳动，不可带着居高临下「考考你」的傲慢姿态去发问。",
    "reflectionQuestion": "在你身边的晚辈、新同事甚至孩子身上，有没有哪一项数字技能或新视野是值得你拉下脸去正式请教的？",
    "source": "《论语·公冶长》（「子曰：敏而好学，不耻下问，是以谓之文也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "san-ren-xing-bi-you-wo-shi",
      "ze-shan-er-cong"
    ]
  },
  {
    "id": "jun-zi-qiu-zhu-ji",
    "text": "君子求诸己，小人求诸人",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "诚信与责任",
      "情绪与心态"
    ],
    "plainExplanation": "有修养的君子凡事严格要求自己、从自身找突破口；缺乏修养的人则习惯把责任和期望全推给别人、一味苛责外界。",
    "storyTitle": "晚点半小时后的自我提前量",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "station",
        "text": "小肖和同事小赵约好周一早八点在客户公司楼下汇合送标书，结果早高峰地铁临时限流加上打车排队，两人都迟到了十分钟，险些误了投标截止时间。",
        "visual": {
          "scene": "station",
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
        "scene": "street",
        "text": "事后小赵一路骂骂咧咧，怪地铁公司调度太差、怪出租车司机绕路、怪客户公司位置太偏，唯独觉得自己毫无过错。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "home",
        "text": "小肖却暗自反省：早高峰限流本就是常见风险，是自己卡着极限时间出门没留安全余量，凡事「求诸己」才能真正掌控局面。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "station",
        "text": "此后凡有重要外勤，小肖一律按正常路程再提前四十分钟出发，哪怕遇到堵车也能从容抵达，再未因交通原因迟到过一次。",
        "visual": {
          "scene": "station",
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
    "interpretation": "「求诸人」的人看似永远不用承担心理愧疚，却也永远活在被动抱怨的无力感中；「求诸己」的人把标准立在自己身上，每遇到一次外部不顺就升级一次自己的预案，从而一步步变得强大笃定。",
    "limits": "求诸己是把自身可控部分做到极致，但在团队协作中仍需明确各自权责，并非替别人承担失职后果。",
    "reflectionQuestion": "面对最近一次让你不满意的结果，你是花了更多时间在抱怨别人不给力，还是在调整自己下一次的应对策略？",
    "source": "《论语·卫灵公》（「子曰：君子求诸己，小人求诸人」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "fan-qiu-zhu-ji"
    ]
  },
  {
    "id": "ting-qi-yan-er-guan-qi-xing",
    "text": "听其言而观其行",
    "category": "geyan",
    "tags": [
      "判断与偏见",
      "人际关系",
      "谨慎与风险"
    ],
    "plainExplanation": "不仅要听一个人嘴上说得有多动听，更要留心观察他实际行动中是怎么做的，以真实行为作为识人的最终依据。",
    "storyTitle": "挑选养老院时的「突击看午饭」",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林帮九十岁的老舅挑选民办康养院，第一家机构的营销顾问口若悬河，把画册上的「五星级营养膳食、二十四小时贴心陪伴」夸得天花乱坠。",
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
        "scene": "courtyard",
        "text": "老林记着「听其言而观其行」的古训，没有光听宣传就交定金，而是在周三中午饭点未经预约直接走到餐厅和护理区实地观察。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "kitchen",
        "text": "一看才发现那家机构护工正扎堆刷手机，老人们碗里的青菜又黄又冷；老林随即走访第二家宣传朴素的养老院，却见院长正蹲在床边帮老人剪指甲、厨房端出的萝卜炖牛腩热气腾腾。",
        "visual": {
          "scene": "kitchen",
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
        "scene": "courtyard",
        "text": "老林毫不犹豫选择了第二家，老舅入住后气色红润、心情舒畅，直夸老林这双看行动的眼睛比听漂亮话准多了。",
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
    "interpretation": "语言是世界上成本最低的装饰品，而日复一日的具体行动则很难长期伪装。无论是选合作伙伴、考察服务机构还是识人交友，把耳朵收起三分、把眼睛睁大七分，看他在利益关头与无人监督时的真实举动，就绝不会看走眼。",
    "limits": "听言观行需要给对方留出合理的行动观察周期，避免因单次偶然的失误就仓促给人贴上负面标签。",
    "reflectionQuestion": "在你最近需要评估的一个合作方或一段关系中，如果把对方说过的所有漂亮承诺全部静音，仅看他做过的三件实事，你会得出什么结论？",
    "source": "《论语·公冶长》（「子曰：始吾于人也，听其言而信其行；今吾于人也，听其言而观其行」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shi-shi-sheng-yu-xiong-bian",
      "lu-yao-zhi-ma-li-ri-jiu-jian-ren-xin"
    ]
  },
  {
    "id": "you-peng-zi-yuan-fang-lai",
    "text": "君子之交淡如水",
    "category": "geyan",
    "tags": [
      "人际关系",
      "朋友交往",
      "情绪与心态"
    ],
    "plainExplanation": "品行端正的人之间的交往，像清水一样平淡纯粹、不掺杂功利算计，却因此能够绵长持久。",
    "storyTitle": "不送贵重礼品却三十年不散的挚友",
    "sceneDomain": "朋友交往",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老周与老友顾先生相交三十年，平时既不拉帮结派互送名烟名酒，也不三天两头在酒桌上称兄道弟赌咒发誓，有时半年才通一次电话。",
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
        "scene": "park",
        "text": "有年轻人好奇这算哪门子铁哥们；老周笑而不语，每年秋凉时节只是把自己新写的读书札记寄一本给老顾，老顾则回寄一包自家院里晒的菊花茶。",
        "visual": {
          "scene": "park",
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
        "scene": "river",
        "text": "前年老周的独生子在外地突发急病需要做复杂手术，老周半夜只给老顾发了一条十个字的短信，老顾二话不说连夜乘最早一班高铁赶到医院，陪老周在走廊守了整整两天两夜。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
              "pose": "discovering"
            }
          ],
          "props": [
            "bridge"
          ],
          "focusProp": "bridge",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "事后老顾依然不要任何酬谢，只喝了一杯白开水便乘车返程；这份平时如水般澄澈无求、危难时却重如泰山的情谊，正是君子之交的真谛。",
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
    "interpretation": "靠浓烈的利益勾兑与酒肉吹捧维系的关系，就像加了过多糖精的甜水，初尝甜腻，一旦利益消散便迅速发酸变质。而淡如水的交往，因为不图对方的便宜、不绑架对方的生活，反而能在岁月长河里澄澈见底、历久弥新。",
    "limits": "淡如水是指不掺杂庸俗功利算计，而非对朋友的冷暖疾苦漠不关心，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "翻看你的通讯录，哪一位朋友虽然平时联系不算频繁、也不用客套应酬，但你知道无论何时开口都能彼此托底？",
    "source": "《庄子·山木》（「且君子之交淡若水，小人之交甘若醴；君子淡以亲，小人甘以绝」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "he-er-bu-tong"
    ]
  },
  {
    "id": "you-zhi-jing-cheng-sheng-yu-you-huan",
    "text": "生于忧患，死于安乐",
    "category": "geyan",
    "tags": [
      "谨慎与风险",
      "自省与成长",
      "时间与耐心"
    ],
    "plainExplanation": "忧患意识与逆境磨砺能激发人的斗志使人得以生存发展，而贪图安逸享乐、丧失警惕则会让人在麻木中走向衰败。",
    "storyTitle": "老字号糕点铺在顺境中的低糖研发",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "五年前孙记传统酥饼铺生意最火爆的时候，每天开门两小时就售罄，周边同行纷纷扩店买豪车、躺在传统重油重糖的老配方上享清福。",
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
        "text": "孙掌柜却在最红火的日子里保持着深深的忧患意识：他敏锐观察到排队顾客里年轻人越来越少，现代人对高糖高油点心的健康顾虑正在上升。",
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
        "scene": "study",
        "text": "他没有沉溺于眼前的安逸盈利，而是每年拨出两成利润成立研发室，带领师傅们经过上百次试验，用天然海藻糖与植物油攻克了「减糖四成依然酥脆掉渣」的新工艺。",
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
        "scene": "market",
        "text": "五年后健康饮食浪潮席卷市场，当年那些躺在功劳簿上享乐的老同行纷纷关门歇业，唯有提前蜕变的孙记糕点逆势成了年轻人的新宠。",
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
    "interpretation": "打败一个人的往往不是眼前的狂风暴雨，而是长达数年的风平浪静。在狂风里人人都会抓紧桅杆，而在温水般的安乐窝里，人却会不知不觉卸下盔甲、丧失进化的能力。在最顺遂的时候留一分清醒的忧患，才是最好的护身符。",
    "limits": "保持忧患意识是居安思危、主动求变，而不是在顺境中终日惶恐不安、失去享受当下生活的能力。",
    "reflectionQuestion": "在你目前最安稳顺手的工作或生活领域里，如果未来三年外部环境发生巨变，你手头准备好应对的「新船票」了吗？",
    "source": "《孟子·告子下》（「然后知生于忧患，而死于安乐也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ren-wu-yuan-lv-bi-you-jin-you",
      "wei-yu-chou-mou"
    ]
  },
  {
    "id": "yi-nuo-qian-jin-yan-bi-xin",
    "text": "言必信，行必果",
    "category": "geyan",
    "tags": [
      "诚信与责任",
      "做事与执行",
      "人际关系"
    ],
    "plainExplanation": "说出的话一定坚守信用，决定去做的事一定坚持到底取得成果。",
    "storyTitle": "木匠铺绝不隔夜的返修承诺",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "老姜的实木家具工坊有一条立了二十年的店规：「凡本店售出家具出现抽屉卡顿或五金松动，报修后二十四小时内必上门修妥。」",
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
        "scene": "rain",
        "text": "一年冬至傍晚下起鹅毛大雪，住在城郊的李奶奶打来电话说衣柜推拉门滑轨卡住了拿不出厚棉被，老姜看了一眼窗外风雪，背起工具包就往外走。",
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
        "scene": "home",
        "text": "徒弟劝他：「这么大雪，跟老人家说一声改天晴再去，谁都能理解。」老姜摇头道：「言必信，行必果。老人今晚就要盖棉被，咱答应了二十四小时就绝不能含糊。」",
        "visual": {
          "scene": "home",
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
        "scene": "workshop",
        "text": "老姜踏雪赶到李奶奶家，半小时修好滑轨还顺手加固了全屋门铰链；这份风雪无阻的守信口碑，让老姜的工坊二十年从不用打一分钱广告。",
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
    "interpretation": "「信」是言语的分量，「果」是行动的闭环。许多人之所以给人留下不靠谱的印象，就是因为嘴上答应得比谁都快，行动上却虎头蛇尾、遇难即退。把每一句诺言都砸出一个响亮的结果，人生自会寸步生根。",
    "limits": "言必信行必果的前提是所许之言、所行之事合乎道义与客观规律；若发现原定承诺违背公序良俗或安全底线，则不可盲目死守错误。",
    "reflectionQuestion": "盘点一下你本周向他人许下的所有大小承诺，目前全部都做到了「言必信、行必果」的闭环吗？",
    "source": "《论语·子路》（「言必信，行必果」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "yan-chu-bi-xing"
    ]
  },
  {
    "id": "jian-yi-yong-wei-dang-ren-bu-rang",
    "text": "当仁不让",
    "category": "geyan",
    "tags": [
      "诚信与责任",
      "合作与分工",
      "公共生活"
    ],
    "plainExplanation": "面对合乎道义、应当承担的责任或善举时，主动挺身而出承担起来，绝不推诿谦让。",
    "storyTitle": "急救培训员在街头的黄金四分钟",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "street",
        "text": "周末午后街头一名晨跑中年人突然晕倒在地、失去呼吸心跳，周围路人纷纷围观拍照，虽焦急拨打了120，却没人敢上前施救。",
        "visual": {
          "scene": "street",
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
        "scene": "street",
        "text": "刚考取红十字救护员证的梅姐恰好路过，面对这条生命攸关的责任，她「当仁不让」地拨开人群跪地评估，大声请旁边小伙去取百米外地铁站的自动体外除颤器（AED）。",
        "visual": {
          "scene": "street",
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
        "scene": "park",
        "text": "在救护车赶到前的黄金四分钟里，梅姐严格按标准节奏进行高质量胸外按压与除颤操作，汗水浸透了衣背也未停下一秒。",
        "visual": {
          "scene": "park",
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
        "scene": "courtyard",
        "text": "随着患者恢复自主心律被送上救护车脱险，面对众人的赞誉，梅姐平静地说：在名利面前可以谦让三尺，但在救人与大义面前必须一步不让。",
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
    "interpretation": "中国传统文化讲谦逊礼让，但孔夫子特意划出了一条界线——「当仁，不让于师」。在荣誉、利益、座次面前退后一步是涵养；而在道义、公责与危急担当面前挺身而出、绝不缩头，才是真正的君子风骨。",
    "limits": "当仁不让强调在具备相应能力或道义责任时勇敢担当，涉及专业救援或复杂技术操作时仍需遵循科学规范量力而为。",
    "reflectionQuestion": "在你的日常工作或公共生活中，哪些时候应该主动退让半分，又有哪些关键时刻必须「当仁不让」地站出来？",
    "source": "《论语·卫灵公》（「子曰：当仁，不让于师」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jing-ren-zhe-ren-heng-jing-zhi",
    "text": "爱人者，人恒爱之；敬人者，人恒敬之",
    "category": "geyan",
    "tags": [
      "人际关系",
      "沟通与表达",
      "公共生活"
    ],
    "plainExplanation": "真心关爱别人的人，别人也会长久地关爱他；发自肺腑尊重别人的人，别人也会长久地尊重他。",
    "storyTitle": "门卫室里记满全楼姓氏的暖心大叔",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "老林退休后在社区南门当门卫，他从不把这份工作当成冷冰冰的看大门，而是把全院三百户居民的姓氏和独居老人作息全记在心里。",
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
        "text": "无论是穿西装的业主，还是满身尘土的快递员、保洁工，老林每次开门都微笑着双手递卡、尊称一声「您早、您辛苦」，下雨天还常备十把爱心伞借给忘带伞的人。",
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
        "scene": "courtyard",
        "text": "在老林春风化雨般的敬意感染下，整个小区的住户每次经过岗亭都会主动摇下车窗向他问好，逢年过节窗台上总会多出居民悄悄放下的热饺子与润喉糖。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "home",
        "text": "老林常跟新来的年轻保安说：你把别人放在心上高看一眼，别人自然也会把你放在心上暖着。",
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
    "interpretation": "人际关系就像山谷里的回音壁：你朝着山谷喊出傲慢与刻薄，弹回来的必定是防备与冷漠；你朝着山谷送出真诚的体恤与敬重，岁月终会将这份温暖加倍奉还给你。",
    "limits": "爱人敬人应出于内心的平等修养，而非为了即刻索取回报的功利讨好，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "今天你在面对身边最普通的保洁员、保安、服务员或下属时，你的眼神与语气里是否带着真诚的尊重？",
    "source": "《孟子·离娄下》（「爱人者，人恒爱之；敬人者，人恒敬之」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhong-gua-de-gua-zhong-dou-de-dou"
    ]
  },
  {
    "id": "you-rong-nai-da-wu-yu-ze-gang",
    "text": "海纳百川，有容乃大；壁立千仞，无欲则刚",
    "category": "geyan",
    "tags": [
      "情绪与心态",
      "自省与成长",
      "诚信与责任"
    ],
    "plainExplanation": "像大海一样接纳四方百川的汇入，因为胸怀宽广所以成就宏大；像千仞绝壁一样耸立云霄，因为没有私欲软肋所以刚正挺拔。",
    "storyTitle": "技术院长包容异见与谢绝回扣的定力",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "老周主持设计院工作时，院里有位年轻博士性格耿直，常在技术会上公开反驳老周的旧方案，老周非但不恼，反而「海纳百川」将其提拔为创新组长，让院里多种技术流派百花齐放。",
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
        "text": "在对外招标采购千万元实验设备时，有供应商夜里提着重金礼盒登门求关照，老周严词拒之门外：「我一不图私利、二不为亲友谋特权，你们拿不出任何能诱惑我的把柄。」",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "zhou",
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
        "text": "到了评审会当天，老周一身正气、无欲则刚，顶住各方说情压力，严格按盲测参数选出了性价比最高但毫无背景的国产品牌。",
        "visual": {
          "scene": "office",
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
        "text": "对内有容乃大聚拢天下英才，对外无欲则刚守住清白底线，老周把设计院带成了全行业最受敬重的标杆。",
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
    "interpretation": "「容」是横向的宽度——容得下不同性格的人、听得进刺耳的真话，格局才能打开；「刚」是纵向的高度——因为不贪不占、没有见不得光的私心软肋，面对任何威逼利诱才能腰杆笔直。",
    "limits": "有容乃大是指包容多元见解与无心之失，绝不是包容违法乱纪；无欲则刚是指戒除不正当私欲，而非消灭正常的生活追求。",
    "reflectionQuestion": "在待人接物上你是否足够宽容大度？在守住个人原则底线上你又是否足够硬气无私？",
    "source": "清代林则徐任两广总督时自题堂联。",
    "sourceStatus": "classical",
    "relatedIds": [
      "he-er-bu-tong"
    ]
  },
  {
    "id": "jing-yi-xiu-shen-jian-yi-yang-de",
    "text": "静以修身，俭以养德",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "消费与欲望",
      "情绪与心态"
    ],
    "plainExplanation": "依靠内心的宁静专一、屏除浮躁杂念来修养身心，依靠生活的简朴节俭、克制奢靡物欲来涵养高尚品德。",
    "storyTitle": "老学者书斋里的粗茶布衣与巨著",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "历史学者陈先生虽著作等身、稿酬颇丰，却常年住在一间安静简朴的旧公寓里，身上穿的是洗得发白的棉布衬衫，一日三餐不过清粥时蔬。",
        "visual": {
          "scene": "study",
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
        "scene": "kitchen",
        "text": "有学生不解他为何过得如此清苦，陈先生指着满屋顶天立地的书架笑道：「外在物欲越繁杂，心神就越被衣食排场牵着跑；生活简单了，心才能彻底静下来钻进万卷书里。」",
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
        "scene": "study",
        "text": "每当外界名利场喧嚣热闹时，陈先生总是关掉手机，在书斋一盏孤灯下静心考订史料，十年间独立完成了三百万字的边疆史地考证巨著。",
        "visual": {
          "scene": "study",
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
        "scene": "courtyard",
        "text": "而他把平时节俭省下的百万稿酬，默默捐给家乡山区建了五座乡村图书室，用一生践行了以静修身、以俭养德的君子风范。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "浮躁与奢靡是一对孪生兄弟：物欲膨胀必然导致心浮气躁、为了追逐排场而折腰失格；唯有在生活上知足简朴，才能斩断被外物奴役的锁链，换来灵魂的宁静、自由与专注。",
    "limits": "俭以养德提倡的是戒除奢侈浪费与虚荣攀比，并非排斥合理改善生活品质与必要的健康教育投入。",
    "reflectionQuestion": "当你感到心浮气躁、静不下心来读书或思考时，是不是因为最近的生活被太多不必要的物质欲望和社交喧嚣塞满了？",
    "source": "三国蜀·诸葛亮《诫子书》（「夫君子之行，静以修身，俭以养德。非淡泊无以明志，非宁静无以致远」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhi-zu-chang-le"
    ]
  },
  {
    "id": "bo-xue-zhi-shen-wen-zhi",
    "text": "博学之，审问之，慎思之，明辨之，笃行之",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "做事与执行"
    ],
    "plainExplanation": "广泛地涉猎学习，详尽地追问求教，审慎地深入思考，清晰地辨别真伪是非，最后踏踏实实地付诸行动。",
    "storyTitle": "社区慢病科普手册的五步打磨法",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "社区卫生中心的梅医生准备编写一本真正适合老年人的高血压防治手册，她严格按照古人治学五步法来推进。",
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
        "scene": "office",
        "text": "先「博学」汇总国内外最新防治指南，再「审问」请教三甲医院心内科主任与二十位老病号，随后「慎思」老人们为何总是忘记按时服药的心理症结。",
        "visual": {
          "scene": "office",
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
        "text": "接着「明辨」剔除网络上盛传的芹菜汁替代降压药等伪科学谣言，最后「笃行」设计出带早晚服药打钩格的冰箱磁吸日历卡。",
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
        "scene": "courtyard",
        "text": "这本凝结了学、问、思、辨、行五步闭环的小册子发放到居民手中后，辖区老人规范服药率在一个季度内提升了三成。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "从听到一个知识到真正长成自己的本领，中间隔着完整的五级台阶：不博学则眼界狭隘，不审问则一知半解，不慎思则食古不化，不明辨则真伪莫分，而若最后不落实到「笃行」，前面四步就全成了纸上谈兵。",
    "limits": "五步法在具体运用时可根据任务轻重调整篇幅，但其「从输入到内化再到行动验证」的闭环逻辑不可断裂。",
    "reflectionQuestion": "对照「学、问、思、辨、行」这五个字，你平时的学习链条最容易在哪一环断掉？",
    "source": "《礼记·中庸》（「博学之，审问之，慎思之，明辨之，笃行之」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jiao-ta-shi-di"
    ]
  },
  {
    "id": "yi-shen-ze-ming-wu-yu-ze-gang",
    "text": "非淡泊无以明志，非宁静无以致远",
    "category": "geyan",
    "tags": [
      "情绪与心态",
      "自省与成长",
      "时间与耐心"
    ],
    "plainExplanation": "不看淡眼前的虚名浮利，就无法明确自己高远的人生志向；不保持内心的安定宁静，就无法潜心钻研以抵达遥远的境界。",
    "storyTitle": "天文台守望者十年的冷板凳",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "天体物理研究员老周常年驻守在海拔三千米的高山观测站，同期毕业的同学不少转行去了金融圈赚快钱，劝他也早点下山。",
        "visual": {
          "scene": "mountain",
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
        "scene": "night",
        "text": "老周淡然一笑：自己毕生志向在于搜寻脉冲星微弱信号，若心被山下的香车宝马勾走，就再也听不见宇宙深处的脉搏了。",
        "visual": {
          "scene": "night",
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
        "scene": "study",
        "text": "在山上那间安静得只有风声的观测室里，老周十年如一日地校准射电望远镜、比对海量噪点数据，内心澄澈如高山夜空。",
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
        "scene": "night",
        "text": "第十年深秋，他带领团队率先捕捉到一颗罕见毫秒脉冲星的完整周期信号，在国际学界引起轰动，印证了宁静致远的深意。",
        "visual": {
          "scene": "night",
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
    "interpretation": "信息时代的喧嚣最容易让人陷入「十天速成、三月变现」的浮躁焦虑。然而真正有分量的学术突破、艺术创造与人格修养，都需要一段无人喝彩的漫长生长期。淡泊帮你挡住诱惑，宁静帮你聚起心力。",
    "limits": "淡泊宁静是指不为浮名俗利所扰而专注志向，绝不是对本职工作消极怠工或对社会民生麻木冷漠。",
    "reflectionQuestion": "如果把外界所有的掌声与短期奖金暂时屏蔽，有哪一件事情是你依然愿意安安静静投入五年时光去做的？",
    "source": "三国蜀·诸葛亮《诫子书》，化用自西汉《淮南子·主术训》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jing-yi-xiu-shen-jian-yi-yang-de"
    ]
  },
  {
    "id": "you-zhao-yi-ri-sui-han-song-bai",
    "text": "岁寒，然后知松柏之后凋也",
    "category": "geyan",
    "tags": [
      "时间与耐心",
      "诚信与责任",
      "人际关系"
    ],
    "plainExplanation": "只有到了寒冬腊月百草枯萎的时节，才能真正看出松树和柏树傲霜斗雪、常青不凋的坚韧本色；比喻严峻考验最能显露人的气节与真情。",
    "storyTitle": "果园遭遇冰灾时的患难合作社",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "前两年果品行情火热时，好几家外地客商天天围着老姜的合作社称兄道弟，拍胸脯说无论顺逆永远包销共进退。",
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
        "scene": "rain",
        "text": "那年冬天突遇罕见冻雨冰灾，大半果树枝条被冰凌压断，次年预计减产过半；当初叫得最欢的那几家客商瞬间断联，甚至单方面毁约索赔。",
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
        "scene": "workshop",
        "text": "唯有平时话不多、只老老实实收果子的老客户孙老板冒雪开车上山，不仅分文未撤预付款，还自掏腰包拉来两车防冻涂白剂与修枝油膏帮果农救树。",
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
        "scene": "field",
        "text": "三年后茶果园灾后重生、挂满累累硕果，老姜立下规矩：每年头茬最优质的果子，永远优先留给当年风雪里没走的那位真朋友。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "jiang",
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
    "interpretation": "春暖花开的时候，满山遍野都是绿叶，分不出哪棵是杂草、哪棵是松柏；顺风顺水的时候，身边到处都是笑脸，看不出谁是酒肉之交、谁是生死挚友。唯有寒冬降临，真假优劣才一清二楚。",
    "limits": "此语既用于识人交友，更勉励自己在逆境低谷中做那棵挺立不倒的松柏。",
    "reflectionQuestion": "回顾你人生或事业最艰难的那段「寒冬期」，当时是谁坚定地站在你身边？你又是如何挺过来的？",
    "source": "《论语·子罕》（「子曰：岁寒，然后知松柏之后凋也」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "lu-yao-zhi-ma-li-ri-jiu-jian-ren-xin"
    ]
  },
  {
    "id": "gong-bu-tang-juan-yu-bu-zhuo",
    "text": "玉不琢，不成器；人不学，不知道",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "自省与成长",
      "家庭与生活"
    ],
    "plainExplanation": "再好的璞玉如果不经过切磋琢磨，就不能成为精美的玉器；人如果不经过系统学习与磨砺，就不会懂得天地与处世的根本道理。",
    "storyTitle": "和田籽料原石与玉雕学徒的蜕变",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "刚进玉雕坊的学徒小刘自诩审美天分高，不肯耐着性子学画白描图谱与练陀机稳度，总想凭感觉随手划拉两刀就出大师级作品。",
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
        "scene": "workshop",
        "text": "陈师父拿出一块表皮布满褐锈的和田籽料原石摆在他面前，问他：「这石头底子虽好，若不按规矩去皮、顺绺、精雕、细抛，它能当传家玉佩吗？」",
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
        "text": "随后师父带着小刘从最基础的画线、走坨、换砂打磨一步步雕琢那块原石，整整打磨了四十天，璞玉终于褪去粗粝石皮，显露出温润如脂的玉莲花。",
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
        "scene": "workshop",
        "text": "看着玉石在千百次砂轮雕琢下成器，小刘也收起了狂傲之心，老老实实沉浸到夜以继日的绘画与刀工苦学中。",
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
    "interpretation": "天赋就像未经雕琢的璞玉原石，虽然珍贵，但若不肯受切磋打磨之苦、不肯系统学习前人的礼法与学问，最终也只是一块粗糙的石头。每一次严苛的训练与求知，都是在帮生命退去粗鄙、显露温润。",
    "limits": "琢玉成器需顺应玉石本身的纹理天性（因材施教），而非用野蛮外力把所有玉料都砸成同一个模子。",
    "reflectionQuestion": "你身上哪一项原本不错的潜质，因为一直缺乏系统的「雕琢与学习」，至今还停留在业余原石的状态？",
    "source": "《礼记·学记》（「玉不琢，不成器；人不学，不知道」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "zhi-chi-jin-hu-yong",
    "text": "知耻近乎勇",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "诚信与责任",
      "情绪与心态"
    ],
    "plainExplanation": "一个人懂得为自己的过失、不足或失信感到羞愧并痛下决心改正，这种直面软肋的自觉就已经接近真正的勇敢了。",
    "storyTitle": "主动承认抄袭并重写的读书报告",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "大二那年期末任务重，小肖鬼使神差地从外网拼凑翻译了一篇冷门书评交了上去，授课教授一时没察觉，还在课堂上把他的报告当作范文表扬。",
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
        "text": "坐在台下的小肖听着掌声非但没有得意，反而脸上火辣辣地发烧，深感弄虚作假窃取赞誉是读书人最大的羞耻。",
        "visual": {
          "scene": "study",
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
        "scene": "school",
        "text": "下课后小肖鼓起全部勇气走进教授办公室，红着眼眶坦白了抄袭实情，请求撤销范文成绩，并甘愿接受零分重修或扣分处分。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "xiao",
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
        "text": "教授沉默良久后拍了拍他的肩膀：「敢于在没人发现时亲手撕掉虚假的面具，知耻近乎勇！给你一周时间，写一篇真正属于你自己的报告交上来。」",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
    "interpretation": "世俗常以为死不认错、嘴硬到底叫「硬汉」，其实那只是掩盖怯懦的虚张声势。真正的勇敢，是当自己做了亏心事或显出无知时，敢于直面内心的羞耻感，并把它转化为洗心革面的行动力。",
    "limits": "知耻是为了激发出自新改过的勇气，切不可滑向过度自卑、自我毁灭的病态羞耻感。",
    "reflectionQuestion": "面对自己过去做过的一件不够磊落或不够尽力的事，你是否有勇气向自己承认那份惭愧，并在当下用行动把它补回来？",
    "source": "《礼记·中庸》（「好学近乎知，力行近乎仁，知耻近乎勇」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-ze-gai-zhi-wu-ze-jia-mian"
    ]
  },
  {
    "id": "man-zhao-sun-qian-de-zhong",
    "text": "靡不有初，鲜克有终",
    "category": "geyan",
    "tags": [
      "时间与耐心",
      "做事与执行",
      "自省与成长"
    ],
    "plainExplanation": "世人做事几乎没有谁在开头时不轰轰烈烈、充满热情的，但真正能够始终如一坚持到最后圆满收官的人却少之又少。",
    "storyTitle": "新年记账本从元旦写到除夕的秘诀",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "前三年每年元旦，梅姐都会买一本精致的手账本立志记录家庭每日收支，可每次都是头十天记得工工整整，到了二月就彻底荒废成了空白本。",
        "visual": {
          "scene": "home",
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
        "text": "第四年元旦她复盘为何总是「靡不有初，鲜克有终」：原来以前定的规则太繁琐，连买根一元的葱都要分三栏手写，最终被繁琐压垮。",
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
        "scene": "market",
        "text": "于是她把记账规则大幅简化：保留每天睡前两分钟的「三大类极简汇总法」，并在每月底和丈夫做一次十分钟的温和复盘。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "mei",
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
        "scene": "home",
        "text": "这一年从元旦到除夕，三百六十五天的账目第一次完整闭环，家庭年度储蓄率提升了两成，她明白了能坚持到底的方法才叫好方法。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "开一个好头只需要五分钟的多巴胺冲动，而修一个善终却需要对抗漫长的倦怠与琐碎。要想跳出「开头热热闹闹、结尾无疾而终」的怪圈，关键在于降低每日执行的摩擦力，把冲刺跑变成匀速散步。",
    "limits": "追求善始善终是指对核心有价值目标的坚守，而非对已经证明毫无意义的鸡肋事项死撑。",
    "reflectionQuestion": "回想你今年年初定下的两三个计划，现在还在正常推进的有几个？怎么调整一下节奏能让它们顺利走到年底？",
    "source": "《诗经·大雅·荡》（「天生烝民，其命匪谌。靡不有初，鲜克有终」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ban-tu-er-fei",
      "chi-zhi-yi-heng"
    ]
  },
  {
    "id": "du-shu-po-wan-juan",
    "text": "尽信书，则不如无书",
    "category": "geyan",
    "tags": [
      "判断与偏见",
      "学习与积累",
      "做事与执行"
    ],
    "plainExplanation": "读书学习如果完全盲目迷信书本上的每一个字，不知结合现实情况加以考辨验证，那还不如没有书本。",
    "storyTitle": "南方种菜照搬北方农书的节气差",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "刚退休的孙叔迷上了阳台与小院种菜，买了一本北方名家写的《家庭种菜全书》，严格按书上写的「立秋后第一天播大白菜」下种。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "sun",
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
        "text": "谁知他所在的闽南地区立秋后依然是三十五度以上的高温烈日，刚出苗的娇嫩白菜芽三天就被晒焦加上虫咬，全军覆没。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "sun",
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
        "text": "隔壁种了四十年菜的老农笑着点拨他：「书是好书，但人家写的是华北平原的节气！咱们闽南得等到处暑乃至白露降温后才能下种。」",
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
        "scene": "kitchen",
        "text": "孙叔恍然大悟，在书页空白处批注上本地温湿度修正表，白露后重播的白菜颗颗抱心紧实，深刻体会到读书不能丢掉脚下的土地。",
        "visual": {
          "scene": "kitchen",
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
    "interpretation": "书本与权威指南凝结了作者在特定时空条件下的经验，但它绝不是放之四海皆准的死教条。真正的会读书，是带着批判性思维与脚下的现实土壤去对话，让书本为我们所用，而不是被书本捆住手脚。",
    "limits": "不盲从书本是为了结合实际做实证检验，绝不是宣扬反智主义或否定经典著作的基础学习价值。",
    "reflectionQuestion": "你在把书本知识或网络攻略应用到实际生活中时，有没有遇到过因为「水土不服」而需要根据现实微调的情况？",
    "source": "《孟子·尽心下》（「孟子曰：尽信《书》，则不如无《书》。吾于《武成》，取二三策而已矣」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "shi-shi-qiu-shi",
      "yin-di-zhi-yi"
    ]
  },
  {
    "id": "bu-yi-gui-ju-bu-neng-cheng-fang-yuan",
    "text": "不以规矩，不能成方圆",
    "category": "geyan",
    "tags": [
      "做事与执行",
      "诚信与责任",
      "团队合作"
    ],
    "plainExplanation": "不使用圆规和曲尺，哪怕是巧匠也画不出标准的圆形与方形；比喻做任何事或管理团队都必须依托明确的准则、法度与规范。",
    "storyTitle": "传统木作坊里的曲尺与墨斗准绳",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "老姜带徒弟做一批八仙桌，徒弟觉得自己眼力已经练出来了，开卯眼时懒得每次都拿鲁班尺和曲尺画线，凭目测直接下凿。",
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
        "text": "结果单看每条桌腿似乎差不多，等到四腿合拢组装桌面榫头时，却发现有的歪斜两度、有的高低差了三毫米，整张桌子摇晃不止。",
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
        "scene": "study",
        "text": "老姜拿起墨斗与黄铜曲尺，在木料上弹出笔直清晰的墨线，严肃道：「凭感觉那是差不多先生，唯有规矩尺墨才是木匠的定海神针。」",
        "visual": {
          "scene": "study",
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
        "text": "徒弟老老实实按尺线重新校修每一处榫肩，组装出的八仙桌四角严丝合缝，放一碗水在桌面上纹丝不动。",
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
    "interpretation": "许多人觉得规章制度与标准流程是束缚自由的条条框框，殊不知恰恰是这些清晰的「规矩」，为我们兜住了质量的底线，免去了无数推倒重来的内耗。先守住方圆规矩，才有资格谈挥洒自如。",
    "limits": "守规矩重在守护核心质量标准与公序良俗，对于已经过时僵化、纯属折腾人的繁文缛节则应适时修订。",
    "reflectionQuestion": "在你日常处理的工作或家务中，哪一个环节因为缺乏一条明确的「规矩标准」而常常导致返工或争执？",
    "source": "《孟子·离娄上》（「离娄之明，公输子之巧，不以规矩，不能成方圆」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "ren-fei-sheng-xian-shu-neng-wu-guo",
    "text": "人非圣贤，孰能无过？过而能改，善莫大焉",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "人际关系",
      "情绪与心态"
    ],
    "plainExplanation": "普通人不是通晓万事的圣贤，谁能一辈子不犯一点错误呢？犯了错只要能够诚心认错并彻底改正，就是最大的好事。",
    "storyTitle": "打碎传家花瓶后的坦白与修补",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小童在打扫客厅博古架时，不小心袖口带落了爷爷最心爱的一只晚清民窑青花小胆瓶，瓶口摔裂成了三瓣。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "scene": "workshop",
        "text": "当时家里没人，她一度惊慌得想把碎片藏起来谎称是野猫撞翻的；但转念一想，撒谎隐瞒才是比打碎瓶子更不可原谅的错。",
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
        "scene": "home",
        "text": "爷爷散步回来后，小童主动捧着碎片低头认错，并拿出自己攒的零花钱请教古陶瓷金缮修复师，花了两周时间用天然大漆与金粉将裂痕精心锔合。",
        "visual": {
          "scene": "home",
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
        "scene": "home",
        "text": "爷爷抚摸着那道如同金色闪电般的金缮纹路，欣慰地笑道：「瓶子碎了能修出新韵味，孩子敢担责改过，比十只完好花瓶都金贵！」",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
    "interpretation": "害怕犯错往往让人在失误后用十个谎言去掩盖一个错误，最终酿成信任崩塌的大祸。接纳人类必然会犯错的局限，对别人无心之失多一分宽容，对自己已犯之过第一时间坦白修补，生命便能在金缮中愈发坚韧。",
    "limits": "此语旨在鼓励诚实改过与宽容无心之失，绝不可被拿来当作明知故犯、屡教不改的免死金牌。",
    "reflectionQuestion": "当你自己或家人在生活中犯了一个无心之失时，家里的氛围是让人敢于第一时间坦白修补，还是让人害怕得只想隐瞒推卸？",
    "source": "《左传·宣公二年》（「人谁无过？过而能改，善莫大焉」）及明清家训合流。",
    "sourceStatus": "classical",
    "relatedIds": [
      "wang-yang-bu-lao",
      "you-ze-gai-zhi-wu-ze-jia-mian"
    ]
  },
  {
    "id": "yi-shen-zhi-ming-sheng-yu-zhi-ren",
    "text": "知人者智，自知者明",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "能够看清别人优缺点的人算得上聪慧，而能够彻底看清自己内心欲望与能力局限的人，才算得上真正的通透明达。",
    "storyTitle": "金牌销售婉拒转岗技术总监的决定",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "小肖连续三年蝉联公司大客户销售冠军，也很懂洞察客户心理，年底公司扩编时，总经理有意提拔他跨界兼任研发中心技术总监。",
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
        "text": "周围同事纷纷祝贺他升官发财，小肖回到家对着镜子深思：自己擅长的是人际破冰与需求整合，但对底层算法架构并无深厚积累。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "office",
        "text": "次日小肖向总经理诚恳陈词：推荐组里钻研算法十年的老陈出任技术总监，自己则担任连接客户需求与研发落地的产品市场总监。",
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
        "text": "两人各就其位、配合无间，新产品一年内大获成功；总经理赞叹小肖既能识人之长，更有不贪恋错位头衔的自知之明。",
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
    "interpretation": "人最容易在顺境的掌声中产生全能幻觉，以为在一个领域赢了就能通吃所有战场。用智慧的眼睛去欣赏别人的专长，用澄明的镜子去照见自己的边界，把位置留给最匹配的人，才是大格局。",
    "limits": "自知之明是认清特长与边界以合理配置精力，而非妄自菲薄、拒绝正常的成长挑战。",
    "reflectionQuestion": "在别人对你的夸奖中，有哪些其实是你清醒知道「只是平台光环或运气好、并非自己真正实力」的？",
    "source": "《老子·第三十三章》（「知人者智，自知者明。胜人者有力，自胜者强」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zi-zhi-zhi-ming"
    ]
  },
  {
    "id": "sheng-ren-zhe-you-li-zi-sheng-zhe-qiang",
    "text": "胜人者有力，自胜者强",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "情绪与心态",
      "时间与耐心"
    ],
    "plainExplanation": "能够战胜别人的人只能说明他有气力，而能够战胜自己的惰性、贪欲与恐惧的人，才是真正的强者。",
    "storyTitle": "冬日清晨五点半战胜被窝的考研人",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "备考研究生的深冬腊月，小童发现最大的敌人根本不是考场上的竞争对手，而是每天早晨六点响起闹钟时那个温暖诱人的被窝与想刷手机的惰性。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "scene": "night",
        "text": "头几天她总跟自己讨价还价「再赖床十分钟」，结果一上午都昏昏沉沉充满自责。",
        "visual": {
          "scene": "night",
          "characters": [
            {
              "id": "tong",
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
        "text": "她决心做一次「自胜者」：把闹钟放到必须下床走五步才能按停的书桌上，睡前把厚羽绒服摆在床头，闹钟一响不给自己留一秒钟犹豫思考，直接穿衣洗漱。",
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
        "scene": "school",
        "text": "连续六十个寒冬清晨战胜了那个想偷懒的自己后，小童坐在洒满晨光的考场里时内心平静而强大，最终如愿金榜题名。",
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
    "interpretation": "向外跟别人争强斗狠往往只需要一时的血气之勇，而向内跟自己的拖延、暴躁、贪婪交手，却是一场每天都在进行的无声硬仗。每赢自己一次，生命的底座就往上垫高一寸。",
    "limits": "自胜是指克服不良习气与软弱惰性，而非跟自己的身体健康死磕硬熬，在具体实践中应结合客观条件审慎把握分寸。",
    "reflectionQuestion": "今天从早到晚，你在哪一个具体的小瞬间成功战胜了那个「想偷懒或想发火」的自己？",
    "source": "《老子·第三十三章》（「胜人者有力，自胜者强」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "tian-xing-jian-jun-zi-zi-qiang-bu-xi",
    "text": "天行健，君子以自强不息",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "做事与执行",
      "时间与耐心"
    ],
    "plainExplanation": "天体日月的运行刚健有力、永不停息，君子应当效法天道，保持独立刚毅、奋发图强的劲头永不懈怠。",
    "storyTitle": "左臂受伤后改练右手篆刻的印人",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "篆刻家老陈习惯左手执刀治印三十年，不料五十岁那年因一次意外导致左腕神经受损，再也无法稳稳发力走刀。",
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
        "text": "有人惋惜地劝他干脆封刀改做理论教学算了，老陈看着案头的《周易》「天行健，君子以自强不息」印蜕，决定从零开始改练右手执刀。",
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
        "text": "最初右手握刀连一条直线都刻得歪歪扭扭，他像初学蒙童一样，每天在青田石上练习横平竖直的白文汉印线条，磨平了整整两筐印石。",
        "visual": {
          "scene": "workshop",
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
        "scene": "study",
        "text": "三年后老陈右手刻出的印章比昔日更加苍劲老辣、奇正相生，用一把刻刀在方寸石头上刻出了自强不息的生命风骨。",
        "visual": {
          "scene": "study",
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
    "interpretation": "人生难免遭遇突如其来的折翼或寒流。自强不息不是顺境里的豪言壮语，而是当生活关上一扇门、甚至夺走你最趁手的工具时，依然像日月运转一样不怨天尤人，重新生出破局的力量。",
    "limits": "自强不息是精神上的刚健坚韧，同时需配以「厚德载物」的宽厚包容，刚柔并济方为圆满。",
    "reflectionQuestion": "面对生活给你出的一道硬难题，你身上那股「打不倒、重头再来」的自强底气来自哪里？",
    "source": "《周易·乾卦·象传》（「天行健，君子以自强不息；地势坤，君子以厚德载物」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "di-shi-kun-jun-zi-yi-hou-de-zai-wu",
    "text": "地势坤，君子以厚德载物",
    "category": "geyan",
    "tags": [
      "人际关系",
      "诚信与责任",
      "情绪与心态"
    ],
    "plainExplanation": "大地的气势辽阔深厚、顺应万物，君子应当效法大地，以深厚的德行与宽广的胸怀去容载万物、托举他人。",
    "storyTitle": "收容三代手艺人的老街百工院",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "老林在老街有一处祖传的三进大院，商业开发商曾出高价想租去改造成豪华私人会所，被老林婉言谢绝。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
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
        "scene": "workshop",
        "text": "他看到街上修棕绷、锔瓷器、打竹器、修钢笔的几位老手艺人因交不起沿街旺铺房租面临手艺失传，便以象征性的极低水电费请他们全部搬进自家大院。",
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
        "scene": "market",
        "text": "院子里不同脾气的手艺人偶尔拌嘴，老林总是笑呵呵地泡上一壶大麦茶居间调停，还帮他们建立周末亲子非遗体验课贴补收入。",
        "visual": {
          "scene": "market",
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
        "text": "如今这座「百工大院」护住了十几种濒危老手艺，街坊们说老林这方小院就像温厚的大地，稳稳托住了老街的魂。",
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
    "interpretation": "轻薄的纸片托不起一两重的石头，唯有深厚的大地能承载高山大河与万千生灵。一个人的地位、财富与名望如果缺少深厚的德行做底座，就像沙上建塔；德行越厚重，人生所能承载的福报与事业才越稳固。",
    "limits": "厚德载物重在宽厚仁爱与担当，但不等于对恶意破坏规则者无底线纵容。",
    "reflectionQuestion": "当你的能力或资源比以前更充裕时，你是否愿意像大地一样，去为身边需要帮助的人或某项有价值的事撑起一小片空间？",
    "source": "《周易·坤卦·象传》（「地势坤，君子以厚德载物」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-rong-nai-da-wu-yu-ze-gang"
    ]
  },
  {
    "id": "you-fu-tong-xiang-you-nan-tong-dang",
    "text": "穷则独善其身，达则兼善天下",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "诚信与责任",
      "得失与取舍"
    ],
    "plainExplanation": "在处境困顿、能力有限的时候，就专注修好自身的品行与本领；在事业顺遂、拥有更大能量的时候，就尽力去造福社会与身边的人。",
    "storyTitle": "返乡育种家从守好三分试验田到惠及百村",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "早年农科所经费紧张、项目受挫时，老孙没有跟着别人去搞夸大宣传骗补贴，而是「独善其身」，一个人守着城郊三分荒坡试验田潜心做耐旱谷子杂交选育。",
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
        "scene": "study",
        "text": "那六年里他住简陋板房、吃白水煮面，把全部心血都倾注在两千份种质资源的性状记录上，不改学者清白本色。",
        "visual": {
          "scene": "study",
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
        "scene": "field",
        "text": "后来他选育的抗旱高产谷种大获成功、获得重奖与专项资金，老孙步入「达」境，却没有把专利锁进保险柜独享富贵。",
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
        "scene": "courtyard",
        "text": "他带着团队跑遍周边干旱山区的上百个村落，免费向农户发放良种并手把手教旱作保墒技术，真正践行了兼善天下的宏愿。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "人生有起有伏。在低谷与微末之时，不自暴自弃、不随波逐流，守住自己的一方干净天地叫「独善」；在顺境与显达之时，不自私狭隘、不忘来路，把光照亮更远的地方叫「兼善」。",
    "limits": "独善其身是指在困顿期坚守道德操守与专业精进，绝不是自私冷漠、对公共事务袖手旁观。",
    "reflectionQuestion": "无论你当下处于沉淀蓄力的阶段还是顺风顺水的阶段，你认为此刻修好「独善」与力行「兼善」各可以做哪一件小事？",
    "source": "《孟子·尽心上》（「穷则独善其身，达则兼善天下」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "shi-yi-hao-li-miu-yi-qian-li",
    "text": "失之毫厘，谬以千里",
    "category": "geyan",
    "tags": [
      "谨慎与风险",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "起点或基础上哪怕只偏差了一毫一厘的极微小距离，顺着延伸下去到了结果处就会酿成一千里那样巨大的错误。",
    "storyTitle": "望远镜主镜架一毫米垫片的偏差",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "天文社团自己动手组装一台牛顿反射式望远镜，底座寻星镜支架安装时，小刘漏装了一片厚仅零点八毫米的校准铜垫片。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "night",
        "text": "他觉得不到一毫米的微偏肉眼根本看不出来，没必要拆开重装；不料当晚搬到山顶观测木星时，寻星镜对准了目标，主镜视场里却空空如也。",
        "visual": {
          "scene": "night",
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
        "scene": "workshop",
        "text": "老周帮他们演算光学夹角：底座偏斜零点八毫米，投射到数亿公里外的深空天体上，视角就偏出了整整三个满月的宽度！",
        "visual": {
          "scene": "workshop",
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
        "scene": "night",
        "text": "小刘恍然大悟，连夜拆机补上那片微小的校准铜垫片，重新对准后，木星清晰的大红斑与四颗伽利略卫星稳稳跃入目镜中央。",
        "visual": {
          "scene": "night",
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
    "interpretation": "在起点处看似微不足道的「毫厘之差」——无论是地基的一点倾斜、财务模型里的一个小数点，还是价值观上的一次轻微越界，经过时间与距离的杠杆放大，最终都会指向南辕北辙的深渊。守住源头的精准，是防错的铁律。",
    "limits": "在精密工程、核心账目与原则方向上必须计较毫厘；而在日常非原则的生活琐事上则不必过度苛责。",
    "reflectionQuestion": "在你目前正在启动的一个项目或习惯中，源头的方向或基准数据是否已经校准到了「零毫厘偏差」？",
    "source": "《礼记·经解》引《易》曰（「君子慎始，差若毫厘，谬以千里」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "qian-li-zhi-di-kui-yu-yi-xue",
      "fang-wei-du-jian"
    ]
  },
  {
    "id": "you-zhi-bu-zai-nian-gao",
    "text": "有志不在年高，无志空长百岁",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "学习与积累",
      "时间与耐心"
    ],
    "plainExplanation": "一个人有没有远大志向与真才实干，不在于年龄有多大；如果没有志向、浑浑噩噩度日，哪怕活到一百岁也是虚度光阴。",
    "storyTitle": "少年气象观测员的五年物候图谱",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "十四岁的初中生小童立志摸清家乡小盆地的局地微气候规律，身边有大人笑她毛孩子家三分钟热度、懂什么气象。",
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
        "scene": "rain",
        "text": "小童不争辩，用压岁钱买来百叶箱温湿度计与雨量筒，每天早晨六点、下午两点、晚上八点三次准时读数记录，哪怕除夕夜也分秒不差。",
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
        "scene": "study",
        "text": "整整五年一千八百多个日夜，她记满了十本原始气象与樱花物候观测册，绘制出精准的盆地霜冻预警曲线。",
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
        "scene": "school",
        "text": "高中毕业那年，她的这批一手数据被市气象局正式收录进地方微气候数据库，连老专家都对这位有恒志的少年肃然起敬。",
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
    "interpretation": "年龄从来不是衡量生命厚度的唯一标尺。有人二十岁就已经放弃了好奇与志向，每天在重复的麻木中空耗岁月；有人少年立志笃行，或者七十岁依然充满探索热情，每一天都活得热气腾腾。",
    "limits": "肯定少年的志向与锐气，同时也要引导其通过长期扎实的积累去兑现志向，避免眼高手低。",
    "reflectionQuestion": "如果完全忘掉自己今年的实际年龄，你内心最想从现在开始去认真学习和完成的一件志向是什么？",
    "source": "宋元话本及清代石玉昆《三侠五义》常见格言。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-zhi-zhe-shi-jing-cheng"
    ]
  },
  {
    "id": "fan-shi-liu-yi-xian",
    "text": "凡事留一线，日后好相见",
    "category": "geyan",
    "tags": [
      "人际关系",
      "沟通与表达",
      "情绪与心态"
    ],
    "plainExplanation": "处理人际纠纷或竞争博弈时，只要不涉及大是大非底线，得理处也给对方留出一点体面与余地，往后重逢或合作才不会结成死仇。",
    "storyTitle": "退租清场时老东家的宽厚让步",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "在孙老板铺面隔壁租房卖文具的小赵因生意惨淡无力续租，按合同约定逾期三天未搬空就要没收全部两万元押金。",
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
        "scene": "market",
        "text": "小赵因为老家父亲住院耽搁了五天，赶回来搬货时已做好被孙老板按合同全额扣光押金的准备，愁得直叹气。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
        "scene": "street",
        "text": "孙老板查验房屋完好无损后，不仅分文未扣那两万元押金，还免掉了多占五天的房租，拍拍小赵肩膀说：「谁都有难处，留点本钱回去给老人治病要紧。」",
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
        "text": "三年后小赵转型做办公文具批发东山再起，第一时间把全市最紧俏的特价货源独家供给孙老板的百货店，报答当年留一线的恩情。",
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
    "interpretation": "山水有相逢。在自己占尽优势、手握合同时，把事情做绝、把利益榨干看似痛快，实则把路堵死了；在情理之中给落难者留出一线生机与体面，既是宅心仁厚，也是为自己铺设最宽广的远路。",
    "limits": "留一线适用于普通商业往来、邻里摩擦与无心过失；面对穷凶极恶的违法犯罪或底线原则问题，则必须依法严惩，不可姑息养奸。",
    "reflectionQuestion": "在一次你完全占理的争执或博弈中，你能否做到「赢了里子，同时给对方留住三分面子」？",
    "source": "明清民间处世格言，常见于商帮家训与评书。",
    "sourceStatus": "folk",
    "relatedIds": [
      "zhao-tai-jie-xia"
    ]
  },
  {
    "id": "yi-ri-san-xing-wu-shen",
    "text": "吾日三省吾身",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "诚信与责任",
      "学习与积累"
    ],
    "plainExplanation": "我每天都要多次从多个维度反省检视自己的言行：替人谋划办事尽心尽力了吗？与朋友交往笃实守信了吗？所学的道理真正温习践行了吗？",
    "storyTitle": "睡前五分钟的「三问日记本」",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "梅姐工作头几年总觉得每天忙得像陀螺，可到了年底回头看，既想不起长了什么本事，还常在同一类人际磕碰上犯糊涂。",
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
        "scene": "office",
        "text": "后来她在床头放了一本薄薄的笔记本，践行「日三省吾身」：每晚熄灯前只花五分钟回答三个固定问题——今天经手的事尽心了吗？答应人的话守信了吗？新学的知识用上了吗？",
        "visual": {
          "scene": "office",
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
        "scene": "home",
        "text": "起初常在第二问上发现自己漏回了同事消息或敷衍了家人的请求，她便在次日清晨第一件事补上。",
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
        "scene": "study",
        "text": "坚持一年后，这本短短的三问笔记就像每日自动杀毒程序，帮她把浮躁与疏漏当天清零，人变得愈发沉稳通透。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
              "pose": "relieved"
            }
          ],
          "props": [
            "mirror"
          ],
          "focusProp": "mirror",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "一艘船在海上航行，哪怕每天只偏离航向一度，若不及时校准，一个月后就会驶入完全陌生的海域。每日睡前的几分钟自省，不是为了自我批判内耗，而是给心灵做一次温和的航向微调与除尘。",
    "limits": "三省吾身重在就事论事的清醒校准，切莫变成抓着一点小瑕疵反复咀嚼、导致失眠的强迫症。",
    "reflectionQuestion": "今晚睡前如果只问自己一个问题：「今天我对待经手的事和身边的人够真诚尽心吗？」你的答案是什么？",
    "source": "《论语·学而》（「曾子曰：吾日三省吾身——为人谋而不忠乎？与朋友交而不信乎？传不习乎？」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "fan-qiu-zhu-ji",
      "you-ze-gai-zhi-wu-ze-jia-mian"
    ]
  },
  {
    "id": "man-zhao-sun-shi-nai-tian-dao",
    "text": "满招损，谦受益，时乃天道",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "情绪与心态",
      "判断与偏见"
    ],
    "plainExplanation": "自满骄傲必然招来损害，谦虚空明才能持续获益，这是天地自然恒久不变的法则。",
    "storyTitle": "饱满低头的成熟稻穗与昂头空秕谷",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "秋收时节，老姜带刚考上大学的孙子下田割稻，孙子好奇地指着田里几株鹤立鸡群、笔直昂着头的稻秆说：「爷爷，那几株长得最高最精神，肯定结的米最好！」",
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
        "scene": "field",
        "text": "老姜笑着走过去掐下那几株高昂的稻穗放在孙子手心一捏，里面竟然全是干瘪空心的秕谷，一粒饱米也没有。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "jiang",
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
        "text": "老姜又指着旁边弯下腰、沉甸甸垂向泥土的稻穗说：「你看，真正灌满了浆、结出百粒饱米的稻穗，全都是谦卑地向大地低着头的。」",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "jiang",
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
        "text": "孙子捧着一轻一重两束稻穗深受触动：自然界万物尚且满招损、谦受益，人越是有真才实学，越应当像成熟的稻穗一样谦和低头。",
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
    "interpretation": "为什么越有学问的大师往往越平易近人，而半瓶水的人却最喜欢大声晃荡？因为知道得越多，越能看见未知海洋的浩瀚；唯有保持虚怀若谷的「低处」姿态，天下的智慧之水才会源源不断地向你汇聚。",
    "limits": "谦虚是内心的开阔与对规律的敬畏，绝不是唯唯诺诺、缺乏原则主见的自卑。",
    "reflectionQuestion": "在你最擅长的专业领域里，你现在是更接近「昂着头觉得自己无所不知」，还是更接近「低着头深感还有太多未知值得探索」？",
    "source": "《尚书·大禹谟》（「满招损，谦受益，时乃天道」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "man-zhao-sun-qian-shou-yi",
      "qiao-wei-ba"
    ]
  },
  {
    "id": "you-zhi-jing-cheng-po-fu-chen-zhou",
    "text": "穷且益坚，不坠青云之志",
    "category": "geyan",
    "tags": [
      "情绪与心态",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "处境越是艰难困顿，意志反而越要磨砺得坚定顽强，绝不放弃自己高远纯洁的人生志向。",
    "storyTitle": "地下室画室里熬出来的国家画展金奖",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "青年画家小肖刚毕业那三年画作无人问津，租住在冬冷夏潮的半地下室里，最困顿的雨季连买整卷熟宣纸都要精打细算。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "xiao",
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
        "scene": "rain",
        "text": "身边有人劝他改画迎合行画市场的流水线装饰画赚快钱，小肖虽然兜里拮据，却「穷且益坚」，始终不肯放低对传统青绿山水笔墨精神的追求。",
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
        "scene": "study",
        "text": "白天他去少年宫代课维持生计，夜晚回到只有一扇高窗的地下室，在日光灯下一笔一画勾勒太行山石肌理，三年画废的画稿堆满了墙角。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
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
        "text": "第四年秋，他耗时八个月创作的巨幅《太行秋霁图》一举入选全国美展并获金奖，当年地下室里的清苦岁月全化作了画卷上苍茫浑厚的气韵。",
        "visual": {
          "scene": "school",
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
    "interpretation": "顺境中谈理想往往只是锦上添花的点缀；唯有在囊中羞涩、前路迷茫、无人问津的困顿期里，依然不贱卖良知、不荒废手艺、不坠青云之志，那份志向才真正经过了火与铁的淬炼。",
    "limits": "坚守青云之志的同时，也可像故事主人公一样通过正当兼职解决基本温饱，把仰望星空与脚踏实地结合起来。",
    "reflectionQuestion": "当现实生活暂时给你泼来一阵冷雨时，你心底那件真正热爱的事，是否依然被你完好地护在怀里？",
    "source": "唐代王勃《滕王阁序》（「老当益壮，宁移白首之心？穷且益坚，不坠青云之志」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-zhi-zhe-shi-jing-cheng",
      "tian-xing-jian-jun-zi-zi-qiang-bu-xi"
    ]
  },
  {
    "id": "yi-chao-yi-xi-yi-zhou-yi-fan",
    "text": "一粥一饭，当思来处不易；半丝半缕，恒念物力维艰",
    "category": "geyan",
    "tags": [
      "消费与欲望",
      "家庭与生活",
      "自省与成长"
    ],
    "plainExplanation": "面对日常端起的一碗粥、一碗饭，应当想到农夫耕作收获的艰辛不易；面对身上的半根丝、半缕线，也要常怀珍惜物力维艰的敬畏之心。",
    "storyTitle": "带孩子去晒谷场体验的一粒米之旅",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "陈先生七岁的儿子吃饭时总爱挑三拣四，吃不完的半碗白米饭随手就要往垃圾桶里倒，说大米在超市几块钱就能买一大袋。",
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
        "scene": "field",
        "text": "双抢秋收周末，陈先生没有在饭桌上打骂说教，而是带着儿子去乡下稻田，陪老农顶着烈日弯腰拾了一上午稻穗、又在晒谷场翻晒谷粒。",
        "visual": {
          "scene": "field",
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
        "text": "汗水顺着小家伙的鼻尖往下滴，手心也被稻芒扎得发痒，老农告诉他：「从春耕插秧到端上饭桌，一粒米要经过三十六道工序、晒够一百二十天太阳。」",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "chen",
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
        "scene": "kitchen",
        "text": "晚上回到农家饭桌，儿子端起白米饭大口吃得干干净净，连掉在桌上的两粒米也捡起来吃掉，真正懂得了物力维艰的分量。",
        "visual": {
          "scene": "kitchen",
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
    "interpretation": "现代商业把生产过程隐藏在了精美的超市货架背后，让人产生了一种「万物只要刷卡就能凭空变出来」的傲慢错觉。惜食惜物，从来不只是为了省下那几块钱，而是对天地自然馈赠与劳动者汗水的深沉敬意。",
    "limits": "提倡惜物节俭是指杜绝无谓的挥霍浪费，并非在基本营养健康需求上苛待自己或家人。",
    "reflectionQuestion": "今天在点外卖、备餐或购买日用品时，你能否做到「按需取用、不留剩饭、让每一件物品物尽其用」？",
    "source": "明末清初朱柏庐《朱子治家格言》。",
    "sourceStatus": "classical",
    "relatedIds": [
      "jing-yi-xiu-shen-jian-yi-yang-de",
      "yi-fen-geng-yun-yi-fen-shou-huo"
    ]
  },
  {
    "id": "ze-qi-shan-zhe-er-cong-zhi",
    "text": "择其善者而从之，其不善者而改之",
    "category": "geyan",
    "tags": [
      "自省与成长",
      "学习与积累",
      "判断与偏见"
    ],
    "plainExplanation": "在与人相处共事时，看见别人身上的优点长处就虚心学习跟从，看见别人身上的缺点失误就引以为戒、对照检查自己有没有类似毛病并加以改正。",
    "storyTitle": "新店长走访两家邻店的对照笔记",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "梅姐接手社区生鲜店店长前，花三天时间去观察了街上另外两家同行：东头老王店里蔬果陈列得像艺术品般水灵，但收银员态度冷漠常跟顾客吵架；西头老李店里人人笑脸相迎，但冷柜角落常有过期酸奶未清理。",
        "visual": {
          "scene": "market",
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
        "scene": "market",
        "text": "同行的副店长回来后只顾着嘲笑老王家服务差、老李家管理乱，觉得他们都不如自己。",
        "visual": {
          "scene": "market",
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
        "text": "梅姐却打开笔记本画了左右两栏：「择其善者而从之」——把老王家的三温区喷雾保鲜法与老李家的微笑问候语全数学过来；「其不善者而改之」——对照检查自家店里，立刻建立了每日晨间临期商品清零制与客诉温和应答规范。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "mei",
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
        "text": "半年后梅姐的生鲜店集两家之长、避两家之短，成了整条街品质与服务双第一的标杆店铺。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "mei",
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
    "interpretation": "平庸的观察者看别人，不是盲目崇拜就是挑刺嘲笑；而高明的成长者看世界，则把遇到的每一个人都当成双向镜子：别人的闪光点是我的进阶教材，别人的翻车处是我的免费警钟。",
    "limits": "对照他人缺点自省时，重在暗自检视修正自身行为，切忌当众拿别人的短处做负面典型去羞辱对方。",
    "reflectionQuestion": "今天你遇到的那些人里，有哪一个人的优点值得你今晚学过来？又有哪一个人的失误恰好提醒了你也曾犯过类似的毛病？",
    "source": "《论语·述而》（「三人行，必有我师焉：择其善者而从之，其不善者而改之」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "san-ren-xing-bi-you-wo-shi",
      "ze-shan-er-cong",
      "jian-xian-si-qi"
    ]
  },
  {
    "id": "fa-fen-wang-shi-le-yi-wang-you",
    "text": "发愤忘食，乐以忘忧",
    "category": "geyan",
    "tags": [
      "情绪与心态",
      "学习与积累",
      "时间与耐心"
    ],
    "plainExplanation": "钻研攻克学问或事业时全神贯注得连吃饭都顾不上，沉浸在探索与创造的喜悦中以至于忘掉了世俗的一切忧愁。",
    "storyTitle": "七旬爷爷痴迷修撰村史方志的快乐",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老林刚退休那半年无所事事，整天坐在沙发上担心血压、操心儿女，越闲心里越闷，人也显得苍老了许多。",
        "visual": {
          "scene": "study",
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
        "scene": "courtyard",
        "text": "后来村里邀他牵头编纂断代百年的《清溪村志》，老林一下子来了精神，每天背着水壶走访百岁老人、拓印古桥残碑、查阅县志档案。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
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
        "text": "到了撰写考证关键章节时，他常常在书房沉浸得「发愤忘食」，老伴喊他吃午饭喊了三遍他还在对着清代地契微微笑；因为心里装满了考据解谜的纯粹快乐，以前那些失眠烦闷的小忧愁全都烟消云散。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "lin",
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
        "text": "三年后厚达四十万字的村志付梓问世，七十岁的老林眼神清亮、步履矫健，活出了孔子笔下不知老之将至的饱满状态。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "lin",
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
    "interpretation": "人为什么会陷入无休止的焦虑与精神内耗？往往是因为生命缺少了一件能让你全身心投入、产生心流热爱的正事。当你为了一项值得钻研的志业而发愤投入时，创造本身的喜悦就是治愈一切庸人自扰的良药。",
    "limits": "发愤忘食形容的是沉浸心流的精神境界，日常生活中仍需注意按时进餐、劳逸结合以护持身体健康。",
    "reflectionQuestion": "你上一次因为全身心沉浸在一件热爱的事情里、不知不觉过了好几个小时而忘记看手机，是在做什么的时候？",
    "source": "《论语·述而》（「叶公问孔子于子路，子路不对。子曰：女奚不曰，其为人也，发愤忘食，乐以忘忧，不知老之将至云尔」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zhuan-xin-zhi-zhi"
    ]
  },
  {
    "id": "you-zhao-yi-ri-da-chu-zhe-yan",
    "text": "大处着眼，小处着手",
    "category": "geyan",
    "tags": [
      "判断与偏见",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "思考谋划问题要从全局、长远的大格局出发（大处着眼），而具体落地执行时则要从手边最微小、最扎实的环节一步步干起（小处着手）。",
    "storyTitle": "古村落五年复兴蓝图与第一座公厕改造",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "乡建规划师老姜受邀主持一座百年古村落的保护复兴，他在村委会上先亮出了「大处着眼」的五年全局总图：保护整体水系肌理、恢复非遗油纸伞工坊、实现生态文旅共生。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "jiang",
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
        "text": "大家以为这么宏大的蓝图第一件事肯定是贷款几千万修气派大门楼；老姜却宣布第一期工程「小处着手」——先花三万元把村口那座气味刺鼻的旱厕改造成干净无味的生态冲水公厕，并疏通家家户户门前的臭水明沟。",
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
        "scene": "river",
        "text": "村民们起初不解，但等干净公厕建好、门前溪水恢复清澈见底后，不仅全村老人孩子生活品质立刻改善，周末来写生的城里游客也因为卫生舒适第一次愿意留下来过夜消费。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "jiang",
              "pose": "discovering"
            }
          ],
          "props": [
            "bridge"
          ],
          "focusProp": "bridge",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "courtyard",
        "text": "从一座干净公厕、一米清澈水沟的小处起步，五年后古村复兴宏图一步步稳稳成真。",
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
    "interpretation": "如果「只从大处着眼、不从小处着手」，那是夸夸其谈的空想家，蓝图画得再大也落不了地；如果「只从小处着手、不从大处着眼」，那是盲人摸象的事务主义者，东一榔头西一棒子最后拼不出整体。胸怀全局的高度，加上钉牢第一颗钉子的准度，方能成事。",
    "limits": "大处与小处需时刻保持方向一致：每一件小处着手的实事，都应当是通往大处蓝图的一块拼图。",
    "reflectionQuestion": "对照你未来三年的那个「大处着眼」的人生规划，今天下午你能「小处着手」干完的具体一件事是什么？",
    "source": "清代文康《儿女英雄传》第二十五回及近现代治学处事格言。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-zhao-yi-ri-fan-shi-tu-shi"
    ]
  },
  {
    "id": "yi-shen-ze-ming-zhi-zhe-qian-lv",
    "text": "智者千虑，必有一失；愚者千虑，必有一得",
    "category": "geyan",
    "tags": [
      "判断与偏见",
      "自省与成长",
      "团队合作"
    ],
    "plainExplanation": "再聪明渊博的智者，在无数次考虑中也难免会有疏忽遗漏的一次；再平凡笨拙的普通人，在反复琢磨实践中也必定会有灵光一现、切中要害的一得。",
    "storyTitle": "老总工的图纸盲区与搬运工的一句提醒",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "著名医疗器械专家周总工设计了一台新型核磁共振屏蔽舱，内部电磁屏蔽与减震结构精妙绝伦，图纸经过三轮专家会审均获满分。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
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
        "text": "设备样机运抵医院安装现场那天，一直没说话的装卸班长老孙绕着机器走了一圈，挠着头弱弱地问了一句：「周总，这台机器整宽两米一，可医院老急诊楼的电梯井和走廊双开门净宽只有一米九，不拆墙咱们怎么推进去？」",
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
        "scene": "workshop",
        "text": "全场专家瞬间惊出一身冷汗！周总工在实验室里算尽了高深电磁参数（「智者千虑」），却唯独忘了核对老医院走廊门的物理进场宽度（「必有一失」）；而天天搬机器的老孙凭朴素经验一语点醒梦中人（「愚者一得」）。",
        "visual": {
          "scene": "workshop",
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
        "scene": "courtyard",
        "text": "周总工当场向老孙深鞠一躬，连夜将外壳改为分体螺栓拼装结构顺利进场，并立下规矩：今后定型评审必请一线安装与搬运工人到场把关。",
        "visual": {
          "scene": "courtyard",
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
    "interpretation": "这句古语是对傲慢精英主义最清醒的解毒剂。智者之「失」，往往失在过于自信而忽略了最接地气的常识；愚者之「得」，往往得在常年摸爬滚打的一线体感。因此，越是聪明位高的人，越要对普通一线劳动者的朴素提醒保持敬畏与倾听。",
    "limits": "承认智者有失是为了建立交叉复核与集思广益机制，而非否定专业知识的核心价值。",
    "reflectionQuestion": "在你非常擅长的主场领域里，你是否依然愿意虚心听取外行或一线执行者提出的看似「很傻很基础」的疑问？",
    "source": "《晏子春秋·内篇杂下》及《史记·淮阴侯列传》（广武君李左车对韩信语）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "ji-si-guang-yi",
      "san-ren-xing-bi-you-wo-shi"
    ]
  },
  {
    "id": "you-zhao-yi-ri-gua-mu-xiang-kan",
    "text": "士别三日，即更刮目相待",
    "category": "geyan",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "自省与成长"
    ],
    "plainExplanation": "有志气、肯学习的人哪怕只是分别了很短一段时间，他通过刻苦进修取得的进步也会让人大吃一惊，不能再用过去的老眼光去看待他。",
    "storyTitle": "三年夜校苦读的仓库保管员逆袭",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "三年前大陈刚进厂时只是个只会手写记账的仓库保管员，有次参加供应链会议连基本的安全库存周转率公式都算不明白，被采购部张经理当众摇头说「就是个看大门的料」。",
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
        "text": "大陈没有自卑记恨，而是效仿三国吕蒙就学，三年间每天下班后啃完了现代物流工程、数据库SQL查询与库存预测算法十二门专业课。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "chen",
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
        "scene": "office",
        "text": "今年集团上线智慧仓储系统遇到历史数据迁移卡壳，张经理束手无策之时，大陈走上演示台，二十分钟写出自动化清洗脚本并搭建出动态预警看板。",
        "visual": {
          "scene": "office",
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
        "text": "张经理震惊得起立鼓掌：「真可谓士别三日，当刮目相看！我今天要向三年前的老眼光郑重道歉，请陈工出任智慧仓储副总监！」",
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
    "interpretation": "这句名言包含两层深意：对我们自己而言，无论起点多低，只要肯下苦功学习，随时都能改写别人贴在我们身上的旧标签；对我们看别人而言，切忌用三年前的刻板印象把一个正在努力成长的人看扁看死。",
    "limits": "刮目相看源于背后真实的苦学与蜕变，而非换一身新衣服或学几个新名词的表面包装。",
    "reflectionQuestion": "一、你有没有用过去的刻板老眼光低估了身边某个正在悄悄努力的人？二、三年后的你，准备在哪一项本领上让老熟人们「刮目相看」？",
    "source": "《三国志·吴书·吕蒙传》裴松之注引《江表传》（吕蒙曰：「士别三日，即更刮目相待，大兄何见事之晚乎！」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "you-zhi-bu-zai-nian-gao",
      "qin-neng-bu-zhuo"
    ]
  }
];
