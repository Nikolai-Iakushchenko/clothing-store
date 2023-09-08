import { User } from "../../utils/firebase/firebase.utils";
import {
  USER_ACTION_TYPES,
  UserAction,
} from "./user.types";

export interface UserState {
  currentUser: User | null;
}

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserAction,
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
