import stripe from "stripe";

const ourStripe = stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function makepaymentintent(req, res) {
  try {

    const { price, label, quantity } = req.body;
    if (!price) throw 'Invalid price'

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await ourStripe.paymentIntents.create({
      amount: price * 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret })
  } catch (e) {
    res.status(501).json(e);
  }
};