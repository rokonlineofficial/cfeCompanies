import type { Member } from '../data/team'
export default function TeamCard({ member }: { member: Member }) {
  return (
    <article className="group grid overflow-hidden rounded-[2rem] bg-white md:grid-cols-[minmax(0,22rem)_1fr]">
      <div className="aspect-[4/5] overflow-hidden bg-sage md:aspect-auto">
        {member.photo
          ? <img src={member.photo} alt={`Portrait of ${member.name}`} width={600} height={750} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
          : <div className="grid size-full place-items-center text-8xl font-semibold text-ink/30" aria-hidden="true">{member.name[0]}</div>}
      </div>
      <div className="flex flex-col justify-end p-8 md:p-12">
        <h3 className="text-4xl">{member.name}</h3>
        <p className="mt-2 font-semibold text-brand-ink">{member.role}</p>
        <p className="mt-4 max-w-md text-muted">{member.bio}</p>
      </div>
    </article>
  )
}
