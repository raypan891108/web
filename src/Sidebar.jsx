import { Link, useLocation } from 'react-router-dom'
import { profile } from './data/profile'

const NAV = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/experience', icon: '💼', label: 'Experience' },
  { to: '/education', icon: '🎓', label: 'Education' },
  { to: '/projects', icon: '💻', label: 'Projects' },
  { to: '/skills', icon: '🛠', label: 'Skills' },
  { to: '/awards', icon: '🏆', label: 'Awards' },
  { to: '/contact', icon: '📧', label: 'Contact' },
]

function Sidebar({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="avatar">{profile.initials}</div>
        <h2>{profile.name}</h2>
        <p className="subtitle">{profile.title}</p>
      </div>

      <nav className="sidebar-nav">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`nav-item ${location.pathname === item.to ? 'active' : ''}`}
            onClick={onClose}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
