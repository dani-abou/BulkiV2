
import { POCInfo } from "../../../components/BulkiForm/forms/purchaseInfo"
import { PickupInfoForm } from "../../../components/BulkiForm/forms/productInfo"
import { StyledFormTitle } from "../style"

const PickupInfo = ({ formControl, formValues }) => {
  return <div>

    <div>
      <StyledFormTitle>Pickup address</StyledFormTitle>
      <PickupInfoForm onChange={formControl} />
    </div>
    <br />
    <br />
    <div>
      <StyledFormTitle>Point Of Contact</StyledFormTitle>
      <POCInfo onChange={formControl} />
    </div>

  </div>
}

export default PickupInfo