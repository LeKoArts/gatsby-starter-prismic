import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { BodyText, CodeBlock, Image, Quote } from '../slices'
import { prism } from '../styles'

const Content = styled.div`
  ${prism};
  padding: 6rem 0;
  p,
  li {
    letter-spacing: -0.003em;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    font-size: 21px;
    line-height: 1.58;
    code {
      padding: 0.2rem 0.5rem;
      margin: 0.5rem 0;
    }
  }
  blockquote {
    margin-left: 0;
    padding-left: 1.45rem;
    border-left: 2px solid ${(props) => props.theme.colors.primary};
    p {
      font-size: 19px;
      font-style: italic;
    }
  }
`

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        // These are the API IDs of the slices
        case 'text':
          return <BodyText key={s.id} input={s} />
        case 'code_block':
          return <CodeBlock key={s.id} input={s} />
        case 'image':
          return <Image key={s.id} input={s} />
        case 'quote':
          return <Quote key={s.id} input={s} />
        default:
          return null
      }
    })
    return <Content>{slice}</Content>
  }
}

SliceZone.propTypes = {
  allSlices: PropTypes.array.isRequired,
}
