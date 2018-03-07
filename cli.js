#!/usr/bin/env node

const cp = require('child_process')
const meow = require('meow')
const chalk = require('chalk')
const indentString = require('indent-string')
const isGitStatusClean = require('.')

const cli = meow(`
	Usage
	  $ is-git-status-clean && [command]

	Examples
	  $ is-git-status-clean && lerna publish
`)


if (!isGitStatusClean()) {
	const gitStatus = cp.execSync('git status --porcelain').toString()

  console.log(chalk.red('Exiting because `git status` is not empty:'))
  console.log()
	console.log(indentString(chalk.dim(gitStatus), 2))
	console.log()
  process.exit(1)
}
