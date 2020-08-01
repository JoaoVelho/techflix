import config from '../config';

const URL_VIDEOS = `${config.URL}/videos`;

function create(objetoDoVideo) {
  async function fetchData() {
    const resp = await fetch(URL_VIDEOS, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(objetoDoVideo),
    });

    if (resp.ok) {
      const json = await resp.json();
      return json;
    }

    throw new Error('Não foi possível cadastrar os dados');
  }

  return fetchData();
}

export default {
  create,
};
