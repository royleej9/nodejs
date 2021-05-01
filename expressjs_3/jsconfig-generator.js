/**
 * VSCode에서 모듈 자동 완성 기능을 위한 jsconfig.json 파일 생성
 * https://github.com/bencodezen/vue-enterprise-boilerplate
 * https://code.visualstudio.com/docs/languages/jsconfig
 */

const path = require('path');
const fs = require('fs');
const prettier = require('prettier');
const { aliases } = require('./server/aliases');

const jsconfig = {};
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  jsconfig[alias + '/*'] = [aliasTo + '/*'];
  jsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [aliasTo + '/index.js', aliasTo + '/index.json', aliasTo + '/index.css'];
}

const jsconfigPath = path.resolve(__dirname, 'jsconfig.json');
const jsconfigTemplate = {
  baseUrl: '.',
  include: ['server/**/*', 'test/**/*'], // 소스코드 폴더
  compilerOptions: {
    baseUrl: '.',
    target: 'esnext',
    module: 'es2015'
  }
};

// jsconfig.json 파일 생성
fs.writeFile(
  jsconfigPath,
  prettier.format(
    JSON.stringify({
      ...jsconfigTemplate,
      compilerOptions: {
        ...(jsconfigTemplate.compilerOptions || {}),
        paths: jsconfig
      }
    }),
    {
      ...require('./.prettierrc'),
      parser: 'json'
    }
  ),
  (error) => {
    if (error) {
      console.error(
        'Error while creating jsconfig.json from aliases.config.js.'
      );
      throw error;
    }
  }
);
