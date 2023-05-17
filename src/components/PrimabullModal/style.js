import { Box, Modal } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 500px;
  background-color: ${props => props.theme.colors.surface.hexa()};
  border-radius: 8px;
  box-shadow: 3px 10px 30px ${props => props.theme.colors.onSurface.darken(1).alpha(0.3).hexa()};
  `