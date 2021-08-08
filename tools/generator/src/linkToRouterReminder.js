const decamelize = require('decamelize')

module.exports = function linkToRouterReminder({ name }) {
  return `

    YOU NOW NEED TO LINK THE PAGE TO THE ROUTER
    ===========================================
    - add the following to src/App -
    ===========================================

    import ${name} from 'src/pages/${name}'

    <Router exact path="/${decamelize(name, { separator: '-' })}" component={${name}} />
  `
}
