import styled from "styled-components";
import { FormControlLabel } from "@mui/material";
import BulkiButton, { BulkiIconButton } from "../../../components/BulkiButton";
import { BulkiCaption, BulkiH4 } from "../../../assets/styles";
import { PasswordField, EmailField } from "../utils";


export const StyledSignIn = styled(BulkiH4)`
`

export const StyledPassword = styled(PasswordField)`
  width: 100%;
  margin-top: 10%;
`

export const StyledEmail = styled(EmailField)`
  width: 100%;
  margin-top: 10%;
`

export const StyledOptionsDiv = styled.div`
`

export const StyledOptions = styled(BulkiCaption)`
  text-decoration: underline;
  text-align: right;
  display: block;
  margin: 0;
  cursor:pointer;
    vertical-align: bottom;
  :hover {
    color: ${props => props.theme.colors.secondary.hexa()};
  }
`

export const StyledIconDiv = styled.div`
  width: 16%;
`

export const StyledIconButton = styled(BulkiIconButton)`
  color: ${props => props.secondary ? props.theme.colors.secondary.lighten(0.1).hexa() : props.theme.colors.onSurface.hexa()};
`

export const StyledSearchFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 15%;
  margin-top: 3%;
`
export const StyledCheckbox = styled(FormControlLabel)`
`


