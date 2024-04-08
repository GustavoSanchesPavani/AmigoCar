import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Motoristas from '../../context/perfilDataM';
import styles from './styles';

const MotoristaDetalhes = ({ route }) => {
  const { motoristaId } = route.params; // Obtém o parâmetro 'motoristaId' da tela anterior
  const motorista = Motoristas.find(motorista => motorista.id === motoristaId); // Encontra o motorista pelo ID

  if (!motorista) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Motorista não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Motorista</Text>
      <View style={styles.detalhes}>
        <Text>ID: {motorista.id}</Text>
        <Text>Condutor: {motorista.condutor}</Text>
        <Text>Data: {motorista.data}</Text>
      </View>
    </View>
  );
};


export default MotoristaDetalhes;
