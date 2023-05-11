import { useCallback, useEffect, useState } from "react";


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
        const response = await fetch(
          '/api/payment/makePaymentIntent',
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price })
          }
        )
        const myJson = await response.json();

        if (myJson.paymentIntent) {
          setPaymentIntent(myJson.paymentIntent)
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