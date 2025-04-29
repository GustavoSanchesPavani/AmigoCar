import React, { useState } from 'react';
import { View, TextInput, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import ButtonCadastrar from '../../componentes/ButtonCadastrar';

const CadastroScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [email, setEmail] = useState('');
  const [aceitarTermos, setAceitarTermos] = useState(false);
  const [resultado, setResultado] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
      </View>
      <View style={styles.containerSwitch}>
        <Switch
          value={aceitarTermos}
          onValueChange={setAceitarTermos}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={aceitarTermos ? '#f5dd4b' : '#f4f3f4'}
        />
        <Text style={styles.rotuloSwitch}>Aceitar termos e condições</Text>
      </View>
      <ButtonCadastrar
        texto="Cadastrar"
        email={email}
        senha={senha}
        usuario={usuario}
        confirmarSenha={confirmarSenha}
        setResultado={setResultado}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.textoCadastro}>
        <Text style={styles.textoCadastro}>Voltar ao Login</Text>
      </TouchableOpacity>
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
};

export default CadastroScreen;
