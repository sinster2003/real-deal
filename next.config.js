/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // configuring the images to be rendered based on domains 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bayut-production.s3.eu-central-1.amazonaws.com',
      },
    ],
  }
}

module.exports = nextConfig
