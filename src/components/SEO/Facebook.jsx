import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

const Facebook = ({ url, type, title, desc, image }) => (
  <Helmet>
    {url && <meta property="og:url" content={url} />}
    {type && <meta property="og:type" content={type} />}
    {title && <meta property="og:title" content={title} />}
    {desc && <meta property="og:description" content={desc} />}
    {image && <meta property="og:image" content={image} />}
  </Helmet>
)

export default Facebook

Facebook.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
}

Facebook.defaultProps = {
  url: null,
  type: null,
  title: null,
  desc: null,
  image: null,
}
