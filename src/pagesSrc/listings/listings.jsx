import {
  StyledSearchFlex, StyledFiltersBox, StyledProductsDiv, StyledCardDivWithMargin,
  StyledPrice, StyledOrderButton, StyledCard
} from "./style"
import { useSearchProducts } from "../../hooks"
import { BulkiButtonTypes } from "../../components/BulkiButton";
import urls from "../../common/urls.json"
import Link from "next/link"



const Listings = ({ search = "" }) => {
  const [products, loadingProducts] = useSearchProducts(search);

  return <StyledSearchFlex>
    {search}
    <StyledFiltersBox>DFGHJK</StyledFiltersBox>
    <StyledProductsDiv>
      {
        products.map(product =>
          <Link key={product.id} href={urls.product + product.id}>
            <StyledCardDivWithMargin >
              <StyledCard
                imageSrc={product.img} header={product.name}>
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