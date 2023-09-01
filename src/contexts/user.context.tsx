import React, { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  User,
} from "../utils/firebase/firebase.utils";

interface UserContextType {
  currentUser: User | null;
  setCurrentUser: (user: User) => User | null;
}

export const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: (user) => null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
