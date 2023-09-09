import { RootState } from "../store";
import { createSelector } from "reselect";

const newCartCount = cartItems.reduce(
  (total, cartItem) => total + cartItem.quantity,
  0,
);

const newCartTotal = cartItems.reduce(
  (total, cartItem) =>
    total + cartItem.quantity * cartItem.price,
  0,
);

// const selectCartReducer = (state: RootState) => state.cart;
//
// export const selectCartItems = createSelector(
//   [selectCartReducer],
//   (cart) => cart.cartItems,
// );
//
// export const selectCartTotal = createSelector(
//   [selectCartReducer],
//   (cart) => cart.cartTotal,
// );
//
// export const selectCartCount = createSelector(
//   [selectCartReducer],
//   (cart) => cart.cartCount,
// );
//
// export const selectIsCartOpen = createSelector(
//   [selectCartReducer],
//   (cart) => cart.isCartOpen,
// );
