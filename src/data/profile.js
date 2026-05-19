// ╔══════════════════════════════════════════════════════════════╗
// ║  個人網站資料中心 — 只要改這個檔，全站就會自動更新           ║
// ║  Edit this file to update all sections of the website.       ║
// ╚══════════════════════════════════════════════════════════════╝

export const profile = {
  name: '潘柏睿 Ray Pan',
  initials: 'RP',
  title: 'AI / Backend Engineer',
  tagline:
    '橫跨後端工程與 AI 開發的跨域整合者 — 既能用 Java 把系統穩穩交付上線，也能用 PyTorch 把模型從零訓練到部署。',
  location: '台北市大安區 · Taipei, Taiwan',
  email: 'raypan891108@gmail.com',
  github: 'https://github.com/raypan891108',
  resumeUrl: '#',                            // ← 若有 PDF 履歷，放這裡
}

// ───────── 經歷 (Experience) ─────────
export const experiences = [
  {
    role: '後端工程實習生',
    company: '精誠隨想行動科技股份有限公司',
    period: '2023/07 – 2024/06 · 1 年',
    description:
      '以 Java Spring Framework 為核心，負責 RESTful API 設計、商業邏輯實作與資料存取層開發；主動審視 SQL 查詢效能瓶頸並進行索引優化；建立 Postman API 回歸測試流程；參與 Code Review 與 PR 審查。從「需要被 review」進步到能「review 同儕 PR」的角色。',
    tags: ['Java', 'Spring', 'MySQL', 'MS SQL', 'Git', 'Postman', 'ReactJS'],
  },
  {
    role: '數學 / 生物科助教',
    company: '台中市私立才華美語短期補習班',
    period: '2019/11 – 2021/08 · 1 年 10 個月',
    description:
      '負責國高中數學與生物課後輔導，規劃個別化學習進度。培養「將複雜概念轉譯為易懂語言」的能力，後續應用於技術職場跨部門溝通情境。',
    tags: ['Teaching', 'Communication'],
  },
]

// ───────── 學歷 (Education) ─────────
export const educations = [
  {
    school: '國立臺灣師範大學 (NTNU)',
    degree: 'AI 跨域應用研究所 · 碩士在學',
    period: '2024/09 – 2026/08 (預計畢業)',
    description:
      '碩士論文方向：多環境光感測器之亮度不均勻下的電子紙顯示器影像補償 — 結合 ALS (Ambient Light Sensor) 與深度學習，解決電子紙在不均勻環境光下的顯示品質問題。延續元太產學合作之硬體背景，補強 PyTorch / TensorFlow / OpenCV 實作能力。',
  },
  {
    school: '淡江大學 (TKU)',
    degree: '資訊工程學系 · 學士',
    period: '2021/09 – 2024/07',
    description:
      '奠定軟體工程基礎；參與國科會大專生研究計畫；2021 淡江創新創意競賽第四名。',
  },
]

// ───────── 專案 (Projects) ─────────
export const projects = [
  {
    name: 'TSIA — 台股智能分析平台',
    period: '2026/02 – 進行中 · 個人專案',
    description:
      '個人獨立開發的多服務量化分析系統。後端 FastAPI + PostgreSQL + JWT 驗證，搭配 LightGBM / scikit-learn 預測模型與 OpenAI GPT 進行新聞情緒分析；包含資料爬蟲、技術指標 (pandas-ta)、選股 screener、模型訓練/再訓練/漂移監控 (drift detection)、定時排程，以及前端視覺化介面。全站以 Docker Compose 編排 (api / db / nginx / n8n 工作流)，已迭代 7 個版本的訓練 pipeline。完整實踐「資料 → 模型 → API → 前端 → 部署」的端對端 MLOps 流程。',
    tags: [
      'FastAPI',
      'LightGBM',
      'scikit-learn',
      'PostgreSQL',
      'OpenAI GPT',
      'Docker Compose',
      'pandas-ta',
      'MLOps',
      'n8n',
      'Nginx',
    ],
    link: 'https://github.com/raypan891108/TSIA',
  },
  {
    name: '結合區塊鏈與智能合約之影像物件版權研究',
    period: '2021/01 – 2021/03 · 國科會大專生研究計畫',
    description:
      '研究計畫主持學生，獨立完成從文獻回顧、系統設計到原型實作。跨領域整合電腦視覺（影像物件辨識）+ 區塊鏈（版權不可篡改登記）+ 智能合約（自動化授權邏輯）。三個月內從零閱讀論文、設計架構、完成 prototype。',
    tags: ['Blockchain', 'Smart Contract', 'Computer Vision', 'Research'],
    link: '#',
  },
  {
    name: '瘋防治 Phone 防智 — 長輩記憶訓練 App',
    period: '2020/06 – 2020/12 · 競賽專案',
    description:
      '基於工作記憶理論設計可適性化難度調整機制；支援長輩與家人、朋友、AI 機器人多模式共玩；即時記錄遊戲軌跡，以大數據分析記憶力進步軌跡。榮獲 2020 聯發科技數位社會創新競賽「潛力獎」(< 20 / 400)。',
    tags: ['Mobile App', 'Cognitive Science', 'Big Data'],
    link: '#',
  },
  {
    name: '智慧型彩色電子紙晶片系統開發',
    period: '產學合作 · 元太科技',
    description:
      '參與三項子議題：(1) Different FL luminance with same color tone — combine FL control with ALS sensor；(2) Improve the Dithering Quality and Color temperature uniformity；(3) Blooming Improvement and Multiple Voltage Level Driving。此產學經驗成為碩士論文研究方向（ALS + 電子紙影像補償）之延伸基礎。',
    tags: ['Embedded', 'E-Ink', 'ALS Sensor', 'Industry Collaboration'],
    link: '#',
  },
]

// ───────── 技能 (Skills) ─────────
// 改成 tag-style chips：分組列出技術名稱，不打自評百分比（資深 HR 不愛 % bar）
export const skillGroups = [
  {
    category: 'Backend Engineering',
    items: [
      'Java',
      'Spring Framework',
      'RESTful API Design',
      'Python',
      'FastAPI',
      'MySQL',
      'MS SQL',
      'PostgreSQL',
      'SQL Query Optimization',
      'Postman / API Testing',
    ],
  },
  {
    category: 'AI / Machine Learning',
    items: [
      'PyTorch',
      'TensorFlow',
      'scikit-learn',
      'LightGBM',
      'CNN / Object Detection',
      'OpenCV',
      'NLP',
      'OpenAI GPT API',
      'Model Drift Monitoring',
      'MLOps Pipeline',
    ],
  },
  {
    category: 'Frontend & Tools',
    items: [
      'JavaScript',
      'React',
      'Vite',
      'Git / GitHub',
      'Docker Compose',
      'Nginx',
      'n8n Workflow',
      'Linux / Bash',
    ],
  },
]

// ───────── 榮譽獎項 (Awards) ─────────
export const awards = [
  {
    title: '聯發科技數位社會創新競賽 — 潛力獎',
    venue: 'MediaTek',
    year: '2020',
    description:
      '以「瘋防治 Phone 防智」長輩記憶訓練 App 入圍前 20 名 / 400 隊。非單純技術獎項，評審認可其社會影響力。',
    link: '#',
  },
  {
    title: '國科會大專生研究計畫主持人',
    venue: 'NSTC Taiwan',
    year: '2021',
    description:
      '「結合區塊鏈與智能合約之影像物件版權研究」— 獨立通過大專生研究計畫審核並擔任主持學生。',
    link: '#',
  },
  {
    title: '淡江大學創新創意競賽 — 第四名',
    venue: 'Tamkang University',
    year: '2021',
    description: '校內創新創意實作競賽。',
    link: '#',
  },
]
