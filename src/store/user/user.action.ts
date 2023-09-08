import { User } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import {
  USER_ACTION_TYPES,
  UserAction,
} from "./user.types";

export const setCurrentUser = (
  user: User | null,
): UserAction =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
