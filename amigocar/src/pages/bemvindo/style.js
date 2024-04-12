import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E5FF', // Cor de fundo azul bebê
    paddingHorizontal: 20,
  },
  logo: {
    width: 230,
    height: 230,
    borderWidth: 1,
    borderRadius: 150,
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Cor do texto do título
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666', // Cor do texto do subtítulo
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF', // Cor do botão
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF', // Cor do texto do botão
    textAlign: 'center',
  },
});

export default styles;
