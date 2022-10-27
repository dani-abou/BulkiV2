import styled from "styled-components";
import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton";
import { BulkiH5, BulkiH4 } from "../../common/styles";
import { BulkiCaption } from "../../common/styles";
import BulkiInput from "../../components/BulkiInput";

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: ${props => props.$previous ? 'space-between' : 'flex-end'};
  padding: 2% 5%;
  flex: 0 0 20%;
`
export const StyledButton = styled(BulkiButton)`
  width: 20%;
`

export const StyledPageUnderStepper = styled.div`
  margin-top: 75px;
  padding: 0 4%;
  flex: 1 0;
`
export const StyledSubformTitle = styled(BulkiH5)`
  margin-left: 1.7%;
`
export const StyledPageTitle = styled(BulkiH4)`
  margin-bottom: 50px;
`
export const StyledRequiredIndicator = styled(BulkiCaption)`
  margin-right: 20px;
  margin-top: 10px;
  opacity: 0.7;
`
export const StyledTierContainer = styled.div`
  width: 96.6%;
  margin-left: 1.7%;
  margin-top: 30px;
  min-height: 80%;
  border-top: 1px solid ${props => props.theme.colors.neutral.alpha(0.5).hexa()};
`
export const StyledListContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.neutral.alpha(0.5).hexa()};
  height: 60px;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 30px;
`

export const StyledTierTitleField = styled(BulkiInput)`
  flex: 0 0 30%;
`

export const StyledTierNumberField = styled(BulkiInput)`
  flex: 0 0 20%;
`

export const StyledTierDeleteIcon = styled.div`
  flex: 0 0 10%;
`

export const StyledIconButton = styled(BulkiIconButton)`
  color: ${props => props.theme.colors.secondary.hexa()};
`

export const StyledAdd = styled(BulkiButton)`
  float: right;
  width: 20%;
`