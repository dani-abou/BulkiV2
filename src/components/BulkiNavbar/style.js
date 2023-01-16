import { AppBar, Toolbar } from "@mui/material";
import styled from "styled-components";
import BulkiButton from "../BulkiButton";
import BulkiInput from "../BulkiInput";

export const StyledAppbar = styled(AppBar)`
  width: 100%;
  height: 100%;
  box-shadow: none;
  background-color: transparent;
  border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.2).hexa()};
`

export const StyledBulkiLogoContainer = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 100%;


  width: ${props => props.$skinny ? '200px' : '300px'};
  margin-left: 10%;
  transition: all 0.2s ease-out;
`

export const StyledToolbar = styled(Toolbar)`
  gap: 15px;  
  justify-content: space-between;

`

export const StyledCollapsible = styled.div`
  max-height: ${props => props.$skinny ? 0 : '100%'};
  overflow: hidden;
  transition: all 0.2s ease-out;
`

export const StyledButton = styled(BulkiButton)`
  width: 100%;
`

export const StyledBulkiInput = styled(BulkiInput)`
  margin-left: auto;
  margin-right: 0;
  margin-top: 20px;
  height: 100%;
  float: right;
  width: 90%;
`

export const StyledSearchButton = styled(BulkiButton)`
  height: 100%;
  width: ${props => props.width || '100%'};
  margin-top:-1px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  box-shadow: none;
  :hover {
    box-shadow: none;
    background-color: ${props => props.theme.colors.primary.hexa()};
  }
`

export const StyledDropdown = styled.div`
  width: 100%;
`

// export const StyledMenu