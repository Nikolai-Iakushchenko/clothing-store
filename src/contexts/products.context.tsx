import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ProductsContextType {
  products: Product[] | [];
}

export const ProductsContext =
  createContext<ProductsContextType>({
    products: [],
  });

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({
  children,
}: ProductsProviderProps) => {
  const [products, setProducts] = useState<Product[] | []>(
    [],
  );

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("categoryMap", categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { products };

  useEffect(() => {
    setProducts([]);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
