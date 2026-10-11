import { img } from './images'
export interface Member { name: string; role: string; bio: string; photo?: string }
export const team: Member[] = [
  { name: 'Zadih Cadyma', role: 'CEO', bio: 'Owner of the company and managing director who founded CFE Accounting.', photo: img.zadih },
]
