export const selectCartItems = (state) => {
  return state.cart.cartItems;
};

export const selectCartTotal = (state) => {
  return state.cart.cartTotal;
};

export const selectCartItemsQuantity = (state) => {
  return state.cart.cartItems.length;
};
