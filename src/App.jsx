import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Awards from './pages/Awards'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => setSidebarOpen((v) => !v)
  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="app-container">
      <button
        className="hamburger"
        onClick={toggleSidebar}
        aria-label="開啟選單"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {sidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

      {/* key 換 → main-content 重新 mount → fade-up 重跑，做出頁面切換動畫 */}
      <main className="main-content" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Resume />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
