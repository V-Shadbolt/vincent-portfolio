/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy({
  customDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_CUSTOM_DOMAIN,
})({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.vincentshadbolt.ca',
      },
      {
        protocol: 'https',
        hostname: 'api.vincentshadbolt.caundefined',
      },
    ],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    STRAPI_BASE_URL: process.env.STRAPI_BASE_URL || 'http://localhost:3000',
    STRAPI_API_KEY: process.env.STRAPI_API_KEY || '',
  },
  output: 'standalone',
})
