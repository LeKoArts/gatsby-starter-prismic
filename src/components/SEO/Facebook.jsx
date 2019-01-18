import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Facebook = ({ url, type, title, desc, image }) => (
  <Helmet>
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
  </Helmet>
)

export default Facebook

Facebook.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}
