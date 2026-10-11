import { Reveal } from './Reveal'
export default function SectionHeading({ eyebrow, title, text, light = false, as: H = 'h2', className = '' }:
  { eyebrow?: string; title: string; text?: string; light?: boolean; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <Reveal className={className}>
      {eyebrow && <p className={`mb-4 text-sm font-semibold ${light ? 'text-ink/80' : 'text-brand-ink'}`}>{eyebrow}</p>}
      <H className={`text-[clamp(2.1rem,5vw,4rem)] ${light ? '!text-ink' : ''}`}>{title}</H>
      {text && <p className={`mt-5 max-w-2xl text-lg ${light ? 'text-ink/85' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  )
}
