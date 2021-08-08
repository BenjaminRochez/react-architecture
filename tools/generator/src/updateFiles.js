const { debug } = require('pretty-log')
const replaceInFiles = require('replace')
const decamelize = require('decamelize')

module.exports = async function updateFiles({ kind, name, dir }) {
  debug(`Updating ${name} ${kind} files`)
  replaceInFiles({
    regex: '__NAME__',
    replacement: name,
    paths: [dir],
    recursive: true,
    silent: true,
  })
  replaceInFiles({
    regex: '__name__',
    replacement: decamelize(name, { separator: '-' }),
    paths: [dir],
    recursive: true,
    silent: true,
  })
  return Promise.resolve({ kind, name, dir })
}
