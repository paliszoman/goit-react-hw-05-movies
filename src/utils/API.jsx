import axios from 'axios';

const API_KEY = '?api_key=7187eaa460ea5e032017e2dd877dc09f';

export const fetchTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day${API_KEY}`
  );
  return response.data;
};

export const fetchByQuote = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/multi${API_KEY}&&query=${query}&include_adult=false`
  );
  return response.data;
};
export const fetchDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}${API_KEY}&language=en-US`
  );

  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits${API_KEY}&language=en-US`
  );

  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews${API_KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
