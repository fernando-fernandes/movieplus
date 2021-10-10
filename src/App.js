import { useState, useEffect } from 'react';
import './App.css';
import api from './services/api'

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
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
