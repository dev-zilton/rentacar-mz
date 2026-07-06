'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * useScrollAnimation
 *
 * Lightweight scroll-reveal using IntersectionObserver (no libraries).
 * Returns a ref to attach to the element and a boolean that flips to
 * true once the element enters the viewport (and stays true).
 */
export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
