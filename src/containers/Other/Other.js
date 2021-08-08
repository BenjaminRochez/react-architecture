import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { name as packageName } from './package.json'
import './Other.css'

function Other(props) {
  const classes = {root: "other-container"}
  const { className, children, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <h2>Other container</h2>
      {children}
    </div>
  )
}

Other.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Other.defaultProps = {}

Other.displayName = 'OtherContainer'

export default Other
