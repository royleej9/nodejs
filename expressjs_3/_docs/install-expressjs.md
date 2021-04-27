# 설치

## expressjs

```bash
# Express 애플리케이션 생성기
$ npm install express-generator -g

# 프로젝트 생성
$ express --ejs --git myapp
```

## prettier & eslint

```bash
# prettier
# --save-exact : package.json에서 '^' 버전 표기시 생략/버전 고정
$ npm install --save-dev --save-exact prettier

# eslint 설치
# https://eslint.org/docs/rules/
$ npm install eslint --save-dev

# eslint 설치 & 환경 설정 파일 생성
$ npx eslint --init

# eslint-config-prettier
# https://github.com/prettier/eslint-config-prettier
$ npm install --save-dev eslint-config-prettier

# eslint-plugin-prettier
# https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
$ npm install --save-dev eslint-plugin-prettier
```

### eslint 환경 설정

- .eslintrc.js

```js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true
  },
  // https://eslint.org/docs/rules/
  // https://github.com/prettier/eslint-config-prettier
  // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12
  }
};
```

### prettier 환경 설정

- .prettierrc.js

```js
module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'strict',
  printWidth: 80,
  proseWrap: 'never',
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false
};
```

- .prettierignore

```
/node_modules/**
```
