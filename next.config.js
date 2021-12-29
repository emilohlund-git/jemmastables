/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  il8n: {
    locales: ['sv'],
  },
  defaultLocale: 'sv',
  images: {
    domains: [
      'instagram.fmmx1-1.fna.fbcdn.net',
      'jemmastables-bucket.s3.amazonaws.com',
      'jemmastables.com',
      'cdn.image4.io',
    ],
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
