import { site } from '../data/navigation'

export interface SubmitPayload { fields: Record<string, string>; files?: File[]; subject: string }

// Single place to wire a backend. Expects a multipart POST endpoint.
export async function submitForm({ fields, files = [], subject }: SubmitPayload): Promise<void> {
  if (!site.formEndpoint) throw new Error('NOT_CONFIGURED')
  const body = new FormData()
  Object.entries(fields).forEach(([k, v]) => body.append(k, v))
  body.append('subject', subject)
  files.forEach((f) => body.append('attachment', f))
  const res = await fetch(site.formEndpoint, { method: 'POST', body })
  if (!res.ok) throw new Error('REQUEST_FAILED')
}
