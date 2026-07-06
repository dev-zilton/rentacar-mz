'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface FadeInSectionProps {
  children: React.ReactNode
  className?: string
  delayMs?: number
}

/**
 * Wraps content in a fade + slide-up reveal that triggers once,
 * the first time the element scrolls into view.
 */
export function FadeInSection({ children, className = '', delayMs = 0 }: FadeInSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
