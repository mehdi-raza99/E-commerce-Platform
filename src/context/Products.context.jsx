import React, { createContext, useState } from "react";

export const ProductContext = createContext({
  Products: [],
  setProducts: () => {},
});

export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ Products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
