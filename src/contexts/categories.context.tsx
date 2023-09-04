import { createContext, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CategoriesMap {
  [key: string]: Product[];
}

export interface CategoriesContextType {
  categoriesMap: CategoriesMap;
}

export const CategoriesContext =
  createContext<CategoriesContextType>({
    categoriesMap: {},
  });

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const CategoriesProvider = ({
  children,
}: ProductsProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState<
    CategoriesMap | {}
  >({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("categoryMap", categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
