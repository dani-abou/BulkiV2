import dynamic from "next/dynamic";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCTS } from "../../data";
import { Context } from "./index";
import useLocalStorage from "./useLocalStorage";

let defaultCart = {};
Object.keys(PRODUCTS).forEach(key => {
  defaultCart[key] = 0
})

export function useCartStates() {
  const [cart, setCart] = useLocalStorage('cart', defaultCart);
  const [showCart, setShowCart] = useState(false);
  const [tax, setTax] = useState(0)

  return { cart, setCart, showCart, setShowCart, tax, setTax }
}

export default function useCart() {
  const { cart, setCart, showCart, setShowCart, tax, setTax } = useContext(Context)

  const increaseCart = useCallback((key) => {
    setCart(prev => ({ ...prev, [key]: parseInt(prev[key]) + 1 }))
  }, [setCart])

  const decreaseCart = useCallback((key) => {
    setCart(prev => ({ ...prev, [key]: Math.max(parseInt(prev[key]) - 1, 0) }))
  }, [setCart])

  const removeFromCart = useCallback((key) => {
    setCart(prev => ({ ...prev, [key]: 0 }))
  }, [setCart])

  const setCartValue = useCallback((key, value) => {
    setCart(prev => ({ ...prev, [key]: parseInt(value) }))
  }, [setCart])

  const emptyCart = useCallback((key, value) => {
    setCart(defaultCart)
  }, [setCart])

  const extendedCart = useCallback(() => {
    let extCart = {}
    Object.keys(cart).forEach(cartKey => {
      if (cart[cartKey] > 0) {
        extCart[cartKey] = { ...PRODUCTS[cartKey], quantity: cart[cartKey] }
      }
    })
    return extCart;
  }, [cart])

  const totals = useMemo(() => {
    let subtotal = 0;

    Object.keys(cart).forEach(cartKey => {
      subtotal += cart[cartKey] * PRODUCTS[cartKey]?.price || 0
    })

    let shippingTotal = subtotal > 200 ? 0 : 20;
    let taxedAmount = Math.round((tax / 100 * subtotal) * 100) / 100
    return { subtotal, shippingTotal, taxTotal: taxedAmount, total: subtotal + shippingTotal + taxedAmount }
  }, [cart, tax])

  return { cart, increaseCart, decreaseCart, removeFromCart, setCartValue, showCart, setShowCart, extendedCart, emptyCart, totals, setTax };
}