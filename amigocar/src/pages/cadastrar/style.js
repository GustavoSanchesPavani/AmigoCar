import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    marginTop: 80,
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  imagem: {
    width: 200, 
    height: 200, 
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 20,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 6,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoCadastro: {
    marginTop: 20,
    color: '#007bff',
    fontSize: 16,
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rotuloSwitch: {
    marginLeft: 10,
    fontSize: 16,
  },
  resultado: {
    marginTop: 20,
    color: 'green',
    fontSize: 16,
  },
});

export default estilo;
