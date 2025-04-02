import type { NextConfig } from "next";
import withPWA from 'next-pwa';
const nextConfig: NextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        port: '',
        pathname: '/res/hashnode/image/**',
      },
    ],
  },
};

export default nextConfig;
