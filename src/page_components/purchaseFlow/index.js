import { Stepper, Step, StepLabel } from "@mui/material"
import {
  StyledSurface, StyledPageUnderStepper, StyledButtonDiv, StyledButton, StyledBackButton
} from "./style"
import PocInfo from "./purchasePages/poc"
import PaymentInfo from "./purchasePages/paymentInfo"
import ConfirmOrder from "./purchasePages/confirmOrder"
import { useEffect, useState } from "react"
import makeOrder from "../../api/database/orders/makeOrder";
import { useProduct } from "../../hooks"
import { BulkiContextConsumer } from "../../common/context"
import { usePocInfo } from "./utils"

const FLOW_PAGES = [
  {
    label: 'Contact Info',
    page: (formControl, formValues, setPageComplete, additionalProps) =>
      <PocInfo formControl={(key, value) => formControl(key, value, "poc")} formValues={formValues.poc}
        setPageComplete={setPageComplete} defaultPOC={additionalProps.defaultPOC} />,

  },
  {
    label: 'Payment Info',
    page: (formControl, formValues, setPageComplete) =>
      <PaymentInfo formControl={formControl} setPageComplete={setPageComplete} />,

  },
  {
    label: 'Confirm Order',
    page: (formControl, formValues, setPageComplete, product) =>
      <ConfirmOrder formControl={formControl} formValues={formValues}
        setPageComplete={setPageComplete} product={product} />,

  },
]

const defaultFormValue = {
  shippingInfo: { streetAddress: '', city: '', state: '', zip: '' },
  poc: { firstName: '', lastName: '', email: '', phone: '' }
}

export const PurchaseFlowWithContext = ({ product, loadingProduct, bulkiContext }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [purchaseData, setPurchaseData] = useState(defaultFormValue);
  const [pageComplete, setPageComplete] = useState(false);

  usePocInfo(bulkiContext?.userData?.uid,
    (fieldkey, newValue) => setPurchaseData(prev => {
      prev.poc = { ...prev.poc, [fieldkey]: newValue }
      return prev
    }))

  const changeFormValue = (fieldKey, value, formKey) => {
    setPurchaseData(prev => ({ ...prev, [formKey]: { ...prev[formKey], [fieldKey]: value } }))
  }

  const goToNextPage = () => {
    if (pageComplete) {
      setActiveStepIndex(prev => {
        if (prev !== FLOW_PAGES.length - 1) return prev + 1
        else return prev
      })
    }
  }

  const goToPrevPage = () => {
    setActiveStepIndex(prev => {
      if (prev !== 0) return prev - 1
      else return prev
    })
  }

  return <StyledSurface>
    <Stepper>
      {
        FLOW_PAGES.map((page, index) => {
          return <Step key={page.label} active={activeStepIndex === index}>
            <StepLabel>{page.label}</StepLabel>
          </Step>
        })
      }
    </Stepper>
    <StyledPageUnderStepper>
      {FLOW_PAGES[activeStepIndex].page(changeFormValue, purchaseData, setPageComplete, { product, loadingProduct })}
    </StyledPageUnderStepper>
    <StyledButtonDiv $previous={activeStepIndex !== 0}>
      {
        activeStepIndex !== 0 && <StyledButton onClick={goToPrevPage}>Prev</StyledButton>
      }
      {
        activeStepIndex !== FLOW_PAGES.length - 1
          ? < StyledButton onClick={goToNextPage} disabled={!pageComplete}>Next</StyledButton>
          : < StyledButton onClick={() => makeOrder(productId)}>Confirm</StyledButton>
      }
    </StyledButtonDiv>
  </StyledSurface >
}

export const PurchaseFlow = (props) => {
  return <BulkiContextConsumer>
    {context => <PurchaseFlowWithContext {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}
