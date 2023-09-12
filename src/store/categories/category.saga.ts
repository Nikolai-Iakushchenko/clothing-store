import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category.action";
import {
  takeLatest,
  all,
  call,
  put,
} from "redux-saga/effects";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// Saga
export function* fetchCategoriesAsync() {
  try {
    const categoriesArray: any[] = yield call(
      getCategoriesAndDocuments,
      "categories",
    );
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error: any) {
    yield put(fetchCategoriesFailed(error));
  }
}

// Saga
export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync,
  );
}

// Saga agregator
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
