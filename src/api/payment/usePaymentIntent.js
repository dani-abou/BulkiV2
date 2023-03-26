import { useEffect, useState } from "react";

export default function usePaymentIntent(price) {
  const [clientSecret, setClientSecret] = useState('')
  useEffect(() => {
    (async () => {
      const response = await fetch(
        '/api/payment/makepaymentintent',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(price)
        }
      )
      const myJson = await response.json()
      console.log(myJson)
      if (myJson.clientSecret) {
        setClientSecret(myJson.clientSecret)
      } else {
        setClientSecret('')
      }
    })()
  }, [price])
  return clientSecret
} 