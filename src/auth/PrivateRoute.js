import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return null; // O un loader
  // Si no está autenticado, navega al index ("/")
  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
