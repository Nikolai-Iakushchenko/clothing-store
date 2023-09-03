import { createContext, useState } from "react";
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

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: (): void => {},
  cartItems: [],
  addItemToCart: () => {},
});

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd: Product) => {
    // @ts-ignore
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
