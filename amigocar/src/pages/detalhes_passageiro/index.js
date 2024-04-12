import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Passageiro from '../../context/perfilDataP';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './styles';
import ButtonDetalhesP from '../../componentes/ButtonDetalhesP/index';

// Componente funcional PassageiroDetalhes
const PassageiroDetalhes= ({ route }) => {
    // Obtém o ID do passageiro da rota
    const { passageiroId } = route.params;
    // Encontra o passageiro com base no ID fornecido
    const passageiro = Passageiro.find((passageiro) => passageiro.id === passageiroId);

    // Função para renderizar os detalhes do passageiro
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

    // Dados dos detalhes do passageiro
    const detalhesData = [
        [
            { text: `Sobre: ${passageiro.sobre}`, icon: 'person', color: 'orange' },
            { text: `Telefone: ${passageiro.telefone}`, icon: 'call', color: 'blue' },
            { text: `Avaliações: ${passageiro.avaliacao}`, icon: 'heart', color: 'red' },
        ],
        [
            { text: `Documentação: ${passageiro.documentacao}`, icon: 'checkmark-circle', color: '#31c3f7' },
            { text: `E-mail: ${passageiro.email}`, icon: 'checkmark-circle', color: '#31c3f7' },
            { text: `Celular: ${passageiro.celular}`, icon: 'checkmark-circle', color: '#31c3f7' },
        ],
    ];

    return (
        // Estrutura da tela de Detalhes do Passageiro
        <View style={styles.container}>
            <Image source={passageiro.foto} style={styles.imagem} />
            <Text style={styles.texto, styles.nome}>{passageiro.passageiro.toUpperCase()}</Text>

            {/* Carousel para exibir os detalhes do passageiro */}
            <Carousel
                data={detalhesData}
                renderItem={renderItem}
                sliderWidth={450}
                itemWidth={300}
            />
            {/* Botão para mais detalhes do passageiro */}
            <ButtonDetalhesP />

        </View>
    );
};

export default PassageiroDetalhes; // Exporta o componente PassageiroDetalhes
