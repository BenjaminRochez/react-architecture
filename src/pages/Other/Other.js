import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import OtherContainer from '../../../src/containers/Other'

import { name as packageName } from './package.json'
import './Other.css'

function Other(props) {
  const classes = {root: "other"}
  const { className, ...rootProps } = props

  return (
    <div className={cx(classes.root, className)} data-testid={`${packageName}.root`} {...rootProps}>
      <Helmet title="Other" />
      <OtherContainer />
    </div>
  )
}

Other.propTypes = {
  className: PropTypes.string,
}

Other.defaultProps = {}

Other.displayName = 'OtherPage'

export default Other
