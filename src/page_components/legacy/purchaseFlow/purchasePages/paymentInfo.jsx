import { Elements, PaymentElement } from "@stripe/react-stripe-js"
import { useEffect } from "react"
import { BulkiBody1, BulkiH5 } from "../../../../common/styles"
import { BulkiStripe } from "../../../../components/BulkiStripe"
import { StyledPrice, StyledPriceLabel, StyledPrices, StyledUnitDef, StyledUnits } from "../../listing/style"
import { StyledPaymentContainer, StyledPaymentFlex } from "../style"

const PaymentInfo = ({ setSelectedPrice, selectedPrice, listing, setPageComplete }) => {

  useEffect(() => {
    if (selectedPrice) {
      setPageComplete(true);
    } else setPageComplete(false);
  }, [selectedPrice, setPageComplete])
  return <StyledPaymentFlex>
    <BulkiStripe>
      <StyledPaymentContainer>
        <Elements>
          <PaymentElement id="payment-element" />

        </Elements>
      </StyledPaymentContainer>
      <StyledPaymentContainer>
        <BulkiH5> Please select payment option:</BulkiH5>
        <StyledUnitDef>
          *A unit consists of: {listing?.unitDefinition}
        </StyledUnitDef>
        <br />
        <StyledPrices>
          {Object.keys(listing?.pricing).map(priceKey => {
            const price = listing?.pricing[priceKey];
            return (<StyledPrice
              key={priceKey}
              onClick={() => setSelectedPrice(priceKey)}
              $selected={selectedPrice === priceKey}>
              <BulkiBody1>
                <StyledPriceLabel>
                  {price.label}{'\n'}
                </StyledPriceLabel>
                ${price.price}
                <StyledUnits>
                  {'\n'}({price.quantity} units)
                </StyledUnits>
              </BulkiBody1>
            </StyledPrice>
            )
          })
          }
        </StyledPrices>
      </StyledPaymentContainer>
    </BulkiStripe>
  </StyledPaymentFlex>
}

export default PaymentInfo