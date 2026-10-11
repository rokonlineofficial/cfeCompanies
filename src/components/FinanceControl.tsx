import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { Item, Stagger } from './Reveal'

// Headings are from the legacy homepage; images were not provided, so each card uses an abstract graphic.
const cards = [
  { title: 'Analyse your progress', text: 'See where your finances stand and where they are heading.', art: 'line' },
  { title: 'Track your spendings', text: 'Keep records in order so every decision starts from clear numbers.', art: 'bars' },
  { title: 'Save toward your goals', text: 'Plan ahead with tax and financial guidance built around what you want next.', art: 'arc' },
] as const

function Art({ kind }: { kind: 'line' | 'bars' | 'arc' }) {
  return (
    <svg viewBox="0 0 400 240" className="size-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {kind === 'line' && <><motion.path d="M0 190 C80 180 110 120 180 130 S300 60 400 40" fill="none" stroke="#0B1D24" strokeWidth="5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }} /><path d="M0 190 C80 180 110 120 180 130 S300 60 400 40 V240 H0Z" fill="#fff" fillOpacity=".3" /></>}
      {kind === 'bars' && [60, 110, 80, 150, 120, 180].map((h, i) => <motion.rect key={i} x={40 + i * 58} y={240 - h} width="34" height={h} rx="6" style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} fill={i === 5 ? '#0B1D24' : '#ffffff'} fillOpacity={i === 5 ? 1 : 0.45} />)}
      {kind === 'arc' && <><circle cx="200" cy="130" r="86" fill="none" stroke="#0B1D24" strokeOpacity=".15" strokeWidth="18" /><motion.path d="M200 44 A86 86 0 1 1 114 130" fill="none" stroke="#0B1D24" strokeWidth="18" strokeLinecap="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeOut' }} /><circle cx="200" cy="130" r="6" fill="#e0343f" /></>}
    </svg>
  )
}

export default function FinanceControl() {
  return (
    <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
      <SectionHeading title="Keep your finances under control" className="mb-14" />
      <Stagger className="grid gap-5 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-2">
        {cards.map((c, i) => (
          <Item key={c.title} className={i === 0 ? 'lg:row-span-2' : ''}>
            <article className={`group flex h-full flex-col overflow-hidden rounded-[2rem] ${i === 0 ? 'bg-brand text-ink' : 'bg-brand-d text-ink'}`}>
              <div className={`overflow-hidden ${i === 0 ? 'min-h-64 flex-1' : 'h-40'}`}><div className="size-full transition-transform duration-500 group-hover:scale-105"><Art kind={c.art} /></div></div>
              <div className="p-7 md:p-9">
                <h3 className="text-3xl !text-ink">{c.title}</h3>
                <p className="mt-3 max-w-md text-ink/85">{c.text}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 font-semibold text-ink">Our services <ArrowUpRight size={18} aria-hidden="true" /></Link>
              </div>
            </article>
          </Item>
        ))}
      </Stagger>
    </section>
  )
}
