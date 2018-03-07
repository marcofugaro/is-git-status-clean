# is-git-status-clean [![Build Status](https://travis-ci.org/marcofugaro/is-git-status-clean.svg?branch=master)](https://travis-ci.org/marcofugaro/is-git-status-clean)

> Check if the git working directory is clean


## Install

```
npm install is-git-status-clean
```
or
```
yarn add is-git-status-clean
```

## Usage

```js
const isGitStatusClean = require('is-git-status-clean')

console.log(isGitStatusClean())
//=> true or false
```
or from the console
```
$ is-git-status-clean && [command]
```

## API

### isGitStatusClean()
Returns `true` if there are no edited, untracked or staged files in the working directory, or `false` if the contrary.

## CLI
You can use `is-git-status-clean` from your npm scripts to prevent a publish if the working directory is dirty.

In your package.json:
```
"scripts": {
	"deploy":  "is-git-status-clean && [command]",
```
or even
```
"scripts": {
	"prepublish":  "is-git-status-clean",
```


## License

MIT © [Marco Fugaro](http://marcofugaro.it)
