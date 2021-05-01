const path = require('path');
const rootPath = path.resolve(process.cwd());

const aliases = {
  '@': '.',
  '@app': 'server/app',
  '@api': 'server/api',
  '@config': 'server/app/config',
  '@views': 'server/app/_views',
  '@web': 'server/app/web',
  '@routes': 'server/app/routes',
  '@utils': 'server/app/utils'
};

const aliasesFullPath = {};
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  aliasesFullPath[alias] = path.join(rootPath, aliasTo);
}

module.exports.aliases = aliases;
module.exports.aliasesFullPath = aliasesFullPath;
module.exports.setupModuleAlias = function () {
  // module alias 설정 - 제일 먼저 실행되어야함
  const moduleAlias = require('module-alias');
  moduleAlias.addAliases(aliasesFullPath);
};
