import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getListing } from "../../src/api/database/listings"
import { useImageUrls } from "../../src/hooks"
import { DUMMY_PRODUCTS } from "../../src/hooks/data"
import { PurchaseFlow } from "../../src/page_components"

const DUMMY = {
  name: 'Cans',
  description: 'A lot of very nice cans, lorem ipsum an some other text so that it feels long enough. I should keep writing. Parquet Courts are super duper cooooool. I am boucning my head aggresively to this stuff on the plane while typing away and everyone else is sleeping.',
  unitDefinition: 'A pack of 12 cans',
  pricing: {
    sdfghjk: {
      quantity: 50, price: 100, label: '50 units'
    },
    sdfghj: {
      quantity: 100, price: 175, label: 'Set'
    },
    hjsdfghjk: {
      quantity: 200, price: 300, label: 'Bundle'
    }

  },
  contactEmail: 'dummy@gmail.com',
  sellerName: 'The Can Bros',
  images: ['/cans.png']
}

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
  const [product, setProduct] = useState(DUMMY);

  // useEffect(() => {
  //   const callGetListing = async () => {
  //     if (productId) {
  //       setLoadingProduct(true);
  //       const listing = await getListing(productId);
  //       setProduct(listing);
  //       setLoadingProduct(false);
  //     }
  //   }
  //   callGetListing();
  // }, [productId]);

  // const [product, productLoading] = useProduct(productId)
  // const loadingImages = useImageUrls([product], setProductUrl)


  return <PurchaseFlow product={product} loadingProduct={loadingProduct} />
  // productImage={productURL[productID]} loadingImages={productLoading || loadingImages}
}

export default PurchasePage