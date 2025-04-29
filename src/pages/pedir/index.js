import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Motoristas from '../../context/perfilDataM';
import Ionicons from '@expo/vector-icons/Ionicons';

// Componente funcional Pedir
const Pedir = ({ navigation }) => {
  // Função para renderizar cada item da lista de motoristas disponíveis
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemLista} 
      onPress={() => navigation.navigate('Motorista', { motoristaId: item.id })}>
      {/* Imagem do motorista */}
      <Image source={item.foto} style={styles.imagem} />
      <View style={styles.textoContainer}>
        {/* Nome do motorista */}
        <Text style={styles.nomePassageiro}>{item.motorista}</Text>
        {/* Data da viagem */}
        {/* Ícone para mais opções */}
        <Text style={styles.data}>{item.data}</Text>
        <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );

  return (
    // Estrutura da tela de Pedir
    <View style={styles.container}>
      {/* Cabeçalho da lista de motoristas disponíveis */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTexto}>Motoristas Disponíveis</Text>
      </View>

      {/* Lista de motoristas disponíveis */}
      <FlatList
        showsVerticalScrollIndicator={false} 
        style={styles.lista}
        data={Motoristas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Pedir; // Exporta o componente Pedir
