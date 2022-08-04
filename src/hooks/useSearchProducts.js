import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import app from "../../firebaseConfig";


const useSearchProducts = search => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true)
        const q = query(collection(app.firestore, "listings"),
          where('productName', '>=', search),
          where('productName', '<=', search + '\uf8ff')
        )
        const querySnapshot = await getDocs(q);
        setProducts(querySnapshot.docs.filter(prod => prod.id !== "template").map(product => ({ id: product.id, ...product.data() })))
        setLoading(false)
      }
      catch (error) { setLoading(error) }
    }
    getProducts();
  }, [search])
  return [products, loading]
}

export default useSearchProducts