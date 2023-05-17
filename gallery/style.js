import styled from "styled-components";
import PrimabullButton from "../src/components/PrimabullButton";
import { PrimabullIconButton } from "../src/components/PrimabullButton";


export const StyledButtonTest = styled(PrimabullButton)`
  width: 10px;
  height: 50px;
`

export const StyledIconButtonTest = styled(PrimabullIconButton)`
  color: ${props => props.theme.colors.primary.hexa()};
  :hover {
    background-color: ${props => props.theme.colors.onSurface.alpha(0.5).hexa()};
  }
`