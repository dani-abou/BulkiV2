const { createContext, useState } = require("react")
import authListener from "./authListener";


const defaultContextObject = {
  dummy: 'test'
}

const Context = createContext(defaultContextObject);
Context.displayName = 'BulkiContext';

export const BulkiContextProvider = ({ children }) => {

  const [currentContext, setCurrentContext] = useState(defaultContextObject);

  authListener(currentContext?.userData, user => setCurrentContext(prev => ({ ...prev, userData: user })))

  return <Context.Provider value={currentContext}>
    {children}
  </Context.Provider>
}

export const BulkiContextConsumer = ({ children }) => <Context.Consumer>{children}</Context.Consumer>