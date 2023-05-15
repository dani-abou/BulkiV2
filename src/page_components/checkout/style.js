import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { BulkiBody1, media } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton/BulkiButton";
import BulkiCheckbox from "../../components/BulkiCheckbox/BulkiCheckbox";
import BulkiInput from "../../components/BulkiInput/BulkiInput";
import BulkiSelect from "../../components/BulkiSelect/BulkiSelect";

export const StyledPageFlex = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  background-color: white;
`


export const StyledInfoContainer = styled.div`
  flex: 1 0;
  padding-top: 100px;
  padding-bottom: 100px;
  ${() => media.mobile(`
    padding-top: 20px;
    padding-bottom: 50px;
  `)}
`

export const StyledCartContainer = styled.div`
  flex: 0 0 40%;
  background-color: #F5F5F5;
  border-left: 1px solid lightgrey;
  padding-top:100px;
  padding-bottom: 100px;

    ${() => media.mobile(`
    display: none;
  `)}
      ${() => media.tablet(`
    flex: 0 0 45%
  `)}

`

export const StyledCartProductsContainer = styled.div`
  width: 400px;
  margin-left: 3%;
  position: fixed;

  ${() => media.tablet(`
    width: 300px;
  `)}
`

export const StyledCartProduct = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  gap: 30px;

`

export const StyledProductImage = styled.div`
  flex: 0 0 65px;
  height: 65px;
  position: relative;
  overflow: visible;
  
`

export const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  z-index: 9;
`

export const StyledQuantityContainer = styled.div`
  position: absolute;
  top:4px;
  right: 4px;
  background-color: ${props => props.theme.colors.neutral.alpha(0.9).hexa()};
  width: 30px;
  height: 30px;
  transform: translate(50%, -50%);
  z-index: 10;
  border-radius: 50%;
`

export const StyledQuantityNumber = styled(BulkiBody1)`
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.colors.surface.hexa()};
  font-size: 15px;
  text-align: center;
`

export const StyledProductName = styled.div`
  flex: 1 0;
`

export const StyledProductTotal = styled.div`
  flex: 0 0 20%;
  text-align: right;
`
export const StyledTotalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledMobileTotals = styled.div`
  width: 87%;
  margin-left: 50%;
  transform: translate(-50%);
  display: none;
  ${() => media.mobile(`
    display: block;
  `)}
`


export const StyledInfoFormContainer = styled.div`
  margin-right: 8%;
  margin-left: 20%;
  ${() => media.mobile(`
    margin-right: auto;
    margin-left: 50%;
    transform: translate(-50%);
    width: 95%;
  `)}

  ${() => media.tablet(`
    margin-left: 10%;
  `)}
`

export const StyledLogoContainer = styled.div`
  width: 213px;
  height: 213px;
  margin-left: 50%;
  transform: translate(-50%);
  position: relative;


`
export const StyledInput = styled(BulkiInput)`
  background-color: inherit;
  margin-bottom: 10px;
  flex: 1 0 50px;
`

export const StyledSelect = styled(BulkiSelect)`
  background-color: inherit;
  margin-bottom: 10px;
  flex: 1 1 15px;
`

export const StyledCheckbox = styled(BulkiCheckbox)`
  margin-left: 5px;
`

export const StyledInputFlex = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
`

export const StyledButtonsFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
`

export const StyledButton = styled(BulkiButton)`
  width: 170px;
  text-decoration: none;
`
// /* ${props => props.$disabled ? `
//   background-color: ${props.theme.colors.neutral.hexa()};

//   :hover {
//     background-color: ${props.theme.colors.neutral.hexa()};
//   }

// `: ` */
export const StyledSubmitButton = styled(StyledButton)`

    :hover {
    background-color: ${props => props.theme.colors.primary.hexa()};
      color: #ffee10;
    box-shadow: 0 0 5px #ffee10;
    text-shadow: 0 0 5px #ffee10;
  }
  `

export const StyledError = styled.div`
  width: 90%;
  min-height: 70px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: rgba(252, 3, 40, 0.2);
  margin-bottom: 20px;
  padding: 5px;
  margin-left: 50%;
  transform: translate(-50%);
`

export const StyledProgress = styled(CircularProgress)`
  color: gray;
`