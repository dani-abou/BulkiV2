import styled from "styled-components";
import { media } from "../../common";
import { PrimabullBody2, PrimabullCaption, PrimabullH6, PrimabullSubtitle1, PrimabullSubtitle2 } from "../../common/styles/tags";
import { PrimabullIconButton } from "../PrimabullButton";

export const StyledFooterContainer = styled.footer`
  width: 100%;
  /* height: 400px; */
  background-color: ${props => props.theme.colors.background.darken(0.6).hexa()};
  color: ${props => props.theme.colors.neutral.lighten(1).hexa()};
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  position: relative;
`
export const StyledFooterFlex = styled.div`
  display: flex;
  gap: 80px;
  width: 100%;
  /* flex: 0 0 100px; */
  height: 250px;
  ${props => media.mobile(`
    height: 415px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 0;
  `)}
    ${props => media.tablet(`
    gap: 20px;
  `)}
`


export const StyledTitleDiv = styled.div`
  flex: 0 0 50%;
  padding-top: 1%;
  padding-left: 3%;
    ${props => media.mobile(`
    flex: 1 0 100%;
  `)}
`

export const StyledVStack = styled.div`
  flex: 1 1;
  padding-top: 3%;
  ${props => media.mobile(`
    flex: 1 0;
    padding-top: 0;
    margin-top: -20px;
  `)}
`

export const StyledFooterLogoContainer = styled.div`
  height: 90%;
  aspect-ratio: 16 / 10;

  position: relative;
  /* filter: grayscale(100%) brightness(3); */
  ${props => media.mobile(`
    aspect-ratio: auto;
    width: 100%;
    height: 150px;
    margin-top: 50px;
  `)}
`

export const StyledPurposeStatement = styled(PrimabullSubtitle1)`
  width: 70%;
  margin-left: 4%;
  margin-top: -2%;
`

export const StyledFooterTitle = styled(PrimabullH6)`
  color: ${props => props.theme.colors.surface.lighten(0.1)};
    ${props => media.mobile(`
    margin-left: 40px;
  `)}
`

export const StyledFooterLink = styled(PrimabullSubtitle2)`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.surface};
  text-decoration: none;
      ${props => media.mobile(`
    margin-left: 40px;
  `)}
`
export const StyledFooterLinkColor = styled.div`
cursor: pointer;
  color: ${props => props.theme.colors.surface.lighten(0.1)};
  text-decoration: underline;
`
export const StyledCopyrightDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.background.darken(0.8)};
  /* flex: 0 0 10%; */
  /* position: absolute; */
  width: 100%;
  /* bottom: 0; */

`

export const StyledCopyrightNotice = styled(PrimabullCaption)`
  color: ${props => props.theme.colors.surface.lighten(0.1)}
`

export const StyledSocials = styled.div`
  margin-top: 2.5%;
  display: flex;
  gap: 7px;
  ${props => media.mobile(`
    margin-left: 40px;
  `)}
`

export const StyledSocialIconButton = styled(PrimabullIconButton)`
  border: 1px solid ${props => props.$color};
     color: white;
    background-color: ${props => props.$color};

  :hover {
    background-color: ${props => props.$color};
    filter: brightness(120%);
  }
`