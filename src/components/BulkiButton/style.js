import styled from "styled-components";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material"


export const StyledButton = styled(Button)`
  min-width: 0px;
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