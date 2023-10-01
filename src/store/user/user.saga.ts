import {
  takeLatest,
  all,
  call,
  put,
} from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  User,
} from "../../utils/firebase/firebase.utils";
import { getKeyEventProps } from "@testing-library/user-event/dist/keyboard/getEventProps";
import { createUserWithEmailAndPassword } from "firebase/auth";
import exp from "constants";

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
    console.log("userSnapshot", userSnapshot);
    console.log("userSnapshot.data()", userSnapshot.data());
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

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    // @ts-ignore
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({
  // @ts-ignore
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signInAfterSignUp({
  // @ts-ignore
  payload: { user, additionalDetails },
}) {
  yield call(
    getSnapshotFromUserAuth,
    user,
    additionalDetails,
  );
}

export function* onGoogleSingInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.GOOGLE_SIGN_IN_START,
    signInWithGoogle,
  );
}

export function* signInWithEmail(action: {
  payload: { email: string; password: string };
}) {
  const {
    payload: { email, password },
  } = action;
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password,
    );
    // @ts-ignore
    yield call(getSnapshotFromUserAuth, user);
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

export function* onEmailSignInStart() {
  yield takeLatest(
    // @ts-ignore
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmail,
  );
}

export function* onSignUpStart() {
  // @ts-ignore
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(
    // @ts-ignore
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    signInAfterSignUp,
  );
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSingInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
  ]);
}
