import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default [
  ...next(),
  prettier,
  {
    rules: {
      // enforce single quotes
      quotes: ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'prettier/prettier': 'error',
    },
  },
];
