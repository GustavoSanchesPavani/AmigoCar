import axios from 'axios';

const baseNominatimURL = 'https://nominatim.openstreetmap.org';
const baseOSRMURL = 'http://router.project-osrm.org';

const apiNominatim = axios.create({
  baseURL: baseNominatimURL,
  headers: {
    'User-Agent': 'Aplicativo React Native',
    'Accept-Language': 'pt-BR',
  },
});

const apiOSRM = axios.create({
  baseURL: baseOSRMURL,
});

export const buscarEnderecoPorCoords = async (lat, lng) => {
  try {
    const response = await apiNominatim.get('/reverse', {
      params: {
        format: 'json',
        lat,
        lon: lng,
        addressdetails: 1,
      },
    });

    const { address } = response.data;
    const nomeRua = address.road || ''; // Extrai o nome da rua, se disponível
    return {
      nomeRua,
      coords: {
        latitude: parseFloat(lat),
        longitude: parseFloat(lng),
      },
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API Nominatim', error);
    throw error;
  }
};

export const buscarCoordsPorEndereco = async (endereco) => {
  try {
    const response = await apiNominatim.get('/search', {
      params: {
        format: 'json',
        q: endereco,
        addressdetails: 1,
      },
    });

    if (response.data.length > 0) {
      const { lat, lon } = response.data[0];
      return {
        latitude: parseFloat(lat),
        longitude: parseFloat(lon),
      };
    } else {
      throw new Error('Endereço não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar coordenadas da API Nominatim', error);
    throw error;
  }
};

export const buscarRota = async (origem, destino) => {
  try {
    const response = await apiOSRM.get(`/route/v1/driving/${origem};${destino}`, {
      params: {
        overview: 'full',
        geometries: 'polyline',
      },
    });
    return response.data.routes[0].geometry;
  } catch (error) {
    console.error('Erro ao buscar rota da API OSRM', error);
    throw error;
  }
};

export default {
  buscarEnderecoPorCoords,
  buscarCoordsPorEndereco,
  buscarRota,
};
