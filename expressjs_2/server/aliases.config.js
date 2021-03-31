const path = require("path");

const aliases = {
  "@": ".",
  "@app": "./app",
  "@api": "./app/api",
  "@config": "./app/config",
  "@views": "./app/views",
  "@web": "./app/web",
  "@routes": "./app/routes",
  "@utils": "./app/utils"
};

const aliasJest = {};
const aliasFullPath = {};
const jsconfig = {};

for (const alias in aliases) {
  // const aliasTo = aliases[alias];
  const aliasTo = path.join(__dirname, aliases[alias]);
  const aliasHasExtension = /\.\w+$/.test(aliasTo);

  // jest
  aliasJest[`^${alias}$`] = aliasHasExtension
    ? aliasTo
    : `${aliasTo}/index.js`;
  aliasJest[`^${alias}/(.*)$`] = `${aliasTo}/$1`;

  // moduleAlias
  aliasFullPath[alias] = aliasTo;
}

module.exports.aliasJest = aliasJest;
module.exports.aliasFullPath = aliasFullPath;

// module.exports.setupGlobalAlias = function() {
//   require("module-alias/register");
//   const moduleAlias = require("module-alias");
//   moduleAlias.addAliases(mAlias);
// }
