import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';

const Viagem = ({ navigation }) => {
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [observation, setObservation] = useState('');
  const [type, setType] = useState('');
  const [passengerCount, setPassengerCount] = useState(1); // Alterado o valor inicial para 1

  const verificador = (chosenType) => {
    setType(chosenType);
  };

  const incrementPassengerCount = () => {
    if (passengerCount < 4) { // Limite de 4 passageiros
      setPassengerCount(prevCount => prevCount + 1);
    }
  };

  const decrementPassengerCount = () => {
    if (passengerCount > 1) { // Limite mínimo de 1 passageiro
      setPassengerCount(prevCount => prevCount - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.entradaContainer}>
        <TextInput
          style={styles.entrada}
          placeholder="Origem"
          value={origin}
          onChangeText={setOrigin}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Destino"
          value={destiny}
          onChangeText={setDestiny}
        />
      </View>

      <View style={styles.opcaoContainer}>
        <TouchableOpacity
          style={[styles.opcao, type === 'request' && { backgroundColor: 'green' }]}
          onPress={() => verificador('request')}>
          <Text>Motorista</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.opcao, type === 'offer' && { backgroundColor: 'green' }]}
          onPress={() => verificador('offer')}>
          <Text>Passageiro</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.entradaContainer}>
        <TextInput
          style={styles.entrada}
          placeholder="Data"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.entrada}
          placeholder="Horário"
          value={time}
          onChangeText={setTime}
        />
      </View>

      {/* Adicionando a mensagem antes do contador de pessoas */}
      <View style={styles.passengerCountMessageContainer}>
        <Text style={styles.passengerCountMessage}>Número de reservas:</Text>
      </View>

      {/* Contador de pessoas */}
      <View style={styles.passengerCountContainer}>
        <TouchableOpacity onPress={decrementPassengerCount} style={styles.passengerCountButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.passengerCountText}>{passengerCount}</Text>
        <TouchableOpacity onPress={incrementPassengerCount} style={styles.passengerCountButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.entradaContainer}>
        <TextInput
          style={[styles.entrada, styles.areaDeTexto]}
          placeholder="Observações"
          multiline
          value={observation}
          onChangeText={setObservation}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate(type != "" ? type == "offer" ? "Pedir" : "Oferecer" : "")}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Viagem;
