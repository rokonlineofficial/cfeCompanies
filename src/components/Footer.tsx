import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUp } from 'lucide-react'
import CfeLogo from './CfeLogo'
import { nav, site, socials } from '../data/navigation'

export default function Footer() {
  const links = socials.filter((s) => s.href)
  return (
    <footer className="mx-3 mt-8 overflow-hidden rounded-t-[2.5rem] bg-brand text-ink/85 md:mx-4">
      <div className="mx-auto grid max-w-[88rem] gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <CfeLogo light />
          <p className="mt-6 max-w-sm">{site.statement}</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 text-base !text-ink">Explore</h2>
          <ul className="grid gap-2.5">{nav.map((n) => <li key={n.to}><Link className="hover:text-ink hover:underline" to={n.to}>{n.label}</Link></li>)}</ul>
        </nav>
        <div>
          <h2 className="mb-4 text-base !text-ink">Legal</h2>
          {/* Point to real policy pages when available */}
          <ul className="grid gap-2.5"><li><Link className="hover:text-ink hover:underline" to="/contact">Privacy Policy</Link></li><li><Link className="hover:text-ink hover:underline" to="/contact">Terms &amp; Conditions</Link></li></ul>
        </div>
        <div>
          <h2 className="mb-4 text-base !text-ink">Contact</h2>
          <ul className="grid gap-2.5">
            <li><a className="hover:text-ink hover:underline" href={site.phoneHref}>{site.phone}</a></li>
            <li><a className="hover:text-ink hover:underline" href={`mailto:${site.email}`}>{site.email}</a></li>
            {links.map((s) => <li key={s.label}><a className="hover:text-ink hover:underline" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
        </div>
      </div>
      <motion.p aria-hidden="true" className="select-none overflow-hidden whitespace-nowrap px-6 text-center text-[clamp(2.4rem,11.2vw,12rem)] font-semibold leading-[.9] tracking-[-0.06em] text-ink/[.09]" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>CFE COMPANIES</motion.p>
      <div className="border-t border-ink/15">
        <div className="mx-auto flex max-w-[88rem] flex-wrap justify-between gap-2 px-6 py-6 text-sm md:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} CFE COMPANIES</p>
          <p className="flex items-center gap-4">Designed by Rok Online<button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="grid size-9 place-items-center rounded-full border border-ink/30 text-ink transition-colors hover:bg-ink hover:text-brand"><ArrowUp size={16} aria-hidden="true" /></button></p>
        </div>
      </div>
    </footer>
  )
}
