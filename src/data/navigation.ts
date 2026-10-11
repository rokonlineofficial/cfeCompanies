export const site = {
  name: 'CFE Companies',
  phone: '(704) 713-6667',
  phoneHref: 'tel:+17047136667',
  email: 'info@cfecompanies.com',
  url: import.meta.env.VITE_SITE_URL ?? 'https://cfecompanies.com',
  clientAreaUrl: import.meta.env.VITE_CLIENT_AREA_URL ?? '',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
  statement:
    'Our firm provides tax and financial services to taxpayers and business organizations throughout the United States with the intent to further their advancement.',
  // TODO: confirm limits with the legacy Send Files form
  upload: { accept: '.pdf,.jpg,.jpeg,.png,.heic,.doc,.docx,.xls,.xlsx', label: 'PDF, JPG, PNG, HEIC, DOC, XLS', maxMB: 10 },
}
// Add real URLs only. Entries with an empty href are not rendered.
export const socials = [
  { label: 'Facebook Page', href: '' },
  { label: 'Google My Business', href: '' },
  { label: 'Yelp Page', href: '' },
  { label: 'Twitter Page', href: '' },
]
export const nav = [
  { to: '/about-us', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/send-document', label: 'Send Document' },
  { to: '/faq', label: 'FAQ' },
  { to: '/news', label: 'News' },
  { to: '/client-area', label: 'Client Area' },
]
