import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { name as packageName } from './package.json'
import './Sandwich.css'

function Sandwich(props) {
  const classes = {root: "sandwich"}
  const { className, children, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <h3>Sandwich component</h3>
      {children}
    </div>
  )
}

Sandwich.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Sandwich.defaultProps = {}

Sandwich.displayName = 'SandwichComponent'

export default Sandwich
