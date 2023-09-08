import { createAction } from "../../utils/reducer/reducer.utils";
import {
  CATEGORIES_ACTION_TYPES,
  ICategory,
} from "./category.types";

export const setCategories = (categories: ICategory[]) =>
  createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
    categories,
  );
