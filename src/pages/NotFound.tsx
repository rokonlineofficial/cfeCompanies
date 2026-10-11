import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you are looking for could not be found." />
      <section className="mx-auto max-w-[88rem] px-6 pb-32 pt-36 md:px-8 lg:px-10">
        <SectionHeading as="h1" title="Page not found" text="The page may have moved." />
        <div className="mt-8"><Button to="/" arrow>Back to home</Button></div>
      </section>
    </>
  )
}
