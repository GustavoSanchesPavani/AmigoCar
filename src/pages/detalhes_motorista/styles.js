import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF2F8',
  },
  titulo: {
    fontSize: 24, // Aumenta o tamanho da fonte para 24
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Cor do texto
    textAlign: 'center', // Centraliza o texto
  },
  detalhes: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  imagem: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderWidth: 1,
    borderRadius: 100,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});

export default styles;
