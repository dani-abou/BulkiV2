import stripe from "stripe";
import config from "./config";

const ourStripe = stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function makepaymentintent(req, res) {
  try {

    const { amount, destination } = req.body;
    if (!amount) throw 'Invalid price'

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await ourStripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      transfer_data: {
        amount: amount * ((100 - config.platformFee) / 100),
        destination: destination
      }
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (e) {
    res.status(501).json(e);
  }
};

// const paymentIntent = await stripe.paymentIntents.create({
//   amount: 1000,
//   currency: 'usd',
//   transfer_data: {
//     amount: 877,
//     destination: '{{CONNECTED_STRIPE_ACCOUNT_ID}}',
//   },
// });