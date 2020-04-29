[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Quick start Node.js Enterprise

This is a Quickstart project that wraps library for linting, testing, formatting, enforce this thing on commit, pipelines and more.

### Hot-Reload:
- [nodemon](https://nodemon.io/)
- [ts-node](https://www.npmjs.com/package/ts-node): run ts without transpile them, used for speed

### Enviroment Variable config:
- [dotenv-safe](https://www.npmjs.com/package/dotenv-safe): a npm package build on top of dotenv, let you share a _.env.example_ with just keys and check when loading your _.env_ if all keys from _.env.example_ are present in _.env_

### Linting:
- [Eslint](https://eslint.org/)

### Formatting:
- [prettier](https://prettier.io/)

### Testing:
- [jest](https://jestjs.io/)

### Bind to git hooks:
- [husky](https://github.com/typicode/husky)

### Apply arbitrary code to staged file:
- [lint-staged](https://github.com/okonet/lint-staged)

### Enforce conventional commits:
- [commitlint](https://github.com/conventional-changelog/commitlint): ensure that commit message follow conventional rules
- [commitizen](https://github.com/commitizen/cz-cli): help write conventional commits