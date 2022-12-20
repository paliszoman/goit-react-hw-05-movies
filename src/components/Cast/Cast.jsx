import PropTypes from 'prop-types';
import css from './Cast.module.css';

import { useParams } from 'react-router-dom';
import { useCast } from '../../utils/hooks/useCast';
import { Loader } from '../Loader/Loader';

const Cast = () => {
  const { id } = useParams();
  const { cast } = useCast(id);

  return !cast ? (
    <Loader />
  ) : (
    <div>
      <ul className={css.castList}>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <li key={id} className={css.castCharacter}>
              {profile_path === null ? (
                <p>&#10068;</p>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={`${name}`}
                  width="80"
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.string,
  cast: PropTypes.arrayOf(PropTypes.object),
};
