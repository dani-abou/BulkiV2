import { useEffect } from 'react';
import Shop from "../src/page_components/shop";


const PageProps = {
  hideNav: false,
  backgroundImg: true
}

export default function ShopPage({ headControls }) {
  useEffect(() => headControls(PageProps), [headControls])

  return <Shop />
} 