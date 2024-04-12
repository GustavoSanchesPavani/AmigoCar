import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import Passageiros from '../../context/perfilDataP';
import Ionicons from '@expo/vector-icons/Ionicons';

// Componente funcional Oferecer
const Oferecer = ({ navigation }) => {
  // Função para renderizar cada item da lista de passageiros disponíveis
  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.itemLista} 
      onPress={() => navigation.navigate('Passageiro', { passageiroId: item.id })}>
      {/* Imagem do passageiro */}
      <Image source={item.foto} style={styles.imagem} />
      <View style={styles.textoContainer}>
        {/* Nome do passageiro */}
        <Text style={styles.nomePassageiro}>{item.passageiro}</Text>
        {/* Data da viagem */}
        <Text style={styles.data}>{item.data}</Text>
        {/* Ícone para mais opções */}
        <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );

  return (
    // Estrutura da tela de Oferecer
    <View style={styles.container}>
      {/* Cabeçalho da lista de passageiros disponíveis */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTexto}>Passageiros Disponíveis</Text>
      </View>

      {/* Lista de passageiros disponíveis */}
      <FlatList
        showsVerticalScrollIndicator={false} 
        style={styles.lista}
        data={Passageiros}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Oferecer; // Exporta o componente Oferecer