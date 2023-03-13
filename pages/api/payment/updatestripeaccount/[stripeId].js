import stripe from "stripe";

const ourStripe = stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function updateStripeAccount(req, res) {

  try {
    const { stripeId } = req.query;
    const { account } = JSON.parse(req.body);

    await ourStripe.accounts.update(stripeId, account)

    res.status(200).json({ message: 'success' })
  } catch (e) {
    res.status(501).json({ message: e.message });
  }
}