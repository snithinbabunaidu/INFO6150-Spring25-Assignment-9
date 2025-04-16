import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/api';

// Create context
const AuthContext = createContext();

// Create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const initAuth = () => {
      // Check if the token is valid - if not, clear localStorage
      try {
        const currentUser = authService.getCurrentUser();
        const token = localStorage.getItem('token');
        
        if (token && currentUser) {
          setUser(currentUser);
        } else {
          // Clear invalid data
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } catch (error) {
        // Clear any invalid data in localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.error('Error initializing auth:', error);
      }
      
      setLoading(false);
    };
    
    initAuth();
  }, []);

  // Login function
  const login = async (username, password) => {
    try {
      const data = await authService.login(username, password);
      setUser(data.user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    authService.logout();
    setUser(null);
  };

  // Value to be provided to consumers
  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};