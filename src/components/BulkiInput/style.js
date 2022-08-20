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

export const StyledInputEnd = styled.div`
  flex: 0 0 18%;
  height: 100%;
  text-align: center;  
  padding: 0;
  margin:0;
  ${props => props.borderOn == 'right' ?
    `border-right: 1px solid ${props.theme.colors.onSurface.alpha(0.3).hexa()};` :
    `border-left: 1px solid ${props.theme.colors.onSurface.alpha(0.3).hexa()};`

  }
`