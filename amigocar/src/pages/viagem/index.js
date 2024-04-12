import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './styles';

// Componente funcional Viagem
const Viagem = ({ navigation }) => {
  // Estados para armazenar os valores dos campos
  const [origin, setOrigin] = useState('');
  const [destiny, setDestiny] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [observation, setObservation] = useState('');
  const [type, setType] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  // Função para definir o tipo de viagem
  const verificador = (chosenType) => {
    setType(chosenType);
  };

  // Função para incrementar o número de passageiros
  const incrementPassengerCount = () => {
    if (passengerCount < 4) {
      setPassengerCount(prevCount => prevCount + 1);
    }
  };

  // Função para decrementar o número de passageiros
  const decrementPassengerCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(prevCount => prevCount - 1);
    }
  };

  // Funções para exibir e ocultar o seletor de data
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  // Função para lidar com a confirmação da data selecionada
  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate.toDateString()); // Converte a data para string
    hideDatePicker();
  };

  // Funções para exibir e ocultar o seletor de tempo
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  // Função para lidar com a confirmação do tempo selecionado
  const handleTimeConfirm = (selectedTime) => {
    setTime(selectedTime.toLocaleTimeString()); // Converte o tempo para string
    hideTimePicker();
  };

  // Função para criar uma viagem
  const criarViagem = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (origin.trim() === '' || destiny.trim() === '' || date.trim() === '' || time.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
    } else {
      // Navega para a tela de pedir ou oferecer, dependendo do tipo selecionado
      navigation.navigate(type !== "" ? type === "offer" ? "Pedir" : "Oferecer" : "");
    }
  };

  return (
    // Estrutura da tela de Viagem
    <View style={styles.container}>
      <View style={styles.entradaContainer}>
        {/* Campos de origem e destino */}
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

      {/* Opções de tipo de viagem */}
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

      {/* Seleção de data e hora */}
      <View style={styles.entradaContainer}>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={styles.entrada}>{date !== '' ? date : "Data"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showTimePicker}>
          <Text style={styles.entrada}>{time !== '' ? time : "Horário"}</Text>
        </TouchableOpacity>
      </View>

      {/* Seletor de data */}
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      {/* Seletor de tempo */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />

      {/* Contador de passageiros */}
      <View style={styles.passengerCountMessageContainer}>
        <Text style={styles.passengerCountMessage}>Número de reservas:</Text>
      </View>
      <View style={styles.passengerCountContainer}>
        <TouchableOpacity onPress={decrementPassengerCount} style={styles.passengerCountButton}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.passengerCountText}>{passengerCount}</Text>
        <TouchableOpacity onPress={incrementPassengerCount} style={styles.passengerCountButton}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      {/* Campo de observações */}
      <View style={styles.entradaContainer}>
        <TextInput
          style={[styles.entrada, styles.areaDeTexto]}
          placeholder="Observações"
          multiline
          value={observation}
          onChangeText={setObservation}
        />
      </View>

      {/* Botão de criação de viagem */}
      <TouchableOpacity style={styles.botao} onPress={criarViagem}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Viagem; // Exporta o componente Viagem
