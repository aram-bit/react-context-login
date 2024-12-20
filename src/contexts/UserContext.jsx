import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user,setUser}}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("UserContext is outside of Themeprovider");

  return context;
}
