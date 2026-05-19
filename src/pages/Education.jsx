import { educations } from '../data/profile'

function Education() {
  return (
    <div>
      <h1 className="page-title">學歷</h1>
      <p className="page-subtitle">求學歷程</p>

      <div className="timeline">
        {educations.map((ed) => (
          <div className="timeline-item" key={ed.school}>
            <h3>{ed.school}</h3>
            <div className="meta">
              {ed.degree} · {ed.period}
            </div>
            {ed.description && (
              <p style={{ margin: '8px 0 0', color: 'var(--text-muted)' }}>
                {ed.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
