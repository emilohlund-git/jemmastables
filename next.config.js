/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  il8n: {
    locales: ['sv'],
  },
  defaultLocale: 'sv',
  images: {
    domains: ['instagram.fmmx1-1.fna.fbcdn.net'],
  },
  async rewrites() {
    return [
      {
        source: '/anläggningen',
        destination: '/anläggningen',
      },
    ];
  },
};
