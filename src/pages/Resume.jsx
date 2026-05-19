import { experiences, profile } from '../data/profile'

function Resume() {
  return (
    <div>
      <h1 className="page-title">經歷</h1>
      <p className="page-subtitle">
        以下是我的工作與研究經歷時間軸。
        {profile.resumeUrl && profile.resumeUrl !== '#' && (
          <>
            {' '}
            完整 PDF 履歷請見{' '}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
              這裡
            </a>
            。
          </>
        )}
      </p>

      <div className="timeline">
        {experiences.map((e) => (
          <div className="timeline-item" key={`${e.company}-${e.period}`}>
            <h3>
              {e.role} <span style={{ color: 'var(--text-muted)' }}>· {e.company}</span>
            </h3>
            <div className="meta">{e.period}</div>
            <p style={{ margin: '8px 0 0', color: 'var(--text-muted)' }}>
              {e.description}
            </p>
            {e.tags && (
              <div className="tag-list">
                {e.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resume
