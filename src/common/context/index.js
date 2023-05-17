const { createContext, useState } = require("react")
import { PRODUCTS } from "../../data";
import Cart from "../../page_components/cart";
import authListener from "./authListener";
import { useCartStates } from "./useCart";

// Object.keys(PRODUCTS).forEach(key => {
//   defaultContextObject.cart[key] = 0
// })


export const Context = createContext({});
Context.displayName = 'PrimabullContext';

export const PrimabullContextProvider = ({ children }) => {

  const cartStates = useCartStates();


  return <Context.Provider value={{ ...cartStates }}>
    {children}
  </Context.Provider>
}

export const PrimabullContextConsumer = ({ children }) => <Context.Consumer>{children}</Context.Consumer>


export { default as useCart } from "./useCart";

