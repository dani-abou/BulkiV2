import styled from "styled-components";
import BulkiButton from "../src/components/BulkiButton";
import { Paper } from "@mui/material"
import { BulkiIconButton } from "../src/components/BulkiButton";


export const StyledGalleryFrame = styled(Paper)`
  width: 90%;
  height: 90%;
  margin-left: 5%;
  margin-top: 2%;
  background-color: ${props => props.theme.colors.surface.hexa()};
  padding: 20px;
`

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