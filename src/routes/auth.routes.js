import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa os componentes das páginas da aplicação
import Bemvindo from '../pages/bemvindo/index';
import Login from '../pages/login/index';
import Cadastrar from '../pages/cadastrar/index';



const Stack = createStackNavigator();

// Exportação do aplicação
export default function App() {
  return (
    // Contêiner de navegação
    
      <Stack.Navigator
        initialRouteName=" "
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
        <Stack.Screen
          name="Bemvindo"
          component={Bemvindo}
          options={{ title: 'Faça Login' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Faça Login' }}
        />
        <Stack.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{ title: 'Criar uma Conta' }}
        />

      </Stack.Navigator>
  );
}
