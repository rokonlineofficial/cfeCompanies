import { services } from '../data/services'

function Row({ reverse = false, outline = false }: { reverse?: boolean; outline?: boolean }) {
  const list = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {services.map((s, i) => (
        <li key={s.id} className="flex items-center">
          <span className={`whitespace-nowrap px-7 text-[clamp(1.8rem,3.6vw,3.2rem)] font-semibold tracking-[-0.04em] ${outline ? 'stroke-text' : 'text-ink'}`}>{s.title}</span>
          <span className={`size-2.5 rotate-45 ${i % 2 ? 'bg-brand-red' : 'bg-cyan'}`} aria-hidden="true" />
        </li>
      ))}
    </ul>
  )
  return <div className={reverse ? 'marquee-track-rev' : 'marquee-track'}>{list(false)}{list(true)}</div>
}

export default function Marquee() {
  return (
    <div className="marquee space-y-2 overflow-hidden py-12" role="region" aria-label="Our services">
      <Row />
      <Row reverse outline />
    </div>
  )
}
