import styled from "styled-components";
import BulkiCarousel from "../../components/BulkiCarousel"
import { Grid } from "@mui/material";
import { BulkiBody2, BulkiH5 } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton";
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
  border: 1px solid;
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