module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  // off 0 warn 1 error 2
  'rules': {
    'semi': [2, 'always'],
    'camelcase': 0,
    'no-undef': 0
  }
}
