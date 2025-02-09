import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.js";
import { AuthProvider, useAuth } from "./context/AuthContext.js";
import routes from "./routes/routes.js";
import "./main.scss";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <main className="min-h-screen">
          <Routes>
            {routes.map(({ path, component, protected: isProtected }, index) => (
              <Route 
                key={index} 
                path={path} 
                element={isProtected ? <ProtectedRoute>{component}</ProtectedRoute> : component} 
              />
            ))}
            {/* Redirect based on authentication status */}
            <Route path="/" element={<AuthRedirect />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
};

// Dynamic redirection based on authentication
const AuthRedirect = () => {
  const { isAuthenticated } = useAuth();
  return <Navigate to={isAuthenticated ? "/dashboard" : "/signup"} replace />;
};

export default App;
