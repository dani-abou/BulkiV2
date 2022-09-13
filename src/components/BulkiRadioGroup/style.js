import styled from "styled-components";
import { RadioGroup, FormControl, Radio } from "@mui/material";
import { BulkiH6 } from "../../assets/styles";

export const StyledFormLabel = styled(BulkiH6)`
  color: ${props => props.theme.colors.onSurface.hexa()};
`

export const StyledRadioGroup = styled(RadioGroup)`
  justify-content: space-between;
`

export const StyledFormControl = styled(FormControl)`
  width:100%;
`

export const StyledRadio = styled(Radio)`
  margin-right:8px
`

