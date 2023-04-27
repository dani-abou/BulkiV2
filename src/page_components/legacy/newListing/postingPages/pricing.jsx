import BulkiInput from "../../../components/BulkiInput"
import {
  StyledSubformTitle, StyledTierContainer, StyledListContainer, StyledTierTitleField,
  StyledTierNumberField, StyledTierDeleteIcon, StyledIconButton, StyledAdd
} from "../style"
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { BulkiButtonTypes, BulkiIconButton } from "../../../components/BulkiButton";
import { InputAdornment } from "@mui/material";
import { useEffect } from "react"
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const validate = input => {
  const isTooFloat = !input.includes(".") || (input.includes(".") &&
    (input.charAt(input.length - 1) === "." || input.charAt(input.length - 2) === "." || input.charAt(input.length - 3) === "."))
  return input >= 0 && isTooFloat
}

const Tier = ({ tier, onChange, deleteTier }) => {
  return <StyledListContainer>
    <StyledTierTitleField
      value={tier.label}
      onChange={e => onChange('label', e.target.value)}
      label="Title"
      placeholder={tier.quantity + (tier.quantity === "1" ? " unit" : " units")}
    />
    <StyledTierNumberField
      value={tier.quantity}
      onChange={e => validate(e.target.value) && onChange('quantity', e.target.value)}
      label="Quantity"
      type='number'
      required
      error={tier.quantity === ""}

    />
    <StyledTierNumberField
      value={tier.price}
      onChange={e => validate(e.target.value) && onChange('price', e.target.value)}
      label="Price"
      InputProps={{
        startAdornment: '$',
      }}
      required
      type="number"
      error={tier.price === ""}

    />
    <StyledTierDeleteIcon>
      <StyledIconButton onClick={deleteTier}><DeleteForeverRoundedIcon /></StyledIconButton>
    </StyledTierDeleteIcon>
  </StyledListContainer>
}

const Pricing = ({ formControl, formValues, addPricingTier, removePricingTier, setPageComplete }) => {
  useEffect(() => {
    if (Object.values(formValues).some(tier => !tier.quantity || !tier.price)) {
      setPageComplete(false)
    } else {
      setPageComplete(true)
    }
  }, [formValues, setPageComplete])

  return <div style={{ height: '100%' }}>
    <StyledSubformTitle>Pricing</StyledSubformTitle>
    <StyledAdd
      variant={BulkiButtonTypes.text}
      endIcon={<AddRoundedIcon />}
      onClick={addPricingTier}
    >Add</StyledAdd>
    <br />
    <StyledTierContainer>
      {Object.keys(formValues)
        .map((tierId) => {
          return <Tier key={tierId} tier={formValues[tierId]}
            onChange={(field, newValue) => formControl('pricing',
              { ...formValues, [tierId]: { ...formValues[tierId], [field]: newValue } })}
            deleteTier={() => removePricingTier(tierId)} />
        })}
    </StyledTierContainer>
  </div>
}

export default Pricing;