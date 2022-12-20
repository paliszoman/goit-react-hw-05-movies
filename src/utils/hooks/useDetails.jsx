import { fetchDetails } from '../API';
import { useState, useEffect } from 'react';

export const useDetails = id => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id)
      fetchDetails(id).then(res => {
        setMovie({ ...res });
      });
  }, [id]);

  return { movie };
};
