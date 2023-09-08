export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICategory {
  title: string;
  items: Product[];
}

export interface CategoriesMap {
  [key: string]: Product[];
}

export interface CategoriesState {
  categories: ICategory[];
}

export interface CategoriesAction {
  type: string;
  payload: any;
}

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "categories/SET_CATEGORIES",
};
