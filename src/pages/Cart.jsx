import React, { useContext } from 'react';
import { CartContext } from '../context/Cart.context';
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../store/cart/cart.selector';

const Cart = () => {
    // const { cartItems, cartTotal } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="min-h-[calc(100vh-136px)] p-6 flex justify-center">
  <div className="w-full max-w-5xl">
    
    {/* Header - hide on small screens */}
    <div className="hidden md:grid grid-cols-5 font-semibold border-b pb-3">
      <h2>Product</h2>
      <h2>Description</h2>
      <h2 className="text-center">Quantity</h2>
      <h2 className="text-center">Price</h2>
      <h2 className="text-center">Remove</h2>
    </div>

    {/* Cart items */}
    {cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} item={cartItem} />
    ))}

    {cartTotal > 0 && (
      <div className="text-right font-bold text-2xl mt-7">
        Total: {cartTotal}$
      </div>
    )}
  </div>
</div>
    );
}

export default Cart;
