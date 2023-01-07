import { Grid } from "@mui/material";
import styled from "styled-components";
import { BulkiBody2, BulkiCaption, BulkiH5, BulkiSubtitle2 } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton";
import BulkiCarousel from "../../components/BulkiCarousel";
import BulkiSurface from "../../components/BulkiSurface/BulkiSurface";

export const StyledListingPage = styled(Grid)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  height: 90%;
`

export const StyledCarouselDiv = styled(Grid)`
  height: 100%;
  flex: 0 0 45%;
  `

export const StyledCarousel = styled(BulkiCarousel)`
`


export const StyledProductTitle = styled(BulkiH5)`
  width: 90%;
    margin: auto 3% auto 0;

`

export const StyledInformationDiv = styled.div`
  padding: 1%;
  width: 100%;
  flex: 1 0;
  position: relative;
  padding-left: 4%;
`

export const StyledBackgroundPaper = styled(BulkiSurface)`
  padding: 3% 5% 3% 5%;
  height: 74vh;
`

export const StyledBuyButton = styled(BulkiButton)`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 1.75em;
  height: 2em;
  width: 7em;

`

export const StyledDescription = styled(BulkiBody2)`
  opacity: 0.8;
  line-height: 1.75;
`

export const StyledPrices = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledPrice = styled.div`
  border: 2px solid ${props => props.$selected ? props.theme.colors.primary.hexa() : props.theme.colors.onSurface.hexa()};
  border-radius: 5px;
  flex: 0 0 100px;
  flex-wrap: wrap;
  text-align: center;
  ${props => props.$selected && `background-color: ${props.theme.colors.onSurface.alpha(0.15).hexa()};`}
  ${props => props.onClick && 'cursor: pointer;'}
`

export const StyledPriceLabel = styled.span`
  white-space: pre;
  font-weight: bold;
`
export const StyledUnits = styled.span`
  opacity: 0.5;
  white-space: pre;
`

export const StyledUnitDef = styled(BulkiSubtitle2)`
  opacity: 0.7;
`