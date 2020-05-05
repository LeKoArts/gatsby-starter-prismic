import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledFooter = styled.footer`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 6rem auto 0 auto;
  padding: 2rem;
  color: ${(props) => props.theme.colors.grey};
`

class Footer extends Component {
  render() {
    const { children } = this.props
    return <StyledFooter>{children}</StyledFooter>
  }
}

export default Footer

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}
