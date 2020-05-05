import styled from '@emotion/styled'

const Title = styled.p`
  font-style: italic;
  font-size: 1.4444rem;
  position: relative;
  &:before {
    content: '';
    width: 3rem;
    height: 1px;
    background-color: ${(props) => props.theme.colors.grey};
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -80px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.l}) {
    &:before {
      width: 1.5rem;
      left: -40px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.m}) {
    &:before {
      width: 1.5rem;
      left: -35px;
    }
  }
`

export default Title
