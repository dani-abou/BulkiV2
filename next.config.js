// const i18n = require('./src/common/translation/i18n');
// const i18n_init = require('./src/common/translation/i18n_init');
// const nextTranslate = require('next-translate')
const withPlugins = require("next-compose-plugins");

const nextConfig = {

  images: {
    loader: 'akamai',
    path: '/',
    formats: ["image/webp"],
    // domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      }
    ]
  },
  future: {
    webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
    // Looks like backward compatibility approach.
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    };
    return config;
  },
  fallback: false,
  async redirects() {
    return [
      {
        source: '/legacy/:slug*',
        destination: '/',
        permanent: false,
      },
    ]
  },

}

module.exports = withPlugins([], nextConfig)