/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/index',
          destination: '/',
        },
      ];
    },
  };
  