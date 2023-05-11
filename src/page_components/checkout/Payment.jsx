import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import usePaymentIntent from "../../api/payment/usePaymentIntent";


export default function Payment() {
  return <form>
    <PaymentElement />
  </form>
}