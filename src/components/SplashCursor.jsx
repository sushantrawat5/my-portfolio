import { useEffect, useState } from 'react'

function SplashCursor() {
  const [splashes, setSplashes] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const splash = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      }
      setSplashes((prev) => [...prev, splash])
      
      // Remove splash after animation
      setTimeout(() => {
        setSplashes((prev) => prev.filter((s) => s.id !== splash.id))
      }, 1000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {splashes.map((splash) => (
        <div
          key={splash.id}
          className="absolute w-8 h-8 animate-splash"
          style={{
            left: splash.x - 16,
            top: splash.y - 16,
          }}
        >
          <div className="w-full h-full rounded-full bg-blue-500 opacity-60 animate-ping" />
        </div>
      ))}
    </div>
  )
}

export default SplashCursor
