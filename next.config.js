/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
