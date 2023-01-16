import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { cloneDeep } from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v1 } from "uuid";
import makeListing from "../../api/database/listings/makeListing";
import { BulkiContextConsumer } from "../../common/context";
import { isValidEmail } from "../../common/utils";
import { ProductBasicInfoForm, ProductDimensionsForm } from "../../components/BulkiForm/forms/productInfo";
import BulkiSurface from "../../components/BulkiSurface";
import { PageIfAuthenticated } from "../utils";
import { ConfirmListing, Pricing, ProductInfo } from "./postingPages";
import { StyledButton, StyledButtonDiv, StyledPageTitle, StyledPageUnderStepper, StyledRequiredIndicator, StyledSubformTitle } from "./style";
import { changeFileName } from "./utils.";


const FLOW_PAGES = [
  {
    label: 'Product Details',
    page: (formValues, formControls) =>
      <ProductInfo
        formControl={formControls.changeFormValue}
        setPageComplete={formControls.setPageComplete}
        formValues={formValues}
        imageControls={formControls.imageControls}
      />,
  },
  {
    label: 'Pricing',
    page: (formValues, formControls) => <Pricing
      formControl={formControls.changeFormValue}
      formValues={formValues.pricing}
      setPageComplete={formControls.setPageComplete}
      removePricingTier={formControls.removePricingTier}
      addPricingTier={formControls.addPricingTier}
    />,
  },
  {
    label: 'Confirmation',
    page: (formValues, formControls) => <ConfirmListing
      formControl={formControls.changeFormValue}
      formValues={formValues}
      images={formControls.imageControls.images}
      termControls={formControls.termControls}
    />,
  },
]

const defaultFormValues = (email) => ({
  name: '',
  description: '',
  unitDefinition: '',
  pricing: {
    [v1()]: {
      quantity: 50, price: 100, label: ''
    }
  },
  contactEmail: email,
})

const NewListing = ({ user }) => {
  const [isConfirm, setIsConfirm] = useState(false);

  const [pageComplete, setPageComplete] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [newProduct, setNewProduct] = useState(defaultFormValues(user?.email))

  const [images, setImages] = useState([]);

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const router = useRouter()


  // prompt the user if they try and leave with unsaved changes
  useEffect(() => {
    if (Object.values(newProduct).some(val => val.length !== 0)) {
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
  }, [router, newProduct]);

  const changeFormValue = (fieldKey, value) => {
    setNewProduct(prev => ({ ...prev, [fieldKey]: value }))
  }

  const addImages = files => {
    setImages(prev => {
      let newImages = cloneDeep(prev);
      if (files.length) {
        for (var file of files) {
          newImages.push(changeFileName(file))
        }
      } else {
        newImages.push(changeFileName(files))
      }

      return newImages
    })
  }


  const removeImage = (index) => {
    setImages(prev => {
      let newImages = cloneDeep(prev);
      newImages.splice(index, 1)
      return newImages
    })
  }

  const reorderImages = (source, destination) => {
    setImages(prev => {
      let newImages = cloneDeep(prev);
      const movedImage = newImages[source];
      newImages.splice(source, 1);
      newImages.splice(destination, 0, movedImage);
      return newImages
    })
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

  const createListing = async () => {
    await makeListing(user?.uid, newProduct, images)
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

      {/* Stepper */}
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
          {
            changeFormValue, addPricingTier, removePricingTier, setPageComplete,
            termControls: { setAcceptedTerms: e => setAcceptedTerms(e.target.checked), checked: acceptedTerms },
            imageControls: { reorderImages, removeImage, addImages, images }
          })}
      </StyledPageUnderStepper>
      <StyledButtonDiv $previous={activeStep !== 0}>
        {
          activeStep !== 0 && <StyledButton onClick={goToPrevPage}>Previous</StyledButton>
        }
        <>
          <StyledRequiredIndicator>* indicates a required field</StyledRequiredIndicator>
          {
            activeStep !== FLOW_PAGES.length - 1 ? <StyledButton onClick={goToNextPage} disabled={!pageComplete}>Next</StyledButton>
              : <StyledButton
                onClick={createListing}
                disabled={!pageComplete || !isValidEmail(newProduct.contactEmail) || !acceptedTerms}>
                Confirm
              </StyledButton>
          }
        </>
      </StyledButtonDiv>
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

export default function NewListingWithContext(props) {
  return <BulkiContextConsumer>
    {context => <NewListing {...props} user={context?.userData} />}
  </BulkiContextConsumer>
}