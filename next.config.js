/** @type {import('next').NextConfig} */
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

// // next.config.js

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
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // Disable the polyfill for the fs module in the client-side bundle
//       config.target = 'web';
//     }

//     // Add the html-loader to handle html files
//     config.module.rules.push({
//       test: /\.html$/,
//       loader: 'html-loader',
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

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
