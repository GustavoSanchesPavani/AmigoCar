import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cabecalhoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  botaoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  listaContainer: {
    flex: 1,
  },
  itemLista: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  textoItemLista: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nomePassageiro: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10, 
  },
  data: {
    fontSize: 16,
  },
});

export default styles;
