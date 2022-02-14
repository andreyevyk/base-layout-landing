import api from '.';

async function getCities() {
  const response = await api.get('/cities');

  return response.data;
}

export { getCities };
