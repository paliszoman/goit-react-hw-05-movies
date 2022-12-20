import { useEffect } from 'react';
import { useState } from 'react';
import { fetchCast } from '../API';

export const useCast = id => {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (id)
      fetchCast(id).then(res => {
        setCast([...res]);
      });
  }, [id]);

  return { cast };
};
