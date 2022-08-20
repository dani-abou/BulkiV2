import {
  StyledSearchFlex, StyledFiltersBox, StyledProductsDiv, StyledCardDivWithMargin,
  StyledPrice, StyledOrderButton, StyledCard, StyledListingsGrid
} from "./style"
import { useSearchProducts, useImageUrls } from "../../hooks"
import { BulkiButtonTypes } from "../../components/BulkiButton";
import urls from "../../common/urls.json"
import Link from "next/link"
import { useRouter } from 'next/router'
import { Grid } from "@mui/material";
import { useState } from "react";

const Listings = () => {

  const router = useRouter()
  const { search } = router.query

  const [products, loading] = useSearchProducts(search || "");
  const [imageUrls, setUrls] = useState({});

  const loadingImages = useImageUrls(products, setUrls)

  return <StyledSearchFlex>
    <StyledFiltersBox>DFGHJK</StyledFiltersBox>
    <Grid container spacing={2}>
      {
        products.map(product =>
          <Link href={urls.product + product.id} key={product.id}>
            <Grid item xs={12} sm={6} md={4} lg={3}>

              <StyledCard
                imageLoading={loadingImages[product.id]} image={(imageUrls && imageUrls[product.id]) ? imageUrls[product.id] : ''} header={product.productName}>
                <StyledPrice>US$ {product.price}</StyledPrice>
                <StyledOrderButton type={BulkiButtonTypes['outline']}>Order</StyledOrderButton>
              </StyledCard>
            </Grid>
          </Link>

        )
      }
    </Grid>
  </StyledSearchFlex>
}

export default Listings