import { BulkiCaption } from "../../../common/styles"
import BulkiInput from "../../../components/BulkiInput"
import { CatalogCard } from "../../catalog/catalog"
import {
  StyledPageFlex, StyledLeftContainer, StyledConfirmInfo, StyledConfirmInfoLabel,
  StyledConfirmTierContainer, StyledConfirmTier, StyledConfirmTierLabel, StyledConfirmTierInfo,
  StyledDemoCardContainer
} from "../style"
import { fixPricingLabels } from "../utils."
import { urls } from "../../../common"
import BulkiCheckbox from "../../../components/BulkiCheckbox"

const LabelWithInformation = ({ label, children }) => (
  <StyledConfirmInfo>
    <StyledConfirmInfoLabel>{label}</StyledConfirmInfoLabel>: {' '}
    {children}
  </StyledConfirmInfo>
)

const PricingTiers = ({ prices }) => (
  <StyledConfirmTierContainer>
    {prices.map(priceTier => (
      <StyledConfirmTier key={priceTier.label}>
        <StyledConfirmTierLabel>{priceTier.label}</StyledConfirmTierLabel>
        <StyledConfirmTierInfo>${priceTier.price}</StyledConfirmTierInfo>
        <StyledConfirmTierInfo>{priceTier.quantity} {priceTier.quantity === 1 ? ' unit' : ' units'}</StyledConfirmTierInfo>
      </StyledConfirmTier>
    ))}
  </StyledConfirmTierContainer>
)

const sortPrices = (prices => {
  return prices.sort((tierA, tierB) => {
    if (parseFloat(tierA.quantity) > parseFloat(tierB.quantity)) return 1;
    if (parseFloat(tierA.quantity) < parseFloat(tierB.quantity)) return -1;
    return 0
  })

})


const ConfirmListing = ({ formValues, formControl, images, termControls }) => {
  return <StyledPageFlex>
    <StyledLeftContainer>
      <LabelWithInformation label='Product Name'>{formValues.name}</LabelWithInformation>
      <LabelWithInformation label='Description'>{formValues.description}</LabelWithInformation><br />
      <StyledConfirmInfoLabel>Pricing Tiers : </StyledConfirmInfoLabel>
      <PricingTiers prices={sortPrices(Object.values(fixPricingLabels(formValues.pricing)))} /><br />
      <StyledConfirmInfoLabel>Point of Contact Email* </StyledConfirmInfoLabel>
      <BulkiInput
        value={formValues.contactEmail}
        onChange={e => formControl('contactEmail', e.target.body)} />
    </StyledLeftContainer>
    <StyledLeftContainer>
      <StyledDemoCardContainer>
        <CatalogCard product={{ ...formValues, images: images.map(img => URL.createObjectURL(img)) }} />
        <br />
        <BulkiCheckbox label={<BulkiCaption>I agree to the {' '}
          <a href={urls.termsAndConditions} target="_blank" rel="noreferrer">
            Terms and Conditions</a>
        </BulkiCaption>}
          checked={termControls.checked}
          onChange={termControls.setAcceptedTerms}
        />
      </StyledDemoCardContainer>

    </StyledLeftContainer>
  </StyledPageFlex>
}

export default ConfirmListing