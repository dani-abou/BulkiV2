import styled from "styled-components";
import { BulkiBody2, BulkiCaption, BulkiH6, BulkiSubtitle1, BulkiSubtitle2 } from "../../common/styles/tags";
import { BulkiIconButton } from "../BulkiButton";

export const StyledFooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.footer.hexa()};
  color: ${props => props.theme.colors.neutral.lighten(1).hexa()};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const StyledFooterFlex = styled.div`
  display: flex;
  gap: 80px;
  flex: 1 1 100%;
`

export const StyledTitleDiv = styled.div`
  flex: 0 0 50%;
  padding-top: 3%;
`

export const StyledVStack = styled.div`
  flex: 1 1;
  padding-top: 3%;
`

export const StyledFooterLogoContainer = styled.div`
  height: 110px;
  width: 40%;

  position: relative;
  filter: grayscale(100%) brightness(3);
`

export const StyledPurposeStatement = styled(BulkiSubtitle1)`
  width: 70%;
  margin-left: 4%;
  margin-top: -2%;
`

export const StyledFooterTitle = styled(BulkiH6)`
`

export const StyledFooterLink = styled(BulkiSubtitle2)`
  margin-bottom: 10px;
  color: ${props => props.theme.colors.footerText.lighten(0.4)};
  text-decoration: none;
`
export const StyledFooterLinkColor = styled.a`
  color: ${props => props.theme.colors.footerText.lighten(0.4)};
  text-decoration: none;
`
export const StyledCopyrightDiv = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.footer.lighten(0.3)};
  flex: 0 0 10%;

`

export const StyledCopyrightNotice = styled(BulkiCaption)`
`

export const StyledSocials = styled.div`
  margin-left: -3%;
  margin-top: 2.5%;
`

export const StyledSocialIconButton = styled(BulkiIconButton)`
  color: ${props => props.theme.colors.footerText.lighten(1.5)};
`