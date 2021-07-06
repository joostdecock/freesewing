const path = require('path')

module.exports = {
  experimental: {
    externalDir: true,
  },
  webpack: (config, { isServer }) => {
    // Keep fs from throwing errors
    config.resolve.fallback = {
      fs: 'shared/empty.js',
      path: 'shared/empty.js'
    }
    // Alias shared for easy access
    config.resolve.alias.shared = path.resolve(__dirname, '../shared')

    return config;
  },
}