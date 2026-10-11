import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import SectionHeading from './SectionHeading'
import { Item, Reveal, Stagger } from './Reveal'
import ParallaxImage from './ParallaxImage'
import { img } from '../data/images'

const events = [
  { year: '2006', title: 'CFE Accounting is founded', text: 'Managing director Zadih Cadyma leaves Corporate America and founds CFE Accounting.' },
  { year: '2010', title: 'CFE Tax Services becomes its own entity', text: 'CFE Accounting splits and CFE Tax Services Incorporated becomes a separate business entity.' },
  { year: 'Today', title: 'A member of CFE Companies', text: 'CFE Tax Services is a full-service business development group and general tax consulting firm.' },
]
const focus = [
  'Individual tax clients',
  'Small and medium-size privately-held companies',
  'Helping businesses maintain proper tax records and comply with tax rules and regulations',
  'Strategic tax planning',
  'Representing clients in matters involving tax collection agencies in the United States',
  'Customized tax planning for selected owners of closely-held small to medium-size businesses',
]

export default function HistoryTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.7'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[88rem] px-6 md:px-8 lg:px-10">
        <SectionHeading eyebrow="Our Story" title="History Of CFE Tax Services" className="mb-14" />
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div ref={ref} className="relative pl-8">
            <span className="absolute bottom-0 left-0 top-0 w-px bg-brand/15" aria-hidden="true" />
            <motion.span className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-brand" style={{ scaleY }} aria-hidden="true" />
          <Stagger className="space-y-12">
            {events.map((e) => (
              <Item key={e.year} className="relative">
                <motion.span className="absolute -left-[2.5rem] top-1.5 size-4 rounded-full border-2 border-ink bg-white" initial={{ scale: 0.4, backgroundColor: '#ffffff' }} whileInView={{ scale: 1, backgroundColor: '#1fb3d1' }} viewport={{ once: true, margin: '-80px' }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} aria-hidden="true" />
                <p className="text-sm font-semibold text-brand-red">{e.year}</p>
                <h3 className="my-1 text-2xl">{e.title}</h3>
                <p className="max-w-md text-muted">{e.text}</p>
              </Item>
            ))}
          </Stagger>
          </div>
          <div className="rounded-3xl bg-sage p-8 md:p-10">
            <h3 className="mb-6 text-2xl">CFE Tax Services focuses on</h3>
            <Stagger className="divide-y divide-ink/15">
              {focus.map((f) => <Item key={f} className="py-3.5 text-ink/85">{f}</Item>)}
            </Stagger>
          </div>
        </div>
        <Reveal className="mt-16"><ParallaxImage src={img.storefront} alt="CFE Tax Services storefront sign with the tagline Getting Your Financial Life In Order" width={1300} height={430} className="aspect-[16/9] rounded-[2rem] md:aspect-[3/1]" /></Reveal>
      </div>
    </section>
  )
}
