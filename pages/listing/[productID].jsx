import { Listing } from "../../src/page_components"
import { useRouter } from 'next/router'
import { useMemo, useState, useEffect } from "react"
import cans from "../../public/cans.png"
import antelope from "../../public/antelope.png"
import mulch from "../../public/mulch.png"


// const images = [cans, antelope, mulch]

// const dummy_product = {
//   productName: 'Cans of all shapes and sizes and desires and passions and care. Why would you not buy this can, cheapest on the market this is definitely long enough',
//   images,
//   company: "Cans Co.",
//   description: "You must buy this. Now. At this moment. I can't think of a good paragraph description example right now, so I'm just typing dummy content. Who cares really noo one is gunna read this ever, well at least hopefuklly not right. I am literally sitting a on place right now listening to Santana. My guy Santana is such a baller you'd be so suprised.",
//   weight: 5000,
//   price: 40,
//   moq: 3,
//   leadTime: 5
// }

const PAGE_META = {
  title: 'Listing'
}

const ListingPage = ({ headControls }) => {
  const [pageTitle, setPageTitle] = useState('Listing')
  useEffect(() => { headControls({ ...PAGE_META, title: pageTitle, }) }, [headControls, pageTitle])
  const router = useRouter()
  const { productID } = router.query


  return <Listing productID={productID} setPageTitle={setPageTitle} />
}

export default ListingPage