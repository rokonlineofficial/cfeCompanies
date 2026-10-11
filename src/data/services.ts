import { Building2, Briefcase, Compass, SlidersHorizontal, Receipt, LineChart, ShieldCheck, PiggyBank, BookOpen, type LucideIcon } from 'lucide-react'

export interface Service { id: string; title: string; text: string; icon: LucideIcon }

// Titles are from the legacy site; descriptions paraphrase the legacy Services copy.
export const services: Service[] = [
  { id: 'business-development', title: 'All-service Business Development', icon: Building2, text: 'A full-service business development group that handles business matters from formation and accounting through consulting.' },
  { id: 'medium-size-businesses', title: 'Helping Medium-size Businesses', icon: Briefcase, text: 'Help for small and medium-size privately-held companies to maintain proper tax records and comply with tax rules and regulations.' },
  { id: 'strategic-tax-planning', title: 'Strategic Tax Planning', icon: Compass, text: 'Tax planning with the long view, built around where your business or household is heading.' },
  { id: 'customized-tax-planning', title: 'Customized Tax Planning', icon: SlidersHorizontal, text: 'Tailored tax planning for selected owners of closely-held small to medium-size businesses.' },
  { id: 'individual-corporate-tax', title: 'Individual & Corporate Tax', icon: Receipt, text: 'Trained, experienced tax preparers who look at deductions, credits, write-offs and rebates, with remote tax filing available.' },
  { id: 'tax-analysis', title: 'Tax Analysis & Planning', icon: LineChart, text: 'A careful review of your tax position and a plan for what comes next.' },
  { id: 'irs-audit', title: 'IRS Tax Auditing Assistance', icon: ShieldCheck, text: 'Representation in matters involving tax collection agencies in the United States.' },
  { id: 'retirement', title: 'Financial Retirement Planning', icon: PiggyBank, text: 'Financial planning with your retirement in mind.' },
  { id: 'bookkeeping', title: 'Bookkeeping & Accounting', icon: BookOpen, text: 'Accounting and bookkeeping that keep your records in order.' },
]
