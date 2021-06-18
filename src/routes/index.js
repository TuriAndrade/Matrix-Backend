import fs from 'fs';
import path from 'path';

const routeModules = [];

fs.readdirSync(__dirname)
  .filter((file) => file.slice(-10) === '.routes.js')
  .forEach(async (file) => {
    const module = require(path.join(__dirname, file)).default;
    routeModules.push(module);
  });

module.exports = routeModules;
