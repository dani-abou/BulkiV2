import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import app from "../../firebaseConfig";
import { DUMMY_PRODUCTS } from "./data";

//Gets all the product within the search
const useSearchProducts = search => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProducts = async () => {
      if (process.env.NODE_ENV === 'development') {
        setProducts(Object.values(DUMMY_PRODUCTS));
        setLoading(false)
      } else {
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
    }
    getProducts();
  }, [search])
  return [products, loading]
}

export default useSearchProducts