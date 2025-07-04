import { Cart_ACTION_TYPES } from "./cart.type";

const initialState = {
  cartItems: [],
  cartTotal: 0
}

export const cartReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case Cart_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    default:
      return state
  }
};
