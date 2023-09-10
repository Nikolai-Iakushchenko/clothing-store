import { RootState } from "../store";
import { createSelector } from "reselect";
import { CartState } from "./cart.types";

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: CartState) => cart.cartItems,
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen,
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    ),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.price,
      0,
    ),
);
