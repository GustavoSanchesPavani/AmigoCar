import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa os componentes das páginas da aplicação
import Login from './src/pages/login/index';
import Cadastrar from './src/pages/cadastrar/index';
import Viagem from './src/pages/viagem/index';
import Pedir from './src/pages/pedir/index';
import Oferecer from './src/pages/oferecer/index';
import Motorista from './src/pages/detalhes_motorista/index';
import Passageiro from './src/pages/detalhes_passageiro/index';
import Bemvindo from './src/pages/bemvindo/index';
import Perfil from './src/pages/perfil/index';
// Cria uma pilha de navegação
const Stack = createStackNavigator();

// Exportação do aplicação
export default function App() {
  return (
    // Contêiner de navegação
    <NavigationContainer>
      {/* Navegador em pilha */}
      <Stack.Navigator
        initialRouteName="Perfil"
        // Configuração de opções de tela para todas as telas
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center', 
          headerStyle: {
            backgroundColor: '#3F51B5', 
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}>
        {/* Define as telas e seus componentes */}
        <Stack.Screen name="Bem-vindo" component={Bemvindo} options={{ title: 'AmigoCar' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Faça Login' }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ title: 'Criar uma Conta' }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Viagem" component={Viagem} options={{ title: 'Criar Viagem' }} />
        <Stack.Screen name="Oferecer" component={Oferecer} options={{ title: 'Oferecer Carona' }} />
        <Stack.Screen name="Pedir" component={Pedir} options={{ title: 'Pedir Carona' }} />
        <Stack.Screen name="Motorista" component={Motorista} options={{ title: 'Detalhes do Motorista' }} />
        <Stack.Screen name="Passageiro" component={Passageiro} options={{ title: 'Detalhes do Passageiro' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
