import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

// import __NAME__Container from 'src/containers/__NAME__'

import { name as packageName } from './package.json'
import './__NAME__.css'

function __NAME__(props) {
  const classes = {root: "__name__"}
  const { className, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <Helmet title="__NAME__" />
      {/* <__NAME__Container /> */}
    </div>
  )
}

__NAME__.propTypes = {
  className: PropTypes.string,
}

__NAME__.defaultProps = {}

__NAME__.displayName = '__NAME__Page'

export default __NAME__
