import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/navigation'

function meta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el) }
  el.content = value
}

export default function Seo({ title, description }: { title: string; description: string }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = `${title} | ${site.name}`
    const url = site.url + (pathname === '/' ? '' : pathname)
    document.title = full
    meta('name', 'description', description)
    meta('property', 'og:title', full)
    meta('property', 'og:description', description)
    meta('property', 'og:type', 'website')
    meta('property', 'og:url', url)
    meta('property', 'og:site_name', site.name)
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link) }
    link.href = url
  }, [title, description, pathname])
  return null
}
