/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";

export const context = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();

  const authorizationToken = `Bearer ${token}`;
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", token);
  };

  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, []);
  return (
    <context.Provider value={{ authorizationToken, user, storeTokenInLS }}>
      {children}
    </context.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useContexts = () => {
  const useContextValue = useContext(context);
  if (!useContextValue) {
    throw new Error("Use auth used outside of the provider");
  }
  return useContextValue;
};
