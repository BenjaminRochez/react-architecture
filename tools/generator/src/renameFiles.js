const path = require('path')
const { debug } = require('pretty-log')
const { readdir, rename } = require('fs-extra')

module.exports = function renameFiles({ kind, name, dir }) {
  debug(`Renaming ${name} template files`)

  return new Promise((resolve, reject) => {
    readdir(dir, (err, files) => {
      if (err) {
        return reject(err)
      }
      files.forEach((fileName) => {
        if (fileName === 'package.json') {
          return
        }
        const rest = fileName.split('.').splice(1).join('.')
        const from = path.join(dir, fileName)
        const to = path.join(dir, `${name}.${rest}`)
        rename(from, to, (err) => {
          if (err) return reject(err)
          resolve({ kind, name, dir })
        })
      })
    })
  })
}
