import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

// Image that drifts slowly against the scroll inside a clipped frame.
export default function ParallaxImage({ src, alt, className = '', width, height, position = 'center' }: { src: string; alt: string; className?: string; width: number; height: number; position?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])
  return (
    <div ref={ref} className={`group relative overflow-hidden ${className}`}>
      <motion.img src={src} alt={alt} width={width} height={height} loading="lazy" style={{ y, scale: 1.16, objectPosition: position }} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:!scale-[1.22]" />
    </div>
  )
}
