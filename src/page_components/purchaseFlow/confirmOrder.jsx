import { CircularProgress } from "@mui/material"
import { StyledFlexDiv, StyledFormDiv } from "./style"

const ConfirmOrder = ({ formControl, formValues, product, loadingProduct }) => {
  console.log(formValues)
  return <StyledFlexDiv>
    <StyledFormDiv>
      {loadingProduct ? <CircularProgress /> : <>
        {product.productName}
      </>}
    </StyledFormDiv>
    <StyledFormDiv>
      {formValues.shippingInfo.city}
    </StyledFormDiv>
  </StyledFlexDiv>
}

export default ConfirmOrder