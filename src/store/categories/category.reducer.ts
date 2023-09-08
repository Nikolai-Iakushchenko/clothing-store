import {
  CATEGORIES_ACTION_TYPES,
  CategoriesAction,
} from "./category.types";
import { Product } from "../../contexts/categories.context";

export interface CategoriesMap {
  [key: string]: Product[];
}

export interface CategoryState {
  categoriesMap: CategoriesMap;
}

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state: CategoryState = CATEGORIES_INITIAL_STATE,
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
