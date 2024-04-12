import { Text, TouchableOpacity, Alert} from 'react-native'; // Importa componentes necessários do React Native
import { useNavigation } from '@react-navigation/native'; // Importa o hook useNavigation do React Navigation
import {styles} from './styles'; // Importa os estilos do componente

// Definição do componente BotaoAzul
export default function BotaoAzul({ texto, onPress, email, password }) {
  const navigation = useNavigation(); // Inicializa o hook useNavigation

  // Função para validar o formato de e-mail
  const isValidEmail = (email) => {
    // Expressão regular para validar o formato de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Função para lidar com o login
  const handleLogin = () => {
    // Verifica se o campo de e-mail está vazio
    if (!email.trim()) {
      Alert.alert('Preencha o campo de E-mail'); // Alerta sobre campo de e-mail vazio
      return;
    } else if (!isValidEmail(email.trim())) { // Verifica se o e-mail tem um formato válido
      Alert.alert('Digite um e-mail válido'); // Alerta sobre formato de e-mail inválido
      return;
    }

    // Verifica se o campo de senha está vazio
    if (!password.trim()) {
      Alert.alert('Preencha o campo de Senha'); // Alerta sobre campo de senha vazio
      return;
    }

    // Navega para a rota especificada em onPress
    navigation.navigate(onPress); // Navega para a rota definida em onPress
  }

  // Renderiza o botão de login
  return (
    <TouchableOpacity
      style={styles.loginButton} // Aplica os estilos do botão
      onPress={handleLogin}> 
      <Text style={styles.buttonText}>{texto}</Text> 
    </TouchableOpacity>
  );
}
