import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import MainApi from '../api/main.api.js'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return JSON.parse(localStorage.getItem("isAuthenticated") || "false"); // Convert properly
  });
  
  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated)); // Store properly
  }, [isAuthenticated]);

  const login = async (credentials) => {
    try {
      const { data } = await MainApi.loginServices(credentials);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("isAuthenticated", "true"); // Ensure it's saved as "true"
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed", error.response?.data || error.message);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
