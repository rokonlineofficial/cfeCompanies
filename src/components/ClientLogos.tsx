import { clients } from '../data/clients'
import SectionHeading from './SectionHeading'
import { Item, Stagger } from './Reveal'

export default function ClientLogos() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[88rem] px-6 md:px-8 lg:px-10">
        <SectionHeading title="Some Of Our Clients" className="mb-12" />
        {clients.length ? (
          <Stagger className="grid grid-cols-2 items-center gap-6 md:grid-cols-3">
            {clients.map((c) => (
              <Item key={c.name} className="grid h-44 place-items-center rounded-3xl border border-line bg-page p-6 transition-colors duration-300 hover:border-ink/40">
                <img src={c.logo} alt={c.name} width={c.w} height={c.h} loading="lazy" className="max-h-28 w-auto opacity-60 grayscale transition duration-300 hover:scale-105 hover:opacity-100 hover:grayscale-0" />
              </Item>
            ))}
          </Stagger>
        ) : (
          <div className="rounded-3xl border border-dashed border-ink/25 p-10 text-muted"><p className="font-semibold text-ink">Client logos to be added</p></div>
        )}
      </div>
    </section>
  )
}
