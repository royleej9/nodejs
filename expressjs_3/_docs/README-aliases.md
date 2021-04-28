# module-alias

``` bash
require('../../../../some/very/deep/module')

# 아래와 같이 변경 가능
var module = require('@deep/module')
```

### 설치

``` bash
npm i --save module-alias
```

### 설정

- aliases.js 파일 수정

``` js
const aliases = {
  '@': '.',
  '@app': './app',
  '@api': './app/api',
  '@config': './app/config',
  '@views': './app/_views',
  '@web': './app/web',
  '@routes': './app/routes',
  '@utils': './app/utils',
  ...
};
```
