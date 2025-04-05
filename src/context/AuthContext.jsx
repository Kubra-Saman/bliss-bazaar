// src/context/AuthContext.jsx
import React, { createContext, useState } from 'react';

// 1. Create the context
export const AuthContext = createContext();

// 2. Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to log in a user
  const login = (userData) => setUser(userData);

  // Function to log out a user
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
