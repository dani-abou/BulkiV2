import React from "react";
import { CatalogCard } from "../catalog/catalog";
import { StyledHeader, StyledTopProducts } from "./style";



export default function Home(topProducts) {
  return <>
    <StyledTopProducts>
      <StyledHeader>Top Products</StyledHeader>
      {/* <CatalogCard /> */}
    </StyledTopProducts>
  </>
}
