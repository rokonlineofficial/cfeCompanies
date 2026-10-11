import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import type { LucideIcon } from 'lucide-react'

interface Props { icon: LucideIcon; title: string; text: string; to?: string; href?: string; cta: ReactNode }
export default function SupportCard({ icon: Icon, title, text, to, href, cta }: Props) {
  const body = (
    <motion.div whileHover={{ y: -4 }} className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-colors hover:border-ink/40">
      <span className="mb-10 grid size-12 place-items-center rounded-2xl bg-sage text-ink"><Icon size={22} aria-hidden="true" /></span>
      <h3 className="mb-2 text-2xl">{title}</h3>
      <p className="mb-5 flex-1 text-muted">{text}</p>
      <span className="font-semibold text-ink">{cta}</span>
    </motion.div>
  )
  return to ? <Link to={to} className="block h-full">{body}</Link> : <a href={href} className="block h-full">{body}</a>
}
