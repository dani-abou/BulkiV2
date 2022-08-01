import { Listing } from "../../src/pagesSrc"
import { useRouter } from 'next/router'

const ListingPage = () => {
  const router = useRouter()
  const { productID } = router.query

  return <Listing productId={productID} />
}

export default ListingPage