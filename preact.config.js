const Dotenv = require('dotenv-webpack');

export default (config, env) => {
  delete config.entry.polyfills;
  config.output.filename = '[name].js';

  if (env.production) {
    config.output.libraryTarget = 'umd';
  }

  config.plugins.push(new Dotenv());

  config.node.process = 'mock';
};
