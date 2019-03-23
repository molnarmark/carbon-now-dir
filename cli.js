#!/usr/bin/env node

const { execSync } = require('child_process');
const readFiles = require('node-readfiles');
const meow = require('meow');
const { bold, red, green } = require('chalk');
const { LATEST_PRESET } = require('./node_modules/carbon-now-cli/src/helpers/globals');

const cli = meow(
  `
 ${bold('Usage')}
   $ carbon-now-dir <directory> -w "*.js"
 ${bold('Options')}
   -l, --location       Image save location, default: cwd
   -p, --preset         Use a saved preset
   -h, --headless       Use only non-experimental Puppeteer features
   -w, --wildcard       Use a wildcard for matching files in the directory
   --config             Use a different, local config (read-only)
`,
  {
    flags: {
      location: {
        type: 'string',
        alias: 'l',
        default: process.cwd()
      },
      preset: {
        type: 'string',
        alias: 'p',
        default: LATEST_PRESET
      },
      config: {
        type: 'string'
      },
      headless: {
        type: 'boolean',
        alias: 'h',
        default: true
      },
      wildcard: {
        type: 'string',
        alias: 'w',
        default: ''
      }
    }
  }
);

const [targetDir] = cli.input;
const flags = cli.flags;

if (!targetDir) {
  cli.showHelp();
  process.exit(1);
}

(async () => {
  if (!flags.w || !flags.wildcard) {
    console.log(`${red.bold('A wildcard is required.')}`);
    cli.showHelp();
    process.exit(1);
  }

  let files = await readFiles(targetDir, { filter: flags.wildcard || '**' }, err => {
    if (err) throw err;
  });

  delete flags['w'];
  delete flags['wildcard'];

  const cliArgs = [];

  for (const key of Object.keys(flags)) {
    const value = flags[key];
    if (!value) {
      continue;
    }

    if (key.length > 1) {
      continue;
    }

    cliArgs.push(`-${key} ${value}`);
  }

  // This here should be illegal but I'm doing it. :)
  files = files.map(fileName => `${targetDir}/${fileName}`.replace('//', '/'));
  const stringArgs = cliArgs.join(' ');

  for (const fileName of files) {
    execSync(`node ${__dirname}/node_modules/carbon-now-cli/cli ${fileName} ${stringArgs}`, { stdio: 'inherit' });
    console.log(green(`\nProcessed ${fileName}!\n`));
  }
})();
