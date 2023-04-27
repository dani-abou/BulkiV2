import { Step, StepLabel, Stepper } from "@mui/material"
import { useEffect, useState } from "react"
import makeOrder from "../../api/database/orders/makeOrder"
import getUserData from "../../api/database/users/getUserData"
import { BulkiContextConsumer } from "../../common/context"
import { useProduct } from "../../hooks"
import ConfirmOrder from "./purchasePages/confirmOrder"
import PaymentInfo from "./purchasePages/paymentInfo"
import PocInfo from "./purchasePages/poc"
import { StyledBackButton, StyledButton, StyledButtonDiv, StyledPageUnderStepper, StyledSurface } from "./style"

const FLOW_PAGES = [
  {
    label: 'Contact Info',
    page: (formControl, formValues, setPageComplete, additionalProps) =>
      <PocInfo formControl={(key, value) => formControl(key, value, "poc")} formValues={formValues.poc}
        setPageComplete={setPageComplete} defaultPOC={additionalProps.defaultPOC} />,

  },
  {
    label: 'Payment Info',
    page: (formControl, formValues, setPageComplete, additionalProps) =>
      <PaymentInfo
        setPageComplete={setPageComplete}
        setSelectedPrice={additionalProps.setSelectedPrice}
        selectedPrice={formValues.price}
        listing={additionalProps.product} />,

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
  poc: { firstName: '', lastName: '', email: '', phone: '' },
}

export const PurchaseFlowWithContext = ({ product, loadingProduct, bulkiContext }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [purchaseData, setPurchaseData] = useState(defaultFormValue);
  const [pageComplete, setPageComplete] = useState(false);

  useEffect(() => {
    const setter = async () => {
      const response = await getUserData(bulkiContext?.userData?.uid);
      setPurchaseData(prev => ({
        ...prev, poc: {
          firstName: response.firstName || '',
          lastName: response.lastName || '',
          email: response.email || '',
          phone: response.phone || '',
        }
      }))
    }
    setter()
  }, [bulkiContext?.userData?.uid])

  const changeFormValue = (fieldKey, value, formKey) => {
    setPurchaseData(prev => ({ ...prev, [formKey]: { ...prev[formKey], [fieldKey]: value } }))
  }

  const setSelectedPrice = (newPrice) => {
    setPurchaseData(prev => ({ ...prev, price: newPrice }))
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
      {FLOW_PAGES[activeStepIndex].page(changeFormValue, purchaseData, setPageComplete, { product, loadingProduct, setSelectedPrice })}
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
