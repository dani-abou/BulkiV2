import styled from "styled-components";
import { BulkiBody2, BulkiH6, BulkiSubtitle2 } from "../../common/styles/tags"

export const StyledFooterContainer = styled.footer`
  width: 100%;
  height: 100%
  background-color: ${props => props.theme.colors.footer.hexa()};
  display: flex;
  color: ${props => props.theme.colors.neutral.lighten(1).hexa()};
  gap: 80px;
`

export const StyledTitleDiv = styled.div`
  flex: 0 0 40%;
`

export const StyledVStack = styled.div`
  flex: 1 0;
  padding-top: 3%;
`

export const StyledFooterLogoContainer = styled.div`
  height: 110px;
  width: 50%;
  margin-left: 25%;
  position: relative;
  filter: grayscale(100%) brightness(3);
`

export const StyledPurposeStatement = styled(BulkiBody2)`
  text-align: center;
  width: 70%;
  margin-left: 15%;
`

export const StyledFooterTitle = styled(BulkiH6)`
`

export const StyledFooterLink = styled(BulkiSubtitle2)`
  margin-bottom: 10px;
`
export const StyledFooterLinkColor = styled.a`
  color: ${props => props.theme.colors.neutral.lighten(0.7).hexa()};
`