/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.shadbolt.ca',
      },
    ],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL || 'http://localhost:3000',
    STRAPI_API_KEY: process.env.STRAPI_API_KEY || '',
  },
  output: 'standalone',
}
