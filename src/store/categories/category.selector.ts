import { RootState } from "../store";
import { CategoriesMap, ICategory } from "./category.types";
import { createSelector } from "reselect";

const selectCategoryReducer = (state: RootState) =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
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
