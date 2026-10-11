import { Link } from 'react-router-dom'
import { img } from '../data/images'

export default function CfeLogo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" aria-label="CFE Companies home" className={`inline-flex ${light ? 'rounded-2xl bg-white p-2' : ''}`}>
      <img src={img.logo} alt="CFE Companies" width={300} height={208} className={`w-auto ${light ? 'h-16' : 'h-12 md:h-[3.35rem]'}`} />
    </Link>
  )
}
