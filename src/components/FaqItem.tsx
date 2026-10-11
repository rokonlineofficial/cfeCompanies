import { useId } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'

export default function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId()
  return (
    <div className="border-b border-line">
      <h3 className="!tracking-normal">
        <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle} className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl font-semibold text-ink">
          {q}
          <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="grid size-9 shrink-0 place-items-center rounded-full bg-sage"><Plus size={18} aria-hidden="true" /></motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={id} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="max-w-2xl pb-6 text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
