import { collection, doc, getDocs } from "firebase/firestore";
import app from "../../../../../firebaseConfig";

export default async function getUserListings(req, res) {
  try {
    const { uid } = req.query
    const collectionRef = collection(doc(collection(app.firestore, 'users'), uid), 'listings')
    const snapshot = await getDocs(collectionRef);
    if (!snapshot) throw 'Unable to fetch data for given user'
    const formatted = snapshot.docs.map(product => ({ id: product.id, ...product.data() }));
    res.status(200).json(formatted)
  } catch (e) {
    res.status(404).json(e.message)
  }
}