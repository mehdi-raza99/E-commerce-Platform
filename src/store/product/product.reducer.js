import { PRODUCT_ACTION_TYPES } from "./product.type";

const initialState = [];

export const productReducer = (state = initialState, action={}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.setProducts:
      return payload;
    default:
      return state;
  }
};
