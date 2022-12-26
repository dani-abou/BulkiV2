import { doc, getDoc } from "firebase/firestore";
import app from "../../../../../firebaseConfig";

export default async function uploadImages(req, res) {
  try {
    const { listingId } = req.query
    const { files } = req.body
    res.status(200).json("success")
  } catch (e) {
    res.status(404).json(e.message)
  }
}