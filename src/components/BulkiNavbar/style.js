import { AppBar } from "@mui/material";
import styled from "styled-components";
import BulkiButton from "../BulkiButton";
import BulkiInput from "../BulkiInput";

export const StyledAppbar = styled(AppBar)`
  width: 100%;
  min-width: 1050px;
  height: 18%;
  box-shadow: none;
`

export const StyledBulkiLogoContainer = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 110%;
  width: 200px;
  margin-left: 10%;
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
  width: ${props => props.width || '10%'};
  margin:0;
  float: right;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  box-shadow: none;
  :hover {
    box-shadow: none;
  }
`
