import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react"
import app from "../../firebaseConfig";
import { DUMMY_PRODUCTS } from "./data";

//Gets a product from firestore
const useProduct = (id) => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      if (process.env.NODE_ENV === 'development') {
        setProduct(DUMMY_PRODUCTS[id]);
        setLoading(false)
      } else {
        const docRef = doc(app.firestore, 'listings', id)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id, ...docSnap.data() })
        } else {

          setLoading("ERROR")
        }
        setLoading(false)
      }

    }
    if (id) getProduct()
  }, [id])
  return [product, loading]
}

export default useProduct