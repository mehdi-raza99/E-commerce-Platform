import React, { useContext } from 'react'
import { CartContext } from '../context/Cart.context'

const CartItem = ({item}) => {

const {removeItemfromCart, increment, decrement} = useContext(CartContext)
function removeItem(){
    console.log(item.id);
    
    removeItemfromCart(item.id)
}

  return (
    <div className='flex w-[1080px] items-center mt-3'>
        <img className='w-[20%] pr-35' src={item.image[0]} alt="" />
        <h2 className='w-[20%]'>{item.brand}</h2>
        <h2 className='w-[20%] flex gap-5 items-center'><button className='text-xl font-extrabold p-1 rounded-2xl cursor-pointer' onClick={() => decrement(item.id)}>&lt;</button>{item.quantity}<button className='text-xl font-extrabold p-1 rounded-2xl cursor-pointer' onClick={() => increment(item.id)}>&gt;</button></h2>
        <h2 className='w-[20%]'>{item.price}</h2>
        <h2 className='w-[20%] cursor-pointer' onClick={removeItem}>❌</h2>
    </div>
  )
}
export default CartItem
