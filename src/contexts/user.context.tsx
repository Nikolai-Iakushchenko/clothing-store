import React, { createContext, useState } from "react";

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

  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
