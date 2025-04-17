"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: {
    x: number
    y: number
  }
  rotation: number
  rotationSpeed: number
}

export function ConfettiEffect() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Create particles
    const colors = [
      "#FF5252", // Red
      "#FFEB3B", // Yellow
      "#2196F3", // Blue
      "#4CAF50", // Green
      "#9C27B0", // Purple
      "#FF9800", // Orange
    ]

    const newParticles: Particle[] = []

    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 10 + 5
      newParticles.push({
        id: i,
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        size,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 15,
          y: (Math.random() - 0.5) * 15 - 3,
        },
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      })
    }

    setParticles(newParticles)

    // Animation loop
    let animationFrameId: number
    let lastTime = 0

    const animate = (time: number) => {
      const deltaTime = (time - lastTime) / 1000
      lastTime = time

      setParticles((prevParticles) =>
        prevParticles
          .map((particle) => {
            // Apply gravity
            const gravity = 9.8

            return {
              ...particle,
              x: particle.x + particle.velocity.x,
              y: particle.y + particle.velocity.y,
              velocity: {
                x: particle.velocity.x * 0.99,
                y: particle.velocity.y + gravity * deltaTime,
              },
              rotation: particle.rotation + particle.rotationSpeed,
            }
          })
          .filter(
            (particle) =>
              particle.y < window.innerHeight + 100 && particle.x > -100 && particle.x < window.innerWidth + 100,
          ),
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size * 0.6}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  )
}
