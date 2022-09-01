import styled from "styled-components";
import { TextField } from "@mui/material";

export const StyledInputDiv = styled.div`
  display: flex;
  border-radius: 15px;
  border: 1px solid ${props => props.theme.colors.onSurface.hexa()};
  gap:8px;
  overflow: hidden;
  height: 35px;
  align-items: center;
  padding:0;
  overflow: hidden;
`

export const StyledInput = styled(TextField)`
  ${props => props.height && `height: ${props.height};`}
  ${props => props.width && `width: ${props.width};`}
  padding: 0;
`

export const StyledAdornment = styled.div`
  flex: 0 0;
  margin: 0;
`