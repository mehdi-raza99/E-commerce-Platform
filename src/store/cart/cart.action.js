import { createAction } from "../../utils/createAction";
import { Cart_ACTION_TYPES } from "./cart.type";

const getCartTotal = (cartItems) => {
  const newCartTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  return parseFloat(newCartTotal.toFixed(2));
};

export function addItemToCart(cartItems, item) {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  const updatedCart = existingItem
    ? cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    : [...cartItems, { ...item, quantity: 1 }];

  const newCartTotal = getCartTotal(updatedCart);
  return createAction(Cart_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: updatedCart,
    cartTotal: newCartTotal,
  });
}

export function removeItemfromCart(cartItems, id) {
  const updatedCart = cartItems.filter((cartItem) => cartItem.id !== id);
  const newCartTotal = getCartTotal(updatedCart);
  return createAction(Cart_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: updatedCart,
    cartTotal: newCartTotal,
  });
}

export function increment(cartItems, id) {
  const updatedCart = cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
  const newCartTotal = getCartTotal(updatedCart);
  return createAction(Cart_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: updatedCart,
    cartTotal: newCartTotal,
  });
}

export function decrement(cartItems, id) {
  const updatedCart = cartItems.map((cartItem) => {
    if (cartItem.id === id && cartItem.quantity > 0) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
  const newCartTotal = getCartTotal(updatedCart);
  return createAction(Cart_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: updatedCart,
    cartTotal: newCartTotal,
  });
}
