import Image from 'next/image'
import React from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  lazy?: boolean
  className?: string
  sizes?: string
}

/**
 * OptimizedImage Component
 * 
 * Ensures:
 * - Proper aspect ratio to prevent CLS
 * - WebP format with fallbacks
 * - Responsive sizing
 * - Lazy loading for below-the-fold images
 * - Proper width/height to prevent layout shifts
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  lazy = true,
  className = '',
  sizes,
}: OptimizedImageProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? 'eager' : lazy ? 'lazy' : 'eager'}
        sizes={
          sizes ||
          '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px'
        }
        className="h-full w-full object-cover"
        quality={80}
        placeholder="empty"
      />
    </div>
  )
}
