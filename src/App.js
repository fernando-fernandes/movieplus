import { useState, useEffect } from 'react';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from './Header';

import api from './services/api'
import './App.scss';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect( () => {

    const loadAll = async () => {

      // Pegar a lista
      let list = await api.getHomeList()
      setMovieList(list)

      //Pegar o destaque
      let originals = list.filter( i => i.slug === 'originals')
      let randomChosen = Math.floor( Math.random() * (originals[0].items.results.length - 1) )
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await api.getMovieInfo(chosen.id, 'tv')

      setFeaturedData(chosenInfo)
    }

    loadAll();

  }, [])

  useEffect( () => {

    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    // remover o evento ao sair da página (desmontar o componente)
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }

  }, [])

  return (
    <div className="page">

      <Header scroll={blackHeader} />

      {
        featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      
      <section className="lists">
        {movieList.map( (item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
