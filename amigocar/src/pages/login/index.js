import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './style';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.trim()) {
      Alert.alert('Preencha o campo de E-mail');
      return;
    }

    if (!password.trim()) {
      Alert.alert('Preencha o campo de Senha');
      return;
    }

    // Adicione aqui a lógica para lidar com o login
    // Por exemplo, você pode chamar uma função de autenticação aqui
    // ou navegar para a próxima tela se as credenciais estiverem corretas
    navigation.navigate('Viagem');
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/img/AmigoCar_Logo.jpg')} style={styles.logo} />
        <Text style={styles.titulo}>LOGIN</Text>
      </View>

      <View style={styles.formulario}>
        <View style={styles.campoContainer}>
          <Text>E-mail</Text>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.campo}
          />
        </View>

        <View style={styles.campoContainer}>
          <Text>Senha</Text>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            style={styles.campo}
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.botao}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => alert('Esqueceu a senha?')}>
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
