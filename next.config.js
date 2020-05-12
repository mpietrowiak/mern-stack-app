console.log('next config ........');

module.exports = {
  webpack: (config) => {
    console.log(__dirname);
    config.resolve.alias['@'] = __dirname;
    console.log(config.resolve);
    return config;
  }
}