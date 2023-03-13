import {
  Elements, LinkAuthenticationElement, PaymentElement, useElements, useStripe
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import usePaymentIntent from "../../api/payment/usePaymentIntent";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
const paymentElementOptions = {
  layout: "tabs",
};

function BulkiStripeProvider({ children }) {
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return <>
    {/* <LinkAuthenticationElement id="link-authentication-element"
      onChange={(e) => setEmail(e.target.value)}
    /> */}
    <PaymentElement id="payment-element" options={paymentElementOptions} />
  </>
}

export default function BulkiStripeInElements({ price, children }) {
  const clientSecret = usePaymentIntent(price);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log(clientSecret)
  return <> {clientSecret &&
    <Elements options={options} stripe={stripePromise}>
      <BulkiStripeProvider>{children}</BulkiStripeProvider>
    </Elements>
  }
  </>
}

