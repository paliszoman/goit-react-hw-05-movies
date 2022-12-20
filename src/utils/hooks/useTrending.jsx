import { fetchTrending } from '../API';
import { useState, useEffect } from 'react';

export const useTrending = () => {
  const [trendingArray, setTrendingArray] = useState(null);

  useEffect(() => {
    fetchTrending().then(data => {
      setTrendingArray([...data.results]);
    });
  }, []);

  return { trendingArray };
};
