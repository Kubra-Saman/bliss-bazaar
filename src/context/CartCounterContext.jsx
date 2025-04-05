import { createContext, useContext, useState } from "react";

// Create Context
export const CartCounterContext = createContext();

// Create Provider
export const CounterProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCounterContext.Provider>

    
  );
};

export const useCounter = () => {
  return useContext(CartCounterContext);
};

