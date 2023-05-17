import { Paper } from "@mui/material";
import styled from "styled-components";
import { screenSizes } from "../../common/styles";

export const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.colors.surface.hexa()};
  width: 90%;
  min-height: 70%;
  margin-left: auto;
  margin-right:auto;
  padding: 20px;
  display:flex;
  flex-direction: column; 
  position: relative;
  margin-bottom: 50px;

  @media screen and (max-width: ${screenSizes.mobile.max}) {
    width: 100%;
  }
  @media screen and (max-width: ${screenSizes.tablet.max}) and (min-width: ${screenSizes.tablet.min}) {
    width: 98%;
  }
`