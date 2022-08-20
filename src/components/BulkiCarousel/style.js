import styled from "styled-components";
import { BulkiButton } from "../BulkiButton";

export const StyledCarouselDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`

export const StyledViewPort = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const StyledThumbnailViewport = styled.div`
  overflow: hidden;
  height: 100px;
  width: 100%;
`

export const StyledImagesDiv = styled.div`
  display: flex;
  height: 100%;
`

export const StyledImage = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export const StyledScrollButton = styled(BulkiButton)`
  position: absolute;
  top: 50%;
  ${props => props.nextButton ? "right: 5%;" : "left:5%"};
  transform: translate(0, -50%;);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: none;
  background-color: transparent;
  color: ${props => props.theme.colors.primary.hexa()};
  :hover {
    background-color: ${props => props.theme.colors.onSurface.darken(0.3).alpha(0.9).hexa()};
    transition: 0.2s;
  }
`
export const StyledThumbnailDiv = styled.div`
  opacity: ${props => props.selected ? '1' : '0.5'};
  flex: 0 0 10%;
  position: relative;
  border-radius: 3px;
  cursor:pointer;
  :hover {
    opacity: ${props => props.selected ? '1' : '0.75'};
  }
  background-color: ${props => props.theme.colors.surface.hexa()};
  
`

export const StyledThumbnailFlexbox = styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  gap: 10px;
  padding: 10px;
`