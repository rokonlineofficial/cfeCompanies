import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import ServiceGrid from '../components/ServiceGrid'
import Marquee from '../components/Marquee'
import CTASection from '../components/CTASection'
import ParallaxImage from '../components/ParallaxImage'
import { Reveal } from '../components/Reveal'
import { img } from '../data/images'

export default function Services() {
  return (
    <>
      <Seo title="Services" description="Business development, tax planning, individual and corporate tax, IRS audit assistance, retirement planning and bookkeeping from CFE Companies." />
      <section className="mx-auto grid max-w-[88rem] items-end gap-10 px-6 pb-14 pt-36 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <SectionHeading as="h1" eyebrow="Our Services" title="Tax & Financial Services" text="CFE Tax Services is a full-service business development group and general tax consulting firm serving individual tax clients and small and medium-size privately-held companies." />
        <Reveal><ParallaxImage src={img.taxForms} alt="U.S. individual tax forms, including a Form 1040" width={470} height={264} className="aspect-[16/10] rounded-[2rem]" /></Reveal>
      </section>
      <Marquee />
      <section className="px-3 pb-8 md:px-4"><div className="mx-auto max-w-[96rem]"><ServiceGrid /></div></section>
      <CTASection />
    </>
  )
}
