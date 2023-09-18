module.exports = {
  extends: ['@etchteam'],
  rules: {
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'h',
      },
    ],
    'unused-imports/no-unused-imports': [
      'error',
      {
        varsIgnorePattern: 'h',
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
