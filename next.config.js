/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost:1337",
      "localhost",
      "rocky-hamlet-41943.herokuapp.com",
    ],
  },
};

module.exports = nextConfig;
