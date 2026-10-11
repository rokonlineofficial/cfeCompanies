import { img } from './images'

export interface ClientLogo { name: string; logo: string; w: number; h: number }
// Logos supplied from the client's existing site assets.
export const clients: ClientLogo[] = [
  { name: 'CFE Accounting', logo: img.cfeAccounting, w: 350, h: 223 },
  { name: 'CFE Consulting', logo: img.cfeConsulting, w: 349, h: 224 },
  { name: 'CFE Properties Corp', logo: img.cfeProperties, w: 157, h: 118 },
]
