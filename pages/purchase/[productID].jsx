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
  const { productId } = router.query
  const [product, setProduct] = useState();

  useEffect(() => {
    const callGetListing = async () => {
      if (productId) {
        setLoadingProduct(true);
        const listing = await getListing(productId);
        setProduct(listing);
        setLoadingProduct(false);
      }
    }
    callGetListing();
  }, [productId]);



  return <PurchaseFlow product={product} loadingProduct={loadingProduct} />
}

export default PurchasePage