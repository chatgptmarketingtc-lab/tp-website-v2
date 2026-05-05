

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/product',           destination: '/features',           permanent: true },
      { source: '/product/voicerx',   destination: '/features/voicerx',   permanent: true },
      { source: '/product/smartsync', destination: '/features/smartsync', permanent: true },
      { source: '/product/snaprx',    destination: '/features/snaprx',    permanent: true },
      { source: '/product/ai-agents', destination: '/features/ai-agents', permanent: true },
      { source: '/product/emr',       destination: '/features/emr',       permanent: true },
      // catch-all for any /product/* not listed above
      { source: '/product/:path*',    destination: '/features/:path*',    permanent: true },
    ]
  },
}

export default nextConfig
