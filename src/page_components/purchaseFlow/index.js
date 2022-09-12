import { Stepper, Step, StepLabel } from "@mui/material"
import {
  StyledSurface, StyledPageUnderStepper, StyledButtonDiv, StyledButton, StyledBackButton
} from "./style"
import ShippingInfo from "./shippingInfo"
import { useEffect, useState } from "react"
import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const FLOW_PAGES = [
  {
    label: 'Shipping Info',
    page: (formControl, formValues) => <ShippingInfo formControl={formControl} formValues={formValues} />,

  },
  {
    label: 'Payment Info',
    page: (formControl) => <ShippingInfo formControl={formControl} />,

  },
  {
    label: 'Confirm Order',
    page: (formControl) => <ShippingInfo formControl={formControl} />,

  },
]

const defaultFormValue = {
  shippingInfo: { streetAddress: '', city: '', state: '', zip: '' },
  poc: { firstName: '', lastName: '', email: '', phoneNumber: '' }
}

export const PurchaseFlow = ({ product, loadingProduct }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [purchaseData, setPurchaseData] = useState(defaultFormValue);

  const changeFormValue = (fieldKey, value, formKey) => {
    setPurchaseData(prev => ({ ...prev, [formKey]: { ...prev[formKey], [fieldKey]: value } }))
  }

  const goToNextPage = () => {
    setActiveStepIndex(prev => {
      if (prev !== FLOW_PAGES.length - 1) return prev + 1
      else return prev
    })
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
      {FLOW_PAGES[activeStepIndex].page(changeFormValue, purchaseData)}
    </StyledPageUnderStepper>
    <StyledButtonDiv $previous={activeStepIndex !== 0}>
      {
        activeStepIndex !== 0 && <StyledButton onClick={goToPrevPage}>Prev</StyledButton>
      }
      <StyledButton onClick={goToNextPage}>Next</StyledButton>
    </StyledButtonDiv>
  </StyledSurface>
}