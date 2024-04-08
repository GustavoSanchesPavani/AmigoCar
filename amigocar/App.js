import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importa os componentes das páginas da aplicação
import Login from './src/pages/login/index';
import Cadastrar from './src/pages/cadastrar/index';
import Viagem from './src/pages/viagem/index';
import Pedir from './src/pages/pedir/index';
import Oferecer from './src/pages/oferecer/index';
import Detalhes from './src/pages/detalhes_motorista/index';
import Passageiro from './src/pages/detalhes_passageiro/index';

// Cria uma pilha de navegação
const Stack = createStackNavigator();

// Exportação do aplicação
export default function App() {
  return (
    // Contêiner de navegação
    <NavigationContainer>
      {/* Navegador em pilha */}
      <Stack.Navigator initialRouteName=""
        // Configuração de opções de tela para todas as telas
        screenOptions={{
          headerShown: true, // Exibe o cabeçalho nas telas
        }}>
        {/* Define as telas e seus componentes */}
        <Stack.Screen name="Login" component={Login} /> 
        <Stack.Screen name="Cadastrar" component={Cadastrar} /> 
        <Stack.Screen name="Viagem" component={Viagem} /> 
        <Stack.Screen name="Oferecer" component={Oferecer} /> 
        <Stack.Screen name="Pedir" component={Pedir} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Passageiro" component={Passageiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
