import { RootState } from "../store";
import { CategoriesMap, ICategory } from "./category.types";

export const selectCategoriesMap = (state: RootState) => {
  console.log("selector fired");

  return state.categories.categories.reduce(
    (acc: CategoriesMap, category: ICategory) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    },
    {},
  );
};
