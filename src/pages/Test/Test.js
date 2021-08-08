import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

// import TestContainer from 'src/containers/Test'

import { name as packageName } from './package.json'
import './Test.css'

function Test(props) {
  const classes = {root: "test"}
  const { className, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <Helmet title="Test" />
      {/* <TestContainer /> */}
      <h1>Test</h1>
    </div>
  )
}

Test.propTypes = {
  className: PropTypes.string,
}

Test.defaultProps = {}

Test.displayName = 'TestPage'

export default Test
