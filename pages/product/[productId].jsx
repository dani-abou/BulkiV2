import { useRouter } from "next/router";
import { useMemo } from "react";
import { PRODUCTS } from "../../src/data";
import Product from "../../src/page_components/product";

// ProductPage.getInitialProps = async (context) => {
//   // const { productId } = context.params;
//   // const product = PRODUCTS[productId];
//   console.log(context);

//   // if (!product) {
//   //   Router.push('/')
//   //   return { props: {} }
//   // }

//   return { props: { test: Object.keys(context) } }
// }

export default function ProductPage({ headControls }) {
  const router = useRouter();
  const { productId } = router.query;

  // const output = PRODUCTS[productId];
  // if (!output && !(typeof window === undefined)) router.push('/');
  // else return output;
  // // console.log(productId);

  const product = useMemo(() => PRODUCTS[productId], [productId]);

  return <Product product={product} productId={productId} />
}

