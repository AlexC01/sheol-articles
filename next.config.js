/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["localhost", "avatars.githubusercontent.com", "lh3.googleusercontent.com"]
  }
};

module.exports = nextConfig;
