'use client'

import { useEffect, useState } from 'react'

const colorPalettes = [
  ['rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)', 'rgba(236, 72, 153, 0.15)'],
  ['rgba(139, 92, 246, 0.15)', 'rgba(236, 72, 153, 0.15)', 'rgba(251, 146, 60, 0.15)'],
  ['rgba(34, 211, 238, 0.15)', 'rgba(59, 130, 246, 0.15)', 'rgba(139, 92, 246, 0.15)'],
  ['rgba(52, 211, 153, 0.15)', 'rgba(34, 211, 238, 0.15)', 'rgba(59, 130, 246, 0.15)'],
  ['rgba(236, 72, 153, 0.15)', 'rgba(244, 63, 94, 0.15)', 'rgba(239, 68, 68, 0.15)'],
  ['rgba(167, 139, 250, 0.15)', 'rgba(192, 132, 252, 0.15)', 'rgba(217, 70, 239, 0.15)'],
]

export default function CursorBlur() {
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0)
  const [nextPaletteIndex, setNextPaletteIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setNextPaletteIndex((prev) => (prev + 1) % colorPalettes.length)
      
      setTimeout(() => {
        setCurrentPaletteIndex((prev) => (prev + 1) % colorPalettes.length)
        setIsTransitioning(false)
      }, 2000)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const currentPalette = colorPalettes[currentPaletteIndex]
  const nextPalette = colorPalettes[nextPaletteIndex]

  return (
    <div 
      className="pointer-events-none fixed inset-x-0 top-0 h-64 z-0 overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)',
      }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        {currentPalette.map((color, index) => {
          const baseX = ((index + 1) / (currentPalette.length + 1)) * 100
          return (
            <div
              key={index}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${baseX}%`,
                top: '-250px',
                width: '400px',
                height: '400px',
                backgroundColor: color,
                transform: 'translate(-50%, 0)',
                animation: `float-${index} 20s ease-in-out infinite`,
                animationDelay: `${index * -6.67}s`,
              }}
            />
          )
        })}
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-2000 ease-in-out"
        style={{ opacity: isTransitioning ? 1 : 0 }}
      >
        {nextPalette.map((color, index) => {
          const baseX = ((index + 1) / (nextPalette.length + 1)) * 100
          return (
            <div
              key={index}
              className="absolute rounded-full blur-3xl"
              style={{
                left: `${baseX}%`,
                top: '-250px',
                width: '400px',
                height: '400px',
                backgroundColor: color,
                transform: 'translate(-50%, 0)',
                animation: `float-${index} 20s ease-in-out infinite`,
                animationDelay: `${index * -6.67}s`,
              }}
            />
          )
        })}
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(-50%, 0) translate(0px, 0px); }
          50% { transform: translate(-50%, 0) translate(40px, 30px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(-50%, 0) translate(0px, 0px); }
          50% { transform: translate(-50%, 0) translate(-30px, 40px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(-50%, 0) translate(0px, 0px); }
          50% { transform: translate(-50%, 0) translate(35px, -25px); }
        }
      `}</style>
    </div>
  )
}
