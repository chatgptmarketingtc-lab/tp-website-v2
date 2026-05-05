import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://tatvapractice.com'
  const now = new Date()

  const routes: { url: string; priority: number }[] = [
    { url: '/',                         priority: 1.0 },
    { url: '/features',                  priority: 0.9 },
    { url: '/features/voicerx',          priority: 0.9 },
    { url: '/features/smartsync',        priority: 0.9 },
    { url: '/features/snaprx',           priority: 0.9 },
    { url: '/features/ai-agents',        priority: 0.9 },
    { url: '/features/emr',              priority: 0.9 },
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
