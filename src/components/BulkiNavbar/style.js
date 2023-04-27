import styled from "styled-components";
import screenSizes from "../../common/styles/screenSizes.json";
import BulkiButton from "../BulkiButton";
import BulkiInput from "../BulkiInput";

export const StyledAppbar = styled.div`
  width: 100%;
  height: 130px;
  box-shadow: none;
  background-color: transparent;
  /* border-bottom: 1px solid ${props => props.theme.colors.onSurface.alpha(0.2).hexa()}; */
  position: static;
  padding: 0 50px 0 50px;
  display: flex;
  align-items: center; 

  @media screen and (max-width: ${screenSizes.tablet.max}) and (min-width: ${screenSizes.tablet.min}) {
    padding: 0;
    justify-content: center;
  }
`

export const StyledBulkiLogoContainer = styled.div`
  position: relative;
  z-index: 0;
  cursor: pointer;
  height: 100%;
  flex: 0 0 ${props => props.$skinny ? '200px' : '300px'};
  transition: all 0.2s ease-out;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
    flex: 1 0 100%;
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
  ${console.log(screenSizes)}

  @media screen and (max-width: ${screenSizes.mobile.max}) {
      display: none;
  }

  @media screen and (max-width: ${screenSizes.tablet.max}) {
    display: none;
  }

  
`

export const StyledToolbar = styled.div`
  display: flex;
  gap: 50px;  
  justify-content: end;


`

export const StyledCollapsible = styled.div`
  max-height: ${props => props.$skinny ? 0 : '100%'};
  overflow: hidden;
  transition: all 0.2s ease-out;
`

export const StyledButton = styled(BulkiButton)`
  width: 100%;
`

export const StyledBulkiInput = styled(BulkiInput)`
  margin-left: auto;
  margin-right: 0;
  margin-top: 20px;
  height: 100%;
  float: right;
  width: 90%;
`

export const StyledSearchButton = styled(BulkiButton)`
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
