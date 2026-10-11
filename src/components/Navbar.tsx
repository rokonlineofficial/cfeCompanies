import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import CfeLogo from './CfeLogo'
import Button from './Button'
import { nav } from '../data/navigation'

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', esc)
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])

  const link = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-[0.95rem] transition-colors duration-200 ${isActive ? 'bg-brand/8 text-ink' : 'text-ink/75 hover:text-ink'}`

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid || open ? 'bg-page/90 shadow-[0_1px_0_#dcdfdc] backdrop-blur-md' : 'bg-transparent'}`}>
      <div className={`mx-auto flex max-w-[88rem] items-center justify-between px-6 transition-all duration-300 md:px-8 lg:px-10 ${solid ? 'h-16' : 'h-20'}`}>
        <CfeLogo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => <NavLink key={n.to} to={n.to} className={link}>{n.label}</NavLink>)}
        </nav>
        <div className="hidden lg:block"><Button to="/contact">Contact Us</Button></div>
        <button type="button" className="grid size-11 place-items-center rounded-full text-ink lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-nav" aria-label="Mobile" className="flex max-h-[calc(100vh-4rem)] flex-col overflow-auto border-t border-line bg-page px-6 pb-8 pt-2 lg:hidden"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
            {nav.map((n) => <NavLink key={n.to} to={n.to} className={({ isActive }) => `border-b border-line py-4 text-xl tracking-[-0.02em] ${isActive ? 'text-ink font-semibold' : 'text-ink/80'}`}>{n.label}</NavLink>)}
            <Button to="/contact" className="mt-6">Contact Us</Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
