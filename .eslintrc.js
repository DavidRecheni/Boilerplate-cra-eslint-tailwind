module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { 'extensions': ['.jsx', '.tsx'] }],
    'linebreak-style': 0,
    'no-restricted-imports': ['warn', {
      paths: [{
        name: 'react',
        importNames: ['default'],
        message: 'React import not necessary.',
      }],
    }],
  },
};
