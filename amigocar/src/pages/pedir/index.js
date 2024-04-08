import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Motoristas from '../../context/perfilDataM';

const Pedir = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemLista} 
      onPress={() => navigation.navigate('Detalhes', { motoristaId: item.id })}>
      <Text style={styles.textoItemLista}>
        <Text style={styles.nomeCondutor}>{item.condutor}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTexto}>Motoristas Disponíveis</Text>
      </View>

      <View style={styles.botaoContainer}>
        <Button title="Pedir" onPress={() => {}} />
      </View>

      <View style={styles.listaContainer}>
        <FlatList
          data={Motoristas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Pedir;
