import { Tab, Tabs } from "@mui/material";
import styled from "styled-components";
import { BulkiH4 } from "../../common/styles";
import BulkiSurface from "../../components/BulkiSurface";

export const StyledSurface = styled(BulkiSurface)`
  padding: 0;
`

export const StyledLeft = styled.div`
  border-right: 1px solid ${props => props.theme.colors.onSurface.alpha(0.4).hexa()};
  flex: 0 0 20%;
`

export const StyledFlex = styled.div`
  display: flex;
  height: 100%;
  gap: 20px;
  overflow: hidden;
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
  height: 20%;
  border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.4).hexa()};
  position: relative;
`

export const StyledTitle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
transform: translate(-50%, -50%);
`