import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from "react"
import antelope from "../../public/antelope.png"
import cans from "../../public/cans.png"
import mulch from "../../public/mulch.png"
import { getListing } from "../../src/api/database/listings"
import { Listing } from "../../src/page_components"

const PAGE_META = {
  title: 'Listing'
}

const ListingPage = ({ headControls }) => {
  const [pageTitle, setPageTitle] = useState('Listing')
  useEffect(() => { headControls({ ...PAGE_META, title: pageTitle }) }, [headControls, pageTitle])
  const router = useRouter()
  const { productId } = router.query

  const [listing, setListing] = useState();

  // useEffect(() => {
  //   const callGetListing = async () => {
  //     if (productId) {
  //       const listingResponse = await getListing(productId);
  //       if (listingResponse) {
  //         setListing(listingResponse);
  //         setPageTitle(listingResponse.product)
  //       }
  //     }
  //   }
  //   callGetListing();
  // }, [productId])

  // return <Listing listing={listing} />
  return <Listing />

}

export default ListingPage