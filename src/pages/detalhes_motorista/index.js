import React from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Motoristas from '../../context/perfilDataM';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import ButtonDetalhesM from '../../componentes/ButtonDetalhesM/index';

// Componente funcional MotoristaDetalhes
const MotoristaDetalhes = ({ route }) => {
    // Obtém o ID do motorista da rota
    const { motoristaId } = route.params;
    // Encontra o motorista com base no ID fornecido
    const motorista = Motoristas.find((motorista) => motorista.id === motoristaId);

    // Função para renderizar os detalhes do motorista
    const renderItem = ({ item }) => (
        <View style={styles.detalhes}>
            {item.map((detail, index) => (
                <View key={index} style={styles.detailContainer}>
                    {/* Ícone e texto do detalhe */}
                    <Ionicons name={detail.icon} size={24} color={detail.color} />
                    <Text style={styles.texto}>{detail.text}</Text>
                </View>
            ))}
        </View>
    );

    // Dados dos detalhes do motorista
    const detalhesData = [
        [
            { text: `Sobre: ${motorista.sobre}`, icon: 'person', color: 'orange' },
            { text: `Telefone: ${motorista.telefone}`, icon: 'call', color: 'blue' },
            { text: `R$: ${motorista.valor}`, icon: 'cash', color: 'green' },
            { text: `Avaliações: ${motorista.avaliacao}`, icon: 'heart', color: 'red' },
        ],
        [
            { text: `Veículo: ${motorista.veiculo}`, icon: 'car-sport', color: '#8B4513' },
            { text: `Placa: ${motorista.placa}`, icon: 'barcode', color: '#FF7F50' },
            { text: `Cor: ${motorista.cor}`, icon: 'brush', color: '#8B008B' },
            { text: `Assentos: ${motorista.assentos}`, icon: 'accessibility', color: '#048a7a' },
        ],
    ];     

    return (
        // Estrutura da tela de Detalhes do Motorista
        <View style={styles.container}>
            <Image source={motorista.foto} style={styles.imagem} />
            <Text style={styles.texto, styles.nome}>{motorista.motorista.toUpperCase()}</Text>

            {/* Carousel para exibir os detalhes do motorista */}
            <Carousel
                data={detalhesData}
                renderItem={renderItem}
                sliderWidth={450}
                itemWidth={300}
            />

            {/* Botão para mais detalhes do motorista */}
            <ButtonDetalhesM />
        </View>
    );
};

export default MotoristaDetalhes; // Exporta o componente MotoristaDetalhes
