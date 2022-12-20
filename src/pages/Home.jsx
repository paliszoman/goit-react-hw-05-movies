import PropTypes from 'prop-types';
import MoviesList from '../components/MoviesList/MoviesList';

import { useTrending } from '../utils/hooks/useTrending';
import { Loader } from '../components/Loader/Loader';

const HomePage = () => {
  const { trendingArray } = useTrending();

  return !trendingArray ? (
    <Loader />
  ) : (
    <main style={{ padding: '0 50px' }}>
      <MoviesList title={'Trending'} movies={trendingArray} />
    </main>
  );
};
export default HomePage;

HomePage.propTypes = {
  trendingArray: PropTypes.arrayOf(PropTypes.object),
};
