import { urls } from "../../../common"
import { BulkiCaption } from "../../../common/styles"
import { isValidEmail } from "../../../common/utils"
import BulkiCheckbox from "../../../components/BulkiCheckbox"
import BulkiInput from "../../../components/BulkiInput"
import { CatalogCard } from "../../catalog/catalog"
import { StyledConfirmInfo, StyledConfirmInfoLabel, StyledConfirmTier, StyledConfirmTierContainer, StyledConfirmTierInfo, StyledConfirmTierLabel, StyledDemoCaption, StyledDemoCardContainer, StyledInvalidEmail, StyledLeftContainer, StyledPageFlex } from "../style"
import { fixPricingLabels } from "../utils."

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
        onChange={e => formControl('contactEmail', e.target.value)} />
      {!isValidEmail(formValues.contactEmail) && <StyledInvalidEmail>Invalid Email</StyledInvalidEmail>}
    </StyledLeftContainer>
    <StyledLeftContainer>
      <StyledDemoCardContainer>
        <StyledDemoCaption>Demo of this listing in the catalog</StyledDemoCaption>
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