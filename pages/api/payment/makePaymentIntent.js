const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


//PRICE IS IN FORMAT WITHOUT DECIMALS
// ie 1099 = $10.99
export default async function makeIntent(req, res) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.price * 100,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.status(200).json({ paymentIntent: paymentIntent })
  } catch (e) {
    res.status(500).json('Error: ' + e.message)
  }
}