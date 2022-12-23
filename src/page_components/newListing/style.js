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

export const StyledDropZoneContainer = styled.div`
  width: 96%;
  height: 200px;
  margin-left: 2%;

  padding: 0px;

  border: 1.5px solid ${props => props.theme.colors.neutral.alpha(0.5).hexa()};
  border-radius: 5px;

  background-color: ${props => props.theme.colors.neutral.lighten(0.5).hexa()};
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  cursor: ${props => props.$empty ? 'pointer' : 'auto'};
`

export const StyledDraggableImagesContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 1% 2%;
  height: 90%;
`

export const StyledDraggableImage = styled.div`
  border: 0.5px solid ${props => props.theme.colors.neutral.alpha(0.5).hexa()};
  border-radius: 4px;
  flex: 0 0 18%;
  user-select: none;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

export const StyledCloseButton = styled(BulkiIconButton)`
  position: absolute;
  top: 2%;
  right: 2%;
  height: 28px;
  width: 28px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color:${props => props.theme.colors.neutral.lighten(0.8).hexa()};
  border: 0.2px solid ${props => props.theme.colors.neutral.hexa()};

  :hover {
      background-color:${props => props.theme.colors.neutral.lighten(0.5).hexa()};
      width: 31px;
      height: 31px;

  }
`

export const StyledImagesInstruction = styled(BulkiCaption)`
  float: right;
  margin-right: 2.5%;
  text-align: right;
  white-space: pre;
`

export const StyledEmptyContents = styled.div`
  position: absolute;
  width: 30%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding-top:15px;
  cursor: pointer;
`

export const StyledDropZone = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: absolute;
  top:  0;
  left: 0;
`

export const StyledAddImageButton = styled(BulkiButton)`
  margin-left: 2%;
  margin-bottom: 2%;
`