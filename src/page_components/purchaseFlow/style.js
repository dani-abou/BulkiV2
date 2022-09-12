import { Paper } from "@mui/material";
import styled from "styled-components";
import { BulkiH5 } from "../../assets/styles";
import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton";

export const StyledSurface = styled(Paper)`
  background-color: ${props => props.theme.colors.surface.hexa()};
  width: 95%;
  margin-left: 2.5%;
  padding: 4%;
`

export const StyledPageUnderStepper = styled.div`
  margin-top: 75px;
  padding: 0 4%;
`

export const StyledFormTitle = styled(BulkiH5)`
  margin-left: 3.2%;
`

export const StyledBackButton = styled(BulkiIconButton)`
  margin-top: 40px;
  margin-left: 20px;
`

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: ${props => props.$previous ? 'space-between' : 'flex-end'};
  padding: 4% 5%;
`
export const StyledButton = styled(BulkiButton)`
  width: 20%;
`

export const StyledShippingDiv = styled.div`
  display: flex;
  align-content: flex-start; 
`

export const StyledFormDiv = styled.div`
  flex: 0 0 50%;
`
export const StyledQuoteDiv = styled.div`
  flex: 0 0 50%;
  text-align: right;
`
export const StyledQuote = styled.div`
  width: 70%;
  margin-left: 100%;
  transform: translate(-100%);
`