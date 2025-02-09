import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext.js"


const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
