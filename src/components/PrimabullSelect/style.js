import { FormControl, Select } from "@mui/material";
import styled from "styled-components";
import { PrimabullSubtitle2 } from "../../common/styles/tags";

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`

// export const StyledSelect = styled(Select)`
//   &.Mui-focused .MuiOutlinedInput-notchedOutline {
//     border-color: ${props => props.theme.colors.secondary.hexa()};
//   }
// `
export const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: 0.5px solid ${props => props.$error ? 'maroon' : props.theme.colors.neutral.alpha(0.5).hexa()};
  outline: none;
  border-radius: 5px;
  font-size: 16px;
  color: ${props => props.theme.colors.neutral.darken(0.5).hexa()};
  background-color: inherit;
  cursor: pointer;

  :focus {
    border-color: ${props => props.theme.colors.primary.darken(0.35).hexa()};
    border-width: 1.7px;
  }
`

export const StyledLabel = styled(PrimabullSubtitle2)`
  margin-top: 10px;
  margin-bottom: 5px;
  line-height: 0.8;
  color: ${props => props.theme.colors.neutral.darken(0.3).hexa()};
`