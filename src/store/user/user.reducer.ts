import { Action } from "../../contexts/user.context";
import { User } from "../../utils/firebase/firebase.utils";

export interface UserState {
  currentUser: User | null;
}

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};
export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: Action,
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
