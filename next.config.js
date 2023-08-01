/** @type {import('next').NextConfig} */
const crypto = require('crypto');

function generateRandomNonce() {
  const randomBytes = crypto.randomBytes(16);
  return randomBytes.toString('base64');
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Disable the polyfill for the fs and other problematic modules in the client-side bundle
      config.resolve.fallback = {
        fs: false,
        child_process: false,
        net: false,
        tls: false,
      };
    }

    // Add the html-loader to handle html files
    config.module.rules.push({
      test: /\.html$/,
      loader: 'html-loader',
    });

    return config;
  },
};
module.exports = nextConfig;
