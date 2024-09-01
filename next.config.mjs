/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["i.ytimg.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
