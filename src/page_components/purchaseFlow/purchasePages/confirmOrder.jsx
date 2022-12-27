import { CircularProgress } from "@mui/material"
import { StyledFlexDiv, StyledFormDiv } from "../style"

const ConfirmOrder = ({ formControl, formValues, setPageComplete, product }) => {
  return <StyledFlexDiv>
    <StyledFormDiv>
      {productInfo?.loadingProduct ? <CircularProgress /> : <>
        {productInfo?.product.product}
      </>}
    </StyledFormDiv>
    <StyledFormDiv>
      {formValues.shippingInfo.city}
    </StyledFormDiv>
  </StyledFlexDiv>
}

export default ConfirmOrder