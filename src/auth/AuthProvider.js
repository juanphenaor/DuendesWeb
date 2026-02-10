import React, { createContext, useContext, useState, useEffect } from 'react';
import authService from './authService';
import apiService from '../services/apiService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Si hay token, podrías validar o decodificar para obtener usuario
    const token = apiService.getToken();
    if (token) {
      // Aquí podrías decodificar el token y setear el usuario
      setUser({}); // Placeholder, decodifica si lo necesitas
    }
    setLoading(false);

    // Configura el callback global para logout automático en 401
    apiService.setOnUnauthorized(() => {
      authService.logout();
      setUser(null);
    });
    // Limpieza opcional si el componente se desmonta
    return () => {
      apiService.setOnUnauthorized(null);
    };
  }, []);

  const login = async (username, password) => {
    const response = await authService.login(username, password);
    if (response.success && response.data) {
      setUser({
        username: response.data.username,
        userId: response.data.userId,
      });
    }
    return response;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const value = { user, login, logout, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
