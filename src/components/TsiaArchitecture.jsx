// TSIA 系統架構視覺化 — 純 CSS/HTML，不需要外部 lib
// 對應 docker-compose.yml 中的 7 個服務

const LAYERS = [
  {
    label: 'CLIENT',
    services: [
      { name: 'User Browser', tech: 'HTTPS' },
    ],
  },
  {
    label: 'EDGE',
    services: [
      { name: 'Nginx', tech: 'reverse proxy + Let’s Encrypt SSL' },
    ],
  },
  {
    label: 'PRESENTATION',
    services: [
      { name: 'Frontend', tech: 'React · Vite · TypeScript · Tailwind' },
    ],
  },
  {
    label: 'APPLICATION',
    services: [
      { name: 'FastAPI', tech: 'REST API · JWT auth · routers' },
      { name: 'Scheduler', tech: 'cron · 排程訓練/爬蟲' },
      { name: 'n8n', tech: '低代碼工作流自動化' },
    ],
  },
  {
    label: 'INTELLIGENCE',
    services: [
      { name: 'ML Pipeline', tech: 'LightGBM · scikit-learn · train_v2→v7' },
      { name: 'Drift Monitor', tech: 'feature drift detection · retrain trigger' },
      { name: 'NLP / GPT', tech: 'OpenAI API · 新聞情緒分析' },
    ],
  },
  {
    label: 'DATA',
    services: [
      { name: 'Crawler', tech: 'requests · bs4 · lxml · pandas-ta indicators' },
      { name: 'PostgreSQL', tech: 'time-series · model registry · users' },
      { name: 'pgAdmin', tech: 'DB admin (內部訪問)' },
    ],
  },
  {
    label: 'NOTIFICATION',
    services: [
      { name: 'LINE Bot', tech: 'Messaging API · 訊號推播' },
    ],
  },
]

function TsiaArchitecture() {
  return (
    <div className="arch">
      <div className="arch-header">
        <span className="arch-tag">SYSTEM ARCHITECTURE</span>
        <span className="arch-subtitle">
          7 services · docker-compose orchestrated · multi-layer separation
        </span>
      </div>

      <div className="arch-layers">
        {LAYERS.map((layer, i) => (
          <div className="arch-layer" key={layer.label}>
            <div className="arch-layer-label">{layer.label}</div>
            <div className="arch-services">
              {layer.services.map((s) => (
                <div className="arch-service" key={s.name}>
                  <div className="arch-service-name">{s.name}</div>
                  <div className="arch-service-tech">{s.tech}</div>
                </div>
              ))}
            </div>
            {i < LAYERS.length - 1 && (
              <div className="arch-flow" aria-hidden>
                ↓
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TsiaArchitecture
