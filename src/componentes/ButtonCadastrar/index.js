import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';

const ButtonCadastrar = ({
  texto,
  email,
  senha,
  usuario,
  confirmarSenha,
  setResultado,
}) => {
  const navigation = useNavigation();

  const handleCadastro = async () => {
    if (!usuario || !senha || !confirmarSenha || !email) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erro', 'Por favor, insira um endereço de e-mail válido.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('senha', senha);
      await AsyncStorage.setItem('usuario', usuario);

      setResultado(`Usuário: ${usuario}, Senha: ${senha}, Email: ${email}`);
      navigation.navigate('Login');
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar os dados. Tente novamente.');
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
        <Text style={styles.buttonText}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonCadastrar;
