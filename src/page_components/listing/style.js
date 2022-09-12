import styled from "styled-components";
import BulkiCarousel from "../../components/BulkiCarousel"
import { Grid, Paper } from "@mui/material";
import { BulkiH5 } from "../../assets/styles";
import BulkiButton from "../../components/BulkiButton";

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
  margin: auto 3%;
  
`

export const StyledInformationDiv = styled.div`
  padding: 1%;
  width: 100%;
  flex: 1 0;
  position: relative;
`

export const StyledBackgroundPaper = styled(Paper)`
  width: 90%;
  background-color: ${props => props.theme.colors.surface.hexa()};
  padding: 3% 5% 3% 5%;
  margin: auto;
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