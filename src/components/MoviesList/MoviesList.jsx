import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

import { Link, useLocation } from 'react-router-dom';
const MoviesList = ({ title, movies }) => {
  const location = useLocation();
  return (
    <section>
      <h1>{title}:</h1>
      <ul className={css.moviesList}>
        {movies.map(({ id, title, original_name, name }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.link}
            >
              {title || original_name || name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
