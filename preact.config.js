// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require('dotenv-webpack');

const preactConfig = (config, env) => {
  delete config.entry.polyfills;
  config.output.filename = '[name].js';

  if (env.production) {
    config.output.libraryTarget = 'umd';
  }

  config.plugins.push(new Dotenv());

  config.node.process = 'mock';
};

export default preactConfig;
