
import { POCInfo } from "../../../components/BulkiForm/forms/purchaseInfo"
import { PickupInfoForm } from "../../../components/BulkiForm/forms/productInfo"
import { StyledSubformTitle } from "../style"

const PickupInfo = ({ formControl, formValues }) => {
  return <div>

    <div>
      <StyledSubformTitle>Pickup address</StyledSubformTitle>
      <PickupInfoForm onChange={formControl} />
    </div>
    <br />
    <br />
    <div>
      <StyledSubformTitle>Point Of Contact</StyledSubformTitle>
      <POCInfo onChange={formControl} />
    </div>

  </div>
}

export default PickupInfo