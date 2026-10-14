import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import ScrollText from '../components/ScrollText'
import SectionHeading from '../components/SectionHeading'
import ServiceGrid from '../components/ServiceGrid'
import MissionSection from '../components/MissionSection'
import HistoryTimeline from '../components/HistoryTimeline'
import FinanceControl from '../components/FinanceControl'
import TeamCard from '../components/TeamCard'
import StatsSection from '../components/StatsSection'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import NewsList from '../components/NewsSection'
import CTASection from '../components/CTASection'
import Button from '../components/Button'
import { Reveal } from '../components/Reveal'
import { team } from '../data/team'
import { site } from '../data/navigation'

export default function Home() {
  return (
    <>
      <Seo title="Tax & Financial Services" description="CFE Companies provides tax and financial services to taxpayers and business organizations throughout the United States." />
      <Hero />
      <Marquee />

      <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
        <h2 className="mb-8 text-base font-semibold !tracking-normal text-brand-ink">Financial guidance for individuals and businesses.</h2>
        <ScrollText text={site.statement} className="max-w-6xl text-[clamp(1.9rem,4.4vw,4rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-ink" />
        <Reveal className="mt-10"><Button to="/services" variant="outline" arrow>Explore Our Services</Button></Reveal>
      </section>

      <section className="px-3 pb-24 md:px-4">
        <div className="mx-auto max-w-[96rem]">
          <ServiceGrid heading={<SectionHeading light eyebrow="Our Services" title="Tax & Financial Services" text="CFE Tax Services is a full-service business development group and general tax consulting firm." />} />
        </div>
      </section>

      <MissionSection />
      <HistoryTimeline />

      <section className="px-6 py-24 md:px-8 lg:px-10">
        <Reveal className="mx-auto grid max-w-[88rem] items-end gap-8 rounded-[2rem] bg-sage p-8 md:p-14 lg:grid-cols-[1.4fr_1fr] lg:p-20">
          <h2 className="text-[clamp(2.2rem,5vw,4.2rem)]">Looking for suggestions?</h2>
          <div>
            <p className="text-lg text-ink/80">Managing your personal finances does not have to be a solo job. Talk to CFE about where to start.</p>
            <div className="mt-6"><Button to="/contact" arrow>Talk to CFE</Button></div>
          </div>
        </Reveal>
      </section>

      <FinanceControl />

      <section className="mx-auto max-w-[88rem] px-6 pb-24 md:px-8 lg:px-10">
        <SectionHeading title="Meet the Team" className="mb-12" />
        <div className="grid gap-5">{team.map((m) => <TeamCard key={m.name} member={m} />)}</div>
      </section>

      <StatsSection />
      <ClientLogos />
      <Testimonials />

      <section className="mx-auto w-full max-w-[88rem] px-6 pb-20 md:px-8 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <SectionHeading title="Latest News" />

          <Link
            to="/news"
            className="inline-flex shrink-0 items-center gap-3 font-semibold text-ink transition-colors duration-200 hover:text-[#4BD0FE]"
          >
            <span>All news</span>

            <span className="grid h-9 w-9 place-items-center rounded-full border border-ink/20 transition-all duration-200 hover:border-[#4BD0FE] hover:bg-[#4BD0FE]">
              →
            </span>
          </Link>
        </div>

        <NewsList limit={3} />
      </section>
      <CTASection />
    </>
  )
}
