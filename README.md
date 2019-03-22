<p align="center"><img width=100% src="https://user-images.githubusercontent.com/10369094/31211729-591d059c-a950-11e7-86af-fa5ea3d7dbac.png"></p>

[![Build Status](https://badgen.net/travis/molnarmark/carbon-now-dir?icon=travis)](https://travis-ci.org/molnarmark/carbon-now-dir)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![MIT License](https://img.shields.io/github/license/molnarmark/carbon-now-dir.svg)](https://github.com/molnarmark/carbon-now-dir/blob/master/LICENSE)
[![Maintenance](https://badgen.net/badge/Maintained%3F/Yes/green)](https://github.com/molnarmark/carbon-now-dir/graphs/commit-activity)

**carbon-now-dir** wraps around [carbon-now-cli](https://github.com/mixn/carbon-now-cli) to generate beautiful images
of the source code in the specified directory, matched by the specific wildcard.

## Installation

### npx

You can invoke `carbon-now-dir` directly by simply using `npx`

```
npx carbon-now-dir
```

### npm

```
npm install -g carbon-now-dir
```

### yarn

```
yarn global add carbon-now-dir
```

## Usage

Most of the options available in **carbon-now-cli** are available in **carbon-now-dir** too.

You can invoke `carbon-now-dir --help`, which will show:

```
Generate beautiful images of your code in files in the specified directory.

Usage
  $ carbon-now-dir <directory> -w "*.js"
Options
  -l, --location       Image save location, default: cwd
  -p, --preset         Use a saved preset
  -h, --headless       Use only non-experimental Puppeteer features
  -w, --wildcard       Use a wildcard for matching files in the directory
  --config             Use a different, local config (read-only)

```

**NOTE:** The wildcard flag is required!

### Presets

You can reuse presets created in **carbon-now-cli** by simply passing the -p or --preset flag with the preset name.

Assuming you have a preset called `my-preset`, and you want to capture all JavaScript files in the `examples` directory,
you would write:

```
carbon-now-dir examples -w "*.js" -p my-preset
```

### More

for more in-depth documentation, you can visit the repository for [carbon-now-cli](https://github.com/mixn/carbon-now-cli).

## License

MIT © [Mark Molnar](https://github.com/molnarmark)
