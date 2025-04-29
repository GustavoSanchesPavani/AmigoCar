import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  botaoLogin: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 6,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  mapaContainer: {
    width: '100%',
    height: 200,  
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mapa: {
    ...StyleSheet.absoluteFillObject,
  },
  containerInput: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    flex: 1,
  },
});

export { styles };
