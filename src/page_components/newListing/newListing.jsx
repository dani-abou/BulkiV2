import { PageIfAuthenticated } from "../utils"
import BulkiSurface from "../../components/BulkiSurface"
import { useState, useEffect } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material"
import { StyledButtonDiv, StyledButton, StyledPageUnderStepper, StyledSubformTitle, StyledPageTitle, StyledRequiredIndicator } from "./style";
import { ProductInfo, ConfirmListing, Pricing } from "./postingPages";
import { ProductBasicInfoForm, ProductDimensionsForm } from "../../components/BulkiForm/forms/productInfo";
import { v1 } from "uuid";
import { cloneDeep } from "lodash";
import { useRouter } from "next/router"
import makeListing from "../../api/database/listings/makeListing";
import { BulkiContextConsumer } from "../../common/context";
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
    page: (formValues, formControls) => <ConfirmListing formControl={formControls.changeFormValue} formValues={formValues} />,
  },
]

const defaultFormValues = {
  name: '', description: '', unitDefinition: '',

  pricing: {
    [v1()]: {
      quantity: 50, price: 100, label: ''
    }
  },
}

const NewListing = ({ userId }) => {
  const [isConfirm, setIsConfirm] = useState(false);

  const [pageComplete, setPageComplete] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [newProduct, setNewProduct] = useState(defaultFormValues)

  const [images, setImages] = useState([]);
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
      for (var file of files) {
        newImages.push(changeFileName(file))
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
    await makeListing(userId, newProduct, images)
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
          {
            changeFormValue, addPricingTier, removePricingTier, setPageComplete,
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
              : <StyledButton onClick={createListing} disabled={!pageComplete}>Confirm</StyledButton>
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
    {context => <NewListing {...props} userId={context?.userData?.uid} />}
  </BulkiContextConsumer>
}