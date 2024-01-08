/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const logInUser = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const logOutUser = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logInUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
