module.exports = function successInfo({ kind, name, dir }) {
    const newLine = '\n'
    const message = [`A brand new ${kind} is ready for use!`, `Name: ${name}`, `Path: ${dir}`]
    return message.join(newLine)
  }
  