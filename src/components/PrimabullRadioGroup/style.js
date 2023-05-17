import styled from "styled-components";
import { RadioGroup, FormControl, Radio } from "@mui/material";
import { PrimabullH6 } from "../../common/styles";

export const StyledFormLabel = styled(PrimabullH6)`
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

