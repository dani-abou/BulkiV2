import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getListing } from "../../src/api/database/listings"
import { useImageUrls } from "../../src/hooks"
import { DUMMY_PRODUCTS } from "../../src/hooks/data"
import { PurchaseFlow } from "../../src/page_components"


const PAGE_META = {
  title: 'Purchase'
}


const PurchasePage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const [loadingProduct, setLoadingProduct] = useState(false);

  const router = useRouter()
  const { productID } = router.query
  const [product, setProduct] = useState();

  useEffect(() => {
    const callGetListing = async () => {
      if (productID) {
        setLoadingProduct(true);
        const listing = await getListing(productID);
        setProduct(listing);
        setLoadingProduct(false);
      }
    }
    callGetListing();
  }, [productID]);

  return <PurchaseFlow product={product} loadingProduct={loadingProduct} />
}

export default PurchasePage