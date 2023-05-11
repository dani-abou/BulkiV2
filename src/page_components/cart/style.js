import { CloseRounded } from "@mui/icons-material";
import styled from "styled-components";
import { media } from "../../common";
import { BulkiBody1, BulkiH1, BulkiH4, BulkiH5, BulkiH6 } from "../../common/styles/tags";
import { BulkiIconButton } from "../../components/BulkiButton";
import BulkiButton from "../../components/BulkiButton/BulkiButton";
import BulkiInput from "../../components/BulkiInput/BulkiInput";
import BulkiModal from "../../components/BulkiModal/BulkiModal";

export const StyledModal = styled(BulkiModal)`
  width: 80%;
  max-height: 90vh;
  overflow-y: auto;
  ${props => media.mobile(`
    width: 98%;
  `)}
`

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px 50px 0;
  display: flex;
  justify-content: space-between;
  ${() => media.mobile(`
    margin-bottom: 20px;
    padding: 30px 10px;
  `)}
`

export const StyledTitle = styled(BulkiH4)`
`

export const StyledCloseButton = styled.button`
  width: ${props => props.$smaller ? '30px' : '50px'};
  height: ${props => props.$smaller ? '30px' : '50px'};
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  border:none;
  cursor: pointer;
  font-size: 30px;
  color: grey;
  ${props => props.$smaller && 'opacity: 0.5;'}
  :hover {
    background-color: lightgray;
  }
`

export const StyledCloseIcon = styled(CloseRounded)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledTableContainer = styled.div`
  margin: 50px;
  ${() => media.mobile(`
    display: none;
  `)}
    ${() => media.tablet(`
  margin: 50px 0;
`)}
`

export const StyledProductImage = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  ${props => media.mobile(`
  margin-left: 50%;
  transform: translate(-50%);
  border-radius: 5px;
  overflow: hidden;
  `)}
`

export const StyledProductName = styled(BulkiH6)`
  ${props => media.mobile(`
    font-size: 14px;
    text-align: center;
  `)}
`

export const StyledPriceTotal = styled(BulkiBody1)`
  font-size: 18px;
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
  margin-left: 50%;
  transform: translate(-50%);
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


export const StyledQuantityInput = styled(BulkiInput)`
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

export const StyledFooter = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 50px 30px;
  display: flex;
  justify-content: space-between;
  ${() => media.mobile(`
    align-items: center;
    padding: 0 20px 30px;
  `)}
`

export const StyledSubmitButton = styled(BulkiButton)`
  /* margin-bottom: 50px;
  margin-right: 50px; */
`

export const StyledTotal = styled(BulkiH5)`
  margin-left: 30px;
`

export const StyledEmptyDiv = styled.div`
  width: 100%;
  height: 400px;
  padding: 25px;
  position: relative;
  ${() => media.mobile(`
    padding: 10px;
  `)}
  
`

export const StyledEmptyDivText = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledMobileProduct = styled.div`
  margin-bottom: 20px;
  position: relative;
`

export const StyledMobileTotals = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const StyledBorder = styled.div`
  margin-left: 50%;
  transform: translate(-50%);
  width: 90%;
  height: 1.2px;
  background-color: lightgray;
  `

export const StyledRemoveButtonMobile = styled.div`
  position: absolute;
  top:10px;
  right: 30px;
`

export const StyledMobileTable = styled.div`
  display: none;
  ${() => media.mobile(`
    display: inline;
  `)}
`