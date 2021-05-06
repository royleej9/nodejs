module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true
  },
  // https://eslint.org/docs/rules/
  // https://github.com/prettier/eslint-config-prettier
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12
  }
};
