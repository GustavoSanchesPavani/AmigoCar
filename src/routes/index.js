// routes/Routes.js

import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import TabRouts from './tab.routes';

const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAuthentication = async () => {
      try {
        const loginStatus = await AsyncStorage.getItem('login');
        if (loginStatus === '1') {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAuthentication();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#1D1D2E',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#f5f7fb" />
      </View>
    );
  }

  if (isAuthenticated) {
    return <AppRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

export default Routes;
