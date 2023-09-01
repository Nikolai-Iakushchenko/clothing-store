import { createContext, useEffect, useState } from "react";

import SHOP_DATA from "../shop-data.json";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[] | [];
  setProducts: (products: Product[]) => void;
}

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  setProducts: (products: Product[]): Product[] => [],
});

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[] | []>([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
