import styled from 'styled-components'
import { PrimabullBody1, media } from '../../common/styles'

export const StyledBody = styled(PrimabullBody1)`
  margin: 20px 20%;
  text-align: center;
  ${() => media.mobile(`
    margin: 10px 5%;
  `)}
`