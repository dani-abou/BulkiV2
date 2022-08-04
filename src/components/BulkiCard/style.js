import styled from 'styled-components'
import { BulkiH4 } from '../../common/tags'
import Image from 'next/image'


export const StyledCard = styled.div`
  margin: 0;
  padding: 0;
  width: 200px;
  height: 315px;
  border-radius: 15px;
  background-color: ${props => props.theme.colors.surface.hexa()};
  box-shadow: 0 4px 8px 0 ${props => props.theme.colors.onSurface.alpha(0.2).hexa()};
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 ${props => props.theme.colors.onSurface.alpha(0.2).hexa()};
  }
`

export const StyledImage = styled.div`
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  position: relative;
  width: 100%;
  height: 45%;
  overflow: hidden;
`

export const StyledHeader = styled(BulkiH4)`
  opacity: 0.5;
  height: 13%;
  margin: 9% 5% 3% 5%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  overflow: hidden; 
`
export const StyledFixedDimensions = styled.div`
  width: 100%;
  height: 31%;
  padding: 0;
  position: relative;
`