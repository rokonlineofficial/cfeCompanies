import type { ReactNode } from 'react'
import { motion, type Variants } from 'motion/react'

export const rise: Variants = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }
const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const vp = { once: true, margin: '-60px' } as const

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={rise} initial="hidden" whileInView="show" viewport={vp}>{children}</motion.div>
}
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={group} initial="hidden" whileInView="show" viewport={vp}>{children}</motion.div>
}
export function Item({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={rise}>{children}</motion.div>
}
