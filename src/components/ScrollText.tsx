import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'motion/react'

function Word({ w, p, a, b }: { w: string; p: MotionValue<number>; a: number; b: number }) {
  const opacity = useTransform(p, [a, b], [0.14, 1])
  return <motion.span style={{ opacity }} className="mr-[0.26em] inline-block" aria-hidden="true">{w}</motion.span>
}
// Words light up one by one as the paragraph scrolls through the viewport.
export default function ScrollText({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.82', 'end 0.5'] })
  const words = text.split(' ')
  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => <Word key={i} w={w} p={scrollYProgress} a={i / words.length} b={(i + 1) / words.length} />)}
    </p>
  )
}
