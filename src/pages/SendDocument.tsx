import { MessageCircle, Phone, LifeBuoy, Share2 } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ContactForm from '../components/ContactForm'
import SupportCard from '../components/SupportCard'
import { Stagger, Item } from '../components/Reveal'
import { site, socials } from '../data/navigation'

export default function SendDocument() {
  const hasSocial = socials.some((s) => s.href)
  return (
    <>
      <Seo title="Send Document" description="Send the information CFE Companies requires: answer the questions and attach your files by scanning or taking pictures." />
      <section className="mx-auto grid max-w-[88rem] gap-12 px-6 pb-20 pt-36 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading as="h1" eyebrow="Send Files" title="Send The Information that's required." text="Please answer all of the questions here and also attach the required files. You can scan, take pictures and upload it in the form." />
        </div>
        <div className="rounded-[2rem] bg-white p-6 md:p-10"><ContactForm withFiles /></div>
      </section>
      <section className="mx-auto max-w-[88rem] px-6 pb-8 md:px-8 lg:px-10">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Item><SupportCard icon={MessageCircle} title="Chat with us" text="Send us a message and we will get back to you." to="/contact" cta="Contact us" /></Item>
          <Item><SupportCard icon={Phone} title="Phone support" text="Speak with CFE Companies directly." href={site.phoneHref} cta={site.phone} /></Item>
          <Item><SupportCard icon={LifeBuoy} title="Help topics" text="Find answers to common questions." to="/faq" cta="Read the FAQ" /></Item>
          <Item><SupportCard icon={Share2} title="We're social" text={hasSocial ? 'Find us on social media.' : 'Reach out through the contact page.'} to="/contact" cta="Get in touch" /></Item>
        </Stagger>
      </section>
    </>
  )
}
