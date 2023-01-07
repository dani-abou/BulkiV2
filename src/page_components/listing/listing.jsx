import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { urls } from "../../common";
import { BulkiBody1, BulkiCaption, BulkiH5, BulkiH6 } from "../../common/styles";
import { useImagesOfProduct } from "../../hooks";
import {
  StyledBackgroundPaper, StyledBuyButton, StyledCarousel, StyledCarouselDiv, StyledDescription, StyledInformationDiv,
  StyledListingPage, StyledPrice, StyledPriceLabel, StyledPrices, StyledProductTitle, StyledUnitDef, StyledUnits
} from "./style";

const DUMMY = {
  name: 'Cans',
  description: 'A lot of very nice cans, lorem ipsum an some other text so that it feels long enough. I should keep writing. Parquet Courts are super duper cooooool. I am boucning my head aggresively to this stuff on the plane while typing away and everyone else is sleeping.',
  unitDefinition: 'A pack of 12 cans',
  pricing: {
    sdfghjk: {
      quantity: 50, price: 100, label: '50 units'
    },
    sdfghj: {
      quantity: 100, price: 175, label: 'Set'
    },
    hjsdfghjk: {
      quantity: 200, price: 300, label: 'Bundle'
    }

  },
  contactEmail: 'dummy@gmail.com',
  sellerName: 'The Can Bros',
  images: ['/cans.png']
}

// const Listing = ({ listing }) => {
const Listing = ({ }) => {
  const listing = DUMMY;
  return <StyledBackgroundPaper>
    {listing &&
      <StyledListingPage>
        <StyledCarouselDiv>
          <StyledCarousel urls={listing.images || []} showButtons showThumbnails />
        </StyledCarouselDiv>
        <StyledInformationDiv >
          <StyledProductTitle>{listing?.name}</StyledProductTitle>
          <StyledUnitDef>{listing?.sellerName}</StyledUnitDef>
          <br />
          <br />
          <StyledDescription>{listing?.description}</StyledDescription>
          <br />
          <br />
          <BulkiH5>Pricing Options</BulkiH5>
          <StyledUnitDef>
            *A unit consists of: {listing.unitDefinition}
          </StyledUnitDef>
          <br />

          <StyledPrices>
            {Object.values(listing?.pricing).map((price, index) => (
              <StyledPrice key={index}>
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
            ))
            }
          </StyledPrices>
          <br />



          <Link href={urls.purchaseFlow + '/' + listing?.listingId}>
            <StyledBuyButton>Buy now </StyledBuyButton>
          </Link>
        </StyledInformationDiv>
      </StyledListingPage>
    }
  </StyledBackgroundPaper>



}

export default Listing