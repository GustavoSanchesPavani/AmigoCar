import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
  },
  cabecalho: {
    alignSelf: 'center',
  },
  cabecalhoTexto: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lista: {
    width: '100%', 
  },
  itemLista: {
    marginTop: 10,
    paddingVertical: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#ccc',
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  imagem: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 100,
  },
  textoContainer: {
    marginLeft: 10, 
    flex: 1, 
  },
  nomePassageiro: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 15,
    textAlign: 'right', 
  },
});

export default styles;
