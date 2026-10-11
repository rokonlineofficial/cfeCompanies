import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import NewsList from '../components/NewsSection'
import CTASection from '../components/CTASection'

export default function News() {
  return (
    <>
      <Seo title="News" description="Latest news and articles from CFE Companies." />
      <section className="mx-auto max-w-[88rem] px-6 pb-20 pt-36 md:px-8 lg:px-10">
        <SectionHeading as="h1" title="Latest News" className="mb-12" />
        <NewsList />
      </section>
      <CTASection />
    </>
  )
}
