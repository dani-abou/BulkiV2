import styled from "styled-components";
import { BulkiH5 } from "../../common/styles";
import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton";
import BulkiSurface from "../../components/BulkiSurface/BulkiSurface";

export const StyledSurface = styled(BulkiSurface)`
  width: 95%;
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
`

export const StyledFlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const StyledFormDiv = styled.div`
  flex: 0 0 50%;
`

export const StyledQuoteCompressToLeftDiv = styled.div`
  width: 70%;
  margin-left: 100%;
  transform: translate(-100%);
`

export const StyledQuote = styled.div`
  text-align: right;
  `

export const StyledRadioDiv = styled.div`
  flex: 0 0 46.5%;
  `

export const StyledPaymentFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledPaymentContainer = styled.div`
  flex: 0 0 45%;
`
