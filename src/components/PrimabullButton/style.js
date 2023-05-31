import { Button, IconButton } from "@mui/material";
import styled from "styled-components";


export const StyledButton = styled(Button)`
  min-width: 0px;
  padding: 0;
  width: 120px;
  height: 50px;
  text-decoration: none;
`

export const StyledTextButton = styled(StyledButton)`
  color: ${props => props.theme.colors.onSurface.hexa()};
`

export const StyledIconButton = styled(IconButton)`
  color: ${props => props.theme.colors.onSurface.hexa()};
  background-color: transparent;
  outline: none;
  color: ${props => props.theme.colors.primary.hexa()};
  :hover {
    transition: 0.1s;
    background-color: ${props => props.theme.colors.onSurface.lighten(0.8).alpha(0.5).hexa()};
    box-shadow: 1px 1px 3px ${props => props.theme.colors.onSurface.alpha(0.7).hexa()};
  }
`

export const StyledButtonFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  gap: 10px;
  
`