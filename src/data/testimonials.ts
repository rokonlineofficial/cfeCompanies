import { avatars } from './images'
export interface Testimonial { name: string; location: string; text: string; photo?: string }
// Names/locations are from the legacy page. Paste each real review into `text`.
export const testimonials: Testimonial[] = [
  { name: 'Gina Renard', location: 'Los Angeles, California', text: '', photo: avatars[0] },
  { name: 'Ike Jacobs', location: 'San Antonio, Texas', text: '', photo: avatars[1] },
  { name: 'Shonta', location: 'Washington', text: '', photo: avatars[2] },
  { name: 'Philip Hunt', location: 'Michigan', text: '', photo: avatars[3] },
  { name: 'Amber Page', location: 'Portland, Oregon', text: '', photo: avatars[4] },
]
