import {
  StyledListingPage, StyledCarousel, StyledCarouselDiv, StyledProductTitle, StyledInformationDiv,
  StyledBackgroundPaper
} from "./style"
import { useImagesOfProduct, useProduct } from "../../hooks"
import { CircularProgress, CssBaseline } from "@mui/material";
import cans from "../../../public/cans.png";
import mulch from "../../../public/mulch.png"
import antelope from "../../../public/antelope.png"



const product = {
  productName: 'cans and cans and aluminum cans, tall skinny cans, long narrow cans, beer, soda, coffee cans',
  company: 'cans',
}

const images = [cans, mulch, antelope]

const loading = false
const loadingImages = false
const Listing = ({ productID }) => {
  // const [product, loading] = useProduct(productID);
  // const [images, loadingImages] = useImagesOfProduct(product)

  return <StyledBackgroundPaper>
    {product && loading === false &&
      <div style={{ backgroundColor: 'blue', height: '100%' }}>
        <StyledListingPage>
          <StyledCarouselDiv>
            {
              loadingImages ?
                <CircularProgress /> :
                <StyledCarousel urls={images || []} showButtons showThumbnails />
            }
          </StyledCarouselDiv>
          <StyledInformationDiv >
            <StyledProductTitle>
              {product?.productName}
            </StyledProductTitle>
          </StyledInformationDiv>
        </StyledListingPage>
      </div>
    }
    {loading === 'ERROR' &&
      <>COULD NOT FIND product: {productID}</>
    }
    {loading === true && <>Loading</>
    }
  </StyledBackgroundPaper>



}

export default Listing