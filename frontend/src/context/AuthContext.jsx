/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import * as authApi from "../api/auth.api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const u = await authApi.login(email, password);
    setUser(u);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
