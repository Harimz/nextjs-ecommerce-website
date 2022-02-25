import { CART_ADD_ITEM } from "../constants";

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newCartItem = action.payload;
      let updatedCartItems;

      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.product === newCartItem.product
      );
      const existingItem = state.cartItems[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          qty: existingItem.qty + newCartItem.qty,
        };

        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = updatedItem;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newCartItem],
        };
      }
    default:
      return state;
  }
};
