import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { CategoriesMap } from "./category.reducer";

export const setCategoriesMap = (
  categoriesMap: CategoriesMap,
) =>
  createAction(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
    categoriesMap,
  );
