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
  console.log("productToAdd", productToAdd);
  //find if cartItems contains productToAdd
  // If found, increment quantity
  const cartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  console.log("cartItemIndex", cartItemIndex);
  if (cartItemIndex !== -1) {
    cartItems[cartItemIndex].quantity++;
  } else {
    cartItems.push({ ...productToAdd, quantity: 1 });
  }
  // return new array with modified cartItems/new cart item
  console.log("cartItems", cartItems);
  return cartItems;
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
    cartItems,
    addItemToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
