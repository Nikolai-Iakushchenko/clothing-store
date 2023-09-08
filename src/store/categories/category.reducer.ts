import {
  CATEGORIES_ACTION_TYPES,
  CategoriesAction,
} from "./category.types";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface CategoriesMap {
  [key: string]: Product[];
}

export interface CategoriesState {
  categoriesMap: CategoriesMap;
}

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state: CategoriesState = CATEGORIES_INITIAL_STATE,
  action: CategoriesAction | {} = {},
) => {
  // @ts-ignore
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
