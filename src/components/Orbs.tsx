import { motion } from 'motion/react'
// Slow-drifting colour fields used on dark panels.
export default function Orbs() {
  const drift = (x: number[], y: number[], d: number) => ({ animate: { x, y }, transition: { duration: d, repeat: Infinity, repeatType: 'mirror' as const, ease: 'easeInOut' as const } })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div className="absolute -left-24 top-[-10%] size-[34rem] rounded-full bg-white/45 blur-[110px]" {...drift([0, 120, 40], [0, 80, 160], 14)} />
      <motion.div className="absolute -right-20 bottom-[-15%] size-[30rem] rounded-full bg-brand-d/45 blur-[120px]" {...drift([0, -140, -40], [0, -60, -150], 17)} />
      <motion.div className="absolute left-[45%] top-[30%] size-48 rounded-full bg-brand-red/20 blur-[90px]" {...drift([0, 90, -60], [0, -70, 60], 11)} />
      <div className="grain absolute inset-0" />
    </div>
  )
}
