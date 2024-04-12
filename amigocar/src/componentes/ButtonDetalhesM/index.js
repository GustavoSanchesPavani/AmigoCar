import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from './styles';

// Componente funcional ButtonDetalhesM
export default function ButtonDetalhesM() {
  // Estado para controlar se a carona está reservada
  const [caronaReservada, setCaronaReservada] = useState(false);

  // Função para reservar a carona
  const reservarCarona = () => {
    setCaronaReservada(true);
  };

  return (
    // Componente de botão
    <TouchableOpacity onPress={caronaReservada ? null : reservarCarona}>
      {caronaReservada ? (
        // Se a carona estiver reservada, exibe o texto e o ícone de sucesso
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="car-outline" size={24} color="#74DF00" />
          <Text style={styles.textoSucesso}>Carona Reservada com Sucesso</Text>
        </View>
      ) : (
        // Se a carona não estiver reservada, exibe o texto de reservar carona
        <Text style={styles.textoLink}>Reservar Carona</Text>
      )}
    </TouchableOpacity>
  );
}
