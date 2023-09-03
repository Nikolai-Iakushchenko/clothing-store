import { createContext, useEffect, useState } from "react";
import { Product } from "./products.context";

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
  decrementItemInTheCart: (item: CartItemObj) => void;
  cartCount: number;
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
  itemToRemove: CartItemObj,
) => {
  console.log("cartItems", cartItems);
  console.log("itemToRemove.id", itemToRemove.id);
  return cartItems.filter((item) => {
    console.log("item.id", item.id);
    return item.id !== itemToRemove.id;
  });
};

const decrementCartItems = (
  cartItems: CartItemObj[],
  itemToDecrement: CartItemObj,
) => {
  return cartItems.map((cartItem) =>
    cartItem.id === itemToDecrement.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  );
};
export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: (): void => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  decrementItemInTheCart: () => {},
});

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemObj[]>(
    [],
  );
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0,
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (item: CartItemObj) => {
    console.log("removeItemFromCart!!");
    setCartItems(removeCartItem(cartItems, item));
  };

  const decrementItemInTheCart = (item: CartItemObj) => {
    if (item.quantity === 1) {
      return removeItemFromCart(item);
    }

    setCartItems(decrementCartItems(cartItems, item));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    decrementItemInTheCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
