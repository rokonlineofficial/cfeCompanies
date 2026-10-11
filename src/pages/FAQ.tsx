import { useMemo, useState } from 'react'
import { BookOpen, PlayCircle, Headphones, Search } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import FaqItem from '../components/FaqItem'
import SupportCard from '../components/SupportCard'
import NewsList from '../components/NewsSection'
import CTASection from '../components/CTASection'
import { Item, Stagger } from '../components/Reveal'
import { faq } from '../data/faq'
import { news } from '../data/news'

export default function FAQ() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(0)
  const list = useMemo(() => faq.filter((f) => (f.q + f.a).toLowerCase().includes(q.toLowerCase())), [q])
  return (
    <>
      <Seo title="FAQ" description="Frequently asked questions about CFE Companies, sending documents and our tax and financial services." />
      <section className="mx-auto max-w-[88rem] px-6 pb-12 pt-36 md:px-8 lg:px-10">
        <SectionHeading as="h1" title="Frequently Asked Questions" text="Find answers about our services, sending documents and getting in touch." />
        <form role="search" onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-line bg-white px-5 focus-within:border-ink">
          <Search size={20} className="text-muted" aria-hidden="true" />
          <label htmlFor="faq-search" className="sr-only">Search for answers</label>
          <input id="faq-search" type="search" placeholder="Search for answers..." value={q} onChange={(e) => { setQ(e.target.value); setOpen(0) }} className="flex-1 bg-transparent py-4 outline-none" />
        </form>
      </section>
      <section className="mx-auto max-w-[88rem] px-6 md:px-8 lg:px-10">
        <Stagger className="grid gap-5 md:grid-cols-3">
          <Item><SupportCard icon={BookOpen} title="Knowledge Base" text="Answers to common questions." to="/faq" cta="Browse" /></Item>
          <Item><SupportCard icon={PlayCircle} title="Video Tutorials" text="Walkthroughs for common tasks." to="/faq" cta="Watch" /></Item>
          <Item><SupportCard icon={Headphones} title="Customer Support" text="Talk to the CFE team." to="/contact" cta="Contact us" /></Item>
        </Stagger>
      </section>
      <section className="mx-auto max-w-4xl px-6 py-24 md:px-8">
        <h2 className="mb-6 text-4xl">Frequently asked questions</h2>
        <div className="border-t border-line" aria-live="polite">
          {list.length ? list.map((f, i) => <FaqItem key={f.q} {...f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />) : <p className="py-6 text-muted">No answers match “{q}”.</p>}
        </div>
      </section>
      {news.length > 0 && (
        <section className="mx-auto max-w-[88rem] px-6 pb-8 md:px-8 lg:px-10"><h2 className="mb-8 text-4xl">Latest Articles</h2><NewsList limit={3} /></section>
      )}
      <CTASection title="Still have questions?" text="Contact CFE Companies and we will point you in the right direction." />
    </>
  )
}
