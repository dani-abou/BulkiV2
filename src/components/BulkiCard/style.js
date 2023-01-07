import styled from 'styled-components'
import { BulkiH4, BulkiH6 } from '../../common/styles'
import { Card, CardMedia, Skeleton } from '@mui/material'

export const StyledCard = styled(Card)`
  height: 400px;

`

export const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background.lighten(0.2).hexa()};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const StyledImageDiv = styled(CardMedia)`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

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
  max-height: 38%;
  width: 100%;
  font-weight: bold;
  `
