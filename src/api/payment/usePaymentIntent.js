import { useCallback, useEffect, useState } from "react";
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default function usePaymentIntent(price) {
  const [paymentIntent, setPaymentIntent] = useState();

  const updatePrice = useCallback(async () => {
    if (price && paymentIntent) {
      const response = await fetch(
        '/api/payment/updatePaymentIntent',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ price, paymentIntentId: paymentIntent.id })
        }
      )
      const myJson = await response.json()
    }
  }, [price, paymentIntent])

  useEffect(() => {
    (async () => {
      if (!paymentIntent && price) {
        const responsePaymentIntent = await clientMakeIntent(price);
        console.log(responsePaymentIntent);
        // const response = await fetch(
        //   '/api/payment/makePaymentIntent',
        //   {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ price })
        //   }
        // )
        // const myJson = await response.json();

        if (responsePaymentIntent) {
          setPaymentIntent(responsePaymentIntent)
        } else {
          setPaymentIntent('')
        }
      } else if (price) {
        await updatePrice(price)
      }
    })()
  }, [price, paymentIntent, updatePrice])
  return { clientSecret: paymentIntent?.client_secret }
}

async function clientMakeIntent(price) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    return (paymentIntent)
  } catch (e) {
    console.log('Error: ' + e.message)
  }
}
