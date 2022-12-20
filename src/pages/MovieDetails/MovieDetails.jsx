import PropTypes from 'prop-types';
import css from './MovieDetails.module.css';

import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useDetails } from '../../utils/hooks/useDetails';
import { Loader } from '../../components/Loader/Loader';
import { Suspense } from 'react';
import { MovieDetailsGenerator } from '../../components/MovieDetailsGenerator/MovieDetailsGenerator';
export const MovieDetails = () => {
  const { id } = useParams();
  const { movie } = useDetails(id);
  const location = useLocation();

  const backSite = location.state?.from ?? '/';

  if (!movie) return <Loader />;
  return (
    <main style={{ padding: '0 50px' }}>
      <Link to={backSite} className={css.backSite}>
        ← Go back
      </Link>
      <MovieDetailsGenerator movie={movie} id={id} />
      <ul className={css.detailList}>
        <li className={css.cast}>
          <Link to="cast" className={css.textLink}>
            Cast
          </Link>
        </li>
        <li className={css.description}>
          <Link to="description" className={css.textLink}>
            Description
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

MovieDetails.propTypes = {
  id: PropTypes.number,
  movie: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
  backSite: PropTypes.string,
};
