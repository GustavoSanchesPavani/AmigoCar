import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

// Componente funcional Botaobemvindo
export default function Botaobemvindo() {
  // Hook useNavigation para acessar a navegação
  const navigation = useNavigation();

  // Função para lidar com o botão de começar
  const handleStartButton = () => {
    navigation.navigate('Login');
  };

  return (
    // Componente de botão de boas-vindas
    <TouchableOpacity style={styles.button} onPress={handleStartButton}>
      <Text style={styles.buttonText}>Começar</Text>
    </TouchableOpacity>
  );
}
