/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
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
