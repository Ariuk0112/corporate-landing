/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
    defaultLocale: 'mn',
    locales: ['mn', 'en'],
    domains: [
      {
        domain: 'http://localhost:3000/',
        defaultLocale: 'mn',
      },
    ],
  },
};

module.exports = nextConfig;
