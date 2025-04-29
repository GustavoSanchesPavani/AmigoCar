// AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const nome = await AsyncStorage.getItem('nome');
        const email = await AsyncStorage.getItem('email');
        const senha = await AsyncStorage.getItem('senha');
        if (nome && email && senha) {
          setIsAuthenticated(true);
          setUser({ nome, email, senha });
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, []);

  const signIn = async (nome, email, senha) => {
    try {
      await AsyncStorage.setItem('nome', nome);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
      setIsAuthenticated(true);
      setUser({ nome, email, senha });
    } catch (e) {
      console.error(e);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('nome');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('senha');
      setIsAuthenticated(false);
      setUser(null);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
