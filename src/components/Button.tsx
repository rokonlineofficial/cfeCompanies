import type { ReactNode, MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Magnetic from './Magnetic'

const MotionLink = motion.create(Link)
type Variant = 'primary' | 'outline' | 'light'
interface Props {
  to?: string; href?: string; variant?: Variant; arrow?: boolean; children: ReactNode; className?: string
  type?: 'button' | 'submit'; disabled?: boolean; onClick?: MouseEventHandler<HTMLElement>
}
const styles: Record<Variant, string> = {
  primary: 'bg-brand text-ink',
  outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-white',
  light: 'bg-white text-ink',
}

export default function Button({ to, href, variant = 'primary', arrow, children, className = '', type = 'button', disabled, onClick }: Props) {
  const cls = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-4 text-[0.95rem] font-semibold transition-colors duration-200 disabled:opacity-60 ${styles[variant]} ${className}`
  const inner = (
    <>
      {variant !== 'outline' && <span aria-hidden="true" className={`pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent transition-transform duration-700 group-hover:translate-x-full ${variant === 'primary' ? 'via-white/25' : 'via-brand/10'}`} />}
      <span className="relative">{children}</span>
      {arrow && <ArrowRight size={18} aria-hidden="true" className="relative transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  )
  const m = { whileTap: { scale: 0.97 } }
  const body = to ? <MotionLink to={to} className={cls} {...m}>{inner}</MotionLink>
    : href ? <motion.a href={href} className={cls} {...m}>{inner}</motion.a>
    : <motion.button type={type} disabled={disabled} onClick={onClick} className={cls} {...m}>{inner}</motion.button>
  return <Magnetic>{body}</Magnetic>
}
