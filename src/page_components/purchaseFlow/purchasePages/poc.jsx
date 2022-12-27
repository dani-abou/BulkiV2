import BulkiButton, { BulkiIconButton } from "../../../components/BulkiButton"
import BulkiRadioGroup from "../../../components/BulkiRadioGroup"
import BulkiForm from "../../../components/BulkiForm"
import { ShippingInfoForm, POCInfo } from "../../../components/BulkiForm/forms/pocInfo"
import {
  StyledFormTitle, StyledShippingDiv, StyledFlexDiv, StyledQuoteDiv, StyledQuote,
  StyledRadioDiv, StyledFormDiv, StyledQuoteCompressToLeftDiv
} from "../style"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useEffect, useState } from "react"
import { BulkiCaption, BulkiH5 } from "../../../common/styles"

const SHIPPING_RADIO = [
  { value: 'scheduled', label: 'Schedule Appointment Delivery' },
  { value: 'liftgate', label: 'Liftgate Service Delivery' },
  { value: 'notify', label: 'Notification Prior to Delivery' },
  { value: 'school', label: 'School/College/Church delivery' },
  { value: 'inside', label: 'Inside Delivery' },
]

const PocInfo = ({ formControl, formValues, setPageComplete }) => {

  useEffect(() => {
    if (Object.values(formValues).some(val => val.length === 0)) {
      setPageComplete(false)
    } else {
      setPageComplete(true)
    }
  }, [formValues, setPageComplete])

  return <StyledShippingDiv>
    <StyledFormTitle>Point Of Contact</StyledFormTitle>
    <POCInfo onChange={formControl} values={formValues} />
  </StyledShippingDiv>
}

export default PocInfo