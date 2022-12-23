import { Listing } from "../../src/page_components"
import { useRouter } from 'next/router'
import { useMemo, useState, useEffect } from "react"
import cans from "../../public/cans.png"
import antelope from "../../public/antelope.png"
import mulch from "../../public/mulch.png"
import { getListing } from "../../src/api/database/listings"

const PAGE_META = {
  title: 'Listing'
}

const ListingPage = ({ headControls }) => {
  const [pageTitle, setPageTitle] = useState('Listing')
  useEffect(() => { headControls({ ...PAGE_META, title: pageTitle }) }, [headControls, pageTitle])
  const router = useRouter()
  const { productId } = router.query

  const [listing, setListing] = useState();

  useEffect(() => {
    const callGetListing = async () => {
      if (productId) {
        const listingResponse = await getListing(productId);
        setListing(listingResponse);
        setPageTitle(listingResponse.product)
      }
    }
    callGetListing();
  }, [productId])

  return <Listing listing={listing} />
}

export default ListingPage