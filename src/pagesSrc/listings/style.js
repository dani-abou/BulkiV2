import styled from "styled-components";
import { BulkiH5 } from "../../common/tags";
import { BulkiButton } from "../../components/BulkiButton"
import { BulkiCard } from "../../components/BulkiCard";


export const StyledSearchFlex = styled.div`
  display: flex;
  align-items: flex-start; 
  padding: 20px 11px 20px 50px;
  gap: 30px;
`

export const StyledFiltersBox = styled.div`
  background-color: ${props => props.theme.colors.surface.hexa()};
  border-radius: 10px;
  width: 250px;
  height: min-content;
  min-height: 80vh;
  flex: 1 0;
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