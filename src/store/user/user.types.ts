import { User } from "../../utils/firebase/firebase.utils";

export interface UserAction {
  type: string;
  payload: User;
}

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "user/SET_CURRENT_USER",
};
