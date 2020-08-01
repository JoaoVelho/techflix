import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  async function fetchData() {
    const resp = await fetch(URL_CATEGORIES);

    if (resp.ok) {
      const json = await resp.json();
      return json;
    }

    throw new Error('Não foi possível pegar os dados');
  }

  return fetchData();
}

function getAllWithVideos() {
  async function fetchData() {
    const resp = await fetch(`${URL_CATEGORIES}?_embed=videos`);

    if (resp.ok) {
      const json = await resp.json();
      return json;
    }

    throw new Error('Não foi possível pegar os dados');
  }

  return fetchData();
}

export default {
  getAllWithVideos,
  getAll,
};
