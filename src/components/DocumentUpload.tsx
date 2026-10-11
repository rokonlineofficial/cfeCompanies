import { useId, useState } from 'react'
import { FileText, UploadCloud, X } from 'lucide-react'
import { site } from '../data/navigation'

interface Props { files: File[]; onChange: (f: File[]) => void; error?: string }
export default function DocumentUpload({ files, onChange, error }: Props) {
  const id = useId()
  const [drag, setDrag] = useState(false)
  const add = (list: FileList | null) => list && onChange([...files, ...Array.from(list)])
  return (
    <div>
      <label htmlFor={id} onDragOver={(e) => { e.preventDefault(); setDrag(true) }} onDragLeave={() => setDrag(false)} onDrop={(e) => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files) }}
        className={`flex cursor-pointer flex-col items-center gap-1 rounded-3xl border border-dashed p-8 text-center transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-cyan ${drag ? 'border-ink bg-sage' : 'border-ink/30 bg-page hover:bg-sage/60'}`}>
        <UploadCloud size={28} className="text-ink" aria-hidden="true" />
        <strong className="font-semibold text-ink">Choose files or drop them here</strong>
        <span className="text-sm text-muted">Scan or take pictures and upload them. {site.upload.label} · up to {site.upload.maxMB} MB each.</span>
        <input id={id} type="file" multiple accept={site.upload.accept} className="sr-only" aria-invalid={!!error} onChange={(e) => { add(e.target.files); e.target.value = '' }} />
      </label>
      {error && <p role="alert" className="mt-2 text-sm font-semibold text-red-700">{error}</p>}
      {files.length > 0 && (
        <ul className="mt-4 grid gap-2">
          {files.map((f, i) => (
            <li key={f.name + i} className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 text-sm">
              <FileText size={18} className="text-ink" aria-hidden="true" />
              <span className="flex-1 truncate">{f.name}</span>
              <span className="text-muted">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
              <button type="button" aria-label={`Remove ${f.name}`} onClick={() => onChange(files.filter((_, j) => j !== i))} className="grid size-7 place-items-center rounded-full text-muted hover:bg-sage hover:text-ink"><X size={16} aria-hidden="true" /></button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
