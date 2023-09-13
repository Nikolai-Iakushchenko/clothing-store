import {
  takeLatest,
  all,
  call,
  put,
} from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import { signInSuccess, signInFailed } from "./user.action";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  User,
} from "../../utils/firebase/firebase.utils";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails: any,
) {
  try {
    // @ts-ignore
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails,
    );
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      }),
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    // @ts-ignore
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    // @ts-ignore
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    isUserAuthenticated,
  );
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
