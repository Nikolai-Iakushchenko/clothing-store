import { RootState } from "../store";
import { CategoriesMap, ICategory } from "./category.types";
import { createSelector } from "reselect";

const selectCatagroyReducer = (state: RootState) =>
  state.categories;

export const selectCategories = createSelector(
  [selectCatagroyReducer],
  (categoriesSlice) => categoriesSlice.categories,
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce(
      (acc: CategoriesMap, category: ICategory) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
      },
      {},
    ),
);
