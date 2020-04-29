# Changelog
More than a changelog this is more a steps that I did while set-up the project.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.5] - 2020-04-29
Add [lint-staged](https://www.npmjs.com/package/lint-staged) and [husky](https://www.npmjs.com/package/husky) to run eslint on pre-commit.
NOTE: I just noticed that lint-staged has a [shortcut](https://www.npmjs.com/package/lint-staged#installation-and-setup) to install almost all the tools I previously installed.

## [0.0.4] - 2020-04-29
### Jest
install jest and his types, plus ts-jest.
```sh
yarn add -D jest @types/jest ts-jest
```
Add script _"test":"jest"_ in package.json then
```sh
yarn test --init
```
in the generated _jest.config.js_ file add 
```js
preset: 'ts-jest'
```
Add a dumb test to see if it's working.

## [0.0.3] - 2020-04-28
### ESLint && Prettier
[from here](https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb)


## [0.0.2] - 2020-04-28
### Typescript
after
```sh
yarn add -D typescript
```
and add _"tsc":"tsc"_ script in _package.json_

```sh
yarn run tsc -- --init
```
and put some configuration [inspired here](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

now running 
```sh
yarn run tsc
```
transpile everything in src to dist directory.
```sh
node dist/index.js
```
and the server start

### Typescript + Yarn Berry + VSCode = more setup
[Refer to official docs](https://yarnpkg.com/advanced/editor-sdks#vscode)


[Unreleased]: https://github.com/pierluigi-giancola/node-admin/compare/v0.0.5...HEAD
[0.0.5]: https://github.com/pierluigi-giancola/node-admin/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/pierluigi-giancola/node-admin/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/pierluigi-giancola/node-admin/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/pierluigi-giancola/node-admin/releases/tag/v0.0.2