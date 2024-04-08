import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Passageiro from '../../context/perfilDataP';
import styles from './styles';

const PassageiroDetalhes = ({ route }) => {
  const { passageiroId } = route.params; // Obtém o parâmetro 'motoristaId' da tela anterior
  const passageiro = Passageiro.find(passageiro => passageiro.id === passageiroId); // Encontra o passageiro pelo ID

  if (!passageiro) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Passageiro não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Passageiro</Text>
      <View style={styles.detalhes}>
        <Text>ID: {passageiro.id}</Text>
        <Text>Passageiro: {passageiro.passageiro}</Text>
        <Text>Data: {passageiro.data}</Text>
      </View>
    </View>
  );
};


export default PassageiroDetalhes;
