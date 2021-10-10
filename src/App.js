import { useState, useEffect } from 'react';
import './App.scss';
import api from './services/api'
import MovieRow from './Components/MovieRow';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect( () => {

    const loadAll = async () => {
      let list = await api.getHomeList()
      setMovieList(list)
    }

    loadAll();

  }, [])

  return (
    <div className="page">
      <section className="lists">
        {movieList.map( (item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
