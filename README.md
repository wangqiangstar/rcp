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

- React Hook related

should be named as `use.{{lowerCase}}`, eg. `@rp/use.i18n`.

## Packages

- [@rcp/c.keepalive](packages/c.keepalive) - Keep react component view / store when switched view.  
- [@rcp/c.loadingwrapper](packages/c.loadingwrapper) - A component for easy create loading mask  
- [@rcp/c.preventfastop](packages/c.preventfastop) - Prevent some fast operation (eg. click)  
- [@rcp/c.prompt](packages/c.prompt) - Advanced React router prompt support beforeunload  
- [@rcp/hoc.i18n](packages/hoc.i18n) - React Component's high order component about internationalization  
- [@rcp/hoc.mount](packages/hoc.mount) - The high order component for mounting component  
- [@rcp/hoc.uncontrolled](packages/hoc.uncontrolled) - The high order component for creating uncontrolled component  
- [@rcp/use.behaviorsubject](packages/use.behaviorsubject) - use hook for rxjs behavior subject  
- [@rcp/use.compareeffect](packages/use.compareeffect) - use custome compare effect  
- [@rcp/use.fetcher](packages/use.fetcher) - async data fetcher  
- [@rcp/use.forceupdate](packages/use.forceupdate) - forceUpdate like legacy react  
- [@rcp/use.i18n](packages/use.i18n) - A react hook for using i18n  
- [@rcp/use.i18ncontext](packages/use.i18ncontext) - A react hook for using i18n provider/consumer  
- [@rcp/use.persistfn](packages/use.persistfn) - use persist fn  
- [@rcp/use.persistref](packages/use.persistref) - Persist the ref value  
- [@rcp/use.replacer](packages/use.replacer) - Replace runtime value as your wish  
- [@rcp/use.shared](packages/use.shared) - shared value like recoil  
- [@rcp/use.syncstorage](packages/use.syncstorage) - Sync state to storage  
- [@rcp/use.uncontrolled](packages/use.uncontrolled) - Make props.value piped to state, and exposes `onChange`, make react component is **uncontrolled & controlled**  
- [@rcp/use.valuesstate](packages/use.valuesstate) - The useful methods exported for values state  
- [@rcp/util.createlogger](packages/util.createlogger) - Create namespace isomorphic logger  
- [@rcp/util.createmount](packages/util.createmount) - The utility for creating mountable view  
- [@rcp/util.iscompclass](packages/util.iscompclass) - The utility for checking component class  
- [@rcp/util.displayname](packages/util.displayname) - The utility for getting display name  
- [@rcp/util.iselemof](packages/util.iselemof) - The utility determinating the input is element of the component class  
- [@rcp/util.open](packages/util.open) - Open react element standalone  
- [@rcp/util.tocompclass](packages/util.tocompclass) - The utility converting stateless to be component class  


## Authors

This library is written and maintained by imcuttle, [moyuyc95@gmail.com](mailto:moyuyc95@gmail.com).

## License

MIT
