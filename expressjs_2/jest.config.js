// const setup = require('./test/setup');
const aliasConfig = require("./server/aliases.config")

const aliasFullPath = aliasConfig.aliasFullPath;
const aliasJest = {};

for (const alias in aliasFullPath) {
  const aliasTo = aliasFullPath[alias];
  const aliasHasExtension = /\.\w+$/.test(aliasTo);
  aliasJest[`^${alias}$`] = aliasHasExtension
    ? aliasTo
    : `${aliasTo}/index.js`;
  aliasJest[`^${alias}/(.*)$`] = `${aliasTo}/$1`;
}

module.exports = {
  // globalSetup: setup,
  setupFiles: ['<rootDir>/test/setup'],
  testMatch: ["**/test/**/(*.)test.js"], // test 케이스
  moduleFileExtensions: ["js"], // 테스트 대상
  moduleNameMapper: aliasJest,
  collectCoverageFrom: [
    // code coverage 대상
    "**/webapp/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageDirectory: "<rootDir>/test/coverage" // code coverage 결과 파일 생성 폴더
};
