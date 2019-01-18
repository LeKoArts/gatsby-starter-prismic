import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Twitter = ({ type, username, title, desc, image }) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    <meta name="twitter:creator" content={username} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
}
