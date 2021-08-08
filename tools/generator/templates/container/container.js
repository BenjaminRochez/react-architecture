import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { name as packageName } from './package.json'
import './__NAME__.css'

function __NAME__(props) {
  const classes = {root: "__name__-container"}
  const { className, children, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <h2>__NAME__ container</h2>
      {children}
    </div>
  )
}

__NAME__.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

__NAME__.defaultProps = {}

__NAME__.displayName = '__NAME__Container'

export default __NAME__
