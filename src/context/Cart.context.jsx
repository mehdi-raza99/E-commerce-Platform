import { createContext, useEffect, useState } from "react";



export const CartContext=createContext({
    cartItems: [],
    addItemToCart: () => {},
    removeItemfromCart: () => {},
    increment: () => {},
    decrement: () => {},
    cartTotal: 0
});



export const CartProvider= ({children}) => {
    const [cartItems,setCartItems]=useState([])
    const [cartTotal,setCartTotal]=useState([])


    function addItemToCart({id,brand,description,price,image}){
        const existingItem=cartItems.find((item) => item.id === id)
        if(!existingItem){
            setCartItems([...cartItems,{
                id,brand,description,price,image,quantity: 1
            }])
        }
        else{
            const updatedCart = cartItems.map((cartItem) => cartItem.id === id ? {...cartItem,quantity: cartItem.quantity + 1}: cartItem)
            setCartItems(updatedCart)
        }
    
        console.log(cartItems);
        
    }

    function removeItemfromCart(id) {
        const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id)
        setCartItems(updatedCart)
    }

    function increment(id) {
        const updatedCart = cartItems.map((cartItem) => cartItem.id === id ? {...cartItem,quantity: cartItem.quantity + 1}: cartItem)
        setCartItems(updatedCart)
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
        setCartItems(updatedCart)
    }

    useEffect(() => {
        const newCartTotal=cartItems.reduce((total, item) => total + (item.quantity * item.price) , 0)
        setCartTotal(parseFloat(newCartTotal.toFixed(2)))
    },[cartItems])

    return (<CartContext.Provider value={
        {cartItems, addItemToCart, removeItemfromCart, increment, decrement, cartTotal}
    }>
        {children}
    </CartContext.Provider>)
}