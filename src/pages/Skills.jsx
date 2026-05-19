import { skillGroups } from '../data/profile'

function Skills() {
  return (
    <div>
      <h1 className="page-title">技能</h1>
      <p className="page-subtitle">tools & technologies I use in production</p>

      {skillGroups.map((group) => (
        <section className="section" key={group.category}>
          <h3 className="section-title">{group.category}</h3>
          <div className="card" style={{ marginBottom: 0 }}>
            <div className="tag-list" style={{ marginTop: 0, gap: 8 }}>
              {group.items.map((s) => (
                <span key={s} className="tag tag-skill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Skills
