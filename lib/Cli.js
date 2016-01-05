'use strict';

let program = require('commander');

program
  .version(require('../package.json').version)
  .command('help', 'Get help with commands', { isDefault: true })
  .parse(process.argv);
