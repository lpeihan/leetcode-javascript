module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  // off 0 warn 1 error 2
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true
      }
    ],
    'semi': [2, 'always'],
    'camelcase': 0,
    'no-undef': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': [2, 'never']
  }
}
