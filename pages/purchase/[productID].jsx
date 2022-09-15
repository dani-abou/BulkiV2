import { PurchaseFlow } from "../../src/page_components"
import { useEffect } from "react"
import { useImageUrls, useProduct } from "../../src/hooks"
import { useRouter } from "next/router"
import { DUMMY_PRODUCTS } from "../../src/hooks/data"
import { useState } from "react"

const PAGE_META = {
  title: 'Purchase'
}

const PRODUCT = DUMMY_PRODUCTS['1']

const PurchasePage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const [productURL, setProductUrl] = useState({})

  const router = useRouter()
  const { productID } = router.query

  const [product, productLoading] = useProduct(productID)
  // const loadingImages = useImageUrls([product], setProductUrl)
  // console.log(product)

  return <PurchaseFlow product={product} loadingProduct={productLoading}
  // productImage={productURL[productID]} loadingImages={productLoading || loadingImages}
  />
}

export default PurchasePage