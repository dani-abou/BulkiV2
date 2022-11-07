import { PageIfAuthenticated } from "../utils"
import BulkiSurface from "../../components/BulkiSurface"
import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material"
import { StyledButtonDiv, StyledButton, StyledPageUnderStepper, StyledSubformTitle, StyledPageTitle, StyledRequiredIndicator } from "./style";
import { ProductInfo, PickupInfo, Pricing } from "./postingPages";
import { ProductBasicInfoForm, ProductDimensionsForm } from "../../components/BulkiForm/forms/productInfo";
import { POCInfo } from "../../components/BulkiForm/forms/purchaseInfo"
import { PickupInfoForm } from "../../components/BulkiForm/forms/productInfo"
import BulkiButton from "../../components/BulkiButton";
import { v1 } from "uuid";
import { cloneDeep } from "lodash";
import { useRouter } from "next/router"


const FLOW_PAGES = [
  {
    label: 'Product Details',
    page: (formValues, formControls) =>
      <ProductInfo formControl={(fieldKey, value) => formControls.changeFormValue(fieldKey, value, 'basicInfo')}
        setPageComplete={formControls.setPageComplete}
        formValues={formValues.basicInfo}
      />,
  },
  {
    label: 'Pricing',
    page: (formValues, formControls) => <Pricing
      formControl={(fieldKey, value) => formControls.changeFormValue(fieldKey, value, 'pricing')}
      formValues={formValues.pricing}
      setPageComplete={formControls.setPageComplete}
      removePricingTier={formControls.removePricingTier}
      addPricingTier={formControls.addPricingTier}
    />,
  },
  {
    label: 'Confirmation',
    page: (formValues, formControls) => <ProductInfo formControl={formControls.changeFormValue} formValues={formValues} />,
  },
]

const defaultFormValues = {
  basicInfo: {
    productName: '', description: '', unitDefinition: '',
    // images: []
  },
  pricing: {
    [v1()]: {
      quantity: 50, price: 100, label: ''
    }
  },
  dimensions: {
    weight: '', height: '', width: '', length: ''
  },
  freight: {
    nmfc: '', nmfcSub: '', freightClass: ''
  },
  pickupAddress: {
    streetAddress: '', city: '', state: '', zip: ''
  },
  poc: {
    firstName: '', lastName: '', email: '', phoneNumber: ''
  },
}

const NewListing = () => {
  const [isConfirm, setIsConfirm] = useState(false);

  const [pageComplete, setPageComplete] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [newProduct, setNewProduct] = useState(defaultFormValues)

  const router = useRouter()


  // prompt the user if they try and leave with unsaved changes
  useEffect(() => {
    if (Object.values(newProduct.basicInfo).some(val => val.length !== 0)) {
      const warningText =
        'Are you sure you wish to leave this page? You will lose all progress';
      const handleWindowClose = e => {
        // if (!unsavedChanges) return;
        e.preventDefault();
        return (e.returnValue = warningText);
      };
      const handleBrowseAway = () => {
        // if (!unsavedChanges) return;
        if (window.confirm(warningText)) return;
        router.events.emit('routeChangeError');
        throw 'routeChange aborted.';
      };
      window.addEventListener('beforeunload', handleWindowClose);
      router.events.on('routeChangeStart', handleBrowseAway);
      return () => {
        window.removeEventListener('beforeunload', handleWindowClose);
        router.events.off('routeChangeStart', handleBrowseAway);
      };
    }
  }, [router, newProduct.basicInfo]);

  const changeFormValue = (fieldKey, value, formKey) => {
    setNewProduct(prev => ({ ...prev, [formKey]: { ...prev[formKey], [fieldKey]: value } }))
  }

  const goToNextPage = () => {
    if (pageComplete) {
      setActiveStep(prev => {
        if (prev !== FLOW_PAGES.length - 1) return prev + 1
        else return prev
      })
    }
  }

  const goToPrevPage = () => {
    setActiveStep(prev => {
      if (prev !== 0) return prev - 1
      else return prev
    })
  }

  const createListing = () => {
    console.log("Making new listing");
  }

  const removePricingTier = (tierId) => {
    if (Object.keys(newProduct.pricing).length > 1) {
      setNewProduct(prev => {
        const newTiers = cloneDeep(prev.pricing);
        delete newTiers[tierId]
        return { ...prev, pricing: newTiers }
      })
    }
  }

  const addPricingTier = () => {
    setNewProduct(prev => {
      return {
        ...prev, pricing: {
          ...prev.pricing,
          [v1()]: {
            quantity: '',
            label: '',
            price: ''
          }
        }
      }
    })
  }

  return <BulkiSurface>
    <PageIfAuthenticated>

      <Stepper>
        {
          FLOW_PAGES.map((page, index) => {
            return <Step key={page.label} active={activeStep === index}>
              <StepLabel>{page.label}</StepLabel>
            </Step>
          })
        }
      </Stepper>
      <StyledPageUnderStepper>
        {FLOW_PAGES[activeStep].page(newProduct,
          { changeFormValue, addPricingTier, removePricingTier, setPageComplete })}

      </StyledPageUnderStepper>
      <StyledButtonDiv $previous={activeStep !== 0}>
        {
          activeStep !== 0 && <StyledButton onClick={goToPrevPage}>Previous</StyledButton>
        }
        <>
          <StyledRequiredIndicator>* indicates a required field</StyledRequiredIndicator>
          {
            activeStep !== FLOW_PAGES.length - 1 ? <StyledButton onClick={goToNextPage} disabled={!pageComplete}>Next</StyledButton>
              : <StyledButton onClick={createListing} disabled={!pageComplete}>Confirm</StyledButton>
          }
        </>

      </StyledButtonDiv>
      {/* {
        !isConfirm && <><StyledPageTitle>
          New Listing
        </StyledPageTitle>
          <StyledSubformTitle>Product Details</StyledSubformTitle>
          <ProductBasicInfoForm onChange={changeFormValue} />
          <StyledButtonDiv>
            <StyledButton onClick={() => setIsConfirm(true)}>Next</StyledButton>
          </StyledButtonDiv>
        </>
      } */}
      {
        isConfirm && <>
          <StyledPageTitle>
            Confirm Listing
          </StyledPageTitle>
          <StyledSubformTitle>Product Details</StyledSubformTitle>
          <ProductBasicInfoForm onChange={changeFormValue} />

          <StyledButtonDiv $previous={true}>
            <StyledButton onClick={() => setIsConfirm(false)}>Previous</StyledButton>
            <StyledButton onClick={() => setIsConfirm(true)}>Next</StyledButton>
          </StyledButtonDiv>
        </>
      }

    </PageIfAuthenticated>

  </BulkiSurface>
}

export default NewListing