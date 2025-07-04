import React, { createContext, useState } from "react";

import { useReducer } from "react";
import { createAction } from "../utils/createAction";

// export const ProductContext = createContext({
//   Products: [],
//   setProducts: () => {},
// });

// export const ProductProvider = ({ children }) => {
//   const [Products, setProducts] = useState([]);

//   return (
//     <ProductContext.Provider value={{ Products, setProducts }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };


export const ProductContext = createContext({
    Products: [],
    setProducts: () => {},
  });



const productReducer=(state,action) => {
  const {type,payload} = action
  

  switch (type) {
    case 'setProducts':
      return payload
    default:
      throw new Error(`Unhandeled type: ${type}`);
  }
}

const initialState= []




export const ProductProvider = ({ children }) => {

  const [Products,dispatch] = useReducer(productReducer,initialState)


const setProducts = (products) => {
  dispatch(createAction('setProducts',products))
  }

    return (
      <ProductContext.Provider value={{ Products, setProducts }}>
        {children}
      </ProductContext.Provider>
    );
  };