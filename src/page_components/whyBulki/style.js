import styled from 'styled-components'
import { BulkiBody1, media } from '../../common/styles'

export const StyledBody = styled(BulkiBody1)`
  margin: 20px 20%;
  text-align: center;
  ${() => media.mobile(`
    margin: 10px 5%;
  `)}
`