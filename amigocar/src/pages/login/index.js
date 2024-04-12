import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './style';
import ButtonLogin from '../../componentes/ButtonLogin/index';

// Componente funcional Login
const Login = ({ navigation }) => {
  // Estados para armazenar o email e senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    // Estrutura da tela de Login
    <View style={styles.container}>
      <View>
        {/* Logo da aplicação */}
        <Image
          source={require('../../assets/img/AmigoCar_Logo.jpg')}
          style={styles.logo}
        />
        {/* Título da tela */}
        <Text style={styles.titulo}>LOGIN</Text>
      </View>

      <View style={styles.formulario}>
        <View style={styles.campoContainer}>
          {/* Campo de entrada de email */}
          <Text>E-mail</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.campo}
          />
        </View>

        <View style={styles.campoContainer}>
          {/* Campo de entrada de senha */}
          <Text>Senha</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry
            style={styles.campo}
          />
        </View>

        {/* Botão de login */}
        <ButtonLogin texto="Logar" onPress="Viagem" email={email} password={password}/>
      </View>

      <View style={styles.linkContainer}>
        {/* Link para recuperação de senha */}
        <TouchableOpacity
          onPress={() =>
            alert(
              'Vamos enviar no email fornecido acima, uma mensagem ao usuario para recuperação ! Clique em " ok " e aguarde alguns minutos.'
            )
          }>
          <Text style={styles.textoLink}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Link para tela de cadastro */}
        <TouchableOpacity onPress={() => navigation.navigate('Cadastrar')}>
          <Text style={styles.textoLink}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login; // Exporta o componente Login