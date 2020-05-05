import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.nav`
  padding-bottom: 2rem;
  a {
    color: ${(props) => (props.invert ? props.theme.colors.greyLight : props.theme.colors.greyDark)};
    font-weight: 400;
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

class Header extends Component {
  render() {
    const { invert } = this.props
    return (
      <StyledHeader invert={invert}>
        <Link to="/" aria-label="Back to Home">
          Frontend Developer
        </Link>
      </StyledHeader>
    )
  }
}

export default Header

Header.propTypes = {
  invert: PropTypes.bool,
}

Header.defaultProps = {
  invert: false,
}
