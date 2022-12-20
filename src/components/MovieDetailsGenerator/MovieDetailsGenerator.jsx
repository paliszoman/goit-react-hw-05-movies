import PropTypes from 'prop-types';
import css from './MovieDetailsGenerator.module.css';

export const MovieDetailsGenerator = ({ movie, id }) => {
  return (
    <section className={css.container}>
      <img
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
        alt={movie.name}
        className={css.picture}
      ></img>

      <h1 className={css.descriptions}>{movie.original_title}</h1>

      <p className={css.descriptions}>
        User Score:{' '}
        {Number.parseFloat(
          movie.vote_average ? movie.vote_average : '?'
        ).toFixed(0)}
        /10
      </p>

      <h2 className={css.descriptions}>Overview</h2>

      <p className={css.descriptions}>{movie.overview}</p>

      <h2 className={css.descriptions}>Genres</h2>

      <p className={css.descriptions}>
        {movie.genres !== undefined
          ? movie.genres.map(gen => gen.name + ' ')
          : "We don't know anything about genres :("}
      </p>
    </section>
  );
};
MovieDetailsGenerator.propTypes = {
  id: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
};
