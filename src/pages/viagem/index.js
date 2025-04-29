import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from './styles';
import Mapa from '../../componentes/Mapa/index';

const Viagem = ({ navigation }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [observation, setObservation] = useState('');
  const [type, setType] = useState('');
  const [passengerCount, setPassengerCount] = useState(1);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const verificador = (chosenType) => {
    setType(chosenType);
  };

  const incrementPassengerCount = () => {
    if (passengerCount < 4) {
      setPassengerCount(prevCount => prevCount + 1);
    }
  };

  const decrementPassengerCount = () => {
    if (passengerCount > 1) {
      setPassengerCount(prevCount => prevCount - 1);
    }
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    setDate(selectedDate.toDateString());
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (selectedTime) => {
    setTime(selectedTime.toLocaleTimeString());
    hideTimePicker();
  };

  const criarViagem = () => {
    if (date.trim() === '' || time.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
    } else {
      navigation.navigate(type !== "" ? type === "offer" ? "Pedir" : "Oferecer" : "");
    }
  };

  return (
    <View>
      <View style={styles.mapaContainer}>
        <Mapa />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
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
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.entrada}>{date !== '' ? date : "Data"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimePicker}>
            <Text style={styles.entrada}>{time !== '' ? time : "Horário"}</Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleDateConfirm}
          onCancel={hideDatePicker}
        />

        <DateTimePickerModal
          isVisible={isTimePickerVisible}
          mode="time"
          onConfirm={handleTimeConfirm}
          onCancel={hideTimePicker}
        />

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

        <View style={styles.entradaContainer}>
          <TextInput
            style={[styles.entrada, styles.areaDeTexto]}
            placeholder="Observações"
            multiline
            value={observation}
            onChangeText={setObservation}
          />
        </View>

        <TouchableOpacity style={styles.botao} onPress={criarViagem}>
          <Text style={styles.textoBotao}>Criar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Viagem;

