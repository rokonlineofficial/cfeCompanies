import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react'
import { FileCheck2, PiggyBank, ShieldCheck, type LucideIcon } from 'lucide-react'
import Button from './Button'
import Orbs from './Orbs'
import { site } from '../data/navigation'
import { img } from '../data/images'

const ease = [0.22, 1, 0.36, 1] as const
const lines = ['Tax & Financial', 'Services Built Around', 'Your Future']

function Chip({ icon: Icon, label, className, delay, bob }: { icon: LucideIcon; label: string; className: string; delay: number; bob: number }) {
  return (
    <motion.div className={`absolute ${className}`} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay, duration: 0.6, ease }}>
      <motion.div animate={{ y: [0, -bob, 0] }} transition={{ duration: 5 + bob / 4, repeat: Infinity, ease: 'easeInOut' }}
        className="flex items-center gap-2.5 rounded-full border border-white/60 bg-white/75 py-2.5 pl-2.5 pr-5 text-sm text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)] backdrop-blur-md">
        <span className="grid size-8 place-items-center rounded-full bg-ink text-brand"><Icon size={16} aria-hidden="true" /></span>{label}
      </motion.div>
    </motion.div>
  )
}

function Dashboard() {
  return (
    <div className="relative mx-auto aspect-[5/5] w-full max-w-[34rem]">
      <motion.div className="absolute inset-x-[2%] bottom-[14%] top-[4%] overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]"
        initial={{ opacity: 0, y: 40, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.45, duration: 1, ease }}>
        <motion.img src={img.collab} alt="Two colleagues reviewing documents on a tablet in a bright office" width={787} height={478} className="size-full object-cover object-[55%_30%]"
          initial={{ scale: 1.18 }} animate={{ scale: 1 }} transition={{ duration: 2.2, ease }} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/40 via-transparent to-transparent" aria-hidden="true" />
      </motion.div>
      <motion.div aria-hidden="true" className="absolute -bottom-1 left-[-3%] w-[64%] rounded-[1.5rem] border border-white/60 bg-white/60 p-4 shadow-[0_24px_60px_-24px_rgba(0,0,0,.7)] backdrop-blur-xl"
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.9, ease }}>
        <div className="mb-2 flex items-center justify-between"><span className="text-xs text-ink/85">Tax &amp; financial overview</span><i className="size-2 rounded-full bg-brand-red" /></div>
        <svg viewBox="0 0 320 90" className="w-full">
          <defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" stopOpacity=".55" /><stop offset="1" stopColor="#ffffff" stopOpacity="0" /></linearGradient></defs>
          <motion.path d="M0 80 C50 76 70 48 120 54 S200 28 250 25 S300 10 320 6 V90 H0Z" fill="url(#fill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3, duration: 1 }} />
          <motion.path d="M0 80 C50 76 70 48 120 54 S200 28 250 25 S300 10 320 6" fill="none" stroke="#0B1D24" strokeWidth="3.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.3, duration: 1.8, ease: 'easeInOut' }} />
          <motion.circle cx="320" cy="6" r="5" fill="#0B1D24" initial={{ scale: 0 }} animate={{ scale: [0, 1.6, 1] }} transition={{ delay: 3.1, duration: 0.6 }} />
        </svg>
      </motion.div>
      <Chip icon={ShieldCheck} label="IRS audit assistance" className="-left-2 top-[10%] md:-left-8" delay={1.1} bob={10} />
      <Chip icon={FileCheck2} label="Remote tax filing" className="-right-2 top-[46%] md:-right-8" delay={1.4} bob={14} />
      <Chip icon={PiggyBank} label="Retirement planning" className="bottom-[4%] right-[2%] md:-right-4" delay={1.7} bob={8} />
    </div>
  )
}

export default function Hero() {
  const sec = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sec, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  const lift = useTransform(scrollYProgress, [0, 1], [0, 90])
  const mx = useMotionValue(-500), my = useMotionValue(-500)
  const nx = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 }), ny = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 })
  const spot = useMotionTemplate`radial-gradient(620px circle at ${mx}px ${my}px, rgba(255,255,255,.28), transparent 62%)`
  const px = useTransform(nx, (v) => v * 26), py = useTransform(ny, (v) => v * 20)

  return (
    <section ref={sec} className="px-3 pb-3 pt-24 md:px-4">
      <motion.div style={{ scale }} className="relative overflow-hidden rounded-[2.5rem] bg-brand"
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left); my.set(e.clientY - r.top); nx.set((e.clientX - r.left) / r.width - 0.5); ny.set((e.clientY - r.top) / r.height - 0.5) }}>
        <Orbs />
        <svg className="pointer-events-none absolute inset-0 size-full opacity-[.12]" aria-hidden="true"><defs><pattern id="g" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="#0B1D24" /></pattern></defs><rect width="100%" height="100%" fill="url(#g)" /></svg>
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} aria-hidden="true" />
        <motion.div style={{ y: lift }} className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-[88rem] items-center gap-12 px-6 py-14 md:px-12 lg:grid-cols-[1.3fr_1fr] lg:px-16">
          <div>
            <motion.p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/8 px-4 py-2 text-sm text-ink/85" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
              <span className="size-2 rounded-full bg-ink" />Tax · Accounting · Financial Services
            </motion.p>
            <h1 className="text-[clamp(2.3rem,4.4vw,4.6rem)] !text-ink" aria-label="Tax & Financial Services Built Around Your Future">
              {lines.map((line, li) => (
                <span key={line} className="block" aria-hidden="true">
                  {line.split(' ').map((w, wi) => (
                    <span key={wi} className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
                      <motion.span className="inline-block" initial={{ y: '115%', rotate: 4 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: 0.9, ease, delay: 0.2 + (li * 3 + wi) * 0.07 }}>{w}</motion.span>
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p className="mt-8 max-w-xl text-lg text-ink/85" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9, ease }}>{site.statement}</motion.p>
            <motion.div className="mt-9 flex flex-wrap gap-3" initial="h" animate="s" variants={{ h: {}, s: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } } }}>
              <motion.div variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }}><Button to="/contact" variant="light" arrow>Get Started</Button></motion.div>
              <motion.div variants={{ h: { opacity: 0, y: 20 }, s: { opacity: 1, y: 0 } }}><Link2 /></motion.div>
            </motion.div>
          </div>
          <motion.div style={{ x: px, y: py }} className="hidden md:block"><Dashboard /></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Ghost button for dark backgrounds
function Link2() {
  return <Button to="/send-document" variant="outline" arrow className="!border-ink/40 !text-ink hover:!bg-white/30 hover:!border-ink">Send Documents</Button>
}
