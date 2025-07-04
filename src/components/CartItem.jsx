// import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeItemfromCart } from '../store/cart/cart.action'
import { selectCartItems } from '../store/cart/cart.selector'
// import { CartContext } from '../context/Cart.context'
const CartItem = ({item}) => {
const dispatch=useDispatch()
const cartItems=useSelector(selectCartItems)
// const {removeItemfromCart, increment, decrement} = useContext(CartContext)
function removeItem(){
    dispatch(removeItemfromCart(cartItems,item.id))
}

  return (
    <div className='flex w-[1080px] items-center mt-3'>
        <img className='w-[20%] pr-35' src={item.image[0]} alt="" />
        <h2 className='w-[20%]'>{item.brand}</h2>
        <h2 className='w-[20%] flex gap-5 items-center'><button className='text-xl font-extrabold p-1 rounded-2xl cursor-pointer' onClick={() => dispatch(decrement(cartItems,item.id))}>&lt;</button>{item.quantity}<button className='text-xl font-extrabold p-1 rounded-2xl cursor-pointer' onClick={() => dispatch(increment(cartItems,item.id))}>&gt;</button></h2>
        <h2 className='w-[20%]'>{item.price}</h2>
        <h2 className='w-[20%] cursor-pointer' onClick={removeItem}>❌</h2>
    </div>
  )
}
export default CartItem
