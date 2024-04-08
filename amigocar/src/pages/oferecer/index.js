import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Passageiros from '../../context/perfilDataP';

const Oferecer = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemLista} 
      onPress={() => navigation.navigate('Passageiro', { passageiroId: item.id })}>
      <Text style={styles.textoItemLista}>
        <Text style={styles.nomePassageiro}>{item.passageiro}</Text>
        <Text style={styles.data}>{item.data}</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTexto}>Passageiros Disponíveis</Text>
      </View>

      <View style={styles.botaoContainer}>
        <Button title="Oferecer" onPress={() => {}} />
      </View>

      <View style={styles.listaContainer}>
        <FlatList
          data={Passageiros}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Oferecer;
