import styled from 'styled-components'
import { BulkiH4, BulkiH6 } from '../../common/tags'
import { Card, CardMedia } from '@mui/material'

export const StyledCard = styled(Card)`
  height: 400px;

`

export const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background.hexa()};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledImageDiv = styled(CardMedia)`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 0.5px solid ${props => props.theme.colors.background.darken(0.2).hexa()};
  overflow: hidden;
  height: 45%;
  width: 100%
`

export const StyledHeader = styled(BulkiH6)`
  opacity: 0.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  overflow: hidden; 
  font-size: 12x;
  height: 38%;
`