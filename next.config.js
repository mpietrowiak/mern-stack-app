const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname;
    return config;
  }
}