import BulkiButton, { BulkiIconButton } from "../../components/BulkiButton"
import BulkiRadioGroup from "../../components/BulkiRadioGroup"
import BulkiForm from "../../components/BulkiForm"
import { ShippingInfoForm, POCInfo } from "../../components/BulkiForm/forms/purchaseInfo"
import {
  StyledFormTitle, StyledShippingDiv, StyledFlexDiv, StyledQuoteDiv, StyledQuote,
  StyledRadioDiv, StyledFormDiv, StyledQuoteCompressToLeftDiv
} from "./style"
import { useInstantQuote } from "../../hooks"
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useEffect, useState } from "react"
import { BulkiCaption, BulkiH5 } from "../../common/styles"

const SHIPPING_RADIO = [
  { value: 'scheduled', label: 'Schedule Appointment Delivery' },
  { value: 'liftgate', label: 'Liftgate Service Delivery' },
  { value: 'notify', label: 'Notification Prior to Delivery' },
  { value: 'school', label: 'School/College/Church delivery' },
  { value: 'inside', label: 'Inside Delivery' },
]

const ShippingInfo = ({ formControl, formValues }) => {

  const estimatedShippingCost = useInstantQuote(formValues.shippingInfo);

  return <StyledShippingDiv>
    <StyledFlexDiv>
      <StyledFormDiv>
        <StyledFormTitle>Shipping Info</StyledFormTitle>
        <ShippingInfoForm onChange={formControl} />
      </StyledFormDiv>


      <StyledQuote>
        <StyledQuoteCompressToLeftDiv>
          <BulkiH5>
            Estimated Shipping Cost: $ {estimatedShippingCost}
          </BulkiH5>
          <br />
          <BulkiCaption >
            We are proud to say that we use Flock Friegh for all of our shipments. I am writing in all the extra dummy text that I can later specify. This is simply so that I can make a nice looking design.
          </BulkiCaption>
        </StyledQuoteCompressToLeftDiv>
      </StyledQuote>
    </StyledFlexDiv>
    <br />
    <br />
    <StyledFlexDiv >
      <StyledFormDiv>
        <StyledFormTitle>Point Of Contact</StyledFormTitle>
        <POCInfo onChange={formControl} />
      </StyledFormDiv>

      <StyledRadioDiv>
        <StyledFormTitle>Optional Services</StyledFormTitle>
        <br />
        <BulkiRadioGroup options={SHIPPING_RADIO} row onChange={e => console.log(e.target.value)} />
      </StyledRadioDiv>
    </StyledFlexDiv>
  </StyledShippingDiv>
}

export default ShippingInfo