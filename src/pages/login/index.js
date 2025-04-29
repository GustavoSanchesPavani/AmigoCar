// screens/Login.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import ButtonLogin from '../../componentes/ButtonLogin/index'; // Importe o componente ButtonLogin

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      // Recuperar os dados cadastrados do AsyncStorage
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('senha');

      // Comparar os dados informados com os dados armazenados
      if (storedEmail === email && storedPassword === password) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        navigation.navigate('Perfil'); // Navega para a tela de Perfil
      } else {
        Alert.alert('Erro', 'Credenciais inválidas. Verifique seu email e senha.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../../assets/img/AmigoCar_Logo.jpg')}
          style={styles.logo}
        />
        <Text style={styles.titulo}>LOGIN</Text>
      </View>

      <View style={styles.formulario}>
        <View style={styles.campoContainer}>
          <Text>E-mail</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.campo}
          />
        </View>

        <View style={styles.campoContainer}>
          <Text>Senha</Text>
          <TextInput
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            style={styles.campo}
          />
        </View>

        <ButtonLogin
          texto="Logar"
          email={email}
          password={password}
        />
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => alert('Recuperar senha')}>
          <Text style={styles.textoLink}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.textoLink}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
