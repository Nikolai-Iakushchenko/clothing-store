import {
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Product } from "./categories.context";
import { Action } from "./user.context";

export interface CartItemObj extends Product {
  quantity: number;
}

export interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  cartItems: CartItemObj[];
  addItemToCart: (productToAdd: Product) => void;
  removeItemFromCart: (item: CartItemObj) => void;
  clearItemFromCart: (item: CartItemObj) => void;
  cartCount: number;
  cartTotal: number;
}

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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: (): void => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_CART_COUNT: "SET_CART_ITEM",
  SET_CART_TOTAL: "SET_CART_TOTAL",
};

export interface CartProviderProps {
  children: React.ReactNode;
}

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItemObj[];
  cartCount: number;
  cartTotal: number;
}

const INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
};

const cartReducer = (
  state: CartState,
  action: any,
): CartState => {
  console.log("dispatched action", action);
  const { type, payload } = action;

  switch (type) {
    // case CART_ACTION_TYPES.SET_CART_COUNT:
    //   return { ...state, cartCount: payload };
    // case CART_ACTION_TYPES.SET_CART_TOTAL:
    //   return { ...state, cartTotal: payload };
    // case CART_ACTION_TYPES.SET_IS_CART_OPEN:
    //   return { ...state, isCartOpen: !state.isCartOpen };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(
        `Unhandled type ${type} in the cartReducer`,
      );
  }
};

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  // @ts-ignore
  const [
    { cartCount, cartItems, cartTotal, isCartOpen },
    dispatch,
  ] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemsReducer = (
    newCartItems: CartItemObj[],
  ) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) =>
        total + cartItem.quantity * cartItem.price,
      0,
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount,
      },
    });
  };

  const addItemToCart = (productToAdd: Product) => {
    const newCartItems = addCartItem(
      cartItems,
      productToAdd,
    );
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

  const value = {
    isCartOpen,
    setIsCartOpen: () => {},
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
