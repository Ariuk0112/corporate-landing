/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    localeDetection: false,
    eslint: { ignoreDuringBuilds: true },
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
