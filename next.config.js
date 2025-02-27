/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
