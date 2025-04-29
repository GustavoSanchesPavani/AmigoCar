import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  mapaContainer: {
    height: '40%',
    marginBottom: 20,
  },
  entradaContainer: {
    marginBottom: 20,
    width: '100%',
  },
  entrada: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#f7f7f7',
    width: '100%',
  },
  areaDeTexto: {
    height: 60,
    textAlignVertical: 'top',
  },
  opcaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  opcao: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '48%',
  },
  botao: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passengerCountMessageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  passengerCountMessage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  passengerCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  passengerCountButton: {
    backgroundColor: '#87CEEB',
    padding: 10,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  passengerCountText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default styles;
