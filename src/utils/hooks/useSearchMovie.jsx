import { fetchByQuote } from '../API';
import { useState, useEffect } from 'react';

export const useSearchMovie = query => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (query === '') return;
    fetchByQuote(query).then(res => setMovies([...res.results]));
  }, [query]);
  return { movies };
};
