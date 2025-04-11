/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',  // ✅ Correct hostname
        pathname: '/**',  // ✅ Allows all images from this domain
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',  // ✅ Correct hostname
        pathname: '/**',  // ✅ Allows all images from this domain
      },
    ],
  },
};

module.exports = nextConfig;  // ✅ Correct export
