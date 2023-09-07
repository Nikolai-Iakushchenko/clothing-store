import React, {
  createContext,
  useEffect,
  useReducer,
} from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  User,
} from "../utils/firebase/firebase.utils";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

interface UserState {
  currentUser: User | null;
}

export interface Action {
  type: string;
  payload?: User;
}

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state: UserState, action: Action) => {
  console.log("dispatched");
  console.log("action", action);

  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(
        `Unhandled type ${type} in the userReducer`,
      );
  }
};

interface UserProviderProps {
  children: React.ReactNode;
}

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({
  children,
}: UserProviderProps) => {
  // @ts-ignore
  const [{ currentUser }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE,
  );

  console.log("currentUser", currentUser);

  const setCurrentUser = (user: User | null) => {
    // @ts-ignore
    dispatch({
      type: USER_ACTION_TYPES.SET_CURRENT_USER,
      payload: user,
    });
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(
      // @ts-ignore
      (user: User) => {
        if (user) {
          createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
      },
    );

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
