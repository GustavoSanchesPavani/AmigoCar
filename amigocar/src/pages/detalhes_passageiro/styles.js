import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF2F8',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detalhes: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    marginBottom: 20, 
  },
  texto: {
    fontSize: 16,
    color: '#333', 
    marginBottom: 13, 
  },
  imagem: {
    marginTop: 20,
    width: 250,
    height: 250,
    borderWidth: 2,
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