/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
