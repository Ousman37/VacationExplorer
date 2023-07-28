/** @type {import('next').NextConfig} */
// next.config.js

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
    // Add the html-loader to handle html files
    config.module.rules.push({
      test: /\.html$/,
      loader: 'html-loader',
    });

    return config;
  },
};

module.exports = nextConfig;

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   images: {
//     domains: [
//       'res.cloudinary.com',
//       'avatars.githubusercontent.com',
//       'lh3.googleusercontent.com',
//     ],
//   },
// };

// module.exports = nextConfig;
