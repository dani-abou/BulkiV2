import styled from "styled-components";
import { BulkiBody2 } from "../../../assets/styles"


export const StyledPaperBody = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10%;
`

export const StyledFieldDiv = styled.div`
  margin-top:10%;
`

export const StyledResponseDiv = styled.div`
`

export const StyledResponse = styled(BulkiBody2)`
  color: ${props => props.theme.colors.onSurface.hexa()};

`