import React from 'react'
import PropTypes from 'prop-types'
import website from '../../config/website'

const SkipNavLink = ({ children, ...props }) => (
  <a {...props} href={`#${website.skipNavId}`} data-reach-skip-link>
    {children}
  </a>
)

export default SkipNavLink

SkipNavLink.propTypes = {
  children: PropTypes.node,
}

SkipNavLink.defaultProps = {
  children: 'Skip to content',
}
