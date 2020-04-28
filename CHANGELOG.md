# Changelog
More than a changelog this is more a steps that I did while set-up the project.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2020-04-28
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


[Unreleased]: https://github.com/pierluigi-giancola/node-admin/compare/v0.0.1...HEAD

[0.0.1]: https://github.com/pierluigi-giancola/node-admin/releases/tag/v0.0.1