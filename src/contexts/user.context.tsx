import React, { createContext, useEffect, useState } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

// context value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: (user: any) => null,
});

// context provider
interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // signOutUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log("user", user);
    });

    return unsubscribe;
  }, []);

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
