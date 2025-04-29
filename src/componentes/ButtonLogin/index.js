// components/ButtonLogin.js

import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const ButtonLogin = ({ texto, email, password }) => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert('Preencha o campo de E-mail');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      Alert.alert('Digite um e-mail válido');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Preencha o campo de Senha');
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('senha');

      if (storedEmail === email && storedPassword === password) {
        // Login bem-sucedido, salva '1' no AsyncStorage
        await AsyncStorage.setItem('login', '1');
        
        // Recarrega o aplicativo para garantir que a navegação seja correta
        navigation.reload();
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Verifique seu email e senha.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.buttonText}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;
