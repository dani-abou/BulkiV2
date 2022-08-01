import { useState, useEffect } from "react";
import cans from "../../public/cans.png"


const dummyProducts = [
  { name: 'Cans, and all that other information people might randomly', id: '1', img: cans, price: 30 },
  { name: 'Cans', id: '2', img: cans, price: 322 },
  { name: 'Cans', id: '3', img: cans, price: 33 },
  { name: 'Cans', id: '4', img: cans, price: 98 },
  { name: 'Cans', id: '5', img: cans, price: 30 },
  { name: 'Cans', id: '6', img: cans, price: 34 },
  { name: 'Cans', id: '7', img: cans, price: 23 },
  { name: 'Cans', id: '8', img: cans, price: 54 }
]


const useSearchProducts = (search) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    //DO THE SEARCH
    setProducts(dummyProducts)
    setLoading(false)
  }, [search])
  return [products, loading]
}

export default useSearchProducts