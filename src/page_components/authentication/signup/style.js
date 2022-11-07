import styled from "styled-components";
import { BulkiCaption } from "../../../common/styles";
import BulkiInput from "../../../components/BulkiInput";
import { EmailField, PasswordField } from "../utils";

export const StyledNameDiv = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  gap: 5%;
  margin-top: 10%;
`
export const StyledPasswordDiv = styled(StyledNameDiv)`
  margin-bottom: 20px;
`

export const StyledPasswordField = styled(PasswordField)`
  flex: 0 0 47.5%;
`

export const StyledNameField = styled(BulkiInput)`

`

export const StyledPasswordInstructions = styled(BulkiCaption)`
  color: ${props => props.theme.colors.onSurface.hexa()};
  line-height: 1px;
`

export const StyledEmail = styled(EmailField)`
  margin-top: 10%;
  width: 100%;
`
export const StyledHelperText = styled.div`
  max-width: 100%;
  width: 100%;
`

export const StyledAgreements = styled(BulkiCaption)`
  color: ${props => props.theme.colors.onSurface.alpha(0.5).hexa()};
`