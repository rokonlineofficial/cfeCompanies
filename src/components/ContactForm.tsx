import { useState, type FormEvent } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import Button from './Button'
import DocumentUpload from './DocumentUpload'
import { site } from '../data/navigation'
import { submitForm } from '../lib/api'

type Status = 'idle' | 'sending' | 'success' | 'error'
const blank = { name: '', email: '', phone: '', info: '', message: '' }
const input = 'w-full rounded-2xl border border-line bg-white px-4 py-3.5 text-ink transition-colors focus:border-ink aria-[invalid=true]:border-red-600'

export default function ContactForm({ withFiles = false }: { withFiles?: boolean }) {
  const [v, setV] = useState(blank)
  const [files, setFiles] = useState<File[]>([])
  const [errs, setErrs] = useState<Record<string, string>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [notConnected, setNotConnected] = useState(false)
  const set = (k: keyof typeof blank) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value })

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const er: Record<string, string> = {}
    if (!v.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Enter a valid email address.'
    if (!withFiles && !v.message.trim()) er.message = 'Tell us how we can help.'
    if (withFiles && !files.length) er.files = 'Attach at least one file.'
    const big = files.find((f) => f.size > site.upload.maxMB * 1048576)
    if (big) er.files = `${big.name} is larger than ${site.upload.maxMB} MB.`
    setErrs(er)
    if (Object.keys(er).length) return
    setStatus('sending'); setNotConnected(false)
    try {
      await submitForm({ fields: v, files, subject: withFiles ? 'Documents from website' : 'Contact request from website' })
      setStatus('success'); setV(blank); setFiles([])
    } catch (err) {
      setNotConnected(err instanceof Error && err.message === 'NOT_CONFIGURED')
      setStatus('error')
    }
  }

  if (status === 'success') return (
    <div role="status" className="flex flex-col items-start gap-3 rounded-3xl bg-sage p-8">
      <CheckCircle2 size={32} className="text-ink" aria-hidden="true" />
      <h3 className="text-3xl">{withFiles ? 'Documents sent' : 'Message sent'}</h3>
      <p className="text-muted">Thank you. CFE Companies will get in touch with you.</p>
      <Button variant="outline" onClick={() => setStatus('idle')}>Send another</Button>
    </div>
  )

  const f = (k: keyof typeof blank, label: string, type = 'text', auto?: string) => (
    <div>
      <label htmlFor={`f-${k}`} className="mb-1.5 block text-sm font-semibold text-ink">{label}</label>
      <input id={`f-${k}`} type={type} autoComplete={auto} className={input} value={v[k]} onChange={set(k)} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `e-${k}` : undefined} />
      {errs[k] && <p id={`e-${k}`} className="mt-1.5 text-sm font-semibold text-red-700">{errs[k]}</p>}
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      {f('name', 'Name', 'text', 'name')}
      <div className="grid gap-5 sm:grid-cols-2">{f('email', 'Email', 'email', 'email')}{f('phone', 'Phone (optional)', 'tel', 'tel')}</div>
      {withFiles && (
        <div>
          <label htmlFor="f-info" className="mb-1.5 block text-sm font-semibold text-ink">Required information</label>
          <textarea id="f-info" rows={4} className={input} value={v.info} onChange={set('info')} placeholder="Answer the questions we asked you to complete." />
        </div>
      )}
      <div>
        <label htmlFor="f-message" className="mb-1.5 block text-sm font-semibold text-ink">{withFiles ? 'Additional message (optional)' : 'Message'}</label>
        <textarea id="f-message" rows={withFiles ? 3 : 5} className={input} value={v.message} onChange={set('message')} aria-invalid={!!errs.message} />
        {errs.message && <p className="mt-1.5 text-sm font-semibold text-red-700">{errs.message}</p>}
      </div>
      {withFiles && <DocumentUpload files={files} onChange={setFiles} error={errs.files} />}
      {status === 'error' && (
        <p role="alert" className="flex gap-3 rounded-2xl bg-red-50 p-4 text-red-900">
          <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          {notConnected ? `This form is not connected to a server yet. Please call ${site.phone} or email ${site.email}.` : `We could not send this. Please try again or call ${site.phone}.`}
        </p>
      )}
      <div><Button type="submit" disabled={status === 'sending'} arrow>{status === 'sending' ? 'Sending…' : withFiles ? 'Send Documents' : 'Send Message'}</Button></div>
    </form>
  )
}
