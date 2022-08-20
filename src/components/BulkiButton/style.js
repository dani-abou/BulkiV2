import styled from "styled-components";
import { Button } from "@mui/material";

export const StyledButton = styled(Button)`
  min-width: 0px;
`

export const StyledTextButton = styled(StyledButton)`
  color: ${props => props.theme.colors.onSurface.hexa()};
`

