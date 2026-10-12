import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/notes',
        permanent: false,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        pathname: '/res/hashnode/image/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/v2/resize:fit:1400/**',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '/**',
      },
    ],
  },
}

export default withPayload(nextConfig)
