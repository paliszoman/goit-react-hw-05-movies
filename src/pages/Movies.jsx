import { useEffect, useState } from 'react';

const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3/search/multi';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `${BASE_URL}${API_KEY}&&query=${'batman'}&page=${1}&include_adult=false`
    )
      .then(data => data.json())
      .then(data => setMovies(data.results));
    setLoading(false);
  }, [loading]);
  return loading ? (
    'loading'
  ) : (
    <main>
      {console.log(movies)}
      <h1>Trending movies:</h1>
      <ul>
        {movies.map(m => (
          <li key={m.id}>{m.title || m.original_name}</li>
        ))}
      </ul>
    </main>
  );
};
