import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=1`)
      .then(data => data.json())
      .then(data => setMovies(data.results));
    setLoading(false);
  }, []);
  return loading ? (
    'loading'
  ) : (
    <main>
      {console.log(movies)}
      <h1>Trending movies:</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title || m.original_name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
