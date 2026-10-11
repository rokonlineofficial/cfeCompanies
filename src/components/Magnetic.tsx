import type { ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
// Pulls its child slightly toward the cursor.
export default function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 })
  return (
    <motion.span className="inline-block" style={{ x, y }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * strength); y.set((e.clientY - r.top - r.height / 2) * strength) }}
      onMouseLeave={() => { x.set(0); y.set(0) }}>
      {children}
    </motion.span>
  )
}
