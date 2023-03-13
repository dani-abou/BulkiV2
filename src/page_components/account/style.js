import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import { BulkiCaption, BulkiH5, BulkiH6 } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton";
import BulkiCard from "../../components/BulkiCard";
import BulkiModal from "../../components/BulkiModal";
import BulkiSurface from "../../components/BulkiSurface";

export const StyledSurface = styled(BulkiSurface)`
  padding: 0;
  height: 100%;
`

export const StyledLeft = styled.div`
  border-right: 1px solid ${props => props.theme.colors.onSurface.alpha(0.4).hexa()};
  flex: 0 0 20%;
  height: 100%;
`

export const StyledRight = styled.div`
  position: relative;
  width: 100%;
  padding: 5%;
`

export const StyledFlex = styled.div`
  display: flex;
  gap: 20px;
  min-height: 100%;
`

export const StyledTabs = styled(Tabs)`
  gap: 500px;
  justify-content:space-between;

`

export const StyledTab = styled(Tab)`
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.4).hexa()};

`
export const StyledTitleBox = styled.div`
  height: 150px;
  border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.4).hexa()};
  position: relative;
`

export const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledAccountCard = styled(BulkiCard)`
  height: 100%;
  flex: 0 0 240px;
`
export const StyledAccountCardContainer = styled.div`
  width: 90%;
  height: 380px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  gap: 20px;
  overflow-x: scroll;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 20px;
`

export const StyledAccountPageHeader = styled(BulkiH5)`
  opacity: 0.7;
  margin-bottom: 30px;

`

export const StyledAccountSectionLabel = styled(BulkiH6)`
  opacity: 0.6;
  margin-bottom: 10px;
  margin-top: 20px;

`

export const StyledInputFlex = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`



export const StyledInputLabel = styled(BulkiCaption)`
  opacity: 0.5;
`

export const StyledNameInputWithLabel = styled.div`
  width: 100%;
`

export const StyledButtonsFlex = styled.div`
  display: flex;
  float: right;
  width: 30%;
  gap: 10px;
  height: 40px;
  margin-bottom: 40px;
`

export const StyledAccountButton = styled(BulkiButton)`
  width: 100%;
  font-size: 12px;
`

export const StyledPasswordResetButton = styled(BulkiButton)`
  margin-top: 50px;
  float:right;
`

export const StyledModalBodyDiv = styled.div`
  height: 100%;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

export const StyledSubmitButton = styled(BulkiButton)`
  float: right;
  margin-top: 35px;
`

export const StyledModal = styled(BulkiModal)`
  height: 350px;
`

export const StyledEmailSubmitButtons = styled.div`
  display: flex;
  margin-top: 35px;
  justify-content: space-between;

`