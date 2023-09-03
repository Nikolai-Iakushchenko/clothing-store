import { createContext, useState } from "react";
import { Product } from "./products.context";

interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  cartItems: CartItem[];
  addItemToCart: (productToAdd: Product) => void;
}

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product,
) => {
  //find if cartItems contains productToAdd
  // If found, increment quantitity
  // return new array with modified cartItems/new cart item
  return [];
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: (isCartOpen): void => {},
  cartItems: [],
  addItemToCart: (productToAdd: Product) => {},
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
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
