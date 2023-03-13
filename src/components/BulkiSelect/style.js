import { FormControl, Select } from "@mui/material";
import styled from "styled-components";

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`

export const StyledSelect = styled(Select)`
  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colors.secondary.hexa()};
  }
`