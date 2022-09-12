import { PurchaseFlow } from "../../src/page_components"
import { useEffect } from "react"
import { useProduct } from "../../src/hooks"
import { useRouter } from "next/router"
import { DUMMY_PRODUCTS } from "../../src/hooks/data"

const PAGE_META = {
  title: 'Purchase'
}

const PRODUCT = DUMMY_PRODUCTS['1']

const PurchasePage = ({ headControls }) => {
  useEffect(() => headControls(PAGE_META), [headControls])

  const router = useRouter()
  const { productID } = router.query

  // const [product, productLoading] = useProduct(productID)

  return <PurchaseFlow product={PRODUCT} loadingProduct={false} />
}

export default PurchasePage