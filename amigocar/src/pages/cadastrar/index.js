import { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';

const CadastroScreen = ({ navigation }) => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [email, setEmail] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCadastro = () => {
    // Verificar se a senha e a confirmação da senha são iguais
    if (senha !== confirmarSenha) {
      alert('A senha e a confirmação da senha não correspondem.');
      return;
    }

    // Salvando as informações digitadas nas constantes
    const usuarioDigitado = usuario;
    const senhaDigitada = senha;
    const emailDigitado = email;

    // Exibindo o resultado ao clicar no botão
    setResultado(
      `Usuário: ${usuarioDigitado}, Senha: ${senhaDigitada}, Email: ${emailDigitado}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.skipLink}>
        <Text style={styles.signupText}>Voltar ao Login</Text>
      </TouchableOpacity>
      {resultado && <Text style={styles.result}>{resultado}</Text>}
    </View>
  );
};

export default CadastroScreen;
