const isTest = (process.env.BABEL_ENV || process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: isTest ? 'commonjs' : false,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-object-assign',
    '@babel/plugin-transform-react-constant-elements',
    'babel-plugin-transform-react-remove-prop-types',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', { loose: false }],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
    ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
    '@babel/plugin-proposal-do-expressions',
    ['transform-react-jsx', { pragma: 'h' }],
  ],
};
