import { useEffect } from "react";
import { ProductBasicInfoForm, ProductDimensionsForm } from "../../../components/BulkiForm/forms/productInfo";
import { StyledSubformTitle } from "../style"


const ProductInfo = ({ formControl, formValues, setPageComplete }) => {
  useEffect(() => {
    if (Object.values(formValues).some(val => val.length === 0)) {
      setPageComplete(false)
    } else {
      setPageComplete(true)
    }
  }, [formValues, setPageComplete])

  return <>
    <StyledSubformTitle>Product Details</StyledSubformTitle>
    <ProductBasicInfoForm onChange={formControl} values={formValues}
    />
  </>
}

export default ProductInfo;