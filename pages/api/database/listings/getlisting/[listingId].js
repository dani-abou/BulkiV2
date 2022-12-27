import { doc, getDoc } from "firebase/firestore";
import app from "../../../../../firebaseConfig";

export default async function getListing(req, res) {
  try {
    const { listingId } = req.query
    const docRef = doc(app.firestore, "listings", listingId);
    const docSnap = await getDoc(docRef);
    const docData = docSnap?.data();
    if (!docData) throw 'Unable to fetch data for given listingId'
    res.status(200).json(docData)
  } catch (e) {
    res.status(404).json(e.message)
  }
}