import styled from "styled-components";
import BulkiButton from "../src/components/BulkiButton";
import { BulkiIconButton } from "../src/components/BulkiButton";


export const StyledButtonTest = styled(BulkiButton)`
  width: 10px;
  height: 50px;
`

export const StyledIconButtonTest = styled(BulkiIconButton)`
  color: ${props => props.theme.colors.primary.hexa()};
  :hover {
    background-color: ${props => props.theme.colors.onSurface.alpha(0.5).hexa()};
  }
`