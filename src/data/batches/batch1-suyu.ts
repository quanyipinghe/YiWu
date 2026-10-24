import { Proverb } from '../types';

// 第一批扩展内容：俗语篇
export const BATCH_SUYU: Proverb[] = [
  {
    "id": "tian-wai-you-tian-ren-wai-you-ren",
    "text": "天外有天，人外有人",
    "category": "suyu",
    "tags": [
      "自省与成长",
      "谦逊",
      "学习与积累"
    ],
    "plainExplanation": "在辽阔的天空之外还有更高的天穹，本领出众的人之外还有更卓越的高手，提醒我们永远保持谦逊宽广的心胸。",
    "storyTitle": "市集书法展上的偶遇",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老曹在社区里写春联小有名气，自以为楷书功底扎实，平日里难免有些自满傲气。",
        "visual": {
          "scene": "study",
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
        "scene": "street",
        "text": "周末他去老街市集游玩，偶然看见街角一位修伞老伯在旧木板上题字，笔力雄健飘逸。",
        "visual": {
          "scene": "street",
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
        "scene": "market",
        "text": "老曹驻足细看了半个钟头，方才惊觉自己平时的笔法尚有许多轻浮虚浮的不足之处。",
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
        "scene": "courtyard",
        "text": "回到自家书房，老曹收起原先的傲慢，重新在案头铺开素宣，踏踏实实从基本笔画练起。",
        "visual": {
          "scene": "courtyard",
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
            "type": "contrast",
            "text": "虚心求索"
          }
        }
      }
    ],
    "interpretation": "自满常常源于自身视野的狭窄，当我们只在熟悉的小圈子里比较时，很容易将局部的一点长处误认为天下无双。见识过真正的高山深壑，才会懂得低头深耕的踏实与从容。",
    "limits": "保持谦卑是为了激励自我提升和向他人学习，而不是妄自菲薄、彻底丧失自信心，更不能在需要挺身担责时以不如别人为由推诿退缩。",
    "reflectionQuestion": "最近在哪次经历中，你忽然发现某个平时低调的人展现出令人钦佩的本领？",
    "source": "民间俗语，具体出处待核实；常用于劝谕为人处世戒骄戒躁、山外有山。",
    "sourceStatus": "folk",
    "modernApplication": "在技术或职场竞争中，不把阶段性成果当成天花板，主动向各领域的优秀同行请教，才能保持持续进化。"
  },
  {
    "id": "yi-ge-li-ba-san-ge-zhuang",
    "text": "一个篱笆三个桩，一个好汉三个帮",
    "category": "suyu",
    "tags": [
      "合作与分工",
      "人际关系",
      "团队合作"
    ],
    "plainExplanation": "篱笆需要几根粗木桩作为支撑才不至于倒塌，一个人再有本事也需要周围同伴的齐心协助才能把事业做稳做久。",
    "storyTitle": "农忙时节合伙架设的水泵",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "春耕抽水灌溉，老郭一个人顶着大太阳搬运沉重的水泵和长铁管，累得满头大汗却挪不动步。",
        "visual": {
          "scene": "field",
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
        "scene": "river",
        "text": "同村的柱子和大刘开着小三轮赶来，一人负责固定底座，一人顺着水渠铺设管道，老郭接通电掣。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
              "pose": "acting"
            }
          ],
          "props": [
            "rope"
          ],
          "focusProp": "rope",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "field",
        "text": "伴随着机鸣声，清凉的渠水顺畅地涌进三家相连的农田，原本需要两天硬扛的活计一上午便办妥。",
        "visual": {
          "scene": "field",
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
        "text": "日落收工坐在院坝里分吃西瓜，大家有说有笑，真正体会到邻舍互助是庄稼人最好的底气。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "zhou",
              "pose": "relieved"
            }
          ],
          "props": [
            "basket"
          ],
          "focusProp": "basket",
          "narrative": {
            "type": "contrast",
            "text": "互助成事"
          }
        }
      }
    ],
    "interpretation": "人类社会的分工与互信是应对外部风浪最坚固的护栏。哪怕个人能力再强，精力、体魄和视角终究有限；主动接纳他人的援助，同时也真诚支撑身边的伙伴，才能抵御不可预测的困难。",
    "limits": "寻求协作必须建立在自主尽责的前提下，不能自己完全不出力、只指望别人帮衬包办，否则容易演变成依赖他人甚至引发合作纠纷。",
    "reflectionQuestion": "面对手头繁重的事务，你是否愿意主动开口向信任的朋友或搭档提出具体的求助？",
    "source": "民间谚语，广泛流传于北方乡野农耕生活；强调群体协作的力量。",
    "sourceStatus": "folk"
  },
  {
    "id": "zhong-gua-de-gua-zhong-dou-de-dou",
    "text": "种瓜得瓜，种豆得豆",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "自省与成长",
      "时间与耐心"
    ],
    "plainExplanation": "播下瓜种就收获甜瓜，播下豆种就收获大豆；比喻平日里付出怎样的心血与因由，日后自然会结出对应性质的成果。",
    "storyTitle": "阳台绿植盆里的细致照看",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "小雨和弟弟分别在各自的花盆里种下了番茄苗，小雨每天按时松土浇水，弟弟却丢在墙角不闻不问。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
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
        "scene": "home",
        "text": "盛夏酷暑到来，小雨的花苗枝繁叶茂结出了串串青果，弟弟盆里的泥土早已干裂板结，幼苗枯黄萎靡。",
        "visual": {
          "scene": "home",
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
        "text": "弟弟懊丧地想临时狂灌自来水补救，小雨拉住他，温和地指出植物的生长全在平日连续的照拂里。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "mei",
              "pose": "discovering"
            }
          ],
          "props": [
            "fruit"
          ],
          "focusProp": "fruit",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "study",
        "text": "秋天小雨把熟透的红番茄洗净装盘分给全家，弟弟终于明白想要好果实就必须从起初下足功夫。",
        "visual": {
          "scene": "study",
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
            "type": "contrast",
            "text": "因果相随"
          }
        }
      }
    ],
    "interpretation": "自然节律里没有凭空出现的丰收，也没有无缘无故的荒芜。现实生活中的学识、技能、信誉乃至健康，无一不是过去每日选择的具象显现。坦然审视当下的境遇，才能在今天种下更健康的因。",
    "limits": "此语强调行为与长远结果的因果联系，但不代表外界完全没有不可抗力的干扰，面对自然灾害或突发意外时，不能机械地指责当事人付出不够。",
    "reflectionQuestion": "你目前生活中最满意或最焦虑的一项现状，是由此前哪种长期的生活习惯所塑造的？",
    "source": "源于佛教因果理念与民间农耕谚语，《涅槃经》中亦有相近寓意表述。",
    "sourceStatus": "classical"
  },
  {
    "id": "bing-dong-san-chi-fei-yi-ri-zhi-han",
    "text": "冰冻三尺，非一日之寒",
    "category": "suyu",
    "tags": [
      "时间与耐心",
      "谨慎与风险",
      "自省与成长"
    ],
    "plainExplanation": "结出三尺厚的坚冰绝不是一天严寒所造成的；比喻某种根深蒂固的问题或深厚积淀的学问，都是长久积累演变而来的结果。",
    "storyTitle": "车间机床轴承的微小异响",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "机加工车间的老师傅老孙发现主轴运转时伴有微弱沙沙声，年轻学徒觉得还能干活没必要停机检修。",
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
        "text": "老孙耐心地拆下外壳，指出轴承滚珠表面已出现极细微的点蚀，若放任不管，长期摩擦必致整机抱死。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "师徒二人花了一小时清洗轴承腔、换上耐磨黄油并重新校准间隙，机床运转再次恢复平稳静音。",
        "visual": {
          "scene": "workshop",
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
        "scene": "office",
        "text": "老孙在维修手册上记下日期，严肃告诫学徒重大的设备故障往往是从日积月累的疏忽与磨损中酿成的。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "contrast",
            "text": "防微杜渐"
          }
        }
      }
    ],
    "interpretation": "无论是身体机能的滑坡、组织机制的僵化，还是人与人之间隔阂的加深，通常都是细小征兆被反复忽略后的质变。学会敏锐捕捉那些被忽视的初始信号，才能在严寒封冻之前及时化解危机。",
    "limits": "分析复杂难题的深层根源非常必要，但不能因此产生无能为力的宿命感，更不能以年代久远为借口放弃当下的治理与修补行动。",
    "reflectionQuestion": "在你当前关注的某个长期难题上，最早出现的微小信号是什么时候被注意到的？",
    "source": "明代兰陵笑笑生《金瓶梅词话》第九十二回；现广泛用作生活警示语。",
    "sourceStatus": "classical"
  },
  {
    "id": "huo-dao-lao-xue-dao-lao",
    "text": "活到老，学到老",
    "category": "suyu",
    "tags": [
      "学习与积累",
      "自省与成长",
      "情绪与心态"
    ],
    "plainExplanation": "生命延续到什么时候，探索新知与体验的旅程就应当持续到什么时候，保持对广阔世界的求知欲与好奇心。",
    "storyTitle": "退休教师的数码相机旅程",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "年近七旬的退休教师高老师收到儿女送的微单相机，面对复杂的菜单和波轮参数起初有些无从下手。",
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
        "scene": "school",
        "text": "他没有把相机锁在柜里，而是戴上老花镜一页页翻阅说明书，每周还去老年大学旁听数码摄影入门课。",
        "visual": {
          "scene": "school",
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
        "scene": "park",
        "text": "从曝光三要素到构图取景，高老师边学边拍，镜头里的老树新芽、街角笑容生动而富有诗意。",
        "visual": {
          "scene": "park",
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
        "text": "在社区文化廊举办的个人影展上，邻里赞不绝口，高老师笑着说不断摸索新鲜事物让人感觉年轻如初。",
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
            "type": "contrast",
            "text": "常新之心"
          }
        }
      }
    ],
    "interpretation": "学习的终极意义不仅在于获取谋生技能，更在于拓展对生命和环境的认知边界。年龄只是岁月的刻度，若能始终保有对未知领域探寻的兴致，心智便能免于僵化和狭隘，常葆生机。",
    "limits": "晚年探索知识当以修身养性、自得其乐为主，不可贪多求全耗费过量心力导致身体过度透支，应量力而行、循序渐进。",
    "reflectionQuestion": "最近有没有某个你完全陌生的新领域或工具，是你一直很想亲手去摸索一番的？",
    "source": "源于庄子「吾生也有涯，而知也无涯」之哲思，后在民间演化为通俗的治学人生观。",
    "sourceStatus": "classical"
  },
  {
    "id": "liu-de-qing-shan-zai-bu-pa-mei-chai-shao",
    "text": "留得青山在，不怕没柴烧",
    "category": "suyu",
    "tags": [
      "得失与取舍",
      "谨慎与风险",
      "情绪与心态"
    ],
    "plainExplanation": "只要守护好生长林木的青翠山峦，就不愁日后没有干柴烧火；比喻在挫折困顿中保全生命与根本元气，未来就始终保留着东山再起的希望。",
    "storyTitle": "暴雨前夜果园里的果断避险",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "山洪预警骤然拉响，老何看着满园即将成熟的黄桃心急如焚，甚至想顶着滚落的山石摸黑抢收。",
        "visual": {
          "scene": "field",
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
        "scene": "rain",
        "text": "村支书赶到果园一把拉住他，大声劝阻说只要人在、青山在，果树明年还能再发芽，生命绝不能冒险。",
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
        "scene": "courtyard",
        "text": "老何擦了把脸上的雨水，强忍心疼跟随大伙撤离到高处安置点，在避险处平安度过了惊心动魄的暴雨之夜。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "field",
        "text": "次日洪水退去，老何巡视冲毁的泥垄，虽然减产严重但主树干依然完好，他挥动铁锹重新清理排水沟充满干劲。",
        "visual": {
          "scene": "field",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "stone"
          ],
          "focusProp": "stone",
          "narrative": {
            "type": "contrast",
            "text": "保全元气"
          }
        }
      }
    ],
    "interpretation": "人们身处重大逆境或突发损失时，往往因为沉没成本过高而产生孤注一掷的冲动。这句老话像一声坚实的钟鸣：生命、身心健康和核心资产才是根本。留住根本，暂时的亏损和挫折就有翻盘重来的可能。",
    "limits": "留得青山是为了蛰伏以待新生，绝不能把这句话误用为遇到困难就立刻弃甲逃跑、推卸应尽职责的消极托词。",
    "reflectionQuestion": "当你为了某个目标拼命硬撑时，是否曾评估过这一做法是否正在透支你不可逆的核心元气？",
    "source": "明代凌濛初《初刻拍案惊奇》卷二十二，源于民间对山林生生不息自然法则的生活感悟。",
    "sourceStatus": "classical"
  },
  {
    "id": "liang-yao-ku-kou-li-yu-bing",
    "text": "良药苦口利于病，忠言逆耳利于行",
    "category": "suyu",
    "tags": [
      "沟通与表达",
      "自省与成长",
      "人际关系"
    ],
    "plainExplanation": "治病的良药喝起来虽多苦涩却能驱除病痛，诚恳切实的劝诫听起来虽不顺耳却能帮助我们纠正行事的偏差。",
    "storyTitle": "设计方案评审会后的私下切磋",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "年轻设计师小徐精心制作的画册提案，在内部评审会上被资深主管指出结构混乱且信息层级欠佳。",
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
        "text": "小徐起初胸口憋闷觉得主管故意挑刺，傍晚主管拿着修改便签走到他的桌前，逐一拆解排版痛点。",
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
        "scene": "street",
        "text": "看着主管列出的对比草图，小徐猛然察觉自己的排版确实只顾视觉好看而严重牺牲了实际阅读体验。",
        "visual": {
          "scene": "street",
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
        "text": "连夜修正后新版本获得客户全票通过，小徐深感那些直指软肋的批评才是最难得的职场礼物。",
        "visual": {
          "scene": "study",
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
            "type": "contrast",
            "text": "逆耳良言"
          }
        }
      }
    ],
    "interpretation": "人类天然喜爱受到赞美，面对批评本能地会产生防御甚至对抗心理。然而温和的迎合往往掩盖真实的漏洞，敢于在关键时刻冒着令人不悦的风险指出弊端的人，往往出于真切的关切与专业担当。",
    "limits": "听取逆耳忠言的前提是言论客观公允、出于公心；对于毫无事实根据的恶意中伤、无端泼脏水或人身攻击，则应果断甄别排斥。",
    "reflectionQuestion": "最近有没有哪句让你当时心里不太舒服的批评，后来事实证明确实对你大有裨益？",
    "source": "《史记·留侯世家》（「忠言逆耳利于行，毒药苦口利于病」），相近语句见《孔子家语·六本》。",
    "sourceStatus": "classical"
  },
  {
    "id": "ren-xin-qi-tai-shan-yi",
    "text": "人心齐，泰山移",
    "category": "suyu",
    "tags": [
      "合作与分工",
      "团队合作",
      "做事与执行"
    ],
    "plainExplanation": "只要大家的心思与意志高度统一、协力向同一个方向使劲，哪怕像移走巍峨泰山那样艰难的工程也能达成。",
    "storyTitle": "老旧小区加装电梯的合议",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "红星小区单元楼的老年住户盼望加装外挂电梯多年，却因低楼层采光顾虑和出资分歧屡屡搁浅。",
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
        "scene": "courtyard",
        "text": "热心楼组长挨家挨户登门倾听诉求，提出高层适当多出资、底层获得绿化采光补偿与台阶隔音改造的方案。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "home",
        "text": "经过四轮开诚布公的圆桌协调，全体住户终于在知情同意书上齐刷刷签字，施工单位顺利进场作业。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "tong",
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
        "text": "几个月后电梯落成平稳运转，腿脚不便的八旬老人们终于能轻松下楼晒太阳，邻里关系比以往更加亲睦。",
        "visual": {
          "scene": "courtyard",
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
            "type": "contrast",
            "text": "齐心协力"
          }
        }
      }
    ],
    "interpretation": "复杂公共事务中最耗损能量的往往不是技术难题，而是不同利益诉求间的互相猜忌与内耗。当所有参与者能够放下偏执、把目光投向共同福祉并达成深层共识时，迸发出的凝聚力足以跨越重重现实阻隔。",
    "limits": "追求人心齐绝不是压制正常的少数异议或搞一言堂，健康的团结建立在充分沟通、尊重各方合理关切的基础上。",
    "reflectionQuestion": "在你所处的团队中，要促成某项重要目标的真正同频，当下最欠缺的共识是什么？",
    "source": "民间古谚，见载于《汉书》与古代民歌流变，强调集体信念对困难的克服。",
    "sourceStatus": "folk"
  },
  {
    "id": "man-zhao-sun-qian-shou-yi",
    "text": "满招损，谦受益",
    "category": "suyu",
    "tags": [
      "自省与成长",
      "谦逊",
      "自省与成长"
    ],
    "plainExplanation": "骄傲自满往往会招致挫败与损失，而谦虚谨慎、懂得虚怀若谷则能让自己不断获得新的教益与长进。",
    "storyTitle": "厨艺大赛卫冕者的失手与反思",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "连续两届在民间厨艺赛夺魁的梁师傅自恃技艺超群，第三届比赛前既不调研新规，也不认真试菜。",
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
        "text": "决赛现场他随手抓料、盲目调整火候，结果招牌卤肉因火候过急严重干柴，评委们纷纷给出低分痛失奖杯。",
        "visual": {
          "scene": "market",
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
        "scene": "kitchen",
        "text": "落榜后的梁师傅闭门反省，捧起年轻后辈的创新食谱仔细品读，发现行业选材和烹饪理念早已更新迭代。",
        "visual": {
          "scene": "kitchen",
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
        "text": "他收起骄纵之心重新钻研控温技艺，半年后再出的佳肴口感更加醇厚，心境也远比当年更显沉稳宽和。",
        "visual": {
          "scene": "home",
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
            "type": "contrast",
            "text": "虚怀受教"
          }
        }
      }
    ],
    "interpretation": "自满如同一个灌满水的水杯，再甘醇的清泉也无法注入；而谦虚则如同虚空的山谷，方能汇聚四方云水。承认自己有所不知、有所不足，不仅不会贬损威信，反而是生命不断吸收滋养的唯一起点。",
    "limits": "谦受益重在对真理和规律的敬畏，不可滑向虚伪客套、逢迎退让或者对自身合理权益的不自信放弃。",
    "reflectionQuestion": "你最近是否因为对某件事自认太拿手，而险些在细节上栽了跟头？",
    "source": "《尚书·大禹谟》（「满招损，谦受益，时乃天道」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "bu-ru-hu-xue-yan-de-hu-zi",
    "text": "不入虎穴，焉得虎子",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "谨慎与风险",
      "自省与成长"
    ],
    "plainExplanation": "不冒着危险进入老虎洞穴，就捕获不到幼虎；比喻要想取得突破性的重大成就，就必须敢于承担必要的不确定性与风险。",
    "storyTitle": "深山老林里的野生中药考察",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "mountain",
        "text": "植物学科研员何健为了搜寻一种濒危药用植物活体样本，必须穿越地形险峻、雾气弥漫的原始峡谷。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "zhou",
              "pose": "hesitating"
            }
          ],
          "props": [
            "rope"
          ],
          "focusProp": "rope",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "mountain",
        "text": "同行队员有些心生畏缩，何健仔细检查了安全绳锁、防蛇药包与卫星电话，带领大家谨慎沿绝壁攀援。",
        "visual": {
          "scene": "mountain",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "river",
        "text": "经过整整一天的艰难搜寻，终于在背阴悬崖峭壁的石缝深处，记录到了野生植株的珍贵开花生态数据。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "study",
        "text": "下山后科研团队整理出翔实的考察报告，何健感慨若一味畏惧艰险不敢深入一线，科学便无法获得一手真相。",
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
            "type": "contrast",
            "text": "敢为人先"
          }
        }
      }
    ],
    "interpretation": "所有重大的创新与突破，都生长在舒适区的边缘之外。如果一味渴求百分之百的绝对安全与安逸，就只能永远在平庸的存量中打转。敢于直面未知，是推动事物向深处发展的核心动能。",
    "limits": "入虎穴强调的是有准备、有勇气的理性冒险，绝不是鲁莽行事或不计后果的盲动蛮干，安全冗余与防护预案必须做足。",
    "reflectionQuestion": "眼下有一项值得尝试的探索，究竟是什么顾虑在阻碍你迈出关键性的探索一步？",
    "source": "《后汉书·班超传》（「超曰：不入虎穴，不得虎子。当今之计，独有因夜以火攻虏」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jiang-hai-shi-lao-de-la",
    "text": "姜还是老的辣",
    "category": "suyu",
    "tags": [
      "判断与偏见",
      "自省与成长",
      "工作与职业"
    ],
    "plainExplanation": "老姜由于生长周期长其辛辣味远比嫩姜浓烈；比喻历经世事磨砺的长者或资深人士，经验丰富、处事沉着老道。",
    "storyTitle": "暴雨前老电工的配电箱预警",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "台风即将登陆，青年运维小陆按常规巡检了小区配电房，觉得门窗关紧便万事大吉准备下班。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "rain",
        "text": "干了三十年的老电工严师傅冒雨赶来，指着地势低洼处的外墙电缆接头，指出雨水倒灌易顺着缝隙渗入。",
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
        "scene": "courtyard",
        "text": "严师傅带着小陆用防汛沙袋垫高进线孔，并用防水密封胶仔细封死缝隙，架起临时强排潜水泵。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "sun",
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
        "scene": "office",
        "text": "当晚暴雨如注积水深达半米，配电箱完好无损供电正常，小陆打心底佩服老师傅洞察细节的独到眼力。",
        "visual": {
          "scene": "office",
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
            "type": "contrast",
            "text": "沉淀之见"
          }
        }
      }
    ],
    "interpretation": "真正的经验往往不是书本上的现成公式，而是在无数次现实波折中沉淀下的直觉与预判力。尊重前人经过时间检验的实践心得，能让我们在风浪到来之前少走许多致命弯路。",
    "limits": "信赖老经验不等于盲从旧规矩；面对全新的技术范式或突变的环境，老经验也需要与新知识结合，避免因倚老卖老而陷入思维定势。",
    "reflectionQuestion": "在你的专业或生活领域，老前辈们最常提醒的一条朴素经验是什么？",
    "source": "民间俗语，以生姜生长属性形象比拟人的资历与阅历深度。",
    "sourceStatus": "folk"
  },
  {
    "id": "shi-shi-sheng-yu-xiong-bian",
    "text": "事实胜于雄辩",
    "category": "suyu",
    "tags": [
      "诚信与责任",
      "沟通与表达",
      "判断与偏见"
    ],
    "plainExplanation": "真实客观的事实证据比再华丽、再激烈的口舌争辩都更有说服力，事实是击破一切谣言与虚饰的最终准绳。",
    "storyTitle": "净水器滤芯效果的水质检测",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "家里新换的净水器出水口感微甜，父亲总怀疑商家在滤芯里添加了增味化学剂，两人为此争执不休。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "xiao",
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
        "text": "小程没有与父亲在饭桌上情绪化抬杠，而是买来专业的水质检测笔与第三方试剂盒，在餐桌上现场取样。",
        "visual": {
          "scene": "kitchen",
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
        "scene": "study",
        "text": "经过溶解性固体、重金属与酸碱度三重测试，对比自来水与过滤水的多项真实理化指标，数据一目了然。",
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
        "scene": "home",
        "text": "父亲戴上眼镜仔细对照检测报告，疑惑彻底消除，心悦诚服地给全家人倒上了一杯甘甜干净的温水。",
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
            "type": "contrast",
            "text": "实证定音"
          }
        }
      }
    ],
    "interpretation": "在沟通陷入僵局或认知存在巨大鸿沟时，情绪化的辩论往往只会激化对立立场。与其耗费唇舌争论对错，不如把精力放在寻找可靠客观的数据、样本与可复现的事实上，事实本身具有平静而不可动摇的力量。",
    "limits": "摆出事实的同时也要顾及对方的情感接受节奏，切忌用居高临下的态度把事实当成羞辱他人的武器。",
    "reflectionQuestion": "面对一次与他人的意见冲突，你是否有办法用一个清晰客观的事实验证来化解争执？",
    "source": "鲁迅《热风·题记》中引申使用；源于民间讲求真凭实据的朴素辩证法。",
    "sourceStatus": "classical"
  },
  {
    "id": "jin-zhu-zhe-chi-jin-mo-zhe-hei",
    "text": "近朱者赤，近墨者黑",
    "category": "suyu",
    "tags": [
      "人际关系",
      "自省与成长",
      "朋友交往"
    ],
    "plainExplanation": "靠近朱砂容易被染红，靠近黑墨容易被沾黑；比喻客观环境和经常交往的朋友圈子，会对一个人的品行习气产生潜移默化的深刻影响。",
    "storyTitle": "自习室里悄然改变的专注力",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "大一新生小胡以往在寝室常常忍不住通宵打游戏刷短视频，白天的功课跟不上进度常感焦虑内耗。",
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
          "focusProp": "phone",
          "narrative": {
            "type": "bubble"
          }
        }
      },
      {
        "beat": "action",
        "scene": "school",
        "text": "同寝室的几位学长每天清晨相约去图书馆晨读打卡，小胡抱着试一试的心态也收拾书包跟着一同前往。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "tong",
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
        "scene": "school",
        "text": "在安静专注的自习室氛围熏陶下，周围沙沙的翻书声与笔尖滑动声，让他不由自主放下了手机开始攻读高数。",
        "visual": {
          "scene": "school",
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
        "scene": "study",
        "text": "期末考试小胡各门成绩优异顺利通过，他感慨跟自律勤奋的人同行，连自己的脚步都变得轻快坚定起来。",
        "visual": {
          "scene": "study",
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
            "type": "contrast",
            "text": "环境熏染"
          }
        }
      }
    ],
    "interpretation": "人的意志力并非坚不可摧的孤岛，我们的注意力、消费观甚至生活情绪，每时每刻都在受制于身处圈层的重塑。主动选择滋养自己、崇尚真诚与专注的交往群体，是对自身生命成长最理性的护持。",
    "limits": "外因虽有强大塑造力，但内因才是根本决定力量；不能把自身的一切堕落都推卸给周围环境不好，人始终保有自觉选择与坚守良知的权利。",
    "reflectionQuestion": "在你日常最常接触的三个朋友身上，有哪些积极或消极的习惯正在不知不觉影响你？",
    "source": "晋代傅玄《太子少傅箴》（「故近朱者赤，近墨者黑；声和则响清，形正则影直」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "bu-ting-lao-ren-yan-chi-kui-zai-yan-qian",
    "text": "不听老人言，吃亏在眼前",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "自省与成长",
      "家庭与生活"
    ],
    "plainExplanation": "不重视长辈或过来人总结的善意叮嘱，往往很快就会在现实碰壁中吃到苦头；提醒我们要敬畏常识、倾听经验。",
    "storyTitle": "徒步登山忘记带雨衣的教训",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "周末跟朋友相约徒步，出门前母亲再三提醒山区天气多变一定要在包里塞件防风雨衣，小张嫌重没理会。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "scene": "mountain",
        "text": "走到半山腰天空骤然阴云密布雷声大作，一场倾盆冰雨劈头盖脸砸下，山风呼啸气温瞬间降至个位数。",
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
        "text": "穿着单薄卫衣的小张被浇得浑身透湿、牙齿打颤，幸得路过的向导借给他一条保温毯才没有严重失温。",
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
        "text": "下山回到家里喝着热姜汤，小张看着母亲心疼的眼神，深切意识到老人的絮叨里往往凝结着保命的实操常识。",
        "visual": {
          "scene": "courtyard",
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
            "type": "contrast",
            "text": "常识护身"
          }
        }
      }
    ],
    "interpretation": "所谓老人言，并非某种神秘的特权，而是几代人在与复杂生活环境打交道时，用无数次狼狈甚至代价沉重的教训熬出来的避坑指南。保持一点虚心，把前人提醒的底线收进备忘录，是年轻生命最省力的成熟方式。",
    "limits": "听老人言针对的是基础安全、做人信誉等恒定常识；对于时代急速变革的行业趋势与新观念，长辈也会有认知局限，不可全盘泥古不化。",
    "reflectionQuestion": "长辈平时最常对你唠叨的一句安全或生活提醒是什么？你是否真正放在了心上？",
    "source": "民间通俗俗语，流传广泛；强调重视长辈生活经验与前车之鉴。",
    "sourceStatus": "folk"
  },
  {
    "id": "tian-xia-wu-nan-shi-zhi-pa-you-xin-ren",
    "text": "天下无难事，只怕有心人",
    "category": "suyu",
    "tags": [
      "时间与耐心",
      "做事与执行",
      "自省与成长"
    ],
    "plainExplanation": "天下世间本没有绝对无法克服的险阻，最要紧的是做事的人是否具备坚定持久的决心与专注琢磨的毅力。",
    "storyTitle": "老旧自行车齿轮的修复记",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "爷爷留下的老凤凰自行车飞轮严重锈死，周围几个修车铺都嫌配件绝版工序繁琐，劝小李直接当废铁卖掉。",
        "visual": {
          "scene": "courtyard",
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
        "text": "小李舍不得这份念想，在网上下单了除锈煤油与专用拆卸扳手，晚上一边看老师傅维修录像一边摸索拆解。",
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
        "scene": "workshop",
        "text": "他用牙刷浸着柴油一点点刷去三十个滚珠上的黑垢，跑遍五金旧货市场终于配齐了相合规格的卡簧与螺扣。",
        "visual": {
          "scene": "workshop",
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
        "scene": "courtyard",
        "text": "当他装好链条蹬起脚踏，清脆悦耳的飞轮转动声在小院回荡，母亲惊叹天下事只要肯花心思总能找到门道。",
        "visual": {
          "scene": "courtyard",
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
            "type": "contrast",
            "text": "恒心破难"
          }
        }
      }
    ],
    "interpretation": "很多看似不可跨越的困难，本质上并不是客观规律锁死的绝境，而是需要投入超乎常人的耐心、拆解能力与时间试错。所谓有心人，就是不轻易被初期的繁琐所吓退，一步步把大障碍化整为零的人。",
    "limits": "有心能成事的先决条件是遵从科学规律和基本事实，绝不能把这句话引申为空头蛮干、违背客观法则的盲目狂热。",
    "reflectionQuestion": "你手头有一件觉得特别棘手而迟迟不愿碰的事，如果拆成三步攻克，第一步是什么？",
    "source": "宋代纪昀《阅微草堂笔记》等书引述古语；《西游记》等文学名著中多次借用。",
    "sourceStatus": "classical"
  },
  {
    "id": "xin-ji-chi-bu-liao-re-dou-fu",
    "text": "心急吃不了热豆腐",
    "category": "suyu",
    "tags": [
      "时间与耐心",
      "情绪与心态",
      "做事与执行"
    ],
    "plainExplanation": "热豆腐刚出锅时内里滚烫，性急猛吞必然会烫伤口腔；比喻处理繁复精细的事情必须保持从容沉静，急躁冒进必然导致损耗与坏事。",
    "storyTitle": "木雕打磨工序中的停顿",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "小丁跟着老师傅学红木雕花，好不容易雕完一片莲瓣，急不可耐地想立刻涂上清漆看整体光泽效果。",
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
        "text": "师父一把按住他的手，指出木料表面刚吸饱了湿气且有细微毛刺，此时刷漆不仅挂不住，日后必起白雾脱皮。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "sun",
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
        "scene": "courtyard",
        "text": "师父让他把木件放在阴凉通风处自然静置两日，再依次换用四百目、八百目砂纸反复耐心地顺纹打磨。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "sun",
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
        "scene": "workshop",
        "text": "周日小丁重新上清漆，漆面如镜面般透亮温润、木纹毕现，他这才体会到有些精妙成色非得等够火候不可。",
        "visual": {
          "scene": "workshop",
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
            "type": "contrast",
            "text": "从容守候"
          }
        }
      }
    ],
    "interpretation": "凡是涉及到自然质地、心智成熟或事物发酵的过程，都有其无法被人为压缩的时间窗口。急躁源于对即刻满足的狂热追求，而成熟的人懂得在行动与等待之间找到呼吸的节律，让时间参与成全。",
    "limits": "耐住性子不等于行动拖泥带水，在时机成熟或火灾救援等生死攸关的紧要关头，必须雷厉风行、绝不可迟缓。",
    "reflectionQuestion": "最近有没有哪件事因为你太想立刻看到结果，反而弄得手忙脚乱甚至被迫返工？",
    "source": "民间通俗生活谚语，源于北方烹制老豆腐烫食的生活常识。",
    "sourceStatus": "folk"
  },
  {
    "id": "ben-niao-xian-fei-zao-ru-lin",
    "text": "笨鸟先飞早入林",
    "category": "suyu",
    "tags": [
      "学习与积累",
      "做事与执行",
      "自省与成长"
    ],
    "plainExplanation": "飞得慢的笨鸟早一点拍打翅膀起飞，就能更早飞入山林栖息；比喻自身资质平常的人只要提早行动、勤勉付出，同样能率先到达目的地。",
    "storyTitle": "晨曦走廊里的英语朗诵声",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "小马自知记忆力和语感不如其他同学，初中刚学英语时发音生硬口吃，甚至在全班朗读时羞得抬不起头。",
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
        "scene": "courtyard",
        "text": "他没有自暴自弃，而是每天定好早晨六点的闹钟，提前四十分钟跑到教学楼连廊拐角大声跟读磁带练习。",
        "visual": {
          "scene": "courtyard",
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
        "text": "三年间寒来暑往，连廊里每天最早亮起的路灯下总有他的身影，翻烂的词汇书上密密麻麻全是音标批注。",
        "visual": {
          "scene": "school",
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
        "scene": "study",
        "text": "高中入学测试小马的听力和口语均名列年级前茅，他深信只要肯提早振翅，慢飞的鸟儿终能拥抱广阔晴空。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "xiao",
              "pose": "relieved"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "contrast",
            "text": "勤能补拙"
          }
        }
      }
    ],
    "interpretation": "很多时候人与人之间的差距并不是天赋决定的，而是由面对差距时的选择决定的。承认自己的起点可能不如人，并以此为契机提前起步、更专注地投入时间与汗水，恰恰是平凡者最可靠的逆袭路径。",
    "limits": "先飞的同时也必须讲究飞行的方向与方法，如果只顾盲目早起却不讲究学习策略和方法复盘，很容易沦为感动自己的低效勤奋。",
    "reflectionQuestion": "面对某个自认不占优势的领域，你是否曾通过提前起跑和多花时间来弥补差距？",
    "source": "元代关汉卿《陈母教子》第一折；后世用以勉励资质平常者勤勉上进。",
    "sourceStatus": "classical"
  },
  {
    "id": "tu-zi-bu-chi-wo-bian-cao",
    "text": "兔子不吃窝边草",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "人际关系",
      "做事与执行"
    ],
    "plainExplanation": "兔子不会轻易啃食自己洞穴周围的杂草，因为留着杂草可以遮蔽洞口防备天敌；比喻为人处世要有远见，切莫因贪恋身边的小便宜而毁掉立身之本。",
    "storyTitle": "老店主拒绝采购熟人次品货",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "在老街经营粮油副食店的孙老板，遇到相熟多年的同乡推销一批价格极低但无正规质检的散装食用油。",
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
        "text": "同乡劝他这是赚快钱的好机会，而且店开在社区深处都是熟客不会有人严查，孙老板当场严肃拒绝了。",
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
        "scene": "office",
        "text": "孙老板明确表示开店立足靠的就是街坊邻居几十年积攒的信任，贪图身边这点私利等于自掘坟墓。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
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
        "text": "后来该批次杂牌油在其他集市被查封出严重黄曲霉素超标，街坊们得知后对孙老板店里的品质更加信赖。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "sun",
              "pose": "relieved"
            }
          ],
          "props": [
            "door"
          ],
          "focusProp": "door",
          "narrative": {
            "type": "contrast",
            "text": "长远自律"
          }
        }
      }
    ],
    "interpretation": "离自己最近的利益往往也伴随着最致命的风险。懂得在身边的诱惑面前保持克制，不仅是一种做人的本分，更是一种高级的生存智慧。不透支身边的信任资产，根基才能稳固长青。",
    "limits": "此语原意强调自我防范与克制贪欲，但在某些语境下被庸俗化或误读为不与熟人合作，应取其讲求底线、爱惜声誉的正面智慧。",
    "reflectionQuestion": "在你工作或生活的近处，是否曾出现过看似唾手可得、实则暗藏信誉风险的小便宜？",
    "source": "民间通俗谚语，以兔类栖息生态习性作比喻；清代李宝嘉《官场现形记》等作品中有引述。",
    "sourceStatus": "classical"
  },
  {
    "id": "bing-lai-jiang-dang-shui-lai-tu-yan",
    "text": "兵来将挡，水来土掩",
    "category": "suyu",
    "tags": [
      "情绪与心态",
      "做事与执行",
      "判断与偏见"
    ],
    "plainExplanation": "敌军来了就派出得力将领迎战，洪水来了就运来泥土修堤阻拦；比喻根据具体面临的险情机动灵活地采取对策，保持沉着笃定。",
    "storyTitle": "露天音乐会遭遇骤雨的应急转场",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "park",
        "text": "社区举办周末露天民乐演奏会，开场前一小时原本晴朗的天空忽然下起阵雨，台下观众有些惊慌躁动。",
        "visual": {
          "scene": "park",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "rain",
        "text": "现场总指挥周姐没有自乱阵脚，立刻启动预备方案：引导观众移步带雨棚的邻里中心长廊，同时架设防雨隔布。",
        "visual": {
          "scene": "rain",
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
        "text": "乐手们迅速带好乐器转入连廊，灯光师接通备用室内电源，十几分钟后激昂的丝竹管弦在风雨声中从容奏响。",
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
        "scene": "home",
        "text": "雨水冲刷着屋檐，廊下观众掌声雷动，周姐笑着说只要心理预案准备扎实，任何突发状况都能化险为夷。",
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
            "type": "contrast",
            "text": "沉着应对"
          }
        }
      }
    ],
    "interpretation": "生活充满不可测的变数，遇到突发意外时最怕的是惊惶失措、怨天尤人。保持一种兵来将挡的豁达与应变力，把注意力迅速从焦虑转移到当下可调动的资源与对策上，困局往往迎刃而解。",
    "limits": "从容应变必须建立在平时扎实的专业积累与应急预案之上，不能拿这句话当成平日彻底不做安全预案、临阵碰运气的借口。",
    "reflectionQuestion": "面对计划之外的突发意外，你通常是先陷入烦躁抱怨，还是迅速思考当下的替代方案？",
    "source": "元代无名氏《云台门》第一折；亦常见于明清话本小说，表达兵家根据敌情权变用兵的韬略。",
    "sourceStatus": "classical"
  },
  {
    "id": "qiang-niu-de-gua-bu-tian",
    "text": "强扭的瓜不甜",
    "category": "suyu",
    "tags": [
      "人际关系",
      "情绪与心态",
      "沟通与表达"
    ],
    "plainExplanation": "硬把还没成熟的青瓜从藤上拧下来，吃起来不仅不甘甜反而苦涩；比喻强迫他人顺从自己的意愿，往往难以获得如意的结果。",
    "storyTitle": "琴房门前父亲的释怀与放手",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林一心希望儿子继承自己的爱好考音乐学院小提琴专业，每天逼着孩子练习四小时，父子关系日趋冰冷。",
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
        "scene": "school",
        "text": "这天儿子在考级模拟赛上频频走音、目光呆滞，中场休息时蹲在走廊墙角偷偷掉眼泪，双手甚至发抖。",
        "visual": {
          "scene": "school",
          "characters": [
            {
              "id": "lin",
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
        "scene": "park",
        "text": "老林看着孩子痛苦的模样心中剧震，深谈后方知儿子真正痴迷并擅长的是机械模型设计与手绘发明。",
        "visual": {
          "scene": "park",
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
        "scene": "study",
        "text": "老林收起了琴弓，郑重地给孩子买了一套精密的制图仪器，看到儿子重展笑颜，老林终于懂得成全比强扭更珍贵。",
        "visual": {
          "scene": "study",
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
            "type": "contrast",
            "text": "尊重天性"
          }
        }
      }
    ],
    "interpretation": "人际交往与家庭教育中，最容易犯的错误就是以爱之名强加意志。每个独立的生命都有其自身的禀赋、愿望与生长轨迹。强求服从或许能得到表面的依顺，却扼杀了内在的生机与真正的信任。",
    "limits": "尊重意愿不等于对未成年人的严重不良嗜好放任自流；在底线道德与安全边界上，适度的管教与引导依然不可或缺。",
    "reflectionQuestion": "你是否曾在某个决定上试图强行改变亲近之人的选择？那带来了怎样的实际后果？",
    "source": "民间通俗谚语，借瓜果自然成熟甘甜规律喻人际相处之道；见载于明清世情小说。",
    "sourceStatus": "folk"
  },
  {
    "id": "fan-shi-yu-ze-li-bu-yu-ze-fei",
    "text": "凡事预则立，不预则废",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "谨慎与风险",
      "自省与成长"
    ],
    "plainExplanation": "无论做任何事情，事先有充分周密的谋划与准备就能成功，如果不做预先准备就往往会陷入败局与混乱。",
    "storyTitle": "团队野外考察物资清单的校核",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "地质勘探队准备进山前夕，队长小赵对照防险清单，逐一查验卫星对讲机、备用电池与急救蛇药是否齐备。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "zhou",
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
        "text": "个别队员嫌前置清点太繁复拖延出发时间，小赵坚持多花了半小时把每个小组的备用应急包彻底核对盖章。",
        "visual": {
          "scene": "station",
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
        "scene": "mountain",
        "text": "进山第三天突遇突发大雾导致两名队员与主队迷路，队员依靠包内的强光信号灯与定位手摇发电机迅速获救。",
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
        "text": "全队安全归来坐在营地休整，队员们由衷钦佩队长出发前那份一丝不苟的周详准备是挽救生命的钥匙。",
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
            "type": "contrast",
            "text": "周密筹谋"
          }
        }
      }
    ],
    "interpretation": "盲目的乐观是行动最大的敌人。真正的行动力不是提着脑袋往前冲，而是在迈步之前把可能出现的断崖、天气和补给预先推演清晰。周密的准备赋予人从容应对一切不确定性的底气。",
    "limits": "预先筹备当以抓住核心风险与主流程为度，不能陷入过度计划、追求绝对完美而迟迟不敢迈出第一步的行动瘫痪中。",
    "reflectionQuestion": "对于下周最重要的一项工作或出行任务，你是否已经把关键环节的应急替代项推演过一遍？",
    "source": "《礼记·中庸》（「凡事豫则立，不豫则废。言前定则不跲，事前定则不困」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "qiao-fu-nan-wei-wu-mi-zhi-chui",
    "text": "巧妇难为无米之炊",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "再聪明能干的家庭主妇，手里没有大米也做不出香喷喷的米饭；比喻做任何事情都必须依托必要的客观物质基础与先决条件。",
    "storyTitle": "软件架构师面对空缺服务器的窘境",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "公司定于次日上线高并发电商促销模块，业务部门却迟迟未审批通过高带宽云服务器节点的扩容预算。",
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
        "text": "架构师老钱带着团队把代码底层算法优化到了极致，但缺少最基础的物理算力支持系统压测依然频频崩溃。",
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
        "text": "老钱没有盲目硬抗上线，而是整理出清晰的算力负荷与容量对照表，在项目跨部门早会上据理力争说明原委。",
        "visual": {
          "scene": "study",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "office",
        "text": "管理层看清硬件瓶颈后火速紧急调拨算力资源，服务器扩容完成后系统平稳顺畅抗住海量洪峰订单。",
        "visual": {
          "scene": "office",
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
            "type": "contrast",
            "text": "务本求实"
          }
        }
      }
    ],
    "interpretation": "主观能动性必须与客观规律和现实条件紧密结合。在资源匮乏或基础条件不具备时，一味空喊口号、盲目施压只会导致劣质糊弄与系统崩溃。看清必要的物质底线，才能把力气用在刀刃上。",
    "limits": "承认巧妇难为无米之炊是为了务实筹措资源，绝不能将其作为消极怠工、遇到一点资源不足就彻底放弃探索的借口。",
    "reflectionQuestion": "在当前推进受阻的项目中，究竟是个人方法问题，还是确实缺少了不可或缺的关键资源？",
    "source": "宋代陆游《老学庵笔记》卷三引古语；生动反映物质基础对行动结果的制约。",
    "sourceStatus": "classical"
  },
  {
    "id": "yuan-shui-jie-bu-liao-jin-ke",
    "text": "远水救不了近火",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "做事与执行",
      "家庭与生活"
    ],
    "plainExplanation": "远方的江河之水，无法立刻用来扑灭眼前的火情；比喻缓慢或遥远的救助办法，解决不了迫在眉睫的燃眉之急。",
    "storyTitle": "楼道油锅起火时的灭火毯",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "周日中午对门邻居家炖汤时油锅突窜火苗，浓烟顺着门缝涌出，邻居惊慌失措只顾着站在门口大喊救命。",
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
        "scene": "kitchen",
        "text": "住在隔壁的梅姐听到喊声，立刻从自家玄关应急箱里抽出阻燃灭火毯冲过去，顺手关掉燃气总阀。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "mei",
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
        "text": "梅姐双手护在毯后迅速将灭火毯严密覆盖在起火铁锅上，不到十秒钟明火便因隔绝氧气彻底熄灭。",
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
        "text": "等物业保安提着大灭火器从小区南门赶上楼时险情早已解除，大家感叹身边的常备工具才最救急。",
        "visual": {
          "scene": "home",
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
    "interpretation": "面对突发险情，遥远而宏大的外援往往来不及响应。未雨绸缪地在身边储备立即可用的工具、应急技能与邻里互助网络，才能在关键时刻化险为夷。",
    "limits": "强调就近救急的重要性，绝不意味着可以轻视专业消防与医疗救援体系，重大险情仍须第一时间拨打急救电话。",
    "reflectionQuestion": "你家里或办公桌旁是否备有随时能摸到的应急手电、急救包或灭火毯？",
    "source": "《韩非子·说林上》（「失火而取水于海，海水虽多，火必不灭矣，远水不救近火也」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-ge-ba-zhang-pai-bu-xiang",
    "text": "一个巴掌拍不响",
    "category": "suyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "自省与成长"
    ],
    "plainExplanation": "单靠一只手掌拍不出声音；比喻许多日常摩擦与争执往往双方都有一定促成因素，各自反思才能真正平息矛盾。",
    "storyTitle": "上下楼噪音纠纷的双向体谅",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "三楼老林嫌四楼小年轻夜里走路拖椅子声音太吵，一气之下拿长扫把顶敲天花板，结果楼上跺脚更响了。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "scene": "courtyard",
        "text": "社区调解员把两人请到楼下长椅坐下，老林抱怨对方作息太晚，小伙子则委屈说老房子隔音差并非故意。",
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
        "scene": "home",
        "text": "平心静气聊开后双方各自退让一步：小伙子给所有桌椅脚套上加厚静音硅胶垫，老林也不再意气用事敲顶棚。",
        "visual": {
          "scene": "home",
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
        "scene": "courtyard",
        "text": "周末小伙子下班顺手帮老林提了一袋大米上楼，原本剑拔弩张的上下楼邻居成了互相照应的熟人。",
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
    "interpretation": "在日常人际摩擦中，若双方都只盯着对方的过失而放大怨气，小矛盾就会升级成死结。愿意先检视自身言语或方式的欠妥之处，是打破僵局的钥匙。",
    "limits": "此语仅适用于普通日常误会与双向摩擦，绝不可用于校园霸凌、违法侵权或单方施害事件中去搞各打五十大板的和稀泥。",
    "reflectionQuestion": "回顾最近一次与家人或同事的口角，除了对方的原因，你当时的语气是否也有火上浇油之处？",
    "source": "明代冯梦龙《警世通言》等近代白话文献常见俗语。",
    "sourceStatus": "classical",
    "commonMisreading": "常被滥用于对单方面侵害或霸凌事件做和稀泥式调解，模糊是非底线。",
    "modernApplication": "适用于家庭内部拌嘴、邻里日常误会等双方均有情绪升级的沟通调解。"
  },
  {
    "id": "lu-yao-zhi-ma-li-ri-jiu-jian-ren-xin",
    "text": "路遥知马力，日久见人心",
    "category": "suyu",
    "tags": [
      "人际关系",
      "时间与耐心",
      "诚信与责任"
    ],
    "plainExplanation": "路途遥远才能检验出马匹的耐力高低，相处日子长了才能看清一个人真实的品行与诚意。",
    "storyTitle": "十年合伙经营小书店的默契",
    "sceneDomain": "朋友交往",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "老周与阿诚十年前合伙在老街盘下一间独立书店，起初身边不少朋友唱衰，觉得合伙生意熬不过三年。",
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
        "scene": "market",
        "text": "头两年书店营收微薄，阿诚不仅分文未多拿，每逢进货盘点总是主动挑最累的夜班，账目记到分毫毕现。",
        "visual": {
          "scene": "market",
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
        "scene": "rain",
        "text": "有一年老周生病住院两个月，阿诚独自撑起店务，还按月把分红与清晰的收支凭证送到老周病床前。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "zhou",
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
        "scene": "study",
        "text": "十年风雨走过，小书店成了城市文化地标，老周常说时间才是最准的试金石，真朋友都在岁月里见分晓。",
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
    "interpretation": "一时的热情寒暄与慷慨承诺很容易伪装，但在漫长平淡的岁月、利益分配的关口以及突发困境的考验下，一个人的底色终会显露无遗。",
    "limits": "强调时间对人品的检验，并不意味着在交往初期对所有人都抱持冷漠猜忌，真诚依然是建立关系的基石。",
    "reflectionQuestion": "你身边认识超过五年的朋友中，哪一件小事让你彻底笃定了对方的为人？",
    "source": "元代无名氏《争报恩》第一折（「则愿得姐姐长命富贵，路遥知马力，日久见人心」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "zai-jia-qian-ri-hao-chu-men-yi-shi-nan",
    "text": "在家千日好，出门一时难",
    "category": "suyu",
    "tags": [
      "人际关系",
      "旅途",
      "家庭与生活"
    ],
    "plainExplanation": "在家里生活处处顺手安稳，一旦出门在外哪怕很短时间也会遇到诸多不便；提醒人既要做好行前准备，也要对异乡旅人多一份体恤。",
    "storyTitle": "高铁站台上的热水与充电宝",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "station",
        "text": "刚毕业的小肖第一次独自乘火车去北方城市面试，候车时手机电量耗尽关机，偏偏天降寒雨气温骤降。",
        "visual": {
          "scene": "station",
          "characters": [
            {
              "id": "xiao",
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
        "text": "他站在陌生的候车大厅手足无措，既查不到酒店地址也联系不上家人，深刻体会到离家在外的窘迫。",
        "visual": {
          "scene": "station",
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
        "scene": "rain",
        "text": "邻座一位大叔看出了他的难处，主动借出充电宝让他开机备份地址，还分给他一杯温热茶水暖手。",
        "visual": {
          "scene": "rain",
          "characters": [
            {
              "id": "xiao",
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
        "text": "顺利办完入住后小肖给家里报了平安，从此他每次出行都会在包里多备一根充电线，遇到问路旅人也格外热心。",
        "visual": {
          "scene": "home",
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
    "interpretation": "熟悉的家庭环境为我们遮蔽了大量日常琐碎摩擦，而置身陌生环境则会把衣食住行的细节需求瞬间放大。懂得出门之难，既能让我们学会未雨绸缪，也能培养对陌生异乡人的善意。",
    "limits": "体察出门之难是为了做足准备与互助共情，不应因此畏惧走出家门去探索更广阔的天地。",
    "reflectionQuestion": "你最近一次出远门时，遇到了什么在家觉得微不足道、在外却颇感棘手的小麻烦？",
    "source": "元曲及明清俗语常见，如《警世通言》引述。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-fen-geng-yun-yi-fen-shou-huo",
    "text": "一分耕耘，一分收获",
    "category": "suyu",
    "tags": [
      "学习与积累",
      "时间与耐心",
      "做事与执行"
    ],
    "plainExplanation": "付出一分辛勤的劳作，才能换来一分扎实的果实；强调踏实付出与真实回报之间的因果联系。",
    "storyTitle": "菜园里两垄番茄的长势对照",
    "sceneDomain": "田野与农作",
    "story": [
      {
        "beat": "cause",
        "scene": "field",
        "text": "退休后的孙大爷在社区共享菜园认领了半分地，和邻居老李同一天种下了相同品种的番茄幼苗。",
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
        "text": "孙大爷每隔两天就去松土除草、搭架整枝并施农家肥；老李则一时兴起才浇次水，任由杂草与侧枝疯长。",
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
        "scene": "courtyard",
        "text": "到了盛夏采摘季，孙大爷的番茄藤上挂满红彤彤的饱满果实，老李的地里却只结出几颗干瘪酸涩的小果。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "kitchen",
        "text": "孙大爷提着一篮鲜番茄分给街坊品尝，笑道土地最是诚实，你流了多少汗它就还你多少甜。",
        "visual": {
          "scene": "kitchen",
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
    "interpretation": "在技术与信息飞速流转的时代，人们容易迷恋四两拨千斤的捷径。然而无论是农事耕作、手艺打磨还是学识积累，最底层的规律依然是守恒的：唯有真实的投入才能沉淀出经得起检验的成果。",
    "limits": "耕耘是收获的必要基础，但也要讲究遵循自然规律与科学方法，避免盲目低效的重复消耗。",
    "reflectionQuestion": "你目前最渴望获得突破的一件事，你实际每天为它投入的有效时间有多少？",
    "source": "宋代胡宏《胡子知言》及近代农谚流变。",
    "sourceStatus": "classical"
  },
  {
    "id": "ren-wu-yuan-lv-bi-you-jin-you",
    "text": "人无远虑，必有近忧",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "人如果没有长远的统筹考虑，眼下或不久的将来就一定会浮现出令人困扰的忧患。",
    "storyTitle": "家庭收支账本里的应急储备金",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "前些年林先生夫妻收入颇丰，平时习惯了月光消费，老母亲提醒他们存点医疗与失业备用金，两人总觉得还早。",
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
        "scene": "office",
        "text": "去年林先生所在行业调整，奖金缩水，恰逢家里热水器与老车接连大修，账面一下子捉襟见肘陷入焦虑。",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "lin",
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
        "scene": "rain",
        "text": "夫妻俩痛定思痛，坐下来重新梳理家庭财务结构，砍掉冲动订阅与奢侈开销，每月固定拨出三成收入存入专户。",
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
        "scene": "home",
        "text": "今年哪怕遇到短期项目空窗期，家里生活节奏依然井然有序，两人深刻体会到长远规划带来的内心踏实。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
    "interpretation": "近忧往往不是凭空掉下来的，而是过去缺乏远虑所埋下的伏笔。在顺境时多看三步、留出安全冗余，不是悲观主义，而是给自己和家人搭建抵御无常风浪的防波堤。",
    "limits": "远虑是指理性的未雨绸缪与规划，切莫滑向对遥远未来不可控小概率事件的过度焦虑与杞人忧天。",
    "reflectionQuestion": "为了让你三年后的生活更从容，今天有哪些看似不紧急但必须开始着手准备的事？",
    "source": "《论语·卫灵公》（「子曰：人无远虑，必有近忧」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "da-shu-di-xia-hao-cheng-liang",
    "text": "大树底下好乘凉",
    "category": "suyu",
    "tags": [
      "合作与分工",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "茂密的大树枝叶繁盛，站在树荫下能遮挡烈日、享受清凉；比喻依托成熟稳固的平台或体系，做事更容易获得支撑与保障。",
    "storyTitle": "青年手艺人与非遗工坊的共生",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "小童学成竹编手艺后独自在网上接单，因缺乏稳定的原竹供应链和品控标准，常常为寻找优质慈竹焦头烂额。",
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
        "scene": "market",
        "text": "后来他加入当地历史悠久的非遗竹艺合作社，依托合作社统一的林场基地与烘干工坊，原料难题迎刃而解。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "tong",
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
        "scene": "workshop",
        "text": "在老艺人们的切磋指点下，小童专心研发青年审美的新式竹编灯具，借助合作社展销渠道很快打开了销路。",
        "visual": {
          "scene": "workshop",
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
        "scene": "courtyard",
        "text": "小童感慨平台就像遮风挡雨的大树，既为手艺人托住了底线，他自己的创新作品也为老工坊添了新绿。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "tong",
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
    "interpretation": "承认优质平台、成熟社群或前人积累的托举作用，是一种清醒的认知。善借平台之力能减少无效摸索，但真正健康的关系是借荫成才后也能为大树反哺生机。",
    "limits": "大树之下虽好乘凉，却也容易遮蔽阳光导致幼苗失去独立抗风能力；切忌产生寄生依赖心理而丧失个人核心竞争力。",
    "reflectionQuestion": "在你的成长或工作中，有哪些成绩其实是得益于所在平台或前人的铺垫，而你此前误以为全凭个人本事？",
    "source": "宋元以来民间俗语，元代马致远杂剧等均有化用。",
    "sourceStatus": "classical"
  },
  {
    "id": "you-zhi-zhe-shi-jing-cheng",
    "text": "有志者事竟成",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "时间与耐心",
      "自省与成长"
    ],
    "plainExplanation": "怀有坚定志向并百折不挠去实践的人，终究能把目标做成；强调笃定信念与持续行动的结合。",
    "storyTitle": "夜校钳工考取高级技师之路",
    "sceneDomain": "校园",
    "story": [
      {
        "beat": "cause",
        "scene": "workshop",
        "text": "只有中专学历的青年钳工大陈，立志要攻克精密模具数控编程，考取厂里寥寥无几的高级技师资格。",
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
        "scene": "study",
        "text": "白天他在车间里观察老师傅调机参数，晚上骑车去十里外的技工夜校啃高等数学与机械制图，一坚持就是四年。",
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
        "text": "期间两次模拟实操考核因微米级公差超标落选，他把报废的试件摆在案头，逐刀分析走刀路径与热形变补偿。",
        "visual": {
          "scene": "school",
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
        "scene": "workshop",
        "text": "第五年春天大陈以全省实操第一名的成绩拿下高级技师证书，成了车间技术攻关带头人。",
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
    "interpretation": "真正的志向不是一时热血的口号，而是在漫长枯燥的打磨期、在无人喝彩的深夜里依然不改方向的定力。当志向化作日复一日的具体行动，时间终会给出回响。",
    "limits": "立志必须与切合实际的阶段规划和科学方法结合，不能脱离客观条件空谈盲目坚持。",
    "reflectionQuestion": "回想你曾经坚持到底并最终做成的一件事，当时支撑你熬过最枯燥阶段的动力是什么？",
    "source": "《后汉书·耿弇传》（「将军前在南阳建此大策，常以为落落难合，有志者事竟成也！」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "da-zhong-lian-chong-pang-zi",
    "text": "打肿脸充胖子",
    "category": "suyu",
    "tags": [
      "消费与欲望",
      "自省与成长",
      "判断与偏见"
    ],
    "plainExplanation": "把自己的脸颊打肿来假装体态富态；比喻为了死要面子、追求虚荣排场，不顾自身实际承受能力硬撑门面。",
    "storyTitle": "同学聚会抢单背后的账单焦虑",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "刚工作两年的小肖参加老同学聚餐，为了在众人面前显得混得风光，硬是抢过昂贵餐厅的账单刷信用卡买单。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "xiao",
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
        "text": "回到出租屋看着近半个月工资的消费账单，接下来整整三周他只能靠吃挂面度日，连房租都得拆东墙补西墙。",
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
        "text": "月底老同学约他再去高消费场所，小肖鼓起勇气坦诚自己正在攒钱进修、手头预算有限，提议改去公园野餐。",
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
        "scene": "home",
        "text": "没想到同学们纷纷赞同，说大家本来也觉得上次太破费，卸下伪装的小肖第一次体会到坦诚相见的轻松。",
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
    "interpretation": "虚荣心往往让人把别人的眼光看得比自己的真实生活还重。用透支财务或精力的代价去换取别人几秒钟的客套夸赞，是最得不偿失的交易。敢于承认自己的真实处境，才是内心强大的开始。",
    "limits": "反对死要面子硬撑排场，并非提倡在必要礼仪场合一味抠门失礼，而是主张量力而行、真诚适度。",
    "reflectionQuestion": "你的日常开销中，有哪些其实是买给「别人眼光」看、而非自己真正需要的？",
    "source": "近代民间俗语，讽刺虚荣硬撑门面的行为。",
    "sourceStatus": "folk"
  },
  {
    "id": "zhi-zu-chang-le",
    "text": "知足常乐",
    "category": "suyu",
    "tags": [
      "情绪与心态",
      "消费与欲望",
      "家庭与生活"
    ],
    "plainExplanation": "懂得珍惜已拥有的事物、不作无止境的贪求，内心就能常保宁静与欢喜。",
    "storyTitle": "老夫妻阳台小茶席的四季",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "老林退休后曾一度羡慕老同事换了郊区大别墅，看自家住了二十年的两居室总觉得局促，心里闷闷不乐。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "text": "老伴没多说大道理，只是带着他把向阳小阳台清理出来，摆上一张旧藤桌，种上几盆茉莉与薄荷。",
        "visual": {
          "scene": "kitchen",
          "characters": [
            {
              "id": "lin",
              "pose": "acting"
            }
          ],
          "props": [
            "window"
          ],
          "focusProp": "window",
          "narrative": {
            "type": "highlight"
          }
        }
      },
      {
        "beat": "result",
        "scene": "courtyard",
        "text": "每天清晨两人在阳台上晒着太阳喝早茶，下楼五分钟就是菜市场和社区医院，老街坊见面嘘寒问暖。",
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
        "text": "后来去郊区别墅做客，见老同事为打理空旷房屋和看病买菜奔波发愁，老林恍然觉得自家的烟火小窝正是福地。",
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
    "interpretation": "欲望就像喝盐水，若只盯着别人碗里没有的东西，拥有再多也会觉得匮乏。知足不是放弃追求美好生活，而是拥有发现当下美好、不被无底洞般的攀比心绑架的智慧。",
    "limits": "知足常乐适用于对物质欲望和攀比心的节制，在学识精进与社会责任上则应保持进取之心，不可混同于得过且过。",
    "reflectionQuestion": "此时此刻环顾四周，你身边有哪些习以为常、其实非常值得感恩的便利或温暖？",
    "source": "《老子·第四十六章》（「祸莫大于不知足，咎莫大于欲得。故知足之足，常足矣」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "qian-li-zhi-di-kui-yu-yi-xue",
    "text": "千里之堤，溃于蚁穴",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "做事与执行",
      "工作与职业"
    ],
    "plainExplanation": "绵延千里的坚固河堤，往往因为小小的蚂蚁洞穴渗水而最终决口崩塌；比喻微小的隐患若不及时修补，终会酿成全局性的大祸。",
    "storyTitle": "木结构古廊桥的屋瓦巡检",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "river",
        "text": "守桥人老姜每周都要走上百年木拱廊桥，仰头逐一检查桥顶两千多片青瓦是否有松动或裂缝。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "jiang",
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
        "scene": "rain",
        "text": "徒弟觉得偶尔漏几滴雨在粗大的横梁上算不得什么大事，老姜却搬来木梯，带他爬上梁架查看一处旧水渍。",
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
        "text": "老姜指出廊桥全靠榫卯咬合受力，一片瓦漏水看似不起眼，经年累月浸润会让核心木榫腐朽发软，整座桥都会倾斜。",
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
        "scene": "river",
        "text": "师徒俩赶在梅雨季前把三片裂瓦全部更换封实，百年廊桥在随后的夏洪暴风雨中依然稳如泰山。",
        "visual": {
          "scene": "river",
          "characters": [
            {
              "id": "jiang",
              "pose": "relieved"
            }
          ],
          "props": [
            "wood"
          ],
          "focusProp": "wood",
          "narrative": {
            "type": "contrast"
          }
        }
      }
    ],
    "interpretation": "重大事故极少是毫无征兆的突然降临，它几乎总是几十个被轻视的微小漏洞叠加共振的结果。对细微异常保持敏锐与敬畏，在蚁穴阶段就动手封堵，是成本最低、效果最好的安全之道。",
    "limits": "重视微小隐患是指在关键结构、安全底线和健康习惯上防微杜渐，并非要在无关宏旨的生活琐事上吹毛求疵。",
    "reflectionQuestion": "在你的健康、财务或日常工作中，有没有哪个被你以「小毛病不碍事」为由一再拖延处理的隐患？",
    "source": "《韩非子·喻老》（「千丈之堤，以蝼蚁之穴溃；百尺之室，以突隙之烟焚」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "yi-shan-bu-neng-rong-er-hu",
    "text": "一山不容二虎",
    "category": "suyu",
    "tags": [
      "合作与分工",
      "人际关系",
      "团队合作"
    ],
    "plainExplanation": "一座山林里难以同时容纳两只争夺领地的猛虎；比喻在同一团队或事务中，若权责边界不清、出现两个互不相让的强势主导者，极易引发内耗冲突。",
    "storyTitle": "社区合唱团的双指挥磨合",
    "sceneDomain": "团队合作",
    "story": [
      {
        "beat": "cause",
        "scene": "courtyard",
        "text": "社区合唱团同时请来了两位资历深厚的退休音乐教师，排练时老周主张强化声部层次，老赵坚持突出情感张力。",
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
        "scene": "park",
        "text": "两人各执一词在排练厅当场争论，团员们夹在中间无所适从，不知该看谁的手势，排练一度陷入僵局。",
        "visual": {
          "scene": "park",
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
        "text": "团长出面请两位老师坐下茶叙，商定明确分工：老周专职负责前期声乐发声与分声部合练，老赵负责舞台艺术处理与总指挥。",
        "visual": {
          "scene": "study",
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
        "scene": "courtyard",
        "text": "权责边界理顺后，两位老师各展所长、相互补台，合唱团在市级汇演中一举夺得金奖。",
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
    "interpretation": "能力强、主见鲜明的人聚在一起，如果缺乏清晰的职责划分与最终决策机制，锋芒就会变成彼此消耗的利刃。好的组织设计不是消灭强者，而是通过明确分工让不同强者在不同维度各司其职。",
    "limits": "此语揭示的是权责重叠导致的内耗规律，不能将其曲解为团队里不能容纳多位优秀人才。",
    "reflectionQuestion": "你参与过的团队合作中，是否出现过因「谁说了算」界限模糊而导致的低效拉扯？",
    "source": "汉代古谚流变，喻指同一空间内强权或主导权难以并立。",
    "sourceStatus": "classical"
  },
  {
    "id": "jin-shui-lou-tai-xian-de-yue",
    "text": "近水楼台先得月",
    "category": "suyu",
    "tags": [
      "学习与积累",
      "判断与偏见",
      "工作与职业"
    ],
    "plainExplanation": "靠近水边的楼台能最先映照到皎洁月光；比喻由于处所或岗位接近信息源与核心资源，更容易率先获得学习或发展的良机。",
    "storyTitle": "图书管理员的书海精读笔记",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "study",
        "text": "小童在区图书馆负责新书采编上架，每天经手数百本各领域前沿著作，同事们只把这当成枯燥的体力活。",
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
        "scene": "study",
        "text": "小童却珍惜这份身处书海的便利，每天利用午休与下班后一小时，系统研读历史文献学与目录学专著。",
        "visual": {
          "scene": "study",
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
        "scene": "school",
        "text": "遇到前来查阅古籍的学者，她也主动请教版本鉴别方法，三年下来整理了二十多万字的专题文献索引。",
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
        "scene": "study",
        "text": "后来馆里筹建地方古籍数字中心，小童凭借扎实的专业积累顺理成章被选拔为项目学术骨干。",
        "visual": {
          "scene": "study",
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
    "interpretation": "每个人所处的岗位或生活环境，都有其独特的「近水」优势。有人对身边的宝藏视若无睹，有人却能主动敏锐地吸收近处的信息、方法与良师益友，把环境便利转化为自身本领。",
    "limits": "善用位置便利是指正当的学习与合作机会，绝不可异化为利用职权之便以权谋私、侵害公共公平。",
    "reflectionQuestion": "在你目前所处的工作岗位或生活环境中，有哪些触手可及却还没被你充分利用的学习资源？",
    "source": "宋代俞文豹《清夜录》引范仲淹诗句（「近水楼台先得月，向阳花木易为春」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "jiu-xiang-bu-pa-xiang-zi-shen",
    "text": "酒香不怕巷子深",
    "category": "suyu",
    "tags": [
      "做事与执行",
      "诚信与责任",
      "消费与欲望"
    ],
    "plainExplanation": "只要酿出的酒足够醇厚芬芳，哪怕酒坊藏在幽深偏僻的小巷里，也会吸引闻香而来的顾客；比喻产品或手艺品质过硬，自然能赢得口碑。",
    "storyTitle": "深巷老面馒头铺的排队长龙",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "kitchen",
        "text": "陈师傅的馒头铺开在老城区一条不起眼的背街胡同里，没有花哨招牌，也不搞充值打折噱头。",
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
        "text": "他每天凌晨三点起床用传统老面发酵，坚持选用优质麦芯粉手工揉制百遍，蒸出的馒头麦香浓郁、筋道回甘。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
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
        "scene": "street",
        "text": "起初只有附近老住户来买，后来街坊们走亲访友带着尝鲜，好口碑一传十、十传百在全城传开。",
        "visual": {
          "scene": "street",
          "characters": [
            {
              "id": "chen",
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
        "scene": "market",
        "text": "如今每天天刚亮胡同口就排起长队，但也因胡同狭窄曾让外地慕名者找错路口，陈师傅便在巷口补了一块指路木牌。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
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
    "interpretation": "在营销喧嚣的时代，过硬的品质依然是一切商业与个人品牌的根基。没有真材实料，再热闹的流量也只是过眼云烟；把核心产品打磨到极致，口碑本身就会长出脚走遍四方。",
    "limits": "在信息高度过载的现代社会，品质过硬的同时也应辅以适度清晰的指引与传播，不必固步自封拒绝一切正常宣传。",
    "reflectionQuestion": "如果完全去掉外在包装与头衔，你手头正在做的事情最经得起别人反复检验的核心品质是什么？",
    "source": "民间商业谚语，源于传统酿酒业对品质与口碑关系的总结。",
    "sourceStatus": "folk",
    "commonMisreading": "误以为只要埋头做产品就完全不需要任何沟通与展示，导致酒香被彻底淹没。",
    "modernApplication": "以九分精力打磨真材实料的品质底座，再用一分真诚清晰的表达帮好作品找到知音。"
  },
  {
    "id": "yi-zhao-bei-she-yao-shi-nian-pa-jing-sheng",
    "text": "一朝被蛇咬，十年怕井绳",
    "category": "suyu",
    "tags": [
      "情绪与心态",
      "判断与偏见",
      "谨慎与风险"
    ],
    "plainExplanation": "有一次被毒蛇咬伤过，往后十年间看到井边弯曲的草绳都会惊恐以为是蛇；比喻经历一次受挫后产生过度心理阴影，陷入草木皆兵的泛化恐惧。",
    "storyTitle": "经历网购纠纷后的理性甄别",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "phone",
        "text": "梅阿姨年初在某个不正规的小程序买生鲜水果，收到一箱烂果且商家失联，气得她发誓再也不碰任何网络购物。",
        "visual": {
          "scene": "phone",
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
        "scene": "home",
        "text": "此后哪怕家里米面油急用、外面烈日炎炎，她也宁可自己大老远从超市扛回来，一看到手机上的购物图标就心生抗拒。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "text": "女儿周末回家没有生硬批评她，而是手把手教她区分正规旗舰店、查看资质执照以及使用七天无理由退货保障。",
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
        "text": "试着在正规平台买了一次日用品顺利收货后，梅阿姨明白了防备的应当是无良陷阱，而不是把所有便利工具一棍子打死。",
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
    "interpretation": "吃亏受挫后提高警惕是人类的自我保护本能，但如果把特定条件下的一次失败无限放大为对整类事物的全盘否定，就会变成画地为牢。区分「具体风险特征」与「无害的表象」，才能走出阴影。",
    "limits": "克服草木皆兵的过度恐惧，并不等于卸下必要的防骗核实意识，理性甄别才是正解。",
    "reflectionQuestion": "你心里是否有一件因为早年失败过一次、至今看到类似场景就本能逃避的事情？",
    "source": "宋代《景德传灯录》及元代杂剧常见俗语（「一朝被蛇咬，十年怕井绳」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "mian-zi-shi-zi-ji-zheng-de",
    "text": "人靠衣装马靠鞍",
    "category": "suyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "公共生活"
    ],
    "plainExplanation": "骏马配好鞍更显精神，人穿得体整洁的衣着更显风貌；比喻得体的外在仪表与精神面貌，是对他人和场合的基本尊重，也能增添自信。",
    "storyTitle": "社区公益讲座主讲人的白衬衫",
    "sceneDomain": "公共生活",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "退休农艺师老林受邀去市图书馆做家庭园艺公益讲座，起初他觉得讲的是种花技术，穿件平时干活的旧汗衫去就行。",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "lin",
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
        "scene": "courtyard",
        "text": "老伴提醒他这是面对上百位市民的正式讲堂，帮他熨平了一件干净清爽的浅蓝衬衫，又督促他理了发。",
        "visual": {
          "scene": "courtyard",
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
        "scene": "school",
        "text": "讲座当天老林穿戴整齐走上讲台，不仅自己顿觉神清气爽、吐字洪亮，台下听众也因主讲人的郑重态度而格外专注。",
        "visual": {
          "scene": "school",
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
        "text": "讲座结束后听众纷纷围上来请教，老林感慨整洁得体的仪表不是臭美，而是向听众传递的第一份敬意。",
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
    "interpretation": "外在仪表并非虚浮的装饰，它是内心秩序感与对所处场合敬畏心的外化。干净整洁、贴合身份与场合的着装，既能提振自身精气神，也能在人际交往的第一秒建立起良好的信任感。",
    "limits": "注重仪表得体绝不等于盲目攀比昂贵名牌或以貌取人，整洁大方与内在涵养相称才是核心。",
    "reflectionQuestion": "在即将到来的重要会面或公众场合，你的着装与精神面貌是否传达出了对这次会面的重视？",
    "source": "明代冯梦龙《醒世恒言》等通俗文学常见俗语（「人靠衣装，佛靠金装」）。",
    "sourceStatus": "classical"
  },
  {
    "id": "ning-chi-xian-tao-yi-kou-bu-chi-lan-xing-yi-kuang",
    "text": "宁吃鲜桃一口，不吃烂杏一筐",
    "category": "suyu",
    "tags": [
      "得失与取舍",
      "消费与欲望",
      "判断与偏见"
    ],
    "plainExplanation": "宁可只品尝一口新鲜甘甜的桃子，也不要勉强吞下一整筐腐烂变质的杏子；比喻做事、选物或交友应当重质不重量，绝不因贪图数量而降低底线。",
    "storyTitle": "周末旧书市集的精挑细选",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "以前小肖逛特价书市看到「十元三本」的凑单促销就走不动道，成捆抱回家一大堆内容拼凑的劣质书。",
        "visual": {
          "scene": "market",
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
        "scene": "market",
        "text": "结果书架塞得满满当当，那些粗制滥造的书翻两页就看不下去，反而把真正想读的好书挤在角落积灰。",
        "visual": {
          "scene": "market",
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
        "scene": "study",
        "text": "今年再去书展，他立下规矩：无论促销多诱人，只买经过反复试读、真正有学术或文学价值的精品好书。",
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
        "scene": "study",
        "text": "这回他只带回两本厚实的经典注本，用一个月时间逐字研读批注，收获的愉悦与启迪远胜过去一摞凑数闲书。",
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
    "interpretation": "在物质与信息过剩的时代，廉价的「数量感」常常诱惑我们用平庸甚至劣质的东西填满生活空间与时间。敢于拒绝一筐烂杏的诱惑，把有限的精力留给真正值得的精品，是高品质生活的必修课。",
    "limits": "重质轻量是指在阅读、消费与核心目标上坚守品质标准，并非在需要广泛收集素材的初期阶段拒绝必要的样本广度。",
    "reflectionQuestion": "你的书架、衣柜或手机应用里，有哪些当时因为「图便宜凑单」买来却从未真正用过的东西？",
    "source": "北方民间传统俗语，亦常用于戏曲与工艺行当讲求精品意识。",
    "sourceStatus": "folk"
  },
  {
    "id": "zhen-jin-bu-pa-huo-lian",
    "text": "真金不怕火炼",
    "category": "suyu",
    "tags": [
      "诚信与责任",
      "时间与耐心",
      "判断与偏见"
    ],
    "plainExplanation": "纯正的黄金放在烈火里焚烧也不会变黑损耗；比喻品质过硬的器物或品行端正、本领扎实的人，经得起任何严酷考验与时间检验。",
    "storyTitle": "敢于当场切开看内芯的实木家具",
    "sceneDomain": "手工与修理",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "家具市场上鱼龙混杂，不少商家拿贴皮密度板冒充全实木黑胡桃高价售卖，导致顾客进店都带着深深的怀疑眼神。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "chen",
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
        "text": "陈师父的实木工坊为了打消顾虑，直接在展厅中央摆了一把手工框锯和任意抽取的桌腿半成品，立牌写道：「真金不怕火炼，假一赔十，欢迎当场锯开看内芯。」",
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
        "scene": "workshop",
        "text": "一位挑剔的建筑师顾客当真挑了一根桌腿锯开，断面从表及里全是纹理连贯、散发天然木香的整料北美黑胡桃，连一滴胶水拼接缝都没有。",
        "visual": {
          "scene": "workshop",
          "characters": [
            {
              "id": "chen",
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
        "scene": "market",
        "text": "建筑师当场签下整栋民宿的家具大单，陈师父笑道：只要自己肚子里是百分百真材实料，别人的质疑反而是帮你扬名的试金石。",
        "visual": {
          "scene": "market",
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
    "interpretation": "镀金的铜铁最怕见火，因为火一烧金皮就会剥落露出黑胎；而纯金越是在烈火中煅烧，越能洗去浮尘显出耀眼光泽。面对外界的严格审查、同行的比较或是逆境的冲击，不必慌张防御，拿出真本事去迎受检验。",
    "limits": "真金不怕火炼强调自身品质过硬，但在面对恶意造谣诽谤时，也应主动亮出证据维护声誉。",
    "reflectionQuestion": "在你目前负责的核心业务或个人作品中，哪一部分是你最有底气让人「随时随地锯开检查」的真金？",
    "source": "民间传统熟语，明清小说及近代文献广泛引用。",
    "sourceStatus": "folk",
    "relatedIds": [
      "jiu-xiang-bu-pa-xiang-zi-shen",
      "lu-yao-zhi-ma-li-ri-jiu-jian-ren-xin"
    ]
  },
  {
    "id": "yi-ke-lao-shu-shi-huai-yi-guo-tang",
    "text": "一颗老鼠屎，坏了一锅汤",
    "category": "suyu",
    "tags": [
      "谨慎与风险",
      "团队合作",
      "诚信与责任"
    ],
    "plainExplanation": "哪怕熬得再鲜美的一整锅好汤，只要掉进一颗小小的老鼠屎就会整锅作废无法下咽；比喻极个别人的恶劣行径或极微小的致命污点，足以毁掉整个团队的声誉。",
    "storyTitle": "农特产展销团清退掺假摊位的铁腕",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "县里二十家优质果农联合组团去省城办「高山生态苹果展销周」，前三天因为果子脆甜无农残，市民排队抢购，口碑极佳。",
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
        "text": "第四天早晨，孙团长巡查时发现十九号摊位的老赵为了多赚快钱，竟偷偷从批发市场拉来二十箱打蜡催熟的劣质外地次果混在筐底卖。",
        "visual": {
          "scene": "market",
          "characters": [
            {
              "id": "sun",
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
        "scene": "office",
        "text": "老赵求情说：「就二十箱小事，别伤了同乡和气！」孙团长铁青着脸说：「一颗老鼠屎能坏掉咱们全县二十家果农熬了三年的这锅好汤！今天不立刻清退你，明天省城百姓就会说咱们全县的苹果都是骗子！」",
        "visual": {
          "scene": "office",
          "characters": [
            {
              "id": "sun",
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
        "scene": "market",
        "text": "孙团长当众封存销毁那二十箱次果、将老赵清退出团并向市民张榜公示；铁腕护牌之下，展销团信誉不降反升，签下了三年直供大单。",
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
    "interpretation": "集体声誉具有极强的「连带脆弱性」：九十九个人的辛勤汗水筑起的高楼，往往会被一个害群之马的败德行径瞬间拉入泥潭。在关乎安全、诚信与集体招牌的底线问题上，绝不能搞「家丑不可外扬」的姑息包庇，唯有及时割除毒瘤才能保住整锅好汤。",
    "limits": "此语针对的是破坏底线原则的恶劣行为；对于团队成员在探索中出现的无心技术失误，则应宽容帮助而非一脚踢开。",
    "reflectionQuestion": "在你所在的团队或个人的生活习惯中，是否存在某个看似占比很小、却随时可能毁掉整体口碑的「致命破绽」？",
    "source": "民间高频俗语，借饮食卫生常识喻指局部害群之马对全局的破坏。",
    "sourceStatus": "folk",
    "relatedIds": [
      "qian-li-zhi-di-kui-yu-yi-xue",
      "he-xi-ni"
    ]
  },
  {
    "id": "zai-jia-kao-fu-mu-chu-men-kao-peng-you",
    "text": "在家靠父母，出门靠朋友",
    "category": "suyu",
    "tags": [
      "人际关系",
      "朋友交往",
      "合作与分工"
    ],
    "plainExplanation": "年少在家里生活时主要依靠父母的照拂，长大走出家门闯荡社会时，则需要依靠志同道合的朋友彼此帮衬扶持。",
    "storyTitle": "异乡创业青年生病住院时的轮流陪护表",
    "sceneDomain": "旅途",
    "story": [
      {
        "beat": "cause",
        "scene": "home",
        "text": "小肖独自在离家两千公里的南方城市打拼，平时为人热心厚道，哪位同事朋友搬家、修电脑或临时周转他都二话不说搭把手。",
        "visual": {
          "scene": "home",
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
        "scene": "office",
        "text": "那年秋天小肖突发急性肺炎高烧住院，为了不让老家年迈有高血压的父母担心，他没敢往家里打电话，一个人躺在输液病床上倍感凄凉。",
        "visual": {
          "scene": "office",
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
        "scene": "courtyard",
        "text": "没想到平时一起打拼的四位朋友得知消息后，十分钟内就在群里排好了一张「晚间轮流陪护与送粥值班表」：阿杰熬小米粥、梅姐帮跑医保报销、老陈替他顶班处理紧急客户。",
        "visual": {
          "scene": "courtyard",
          "characters": [
            {
              "id": "xiao",
              "pose": "discovering"
            }
          ],
          "props": [
            "calendar"
          ],
          "focusProp": "calendar",
          "narrative": {
            "type": "arrow"
          }
        }
      },
      {
        "beat": "point",
        "scene": "home",
        "text": "住院一周天天有热饭和笑脸相伴，痊愈出院那天小肖热泪盈眶：出门在外，平时用真心换来的朋友就是异乡的手足亲人。",
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
    "interpretation": "没有任何人是一座孤岛。出门在外遇到风雨时，能够拉你一把的往往是身边的朋友。然而「靠朋友」的前提，是你自己平时先做一个「值得被朋友依靠」的人——平时多栽花少栽刺，患难时才会有树荫遮头。",
    "limits": "靠朋友是指患难相恤、正当互助，绝不意味着自己放弃独立自强、变成处处伸手讨便宜的寄生虫。",
    "reflectionQuestion": "在远离家乡或独立面对生活难题的时候，你身边的朋友圈是你用平时的真诚一点一滴经营出来的温暖港湾吗？",
    "source": "明清白话小说及民间闯荡格言。",
    "sourceStatus": "classical",
    "relatedIds": [
      "zai-jia-qian-ri-hao-chu-men-yi-shi-nan",
      "zhong-gua-de-gua-zhong-dou-de-dou"
    ]
  },
  {
    "id": "hao-ma-bu-chi-hui-tou-cao",
    "text": "好马不吃回头草",
    "category": "suyu",
    "tags": [
      "得失与取舍",
      "判断与偏见",
      "情绪与心态"
    ],
    "plainExplanation": "良骥奔出马厩向广阔草原驰骋时，绝不会恋恋不舍地掉头去啃食身后已经踩踏过的残草；比喻有志气的人在做出深思熟虑的决断后，坚定往前走而不反复摇摆懊悔。",
    "storyTitle": "告别消耗型旧岗位后的坚定深耕",
    "sceneDomain": "职场",
    "story": [
      {
        "beat": "cause",
        "scene": "office",
        "text": "小童曾在一间天天搞办公室派系内斗、却从不钻研业务的贸易公司待了两年，深感青春被白白消耗，深思熟虑后毅然辞职，转行从零学习工业产品造型设计。",
        "visual": {
          "scene": "office",
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
        "scene": "study",
        "text": "刚转行的前三个月收入减半、每天画图练软件到深夜，十分辛苦；这时原公司老板打来电话，开出比以前高两成的工资诱她回去继续干那份清闲内耗的行政活。",
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
        "scene": "workshop",
        "text": "站在十字路口，小童想起「好马不吃回头草」：当初离开就是因为看透了那片泥潭没有未来，若因为眼前的三分的苦就贪图安逸退回去，两年后只会陷入更深的绝望。",
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
        "scene": "workshop",
        "text": "她礼貌而坚定地挂断电话，咬牙度过半年磨合期，两年后成长为独当一面的产品设计师，庆幸自己当年没有回头去啃那把枯草。",
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
    "interpretation": "为什么人容易在转型期「吃回头草」？因为未知的前路有阵痛，而熟悉的旧坑虽然糟糕却很有「安全感」。但凡是当初让你痛下决心离开的消耗型环境或错误关系，回去之后原有的问题99%依然存在。向前看、往前跑，前方自有更丰美的水草。",
    "limits": "不吃回头草是指不因畏难而退回早已验证错误的泥潭；若当初离开纯属一时冲动误会、且原平台确有良性改观，理性复盘则另当别论。",
    "reflectionQuestion": "对于你已经经过深思熟虑翻篇过去的某段旧经历或旧选择，你做到彻底放下、不再频频回头内耗了吗？",
    "source": "宋代释道原《景德传灯录》及元明俗语（「好马不吃回头草」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "dang-duan-bu-duan-fan-shou-qi-luan"
    ]
  },
  {
    "id": "yi-shen-ze-ming-ming-ren-bu-shuo-an-hua",
    "text": "明人不说暗话",
    "category": "suyu",
    "tags": [
      "沟通与表达",
      "诚信与责任",
      "人际关系"
    ],
    "plainExplanation": "心地光明磊落、处事坦荡的人，说话直来直去、把条件和实情摆在明面上，不搞拐弯抹角的试探或暗语隐瞒。",
    "storyTitle": "木材采购谈判桌上的底牌亮明",
    "sceneDomain": "商店与市场",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "老姜去木材市场采购一批缅甸花梨木，前两家木材商说话总是吞吞吐吐、云山雾罩，一会儿暗示有内部特种渠道，一会儿拿模糊的产地代号绕弯子。",
        "visual": {
          "scene": "market",
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
        "scene": "office",
        "text": "到了第三家孙老板店里，孙老板一落座就爽快道：「姜师父，明人不说暗话！我这批料九成是正宗大果紫檀芯材，但有十分之一边材带极小活节，我直接给你标了红线、按七折算，绝不混在好料里蒙你。」",
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
        "text": "老姜去库房一看，每根带微瑕的木料果然都用红粉笔画得清清楚楚，烘干含水率检测单也一并摊在桌面。",
        "visual": {
          "scene": "workshop",
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
        "scene": "office",
        "text": "老姜当场拍板签下全年供货合同：跟不说暗话的实在人打交道，省去了九成猜忌防备的心力，最踏实可靠。",
        "visual": {
          "scene": "office",
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
    "interpretation": "在商务谈判与人际协作中，故弄玄虚的「暗话」看似城府深沉，实则最消耗双方的信任成本。把真实底线、合理诉求乃至客观短板大大方方摆在台面上，既是自信的表现，也是高效成交的催化剂。",
    "limits": "明人不说暗话是指在核心事实与条件上坦率透明，但在日常寒暄或涉及他人痛处时仍需注意言辞委婉得体。",
    "reflectionQuestion": "在推进一项合作洽谈时，你是喜欢先绕半小时弯子互相试探，还是喜欢开门见山把核心诉求与底线说清楚？",
    "source": "元代杂剧及明代施耐庵《水浒传》高频俗语（「明人不做暗事，明人不说暗话」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "kai-cheng-bu-gong",
      "dang-mian-gu-dui-mian-luo"
    ]
  },
  {
    "id": "you-zhao-yi-ri-yi-hui-sheng-er-hui-shu",
    "text": "一回生，二回熟",
    "category": "suyu",
    "tags": [
      "学习与积累",
      "人际关系",
      "情绪与心态"
    ],
    "plainExplanation": "第一次接触某件新事物或新朋友时难免感到生疏拘谨，但只要勇敢迈出第一步，到第二次、第三次时自然就会变得熟悉顺畅起来。",
    "storyTitle": "老年智能手机课堂上的第一声语音",
    "sceneDomain": "社区",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "七十岁的老林刚拿到儿女买的新智能手机时，看着满屏幕图标手足无措，生怕按错键扣费，把手机锁在抽屉里不敢碰。",
        "visual": {
          "scene": "school",
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
        "scene": "home",
        "text": "社区大学生志愿者小童温和地鼓励他：「林爷爷，谁都不是天生就会用的，一回生、二回熟，咱们今天啥也不多学，就练按住这颗绿按钮给孙子发一句语音。」",
        "visual": {
          "scene": "home",
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
        "scene": "courtyard",
        "text": "老林颤巍巍地按住屏幕说了第一句「孙子放学没」，虽然第一次松手太快没发出去（一回生），但紧接着试第二次、第三次时，就稳稳听到了孙子欢快的回音（二回熟）。",
        "visual": {
          "scene": "courtyard",
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
        "text": "消除了最初对未知技术的恐惧后，老林越用越顺手，半个月后已经能熟练用手机挂号、查公交和给老伴拍花草视频了。",
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
    "interpretation": "面对全新的工具、陌生的环境或第一次上台演讲，那种手心出汗的「生疏感」是人类大脑建立新神经连接的正常反应。不要因为第一次的笨拙就给自己贴上「我不行」的标签，熬过「第一回」的破冰，熟悉感便会如约而至。",
    "limits": "在涉及高危机械操作或陌生水域时，不能仅凭「二回熟」的经验放松安全规程，仍须严格按步骤核查。",
    "reflectionQuestion": "你最近有没有哪件因为「以前没弄过、怕第一回出丑」而一直推脱没去尝试的新工具或新场合？",
    "source": "民间传统熟语，鼓励破除初见生疏感。",
    "sourceStatus": "folk",
    "relatedIds": [
      "shu-neng-sheng-qiao",
      "yi-shen-ze-ming-shi-shang-wu-nan-shi"
    ]
  },
  {
    "id": "yi-shen-ze-ming-bu-jiao-bu-cheng-jiao",
    "text": "不打不相识",
    "category": "suyu",
    "tags": [
      "人际关系",
      "沟通与表达",
      "朋友交往"
    ],
    "plainExplanation": "经过一次交锋、争辩或误会碰撞之后，双方反而看清了彼此的真性情与专业底色，从而消除了隔阂、结为知己。",
    "storyTitle": "学术研讨会上争出来的十年搭档",
    "sceneDomain": "朋友交往",
    "story": [
      {
        "beat": "cause",
        "scene": "school",
        "text": "五年前的一场地方建筑保护研讨会上，老周与外地赶来的结构专家老陈就一座古塔的纠偏方案激烈交锋，两人在台上引经据典争得面红耳赤，台下听众都以为他俩结了梁子。",
        "visual": {
          "scene": "school",
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
        "text": "散会后老周仔细验算老陈提出的地下水位应力公式，发现对方虽然脾气暴，但治学严谨得令人起敬；老陈也在酒店连夜重读了老周的木构论文，深服其田野功底。",
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
        "text": "第二天早餐时两人在餐厅迎面碰上，相视哈哈大笑，老陈主动端着豆浆坐过来：「不打不相识！昨天你指出的那处土层参数，真是帮我堵住了大漏洞！」",
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
        "text": "从此这一文一武两位学者成了莫逆之交，联手主持完成了十余座国家级古建筑的修缮工程。",
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
    "interpretation": "在君子与专业人士之间，就事论事的正面交锋从来不是结仇的导火索，反而是最高效的「验金石」。能在激烈争辩中守住学术真诚、事后又能坦荡佩服对方长处的人，往往比平时只会客套寒暄的人更值得深交。",
    "limits": "「不打不相识」中的交锋是指围绕事实与道理的坦诚切磋，绝不是提倡情绪化的恶意人身攻击或肢体冲突。",
    "reflectionQuestion": "你身边有没有哪位很铁的朋友或搭档，最初其实是跟你因为一次意见分歧或业务碰撞而认识的？",
    "source": "明代施耐庵《水浒传》第三十八回及《三宝太监西洋记》常见熟语。",
    "sourceStatus": "classical",
    "relatedIds": [
      "he-er-bu-tong"
    ]
  },
  {
    "id": "you-zhao-yi-ri-zhong-yan-shun-er",
    "text": "良言一句三冬暖，恶语伤人六月寒",
    "category": "suyu",
    "tags": [
      "沟通与表达",
      "人际关系",
      "家庭与生活"
    ],
    "plainExplanation": "一句充满体谅与善意的暖心话，能让身处寒冬腊月的人感到融融暖意；而一句刻薄恶毒的伤人话，哪怕在盛夏六月也会让人从心底发冷。",
    "storyTitle": "收银台前对新手店员的那句「别急慢慢来」",
    "sceneDomain": "家庭",
    "story": [
      {
        "beat": "cause",
        "scene": "market",
        "text": "周末超市收银台排着长队，刚上岗第一天的年轻收银员小敏因为条码扫不出急得满头大汗、手指发抖。",
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
        "text": "排在前面的一个男顾客不耐烦地拍着台面挖苦道：「这么笨还出来干什么活？耽误大家工夫！」恶语一出，小敏眼泪在眼眶里直打转，手更乱了。",
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
        "scene": "home",
        "text": "排在后面的梅姐走上前，微笑着轻声对小敏说：「姑娘别急，谁刚上手都有个过程，我这几样不赶时间，你深呼吸慢慢弄。」",
        "visual": {
          "scene": "home",
          "characters": [
            {
              "id": "mei",
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
        "scene": "market",
        "text": "一句温厚良言像春风一样稳住了小敏的心神，她擦干汗三十秒便顺利办完结账，每次看到梅姐来买菜眼里都闪着感激的光。",
        "visual": {
          "scene": "market",
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
    "interpretation": "舌头没有骨头，却既能成为救人的渡船，也能成为伤人的利刃。很多时候我们随口甩出的一句尖酸刻薄话，自己转头就忘了，却可能在别人心里留下一道整个夏天都暖不过来的冻伤。在开口前给话语加一点温度，是最低成本的行善。",
    "limits": "倡导语言温暖善意，不等于在需要严正制止违法侵害时也一味软弱讨好。",
    "reflectionQuestion": "今天从早到晚你对家人、同事或陌生服务者说过的话里，哪一句是能给人带来「三冬暖」的良言？",
    "source": "明代《增广贤文》（「良言一句三冬暖，恶语伤人六月寒」）。",
    "sourceStatus": "classical",
    "relatedIds": [
      "tui-ji-ji-ren",
      "po-leng-shui"
    ]
  }
];
