import {
  StyledSearchFlex, StyledFiltersBox, StyledProductsDiv, StyledCardDivWithMargin,
  StyledPrice, StyledOrderButton, StyledCard
} from "./style"
import { useSearchProducts, useImageUrls } from "../../hooks"
import { BulkiButtonTypes } from "../../components/BulkiButton";
import urls from "../../common/urls.json"
import Link from "next/link"
import { useRouter } from 'next/router'

const Listings = () => {

  const router = useRouter()
  const { search } = router.query

  const [products, loading] = useSearchProducts(search || "");
  const images = useImageUrls(products)

  return <StyledSearchFlex>
    <StyledFiltersBox>DFGHJK</StyledFiltersBox>
    <StyledProductsDiv>
      {
        products.map(product =>
          <Link key={product.id} href={urls.product + product.id}>
            <StyledCardDivWithMargin >
              <StyledCard
                images={images[product.id] || []} header={product.productName}>
                <StyledPrice>US$ {product.price}</StyledPrice>
                <StyledOrderButton type={BulkiButtonTypes['outline']}>Order</StyledOrderButton>
              </StyledCard>
            </StyledCardDivWithMargin>
          </Link>
        )
      }
    </StyledProductsDiv>
  </StyledSearchFlex>
}

export default Listings