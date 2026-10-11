import { Phone } from 'lucide-react'
import Button from './Button'
import Orbs from './Orbs'
import { Reveal } from './Reveal'
import { site } from '../data/navigation'

export default function CTASection({ title = 'Ready to get started?', text = 'Talk with CFE Companies about your tax and financial needs.' }: { title?: string; text?: string }) {
  return (
    <section className="px-3 pt-20 md:px-4">
      <Reveal className="relative mx-auto max-w-[96rem] overflow-hidden rounded-[2.5rem] bg-brand p-8 md:p-16 lg:p-24">
        <Orbs />
        <div className="relative">
          <h2 className="max-w-4xl text-[clamp(2.6rem,7vw,6.2rem)] !text-ink">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-ink/85">{text}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/contact" variant="light" arrow>Contact Us</Button>
            <a href={site.phoneHref} className="group inline-flex items-center gap-2 rounded-full border border-ink/40 px-7 py-4 font-semibold text-ink transition-colors hover:border-ink hover:bg-white/30"><Phone size={18} aria-hidden="true" className="transition-transform group-hover:rotate-12" />Call {site.phone}</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
