import { projects } from '../data/profile'

function Projects() {
  return (
    <div>
      <h1 className="page-title">專案</h1>
      <p className="page-subtitle">個人專案與作品集</p>

      {projects.map((p) => (
        <div className="card" key={p.name}>
          <h3>
            {p.link && p.link !== '#' ? (
              <a href={p.link} target="_blank" rel="noreferrer">
                {p.name} ↗
              </a>
            ) : (
              p.name
            )}
          </h3>
          <div className="meta">{p.period}</div>
          <p style={{ margin: 0, color: 'var(--text-muted)' }}>{p.description}</p>
          <div className="tag-list">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
