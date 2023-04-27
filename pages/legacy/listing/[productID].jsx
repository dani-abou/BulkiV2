// import { useRouter } from 'next/router'
// import { useEffect, useMemo, useState } from "react"
// import { getListing } from "../../../src/api/database/listings"
// import { Listing } from "../../../src/page_components"
// import antelope from "../../public/antelope.png"
// import cans from "../../public/cans.png"
// import mulch from "../../public/mulch.png"

// const PAGE_META = {
//   title: 'Listing'
// }

// const ListingPage = ({ headControls }) => {
//   const [pageTitle, setPageTitle] = useState('Listing')
//   useEffect(() => { headControls({ ...PAGE_META, title: pageTitle }) }, [headControls, pageTitle])
//   const router = useRouter()
//   const { productID } = router.query

//   const [listing, setListing] = useState();

//   useEffect(() => {
//     const callGetListing = async () => {
//       if (productID) {
//         const listingResponse = await getListing(productID);
//         console.log(listingResponse)
//         if (listingResponse) {
//           setListing(listingResponse);
//           setPageTitle(listingResponse.product)
//         }
//       }
//     }
//     callGetListing();
//   }, [productID])

//   return <Listing listing={listing} />
// }

// export default ListingPage