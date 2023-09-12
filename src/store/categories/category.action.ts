import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  );

export const fetchCategoriesSuccess = (categories: any[]) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    categories,
  );

export const fetchCategoriesFailed = (error: Error) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    error,
  );

// Thunk
// export const fetchCategoriesAsync =
//   () =>
//   async (dispatch: Dispatch): Promise<any> => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray: any[] =
//         await getCategoriesAndDocuments("categories");
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch (error: any) {
//       dispatch(fetchCategoriesFailed(error));
//     }
//   };
