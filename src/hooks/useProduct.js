import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react"
import app from "../../firebaseConfig";


const useProduct = (id) => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const docRef = doc(app.firestore, 'listings', id)
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProduct({ id, ...docSnap.data() })
      } else {

        setLoading("ERROR")
      }
      setLoading(false)
    }
    if (id) getProduct()
  }, [id])
  return [product, loading]
}

export default useProduct