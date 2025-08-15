/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
  env: {
    NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: '-xTl6Uj82Gys3gIS0tN833BT_PB68qmI_PykPMf77uc',
  },
}

module.exports = nextConfig