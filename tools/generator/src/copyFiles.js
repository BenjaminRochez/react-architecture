const path = require('path')
const { debug } = require('pretty-log')
const { copy } = require('fs-extra')

module.exports = function copyFiles({ kind, name, dir }) {
  debug(`Copying ${name} template files`)
  return new Promise((resolve, reject) => {
    const source = path.join(__dirname, '../templates', kind)
    copy(source, dir, (err) => {
      if (err) return reject(err)
      resolve({ kind, name, dir })
    })
  })
}
