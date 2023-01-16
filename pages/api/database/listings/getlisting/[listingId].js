import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import app from "../../../../../firebaseConfig";

export default async function getListing(req, res) {
  try {
    const { listingId } = req.query
    const docRef = doc(app.firestore, "listings", listingId);
    const docSnap = await getDoc(docRef);
    const docData = docSnap?.data();

    const pricingSnap = await getDocs(collection(docRef, 'pricing'));
    let pricing = {};
    pricingSnap?.forEach(price => {
      pricing[price.id] = price.data();
    })

    if (!docData) throw 'Unable to fetch data for given listingId'
    if (!pricing) throw 'Unable to fetch data for pricing at listingId'
    res.status(200).json({ ...docData, pricing })
  } catch (e) {
    res.status(501).json(e.message)
  }
}