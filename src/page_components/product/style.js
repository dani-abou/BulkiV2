import styled from "styled-components";
import { PrimabullBody2, PrimabullCaption, PrimabullH5, PrimabullSubtitle2, media } from "../../common/styles";
import PrimabullButton from "../../components/PrimabullButton";
import PrimabullCarousel from "../../components/PrimabullCarousel";
import PrimabullInput from "../../components/PrimabullInput/PrimabullInput";
import PrimabullSurface from "../../components/PrimabullSurface/PrimabullSurface";

export const StyledProductPage = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin: 0;
  height: 90%;

  ${() => media.mobile(`
    flex-direction: column;
    align-items: center;
    gap: 100px;

  `)}
    ${() => media.tablet(`
    flex-direction: column;
    align-items: center;
    gap: 80px;
  `)}
`

export const StyledCarouselDiv = styled.div`
  height: 500px;
  flex: 0 0 45%;
  ${() => media.mobile(`
    flex: 0 0 250px;
    width: 250px;
  `)}
    ${() => media.tablet(`
    flex: 0 0 280px;
    width: 300px
  `)}
  `

export const StyledCarousel = styled(PrimabullCarousel)`
`


export const StyledProductTitle = styled(PrimabullH5)`
  width: 90%;
    margin: auto 3% auto 0;

`

export const StyledInformationDiv = styled.div`
  padding: 1%;
  width: 100%;
  flex: 1 0;
  position: relative;
  padding-left: 4%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledBackgroundPaper = styled(PrimabullSurface)`
  padding: 3% 5% 3% 5%;
  min-height: 74vh;
`



export const StyledDescription = styled(PrimabullBody2)`
  opacity: 0.8;
  line-height: 1.75;
`

export const StyledPrices = styled.div`
  display: flex;
  gap: 10px;
`

export const StyledPrice = styled.div`
  border: 2px solid ${props => props.$selected ? props.theme.colors.primary.hexa() : props.theme.colors.onSurface.hexa()};
  border-radius: 5px;
  flex: 0 0 100px;
  flex-wrap: wrap;
  text-align: center;
  ${props => props.$selected && `background-color: ${props.theme.colors.onSurface.alpha(0.15).hexa()};`}
  ${props => props.onClick && 'cursor: pointer;'}
`

export const StyledPriceLabel = styled.span`
  white-space: pre;
  font-weight: bold;
`
export const StyledUnits = styled.span`
  opacity: 0.5;
  white-space: pre;
`

export const StyledUnitDef = styled(PrimabullSubtitle2)`
  opacity: 0.7;
`

export const StyledBottomDiv = styled.div`
  width: 100%;
  display: flex;
  /* position: absolute;
  bottom: 0; */
  height: 90px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
    ${() => media.mobile(`
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;
  `)}
      ${() => media.tablet(`
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;
  `)}
  
`

export const StyledBuyButton = styled(PrimabullButton)`
  /* position: absolute;
  right: 0;
  bottom: 0; */
  font-size: 1.3em;
  /* height: 2em; */
  width: 7em;
  flex: 1 0;
  ${() => media.mobile(`
    margin-top: 20px;
  `)}
    ${() => media.tablet(`
    margin-top: 20px;
  `)}
`

export const StyledDescLine = styled(PrimabullBody2)`
${props => props.$last ? '' : 'margin-bottom: 7px;'}
border: 1px solid transparent;
`

export const QuantityDiv = styled.div`
  flex: 2 0;
  display: flex;
  gap: 20px;
  align-items: center;
    ${() => media.mobile(`
    flex: 1 0 100%;
  `)}
      ${() => media.tablet(`
    flex: 1 0 100%;
  `)}
`

export const StyledFieldDiv = styled.div`
  border: 1px gray;
  width: 130px;
  height: 40px;
  border-radius: 6px;
  display:flex;
  align-items: stretch;
  overflow: hidden;
  border: 1px solid gray;
  ${props => media.mobile(`
    transform: none;
    margin-left: 0;
  `)}

`

export const QuantityButtons = styled.button`
  flex: 0 1 25%;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
    :hover {
    background-color: lightgray;
  }

`

export const StyledLeftButton = styled(QuantityButtons)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 1px solid gray;
`

export const StyledRightButton = styled(QuantityButtons)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-left: 1px solid gray;
`


export const StyledQuantityInput = styled(PrimabullInput)`
  flex: 4 0;
  /* height: 100%; */
  border-radius: 0px;
  border: none;
  outline: none;
  /* padding: auto 8px; */
  margin: 0%;
  :hover {
    border: none;
    outline: none;
  }
`
