import api from '.';

async function getPlaces() {
  return api.get('/places');
}

export { getPlaces };
