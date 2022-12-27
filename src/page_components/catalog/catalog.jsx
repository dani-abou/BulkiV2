import {
  StyledSearchFlex, StyledFiltersBox, StyledDecoratedQuery,
  StyledPrice, StyledOrderButton, StyledCard, StyledSearchDescription, StyledSearchQueryBox
} from "./style"
import { useSearchProducts, useImageUrls } from "../../hooks"
import BulkiButton, { BulkiButtonTypes } from "../../components/BulkiButton";
import { urls } from "../../common"
import Link from "next/link"
import { useRouter } from 'next/router'
import { Grid } from "@mui/material";
import { useState } from "react";
import cans from "../../../public/cans.png"
import BulkiTree from "../../components/BulkiTree";
import filterTree from "./filterTree";
import getListing from "../../api/database/listings/getListing"

import { BulkiContextConsumer } from "../../common/context"

const Catalog = ({ searchQuery, bulkiContext }) => {

  const [products, loading] = useSearchProducts(searchQuery || "");
  const [imageUrls, setUrls] = useState({});

  const [selectedFilters, setSelectedFilters] = useState([]);

  const selectFilter = (treeId, event, elementId) => {
    if (treeId !== elementId) {
      setSelectedFilters(prev => {
        if (prev.includes(elementId)) {
          prev.filter(el => el !== elementId)
        }
        else prev.push(elementId)
        return prev
      })
    }
  }


  // const loadingImages = useImageUrls(products, setUrls)

  return <StyledSearchFlex>
    <StyledFiltersBox>
      <BulkiButton onClick={async () => console.log(await getListing('3VgHlyt43mrWHBlFpFIK'))}>TEST</BulkiButton>
      {filterTree.map(tree => {
        return <BulkiTree
          multiSelect
          key={tree.id}
          tree={tree}
          onNodeSelect={(e, node) => selectFilter(tree.id, e, node)} />
      })}
    </StyledFiltersBox>
    <div>
      {
        searchQuery && searchQuery !== '' && <StyledSearchQueryBox>
          <StyledSearchDescription>
            Showing results for {" "}
            <StyledDecoratedQuery>
              {`"`}{searchQuery}{`"`}

            </StyledDecoratedQuery>
          </StyledSearchDescription>
        </StyledSearchQueryBox>
      }
      <Grid container spacing={2}>
        {
          products.map(product =>
            <Link href={urls.listing + '/' + product.id} key={product.id}>
              <Grid item xs={4} sm={4} md={4} lg={3} xl={2.4} xxl={2}>
                <StyledCard
                  // imageLoading={loadingImages[product.id]}
                  image={(imageUrls && imageUrls[product.id]) ? imageUrls[product.id] : ''} header={product.product}>
                  {/* <StyledPrice>US$ {product.price[0].price}</StyledPrice> */}
                  <StyledPrice>US$ 40</StyledPrice>

                  <StyledOrderButton type={BulkiButtonTypes['outline']} onClick={event => event.stopPropagation()}>Order</StyledOrderButton>
                </StyledCard>
              </Grid>
            </Link>
          )
        }
      </Grid>
    </div>

  </StyledSearchFlex>
}

export default function BulkiCatalogWithContext(props) {
  return <BulkiContextConsumer>
    {context => <Catalog {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}