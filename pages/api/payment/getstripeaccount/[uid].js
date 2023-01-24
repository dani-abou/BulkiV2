import { doc, getDoc } from "firebase/firestore";
import { default as officialStripe } from "stripe";
import app from "../../../../firebaseConfig";

const stripe = officialStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export default async function getStripeAccount(req, res) {
  try {
    const { uid } = req.query;

    const docRef = doc(app.firestore, "users", uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap?.data();
    if (!docData) throw 'Unable to fetch data for given user'
    if (!docData.stripeId) res.status(200).json({ accountExists: false });

    const stripeAccount = await stripe.accounts.retrieve(docData.stripeId);
    res.status(200).json({ accountExists: true, ...stripeAccount })

  } catch (e) {
    res.status(501).json({ error: e.message })
  }
}