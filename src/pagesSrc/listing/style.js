import styled from "styled-components";

import { BulkiCarousel } from "../../components/BulkiCarousel"
import { Grid, Paper } from "@mui/material";
import { BulkiH5 } from "../../common/tags";

export const StyledListingPage = styled(Grid)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  background-color: yellow;
  height: 100%;
`

export const StyledCarouselDiv = styled(Grid)`
  border: 1px solid;
  height: 100%;
  flex: 0 0 25%;
  `

export const StyledCarousel = styled(BulkiCarousel)`
`


export const StyledProductTitle = styled(BulkiH5)`
  
`

export const StyledInformationDiv = styled.div`
  border: 1px solid;
  padding: 1%;
  width: 100%;
  flex: 1 0;
`

export const StyledBackgroundPaper = styled(Paper)`
  width: 90%;
  background-color: ${props => props.theme.colors.surface.hexa()};
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
  padding: 3% 5% 3% 5%;
  margin-top: 3%;
  height: 100%;

  & div{
    height: 70%;
  }
`
//height:100%