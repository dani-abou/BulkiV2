import styled from "styled-components";
import { media } from "../../common";
import { PrimabullIconButton } from "../PrimabullButton";

export const StyledCarouselDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-bottom: 25px;
`

export const StyledViewPort = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
`

export const StyledThumbnailViewport = styled.div`
  overflow: hidden;
  height: 110px;
  width: 100%;
  margin-bottom: 50px;
  ${() => media.mobile(`
    height: 90px;
  `)}
`

export const StyledImagesDiv = styled.div`
  display: flex;
  height: 100%;
`

export const StyledImage = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export const StyledScrollButton = styled(PrimabullIconButton)`
  position: absolute;
  top: 50%;
  ${props => props.nextbutton ? "right: 5%;" : "left:5%"};
  transform: translate(0, -50%);

  /* :hover { */
    background-color: ${props => props.theme.colors.onSurface.darken(1).alpha(0.65).hexa()};
  /* } */
  border: ${props => props.theme.colors.onSurface.darken(1).hexa()};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`



export const StyledThumbnailDiv = styled.div`
  opacity: ${props => props.selected ? '1' : '0.5'};
  flex: 0 0 90px;
  position: relative;
  border-radius: 3px;
  cursor:pointer;
  :hover {
    opacity: ${props => props.selected ? '1' : '0.75'};
  }
  background-color: ${props => props.theme.colors.surface.hexa()};
  ${() => media.mobile(`
    flex: 0 0 70px;
  `)}
`

export const StyledThumbnailFlexbox = styled.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  gap: 10px;
  padding: 10px;
`