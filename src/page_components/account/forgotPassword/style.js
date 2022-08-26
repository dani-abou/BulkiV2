import styled from "styled-components";
import { BulkiBody2, BulkiCaption } from "../../../assets/tags";

export const StyledInstructions = styled(BulkiCaption)`
  color: ${props => props.theme.colors.onSurface.hexa()};
  `

export const StyledInstructionsDiv = styled.div`
  margin-top: 5%;
`

export const StyledFieldDiv = styled.div`
  margin-top: 10%;
  width: 100%;
`

export const StyledSentDiv = styled.div`
  margin-top :4%;
`

export const StyledSent = styled(BulkiBody2)`
  color: ${props => props.theme.colors.onSurface.hexa()};

`