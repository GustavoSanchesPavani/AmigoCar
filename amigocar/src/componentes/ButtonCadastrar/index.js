import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

// Componente funcional BotaoAzul
export default function BotaoAzul({
  texto,
  email,
  senha,
  usuario,
  confirmarSenha,
  setResultado, 
}) {
  // Hook useNavigation para acessar a navegação
  const navigation = useNavigation();

  // Função para lidar com o cadastro
  const handleCadastro = () => {
    // Verificar se todos os campos estão preenchidos
    if (!usuario || !senha || !confirmarSenha || !email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verificar se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    // Salvando as informações digitadas nas constantes
    const usuarioDigitado = usuario;
    const senhaDigitada = senha;
    const emailDigitado = email;

    // Exibindo o resultado ao clicar no botão
    setResultado(
      `      Usuário: ${usuarioDigitado},
      Senha: ${senhaDigitada},
      Email: ${emailDigitado}`
    );
  };

  return (
    // Componente de botão
    <View>
      <TouchableOpacity style={styles.loginButton} onPress={handleCadastro}>
        <Text style={styles.buttonText}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
}
