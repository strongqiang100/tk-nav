/* TikTok 知识导航 — 数据层
 * 结构：categories[] → items[]
 * item: { n: 名称, d: 一句话说明, u: 链接, t: 标签[], tone: 配色, ic: 图标字 }
 */

const DATA = [
  {
    id: "start",
    name: "起步与配置",
    en: "Get Started",
    desc: "从零注册一个能用的账号：环境、设备、账号类型、官方入口。",
    items: [
      {
        n: "TikTok 官方网站",
        d: "主站入口，注册、登录、浏览内容都在这里。跨境运营第一步先把账号跑通。",
        u: "https://www.tiktok.com",
        t: ["官方", "注册"],
        tone: "pink",
        ic: "TT"
      },
      {
        n: "TikTok 帮助中心",
        d: "官方问题库。账号被封、无法登录、限流申诉，先在这里查关键词。",
        u: "https://support.tiktok.com",
        t: ["官方", "客服"],
        tone: "blue",
        ic: "?"
      },
      {
        n: "TikTok 商业中心",
        d: "Business Center 入口，管理企业账号、广告账号和团队权限。",
        u: "https://business.tiktok.com",
        t: ["官方", "企业"],
        tone: "violet",
        ic: "BC"
      },
      {
        n: "创作者工具与权益",
        d: "创作者基金、直播、打赏等变现权益的官方说明与开通条件。",
        u: "https://www.tiktok.com/creators/creator-benefits",
        t: ["官方", "变现"],
        tone: "amber",
        ic: "CB"
      },
      {
        n: "TikTok 创作者学院",
        d: "官方免费课程。短视频结构、剪辑节奏、账号运营的底层方法论。",
        u: "https://www.tiktok.com/creator-academy",
        t: ["官方", "课程"],
        tone: "cyan",
        ic: "CA"
      },
      {
        n: "TikTok Newsroom",
        d: "官方新闻室。产品更新、政策变化、算法说明的第一手来源。",
        u: "https://newsroom.tiktok.com",
        t: ["官方", "情报"],
        tone: "indigo",
        ic: "NR"
      },
      {
        n: "TikTok 开发者平台",
        d: "开放 API 与登录、分享、数据接口。做工具或自建系统才用得上。",
        u: "https://developers.tiktok.com",
        t: ["官方", "API"],
        tone: "green",
        ic: "DV"
      },
      {
        n: "账号安全设置",
        d: "两步验证、登录设备管理。多账号运营的必备动作，别省。",
        u: "https://support.tiktok.com/en/using-tiktok/your-profile",
        t: ["官方", "安全"],
        tone: "blue",
        ic: "2F"
      }
    ]
  },
  {
    id: "algorithm",
    name: "算法与流量",
    en: "Algorithm & Reach",
    desc: "搞不清推荐逻辑，就只能靠运气。这里放判断流量来源的依据。",
    items: [
      {
        n: "官方推荐机制说明",
        d: "TikTok 自己解释 For You 推荐怎么工作：完播、互动、相似人群。必读。",
        u: "https://newsroom.tiktok.com/en-us/how-tiktok-recommends-videos-for-you",
        t: ["官方", "算法"],
        tone: "pink",
        ic: "FY"
      },
      {
        n: "Creative Center 创意中心",
        d: "官方免费数据工具。看热门视频、爆款广告、受众画像，不用花钱。",
        u: "https://ads.tiktok.com/business/creativecenter",
        t: ["官方", "免费", "数据"],
        tone: "cyan",
        ic: "CC"
      },
      {
        n: "热门话题标签",
        d: "按国家和行业筛话题热度，判断一个标签值不值得跟。",
        u: "https://ads.tiktok.com/business/creativecenter/hashtag",
        t: ["官方", "话题"],
        tone: "violet",
        ic: "#"
      },
      {
        n: "热门音乐与声音",
        d: "看某个国家当下在用什么 BGM。选对声音，完播率能差一个档。",
        u: "https://ads.tiktok.com/business/creativecenter/music",
        t: ["官方", "音乐"],
        tone: "amber",
        ic: "♪"
      },
      {
        n: "爆款广告榜 Top Ads",
        d: "同行在跑什么素材、跑多久、什么结构。抄结构不抄内容。",
        u: "https://ads.tiktok.com/business/creativecenter/topads",
        t: ["官方", "投放"],
        tone: "green",
        ic: "TA"
      },
      {
        n: "受众洞察 Audience Insights",
        d: "查某个国家/品类的用户年龄、兴趣、消费力，定内容方向前先看。",
        u: "https://ads.tiktok.com/business/creativecenter/audience",
        t: ["官方", "选品"],
        tone: "indigo",
        ic: "AI"
      },
      {
        n: "Google Trends",
        d: "看关键词的长期趋势和季节性。判断一个品是风口还是退潮。",
        u: "https://trends.google.com",
        t: ["免费", "趋势"],
        tone: "blue",
        ic: "GT"
      }
    ]
  },
  {
    id: "create",
    name: "内容创作",
    en: "Content & Production",
    desc: "从选题到成片的全链路工具。能一个人跑完的，别组团队。",
    items: [
      {
        n: "CapCut 剪映国际版",
        d: "TikTok 官方生态剪辑工具。模板、自动字幕、直接发布，新手最快出片。",
        u: "https://www.capcut.com",
        t: ["工具", "剪辑", "免费"],
        tone: "pink",
        ic: "CC"
      },
      {
        n: "Canva 可画",
        d: "封面、贴片、信息图。做统一视觉风格，别让封面看起来像随手截的。",
        u: "https://www.canva.com",
        t: ["工具", "设计"],
        tone: "cyan",
        ic: "CV"
      },
      {
        n: "Kapwing",
        d: "浏览器里剪视频，自动去水印加字幕。适合团队协作改片。",
        u: "https://www.kapwing.com",
        t: ["工具", "剪辑"],
        tone: "violet",
        ic: "KP"
      },
      {
        n: "Pexels 免费素材",
        d: "可商用视频和图片。做空镜、转场、背景，不用怕版权。",
        u: "https://www.pexels.com",
        t: ["素材", "免费", "可商用"],
        tone: "green",
        ic: "PX"
      },
      {
        n: "Unsplash",
        d: "高质量免费图片。做封面和图文内容的首选。",
        u: "https://unsplash.com",
        t: ["素材", "免费"],
        tone: "amber",
        ic: "US"
      },
      {
        n: "Epidemic Sound",
        d: "付费版权音乐库。做商业内容走正规授权，别用来源不明的 BGM。",
        u: "https://www.epidemicsound.com",
        t: ["音乐", "版权"],
        tone: "indigo",
        ic: "ES"
      },
      {
        n: "Artlist",
        d: "音乐 + 音效 + 视频素材打包订阅，性价比比单买高。",
        u: "https://artlist.io",
        t: ["音乐", "版权"],
        tone: "blue",
        ic: "AL"
      },
      {
        n: "Opus Clip",
        d: "长视频自动切成短视频，自动挑高光片段。做矩阵账号的效率工具。",
        u: "https://www.opus.pro",
        t: ["AI", "剪辑"],
        tone: "pink",
        ic: "OC"
      },
      {
        n: "Submagic",
        d: "自动字幕 + 表情贴纸 + 关键词高亮。字幕做得好，留存明显不一样。",
        u: "https://www.submagic.co",
        t: ["AI", "字幕"],
        tone: "cyan",
        ic: "SM"
      },
      {
        n: "HeyGen",
        d: "AI 数字人口播。不会出镜、要批量做多语种版本时最实用。",
        u: "https://www.heygen.com",
        t: ["AI", "口播"],
        tone: "violet",
        ic: "HG"
      },
      {
        n: "ElevenLabs",
        d: "AI 配音，多语种接近真人。做海外本地化配音比找真人便宜太多。",
        u: "https://elevenlabs.io",
        t: ["AI", "配音"],
        tone: "green",
        ic: "EL"
      },
      {
        n: "Descript",
        d: "改文字就等于改视频。口播剪辑的神器，删废话极快。",
        u: "https://www.descript.com",
        t: ["工具", "剪辑"],
        tone: "amber",
        ic: "DS"
      }
    ]
  },
  {
    id: "shop",
    name: "TikTok Shop 电商",
    en: "Commerce",
    desc: "开店、上架、达人带货。这是跨境最直接的变现路径。",
    items: [
      {
        n: "TikTok Shop 美国卖家中心",
        d: "美国站后台，开店、上架、订单、结算全在这里。",
        u: "https://seller-us.tiktok.com",
        t: ["官方", "开店"],
        tone: "pink",
        ic: "US"
      },
      {
        n: "TikTok Shop 英国卖家中心",
        d: "英国站后台。跨境卖家最早开放的站点之一。",
        u: "https://seller-uk.tiktok.com",
        t: ["官方", "开店"],
        tone: "blue",
        ic: "UK"
      },
      {
        n: "TikTok Shop 学习中心",
        d: "官方卖家课程 + 政策文档。规则不清楚就先来这查，别靠群里传闻。",
        u: "https://seller-us.tiktok.com/university",
        t: ["官方", "规则"],
        tone: "cyan",
        ic: "UN"
      },
      {
        n: "TikTok Shop 达人联盟",
        d: "Affiliate 后台。设佣金、寄样、批量邀约达人带货的核心入口。",
        u: "https://seller-us.tiktok.com/affiliate",
        t: ["官方", "达人"],
        tone: "violet",
        ic: "AF"
      },
      {
        n: "TikTok Shop 合作伙伴中心",
        d: "服务商、ERP、物流商的官方对接入口。找工具先看这里有没有认证。",
        u: "https://partner.tiktokshop.com",
        t: ["官方", "服务商"],
        tone: "green",
        ic: "PT"
      },
      {
        n: "TikTok Shop 卖家博客",
        d: "官方运营案例和活动。看别人怎么起量，比看教程有用。",
        u: "https://seller-us.tiktok.com/university/essay",
        t: ["官方", "案例"],
        tone: "amber",
        ic: "BG"
      },
      {
        n: "店匠 SHOPLINE",
        d: "跨境独立站建站工具，中文后台，跟 TikTok 广告打通得比较顺。",
        u: "https://www.shopline.com",
        t: ["建站", "独立站"],
        tone: "indigo",
        ic: "SL"
      },
      {
        n: "Shopify",
        d: "全球最大的独立站系统。生态最全，插件和模板最多。",
        u: "https://www.shopify.com",
        t: ["建站", "独立站"],
        tone: "green",
        ic: "SH"
      },
      {
        n: "店小秘 ERP",
        d: "多平台订单和库存管理。SKU 一多，手工处理必然出错。",
        u: "https://www.dianxiaomi.com",
        t: ["ERP", "工具"],
        tone: "blue",
        ic: "DX"
      },
      {
        n: "马帮 ERP",
        d: "跨境 ERP，铺货和精细化两种模式都支持，适合多店铺运营。",
        u: "https://www.mabangerp.com",
        t: ["ERP", "工具"],
        tone: "amber",
        ic: "MB"
      }
    ]
  },
  {
    id: "creator",
    name: "达人营销",
    en: "Creator Marketing",
    desc: "找达人、谈合作、管寄样。TikTok 上达人带货的效率高于纯投流。",
    items: [
      {
        n: "TikTok Creator Marketplace",
        d: "官方达人平台。按品类、粉丝量、地区筛达人，看真实带货数据。",
        u: "https://creatormarketplace.tiktok.com",
        t: ["官方", "达人"],
        tone: "pink",
        ic: "CM"
      },
      {
        n: "NoxInfluencer",
        d: "第三方达人数据。查粉丝真实性、历史合作、报价参考。",
        u: "https://cn.noxinfluencer.com",
        t: ["数据", "达人"],
        tone: "violet",
        ic: "NX"
      },
      {
        n: "TikTok 官方达人合作指南",
        d: "怎么设佣金、怎么寄样、怎么定合作条款，官方口径最稳。",
        u: "https://seller-us.tiktok.com/university",
        t: ["官方", "指南"],
        tone: "cyan",
        ic: "GD"
      },
      {
        n: "达人合作邮件模板",
        d: "邀约话术的结构：一句钩子、一段价值、一个明确动作。别写长信。",
        u: "https://www.shopify.com/blog/influencer-outreach-email",
        t: ["方法", "模板"],
        tone: "amber",
        ic: "EM"
      }
    ]
  },
  {
    id: "ads",
    name: "广告投放",
    en: "Paid Ads",
    desc: "把自然流量的经验放大。投流不是救命稻草，是放大器。",
    items: [
      {
        n: "TikTok Ads Manager",
        d: "广告后台。建计划、设受众、放预算、看转化，全在这。",
        u: "https://ads.tiktok.com",
        t: ["官方", "投放"],
        tone: "pink",
        ic: "AM"
      },
      {
        n: "TikTok 广告帮助中心",
        d: "Pixel 安装、事件回传、账户审核问题的官方文档。",
        u: "https://ads.tiktok.com/help",
        t: ["官方", "文档"],
        tone: "blue",
        ic: "HP"
      },
      {
        n: "Pixel 与转化事件",
        d: "埋点做不对，投放就是瞎跑。先把这个配好再花钱。",
        u: "https://ads.tiktok.com/help/article/standard-events-parameters",
        t: ["官方", "追踪"],
        tone: "violet",
        ic: "PX"
      },
      {
        n: "TikTok 广告政策",
        d: "什么能投什么不能投。素材被拒审，九成是踩了这里的条款。",
        u: "https://ads.tiktok.com/help/article/tiktok-ads-policy",
        t: ["官方", "合规"],
        tone: "amber",
        ic: "PL"
      },
      {
        n: "TikTok Business 博客",
        d: "官方投放案例和行业报告。找对标打法比看教程快。",
        u: "https://www.tiktok.com/business/en/blog",
        t: ["官方", "案例"],
        tone: "green",
        ic: "BL"
      }
    ]
  },
  {
    id: "data",
    name: "数据分析",
    en: "Analytics",
    desc: "选品和复盘都得看数。第三方工具是付费买时间。",
    items: [
      {
        n: "FastMoss",
        d: "TikTok 电商数据头部工具。查爆品、查小店、查达人销量，选品必备。",
        u: "https://www.fastmoss.com",
        t: ["付费", "选品"],
        tone: "pink",
        ic: "FM"
      },
      {
        n: "Kalodata",
        d: "美区数据强，榜单做得清楚。看一个品最近七天的走势很好用。",
        u: "https://www.kalodata.com",
        t: ["付费", "选品"],
        tone: "cyan",
        ic: "KD"
      },
      {
        n: "EchoTik",
        d: "性价比路线，中文界面，适合刚起步先摸清楚品类格局。",
        u: "https://echotik.live",
        t: ["付费", "选品"],
        tone: "violet",
        ic: "ET"
      },
      {
        n: "Social Blade",
        d: "免费查账号粉丝增长曲线。判断一个号是真涨还是买量。",
        u: "https://socialblade.com",
        t: ["免费", "账号"],
        tone: "green",
        ic: "SB"
      },
      {
        n: "Exolyt",
        d: "看账号互动率、粉丝画像、内容标签分布。找对标号很好用。",
        u: "https://exolyt.com",
        t: ["工具", "账号"],
        tone: "amber",
        ic: "EX"
      },
      {
        n: "TikTok 创作者数据面板",
        d: "官方后台数据。完播率、观众来源、粉丝增长，最准的一手数据。",
        u: "https://www.tiktok.com/analytics",
        t: ["官方", "免费"],
        tone: "blue",
        ic: "AN"
      }
    ]
  },
  {
    id: "ops",
    name: "物流与收款",
    en: "Logistics & Payment",
    desc: "钱能不能顺利收回来，比卖不卖得动更早决定生死。",
    items: [
      {
        n: "4PX 递四方",
        d: "跨境物流老牌服务商，小包和海外仓都有，TikTok 卖家常用。",
        u: "https://www.4px.com",
        t: ["物流", "海外仓"],
        tone: "blue",
        ic: "4P"
      },
      {
        n: "云途物流",
        d: "专线小包，价格和时效比较均衡，适合轻小件。",
        u: "https://www.yunexpress.com",
        t: ["物流", "小包"],
        tone: "cyan",
        ic: "YT"
      },
      {
        n: "燕文物流",
        d: "老牌跨境小包，线路覆盖广，旺季稳定性还行。",
        u: "https://www.yw56.com.cn",
        t: ["物流", "小包"],
        tone: "green",
        ic: "YW"
      },
      {
        n: "菜鸟跨境",
        d: "阿里系跨境物流，仓储和干线资源强，适合有一定量的卖家。",
        u: "https://www.cainiao.com",
        t: ["物流", "仓储"],
        tone: "amber",
        ic: "CN"
      },
      {
        n: "PingPong",
        d: "跨境收款，费率和到账速度是主要比较项，支持多平台归集。",
        u: "https://www.pingpongx.com",
        t: ["收款", "金融"],
        tone: "violet",
        ic: "PP"
      },
      {
        n: "Payoneer 派安盈",
        d: "老牌跨境收款，覆盖平台多，海外客户接受度高。",
        u: "https://www.payoneer.com",
        t: ["收款", "金融"],
        tone: "green",
        ic: "PY"
      },
      {
        n: "万里汇 WorldFirst",
        d: "蚂蚁旗下，费率透明，提现到国内账户比较顺。",
        u: "https://www.worldfirst.com.cn",
        t: ["收款", "金融"],
        tone: "blue",
        ic: "WF"
      },
      {
        n: "Airwallex 空中云汇",
        d: "多币种账户 + 收单。做独立站收单和本地化支付比较好用。",
        u: "https://www.airwallex.com",
        t: ["收款", "独立站"],
        tone: "indigo",
        ic: "AW"
      }
    ]
  },
  {
    id: "learn",
    name: "学习与情报",
    en: "Learning & Intel",
    desc: "行业变化快，靠信息差赚钱的前提是信息不断线。",
    items: [
      {
        n: "雨果跨境",
        d: "中文跨境媒体，政策变动和平台规则解读更新快。",
        u: "https://www.cifnews.com",
        t: ["中文", "资讯"],
        tone: "pink",
        ic: "YG"
      },
      {
        n: "白鲸出海",
        d: "关注中国出海企业的深度报道，看趋势和资本动向。",
        u: "https://www.baijingapp.com",
        t: ["中文", "深度"],
        tone: "cyan",
        ic: "BJ"
      },
      {
        n: "亿邦动力",
        d: "电商行业媒体，平台动作和商业模式分析比较多。",
        u: "https://www.ebrun.com",
        t: ["中文", "资讯"],
        tone: "violet",
        ic: "EB"
      },
      {
        n: "36氪出海",
        d: "出海赛道创投视角，判断一个方向有没有人在重仓。",
        u: "https://letschuhai.com",
        t: ["中文", "创投"],
        tone: "amber",
        ic: "36"
      },
      {
        n: "Shopify 博客",
        d: "英文电商方法论，选品、转化、留存讲得系统，可直接套用。",
        u: "https://www.shopify.com/blog",
        t: ["英文", "方法"],
        tone: "green",
        ic: "SB"
      },
      {
        n: "TikTok Business 资源库",
        d: "官方行业报告和投放白皮书。做提案和报价时引用很硬。",
        u: "https://www.tiktok.com/business/en",
        t: ["官方", "报告"],
        tone: "blue",
        ic: "TR"
      }
    ]
  },
  {
    id: "safety",
    name: "合规与账号安全",
    en: "Compliance",
    desc: "踩一次线，前面所有投入归零。这些文档要能随手查到。",
    items: [
      {
        n: "TikTok 社区准则",
        d: "什么内容会被限流、下架、封号。做内容前先过一遍。",
        u: "https://www.tiktok.com/community-guidelines",
        t: ["官方", "规则"],
        tone: "pink",
        ic: "CG"
      },
      {
        n: "TikTok 知识产权政策",
        d: "音乐、画面、商标的版权边界。UGC 内容最容易被投诉的地方。",
        u: "https://www.tiktok.com/legal/copyright-policy",
        t: ["官方", "版权"],
        tone: "violet",
        ic: "IP"
      },
      {
        n: "账号申诉入口",
        d: "被限流或封号后的正式申诉通道。写申诉要摆事实、给证据。",
        u: "https://www.tiktok.com/legal/report",
        t: ["官方", "申诉"],
        tone: "amber",
        ic: "AP"
      },
      {
        n: "USPTO 商标查询",
        d: "美国商标库。上架前查一下，避免侵犯别人商标被下架罚款。",
        u: "https://www.uspto.gov/trademarks",
        t: ["合规", "商标"],
        tone: "blue",
        ic: "TM"
      },
      {
        n: "FTC 广告披露指南",
        d: "美国联邦贸易委员会规则。达人带货必须披露合作关系。",
        u: "https://www.ftc.gov/business-guidance/resources/disclosures-061-endorsement-guides",
        t: ["合规", "广告"],
        tone: "green",
        ic: "FT"
      }
    ]
  }
];

/* 起号路径：首屏下面那条步骤条 */
const PATH = [
  {
    step: "01",
    title: "跑通账号",
    desc: "注册、养号、开通专业账号，先把数据面板看到。",
    jump: "start"
  },
  {
    step: "02",
    title: "内容测试",
    desc: "同一钩子做三个版本，跑一周，看完播率挑方向。",
    jump: "create"
  },
  {
    step: "03",
    title: "数据复盘",
    desc: "找出完播和转化的分界点，砍掉表现差的那一半。",
    jump: "data"
  },
  {
    step: "04",
    title: "放大变现",
    desc: "达人带货或投流放大，把验证过的结构重复用。",
    jump: "shop"
  }
];
