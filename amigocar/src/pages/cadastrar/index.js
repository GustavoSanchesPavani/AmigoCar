import { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Switch,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';
import ButtonCadastrar from '../../componentes/ButtonCadastrar/index';

// Componente funcional CadastroScreen
const CadastroScreen = ({ navigation }) => {
  // Estados para armazenar os dados do formulário de cadastro
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [email, setEmail] = useState('');
  const [aceitarTermos, setAceitarTermos] = useState(false);
  const [resultado, setResultado] = useState(null);

  return (
    // Estrutura da tela de cadastro
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      {/* Campo de entrada para o nome de usuário */}
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
      </View>
      {/* Campo de entrada para o email */}
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
      {/* Campo de entrada para a senha */}
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
      {/* Campo de confirmação de senha */}
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
      {/* Interruptor para aceitar os termos e condições */}
      <View style={styles.containerSwitch}>
        <Switch
          value={aceitarTermos}
          onValueChange={setAceitarTermos}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={aceitarTermos ? '#f5dd4b' : '#f4f3f4'}
        />
        <Text style={styles.rotuloSwitch}>Aceitar termos e condições</Text>
      </View>
      {/* Botão de cadastro */}
      <ButtonCadastrar
        texto="Cadastrar"
        email={email}
        senha={senha}
        usuario={usuario}
        confirmarSenha={confirmarSenha}
        setResultado={setResultado} // Adicione esta propriedade
      />

      {/* Link para voltar para a tela de login */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.textoCadastro}>
        <Text style={styles.textoCadastro}>Voltar ao Login</Text>
      </TouchableOpacity>
      {/* Exibição do resultado do cadastro */}
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
};

export default CadastroScreen; // Exporta o componente CadastroScreen
