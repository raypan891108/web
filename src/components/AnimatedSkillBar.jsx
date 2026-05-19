// 已棄用：Skills 頁改用 tag chips。保留檔案以免 import 錯誤，若確認沒被引用可刪除。
import { useEffect, useRef, useState } from 'react'

function AnimatedSkillBar({ name, level }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // 進入視窗就跑進度
            requestAnimationFrame(() => setWidth(level))
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [level])

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-header">
        <strong>{name}</strong>
        <span className="level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

export default AnimatedSkillBar
