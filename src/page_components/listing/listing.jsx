import {
  StyledListingPage, StyledCarousel, StyledCarouselDiv, StyledProductTitle, StyledInformationDiv,
  StyledBackgroundPaper, StyledBuyButton, StyledDescription
} from "./style"
import { useImagesOfProduct } from "../../hooks"
import { CircularProgress } from "@mui/material";
import Link from "next/link"
import { useEffect, } from "react";
import { urls } from "../../common";

const loadingImages = true

const Listing = ({ listing }) => {
  return <StyledBackgroundPaper>
    {listing &&

      <StyledListingPage>
        <StyledCarouselDiv>
          {
            loadingImages ?
              <CircularProgress /> :
              <StyledCarousel urls={images || []} showButtons showThumbnails />
          }
        </StyledCarouselDiv>
        <StyledInformationDiv >
          <StyledProductTitle>{listing?.product}</StyledProductTitle>
          <br />
          <br />
          <StyledDescription>{listing?.description}</StyledDescription>
          <Link href={urls.purchaseFlow + '/' + listing?.listingId}>
            <StyledBuyButton>Buy now </StyledBuyButton>
          </Link>
        </StyledInformationDiv>
      </StyledListingPage>
    }
  </StyledBackgroundPaper>



}

export default Listing