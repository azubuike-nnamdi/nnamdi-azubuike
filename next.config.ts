import type { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
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
