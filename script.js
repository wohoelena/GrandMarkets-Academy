const toggle = document.querySelector("[data-menu-toggle]");
const links = document.querySelector("[data-nav-links]");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
  link.addEventListener("click", () => {
    if (links) links.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
});

const languages = [
  ["en", "English"],
  ["zh", "中文"],
];

const translations = {
  en: {
    "Institutional Finance Academy": "Institutional Finance Academy",
    "Quantitative Trading • Market Research • Professional Development": "Quantitative Trading • Market Research • Professional Development",
    "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "Built for traders, analysts and finance professionals seeking a systematic approach to markets.",
    "Explore RG146 Pathway": "Explore RG146 Pathway",
    "Enter Trading Lab": "Enter Trading Lab",
    "ACADEMY OVERVIEW": "ACADEMY OVERVIEW",
    "Structured tracks for market professionals": "Structured tracks for market professionals",
    "Professional learning and compliance literacy.": "Professional learning and compliance literacy.",
    "Trading Lab": "Trading Lab",
    "Simulation, execution and risk management training.": "Simulation, execution and risk management training.",
    "Market Knowledge": "Market Knowledge",
    "Structured learning for financial markets and products.": "Structured learning for financial markets and products.",
    "Workshops, networking and industry engagement.": "Workshops, networking and industry engagement.",
    "RESEARCH ORIENTATION": "RESEARCH ORIENTATION",
    "Compliance · Simulation · Market Structure": "Compliance · Simulation · Market Structure",
    "Designed for professional learning, not promotional trading content.": "Designed for professional learning, not promotional trading content.",
    "Learning Tracks": "Learning Tracks",
    "Learning Framework": "Learning Framework",
    "Trading Focus": "Trading Focus",
    "Quant": "Quant",
    "Based": "Based",
    "Australia": "Australia",
    "Simulation · Execution · Risk": "Simulation · Execution · Risk",
    "Research · Products · Macro": "Research · Products · Macro",
    "Workshops · Network · Industry": "Workshops · Network · Industry",
    "Institutional learning architecture for market professionals": "Institutional learning architecture for market professionals",
    "Designed as a research-led academy interface: dense, structured and built around professional outcomes.": "Designed as a research-led academy interface: dense, structured and built around professional outcomes.",
    "Structured Curriculum": "Structured Curriculum",
    "Trading Simulation": "Trading Simulation",
    "Market Research": "Market Research",
    "Professional Development": "Professional Development",
    "Built like an institutional research interface": "Built like an institutional research interface",
    "Each track has a defined audience, learning objective and next action.": "Each track has a defined audience, learning objective and next action.",
    "TRADING LAB": "TRADING LAB",
    "RESEARCH LIBRARY": "RESEARCH LIBRARY",
    "INDUSTRY EVENTS": "INDUSTRY EVENTS",
    "View events": "View events",
    "Request Access": "Request Access",
    "Industry Forums · Workshops · Professional Network": "Industry Forums · Workshops · Professional Network",
    "Institutional Events & Community": "Institutional Events & Community",
    "Curated sessions for finance professionals, analysts and systematic trading learners seeking market structure, research discipline and industry engagement.": "Curated sessions for finance professionals, analysts and systematic trading learners seeking market structure, research discipline and industry engagement.",
    "View Programme": "View Programme",
    "Professional Programme": "Professional Programme",
    "A structured calendar of forums, simulation workshops and market research sessions.": "A structured calendar of forums, simulation workshops and market research sessions.",
    "Compliance Forum": "Compliance Forum",
    "RG146 Professional Pathway": "RG146 Professional Pathway",
    "Execution Simulation Workshop": "Execution Simulation Workshop",
    "Macro & Gold Market Briefing": "Macro & Gold Market Briefing",
    "Institutional engagement model": "Institutional engagement model",
    "Events are designed as professional learning touchpoints, not promotional seminars.": "Events are designed as professional learning touchpoints, not promotional seminars.",
    "Faculty & Contributors": "Faculty & Contributors",
    "Professional instruction across compliance, markets and trading systems": "Professional instruction across compliance, markets and trading systems",
    "Professional learning cohorts": "Professional learning cohorts",
    "Access Request": "Access Request",
    "Request access to an upcoming programme": "Request access to an upcoming programme",
    "Send Event Request": "Send Event Request",
    "The Academy will suggest suitable sessions or cohorts based on your background and interest.": "The Academy will suggest suitable sessions or cohorts based on your background and interest.",
    "合规与职业论坛": "Compliance and Career Forum",
    "宏观研究简报": "Macro Research Briefing",
    "交易实验室": "Trading Lab",
    "量化工作坊": "Quant Workshop",
    "专业圆桌与社群答疑": "Professional Roundtable and Community Office Hour",
    "微信 / 电话 / 邮箱": "WeChat / Phone / Email",
    "例如：分析师、交易者、CFA 候选人、金融学生": "Example: analyst, trader, CFA candidate, finance student",
    "Academy": "Academy",
    "首页": "Home",
    "About Us": "About Us",
    "量化学院": "Quant Academy",
    "知识库": "Knowledge",
    "活动社群": "Events",
    "合规中心": "Compliance",
    "学习评估": "Pathway Review",
    "路径评估": "Pathway Review",
    "说明你的学习目标": "Share your learning objective",
    "你可以简要说明背景、时间安排和学习方向，学院将据此提供课程、活动或阅读路径建议。": "Briefly share your background, schedule and learning direction, and the Academy will suggest suitable courses, events or reading paths.",
    "你可以简要说明背景、城市、时间安排和学习方向，学院将据此提供课程、活动或阅读路径建议。": "Briefly share your background, city, schedule and learning direction, and the Academy will suggest suitable courses, events or reading paths.",
    "量化学习方向": "Quant Learning Direction",
    "了解量化 EA 学习路径": "Explore the Quant EA Learning Path",
    "适合希望从 MQL5、MT5 EA 或 Python 研究入门的学习者。": "Designed for learners who want to begin with MQL5, MT5 EA or Python research.",
    "发送问题": "Send Question",
    "提出问题": "Raise a Question",
    "投稿选题": "Suggest Topic",
    "活动申请": "Event Request",
    "AFSL 554475 背景支持 · 金融教育平台": "AFSL 554475 background · Financial education platform",
    "Grand Markets Academy": "Grand Markets Academy",
    "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "A clearer, compliant and structured learning path for Australian finance careers, quantitative trading education and market literacy.",
    "了解 RG146 学习": "Explore RG146",
    "进入量化学院": "Enter Quant Academy",
    "RG146 学习中心": "RG146 Learning Centre",
    "澳洲金融从业知识路径": "Australian finance career knowledge pathway",
    "量化 EA 学院": "Quant EA Academy",
    "MQL5 · MT5 EA · Python": "MQL5 · MT5 EA · Python",
    "金融知识库": "Market Knowledge Library",
    "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · Gold · Macro",
    "活动社群中心": "Events & Community",
    "公开课 · 线下活动 · 社群": "Open classes · Offline events · Community",
    "一个 Academy，四条清晰学习路径": "One academy, four clear learning paths",
    "首页像金融终端的总览台：先给方向，再让学习者进入对应页面深入了解。": "The homepage works like a clear overview desk: choose a direction, then enter the relevant pathway.",
    "持牌背景与合规教育": "Licensed Background & Compliance Education",
    "围绕 AFSL 背景、澳洲金融监管和风险意识建立专业可信的学习路径。": "Build trust through AFSL context, Australian financial regulation and risk awareness.",
    "课程路径与实操训练": "Course Pathways & Practical Training",
    "把 RG146 学习、MQL5、MT5 EA 和 Python 量化拆成可执行的学习模块。": "Turn RG146 learning, MQL5, MT5 EA and Python quant into actionable learning modules.",
    "公开课与社群承接": "Open Classes & Community",
    "通过活动、公开课和专业社群，沉淀长期学习关系与专业交流。": "Use events, open classes and professional community to build long-term learning relationships and professional exchange.",
    "教育内容需要像市场数据一样清楚": "Education should be as clear as market data",
    "每个频道都服务一个明确人群、一个关键词方向和一个下一步动作。": "Each channel serves a defined audience, keyword direction and next action.",
    "学习方向评估": "Request a pathway review",
    "学习项目": "Join the learning programme",
    "浏览知识库": "Browse library",
    "加入社群": "Join community",
    "RG146 学习方向评估": "Request an RG146 pathway review",
    "告诉我们你的学习方向": "Tell us your learning direction",
    "姓名": "Name",
    "所在城市": "City",
    "联系方式": "Contact",
    "感兴趣方向": "Interest",
    "留言": "Message",
    "发送学习意向": "Send learning interest",
    "RG146 · 澳洲金融从业知识路径": "RG146 · Australian finance career pathway",
    "查看学习路径": "View learning path",
    "学习路径评估": "Request pathway guidance",
    "RG146 是什么": "What is RG146?",
    "从职业方向出发理解澳洲金融从业要求": "Understand Australian finance requirements from a career perspective",
    "RG146 学习路径": "RG146 learning path",
    "入门评估": "Initial assessment",
    "核心科目学习": "Core modules",
    "题库与模拟测试": "Question bank & mock tests",
    "经验分享与路径确认": "Experience sharing & pathway confirmation",
    "常见学习问题": "Common learning questions",
    "澳洲金融从业路径": "Australian finance career pathway",
    "ASIC 监管与合规": "ASIC regulation and compliance",
    "课程模块": "Curriculum modules",
    "RG146 路径评估": "Request RG146 pathway review",
    "MQL5 · MT5 EA · Python Quant": "MQL5 · MT5 EA · Python Quant",
    "量化 EA 编程学院": "Quant EA Programming Academy",
    "查看课程模块": "View modules",
    "课程从能动手开始，而不是只听概念": "The course starts with hands-on building, not just concepts",
    "量化交易入门": "Quant trading basics",
    "MQL5 / MT5 EA": "MQL5 / MT5 EA",
    "Python 量化策略": "Python quant strategies",
    "策略案例作品集": "Strategy portfolio",
    "训练营定位": "Programme positioning",
    "让学员形成可运行、可复盘的学习作品": "Help learners create working, reviewable learning projects",
    "学习成果展示": "Learning outcomes",
    "课程安排示例": "Sample schedule",
    "量化学习方向": "Quant learning pathway",
    "了解量化 EA 学习路径": "Review the Quant EA learning path",
    "ASIC · AFSL · CFD · Gold": "ASIC · AFSL · Gold · Macro",
    "用合规、克制、易懂的方式解释金融市场基础概念，帮助学习者先理解风险，再理解工具。": "Explain market concepts in a compliant, restrained and accessible way, helping learners understand risk before tools.",
    "浏览文章分类": "Browse categories",
    "建议选题": "Suggest a topic",
    "内容分类": "Content categories",
    "ASIC 与 AFSL 解析": "ASIC and AFSL explained",
    "黄金市场基础知识": "Gold market basics",
    "宏观经济分析方法论": "Macro analysis framework",
    "MT4 / MT5 入门": "MT4 / MT5 basics",
    "关于 Grand Markets": "About Grand Markets",
    "内容原则": "Content principles",
    "知识库要像一本可信的中文金融手册": "The library should feel like a trusted finance handbook",
    "专题学习目录": "Topic Directory",
    "选题建议": "Topic suggestion",
    "告诉我们你想读什么": "Tell us what you want to read",
    "Workshops · Community · Open Class": "Workshops · Community · Open Class",
    "线下活动与社群中心": "Events & Community Centre",
    "查看活动安排": "View schedule",
    "加入社群": "Join community",
    "活动日历": "Event calendar",
    "RG146 入门公开课": "RG146 introductory open class",
    "MT5 EA 实操工作坊": "MT5 EA hands-on workshop",
    "黄金市场周度分享": "Weekly gold market session",
    "专业活动学习路径": "Professional event learning pathway",
    "讲师团队": "Instructors",
    "讲师介绍要强调经验、资质与教学主题": "Instructor profiles should highlight experience, credentials and teaching themes",
    "活动入口": "Access",
    "了解公开课或加入社群": "Explore an open class or join the community",
    "已收到您的信息。学院将根据你的学习目标回复，仅用于学习路径、课程或活动沟通。": "Your information has been received. The Academy will respond based on your learning goal, only for learning-path, course or event communication.",
    "ACADEMY FOCUS": "ACADEMY FOCUS",
    "RG146 · Quant · Market Literacy": "RG146 · Quant · Market Literacy",
    "Structured education for finance, technology and community learning.": "Structured education for finance, technology and community learning.",
    "Trust": "Trust",
    "Learning": "Learning",
    "Community": "Community",
    "CHANNEL": "CHANNEL",
    "AUDIENCE": "AUDIENCE",
    "PRIMARY CTA": "PRIMARY CTA",
    "QUANT EA": "QUANT EA",
    "MARKET LIBRARY": "MARKET LIBRARY",
    "COMMUNITY": "COMMUNITY",
    "Content Priority": "Content Priority",
    "Course Priority": "Course Priority",
    "Community Priority": "Community Priority",
    "Keyword": "Keyword",
    "EA Project": "EA Project",
    "Python Project": "Python Project",
    "Portfolio": "Portfolio",
    "Regulation": "Regulation",
    "Gold Market": "Gold Market",
    "Macro": "Macro",
    "Platform": "Platform",
    "Brand": "Brand",
    "Execution": "Execution",
    "Workshops · Community · Open Class": "Workshops · Community · Open Class",
    "Open Class": "Open Class",
    "Workshop": "Workshop",
    "Instructor": "Instructor",
    "Language": "Language",
  },
};

translations.zh = {
  "About Us": "关于我们",
  "RG146 Pathway": "RG146 路径",
  "Quant Lab": "量化实验室",
  "Market Literacy": "市场认知",
  "Community Events": "社群活动",
  "Language": "语言",
};

translations.ja = {
  ...translations.en,
  "首页": "ホーム",
  "量化学院": "クオンツ学院",
  "知识库": "ナレッジ",
  "活动社群": "イベント",
  "学习评估": "学習レビュー",
  "Grand Markets Academy": "Grand Markets Academy",
  "RG146 学习中心": "RG146対策センター",
  "量化 EA 学院": "クオンツEA学院",
  "金融知识库": "金融ナレッジライブラリ",
  "活动社群中心": "イベント・コミュニティ",
  "了解 RG146 学习": "RG146を見る",
  "进入量化学院": "クオンツ学院へ",
  "姓名": "氏名",
  "所在城市": "都市",
  "联系方式": "連絡先",
  "留言": "メッセージ",
  "发送学习意向": "送信",
  "AFSL 554475 背景支持 · 金融教育平台": "AFSL 554475 背景 · 金融教育プラットフォーム",
  "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "オーストラリア金融キャリア、クオンツ学習、市場知識のために、より明確で体系的な学習パスを提供します。",
  "澳洲金融从业知识路径": "豪州金融キャリア知識パス",
  "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · 金 · マクロ",
  "公开课 · 线下活动 · 社群": "公開講座 · オフラインイベント · コミュニティ",
  "一个 Academy，四条清晰学习路径": "1つのAcademy、4つの明確な学習パス",
  "首页像金融终端的总览台：先给方向，再让学习者进入对应入口深入了解。": "トップページは総合ダッシュボードのように、方向性を示してから各ページへ案内します。",
  "ACADEMY FOCUS": "重点分野",
  "RG146 · Quant · Market Literacy": "RG146 · クオンツ · 市場リテラシー",
  "Structured education for finance, technology and community learning.": "金融、テクノロジー、コミュニティ学習のための体系的な教育。",
  "Trust": "信頼",
  "Learning": "学習",
  "Community": "コミュニティ",
  "CHANNEL": "チャネル",
  "AUDIENCE": "対象者",
  "PRIMARY CTA": "主なアクション",
  "QUANT EA": "クオンツEA",
  "MARKET LIBRARY": "市場ライブラリ",
  "COMMUNITY": "コミュニティ",
  "Content Priority": "内容重点",
  "Course Priority": "講座重点",
  "Community Priority": "コミュニティ重点",
  "Keyword": "キーワード",
  "EA Project": "EAプロジェクト",
  "Python Project": "Pythonプロジェクト",
  "Portfolio": "ポートフォリオ",
  "Regulation": "規制",
  "Gold Market": "金市場",
  "Macro": "マクロ",
  "Platform": "プラットフォーム",
  "Brand": "ブランド",
  "Execution": "実行力",
  "Workshops · Community · Open Class": "ワークショップ · コミュニティ · 公開講座",
  "Open Class": "公開講座",
  "Workshop": "ワークショップ",
  "Instructor": "講師",
  "Language": "言語",
};

translations.ko = {
  ...translations.en,
  "首页": "홈",
  "量化学院": "퀀트 아카데미",
  "知识库": "지식 라이브러리",
  "活动社群": "이벤트",
  "学习评估": "학습 검토",
  "RG146 学习中心": "RG146 준비 센터",
  "量化 EA 学院": "퀀트 EA 아카데미",
  "金融知识库": "금융 지식 라이브러리",
  "活动社群中心": "이벤트 및 커뮤니티",
  "了解 RG146 学习": "RG146 알아보기",
  "进入量化学院": "퀀트 아카데미 입장",
  "姓名": "이름",
  "所在城市": "도시",
  "联系方式": "연락처",
  "留言": "메시지",
  "发送学习意向": "보내기",
  "AFSL 554475 背景支持 · 金融教育平台": "AFSL 554475 배경 · 금융 교육 플랫폼",
  "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "호주 금융 커리어, 퀀트 학습, 시장 지식을 위한 명확하고 체계적인 학습 경로를 제공합니다.",
  "澳洲金融从业知识路径": "호주 금융 커리어 지식 경로",
  "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · 금 · 매크로",
  "公开课 · 线下活动 · 社群": "오픈 클래스 · 오프라인 이벤트 · 커뮤니티",
  "一个 Academy，四条清晰学习路径": "하나의 Academy, 네 가지 명확한 학습 경로",
  "首页像金融终端的总览台：先给方向，再让学习者进入对应入口深入了解。": "홈페이지는 개요 대시보드처럼 방향을 제시하고 관련 페이지로 안내합니다.",
  "ACADEMY FOCUS": "아카데미 중점",
  "RG146 · Quant · Market Literacy": "RG146 · 퀀트 · 시장 이해",
  "Structured education for finance, technology and community learning.": "금융, 기술, 커뮤니티 학습을 위한 체계적인 교육.",
  "Trust": "신뢰",
  "Learning": "학습",
  "Community": "커뮤니티",
  "CHANNEL": "채널",
  "AUDIENCE": "대상",
  "PRIMARY CTA": "주요 행동",
  "QUANT EA": "퀀트 EA",
  "MARKET LIBRARY": "시장 라이브러리",
  "COMMUNITY": "커뮤니티",
  "Content Priority": "콘텐츠 우선",
  "Course Priority": "과정 우선",
  "Community Priority": "커뮤니티 우선",
  "Keyword": "키워드",
  "EA Project": "EA 프로젝트",
  "Python Project": "Python 프로젝트",
  "Portfolio": "포트폴리오",
  "Regulation": "규제",
  "Gold Market": "금 시장",
  "Macro": "매크로",
  "Platform": "플랫폼",
  "Brand": "브랜드",
  "Execution": "실행력",
  "Workshops · Community · Open Class": "워크숍 · 커뮤니티 · 오픈 클래스",
  "Open Class": "오픈 클래스",
  "Workshop": "워크숍",
  "Instructor": "강사",
  "Language": "언어",
};

translations.fr = {
  ...translations.en,
  "首页": "Accueil",
  "量化学院": "Académie quant",
  "知识库": "Bibliothèque",
  "活动社群": "Événements",
  "学习评估": "Revue du parcours",
  "RG146 学习中心": "Centre RG146",
  "量化 EA 学院": "Académie EA quant",
  "金融知识库": "Bibliothèque financière",
  "活动社群中心": "Événements et communauté",
  "了解 RG146 学习": "Découvrir RG146",
  "进入量化学院": "Entrer dans l'académie quant",
  "姓名": "Nom",
  "所在城市": "Ville",
  "联系方式": "Contact",
  "留言": "Message",
  "发送学习意向": "Envoyer",
  "AFSL 554475 背景支持 · 金融教育平台": "Contexte AFSL 554475 · Plateforme d'education financiere",
  "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "Un parcours clair et structure pour les carrieres financieres en Australie, l'apprentissage quantitatif et la culture des marches.",
  "澳洲金融从业知识路径": "Parcours de connaissances finance Australie",
  "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · Or · Macro",
  "公开课 · 线下活动 · 社群": "Cours ouverts · Evenements · Communaute",
  "一个 Academy，四条清晰学习路径": "Une academy, quatre parcours clairs",
  "首页像金融终端的总览台：先给方向，再让学习者进入对应入口深入了解。": "La page d'accueil agit comme un tableau de bord: elle oriente puis guide vers la page adaptee.",
  "ACADEMY FOCUS": "AXE ACADEMIQUE",
  "RG146 · Quant · Market Literacy": "RG146 · Quant · Culture des marches",
  "Structured education for finance, technology and community learning.": "Formation structuree pour la finance, la technologie et l'apprentissage communautaire.",
  "Trust": "Confiance",
  "Learning": "Apprentissage",
  "Community": "Communaute",
  "CHANNEL": "CANAL",
  "AUDIENCE": "PUBLIC",
  "PRIMARY CTA": "ACTION",
  "QUANT EA": "EA Quant",
  "MARKET LIBRARY": "Bibliotheque marche",
  "COMMUNITY": "Communaute",
  "Content Priority": "Priorite contenu",
  "Course Priority": "Priorite cours",
  "Community Priority": "Priorite communaute",
  "Keyword": "Mot-cle",
  "EA Project": "Projet EA",
  "Python Project": "Projet Python",
  "Portfolio": "Portfolio",
  "Regulation": "Reglementation",
  "Gold Market": "Marche de l'or",
  "Macro": "Macro",
  "Platform": "Plateforme",
  "Brand": "Marque",
  "Execution": "Execution",
  "Workshops · Community · Open Class": "Ateliers · Communaute · Cours ouvert",
  "Open Class": "Cours ouvert",
  "Workshop": "Atelier",
  "Instructor": "Formateur",
  "Language": "Langue",
};

translations.it = {
  ...translations.en,
  "首页": "Inizio",
  "量化学院": "Accademia Quant",
  "知识库": "Biblioteca",
  "活动社群": "Eventi",
  "学习评估": "Revisione percorso",
  "RG146 学习中心": "Centro RG146",
  "量化 EA 学院": "Accademia EA Quant",
  "金融知识库": "Biblioteca finanziaria",
  "活动社群中心": "Eventi e community",
  "了解 RG146 学习": "Scopri RG146",
  "进入量化学院": "Vai all'Accademia Quant",
  "姓名": "Nome",
  "所在城市": "Citta",
  "联系方式": "Contatto",
  "留言": "Messaggio",
  "发送学习意向": "Invia",
  "AFSL 554475 背景支持 · 金融教育平台": "Contesto AFSL 554475 · Piattaforma di formazione finanziaria",
  "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "Un percorso chiaro e strutturato per carriere finanziarie in Australia, studio quant e cultura dei mercati.",
  "澳洲金融从业知识路径": "Percorso per la carriera finanziaria australiana",
  "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · Oro · Macro",
  "公开课 · 线下活动 · 社群": "Open class · Eventi offline · Community",
  "一个 Academy，四条清晰学习路径": "Un'Academy, quattro percorsi chiari",
  "首页像金融终端的总览台：先给方向，再让学习者进入对应入口深入了解。": "La home funziona come una dashboard: orienta l'utente e lo porta alla pagina corretta.",
  "ACADEMY FOCUS": "FOCUS ACADEMY",
  "RG146 · Quant · Market Literacy": "RG146 · Quant · Cultura dei mercati",
  "Structured education for finance, technology and community learning.": "Formazione strutturata per finanza, tecnologia e apprendimento in community.",
  "Trust": "Fiducia",
  "Learning": "Apprendimento",
  "Community": "Community",
  "CHANNEL": "CANALE",
  "AUDIENCE": "PUBBLICO",
  "PRIMARY CTA": "AZIONE",
  "QUANT EA": "EA Quant",
  "MARKET LIBRARY": "Biblioteca mercati",
  "COMMUNITY": "Community",
  "Content Priority": "Priorita contenuto",
  "Course Priority": "Priorita corsi",
  "Community Priority": "Priorita community",
  "Keyword": "Parola chiave",
  "EA Project": "Progetto EA",
  "Python Project": "Progetto Python",
  "Portfolio": "Portfolio",
  "Regulation": "Regolamentazione",
  "Gold Market": "Mercato dell'oro",
  "Macro": "Macro",
  "Platform": "Piattaforma",
  "Brand": "Brand",
  "Execution": "Esecuzione",
  "Workshops · Community · Open Class": "Workshop · Community · Lezione aperta",
  "Open Class": "Lezione aperta",
  "Workshop": "Workshop",
  "Instructor": "Docente",
  "Language": "Lingua",
};

translations.de = {
  ...translations.en,
  "首页": "Start",
  "量化学院": "Quant-Akademie",
  "知识库": "Wissen",
  "活动社群": "Veranstaltungen",
  "学习评估": "Lernpfad prüfen",
  "RG146 学习中心": "RG146 Vorbereitungszentrum",
  "量化 EA 学院": "Quant EA Akademie",
  "金融知识库": "Finanzwissen",
  "活动社群中心": "Events & Community",
  "了解 RG146 学习": "RG146 ansehen",
  "进入量化学院": "Zur Quant-Akademie",
  "姓名": "Name",
  "所在城市": "Stadt",
  "联系方式": "Kontakt",
  "留言": "Nachricht",
  "发送学习意向": "Senden",
  "AFSL 554475 背景支持 · 金融教育平台": "AFSL 554475 Hintergrund · Finanzbildungsplattform",
  "面向澳洲金融从业、量化交易学习与市场知识普及，建立更清晰、更合规、更系统的学习路径。": "Ein klarer, strukturierter Lernpfad fur Finanzkarrieren in Australien, Quant-Lernen und Marktwissen.",
  "澳洲金融从业知识路径": "Wissenspfad fur australische Finanzkarrieren",
  "ASIC · AFSL · 黄金 · 宏观": "ASIC · AFSL · Gold · Makro",
  "公开课 · 线下活动 · 社群": "Offene Kurse · Offline-Events · Community",
  "一个 Academy，四条清晰学习路径": "Eine Academy, vier klare Lernpfade",
  "首页像金融终端的总览台：先给方向，再让学习者进入对应入口深入了解。": "Die Startseite wirkt wie ein Dashboard: Sie gibt Orientierung und fuhrt zur passenden Seite.",
  "ACADEMY FOCUS": "AKADEMIE-FOKUS",
  "RG146 · Quant · Market Literacy": "RG146 · Quant · Marktwissen",
  "Structured education for finance, technology and community learning.": "Strukturierte Bildung fur Finanzen, Technologie und Community-Lernen.",
  "Trust": "Vertrauen",
  "Learning": "Lernen",
  "Community": "Community",
  "CHANNEL": "KANAL",
  "AUDIENCE": "ZIELGRUPPE",
  "PRIMARY CTA": "AKTION",
  "QUANT EA": "Quant EA",
  "MARKET LIBRARY": "Marktbibliothek",
  "COMMUNITY": "Community",
  "Content Priority": "Content-Prioritat",
  "Course Priority": "Kurs-Prioritat",
  "Community Priority": "Community-Prioritat",
  "Keyword": "Schlusselwort",
  "EA Project": "EA-Projekt",
  "Python Project": "Python-Projekt",
  "Portfolio": "Portfolio",
  "Regulation": "Regulierung",
  "Gold Market": "Goldmarkt",
  "Macro": "Makro",
  "Platform": "Plattform",
  "Brand": "Marke",
  "Execution": "Ausfuhrung",
  "Workshops · Community · Open Class": "Workshops · Community · Offener Kurs",
  "Open Class": "Offener Kurs",
  "Workshop": "Workshop",
  "Instructor": "Dozent",
  "Language": "Sprache",
};

const supplementalTranslations = {
  en: {
    "RG146 Pathway": "RG146 Pathway",
    "Quant Lab": "Quant Lab",
    "Market Literacy": "Market Literacy",
    "Community Events": "Community Events",
    "我们把金融教育、市场知识与技术学习整理成清晰的路径，帮助不同阶段的学习者更稳妥地理解行业、工具与风险。": "We organize financial education, market knowledge and technical learning into clear pathways, helping learners understand the industry, tools and risk with more confidence.",
    "了解教育方法": "Explore our approach",
    "联系学院": "Contact the Academy",
    "我们是谁": "Who we are",
    "一个面向全球学习者的金融教育与市场知识平台": "A financial education and market knowledge platform for global learners",
    "Grand Markets Academy 承接品牌的全球执行力气质，学院表达聚焦教育、知识普及与社群学习。平台重点服务 RG146 学习、量化 EA 编程、金融市场知识库和公开课活动。": "Grand Markets Academy carries the brand's global execution character while focusing the Academy on education, knowledge and community learning. The platform supports RG146 learning, Quant EA programming, the market knowledge library and open-class events.",
    "以合规、克制、清楚的语言解释复杂主题": "Explain complex topics with compliant, restrained and clear language",
    "以课程、内容和活动承接不同学习目标": "Support different learning goals through courses, content and events",
    "以长期社群学习关系支持持续成长": "Support sustained growth through long-term learning communities",
    "我们的教育方法": "Our education approach",
    "先建立理解，再进入工具；先说明风险，再讨论应用。": "Build understanding before tools; explain risk before application.",
    "结构化路径": "Structured pathways",
    "清楚表达": "Clear communication",
    "风险意识": "Risk awareness",
    "我们服务的学习方向": "Learning directions we support",
    "联系我们": "Contact us",
    "把你的学习目标告诉我们": "Tell us your learning goal",
    "想了解的方向": "Area of interest",
    "发送学习意向": "Send learning interest",
    "学院将根据你的学习目标回复。": "The Academy will respond based on your learning goals.",
  },
  zh: {
    "Institutional Finance Academy": "机构金融学院",
    "Quantitative Trading • Market Research • Professional Development": "量化交易 • 市场研究 • 职业发展",
    "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "面向交易员、分析师与金融专业人士，建立系统化理解市场的方法。",
    "Explore RG146 Pathway": "探索 RG146 路径",
    "Enter Trading Lab": "进入交易实验室",
    "ACADEMY OVERVIEW": "学院总览",
    "Structured tracks for market professionals": "为市场专业人士设计的结构化学习路径",
    "Professional learning and compliance literacy.": "职业学习与合规素养。",
    "Trading Lab": "交易实验室",
    "Simulation, execution and risk management training.": "模拟、执行与风险管理训练。",
    "Market Knowledge": "市场知识",
    "Structured learning for financial markets and products.": "金融市场与产品的结构化学习。",
    "Workshops, networking and industry engagement.": "工作坊、专业交流与行业参与。",
    "RESEARCH ORIENTATION": "研究导向",
    "Compliance · Simulation · Market Structure": "合规 · 模拟 · 市场结构",
    "Designed for professional learning, not promotional trading content.": "为专业学习设计，而不是交易推广内容。",
    "Learning Tracks": "学习路径",
    "Learning Framework": "学习框架",
    "Trading Focus": "交易重点",
    "Quant": "量化",
    "Based": "本地基础",
    "Australia": "澳大利亚",
    "Simulation · Execution · Risk": "模拟 · 执行 · 风险",
    "Research · Products · Macro": "研究 · 产品 · 宏观",
    "Workshops · Network · Industry": "工作坊 · 人脉 · 行业",
    "Institutional learning architecture for market professionals": "面向市场专业人士的机构化学习架构",
    "Designed as a research-led academy interface: dense, structured and built around professional outcomes.": "以研究为导向的信息界面，内容密度更高、结构更清晰，并围绕专业成果设计。",
    "Learning Tracks": "学习路径",
    "Structured Curriculum": "结构化课程",
    "Trading Simulation": "交易模拟",
    "Market Research": "市场研究",
    "Professional Development": "职业发展",
    "Built like an institutional research interface": "以机构研究平台的方式构建",
    "Each track has a defined audience, learning objective and next action.": "每条路径都有明确人群、学习目标与下一步行动。",
    "TRADING LAB": "交易实验室",
    "RESEARCH LIBRARY": "研究资料库",
    "INDUSTRY EVENTS": "行业活动",
    "View events": "查看活动",
    "Request Access": "申请参与",
    "Industry Forums · Workshops · Professional Network": "行业论坛 · 工作坊 · 专业网络",
    "Institutional Events & Community": "机构活动与专业社群",
    "Curated sessions for finance professionals, analysts and systematic trading learners seeking market structure, research discipline and industry engagement.": "为金融专业人士、分析师与系统化交易学习者策划，聚焦市场结构、研究纪律与行业交流。",
    "View Programme": "查看项目",
    "Professional Programme": "专业项目",
    "A structured calendar of forums, simulation workshops and market research sessions.": "涵盖论坛、模拟工作坊与市场研究分享的结构化日程。",
    "Compliance Forum": "合规论坛",
    "RG146 Professional Pathway": "RG146 专业路径",
    "Execution Simulation Workshop": "执行模拟工作坊",
    "Macro & Gold Market Briefing": "宏观与黄金市场简报",
    "Institutional engagement model": "机构化参与模型",
    "Events are designed as professional learning touchpoints, not promotional seminars.": "活动被设计为专业学习触点，而不是营销讲座。",
    "Faculty & Contributors": "讲师与贡献者",
    "Professional instruction across compliance, markets and trading systems": "覆盖合规、市场与交易系统的专业教学",
    "Professional learning cohorts": "专业学习小组",
    "Access Request": "参与申请",
    "Request access to an upcoming programme": "申请参与即将开放的项目",
    "Send Event Request": "发送活动申请",
    "The Academy will suggest suitable sessions or cohorts based on your background and interest.": "学院将根据你的背景与兴趣推荐合适活动或学习组。",
  },
  ja: {
    "About Us": "私たちについて",
    "RG146 Pathway": "RG146パス",
    "Quant Lab": "クオンツラボ",
    "Market Literacy": "市場リテラシー",
    "Community Events": "コミュニティイベント",
    "我们是谁": "私たちについて",
    "我们的教育方法": "教育アプローチ",
    "联系我们": "お問い合わせ",
    "联系学院": "アカデミーに連絡",
    "了解教育方法": "教育方法を見る",
    "风险意识": "リスク意識",
    "线下活动与社群中心": "イベント・コミュニティセンター",
    "Institutional Finance Academy": "機関投資家向け金融アカデミー",
    "Quantitative Trading • Market Research • Professional Development": "クオンツ取引 • 市場調査 • 専門能力開発",
    "Learning Tracks": "学習トラック",
    "Learning Framework": "学習フレームワーク",
    "Quant": "クオンツ",
    "Trading Focus": "取引重点",
    "Australia": "オーストラリア",
    "Based": "拠点",
    "Institutional Events & Community": "機関向けイベント・コミュニティ",
    "Professional Programme": "プロフェッショナルプログラム",
    "Request Access": "参加申請",
    "View Programme": "プログラムを見る",
    "Trading Lab": "トレーディングラボ",
    "Market Knowledge": "市場知識",
  },
  ko: {
    "About Us": "소개",
    "RG146 Pathway": "RG146 경로",
    "Quant Lab": "퀀트 랩",
    "Market Literacy": "시장 이해",
    "Community Events": "커뮤니티 이벤트",
    "我们是谁": "우리는 누구인가",
    "我们的教育方法": "교육 방식",
    "联系我们": "문의하기",
    "联系学院": "아카데미 문의",
    "了解教育方法": "교육 방식 보기",
    "风险意识": "위험 인식",
    "线下活动与社群中心": "이벤트 및 커뮤니티 센터",
    "Institutional Finance Academy": "기관 금융 아카데미",
    "Quantitative Trading • Market Research • Professional Development": "퀀트 트레이딩 • 시장 리서치 • 전문 역량 개발",
    "Learning Tracks": "학습 트랙",
    "Learning Framework": "학습 프레임워크",
    "Quant": "퀀트",
    "Trading Focus": "트레이딩 중점",
    "Australia": "호주",
    "Based": "기반",
    "Institutional Events & Community": "기관 이벤트 및 커뮤니티",
    "Professional Programme": "전문 프로그램",
    "Request Access": "참여 신청",
    "View Programme": "프로그램 보기",
    "Trading Lab": "트레이딩 랩",
    "Market Knowledge": "시장 지식",
  },
  fr: {
    "About Us": "À propos",
    "RG146 Pathway": "Parcours RG146",
    "Quant Lab": "Lab quant",
    "Market Literacy": "Culture des marchés",
    "Community Events": "Événements",
    "我们是谁": "Qui nous sommes",
    "我们的教育方法": "Notre méthode",
    "联系我们": "Contact",
    "联系学院": "Contacter l'Academy",
    "了解教育方法": "Découvrir la méthode",
    "风险意识": "Culture du risque",
    "线下活动与社群中心": "Centre événements et communauté",
    "Institutional Finance Academy": "Académie financière institutionnelle",
    "Quantitative Trading • Market Research • Professional Development": "Trading quantitatif • Recherche de marché • Développement professionnel",
    "Learning Tracks": "Parcours d'apprentissage",
    "Learning Framework": "Cadre d’apprentissage",
    "Quant": "Quantitatif",
    "Trading Focus": "Orientation trading",
    "Australia": "Australie",
    "Based": "basée",
    "Institutional Events & Community": "Événements institutionnels et communauté",
    "Professional Programme": "Programme professionnel",
    "Request Access": "Demander l'accès",
    "View Programme": "Voir le programme",
    "Trading Lab": "Laboratoire de trading",
    "Market Knowledge": "Connaissance des marchés",
  },
  it: {
    "About Us": "Chi siamo",
    "RG146 Pathway": "Percorso RG146",
    "Quant Lab": "Lab Quant",
    "Market Literacy": "Cultura dei mercati",
    "Community Events": "Eventi community",
    "我们是谁": "Chi siamo",
    "我们的教育方法": "Il nostro metodo",
    "联系我们": "Contatti",
    "联系学院": "Contatta l'Academy",
    "了解教育方法": "Scopri il metodo",
    "风险意识": "Consapevolezza del rischio",
    "线下活动与社群中心": "Centro eventi e community",
    "Institutional Finance Academy": "Accademia finanziaria istituzionale",
    "Quantitative Trading • Market Research • Professional Development": "Trading quantitativo • Ricerca di mercato • Sviluppo professionale",
    "Learning Tracks": "Percorsi di apprendimento",
    "Learning Framework": "Framework di apprendimento",
    "Quant": "Quantitativo",
    "Trading Focus": "Focus trading",
    "Australia": "Australia sede",
    "Based": " ",
    "Institutional Events & Community": "Eventi istituzionali e community",
    "Professional Programme": "Programma professionale",
    "Request Access": "Richiedi accesso",
    "View Programme": "Vedi programma",
    "Trading Lab": "Laboratorio di trading",
    "Market Knowledge": "Conoscenza dei mercati",
  },
  de: {
    "About Us": "Über uns",
    "RG146 Pathway": "RG146-Pfad",
    "Quant Lab": "Quant-Lab",
    "Market Literacy": "Marktwissen",
    "Community Events": "Community-Events",
    "我们是谁": "Wer wir sind",
    "我们的教育方法": "Unser Ansatz",
    "联系我们": "Kontakt",
    "联系学院": "Academy kontaktieren",
    "了解教育方法": "Ansatz ansehen",
    "风险意识": "Risikobewusstsein",
    "线下活动与社群中心": "Veranstaltungs- und Community-Zentrum",
    "Institutional Finance Academy": "Institutionelle Finanzakademie",
    "Quantitative Trading • Market Research • Professional Development": "Quantitativer Handel • Marktforschung • Berufliche Entwicklung",
    "Learning Tracks": "Lernpfade",
    "Learning Framework": "Lernrahmen",
    "Quant": "Quantitativ",
    "Trading Focus": "Trading-Fokus",
    "Australia": "Australien",
    "Based": "basiert",
    "Institutional Events & Community": "Institutionelle Veranstaltungen & Community",
    "Professional Programme": "Professionelles Programm",
    "Request Access": "Zugang anfragen",
    "View Programme": "Programm ansehen",
    "Trading Lab": "Trading-Labor",
    "Market Knowledge": "Marktwissen",
  },
};

const editorialTranslations = {
  zh: {
    "Research Platform": "研究平台",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is closer to a professional research desk than a conventional course list.": "Grand Markets Academy 围绕研究纪律、合规认知与应用交易流程构建，体验更接近专业研究台，而不是传统课程清单。",
    "GMA RESEARCH": "GMA 研究",
    "XAUUSD / MACRO / RISK": "XAUUSD / 宏观 / 风险",
    "Volatility": "波动率",
    "Liquidity": "流动性",
    "Scenario": "情景",
    "Cycle": "周期",
    "Map": "地图",
    "Sample": "示例",
    "Focus": "重点",
    "FOCUS": "重点",
    "Simulation before execution, risk before performance": "先模拟再执行，先风险再表现",
    "Simulation before execution, risk before outcomes": "先模拟再执行，先风险再结果",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "交易实验室围绕流程训练量化学习：假设、执行逻辑、风险控制、测试纪律与交易后复盘。",
    "SIMULATION DESK": "模拟交易台",
    "Execution Review": "执行复盘",
    "Order Logic": "订单逻辑",
    "Reviewed": "已审阅",
    "Risk Parameter": "风险参数",
    "Backtest Range": "回测区间",
    "Review Status": "复盘状态",
    "Pending": "待处理",
    "Research scripts": "研究脚本",
    "Simulation": "模拟",
    "Network": "网络",
    "Learning pathway timeline": "学习路径时间线",
    "A structured sequence from market literacy to applied professional development.": "从市场认知到应用型职业发展的结构化顺序。",
    "Market Foundation": "市场基础",
    "Regulation, products, macro drivers and risk language.": "监管、产品、宏观驱动因素与风险语言。",
    "Professional Framework": "专业框架",
    "RG146 pathway, compliance context and industry standards.": "RG146 路径、合规背景与行业标准。",
    "Research & Cohort": "研究与学习小组",
    "Briefings, reading lists, workshops and professional network.": "简报、阅读清单、工作坊与专业网络。"
  },
  ja: {
    "Research Platform": "リサーチプラットフォーム",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is designed to feel closer to a professional research desk than a course catalogue.": "Grand Markets Academyは、リサーチ規律、コンプライアンス知識、実践的な取引ワークフローを軸に構成されています。",
    "Simulation before execution, risk before performance": "執行の前にシミュレーション、成果の前にリスク",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "Trading Labは、仮説、執行ロジック、リスク管理、検証規律、事後レビューを中心にクオンツ学習を設計します。",
    "Learning pathway timeline": "学習パスタイムライン",
    "Market Foundation": "市場基礎",
    "Professional Framework": "専門フレームワーク",
    "Trading Simulation": "取引シミュレーション",
    "Research & Cohort": "リサーチとコホート",
    "GMA RESEARCH": "GMAリサーチ",
    "Volatility": "ボラティリティ",
    "Liquidity": "流動性",
    "Scenario": "シナリオ",
    "Reviewed": "検証済み",
    "Pending": "保留中",
    "Research scripts": "リサーチスクリプト",
    "Simulation": "シミュレーション",
    "Network": "ネットワーク"
  },
  ko: {
    "Research Platform": "리서치 플랫폼",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is designed to feel closer to a professional research desk than a course catalogue.": "Grand Markets Academy는 리서치 규율, 컴플라이언스 이해, 실전 트레이딩 워크플로를 중심으로 구성됩니다.",
    "Simulation before execution, risk before performance": "실행 전 시뮬레이션, 성과 전 위험",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "Trading Lab은 가설, 실행 로직, 위험 통제, 테스트 규율, 사후 리뷰를 중심으로 퀀트 학습을 구성합니다.",
    "Learning pathway timeline": "학습 경로 타임라인",
    "Market Foundation": "시장 기초",
    "Professional Framework": "전문 프레임워크",
    "Trading Simulation": "트레이딩 시뮬레이션",
    "Research & Cohort": "리서치 및 코호트",
    "GMA RESEARCH": "GMA 리서치",
    "Volatility": "변동성",
    "Liquidity": "유동성",
    "Scenario": "시나리오",
    "Reviewed": "검증됨",
    "Pending": "대기 중",
    "Research scripts": "리서치 스크립트",
    "Simulation": "시뮬레이션",
    "Network": "네트워크"
  },
  fr: {
    "Research Platform": "Plateforme de recherche",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is designed to feel closer to a professional research desk than a course catalogue.": "Grand Markets Academy s'organise autour de la discipline de recherche, de la conformité et des flux de travail appliqués au trading.",
    "Simulation before execution, risk before performance": "La simulation avant l'exécution, le risque avant la performance",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "Le Trading Lab structure l'apprentissage quantitatif autour de l'hypothèse, de l'exécution, du contrôle du risque, des tests et de la revue post-trade.",
    "Learning pathway timeline": "Chronologie du parcours d'apprentissage",
    "Market Foundation": "Fondamentaux de marché",
    "Professional Framework": "Cadre professionnel",
    "Trading Simulation": "Simulation de trading",
    "Research & Cohort": "Recherche et cohorte",
    "GMA RESEARCH": "Recherche GMA",
    "Volatility": "Volatilité",
    "Liquidity": "Liquidité",
    "Scenario": "Scénario",
    "Reviewed": "Validé",
    "Pending": "En attente",
    "Research scripts": "Scripts de recherche",
    "Simulation": "Simulation",
    "Network": "Réseau"
  },
  it: {
    "Research Platform": "Piattaforma di ricerca",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is designed to feel closer to a professional research desk than a course catalogue.": "Grand Markets Academy è strutturata intorno a disciplina di ricerca, compliance e workflow di trading applicato.",
    "Simulation before execution, risk before performance": "Simulazione prima dell'esecuzione, rischio prima della performance",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "Il Trading Lab organizza l'apprendimento quantitativo attorno a ipotesi, logica di esecuzione, controlli di rischio, test e revisione post-trade.",
    "Learning pathway timeline": "Timeline del percorso di apprendimento",
    "Market Foundation": "Fondamenti di mercato",
    "Professional Framework": "Framework professionale",
    "Trading Simulation": "Simulazione di trading",
    "Research & Cohort": "Ricerca e coorte",
    "GMA RESEARCH": "Ricerca GMA",
    "Volatility": "Volatilità",
    "Liquidity": "Liquidità",
    "Scenario": "Scenario",
    "Reviewed": "Validato",
    "Pending": "In attesa",
    "Research scripts": "Script di ricerca",
    "Simulation": "Simulazione",
    "Network": "Network"
  },
  de: {
    "Research Platform": "Research-Plattform",
    "Grand Markets Academy is structured around research discipline, compliance literacy and applied trading workflows. The experience is designed to feel closer to a professional research desk than a course catalogue.": "Grand Markets Academy ist auf Research-Disziplin, Compliance-Verständnis und angewandte Trading-Workflows ausgerichtet.",
    "Simulation before execution, risk before performance": "Simulation vor Ausführung, Risiko vor Performance",
    "The Trading Lab frames quantitative learning around process: hypothesis, execution logic, risk controls, testing discipline and post-trade review.": "Das Trading-Labor strukturiert quantitatives Lernen rund um Hypothese, Ausführungslogik, Risikokontrollen, Tests und Post-Trade-Review.",
    "Learning pathway timeline": "Zeitleiste des Lernpfads",
    "Market Foundation": "Marktgrundlagen",
    "Professional Framework": "Professioneller Rahmen",
    "Trading Simulation": "Trading-Simulation",
    "Research & Cohort": "Research & Kohorte",
    "GMA RESEARCH": "GMA Research",
    "Volatility": "Volatilität",
    "Liquidity": "Liquidität",
    "Scenario": "Szenario",
    "Reviewed": "Validiert",
    "Pending": "Ausstehend",
    "Research scripts": "Research-Skripte",
    "Simulation": "Simulation",
    "Network": "Netzwerk"
  }
};

Object.entries(editorialTranslations).forEach(([lang, entries]) => {
  supplementalTranslations[lang] = { ...(supplementalTranslations[lang] || {}), ...entries };
});

Object.assign(supplementalTranslations.zh, {
  "Recommended start": "推荐起点",
  "Choose by objective: compliance, systems, research or community.": "按目标选择：合规、系统、研究或社群。",
  "Decision Desk": "决策台",
  "Start with the pathway that matches your objective.": "先进入最匹配你目标的学习路径。",
  "Visitors should not need to guess where to go. The academy is organised by intent: career compliance, technical trading systems, market literacy and professional community.": "学习者不需要自己猜下一步。学院按学习意图组织：职业合规、技术交易系统、市场认知与专业社群。",
  "Priority 01": "优先级 01",
  "Priority 02": "优先级 02",
  "Priority 03": "优先级 03",
  "Priority 04": "优先级 04",
  "Priority 05": "优先级 05",
  "RG146 Learning Pathway": "RG146 学习路径",
  "For learners building Australian finance industry knowledge, compliance literacy and career context.": "适合建立澳洲金融行业知识、合规素养与职业语境的学习者。",
  "Start here": "从这里开始",
  "For learners focused on MQL5, MT5 EA, Python research, simulation and review discipline.": "适合聚焦 MQL5、MT5 EA、Python 研究、模拟与复盘纪律的学习者。",
  "Build systems": "构建系统",
  "Market Knowledge Library": "市场知识库",
  "For readers who need structured foundations across regulation, products, macro and risk.": "适合需要系统补齐监管、产品、宏观与风险基础的读者。",
  "Read research": "阅读研究",
  "Events & Professional Community": "活动与专业社群",
  "For workshops, research briefings, cohort learning and industry engagement.": "适合工作坊、研究简报、学习小组与行业交流。",
  "Join sessions": "加入活动",
  "High": "高",
  "Base": "基准",
  "Cycle": "周期",
  "Map": "地图",
  "Sample": "示例",
  "Focus": "重点",
  "FOCUS": "重点",
  "36M": "36个月",
  "ACADEMY DESK": "学院工作台",
  "Professional market learning framework": "专业市场学习框架",
  "LEARNING": "学习中",
  "Compliance pathway": "合规路径",
  "Framework": "框架",
  "Execution simulation": "执行模拟",
  "Risk": "风险",
  "Market structure library": "市场结构资料库",
  "Macro": "宏观",
  "Professional briefings": "专业简报",
  "Cohort": "学习组",
  "Tracks": "路径",
  "Simulation range": "模拟周期",
  "Context": "背景",
  "Track 01": "路径 01",
  "Track 02": "路径 02",
  "Track 03": "路径 03",
  "Track 04": "路径 04",
  "Track 05": "路径 05",
  "Professional learning framework and compliance literacy.": "职业学习框架与合规素养。",
  "Execution simulation, strategy review and risk management.": "执行模拟、策略复盘与风险管理。",
  "Market structure, macro context and product knowledge.": "市场结构、宏观背景与产品知识。",
  "Industry workshops, briefings and professional cohorts.": "行业工作坊、专业简报与学习组。",
  "Research": "研究",
  "Network": "网络",
});

Object.assign(supplementalTranslations.ja, {
  "Institutional learning architecture for market professionals": "市場プロフェッショナル向けの機関型学習設計",
  "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "市場への体系的なアプローチを求めるトレーダー、アナリスト、金融プロフェッショナル向けに設計されています。",
  "High": "高",
  "Base": "基準",
  "36M": "36か月",
  "ACADEMY DESK": "アカデミーデスク",
  "Professional market learning framework": "専門的な市場学習フレームワーク",
  "LEARNING": "ライブ",
  "Compliance pathway": "コンプライアンスパス",
  "Framework": "フレームワーク",
  "Execution simulation": "執行シミュレーション",
  "Risk": "リスク",
  "Market structure library": "市場構造ライブラリー",
  "Macro": "マクロ",
  "Professional briefings": "専門ブリーフィング",
  "Cohort": "コホート",
  "Tracks": "トラック",
  "Simulation range": "シミュレーション期間",
  "Context": "背景",
  "Track 01": "トラック 01",
  "Track 02": "トラック 02",
  "Track 03": "トラック 03",
  "Track 04": "トラック 04",
  "Professional learning framework and compliance literacy.": "専門資格フレームワークとコンプライアンスリテラシー。",
  "Execution simulation, strategy review and risk management.": "執行シミュレーション、戦略レビュー、リスク管理。",
  "Market structure, macro context and product knowledge.": "市場構造、マクロ環境、商品知識。",
  "Industry workshops, briefings and professional cohorts.": "業界ワークショップ、ブリーフィング、専門コホート。",
  "Research": "リサーチ",
  "Network": "ネットワーク",
});

Object.assign(supplementalTranslations.ko, {
  "Institutional learning architecture for market professionals": "시장 전문가를 위한 기관형 학습 구조",
  "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "시장에 대한 체계적 접근을 원하는 트레이더, 애널리스트, 금융 전문가를 위해 설계되었습니다.",
  "High": "높음",
  "Base": "기준",
  "36M": "36개월",
  "ACADEMY DESK": "아카데미 데스크",
  "Professional market learning framework": "전문 시장 학습 프레임워크",
  "LEARNING": "실시간",
  "Compliance pathway": "컴플라이언스 경로",
  "Framework": "프레임워크",
  "Execution simulation": "체결 시뮬레이션",
  "Risk": "리스크",
  "Market structure library": "시장 구조 라이브러리",
  "Macro": "매크로",
  "Professional briefings": "전문 브리핑",
  "Cohort": "학습 그룹",
  "Tracks": "트랙",
  "Simulation range": "시뮬레이션 기간",
  "Context": "배경",
  "Track 01": "트랙 01",
  "Track 02": "트랙 02",
  "Track 03": "트랙 03",
  "Track 04": "트랙 04",
  "Professional learning framework and compliance literacy.": "전문 자격 프레임워크와 컴플라이언스 이해.",
  "Execution simulation, strategy review and risk management.": "체결 시뮬레이션, 전략 리뷰, 리스크 관리.",
  "Market structure, macro context and product knowledge.": "시장 구조, 거시 환경, 상품 지식.",
  "Industry workshops, briefings and professional cohorts.": "업계 워크숍, 브리핑, 전문 학습 그룹.",
  "Research": "리서치",
  "Network": "네트워크",
});

Object.assign(supplementalTranslations.fr, {
  "Institutional learning architecture for market professionals": "Architecture d'apprentissage institutionnelle pour professionnels des marchés",
  "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "Conçu pour les traders, analystes et professionnels de la finance recherchant une approche systématique des marchés.",
  "High": "Élevée",
  "Base": "Base",
  "36M": "36 mois",
  "ACADEMY DESK": "Bureau de l'académie",
  "Professional market learning framework": "Cadre professionnel d'apprentissage des marchés",
  "LEARNING": "Direct",
  "Compliance pathway": "Parcours conformité",
  "Framework": "Cadre",
  "Execution simulation": "Simulation d'exécution",
  "Risk": "Risque",
  "Market structure library": "Bibliothèque de structure de marché",
  "Macro": "Macro",
  "Professional briefings": "Briefings professionnels",
  "Cohort": "Cohorte",
  "Tracks": "Parcours",
  "Simulation range": "Période de simulation",
  "Context": "Contexte",
  "Track 01": "Parcours 01",
  "Track 02": "Parcours 02",
  "Track 03": "Parcours 03",
  "Track 04": "Parcours 04",
  "Professional learning framework and compliance literacy.": "Cadre d’apprentissage professionnel et culture de conformité.",
  "Execution simulation, strategy review and risk management.": "Simulation d'exécution, revue de stratégie et gestion du risque.",
  "Market structure, macro context and product knowledge.": "Structure de marché, contexte macro et connaissance des produits.",
  "Industry workshops, briefings and professional cohorts.": "Ateliers sectoriels, briefings et cohortes professionnelles.",
  "Research": "Recherche",
  "Network": "Réseau",
});

Object.assign(supplementalTranslations.it, {
  "Institutional learning architecture for market professionals": "Architettura formativa istituzionale per professionisti dei mercati",
  "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "Pensato per trader, analisti e professionisti finanziari che cercano un approccio sistematico ai mercati.",
  "High": "Alta",
  "Base": "Base",
  "36M": "36 mesi",
  "ACADEMY DESK": "Desk accademia",
  "Professional market learning framework": "Framework professionale di apprendimento dei mercati",
  "LEARNING": "Live",
  "Compliance pathway": "Percorso compliance",
  "Framework": "Framework",
  "Execution simulation": "Simulazione di esecuzione",
  "Risk": "Rischio",
  "Market structure library": "Libreria sulla struttura di mercato",
  "Macro": "Macro",
  "Professional briefings": "Briefing professionali",
  "Cohort": "Coorte",
  "Tracks": "Percorsi",
  "Simulation range": "Periodo di simulazione",
  "Context": "Contesto",
  "Track 01": "Percorso 01",
  "Track 02": "Percorso 02",
  "Track 03": "Percorso 03",
  "Track 04": "Percorso 04",
  "Professional learning framework and compliance literacy.": "Framework di certificazione professionale e cultura della compliance.",
  "Execution simulation, strategy review and risk management.": "Simulazione di esecuzione, revisione strategica e gestione del rischio.",
  "Market structure, macro context and product knowledge.": "Struttura di mercato, contesto macro e conoscenza dei prodotti.",
  "Industry workshops, briefings and professional cohorts.": "Workshop di settore, briefing e coorti professionali.",
  "Research": "Ricerca",
  "Network": "Rete",
});

Object.assign(supplementalTranslations.de, {
  "Institutional learning architecture for market professionals": "Institutionelle Lernarchitektur für Marktprofis",
  "Built for traders, analysts and finance professionals seeking a systematic approach to markets.": "Für Trader, Analysten und Finanzprofis entwickelt, die einen systematischen Marktzugang suchen.",
  "High": "Hoch",
  "Base": "Basis",
  "36M": "36 Monate",
  "ACADEMY DESK": "Academy Desk",
  "Professional market learning framework": "Professioneller Lernrahmen für Märkte",
  "LEARNING": "Live",
  "Compliance pathway": "Compliance-Pfad",
  "Framework": "Rahmen",
  "Execution simulation": "Ausführungssimulation",
  "Risk": "Risiko",
  "Market structure library": "Bibliothek zur Marktstruktur",
  "Macro": "Makro",
  "Professional briefings": "Professionelle Briefings",
  "Cohort": "Kohorte",
  "Tracks": "Tracks",
  "Simulation range": "Simulationszeitraum",
  "Context": "Kontext",
  "Track 01": "Track 01",
  "Track 02": "Track 02",
  "Track 03": "Track 03",
  "Track 04": "Track 04",
  "Professional learning framework and compliance literacy.": "Professioneller Zertifizierungsrahmen und Compliance-Kompetenz.",
  "Execution simulation, strategy review and risk management.": "Ausführungssimulation, Strategieüberprüfung und Risikomanagement.",
  "Market structure, macro context and product knowledge.": "Marktstruktur, Makrokontext und Produktwissen.",
  "Industry workshops, briefings and professional cohorts.": "Branchenworkshops, Briefings und professionelle Kohorten.",
  "Research": "Research",
  "Network": "Netzwerk",
});

Object.assign(supplementalTranslations.zh, {
  "Q1 Review": "第一季度复盘",
  "Q1 REVIEW": "第一季度复盘",
  "Macro Shift": "宏观变化",
  "MACRO SHIFT": "宏观变化",
  "Risk Regime": "风险状态",
  "RISK REGIME": "风险状态",
  "EA logic": "EA 逻辑",
  "EA LOGIC": "EA 逻辑",
  "Execution logic, backtesting, risk controls and review cadence.": "执行逻辑、回测、风险控制与复盘节奏。",
  "Sydney / Melbourne": "悉尼 / 墨尔本",
  "Sydney, Australia": "澳大利亚悉尼",
  "Grand Markets Group": "Grand Markets 集团",
  "GENERIC KNOWLEDGE": "通用知识",
  "Generic Knowledge": "通用知识",
  "SPECIALIST KNOWLEDGE": "专项知识",
  "Specialist Knowledge": "专项知识",
  "RISK AWARENESS": "风险意识",
  "Risk Awareness": "风险意识",
  "KEYWORD": "关键词",
  "Keyword": "关键词",
  "重点拆解 Generic Knowledge 与 Specialist Knowledge": "重点拆解通用知识与专项知识",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。差价合约 CFD 和外汇等杠杆产品风险较高，可能导致重大资本损失。": "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。差价合约和外汇等杠杆产品风险较高，可能导致重大资本损失。",
  "MQL5 · MT5 EA · Python Quant": "MQL5 · MT5 EA · Python 量化",
  "strategy.signal()": "策略信号()",
  "risk.limit = sample": "风险上限 = 示例",
  "backtest.status = reviewed": "回测状态 = 已审阅",
  "EA PROJECT": "EA 项目",
  "EA Project": "EA 项目",
  "Backtest": "回测",
  "PYTHON PROJECT": "脚本项目",
  "Python Project": "脚本项目",
  "Signal": "信号",
  "PORTFOLIO": "作品集",
  "Portfolio": "作品集",
  "Report": "报告",
  "Review": "复盘",
  "Week 1": "第 1 周",
  "Week 2": "第 2 周",
  "Week 3": "第 3 周",
  "Week 4": "第 4 周",
  "ASIC · AFSL · CFD · Gold": "ASIC · AFSL · 差价合约 · 黄金",
  "REGULATION": "监管",
  "Regulation": "监管",
  "CFD BASICS": "差价合约基础",
  "CFD Basics": "差价合约基础",
  "CFD 是什么": "差价合约是什么",
  "CFD": "差价合约",
  "GOLD MARKET": "黄金市场",
  "Gold Market": "黄金市场",
  "PLATFORM": "平台",
  "Platform": "平台",
  "MT4 / MT5 入门": "MT4 / MT5 基础",
  "MT4": "MT4",
  "Brand": "品牌",
  "Execution": "执行",
  "GOLD": "黄金",
  "Gold": "黄金",
  "CFD、外汇和股票有什么不同": "差价合约、外汇和股票有什么不同",
  "CFD 入门": "差价合约入门",
  "例如：CFD 的保证金怎么理解？": "例如：差价合约的保证金怎么理解？",
  "Industry Forums · Workshops · Professional Network": "行业论坛 · 工作坊 · 专业网络",
  "Regulatory context, professional standards and structured learning for finance roles.": "监管背景、专业标准与金融岗位的结构化准备。",
  "Scenario-based sessions covering execution logic, risk parameters and post-trade review.": "围绕执行逻辑、风险参数与交易后复盘的情景化课程。",
  "Research-led discussions on macro drivers, product structure and market interpretation.": "围绕宏观驱动、产品结构与市场解读的研究型讨论。",
  "Research-led forums": "研究导向论坛",
  "Focused briefings on market structure, macro drivers and professional standards.": "聚焦市场结构、宏观驱动与专业标准的简报。",
  "Applied trading workshops": "应用交易工作坊",
  "Simulation-led sessions for execution logic, strategy review and risk discipline.": "以模拟为核心，训练执行逻辑、策略复盘与风险纪律。",
  "Professional networking": "专业交流网络",
  "Curated engagement for analysts, traders, candidates and finance practitioners.": "为分析师、交易员、候选人和金融从业者策划的专业交流。",
  "Learning continuity": "学习延续",
  "Post-session reading lists, track recommendations and community follow-up.": "课后阅读清单、路径建议与社群跟进。",
  "Contributor profiles should emphasize experience, regulatory context, research capability and applied teaching discipline.": "讲师介绍应强调经验、监管背景、研究能力与应用教学纪律。",
  "Regulatory and professional standards context": "监管与专业标准背景",
  "Market research, product structure and risk education": "市场研究、产品结构与风险教育",
  "Trading simulation, MQL5, MT5 EA and Python workflows": "交易模拟、MQL5、MT5 EA 与 Python 工作流",
  "INSTRUCTOR": "讲师",
  "Instructor": "讲师",
  "Compliance Faculty": "合规讲师",
  "Australian finance standards, compliance context and professional pathway guidance.": "澳洲金融标准、合规背景与职业路径指导。",
  "Trading Systems Faculty": "交易系统讲师",
  "MQL5, MT5 EA, Python backtesting and strategy review methodology.": "MQL5、MT5 EA、Python 回测与策略复盘方法。",
  "Cohorts are organized by learning intent and professional context.": "学习组按学习目标与专业背景组织。",
  "RG146 Cohort": "RG146 学习组",
  "Compliance learning, study rhythm and professional study discipline.": "合规学习、学习节奏与学习纪律。",
  "Trading Lab Cohort": "交易实验室学习组",
  "Code review, simulation notes and systematic strategy discussion.": "代码复盘、模拟记录与系统化策略讨论。",
  "Research Briefing Group": "研究简报小组",
  "Market updates, reading lists and macro research discussion.": "市场更新、阅读清单与宏观研究讨论。",
  "Professional Network": "专业网络",
  "Industry engagement, event priority and peer learning.": "行业参与、活动优先席位与同伴学习。",
  "Share your professional background and learning interest so the Academy can suggest the appropriate session or cohort.": "请分享你的专业背景和学习兴趣，学院将为你建议合适的课程或学习组。",
  "Name": "姓名",
  "Programme interest": "项目兴趣",
  "Trading Lab Workshop": "交易实验室工作坊",
  "Market Research Briefing": "市场研究简报",
  "Professional Cohort": "专业学习组",
  "Contact": "联系方式",
  "WeChat / Phone / Email": "微信 / 电话 / 邮件",
  "WeChat / WhatsApp / Phone": "微信 / 电话 / 邮件",
  "Professional background": "专业背景",
  "Example: analyst, trader, CFA candidate, finance student": "例如：分析师、交易员、特许金融分析师候选人、金融学生",
  "EDUCATION": "教育",
  "COMMUNITY": "社群",
  "STRUCTURE": "结构",
  "CLARITY": "清晰",
  "DISCIPLINE": "纪律",
  "Education": "教育",
  "Market Literacy": "市场认知",
  "Community": "社群",
  "Structure": "结构",
  "Clarity": "清晰",
  "Discipline": "纪律",
  "每个方向都有独立页面，也可以从 About Us 了解整体定位。": "每个方向都有独立页面，也可以从关于我们了解整体定位。",
  "QUANT EA": "量化 EA",
  "MARKET LIBRARY": "市场知识库",
  "COMMUNITY": "社群",
});

Object.assign(supplementalTranslations.en, {
  "Grand Markets Academy | 澳洲金融教育与市场知识平台": "Grand Markets Academy | Financial Education and Market Knowledge Platform",
  "RG146 学习中心 | Grand Markets Academy": "RG146 Learning Centre | Grand Markets Academy",
  "量化 EA 编程学院 | Grand Markets Academy": "Quant EA Programming Academy | Grand Markets Academy",
  "金融市场知识库 | Grand Markets Academy": "Financial Market Knowledge Library | Grand Markets Academy",
  "线下活动与社群中心 | Grand Markets Academy": "Events and Professional Community | Grand Markets Academy",
  "合规与风险管理中心 | Grand Markets Academy": "Compliance and Risk Management Centre | Grand Markets Academy",
  "About Us | Grand Markets Academy": "About Us | Grand Markets Academy",
  "关于我们 | Grand Markets Academy": "About Us | Grand Markets Academy",
  "问题": "Question",
  "提出问题": "Raise a Question",
  "学习方向评估": "Learning Pathway Review",
  "实验": "LAB",
  "研究": "RSH",
  "活动": "EVT",
  "学院将根据你的背景、时间安排和学习目标提供课程、活动或阅读路径建议。": "The Academy can suggest course, event or reading pathways based on your background, schedule and learning goals.",
  "RG146 学习与澳洲金融从业路径评估": "RG146 learning and Australian finance career pathway review",
  "MT5 EA、MQL5、Python 量化学习路径": "MT5 EA, MQL5 and Python quantitative learning pathway",
  "公开课、线下活动和学员社群了解": "Open classes, offline events and learner community",
  "微信 / 电话 / 邮件": "WeChat / Phone / Email",
  "RG146 学习": "RG146 Learning",
  "量化 EA 编程": "Quant EA Programming",
  "金融知识公开课": "Market Knowledge Open Class",
  "线下活动与社群": "Offline Events & Community",
  "简单说说你的目标或想了解的问题": "Briefly describe your goal or question",
  "学习申请仅用于提供学习路径与活动信息。": "GMA will use your request only to provide learning-path and event information.",
  "已收到您的信息。学院将根据你的学习目标回复，仅用于学习路径、课程或活动沟通。": "Your information has been received. The Academy will respond based on your learning goal, only for learning-path, course or event communication.",
  "澳洲金融教育、市场知识普及与量化技术学习平台。": "Australian financial education, market knowledge and quantitative technology learning platform.",
  "课程": "Courses",
  "内容": "Content",
  "公开课活动": "Open Class Events",
  "品牌": "Brand",
  "联系": "Contact",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。杠杆类金融产品风险较高，可能导致重大资本损失。请在充分了解风险并结合自身情况后审慎决策。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. Leveraged financial products involve high risk and may result in significant capital loss. Please make prudent decisions after fully understanding the risks and your own circumstances.",
  "面向希望了解澳洲金融行业、职业路径和合规知识体系的学习者，提供结构化课程、题库训练与学习支持。": "Structured courses, question-bank training and learning support for learners seeking to understand Australia's finance industry, career pathways and compliance knowledge framework.",
  "RG146 相关学习通常围绕澳洲金融服务行业的合规、产品知识、客户沟通和风险意识展开。GMA 会用清晰语境解释核心概念，并帮助学员判断自己是否适合学习。": "RG146-related learning usually covers compliance, product knowledge, client communication and risk awareness in Australia's financial services industry. GMA explains core concepts in an accessible context and helps learners assess whether the pathway suits them.",
  "适合金融行业入门、留学生职业规划和转岗人群": "Suitable for finance industry entry, international-student career planning and career changers",
  "重点拆解 Generic Knowledge 与 Specialist Knowledge": "Breaks down Generic Knowledge and Specialist Knowledge",
  "通过题库、模拟测试和学习计划提升学习效率": "Improves learning efficiency through question banks, mock tests and study plans",
  "通过题库、模拟测试和学习计划提升理解与复盘效率": "Improves understanding and review efficiency through question banks, mock tests and study plans",
  "将监管、产品与风险知识拆成可执行学习步骤，让学员清楚每个阶段的重点。": "Breaks regulation, product and risk knowledge into actionable learning steps so learners understand each stage.",
  "确认目标岗位、英文基础、学习时间和是否需要从金融基础开始补齐。": "Confirm target role, English foundation, study time and whether finance fundamentals need to be covered first.",
  "覆盖合规框架、产品知识、风险披露、客户沟通和职业伦理等重点。": "Covers compliance frameworks, product knowledge, risk disclosure, client communication and professional ethics.",
  "用互动题库、错题复盘和阶段模拟测试检验掌握程度。": "Uses interactive question banks, mistake review and staged mock tests to check mastery.",
  "通过学员案例、讲师答疑和学习方向评估确认更合适的学习路径。": "Uses learner cases, instructor Q&A and pathway review to confirm a more suitable learning path.",
  "这些主题帮助学习者快速定位 RG146、澳洲金融行业与合规基础。": "These topics help learners locate RG146, Australia's finance industry and compliance foundations quickly.",
  "用问答式结构解释概念、适用人群和学习目的。": "Explains concepts, suitable audiences and learning goals in a Q&A structure.",
  "连接职业规划、留学背景和金融行业入门语境。": "Connects career planning, international-study background and finance-industry entry context.",
  "以教育口径解释监管、持牌主体和合规边界。": "Explains regulation, licensed entities and compliance boundaries from an educational perspective.",
  "课程围绕基础、专项、练习和职业延展组织，可按学员背景调整学习深度。": "The curriculum is organized around foundations, specialist modules, practice and career extension, with depth adjusted by learner background.",
  "模块": "Module",
  "产出": "Outcome",
  "基础认知": "Foundational Understanding",
  "澳洲金融服务行业、AFSL、ASIC、合规框架": "Australian financial services industry, AFSL, ASIC and compliance framework",
  "建立行业地图": "Build an industry map",
  "知识专项": "Knowledge Modules",
  "产品、风险、披露、客户沟通与职业伦理": "Products, risk, disclosure, client communication and professional ethics",
  "形成知识框架": "Build a knowledge framework",
  "题库训练": "Question Bank Training",
  "章节练习、模拟测试、错题复盘": "Chapter practice, mock tests and mistake review",
  "提升答题稳定性": "Improve answer consistency",
  "职业延展": "Career Extension",
  "岗位方向、简历表达、面试沟通": "Role direction, resume language and interview communication",
  "连接学习与职业目标": "Connect learning with career goals",
  "RG146 学习方向评估": "RG146 Pathway Review",
  "确认你适合哪条学习路径": "Confirm the learning pathway that suits you",
  "说明目标岗位、时间安排和基础情况后，学院可提供学习计划参考。": "Share your target role, schedule and foundation so the Academy can provide study-plan references.",
  "学习目标": "Learning Goal",
  "例如：想进入金融行业 / 想了解 RG146 是否适合我": "Example: I want to enter finance / I want to know whether RG146 suits me",
  "发送 RG146 学习意向": "Request RG146 Pathway Review",
  "从交易逻辑到自动化执行，从手写第一个 EA 到策略回测与信号生成，帮助学员建立可复用的量化开发方法。": "From trading logic to automated execution, from writing a first EA to strategy backtesting and signal generation, this pathway helps learners build reusable quantitative development methods.",
  "课程从可操作的研究任务开始，而不是停留在概念解释": "The course begins with practical research tasks, not concept-only explanation",
  "课程突出可复盘的实操流程，适合希望理解 EA、自动化交易和编程研究方法的学习者。": "The course emphasises reviewable practical workflows for learners seeking to understand EA, automated trading and programming research methods.",
  "认识交易逻辑、策略假设、风险控制、回测和实盘之间的差异。": "Understand the differences between trading logic, strategy assumptions, risk controls, backtesting and live execution.",
  "从语法、指标调用、订单管理到完成一个基础 EA。": "Move from syntax, indicator calls and order management to completing a basic EA.",
  "学习数据读取、指标计算、策略回测和信号生成。": "Learn data reading, indicator calculation, strategy backtesting and signal generation.",
  "展示学员 EA 案例和策略思路，形成可交流的学习成果。": "Show learner EA cases and strategy thinking as shareable learning outcomes.",
  "量化课程不承诺交易结果；课程目标是训练学员理解策略、编写程序、验证逻辑并识别模型与执行风险。整体表达坚持教育属性、技术能力建设与风险意识。": "The quant course does not promise trading outcomes; it trains learners to understand strategies, write programs, validate logic and identify model and execution risk. The overall language emphasises education, technical capability and risk awareness.",
  "从零开始搭建 MT5 EA 项目结构": "Build an MT5 EA project structure from scratch",
  "理解回测结果、过拟合和风险参数": "Understand backtest results, overfitting and risk parameters",
  "建立策略日志、迭代记录和复盘习惯": "Build strategy logs, iteration records and review habits",
  "通过社群答疑延长学习周期": "Extend the learning cycle through community Q&A",
  "学习成果以可运行模型、研究记录和复盘报告呈现，强调过程记录与风险说明。": "Learning outputs are presented as working models, research records and review reports, with process records and risk notes emphasized.",
  "EA 项目": "EA Project",
  "Python 项目": "Python Project",
  "作品集": "Portfolio",
  "均线交叉策略 EA": "Moving Average Crossover EA",
  "完成入场、出场、止损、仓位参数和回测记录。": "Complete entry, exit, stop-loss, position parameters and backtest records.",
  "回测": "Backtest",
  "黄金价格信号脚本": "Gold Price Signal Script",
  "使用 Python 读取数据，计算指标并生成信号观察表。": "Use Python to read data, calculate indicators and generate a signal watchlist.",
  "信号": "Signal",
  "策略复盘报告": "Strategy Review Report",
  "记录策略假设、测试区间、参数变化和风险说明。": "Record strategy assumptions, test windows, parameter changes and risk notes.",
  "报告": "Report",
  "风险": "Risk",
  "复盘": "Review",
  "课程可按 4 周营、周末班或一对一形式组织，并根据学员基础调整深度。": "The course can be organized as a four-week cohort, weekend class or one-on-one format, with depth adjusted by learner foundation.",
  "阶段": "Stage",
  "主题": "Topic",
  "练习成果": "Practice Outcome",
  "量化交易基础与 MT5 环境": "Quant trading basics and MT5 environment",
  "完成开发环境与第一个脚本": "Complete the development environment and first script",
  "MQL5 语法、指标与订单函数": "MQL5 syntax, indicators and order functions",
  "写出基础 EA 结构": "Write a basic EA structure",
  "策略回测、参数与风控": "Strategy backtesting, parameters and risk controls",
  "输出回测记录": "Produce a backtest record",
  "Python 信号与作品展示": "Python signals and portfolio showcase",
  "完成课程作品集": "Complete a course portfolio",
  "适合想学习 MQL5、MT5 EA 或 Python 量化入门的学员。": "Suitable for learners who want to start with MQL5, MT5 EA or Python quant.",
  "编程基础": "Programming Foundation",
  "零基础": "No Foundation",
  "会一点 Python": "Some Python",
  "有交易/EA 经验": "Trading / EA Experience",
  "想学习的方向": "Learning Direction",
  "例如：MQL5 EA / Python 回测 / 黄金策略": "Example: MQL5 EA / Python backtesting / gold strategy",
  "发送学习意向": "Send Learning Interest",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。自动化交易和回测结果不代表未来表现。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. Automated trading and backtest results do not represent future performance.",
  "平台训练应记录每一次操作目的、风险参数和复盘结果，避免把技术工具误解成确定性结果。": "Platform training should record purpose, risk parameters and review notes for each action, avoiding the misconception that tools remove market risk.",
  "金融市场知识库": "Financial Market Knowledge Library",
  "知识库用于系统化沉淀监管、产品、宏观与风险教育内容，帮助学习者建立清晰的市场理解框架。": "The knowledge library systematizes regulation, product, macro and risk education so learners can build a clear market-understanding framework.",
  "解释澳洲金融监管、持牌信息、教育内容边界和常见误区。": "Explains Australian financial regulation, licensing information, educational content boundaries and common misconceptions.",
  "合规": "Compliance",
  "CFD 是什么": "What is CFD?",
  "用通俗语言说明差价合约、杠杆、保证金、点差和主要风险。": "Explains contracts for difference, leverage, margin, spread and key risks in plain language.",
  "杠杆": "Leverage",
  "风险": "Risk",
  "介绍 XAUUSD、宏观因素、美元、利率和避险情绪等基础逻辑。": "Introduces the basic logic of XAUUSD, macro factors, the US dollar, interest rates and safe-haven sentiment.",
  "黄金": "Gold",
  "宏观": "Macro",
  "解释 CPI、就业、利率、央行讲话和市场预期如何影响资产。": "Explains how CPI, employment, interest rates, central-bank speeches and market expectations affect assets.",
  "利率": "Rates",
  "央行": "Central Banks",
  "围绕软件界面、订单类型、图表工具和模拟账户做基础教程。": "Provides basic tutorials on software interfaces, order types, chart tools and demo accounts.",
  "图表": "Charts",
  "介绍品牌背景、执行能力、平台支持和教育平台之间的关系。": "Introduces the relationship between brand background, execution capability, platform support and the education platform.",
  "这里不做激进行情观点，不做收益承诺，不把复杂产品说得过度简单。目标是提高理解能力、风险意识和学习兴趣。": "This section avoids aggressive market views, return promises and oversimplification of complex products. The goal is to improve understanding, risk awareness and learning interest.",
  "每篇文章先解释概念，再讲使用场景和风险": "Each article explains the concept first, then usage scenarios and risks",
  "对监管和产品信息保持克制，避免营销化表达": "Keep regulatory and product information restrained and avoid promotional language",
  "文章末尾提供课程、公开课或社群的延伸学习建议，而不是强迫式引导": "Provide extended learning suggestions for courses, open classes or communities rather than forced prompts",
  "这些主题围绕常见金融问题组织，适合持续阅读、公开课延伸和社群讨论。": "These themes are organized around common finance questions and suit continued reading, open-class extension and community discussion.",
  "RG146 学习者如何补齐澳洲金融基础知识": "How RG146 learners can strengthen Australian finance fundamentals",
  "帮助 RG146 学习者建立监管、产品与风险的基础地图。": "Helps RG146 learners build a foundation map of regulation, products and risk.",
  "用所有权、杠杆和成本结构比较常见金融工具。": "Compares common financial instruments through ownership, leverage and cost structure.",
  "黄金价格为什么会受美元和利率影响": "Why gold prices are affected by the US dollar and interest rates",
  "连接宏观数据、利率与黄金研究框架。": "Connects macro data, rates and the gold research framework.",
  "AFSL 554475 代表什么": "What AFSL 554475 represents",
  "用准确、克制的表达理解牌照编号和监管语境。": "Uses accurate, restrained wording to understand licence numbers and regulatory context.",
  "知识库会围绕学习者真实问题持续扩展，沉淀为长期可查阅的研究与教育资料。": "The knowledge library will continue expanding around real learner questions and become long-term research and education material.",
  "选题方向": "Topic Direction",
  "黄金市场": "Gold Market",
  "宏观经济": "Macro Economy",
  "想了解的问题": "Question You Want Answered",
  "发送选题建议": "Send Topic Suggestion",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。差价合约 CFD 和外汇等杠杆产品风险较高，可能导致重大资本损失。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. CFDs and forex are leveraged products with high risk and may result in significant capital loss.",
  "CFD、外汇和股票有什么不同": "What is the difference between CFDs, forex and stocks?",
  "CFD 入门": "CFD Basics",
  "例如：CFD 的保证金怎么理解？": "Example: How should CFD margin be understood?",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。活动内容以教育和知识普及为目的。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. Event content is for education and knowledge sharing.",
  "把 RG146、MQL5、MT5 EA、Python 和市场知识拆成清楚的阶段与学习成果。": "Break RG146, MQL5, MT5 EA, Python and market knowledge into clear stages and learning outcomes.",
  "用适合中文学习者理解的方式解释监管、产品、技术和宏观概念。": "Explain regulation, products, technology and macro concepts in a way learners can understand.",
  "避免收益承诺，强调教育、技术能力、合规边界和独立判断。": "Avoid return promises and emphasize education, technical capability, compliance boundaries and independent judgment.",
  "每个方向都有独立入口，也可以在本页了解整体定位。": "Each direction has its own entry point, and the overall positioning is also explained in this section.",
  "澳洲金融从业知识、学习路径和合规基础": "Australian finance career knowledge, learning pathway and compliance foundations",
  "查看路径": "View Path",
  "MQL5、MT5 EA、Python 策略与回测学习": "MQL5, MT5 EA and Python strategy/backtesting learning",
  "查看课程": "View Course",
  "监管、黄金、宏观、平台工具和基础金融知识": "Regulation, gold, macro, platform tools and foundational financial knowledge",
  "浏览知识": "Browse Knowledge",
  "公开课、线下活动、专业社群和讲师内容": "Open classes, offline events, professional community and instructor content",
  "加入活动": "Join Events",
  "我们可以根据你的背景、城市、时间安排和学习方向，提供更合适的课程、活动或阅读路径建议。": "We can provide suitable course, event or reading-path suggestions based on your background, city, schedule and learning direction.",
  "例如：RG146 / 量化 EA / 公开课 / 社群": "Example: RG146 / Quant EA / Open class / Community",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。请在充分理解风险后做出独立判断。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. Please make independent decisions after fully understanding the risks.",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议、法律意见或任何金融产品推荐。杠杆类金融产品风险较高，可能导致重大资本损失。请在充分了解风险并结合自身情况后审慎决策。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice, legal advice or any financial product recommendation. Leveraged financial products involve high risk and may result in significant capital loss. Please make prudent decisions after fully understanding the risks and your own circumstances.",
});

Object.assign(supplementalTranslations.zh, {
  "Enter Trader Training": "进入交易员训练",
  "训练": "训练",
  "Trader development desk": "交易员发展台",
  "Process": "流程",
  "Trader Development": "交易员发展",
  "Trader Training": "交易员训练",
  "交易员训练": "交易员训练",
  "交易员训练学院": "交易员训练学院",
  "交易员训练学院 | Grand Markets Academy": "交易员训练学院 | Grand Markets Academy",
  "申请评估": "申请评估",
  "训练目标": "训练目标",
  "发送训练意向": "发送训练意向",
  "交易员训练、风险预算、模拟交易台和复盘路径": "交易员训练、风险预算、模拟交易台和复盘路径",
  "例如：交易员训练 / 风险管理 / 模拟交易台 / 交易复盘": "例如：交易员训练 / 风险管理 / 模拟交易台 / 交易复盘",
  "澳洲金融教育、市场知识普及与交易员能力训练平台。": "澳洲金融教育、市场知识普及与交易员能力训练平台。",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。模拟交易、训练评分和复盘模板不代表未来表现。": "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。模拟交易、训练评分和复盘模板不代表未来表现。",
  "THESIS": "假设",
  "Scenario Map": "情景地图",
  "valid / invalid": "有效 / 失效",
  "RISK": "风险",
  "Budget": "预算",
  "size / stop / drawdown": "仓位 / 止损 / 回撤",
  "EXECUTION": "执行",
  "Decision Log": "决策记录",
  "entry / exit / adjust": "入场 / 离场 / 调整",
  "REVIEW": "复盘",
  "Post Trade": "交易后",
  "process / lesson / next": "流程 / 教训 / 下一步",
  "Train judgement": "训练判断",
  "Train Trader Capability": "训练交易员能力",
  "For learners training market judgement, risk budget, execution discipline and review language.": "适合训练市场判断、风险预算、执行纪律和复盘表达的学习者。",
  "Market judgement, risk budget, execution discipline and desk review.": "市场判断、风险预算、执行纪律与交易台复盘。",
  "TRADER TRAINING": "交易员训练",
  "市场判断、风险预算、模拟交易台与复盘训练": "市场判断、风险预算、模拟交易台与复盘训练",
  "查看训练": "查看训练",
});

Object.assign(supplementalTranslations.en, {
  "Enter Trader Training": "Enter Trader Training",
  "交易员训练": "Trader Training",
  "训练": "TRN",
  "Trader development desk": "Trader development desk",
  "Process": "Process",
  "交易员训练学院": "Trader Training Academy",
  "交易员训练学院 | Grand Markets Academy": "Trader Training Academy | Grand Markets Academy",
  "申请评估": "Request Assessment",
  "训练目标": "Training Objective",
  "发送训练意向": "Send Training Interest",
  "交易员训练、风险预算、模拟交易台和复盘路径": "Trader training, risk-budget, simulation-desk and review pathway",
  "例如：交易员训练 / 风险管理 / 模拟交易台 / 交易复盘": "Example: trader training / risk management / simulation desk / trade review",
  "澳洲金融教育、市场知识普及与交易员能力训练平台。": "Australian financial education, market knowledge and trader capability training platform.",
  "风险提示与免责声明：本平台内容仅用于一般金融知识教育与课程信息展示，不构成投资建议、个人财务建议或任何金融产品推荐。模拟交易、训练评分和复盘模板不代表未来表现。": "Risk notice and disclaimer: Academy content is for general financial education and course information only. It does not constitute investment advice, personal financial advice or any financial product recommendation. Simulation trading, training scores and review templates do not represent future performance.",
  "申请训练建议": "Request Training Guidance",
  "查看训练框架": "Review Training Framework",
  "TRADER TRAINING": "TRADER TRAINING",
  "市场判断、风险预算、模拟交易台与复盘训练": "Market judgement, risk budget, simulation desk and review training",
  "查看训练": "View Training",
});

Object.entries(supplementalTranslations).forEach(([lang, entries]) => {
  translations[lang] = { ...(translations[lang] || {}), ...entries };
});

Object.assign(translations.en, {
  "专题内容 | Grand Markets Academy": "Topic | Grand Markets Academy",
  "ASIC 与 AFSL 解析 | Grand Markets Academy": "ASIC and AFSL Explained | Grand Markets Academy",
  "差价合约是什么 | Grand Markets Academy": "What Are CFDs? | Grand Markets Academy",
  "黄金市场基础知识 | Grand Markets Academy": "Gold Market Basics | Grand Markets Academy",
  "宏观经济分析方法论 | Grand Markets Academy": "Macro Analysis Framework | Grand Markets Academy",
  "MT4 / MT5 入门 | Grand Markets Academy": "MT4 / MT5 Basics | Grand Markets Academy",
  "关于 Grand Markets 与 Academy | Grand Markets Academy": "About Grand Markets and the Academy | Grand Markets Academy",
  "RG146 学习者的金融基础补齐 | Grand Markets Academy": "Finance Foundations for RG146 Learners | Grand Markets Academy",
  "差价合约、外汇和股票有什么不同 | Grand Markets Academy": "How CFDs, Forex and Stocks Differ | Grand Markets Academy",
  "黄金价格、美元与利率 | Grand Markets Academy": "Gold, the US Dollar and Interest Rates | Grand Markets Academy",
  "AFSL 554475 代表什么 | Grand Markets Academy": "What AFSL 554475 Represents | Grand Markets Academy",
  "RG146 是什么 | Grand Markets Academy": "What Is RG146? | Grand Markets Academy",
  "澳洲金融从业资格路径 | Grand Markets Academy": "Australian Finance Career Pathway | Grand Markets Academy",
  "ASIC 监管与合规边界 | Grand Markets Academy": "ASIC Regulation and Compliance Boundaries | Grand Markets Academy",
  "均线交叉策略 EA | Grand Markets Academy": "Moving Average Crossover EA | Grand Markets Academy",
  "黄金价格信号脚本 | Grand Markets Academy": "Gold Price Signal Script | Grand Markets Academy",
  "策略复盘报告 | Grand Markets Academy": "Strategy Review Report | Grand Markets Academy",
  "返回知识库": "Back to Knowledge",
  "进入 RG146 路径": "Enter RG146 Pathway",
  "浏览知识库": "Browse Knowledge",
  "查看研究活动": "View Research Events",
  "加入研究简报": "Join Research Briefing",
  "进入量化学院": "Enter Quant Academy",
  "了解关于我们": "Read About Us",
  "继续阅读": "Continue Reading",
  "查看黄金简报": "View Gold Briefing",
  "查看品牌背景": "View Brand Context",
  "进入学习中心": "Enter Learning Centre",
  "查看学院方法": "View Academy Method",
  "继续学习合规": "Continue Compliance Learning",
  "查看课程模块": "View Course Modules",
  "进入交易实验室活动": "Enter Trading Lab Events",
});

const translateText = (source, lang) => {
  const protectedTokens = ["GRAND MARKETS", "Grand Markets", "Grand Markets Group", "Academy", "RG146", "AFSL", "ASIC", "MQL5", "MT5", "EA", "GMA", "WhatsApp", "WeChat", "Python", "XAUUSD", "CPI", "Week", "Backtest", "Signal", "Portfolio", "Report", "Risk", "Review", "Sydney"];
  if (lang === "en") return translations.en?.[source] || source;
  if (lang === "zh") {
    const translated = translations.zh?.[source];
    if (translated) return translated;
    if (/[\u4e00-\u9fff]/.test(source)) return source;
    let protectedSource = source;
    protectedTokens.forEach((token) => {
      protectedSource = protectedSource.replaceAll(token, "");
    });
    if (!/[A-Za-z]/.test(protectedSource)) return source;
    return source;
  }
  const translated = translations[lang]?.[source];
  let protectedSource = source;
  protectedTokens.forEach((token) => {
    protectedSource = protectedSource.replaceAll(token, "");
  });
  if (!/[A-Za-z\u4e00-\u9fff]/.test(protectedSource)) return source;
  if (translated && (lang === "en" || translated !== translations.en?.[source])) return translated;
  const fallback = {
    en: "Details available on request.",
    ja: "詳細はお問い合わせください。",
    ko: "자세한 내용은 문의해 주세요.",
    fr: "Details disponibles sur demande.",
    it: "Dettagli disponibili su richiesta.",
    de: "Details auf Anfrage.",
  };
  return source;
};

const getStoredLanguage = () => {
  try {
    return window.localStorage?.getItem("gma-language") || null;
  } catch {
    return null;
  }
};

const setStoredLanguage = (lang) => {
  try {
    window.localStorage?.setItem("gma-language", lang);
  } catch {
    // Some embedded review contexts disable storage; language switching should still work.
  }
};

const captureSourceText = () => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = node.nodeValue.trim();
      if (!text || !node.parentElement) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE"].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (!node.parentElement.dataset.i18nSource) {
      node.parentElement.dataset.i18nSource = node.nodeValue.trim();
    }
  });

  document.querySelectorAll("input[placeholder], textarea[placeholder]").forEach((element) => {
    if (!element.dataset.i18nPlaceholder) element.dataset.i18nPlaceholder = element.placeholder;
  });
};

const sourceDocumentTitle = document.title;

const SEO_BASE_URL = "https://www.grandmarkets.com/academy";
const SEO_LOGO_URL = `${SEO_BASE_URL}/assets/gm-logo-full.png`;

const seoProfiles = {
  "index.html": {
    zh: {
      title: "Grand Markets Academy | 精品金融教育学院、RG146 与交易员训练",
      description: "Grand Markets Academy 是面向金融从业者、交易学习者与量化技术学习者的精品金融教育学院，提供 RG146、交易员训练、量化实验室、金融知识库与专业活动。",
      keywords: "Grand Markets Academy, 精品金融教育学院, RG146, 澳洲金融教育, 交易员训练, 量化交易, EA 编程, 金融知识库",
      label: "首页",
    },
    en: {
      title: "Grand Markets Academy | Boutique Finance Academy, RG146 and Trader Training",
      description: "Grand Markets Academy is a boutique finance education academy for finance professionals, trading learners and quantitative technology learners, with RG146, trader training, Quant Lab, market knowledge and professional events.",
      keywords: "Grand Markets Academy, boutique finance academy, RG146, Australian finance education, trader training, quantitative trading, EA programming, market knowledge",
      label: "Home",
    },
  },
  "rg146.html": {
    zh: {
      title: "RG146 学习中心 | 澳洲金融从业知识与合规表达",
      description: "系统理解 RG146 学习路径、澳洲金融服务语境、建议类型边界、产品知识、题库复盘和职业表达训练，适合规划澳洲金融行业入门与合规学习的人群。",
      keywords: "RG146 学习, 澳洲金融从业, ASIC, AFSL, 金融合规, 金融产品知识",
      label: "RG146 学习中心",
      course: "RG146 Professional Learning Pathway",
    },
    en: {
      title: "RG146 Learning Centre | Australian Finance Compliance Pathway",
      description: "Understand RG146 learning, Australian financial-services context, advice boundaries, product knowledge, question review and professional communication.",
      keywords: "RG146 learning, Australian financial services, ASIC, AFSL, finance compliance, financial product knowledge",
      label: "RG146 Learning Centre",
      course: "RG146 Professional Learning Pathway",
    },
  },
  "quant.html": {
    zh: {
      title: "量化 EA 编程学院 | MQL5、MT5 EA 与 Python 研究",
      description: "学习 MQL5、MT5 EA、Python 量化、策略回测、研究日志、模型治理与自动化交易系统风险边界，建立可审计、可复盘的交易研究流程。",
      keywords: "量化交易课程, MQL5, MT5 EA, Python 量化, 回测, 自动化交易, 模型治理",
      label: "量化学院",
      course: "Quant EA Programming Academy",
    },
    en: {
      title: "Quant EA Programming Academy | MQL5, MT5 EA and Python Research",
      description: "Learn MQL5, MT5 EA, Python quant research, strategy backtesting, research logs, model governance and automation risk boundaries.",
      keywords: "quant trading course, MQL5, MT5 EA, Python quant, backtesting, automated trading, model governance",
      label: "Quant Academy",
      course: "Quant EA Programming Academy",
    },
  },
  "traders.html": {
    zh: {
      title: "交易员训练学院 | 风险预算、模拟交易台与复盘训练",
      description: "建立市场结构、概率思维、风险预算、执行纪律、交易日志、模拟交易台和专业交易员复盘框架，训练更稳健的市场判断和风险管理能力。",
      keywords: "交易员训练, prop firm training, 风险预算, 模拟交易, 交易复盘, 市场结构",
      label: "交易员训练",
      course: "Trader Training Academy",
    },
    en: {
      title: "Trader Training Academy | Risk Budget, Simulation Desk and Review",
      description: "Build market structure, probabilistic thinking, risk budgeting, execution discipline, trade journals and trader review frameworks.",
      keywords: "trader training, prop firm training, risk budget, simulation desk, trade review, market structure",
      label: "Trader Training",
      course: "Trader Training Academy",
    },
  },
  "knowledge.html": {
    zh: {
      title: "金融市场知识库 | ASIC、AFSL、黄金、宏观与产品风险",
      description: "用研究导向方式学习 ASIC、AFSL、差价合约、黄金市场、宏观经济、MT4/MT5、资料来源和风险语言，先理解机制与风险，再进入课程或专题阅读。",
      keywords: "金融知识库, ASIC, AFSL, 差价合约, 黄金市场, 宏观经济, MT5 入门",
      label: "金融知识库",
    },
    en: {
      title: "Financial Market Knowledge Library | ASIC, AFSL, Gold and Macro",
      description: "Research-led learning on ASIC, AFSL, CFDs, gold markets, macroeconomics, MT4/MT5, source quality and risk language.",
      keywords: "financial market knowledge, ASIC, AFSL, CFDs, gold market, macroeconomics, MT5 basics",
      label: "Knowledge Library",
    },
  },
  "events.html": {
    zh: {
      title: "活动与专业社群中心 | 金融公开课、研究简报与工作坊",
      description: "查看 Grand Markets Academy 公开课、线下活动、金融研究简报、量化工作坊、交易实验室和专业社群活动。",
      keywords: "金融公开课, 量化工作坊, 交易实验室, 金融社群, RG146 活动, 市场研究简报",
      label: "活动社群",
    },
    en: {
      title: "Events and Professional Community | Finance Briefings and Workshops",
      description: "Explore open sessions, finance research briefings, quant workshops, trading labs and professional community events at Grand Markets Academy.",
      keywords: "finance events, quant workshops, trading lab, professional community, RG146 events, market research briefing",
      label: "Events",
    },
  },
  "compliance.html": {
    zh: {
      title: "合规与风险管理中心 | 金融教育边界、AFSL 核验与风险提示",
      description: "说明金融教育内容边界、一般建议与个人建议区别、AFSL 背景核验、澳洲与中国语境、杠杆产品风险提示和课程咨询红线。",
      keywords: "金融合规, 风险管理, AFSL 核验, 一般建议, 个人建议, 投资者适当性",
      label: "合规中心",
    },
    en: {
      title: "Compliance and Risk Management Centre | Education Boundaries and AFSL Checks",
      description: "Clarify education boundaries, general and personal advice, AFSL verification, Australia and China context and leveraged-product risk notices.",
      keywords: "financial compliance, risk management, AFSL verification, general advice, personal advice, investor suitability",
      label: "Compliance Centre",
    },
  },
  "about.html": {
    zh: {
      title: "关于 Grand Markets Academy | 精品金融教育学院与品牌背景",
      description: "了解 Grand Markets Academy 的教育定位、澳洲金融服务语境、内容治理、课程方向、合规边界和联系方法。",
      keywords: "Grand Markets Academy, 金融教育学院, 澳洲金融服务, 品牌背景, 课程咨询",
      label: "关于我们",
    },
    en: {
      title: "About Grand Markets Academy | Boutique Finance Education Academy",
      description: "Learn about Grand Markets Academy, its education positioning, Australian financial-services context, content governance, learning tracks and enquiry routes.",
      keywords: "Grand Markets Academy, finance education academy, Australian financial services, brand background, course enquiry",
      label: "About Us",
    },
  },
  "topic.html": {
    zh: {
      title: "金融知识专题 | Grand Markets Academy",
      description: "阅读 Grand Markets Academy 金融知识专题，学习监管、产品、黄金、宏观、平台、量化和风险管理内容。",
      keywords: "金融知识专题, ASIC, AFSL, CFD, 黄金, 宏观, 量化, 风险管理",
      label: "专题内容",
    },
    en: {
      title: "Finance Knowledge Topic | Grand Markets Academy",
      description: "Read Grand Markets Academy finance knowledge topics on regulation, products, gold, macro, platforms, quant and risk management.",
      keywords: "finance knowledge topic, ASIC, AFSL, CFD, gold, macro, quant, risk management",
      label: "Topic",
    },
  },
};

const seoClusterProfiles = {
  "index.html": [
    ["RG146 学习路径", "RG146 professional pathway", "rg146.html"],
    ["量化 EA 编程课程", "Quant EA programming", "quant.html"],
    ["交易员训练框架", "Trader training framework", "traders.html"],
    ["金融市场知识库", "Financial market knowledge", "knowledge.html"],
  ],
  "rg146.html": [
    ["RG146 适用范围", "RG146 scope", "rg146.html#role-fit"],
    ["ASIC 与 AFSL 解析", "ASIC and AFSL explained", "topic.html?article=asic-afsl"],
    ["合规与风险管理", "Compliance and risk management", "compliance.html"],
    ["RG146 路径评估", "Request RG146 pathway review", "rg146.html#contact"],
  ],
  "quant.html": [
    ["MQL5 EA 架构", "MQL5 EA architecture", "quant.html#ea-architecture"],
    ["Python 量化研究", "Python quant research", "quant.html#python-research"],
    ["交易员训练衔接", "Trader training continuity", "traders.html"],
    ["策略复盘报告", "Strategy review report", "topic.html?article=strategy-review"],
  ],
  "traders.html": [
    ["交易员训练手册", "Trader playbook", "traders.html#playbook"],
    ["风险预算训练", "Risk-budget training", "traders.html#risk-ladder"],
    ["交易复盘日志", "Trade review journal", "traders.html#journal"],
    ["量化学院衔接", "Quant Academy continuity", "quant.html"],
  ],
  "knowledge.html": [
    ["ASIC 与 AFSL", "ASIC and AFSL", "topic.html?article=asic-afsl"],
    ["差价合约风险", "CFD risk education", "topic.html?article=cfd-basics"],
    ["黄金市场基础", "Gold market basics", "topic.html?article=gold-market"],
    ["宏观分析框架", "Macro analysis framework", "topic.html?article=macro-framework"],
  ],
  "events.html": [
    ["RG146 公开课", "RG146 open session", "events.html#programme-formats"],
    ["量化工作坊", "Quant workshop", "events.html#programme-formats"],
    ["市场研究简报", "Market research briefing", "events.html#annual-programme"],
    ["申请参加活动", "Request event access", "events.html#contact"],
  ],
  "compliance.html": [
    ["教育内容边界", "Education boundary", "compliance.html#principles"],
    ["AFSL 背景核验", "AFSL context verification", "compliance.html#afsl-boundary"],
    ["风险管理清单", "Risk checklist", "compliance.html#checklist"],
    ["官方资料入口", "Official sources", "compliance.html#sources"],
  ],
  "about.html": [
    ["机构背景", "Institutional profile", "about.html#institutional-profile"],
    ["内容治理", "Content governance", "about.html#governance-architecture"],
    ["学习方向", "Learning directions", "about.html#learning-directions"],
    ["学习方向评估", "Pathway review", "about.html#contact"],
  ],
  "topic.html": [
    ["返回知识库", "Back to knowledge library", "knowledge.html"],
    ["RG146 学习中心", "RG146 Learning Centre", "rg146.html"],
    ["量化学院", "Quant Academy", "quant.html"],
    ["合规中心", "Compliance Centre", "compliance.html"],
  ],
};

const getActiveTopic = () => {
  if (currentPage !== "topic.html") return null;
  return document.querySelector(".topic-article.active") || document.querySelector(".topic-article");
};

const getSeoProfile = (lang) => {
  const base = seoProfiles[currentPage]?.[lang] || seoProfiles["index.html"][lang];
  const topic = getActiveTopic();
  if (!topic) return base;
  const title = topic.dataset[lang === "zh" ? "titleZh" : "titleEn"] || base.label;
  const summary = topic.dataset[lang === "zh" ? "summaryZh" : "summaryEn"] || base.description;
  const topicDescription = lang === "zh"
    ? `${summary} 结合资料来源、风险边界和学习路径，帮助学习者用更系统、更审慎的方式理解金融市场。`
    : summary;
  return {
    ...base,
    title: `${title} | Grand Markets Academy`,
    description: topicDescription,
    label: title,
    keywords: `${base.keywords}, ${title}`,
  };
};

const pageUrl = (lang, includeLang = true) => {
  const params = new URLSearchParams();
  if (currentPage === "topic.html") {
    const article = new URLSearchParams(location.search).get("article") || getActiveTopic()?.dataset.topic || "asic-afsl";
    params.set("article", article);
  }
  if (includeLang) params.set("lang", lang);
  const query = params.toString();
  const path = currentPage === "index.html" ? "" : currentPage;
  return `${SEO_BASE_URL}/${path}${query ? `?${query}` : ""}`;
};

const ensureMeta = (selector, createTag, attr, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(createTag);
    document.head.appendChild(element);
  }
  Object.entries(attr).forEach(([key, val]) => element.setAttribute(key, val));
  if (value !== undefined) element.setAttribute("content", value);
  return element;
};

const setMetaName = (name, content) => ensureMeta(`meta[name="${name}"]`, "meta", { name }, content);
const setMetaProperty = (property, content) => ensureMeta(`meta[property="${property}"]`, "meta", { property }, content);

const setLink = (selector, attrs) => {
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement("link");
    document.head.appendChild(link);
  }
  Object.entries(attrs).forEach(([key, value]) => link.setAttribute(key, value));
  return link;
};

const buildStructuredData = (lang, profile) => {
  const inLanguage = lang === "zh" ? "zh-CN" : "en";
  const currentUrl = pageUrl(lang);
  const homeUrl = `${SEO_BASE_URL}/?lang=${lang}`;
  const graph = [
    {
      "@type": "EducationalOrganization",
      "@id": `${SEO_BASE_URL}/#organization`,
      name: "Grand Markets Academy",
      url: SEO_BASE_URL,
      logo: SEO_LOGO_URL,
      sameAs: ["https://www.grandmarkets.com/"],
      slogan: "Your Vision. Global Execution.",
    },
    {
      "@type": "WebSite",
      "@id": `${SEO_BASE_URL}/#website`,
      name: "Grand Markets Academy",
      url: SEO_BASE_URL,
      publisher: { "@id": `${SEO_BASE_URL}/#organization` },
      inLanguage,
    },
    {
      "@type": currentPage === "knowledge.html" ? "CollectionPage" : currentPage === "topic.html" ? "Article" : "WebPage",
      "@id": `${currentUrl}#webpage`,
      url: currentUrl,
      name: profile.title,
      headline: profile.label,
      description: profile.description,
      inLanguage,
      isPartOf: { "@id": `${SEO_BASE_URL}/#website` },
      publisher: { "@id": `${SEO_BASE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      itemListElement: currentPage === "index.html"
        ? [{ "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: homeUrl }]
        : [
          { "@type": "ListItem", position: 1, name: lang === "zh" ? "首页" : "Home", item: homeUrl },
          { "@type": "ListItem", position: 2, name: profile.label, item: currentUrl },
        ],
    },
  ];

  if (profile.course) {
    graph.push({
      "@type": "Course",
      "@id": `${currentUrl}#course`,
      name: profile.course,
      description: profile.description,
      provider: { "@id": `${SEO_BASE_URL}/#organization` },
      educationalLevel: "Professional education",
      inLanguage,
      teaches: profile.keywords,
    });
  }

  if (currentPage === "index.html") {
    graph.push({
      "@type": "ItemList",
      "@id": `${currentUrl}#learning-tracks`,
      name: lang === "zh" ? "Grand Markets Academy 学习路径" : "Grand Markets Academy Learning Tracks",
      itemListElement: ["rg146.html", "quant.html", "traders.html", "knowledge.html", "events.html", "compliance.html"].map((page, index) => {
        const itemProfile = seoProfiles[page][lang];
        return { "@type": "ListItem", position: index + 1, name: itemProfile.label, url: `${SEO_BASE_URL}/${page}?lang=${lang}` };
      }),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

const applySeo = (lang) => {
  const profile = getSeoProfile(lang);
  const currentUrl = pageUrl(lang);
  document.title = profile.title;
  setMetaName("description", profile.description);
  setMetaName("keywords", profile.keywords);
  setMetaName("robots", "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
  setMetaName("author", "Grand Markets Academy");
  setMetaName("theme-color", "#f6c517");
  setMetaProperty("og:site_name", "Grand Markets Academy");
  setMetaProperty("og:type", currentPage === "topic.html" ? "article" : "website");
  setMetaProperty("og:title", profile.title);
  setMetaProperty("og:description", profile.description);
  setMetaProperty("og:url", currentUrl);
  setMetaProperty("og:image", SEO_LOGO_URL);
  setMetaProperty("og:locale", lang === "zh" ? "zh_CN" : "en_AU");
  setMetaName("twitter:card", "summary_large_image");
  setMetaName("twitter:title", profile.title);
  setMetaName("twitter:description", profile.description);
  setMetaName("twitter:image", SEO_LOGO_URL);
  setLink('link[rel="canonical"]', { rel: "canonical", href: currentUrl });
  setLink('link[rel="alternate"][hreflang="zh-CN"]', { rel: "alternate", hreflang: "zh-CN", href: pageUrl("zh") });
  setLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: pageUrl("en") });
  setLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: pageUrl("en") });

  let ld = document.head.querySelector('script[type="application/ld+json"][data-seo-json]');
  if (!ld) {
    ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.dataset.seoJson = "true";
    document.head.appendChild(ld);
  }
  ld.textContent = JSON.stringify(buildStructuredData(lang, profile));
};

const normalizeLanguage = (lang) => (languages.some(([code]) => code === lang) ? lang : "zh");

const decorateInternalLinks = (lang) => {
  document.querySelectorAll("a[href]").forEach((link) => {
    if (!link.dataset.baseHref) link.dataset.baseHref = link.getAttribute("href") || "";
    const original = link.dataset.baseHref;
    if (!original || /^(https?:|mailto:|tel:|#)/i.test(original)) return;

    const hashIndex = original.indexOf("#");
    const pathAndQuery = hashIndex >= 0 ? original.slice(0, hashIndex) : original;
    const hash = hashIndex >= 0 ? original.slice(hashIndex) : "";
    if (!pathAndQuery.includes(".html")) return;

    const queryIndex = pathAndQuery.indexOf("?");
    const path = queryIndex >= 0 ? pathAndQuery.slice(0, queryIndex) : pathAndQuery;
    const query = queryIndex >= 0 ? pathAndQuery.slice(queryIndex + 1) : "";
    const params = new URLSearchParams(query);
    params.set("lang", lang);
    const queryString = params.toString();
    link.setAttribute("href", `${path}${queryString ? `?${queryString}` : ""}${hash}`);
  });
};

const applyLanguage = (lang) => {
  lang = normalizeLanguage(lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.title = translateText(sourceDocumentTitle, lang);
  document.querySelectorAll("[data-i18n-source]").forEach((element) => {
    element.textContent = translateText(element.dataset.i18nSource, lang);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translateText(element.dataset.i18nPlaceholder, lang);
  });
  document.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.classList.toggle("active", button.dataset.langOption === lang);
  });
  const current = languages.find(([code]) => code === lang)?.[1] || "中文";
  const label = document.querySelector("[data-language-current]");
  if (label) label.textContent = current;
  syncResponsiveTableLabels();
  decorateInternalLinks(lang);
  setStoredLanguage(lang);
  applySeo(lang);
};

const syncResponsiveTableLabels = () => {
  document.querySelectorAll("table").forEach((table) => {
    const headers = Array.from(table.querySelectorAll("thead th")).map((th) => th.textContent.trim());
    table.querySelectorAll("tbody tr").forEach((row) => {
      Array.from(row.children).forEach((cell, index) => {
        if (headers[index]) cell.dataset.label = headers[index];
      });
    });
  });
};

const decisionPaths = {
  career: {
    code: "01",
    href: "rg146.html",
    zh: {
      tab: "职业合规",
      title: "建议从 RG146 路径开始",
      copy: "适合想进入澳洲金融行业、补齐合规语言、理解 AFSL/ASIC 语境，并建立专业表达边界的学习者。",
      output: "你将看到：角色诊断、适用范围、通用知识、专项产品、表达训练、学习证据和职业学习顺序。",
      primary: "查看 RG146 路径",
      secondary: "咨询学习路径",
    },
    en: {
      tab: "Career Compliance",
      title: "Start with the RG146 pathway",
      copy: "For learners entering Australian financial services, building compliance language, AFSL/ASIC context and professional communication boundaries.",
      output: "You will see role diagnosis, scope boundaries, generic knowledge, specialist products, language training, evidence portfolio and professional learning sequence.",
      primary: "View RG146 Pathway",
      secondary: "Request Guidance",
    },
  },
  systems: {
    code: "03",
    href: "quant.html",
    zh: {
      tab: "交易系统",
      title: "进入交易实验室做系统化训练",
      copy: "适合已有市场基础、希望用 MQL5、EA、Python、回测和复盘框架训练交易执行与风险管理的人。",
      output: "你将看到：研究管线、EA 分层架构、Python 实验台、回测边界、模型治理、作品证据和风险复盘模板。",
      primary: "进入交易实验室",
      secondary: "咨询训练安排",
    },
    en: {
      tab: "Trading Systems",
      title: "Enter the Trading Lab for structured practice",
      copy: "For learners with market foundations who want MQL5, EA, Python, backtesting and review frameworks for execution and risk management.",
      output: "You will see the research pipeline, layered EA architecture, Python research desk, backtest boundaries, model governance, portfolio evidence and risk-review templates.",
      primary: "Enter Trading Lab",
      secondary: "Discuss Training Fit",
    },
  },
  trader: {
    code: "02",
    href: "traders.html",
    zh: {
      tab: "交易员训练",
      title: "进入交易员训练做风险与执行训练",
      copy: "适合希望训练市场结构、概率判断、风险预算、执行纪律、交易日志和模拟交易台复盘的人。",
      output: "你将看到：交易员能力地图、训练手册、风险晋级、日志模板、模拟交易台日程、评分卡和与量化学院的衔接方式。",
      primary: "进入交易员训练",
      secondary: "咨询训练路径",
    },
    en: {
      tab: "Trader Training",
      title: "Enter trader training for risk and execution discipline",
      copy: "For learners who want market structure, probabilistic judgement, risk budget, execution discipline, trade journals and simulation-desk review.",
      output: "You will see the trader capability map, playbooks, risk ladder, journal template, simulation-desk rhythm, scorecard and how it connects with the Quant Academy.",
      primary: "Enter Trader Training",
      secondary: "Discuss Training Path",
    },
  },
  market: {
    code: "04",
    href: "knowledge.html",
    zh: {
      tab: "市场研究",
      title: "先建立市场知识与风险地图",
      copy: "适合希望先理解金融产品、宏观变量、黄金外汇、流动性、杠杆风险和资料来源质量的学习者。",
      output: "你将看到：知识研究台、资料来源协议、产品结构、宏观阅读、风险清单、研究笔记模板和阅读路径分流。",
      primary: "阅读金融知识",
      secondary: "咨询阅读路径",
    },
    en: {
      tab: "Market Research",
      title: "Build a market knowledge and risk map first",
      copy: "For learners who want product structure, macro variables, gold and FX context, liquidity, leverage risk and source-quality discipline.",
      output: "You will see the knowledge desk, source protocol, product structure, macro reading, risk checklists, research note template and reading pathways.",
      primary: "Read Market Knowledge",
      secondary: "Ask For Reading Path",
    },
  },
  community: {
    code: "05",
    href: "events.html",
    zh: {
      tab: "活动社群",
      title: "从公开课与活动低成本进入",
      copy: "适合想先观察讲师风格、学习氛围、研究主题和同频社群，再决定是否进入正式课程的人。",
      output: "你将看到：活动学习系统、项目格式、参与者旅程、会前材料、现场交付、合规边界和社群跟进。",
      primary: "查看活动安排",
      secondary: "了解活动安排",
    },
    en: {
      tab: "Community Events",
      title: "Begin with open sessions and community programmes",
      copy: "For learners who want to observe faculty style, learning culture, research themes and peer context before committing to a formal track.",
      output: "You will see the event operating system, programme formats, attendee journey, pre-session material, live delivery, compliance boundaries and community follow-up.",
      primary: "View Events",
      secondary: "Explore Event Options",
    },
  },
};

const buildSeoBreadcrumbs = () => {
  if (document.querySelector("[data-seo-breadcrumbs]")) return;
  const profileZh = getSeoProfile("zh");
  const profileEn = getSeoProfile("en");
  const breadcrumb = document.createElement("nav");
  breadcrumb.className = "seo-breadcrumbs";
  breadcrumb.dataset.seoBreadcrumbs = "true";
  breadcrumb.setAttribute("aria-label", "Breadcrumb");
  const zhTrail = currentPage === "index.html"
    ? `<a href="index.html">首页</a>`
    : currentPage === "topic.html"
      ? `<a href="index.html">首页</a><span>金融知识库</span><span>${profileZh.label}</span>`
      : `<a href="index.html">首页</a><span>${profileZh.label}</span>`;
  const enTrail = currentPage === "index.html"
    ? `<a href="index.html">Home</a>`
    : currentPage === "topic.html"
      ? `<a href="index.html">Home</a><span>Knowledge Library</span><span>${profileEn.label}</span>`
      : `<a href="index.html">Home</a><span>${profileEn.label}</span>`;
  breadcrumb.innerHTML = `
    <div class="section-inner">
      <div data-lang-panel="zh">${zhTrail}</div>
      <div data-lang-panel="en">${enTrail}</div>
    </div>
  `;
  document.querySelector(".site-header")?.insertAdjacentElement("afterend", breadcrumb);
};

const inferFormPath = (form) => {
  const text = Array.from(form.querySelectorAll("input, select, textarea"))
    .map((field) => field.value || field.placeholder || "")
    .join(" ")
    .toLowerCase();
  if (/trader|trading desk|simulation desk|risk budget|execution|trade review|交易员|交易員|交易台|模拟交易台|模擬交易台|风险预算|風險預算|执行纪律|執行紀律|交易复盘|交易復盤/.test(text)) return "trader";
  if (/rg146|afsl|asic|合规|职业|从业|证书|證書/.test(text)) return "career";
  if (/quant|mql|ea|python|mt4|mt5|量化|回测|回測|编程|編程|系统|系統/.test(text)) return "systems";
  if (/event|workshop|community|seminar|活动|活動|公开课|公開課|社群|讲座|講座/.test(text)) return "community";
  if (/knowledge|research|market|macro|gold|fx|知识|知識|市场|市場|宏观|宏觀|黄金|外汇|外匯/.test(text)) return "market";
  return "career";
};

const showSubmissionGuidance = (form) => {
  const key = inferFormPath(form);
  const path = decisionPaths[key] || decisionPaths.career;
  const lang = normalizeLanguage(new URLSearchParams(location.search).get("lang") || getStoredLanguage());
  const note = form.querySelector("[data-form-note]");
  if (note) {
    note.setAttribute("aria-live", "polite");
    note.textContent = lang === "zh"
      ? "已收到你的信息。学院将根据学习目标回复，仅用于课程、活动或学习路径沟通。"
      : "Received. The Academy will respond based on your learning objective, only for course, event or learning-path communication.";
  }

  let guidance = form.querySelector("[data-submission-guidance]");
  if (!guidance) {
    guidance = document.createElement("div");
    guidance.className = "submission-guidance";
    guidance.dataset.submissionGuidance = "true";
    form.appendChild(guidance);
  }
  guidance.innerHTML = `
    <div data-lang-panel="zh">
      <span>建议下一步</span>
      <h3>${path.zh.title}</h3>
      <p>${path.zh.output}</p>
    </div>
    <div data-lang-panel="en">
      <span>Recommended Next Step</span>
      <h3>${path.en.title}</h3>
      <p>${path.en.output}</p>
    </div>
    <div class="submission-actions">
      <a class="button secondary" href="${path.href}"><span data-lang-panel="zh">${path.zh.primary}</span><span data-lang-panel="en">${path.en.primary}</span></a>
      <a class="button secondary" href="compliance.html"><span data-lang-panel="zh">先看合规边界</span><span data-lang-panel="en">Review Compliance Boundary</span></a>
    </div>
  `;
  applyLanguage(lang);
  showInteractionToast("已生成下一步路径建议", "Next-step pathway guidance generated");
  guidance.scrollIntoView({ block: "nearest", behavior: "smooth" });
};

const getActiveLanguage = () => {
  if (document.documentElement.lang === "en") return "en";
  if (document.documentElement.lang === "zh-CN") return "zh";
  const queryLanguage = new URLSearchParams(location.search).get("lang");
  if (queryLanguage) return normalizeLanguage(queryLanguage);
  return normalizeLanguage(getStoredLanguage() || "zh");
};

const buildInteractionToast = () => {
  if (document.querySelector("[data-interaction-toast]")) return document.querySelector("[data-interaction-toast]");
  const toast = document.createElement("div");
  toast.className = "interaction-toast";
  toast.dataset.interactionToast = "true";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);
  return toast;
};

let interactionToastTimer = null;
const showInteractionToast = (zhText, enText) => {
  const toast = buildInteractionToast();
  toast.textContent = getActiveLanguage() === "en" ? enText : zhText;
  toast.classList.add("show");
  window.clearTimeout(interactionToastTimer);
  interactionToastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1900);
};

const getHashTarget = (hash) => {
  if (!hash || hash === "#") return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return document.getElementById(hash.slice(1));
  }
};

const flashTarget = (target) => {
  if (!target) return;
  target.classList.add("is-target-highlight");
  window.setTimeout(() => target.classList.remove("is-target-highlight"), 1700);
};

const scrollToTarget = (target, smooth = true) => {
  if (!target) return;
  const top = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - 96);
  flashTarget(target);
  const runScroll = (useSmooth = smooth) => {
    try {
      if (useSmooth && "scrollBehavior" in document.documentElement.style) {
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        window.scrollTo(0, top);
      }
    } catch {
      window.scrollTo(0, top);
    }
  };
  runScroll(smooth);
  window.setTimeout(() => runScroll(false), 160);
  window.setTimeout(() => runScroll(false), 520);
  /*
    Browser automation and some embedded webviews can restore the clicked
    element's viewport position after the click event. A delayed numeric
    fallback keeps deep links reliable without changing normal browser usage.
  */
  window.setTimeout(() => runScroll(false), 920);
  try {
    if (smooth && "scrollBehavior" in document.documentElement.style) {
      window.setTimeout(() => {
        if (Math.abs(window.pageYOffset - top) > 24) window.scrollTo(0, top);
      }, 180);
    }
  } catch {
    window.scrollTo(0, top);
  }
};

const bindInteractionFeedback = () => {
  if (document.documentElement.dataset.interactionFeedbackBound) return;
  document.documentElement.dataset.interactionFeedbackBound = "true";

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-decision-option], [data-lang-option]")) return;
    if (event.target.closest('button[type="submit"]')?.closest("[data-demo-form]")) return;

    const link = event.target.closest("a[href]");
    if (!link) return;
    const rawHref = link.getAttribute("href") || "";
    if (!rawHref || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:")) return;

    if (rawHref.startsWith("#")) {
      const target = getHashTarget(rawHref);
      if (target) {
        event.preventDefault();
        if (location.hash !== rawHref) history.pushState(null, "", rawHref);
        scrollToTarget(target);
        showInteractionToast("已定位到对应内容", "Section opened");
      }
      return;
    }

    let url;
    try {
      url = new URL(rawHref, location.href);
    } catch {
      return;
    }

    if (url.origin === location.origin && url.pathname === location.pathname && url.hash) {
      const target = getHashTarget(url.hash);
      if (target) {
        event.preventDefault();
        history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
        scrollToTarget(target);
        showInteractionToast("已定位到对应内容", "Section opened");
      }
    } else if (url.origin === location.origin || rawHref.includes(".html")) {
      showInteractionToast("正在打开对应页面", "Opening the selected page");
    } else {
      showInteractionToast("正在打开官方资料来源", "Opening official reference source");
    }
  });

  window.addEventListener("hashchange", () => {
    const target = getHashTarget(location.hash);
    if (target) scrollToTarget(target);
  });

  if (location.hash) {
    window.setTimeout(() => {
      const target = getHashTarget(location.hash);
      if (target) scrollToTarget(target, false);
    }, 400);
  }
};

const bindScrollFlow = () => {
  if (document.documentElement.dataset.scrollFlowBound) return;
  document.documentElement.dataset.scrollFlowBound = "true";

  const sections = [...document.querySelectorAll("main > section:not(.hero)")];
  if (!sections.length) return;

  sections.forEach((section, index) => {
    section.classList.add("flow-section");
    section.style.setProperty("--flow-index", String(index));
  });

  const revealVisibleSections = () => {
    const viewportTrigger = window.innerHeight * 0.92;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < viewportTrigger && rect.bottom > 0) section.classList.add("flow-visible");
    });
  };

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach((section) => section.classList.add("flow-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("flow-visible");
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.12
  });

  sections.forEach((section) => observer.observe(section));
  window.requestAnimationFrame(revealVisibleSections);
  window.setTimeout(revealVisibleSections, 160);
  window.addEventListener("scroll", revealVisibleSections, { passive: true });
};

const buildLanguageWidget = () => {
  const widget = document.createElement("div");
  widget.className = "language-widget";
  widget.innerHTML = `
    <div class="language-menu" aria-label="Language options">
      ${languages.map(([code, label]) => `<button type="button" data-lang-option="${code}"><span>${label}</span><span>${code.toUpperCase()}</span></button>`).join("")}
    </div>
    <button class="language-toggle" type="button" aria-label="Language" aria-expanded="false"><span class="language-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21"></path><path d="M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21"></path></svg></span><span data-language-current>中文</span></button>
  `;
  document.body.appendChild(widget);

  const toggleButton = widget.querySelector(".language-toggle");
  toggleButton.addEventListener("click", () => {
    const isOpen = widget.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  widget.querySelectorAll("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langOption);
      showInteractionToast(button.dataset.langOption === "zh" ? "已切换为中文" : "Language switched to English", "Language switched to English");
      widget.classList.remove("open");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
};

buildSeoBreadcrumbs();
buildLanguageWidget();
buildInteractionToast();
captureSourceText();
const queryLanguage = new URLSearchParams(location.search).get("lang");
applyLanguage(normalizeLanguage(queryLanguage || getStoredLanguage()));
bindInteractionFeedback();
bindScrollFlow();

document.querySelectorAll("[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showSubmissionGuidance(form);
  });
});
