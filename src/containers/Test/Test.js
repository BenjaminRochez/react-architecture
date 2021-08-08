import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { name as packageName } from './package.json'
import './Test.css'

function Test(props) {
  const classes = {root: "test-container"}
  const { className, children, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <h2>Test container</h2>
      {children}
    </div>
  )
}

Test.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

Test.defaultProps = {}

Test.displayName = 'TestContainer'

export default Test
