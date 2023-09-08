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
import { createAction } from "../utils/reducer/reducer.utils";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null,
});

export interface Action {
  type: string;
  payload?: User;
}

interface UserProviderProps {
  children: React.ReactNode;
}

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
    dispatch(
      // @ts-ignore
      createAction(
        USER_ACTION_TYPES.SET_CURRENT_USER,
        user,
      ),
    );
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
