import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Twitter = ({ type, username, title, desc, image }) => (
  <Helmet>
    <meta name="twitter:card" content={type} />
    {username && <meta name="twitter:creator" content={username} />}
    {title && <meta name="twitter:title" content={title} />}
    {desc && <meta name="twitter:description" content={desc} />}
    {image && <meta name="twitter:image" content={image} />}
  </Helmet>
)

export default Twitter

Twitter.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
}

Twitter.defaultProps = {
  type: 'summary_large_image',
  username: null,
  title: null,
  desc: null,
  image: null,
}
