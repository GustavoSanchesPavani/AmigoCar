import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 230,
    height: 230,
    borderWidth: 1,
    borderRadius: 150,
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    alignSelf: 'center',
    color: '#ed4298',
  },
  formulario: {
    marginTop: 20,
  },
  campoContainer: {
    marginBottom: 10,
  },
  campo: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    width: 250,
  },
  botao: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textoBotao: {
    color: 'white',
    textAlign: 'center',
  },
  linkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoLink: {
    textDecorationLine: 'underline',
  },
});

export default styles;