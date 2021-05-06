// const setup = require('./test/setup');
const { aliases } = require('./server/aliases');

// 모듈 축약어
const moduleNameMapper = {};
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  const aliasHasExtension = /\.\w+$/.test(aliasTo);
  moduleNameMapper[`^${alias}$`] = aliasHasExtension
    ? `<rootDir>/${aliasTo}`
    : `<rootDir>/${aliasTo}/index.js`;
  moduleNameMapper[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`;
}

module.exports = {
  // globalSetup: setup,
  setupFiles: ['<rootDir>/test/setup'],
  testMatch: ['**/test/**/(*.)test.js'], // test 케이스 ex) xxx.test.js
  moduleFileExtensions: ['js'],
  moduleNameMapper: moduleNameMapper,
  collectCoverageFrom: [
    '**/server/**/*.{js,jsx}', // code coverage 대상
    '!**/node_modules/**' // 제외
  ],
  coverageDirectory: '<rootDir>/test/coverage' // code coverage 결과 파일 생성 폴더
};
