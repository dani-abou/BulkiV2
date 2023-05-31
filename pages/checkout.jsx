import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useMemo } from "react";
import usePaymentIntent from "../src/api/payment/usePaymentIntent";
import { useCart } from "../src/common/context";
import Checkout from "../src/page_components/checkout";

const PAGE_HEAD = {
  title: 'Primabull Checkout',
  hideNav: true,
  backgroundImg: false,
  hideFooter: true
}


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

const paymentOptions = {

}

export default function CheckoutPage({ headControls }) {
  useEffect(() => headControls(PAGE_HEAD));


  const { totals } = useCart();

  const { clientSecret } = usePaymentIntent(totals.total);

  if (!clientSecret) return <></>

  return <Elements stripe={stripePromise} options={{ ...paymentOptions, clientSecret }}>
    <Checkout />
  </Elements>

}