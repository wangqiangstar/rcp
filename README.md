# rcp

[![build status](https://img.shields.io/travis/imcuttle/rcp/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/rcp)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/rcp.svg?style=flat-square)](https://codecov.io/github/imcuttle/rcp?branch=master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

Anything about React Component

## Develop

```bash
git clone https://github.com/imcuttle/rcp.git
cd rcp
npm install
npm run bootstrap
```

### New a package

Use [edam](https://github.com/imcuttle/edam) for generating.

```bash
npm run new
# Or use edam-cli in straightway
npm i edam-cli -g
edam
```

#### About package name

- internal package

should be named as `_foo`, eg. `@rp/_types`.

- utility package

should be named as `util.{{lowerCase}}`, eg. `@rp/util.displayname`.

- hoc package

should be named as `hoc.{{lowerCase}}`, eg. `@rp/hoc.i18n`.

- component package

should be named as `c.{{lowerCase}}`, eg. `@rp/c.text`.

## Related

## Authors

This library is written and maintained by imcuttle, [moyuyc95@gmail.com](mailto:moyuyc95@gmail.com).

## License

MIT
