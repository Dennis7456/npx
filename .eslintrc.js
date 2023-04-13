module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '@imaginary-cloud/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
  },
}
