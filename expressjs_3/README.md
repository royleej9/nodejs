# 설치

## 프로젝트 모듈 설치

```bash
npm install
```

## 명령어

``` bash
# 서버 실행
$ npm run start

# jsconfig.json 생성 - vscode 모듈 자동 완성
# aliases.js 변경시 실행 필요
$ npm run jsconfig
```

## VSCODE 에디터 설정

1. Extension 설치 메뉴 이동

2. Extension 검색란에 @recommended 입력

3. workspace recommendations 항목에 나오는 Extension 설치

## cslf -> lf로 변경

Git에서 windows/linux의 기본 라인 변경 값은 lf로 지정

``` bash
git config --global core.autocrlf input
git config --global core.eol lf
```

## alias 설정

- 모듈 경로에 대한 축약어 설정

``` js
require('../../../../some/very/deep/module')

// 아래와 같이 변경 가능
var module = require('@deep/module')
```

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
