module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  env: {
    browser: true,
    jest: true
  },
  plugins: [
    'prettier',
    'react-hooks'
  ],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': ['off', { forbid: [] }],
    'global-require': 0,
  }
}