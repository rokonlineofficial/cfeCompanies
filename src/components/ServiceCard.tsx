import { Link } from 'react-router-dom'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../data/services'
import { rise } from './Reveal'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  const mx = useMotionValue(-300), my = useMotionValue(-300)
  const glow = useMotionTemplate`radial-gradient(340px circle at ${mx}px ${my}px, rgba(255,255,255,.4), transparent 70%)`
  return (
    <motion.article variants={rise} initial="rest" whileHover="hover" className="h-full"
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left); my.set(e.clientY - r.top) }}>
      <motion.div variants={{ rest: { y: 0 }, hover: { y: -6 } }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/25 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-ink/40 hover:bg-white/40">
        <motion.div aria-hidden="true" style={{ background: glow }} className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <motion.span variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -8, scale: 1.1 } }} className="relative mb-14 grid size-13 place-items-center rounded-2xl bg-ink text-brand"><Icon size={24} aria-hidden="true" /></motion.span>
        <h3 className="relative mb-3 text-[1.45rem] !text-ink">{service.title}</h3>
        <p className="relative mb-8 flex-1 text-ink/85">{service.text}</p>
        <Link to="/contact" className="relative inline-flex items-center gap-1.5 font-semibold text-ink">
          Learn More <motion.span variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -4 } }}><ArrowUpRight size={18} aria-hidden="true" /></motion.span>
        </Link>
      </motion.div>
    </motion.article>
  )
}
