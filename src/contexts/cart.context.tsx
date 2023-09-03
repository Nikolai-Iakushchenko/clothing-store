import { createContext, useState } from "react";

export interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: (isCartOpen): void => {
    // return !isCartOpen;
  },
});

export interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({
  children,
}: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
