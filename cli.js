#!/usr/bin/env node

const cp = require('child_process')
const meow = require('meow')
const chalk = require('chalk')
const isGitStatusClean = require('.')

const cli = meow(`
	Usage
	  $ is-git-status-clean && [command]

	Examples
	  $ is-git-status-clean && lerna publish
`)


if (!isGitStatusClean()) {
  console.log(chalk.red('Exiting because `git status` is not empty:'))
  console.log()
	cp.execSync('git status')
  process.exit(1)
}
