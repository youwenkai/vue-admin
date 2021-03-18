const path = require('path');

const appDir = process.cwd();

const appResolve = (relativePath) => path.resolve(appDir, relativePath);

module.exports = {
  appResolve,
};
