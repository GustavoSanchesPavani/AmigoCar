import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  texto: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;