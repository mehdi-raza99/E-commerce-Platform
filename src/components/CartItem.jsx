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
    // Responsive: grid on md+, stacked on small
    <div className="grid grid-cols-1 md:grid-cols-5 items-center border-b py-4 gap-4 text-sm md:text-base">

      {/* Product image */}
      <div className="flex justify-center">
        <img className="w-24 h-24 object-contain" src={item.image[0]} alt={item.brand} />
      </div>

      {/* Description */}
      <div className="text-center md:text-left">
        <h2 className="font-medium">{item.brand}</h2>
      </div>

      {/* Quantity */}
      <div className="flex items-center justify-center gap-3">
        <button
          className="text-lg font-bold px-2 py-1 rounded border cursor-pointer bg-red-500"
          onClick={() => dispatch(decrement(cartItems, item.id))}
        >
          &lt;
        </button>
        <span>{item.quantity}</span>
        <button
          className="text-lg font-bold px-2 py-1 rounded border cursor-pointer bg-green-600"
          onClick={() => dispatch(increment(cartItems, item.id))}
        >
          &gt;
        </button>
      </div>

      {/* Price */}
      <div className="text-center font-semibold">{item.price}$</div>

      {/* Remove */}
      <div className="flex justify-center">
        <button onClick={removeItem} className="text-xl hover:text-red-500">
          ❌
        </button>
      </div>
    </div>
  )
}
export default CartItem
