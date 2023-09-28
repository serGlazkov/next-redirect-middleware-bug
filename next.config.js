/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/account',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
