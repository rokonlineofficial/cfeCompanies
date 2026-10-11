import type { ReactNode } from 'react'
import { services } from '../data/services'
import ServiceCard from './ServiceCard'
import Orbs from './Orbs'
import { Stagger } from './Reveal'

// Dark showcase panel; `heading` renders inside it.
export default function ServiceGrid({ heading }: { heading?: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-6 md:p-12">
      <Orbs />
      <div className="relative">
        {heading && <div className="mb-12">{heading}</div>}
        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </Stagger>
      </div>
    </div>
  )
}
