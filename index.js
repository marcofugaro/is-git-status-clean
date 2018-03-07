const cp = require('child_process')

module.exports = () => {
	const gitStatus = cp.execSync('git status --porcelain').toString().trim()

	return gitStatus === ''
}
