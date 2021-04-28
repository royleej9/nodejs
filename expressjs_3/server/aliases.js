const path = require('path');
const rootPath = path.resolve(process.cwd());

const aliases = {
  '@': '.',
  '@app': './app',
  '@api': './app/api',
  '@config': './app/config',
  '@views': './app/_views',
  '@web': './app/web',
  '@routes': './app/routes',
  '@utils': './app/utils'
};

const aliasesFullPath = {};
for (const alias in aliases) {
  const aliasTo = aliases[alias];
  aliasesFullPath[alias] = path.join(rootPath, 'server', aliasTo);
}

module.exports.aliasesFullPath = aliasesFullPath;
