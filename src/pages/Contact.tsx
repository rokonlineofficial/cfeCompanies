import { Mail, Phone } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import { site, socials } from '../data/navigation'

export default function Contact() {
  const links = socials.filter((s) => s.href)
  return (
    <>
      <Seo title="Contact" description="Contact CFE Companies by phone or email, or fill in the form for a free consultation without any obligation." />
      <section className="mx-auto grid max-w-[88rem] gap-12 px-6 pb-24 pt-36 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <div>
          <SectionHeading as="h1" eyebrow="Contact" title="Let's talk" text="If you want to get a free consultation without any obligation, fill in the form below and we'll get in touch with you." />
          <ul className="mt-10 grid gap-4">
            <li><a href={site.phoneHref} className="flex items-center gap-4 rounded-3xl border border-line bg-white p-5 transition-colors hover:border-ink/40"><span className="grid size-12 place-items-center rounded-2xl bg-sage text-ink"><Phone size={20} aria-hidden="true" /></span><span><small className="block text-muted">Phone</small><span className="text-xl font-semibold text-ink">{site.phone}</span></span></a></li>
            <li><a href={`mailto:${site.email}`} className="flex items-center gap-4 rounded-3xl border border-line bg-white p-5 transition-colors hover:border-ink/40"><span className="grid size-12 place-items-center rounded-2xl bg-sage text-ink"><Mail size={20} aria-hidden="true" /></span><span><small className="block text-muted">Email</small><span className="text-xl font-semibold text-ink">{site.email}</span></span></a></li>
          </ul>
          {links.length > 0 && <ul className="mt-6 flex flex-wrap gap-4">{links.map((s) => <li key={s.label}><a className="font-semibold text-ink underline" href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul>}
        </div>
        <div className="rounded-[2rem] bg-white p-6 md:p-10"><ContactForm /></div>
      </section>
    </>
  )
}
