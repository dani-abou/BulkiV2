import { FormControl, FormLabel } from "@mui/material";
import styled from "styled-components";
import { BulkiCaption, BulkiH5 } from "../../../assets/styles";

export const StyledFormLabel = styled(FormLabel)`
  color: ${props => props.theme.colors.onSurface.hexa()};
`

export const StyledStyledInstruction = styled(BulkiCaption)`
  color: ${props => props.theme.colors.onSurface.alpha(0.5).hexa()};
`

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`

export const StyledSectionTitle = styled(BulkiH5)`
  margin-top: 30px;
`