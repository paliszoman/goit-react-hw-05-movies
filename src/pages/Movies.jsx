import PropTypes from 'prop-types';

import { Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchMovie } from '../utils/hooks/useSearchMovie';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { Loader } from '../components/Loader/Loader';

const MoviesList = lazy(() => import('../components/MoviesList/MoviesList'));

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { movies } = useSearchMovie(query);

  const takeQuery = e => {
    e.preventDefault();
    const form = e.currentTarget.elements;
    setSearchParams({ query: form.name.value.toLowerCase() });
    e.currentTarget.reset();
  };

  return (
    <main style={{ padding: '0 50px' }}>
      <Searchbar takeQuery={takeQuery} />
      <Suspense fallback={<Loader />}>
        <MoviesList title={'Movies'} movies={movies} />
      </Suspense>
    </main>
  );
};
export default Movies;
Movies.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
  search: PropTypes.string,
};
