import SectionHeading from './SectionHeading'
import { Reveal } from './Reveal'
import ParallaxImage from './ParallaxImage'
import { img } from '../data/images'

export default function MissionSection() {
  return (
    <section className="mx-auto max-w-[88rem] px-6 py-24 md:px-8 lg:px-10">
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <SectionHeading eyebrow="About CFE" title="Our Mission And Overview" />
      <Reveal className="space-y-5 text-lg text-muted">
        <p>CFE Accounting was founded by managing director <strong className="font-semibold text-ink">Zadih Cadyma</strong> after leaving Corporate America in 2006.</p>
        <p>In 2010, CFE Accounting split and CFE Tax Services Incorporated became a separate business entity. CFE Consulting is another subdivision of CFE Companies.</p>
        <p>The company handles business-related matters from business formation and accounting through consulting services.</p>
      </Reveal>
    </div>
    <Reveal className="mt-16"><ParallaxImage src={img.office} alt="Colleagues working at laptops at a shared table in a bright office" width={787} height={478} className="aspect-[16/9] rounded-[2rem] md:aspect-[21/9]" /></Reveal>
    </section>
  )
}
