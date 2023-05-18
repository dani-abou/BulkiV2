import styled from "styled-components";
import { media, screenSizes } from "../../common/styles/screenSizes";
import { PrimabullBody1 } from "../../common/styles/tags";
import PrimabullButton from "../PrimabullButton";
import PrimabullInput from "../PrimabullInput";

export const StyledAppbar = styled.div`
  width: 100%;
  height: 130px;
  flex: 0 0 150px;
  box-shadow: none;
  background-color: transparent;
  /* border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.2).hexa()}; */
  position: static;
  padding: 0 50px 0 50px;
  display: flex;
  align-items: center; 

    ${props => media.mobile(`
      height: 300px;
      flex-direction: column;
      align-items: stretch;
      margin-bottom: 20px;
  `)}

  @media screen and (max-width: ${screenSizes.tablet.max}) and (min-width: ${screenSizes.tablet.min}) {
    padding: 0;
    justify-content: center;
  }
`

export const StyledPrimabullLogoContainer = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 250px;
  flex: 0 0 ${props => props.$skinny ? '200px' : '350px'};
  transition: all 0.2s ease-out;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
    flex: 1 0 100%;
    /* height: 500px; */
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) and (min-width: ${screenSizes.tablet.min}) {
    flex: 0 0 300px;
  }
`

export const StyledLinks = styled.div`
  flex: 1 1 80%;
  height: 100%;
  display: flex;
  gap: 50px;  
  justify-content: end;
  align-items: center;
  text-decoration: none;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
      display: inline;
  }
  ${() => media.tablet(`
    padding-right: 20px;
  `)}
`

export const StyledButton = styled(PrimabullButton)`
  width: 140px;
    
  @media screen and (max-width: ${screenSizes.mobile.max}) {
      display: none;

  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    display: none;
  } 
`

export const StyledCartButton = styled(PrimabullButton)`
  width: 120px;
    @media screen and (max-width: ${screenSizes.mobile.max}) {
        margin-left: 50%;
  transform: translate(-50%);
  }
`



// export const StyledToolbar = styled.div`
//   display: flex;
//   gap: 50px;  
//   justify-content: end;


// `

// export const StyledCollapsible = styled.div`
//   max-height: ${props => props.$skinny ? 0 : '100%'};
//   overflow: hidden;
//   transition: all 0.2s ease-out;
// `


export const StyledPrimabullInput = styled(PrimabullInput)`
  margin-left: auto;
  margin-right: 0;
  margin-top: 20px;
  height: 100%;
  float: right;
  width: 90%;
`

export const StyledSearchButton = styled(PrimabullButton)`
  height: 100%;
  width: ${props => props.width || '26%'};
  margin-top:-1px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  box-shadow: none;
  :hover {
    box-shadow: none;
    background-color: ${props => props.theme.colors.primary.hexa()};
  }
`

export const StyledDropdown = styled.div`
  width: 100%;
`
export const SearchResult = styled.div`
  width: 100%;
  height: 40px;
  :hover {
    background-color: ${props => props.theme.colors.surface.darken(0.5).hexa()};
    cursor: pointer;
  }
`
export const StyledCartNumberBox = styled.span`
  background-color: ${props => props.theme.colors.background.hexa()};
  width: 19px;
  height: 19px;
  border-radius: 4px;
  position: relative;
  opacity: ${props => props.$hovered ? 0.8 : 1};
  transition: opacity 0.2s;
`

export const StyledCartNumber = styled(PrimabullBody1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: ${props => props.theme.colors.primary.hexa()};
  font-weight: bold;

`

