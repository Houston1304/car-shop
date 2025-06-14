module.exports = {
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    domains: ["ru-msk-dr3-1.store.cloud.mts.ru", "testing-api.ru-rating.ru"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://testing-api.ru-rating.ru/mas/:path*",
      },
    ];
  },
};
