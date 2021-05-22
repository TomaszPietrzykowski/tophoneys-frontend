import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_EMPTY_ITEMS,
  CART_UPDATE_ITEM_QTY,
} from "../constants/cartConstants"

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      // determine whether the item is already in cart:
      const itemExists = state.cartItems.find((x) => x.product === item.product)

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((ci) =>
            ci.product === itemExists.product
              ? { ...ci, qty: ci.qty + item.qty }
              : ci
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case CART_UPDATE_ITEM_QTY:
      return {
        ...state,
        cartItems: state.cartItems.map((ci) =>
          ci.product === action.payload.product ? action.payload : ci
        ),
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      }
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      }
    case CART_EMPTY_ITEMS:
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state
  }
}
