/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "rabiyulfahim-prompt-refinery-text-to-image-generation.hf.space",
      },
      {
        protocol: "https",
        hostname: "lexica-serve-encoded-images.sharif.workers.dev",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
