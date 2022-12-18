const API_KEY = '?api_key=32592fc1c467ab313147df8555d6672d';
const BASE_URL = 'https://api.themoviedb.org/3';
const MAIN_PAGE_URL = '/trending/all/day';

export const fetchTrending = () => {
  fetch(`${BASE_URL}${MAIN_PAGE_URL}${API_KEY}&page=1`)
    .then(data => data.json())
    .then(data => data);
};
