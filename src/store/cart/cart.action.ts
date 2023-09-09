import { createAction } from "../../utils/reducer/reducer.utils";
import {
  CART_ACTION_TYPES,
  CartItemObj,
} from "./cart.types";
import { Product } from "../categories/category.types";

export const setIsCartOpen = (isOpen: boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isOpen);
// export const setCartItems = (cartItems: CartItemObj[]) =>
//   createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);

const addCartItem = (
  cartItems: CartItemObj[],
  productToAdd: Product,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItemObj[],
  cartItemToRemove: CartItemObj,
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id,
  );

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => {
      return cartItem.id !== cartItemToRemove.id;
    });
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};

const clearCartItem = (
  cartItems: CartItemObj[],
  cartItemToClear: CartItemObj,
) =>
  cartItems.filter((cartItem) => {
    return cartItem.id !== cartItemToClear.id;
  });

const addItemToCart = (productToAdd: Product) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  updateCartItemsReducer(newCartItems);
};

const removeItemFromCart = (
  cartItemToRemove: CartItemObj,
) => {
  const newCartItems = removeCartItem(
    cartItems,
    cartItemToRemove,
  );
  updateCartItemsReducer(newCartItems);
};

const clearItemFromCart = (
  cartItemToClear: CartItemObj,
) => {
  const newCartItems = clearCartItem(
    cartItems,
    cartItemToClear,
  );
  updateCartItemsReducer(newCartItems);
};
