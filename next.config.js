/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // runtime: 'experimental-edge',
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**.ibox.art',
      },
    ],
  },
}

module.exports = nextConfig
