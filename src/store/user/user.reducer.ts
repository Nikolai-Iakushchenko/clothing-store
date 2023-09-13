import { User } from "../../utils/firebase/firebase.utils";
import {
  USER_ACTION_TYPES,
  UserAction,
} from "./user.types";

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: any;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction,
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
