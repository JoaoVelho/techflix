import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriasComVideos = await categoriasRepository.getAllWithVideos();
        setDadosIniciais(categoriasComVideos);
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, index) => {
        if (index === 0) {
          return (
            <div key={categoria.id}>
              <>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription="Cardano Shelley has launched! But what's next?... Hashoshi breaks it down in this episode of Crypto Over Coffee! Also in this episode is the groundbreaking research behind post-quantum cryptography, Bitcoin price analysis, Elrond's mainnet launch, and more!"
                />

                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </>
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;
