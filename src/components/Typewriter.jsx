import { useEffect, useState } from 'react'

// 一段一段把字打出來；打完一段停一下，刪掉，換下一段
function Typewriter({ phrases, typeSpeed = 55, deleteSpeed = 30, holdMs = 1600 }) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx % phrases.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), holdMs)
    } else if (deleting && text === '') {
      setDeleting(false)
      setPhraseIdx((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
          )
        },
        deleting ? deleteSpeed : typeSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, phraseIdx, phrases, typeSpeed, deleteSpeed, holdMs])

  return (
    <span>
      {text}
      <span className="type-cursor" />
    </span>
  )
}

export default Typewriter
