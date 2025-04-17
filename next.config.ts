/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   turbo: false, // Or just remove this if you're unsure
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ This is now in the right place
  },
};

module.exports = nextConfig; // ✅ Correct export
