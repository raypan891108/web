import { awards } from '../data/profile'

function Awards() {
  return (
    <div>
      <h1 className="page-title">Awards</h1>
      <p className="page-subtitle">competitions, certifications & research grants</p>

      {awards.map((a) => (
        <div className="card" key={a.title}>
          <h3>
            {a.link && a.link !== '#' ? (
              <a href={a.link} target="_blank" rel="noreferrer">
                {a.title} ↗
              </a>
            ) : (
              a.title
            )}
          </h3>
          <div className="meta">
            {a.venue} · {a.year}
          </div>
          {a.description && (
            <p style={{ margin: 0, color: 'var(--text-muted)' }}>
              {a.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default Awards
