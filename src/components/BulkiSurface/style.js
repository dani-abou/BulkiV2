import { Paper } from "@mui/material";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  background-color: ${props => props.theme.colors.surface.hexa()};
  width: 90%;
  min-height: 90%;
  margin-left: auto;
  margin-right:auto;
  padding: 20px;
  display:flex;
  flex-direction: column;
`