import { PurchaseFlow } from "../../src/page_components"
import { useEffect } from "react"
import { useImageUrls } from "../../src/hooks"
import { useRouter } from "next/router"
import { DUMMY_PRODUCTS } from "../../src/hooks/data"
import { useState } from "react"
import { getListing } from "../../src/api/database/listings"

const PAGE_META = {
  title: 'Purchase'
}

const PRODUCT = DUMMY_PRODUCTS['1']

const PurchasePage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const [productURL, setProductUrl] = useState({})
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

  // const [product, productLoading] = useProduct(productId)
  // const loadingImages = useImageUrls([product], setProductUrl)

  return <PurchaseFlow product={product} loadingProduct={loadingProduct} />
  // productImage={productURL[productID]} loadingImages={productLoading || loadingImages}
}

export default PurchasePage