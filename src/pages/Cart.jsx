import React, { useContext } from 'react'
import { CartContext } from '../context/Cart.context'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../store/cart/cart.selector'

const Cart = () => {
    // const {cartItems, cartTotal}=useContext(CartContext)

    const cartItems=useSelector(selectCartItems)
    const cartTotal=useSelector(selectCartTotal)


  return (
    <div className='min-h-[calc(100vh-136px)] p-14 flex justify-center '>
        <div className='w-[1080px]'>
             <div className='flex font-semibold'> {/* Header */}
                <h2 className='w-[20%]'>Product</h2>
                <h2 className='w-[20%]'>Description</h2>
                <h2 className='w-[20%]'>Quantity</h2>
                <h2 className='w-[20%]'>Price</h2>
                <h2 className='w-[20%]'>Remove</h2>
            </div>

        {cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}

        {cartTotal > 0 && <div className='text-right font-bold text-3xl mt-7'>Total: {cartTotal}$</div>}
        </div>
    </div>
  )
}

export default Cart
