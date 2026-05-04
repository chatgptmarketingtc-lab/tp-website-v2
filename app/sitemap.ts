import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tatvapractice.com'
  const now = new Date()

  const routes: { url: string; priority: number }[] = [
    { url: '/',                         priority: 1.0 },
    { url: '/product',                  priority: 0.9 },
    { url: '/product/voicerx',          priority: 0.9 },
    { url: '/product/smartsync',        priority: 0.9 },
    { url: '/product/snaprx',           priority: 0.9 },
    { url: '/product/ai-agents',        priority: 0.9 },
    { url: '/product/emr',              priority: 0.9 },
    { url: '/solutions/clinics',        priority: 0.85 },
    { url: '/solutions/hospitals',      priority: 0.85 },
    { url: '/pricing',                  priority: 0.8 },
    { url: '/security',                 priority: 0.75 },
    { url: '/company/about',            priority: 0.7 },
    { url: '/contact',                  priority: 0.7 },
    { url: '/resources/dhis-scheme',    priority: 0.65 },
    { url: '/resources/abdm-abha',      priority: 0.65 },
  ]

  return routes.map(({ url, priority }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority,
  }))
}
