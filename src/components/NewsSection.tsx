import { Link } from 'react-router-dom'
import { news } from '../data/news'
import { Item, Stagger } from './Reveal'

export function NewsCard({ a }: { a: (typeof news)[number] }) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white transition-colors hover:border-ink/40">
      {a.image && <div className="aspect-video overflow-hidden"><img src={a.image} alt="" width={640} height={360} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" /></div>}
      <div className="p-7">
        <p className="mb-2 text-sm font-semibold text-brand-ink">{a.category}</p>
        <h3 className="mb-3 text-2xl">{a.title}</h3>
        <p className="mb-5 text-muted">{a.excerpt}</p>
        <Link to="/news" className="font-semibold text-ink">Read More</Link>
      </div>
    </article>
  )
}

export default function NewsList({ limit }: { limit?: number }) {
  const list = limit ? news.slice(0, limit) : news
  if (!list.length) return (
    <div className="rounded-3xl border border-dashed border-ink/25 p-10 text-muted">
      <p className="font-semibold text-ink">No articles yet</p>
      <p>Add the real articles in src/data/news.ts and they will appear here.</p>
    </div>
  )
  return <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{list.map((a) => <Item key={a.slug}><NewsCard a={a} /></Item>)}</Stagger>
}
