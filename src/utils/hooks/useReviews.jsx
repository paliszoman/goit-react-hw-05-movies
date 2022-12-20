import { useEffect } from 'react';
import { useState } from 'react';
import { fetchReviews } from '../API';

export const useReviews = id => {
  const [review, setReview] = useState(null);

  useEffect(() => {
    if (id)
      fetchReviews(id).then(res => {
        setReview([...res]);
      });
  }, [id]);

  return { review };
};
