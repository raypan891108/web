import { Link } from 'react-router-dom'
import { profile, projects } from '../data/profile'
import Typewriter from '../components/Typewriter'

const PHRASES = [
  'Backend + AI 跨域整合者。',
  '能用 Java 把系統穩穩交付上線。',
  '也能用 PyTorch 把模型從零訓練到部署。',
  'LLM 時代企業最需要的「AI 落地工程師」。',
]

function Home() {
  const featured = projects.slice(0, 2)

  return (
    <div>
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" />
          <span>available from 2026/09 · open to opportunities</span>
        </div>

        <h1>
          Hi, I'm <span className="gradient">{profile.name}</span>
          <span className="cursor" />
        </h1>

        <p className="tagline">
          <Typewriter phrases={PHRASES} />
        </p>

        <div className="cta-row">
          <Link to="/projects" className="btn btn-primary">
            <span>看我的專案</span>
            <span className="arrow">→</span>
          </Link>
          <Link to="/contact" className="btn">
            <span>📧</span>
            <span>聯絡我</span>
          </Link>
          {profile.resumeUrl && profile.resumeUrl !== '#' && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>📄</span>
              <span>下載履歷</span>
            </a>
          )}
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">about</h3>
        <div className="card">
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>
            2000 年生於台北，國立臺灣師範大學 AI 跨域應用研究所碩士在學
            （2026/08 預計畢業）。碩士論文方向為「
            <strong style={{ color: 'var(--text)' }}>
              多環境光感測器之亮度不均勻下的電子紙顯示器影像補償
            </strong>
            」，結合 ALS 感測器與深度學習解決電子紙顯示品質問題。
            職涯定位是「橫跨後端工程與 AI 開發的跨域整合者」——既能用 Java
            把系統穩穩交付上線，也能用 PyTorch 把模型從零訓練到部署。
          </p>
        </div>
      </section>

      <section className="section">
        <h3 className="section-title">featured projects</h3>
        {featured.map((p) => (
          <div className="card" key={p.name}>
            <h3>{p.name}</h3>
            <div className="meta">{p.period}</div>
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              {p.description}
            </p>
            <div className="tag-list">
              {p.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
        <Link
          to="/projects"
          style={{
            fontSize: 14,
            fontFamily: 'var(--mono)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          view all projects →
        </Link>
      </section>
    </div>
  )
}

export default Home
