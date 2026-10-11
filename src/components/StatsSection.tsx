import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import { stats } from '../data/stats'
import SectionHeading from './SectionHeading'

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (reduce) { setN(to); return }
    const c = animate(0, to, { duration: 1.4, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, to, reduce])
  return <span ref={ref}>{n}%</span>
}

export default function StatsSection() {
  if (!stats.length) return null
  return (
    <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
      <SectionHeading title="Our Success Overview" className="mb-12" />
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-none tracking-[-0.05em] text-ink"><Counter to={s.value} /></p>
            <p className="mt-3 font-semibold text-ink">{s.label}</p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/10" role="presentation">
              <motion.div className="h-full rounded-full bg-brand" initial={{ width: 0 }} whileInView={{ width: `${s.value}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
