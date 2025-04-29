import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const Perfil = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [hasVehicle, setHasVehicle] = useState(null);
  const [userData, setUserData] = useState({ nome: '', email: '', senha: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const nome = await AsyncStorage.getItem('usuario');
        const email = await AsyncStorage.getItem('email');
        const senha = await AsyncStorage.getItem('senha');

        setUserData({ nome: nome || '', email: email || '', senha: senha || '' });
      } catch (error) {
        console.error('Erro ao recuperar dados do AsyncStorage:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao recuperar os dados do usuário.');
      }
    };

    fetchUserData();
  }, []);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleVehicleResponse = (response) => {
    setHasVehicle(response);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImage} />
        <Text style={styles.profileName}>{userData.nome}</Text>
        {/* Idade pode ser calculada com base na data de nascimento */}
        {/* <Text style={styles.profileAge}>29 anos</Text> */}
      </View>

      <View style={styles.info}>
        <Text style={styles.infoTitle}>E-mail:</Text>
        <Text style={styles.infoValue}>{userData.email}</Text>
      </View>



      <View style={styles.rating}>
        <TouchableOpacity onPress={toggleDetails} style={styles.ratingButton}>
          <Text style={styles.ratingText}>Detalhes</Text>
          <Ionicons name="chevron-down-outline" style={styles.chevronIcon} color="#ADD8E6" />
        </TouchableOpacity>
      </View>

      {showDetails && (
        <View style={styles.details}>
          {/* Detalhes específicos do perfil */}
          <View style={styles.detail}>
            <Ionicons name="checkmark-circle" style={styles.checkIcon} color="#ADD8E6" />
            <Text style={styles.detailText}>E-mail confirmado</Text>
          </View>

          {/* Outros detalhes podem ser adicionados aqui */}
        </View>
      )}
    </ScrollView>
  );
};

export default Perfil;
