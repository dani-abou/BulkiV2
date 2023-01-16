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

const Listing = ({ listing }) => {
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
            {console.log(listing)}
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