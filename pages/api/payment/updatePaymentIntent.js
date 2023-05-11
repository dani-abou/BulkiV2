const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function UpdatePrice(req, res) {
  try {
    const { price, paymentIntentId } = req.body;
    // res.status(200).json({ price, paymentIntentId });


    const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
      amount: price * 100
    })

    res.status(200).json({ paymentIntent, price, paymentIntentId });
  } catch (e) {
    res.status(501).json({ error: e.message });
  }
} 