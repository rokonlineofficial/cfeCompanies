import { Quote } from 'lucide-react'
import { testimonials, type Testimonial } from '../data/testimonials'
import SectionHeading from './SectionHeading'
import { Item, Stagger } from './Reveal'

function Card({ t, featured = false }: { t: Testimonial; featured?: boolean }) {
  return (
    <figure className={`flex h-full flex-col justify-between rounded-[2rem] p-8 ${featured ? 'bg-brand text-ink md:p-12' : 'bg-white'}`}>
      <Quote size={featured ? 36 : 26} className={featured ? 'text-ink' : 'text-ink/40'} aria-hidden="true" />
      <blockquote className={`my-8 ${featured ? 'text-2xl tracking-[-0.02em] md:text-3xl' : 'text-lg'} ${t.text ? '' : 'italic opacity-60'}`}>
        {t.text || 'Review text to be added from the original source.'}
      </blockquote>
      <figcaption className="flex items-center gap-4">
        {t.photo && <img src={t.photo} alt="" width={50} height={50} loading="lazy" className="size-12 rounded-full object-cover ring-2 ring-white/40" />}
        <span><strong className={`block font-semibold ${featured ? 'text-ink' : 'text-ink'}`}>{t.name}</strong>
        <span className={featured ? 'text-ink/85' : 'text-muted'}>{t.location}</span></span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials() {
  if (!testimonials.length) return null
  const [first, ...rest] = testimonials
  return (
    <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
      <SectionHeading title="Client Reviews" className="mb-12" />
      <Stagger className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Item><Card t={first} featured /></Item>
        <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-1">
          {rest.slice(0, 2).map((t) => <Item key={t.name} className="w-[85%] shrink-0 snap-center md:w-auto"><Card t={t} /></Item>)}
        </div>
        {rest.slice(2).map((t) => <Item key={t.name} className="lg:col-span-1"><Card t={t} /></Item>)}
      </Stagger>
    </section>
  )
}
