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

const aliasFullPath = {};
for (const alias in aliases) {
  const aliasTo = path.join(__dirname, aliases[alias]);
  aliasFullPath[alias] = aliasTo;
}

module.exports.aliasFullPath = aliasFullPath;