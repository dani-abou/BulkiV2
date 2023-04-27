import NewListing from "../../src/page_components/newListing";
import { useEffect } from "react";

const PAGE_META = {
  title: 'My Account'
}


const NewListingPage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])
  return <NewListing />
}

export default NewListingPage;