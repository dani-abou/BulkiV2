import styled from "styled-components";

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

export const StyledImagesDiv = styled.div`
  display: flex;
  height: 100%;
`

export const StyledImage = styled.div`
  flex: 0 0 100%;
  position: relative;
`

export const StyledScrollButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.nextButton ? "right: 5%;" : "left:5%"};
  transform: translate(0, -50%;)
  
`