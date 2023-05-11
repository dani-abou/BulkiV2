import styled from "styled-components";
import { BulkiBody2, media, screenSizes } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton/BulkiButton";

export const StyledBackground = styled.div`
  width: 100%;
  min-height: 60%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;

  @media screen and (max-width: ${screenSizes.mobile.max}) {
    flex-direction: column;
    /* gap: 40px; */
  }
`

export const StyledProduct = styled.div`
  flex: 1 0 30%;
  position: relative;
  /* cursor: pointer; */
  transition: opacity 0.2s, background-color 0.1s;
  opacity: ${props => props.$greyed ? 0.8 : 1};
  ${props => props.$hovered && `background-color: ${props.theme.colors.neutral.alpha(0.1).hexa()}`};
  padding-top: 15px;
  padding-bottom: 5px;
  min-height: 560px;
  cursor: auto;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
    padding-bottom: 40px;
  }

  ${() => media.tablet(`
    flex: 1 0 48%;
    height: auto;
    min-height: 200px;
  `)}

`
export const StyledProductImage = styled.div`
  width: 70%;
  height: 260px;
  margin-left: 50%;
  transform: translate(-50%);
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  @media screen and (max-width: ${screenSizes.mobile.max}) {
    width: 100%;
  }


`

export const StyledContent = styled.div`
  width: 80%;
  margin-left: 50%;
  transform: translate(-50%);
    @media screen and (max-width: ${screenSizes.mobile.max}) {
    width: 100%;
  }
`

export const StyledDescLine = styled(BulkiBody2)`
${props => props.$last ? '' : 'margin-bottom: 7px;'}
border: 1px solid transparent;
`

export const StyledBorder = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  background-color: gray;
  height: 60%;
  width: 1.5px;
  opacity: 0.5;
  visibility: ${props => props.$index === 2 || props.$index === 5 ? 'hidden' : 'visible'};
  ${() => media.mobile(`
      visibility: hidden;
  `)}
    ${props => media.tablet(`
      visibility: ${props.$index === 0 || props.$index === 2 || props.$index === 4 ? 'visible' : 'hidden'};
  `)}
`

export const StyledBuyButton = styled(BulkiButton)`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%);
  width: 40%;
  font-size: 20px;
  padding: 0px;
  height: 45px;
  overflow: hidden;
  :hover {
    background-color: ${props => props.theme.colors.primary.hexa()};
      color: #ffee10;
    box-shadow: 0 0 5px #ffee10;
    text-shadow: 0 0 5px #ffee10;
  }
`
export const StyledButtonChildDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

`

export const StyledPrice = styled.span`
  position: absolute;
  top: ${props => props.$hovered ? '-150%' : '50%'};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.2s;
`

export const StyledAddToCart = styled.span`
  width:100%;
  position: absolute;
  top: ${props => props.$hovered ? '50%' : '150%'};
  left: 50%;
  transform: translate(-50%, -50%);
  transition: top 0.2s;

`

export const StyledGutterBorder = styled.div`
  position: absolute;
  top: -6%;
  opacity: 0.5;
  height: 1.5px;
  width: 80%;
  background-color: gray;
  left: 50%;
  transform: translate(-50%);
  visibility: ${props => props.$index < props.$length / 2 ? 'hidden' : 'visible'};

  ${props => media.tablet(`
      visibility: ${props.$index < props.$length / 3 ? 'hidden' : 'visible'};
  `)}
  ${props => media.mobile(`
      visibility: ${props.$index === 0 ? 'hidden' : 'visible'};
  `)}
`