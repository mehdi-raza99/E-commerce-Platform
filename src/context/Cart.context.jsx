import { createContext, useEffect, useReducer, useState } from "react";
import { createAction } from "../utils/createAction";



export const CartContext=createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeItemfromCart: () => {},
    increment: () => {},
    decrement: () => {},
    cartTotal: 0
});

const cartReducer=(state,action) => {
    const {type,payload}=action
    const {cartItems,cartTotal}=payload
    switch (type) {
        case 'SET_CART_ITEMS':
            return {
                ...state,
                cartItems,
                cartTotal
            }
        default:
            throw new Error("Unhandeled type");           
    }
}

const initialState={
    cartItems: [],
    cartTotal: 0
}



export const CartProvider= ({children}) => {
    // const [cartItems,setCartItems]=useState([])
    // const [cartTotal,setCartTotal]=useState([])


    const [state,dispatch] = useReducer(cartReducer,initialState)
    const {cartItems,cartTotal}=state
    
    function updatedCartItemsReducer(cart) {
        const newCartTotal=cart.reduce((total, item) => total + (item.quantity * item.price) , 0)
        dispatch(createAction('SET_CART_ITEMS',{cartItems: cart,cartTotal: parseFloat(newCartTotal.toFixed(2))}))
    }

    function addItemToCart(item){        
        const {id,brand,description,price,image}=item

        const existingItem=cartItems.find((item) => item.id === id)
        if(!existingItem){
            updatedCartItemsReducer([...cartItems,{
                id,brand,description,price,image,quantity: 1
            }])
        }
        else{
            const updatedCart = cartItems.map((cartItem) => cartItem.id === id ? {...cartItem,quantity: cartItem.quantity + 1}: cartItem)
            updatedCartItemsReducer(updatedCart)
        }
        
    }

    function removeItemfromCart(id) {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id)
        updatedCartItemsReducer(updatedCart)
    }

    function increment(id) {
        const updatedCart = cartItems.map((cartItem) => cartItem.id === id ? {...cartItem,quantity: cartItem.quantity + 1}: cartItem)
        updatedCartItemsReducer(updatedCart)
    }


    function decrement(id) {
        const updatedCart = cartItems.map((cartItem) => {
            if(cartItem.id === id && cartItem.quantity > 0){
                return {...cartItem,quantity: cartItem.quantity - 1}
            }
            else{
                return cartItem
            }
        })
        updatedCartItemsReducer(updatedCart)
    }
const value={cartItems, addItemToCart, removeItemfromCart, increment, decrement, cartTotal}

    return (<CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>)
}