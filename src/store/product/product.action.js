import { createAction } from "../../utils/createAction"
import { PRODUCT_ACTION_TYPES } from "./product.type"

export const setProducts = (products) => {
  return createAction(PRODUCT_ACTION_TYPES.setProducts,products)
  }