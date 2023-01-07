import { Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from "react";
import cans from "../../../public/cans.png";
import getListing from "../../api/database/listings/getListing";
import { urls } from "../../common";
import BulkiButton, { BulkiButtonTypes } from "../../components/BulkiButton";
import BulkiTree from "../../components/BulkiTree";
import { useImageUrls, useSearchProducts } from "../../hooks";
import filterTree from "./filterTree";
import { StyledCard, StyledCardDescription, StyledDecoratedQuery, StyledFilters, StyledFiltersContainer, StyledOrderButton, StyledPrice, StyledResultsContainer, StyledSearchDescription, StyledSearchFlex, StyledSearchQueryBox } from "./style";

import { BulkiContextConsumer } from "../../common/context";
import { BulkiCaption } from "../../common/styles";
import CatalogSkeleton from "./skeleton";

export const CatalogCard = ({ product }) => (
  <StyledCard
    image={product.images[0]} header={product.name}>
    <StyledCardDescription>{product.description}</StyledCardDescription>
    <StyledOrderButton type={BulkiButtonTypes['outline']}>Order</StyledOrderButton>
  </StyledCard>
)

const Catalog = ({ searchQuery, bulkiContext }) => {

  const [products, loading] = useSearchProducts(searchQuery || "");

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

  return loading ? <CatalogSkeleton />
    : <StyledSearchFlex>
      <StyledFiltersContainer>

        <StyledFilters>
          <BulkiButton onClick={async () => console.log(await getListing('3VgHlyt43mrWHBlFpFIK'))}>TEST</BulkiButton>
          {filterTree.map(tree => {
            return <BulkiTree
              multiSelect
              key={tree.id}
              tree={tree}
              onNodeSelect={(e, node) => selectFilter(tree.id, e, node)} />
          })}
        </StyledFilters>
      </StyledFiltersContainer>

      <StyledResultsContainer>
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
                  <CatalogCard product={product} />
                </Grid>
              </Link>
            )
          }
        </Grid>
      </StyledResultsContainer>

    </StyledSearchFlex>
}

export default function BulkiCatalogWithContext(props) {
  return <BulkiContextConsumer>
    {context => <Catalog {...props} bulkiContext={context} />}
  </BulkiContextConsumer>
}