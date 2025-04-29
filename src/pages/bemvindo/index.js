import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style'; 
import Botaobemvindo from '../../componentes/ButtonBemVindo/index';

// Componente funcional Bemvindo
const Bemvindo = ({ navigation }) => {
  return (
    // Estrutura da tela de boas-vindas
    <View style={styles.container}>
      {/* Logo da aplicação */}
      <Image
        source={require('../../assets/img/AmigoCar_Logo.jpg')}
        style={styles.logo}
      />
      {/* Título da tela */}
      <Text style={styles.title}>Bem-vindo ao AmigoCar</Text>
      {/* Subtítulo da tela */}
      <Text style={styles.subtitle}>Sua plataforma de caronas confiável e amigável</Text>
      {/* Botão de boas-vindas */}
      <Botaobemvindo/>
    </View>
  );
};

export default Bemvindo; // Exporta o componente Bemvindo
