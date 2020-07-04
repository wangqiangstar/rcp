// @loader module?indent=2

module.exports = ({ _, name, description }) => {
  const isComponent = name.startsWith('c.')
  const pkg = {
    name: `@rcp/${name}`,
    author: _.git.name,
    description: description,
    publishConfig: {
      access: 'public'
    },
    license: 'MIT',
    "module": "dist/es",
    "main": "dist/cjs/index.js",
    "typings": "dist/es/index.d.ts",
    "scripts": {
      "dist": "npm run dist:cjs && npm run dist:es",
      "dist:cjs": "rm -rf dist/cjs && tsc --module commonjs --outDir dist/cjs",
      "dist:es": "rm -rf dist/es && tsc --module ES6 --outDir dist/es",
      test: 'npx jest',
      dev: 'npm run dist -- -w',
      prepublishOnly: 'npm run dist',
      version: 'npm run doc',
      doc: 'documentation --markdown-toc=false readme index.js -a public -s "API" && git add README.md'
    },
    repository: {
      type: 'git',
      url: 'git+https://github.com/imcuttle/rcp.git'
    },
    keywords: [_.git.name].concat(name.split('.')).concat('react', 'rcp'),
    engines: {
      node: '>=6'
    },
    version: '1.0.0'
  }
  if (isComponent) {
    pkg.scripts.example = 'webpack '
  }

  return pkg;
}
