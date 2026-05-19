import { profile } from '../data/profile'

const items = [
  {
    icon: '📧',
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: profile.github.replace(/^https?:\/\//, ''),
    href: profile.github,
  },
  {
    icon: '📍',
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: '🗓',
    label: 'Available',
    value: '2026/09/01',
    href: null,
  },
]

function Contact() {
  return (
    <div>
      <h1 className="page-title">聯絡</h1>
      <p className="page-subtitle">
        feel free to reach out · 通常 1–2 天內回覆
      </p>

      <div className="contact-list">
        {items.map((it) =>
          it.href ? (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="contact-item"
            >
              <div className="icon">{it.icon}</div>
              <div>
                <div className="label">{it.label}</div>
                <div className="value">{it.value}</div>
              </div>
            </a>
          ) : (
            <div key={it.label} className="contact-item">
              <div className="icon">{it.icon}</div>
              <div>
                <div className="label">{it.label}</div>
                <div className="value">{it.value}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Contact
