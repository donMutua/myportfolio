/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "https://rocky-hamlet-41943.herokuapp.com"],
  },
};

module.exports = nextConfig;
