import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { buscarEnderecoPorCoords, buscarCoordsPorEndereco, buscarRota } from '../../service/api';
import {styles} from './styles';

const Mapa = () => {
  const [localizacao, setLocalizacao] = useState(null);
  const [erroMsg, setErroMsg] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [coordsDestino, setCoordsDestino] = useState(null);
  const [coordsRota, setCoordsRota] = useState([]);
  const [destino, setDestino] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErroMsg('Permissão para acessar a localização foi negada');
        return;
      }

      let localAtual = await Location.getCurrentPositionAsync({});
      setLocalizacao(localAtual);

      try {
        const dadosEndereco = await buscarEnderecoPorCoords(
          localAtual.coords.latitude,
          localAtual.coords.longitude
        );
        setEndereco(dadosEndereco.nomeRua);
      } catch (error) {
        setErroMsg('Erro ao buscar o endereço');
      }
    })();
  }, []);

  const handlePressMapa = async (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setCoordsDestino({ latitude, longitude });

    try {
      const dadosEndereco = await buscarEnderecoPorCoords(latitude, longitude);
      setDestino(dadosEndereco.nomeRua);

      if (localizacao) {
        const origem = `${localizacao.coords.longitude},${localizacao.coords.latitude}`;
        const destinoCoords = `${dadosEndereco.coords.longitude},${dadosEndereco.coords.latitude}`;
        const rota = await buscarRota(origem, destinoCoords);

        setCoordsRota(decodificarPolyline(rota));
      }
    } catch (error) {
      console.error('Erro ao buscar endereço para as coordenadas selecionadas ou rota', error);
    }
  };

  const handleBuscarDestino = async () => {
    try {
      if (!destino) {
        setErroMsg('Por favor, digite um destino válido.');
        return;
      }

      const dadosDestino = await buscarCoordsPorEndereco(destino);
      setCoordsDestino(dadosDestino);

      if (localizacao) {
        const origem = `${localizacao.coords.longitude},${localizacao.coords.latitude}`;
        const destinoCoords = `${dadosDestino.longitude},${dadosDestino.latitude}`;
        const rota = await buscarRota(origem, destinoCoords);

        setCoordsRota(decodificarPolyline(rota));
      }
    } catch (error) {
      console.error('Erro ao buscar endereço para o destino digitado ou rota', error);
    }
  };

  const decodificarPolyline = (codificado) => {
    let pontos = [];
    let index = 0, len = codificado.length;
    let lat = 0, lng = 0;

    while (index < len) {
      let b, shift = 0, result = 0;
      do {
        b = codificado.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = codificado.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      pontos.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return pontos;
  };

  return (
    <View style={styles.container}>
      {localizacao ? (
        <>
          <View style={styles.mapaContainer}>
            <MapView
              style={styles.mapa}
              initialRegion={{
                latitude: localizacao.coords.latitude,
                longitude: localizacao.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={handlePressMapa}
            >
              {coordsDestino && (
                <>
                  <Marker coordinate={coordsDestino} title="Destino" />
                  <Polyline
                    coordinates={
                      coordsRota.length > 0
                        ? coordsRota
                        : [
                            {
                              latitude: localizacao.coords.latitude,
                              longitude: localizacao.coords.longitude,
                            },
                            coordsDestino,
                          ]
                    }
                    strokeWidth={2}
                    strokeColor="red"
                  />
                </>
              )}
              <Marker
                coordinate={{
                  latitude: localizacao.coords.latitude,
                  longitude: localizacao.coords.longitude,
                }}
                title="Sua Localização"
                description={endereco || 'Você está aqui'}
              />
            </MapView>
          </View>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder="Digite o destino"
              value={destino}
              onChangeText={setDestino}
            />
            <Button title="Buscar" onPress={handleBuscarDestino} />
          </View>
        </>
      ) : (
        <Text>Obtendo localização...</Text>
      )}
      {erroMsg && <Text>{erroMsg}</Text>}
    </View>
  );
};

export default Mapa;
