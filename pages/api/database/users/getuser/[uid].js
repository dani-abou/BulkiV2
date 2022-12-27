import { doc, getDoc } from "firebase/firestore";
import app from "../../../../../firebaseConfig";

export default async function getUserData(req, res) {
  try {
    const { uid } = req.query
    const docRef = doc(app.firestore, "users", uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap?.data();
    if (!docData) throw 'Unable to fetch data for given user'
    res.status(200).json(docData)
  } catch (e) {
    res.status(404).json(e.message)
  }
}