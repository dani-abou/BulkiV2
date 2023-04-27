import { Card, Skeleton } from '@mui/material';
import styled from "styled-components";
import { BulkiBody1, BulkiCaption, BulkiH5 } from "../../../common/styles";
import BulkiButton from "../../../components/BulkiButton";
import BulkiCard from "../../../components/BulkiCard";
import BulkiSurface from "../../../components/BulkiSurface/BulkiSurface";


export const StyledSearchFlex = styled.div`
  display: flex;
  align-items: flex-start; 
  padding: 20px 11px 20px 50px;
  gap: 30px;
  height: 100%;
`

export const StyledFilters = styled(BulkiSurface)`
  padding: 30px 1%;
  height: 100%;
  width: 100%;
`

export const StyledFiltersContainer = styled.div`
  width: 250px;
  height: 100%;
  flex: 0 0 20%;
`

export const StyledProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 5 0;
  
  align-items: flex-start;
`

export const StyledCardDivWithMargin = styled.div`
  padding: 0 0 50px 0;
  flex: 0 0 19%;
  width: min-content;
  margin: 0;
`

export const StyledCardDescription = styled(BulkiCaption)`
  opacity: 0.7;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; 
  overflow: hidden;
`

export const StyledCard = styled(BulkiCard)`
  cursor: pointer;
`

export const StyledPrice = styled(BulkiH5)`
  text-align: center;
`

export const StyledOrderButton = styled(BulkiButton)`
  display:block;
  margin: auto;
  margin-top: 10%;
  width: 50%;
`

export const StyledSearchDescription = styled(BulkiBody1)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 2%;
`

export const StyledSearchQueryBox = styled(BulkiSurface)`
  height: 60px;
  margin-bottom: 2%;
  width: 100%;
  position: relative;
`

export const StyledDecoratedQuery = styled.span`
  color: ${props => props.theme.colors.secondary.hexa()};
`

export const StyledResultsContainer = styled.div`
  flex: 1 0;
`
export const StyledSkeleton = styled(Skeleton)`
  height: 100%;
  width: 100%;
  border-radius: 3.5px;
  `

export const StyledLoadingCard = styled(Card)`
  height: 400px;
`
