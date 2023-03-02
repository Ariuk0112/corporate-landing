/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
    defaultLocale: 'en',
    locales: ['mn', 'en'],
    domains: [
      {
        domain: 'http://localhost:3000/',
        defaultLocale: 'en',
      },
    ],
  },
};

module.exports = nextConfig;
