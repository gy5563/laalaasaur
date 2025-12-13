import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import next from 'eslint-config-next';
import prettier from 'eslint-config-prettier';

export default [...nextCoreWebVitals, ...nextTypescript, ...next(), prettier, {
  rules: {
    // enforce single quotes
    quotes: ['error', 'single', { avoidEscape: true }],
    'jsx-quotes': ['error', 'prefer-single'],
    'prettier/prettier': 'error',
  },
}, {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];
