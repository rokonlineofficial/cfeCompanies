import { Info } from 'lucide-react'
import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { site } from '../data/navigation'

export default function ClientArea() {
  return (
    <>
      <Seo title="Client Area" description="Access your CFE Companies client resources and documents." />
      <section className="mx-auto max-w-[88rem] px-6 pb-32 pt-36 md:px-8 lg:px-10">
        <SectionHeading as="h1" title="Client Area" text="Access your client resources and documents." />
        <div className="mt-8">
          {site.clientAreaUrl
            ? <Button href={site.clientAreaUrl} arrow>Access Client Area</Button>
            : <p className="flex max-w-xl gap-3 rounded-2xl bg-sage p-5 text-ink"><Info size={20} className="mt-0.5 shrink-0" aria-hidden="true" />The portal link is not set yet. Add VITE_CLIENT_AREA_URL to your .env file. Meanwhile, call {site.phone}.</p>}
        </div>
      </section>
    </>
  )
}
