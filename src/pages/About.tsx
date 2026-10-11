import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import MissionSection from '../components/MissionSection'
import HistoryTimeline from '../components/HistoryTimeline'
import TeamCard from '../components/TeamCard'
import StatsSection from '../components/StatsSection'
import ClientLogos from '../components/ClientLogos'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { team } from '../data/team'
import { site } from '../data/navigation'

export default function About() {
  return (
    <>
      <Seo title="About Us" description="Learn about CFE Companies: our mission, the history of CFE Tax Services, and the team behind our tax and financial services." />
      <section className="mx-auto max-w-[88rem] px-6 pb-8 pt-36 md:px-8 lg:px-10">
        <SectionHeading as="h1" eyebrow="About Us" title="A tax and financial services firm with a clear purpose." text={site.statement} />
      </section>
      <MissionSection />
      <HistoryTimeline />
      <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
        <SectionHeading title="Meet the Team" className="mb-12" />
        <div className="grid gap-5">{team.map((m) => <TeamCard key={m.name} member={m} />)}</div>
      </section>
      <StatsSection />
      <ClientLogos />
      <Testimonials />
      <CTASection />
    </>
  )
}
