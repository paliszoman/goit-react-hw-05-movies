import PropTypes from 'prop-types';
import css from './Description.module.css';

import { useParams } from 'react-router-dom';
import { useReviews } from '../../utils/hooks/useReviews';
import { Loader } from '../Loader/Loader';

export const Description = () => {
  const { id } = useParams();
  const { review } = useReviews(id);

  return !review ? (
    <Loader />
  ) : (
    <div>
      <ul className={css.descriptionList}>
        {review.map(({ id, author, content }) => {
          return (
            <li key={id} className={css.descriptionList__item}>
              <h3 className={css.descriptionList__author}>{author}</h3>
              <p className={css.descriptionList__content}>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
Description.propTypes = {
  id: PropTypes.string,
  review: PropTypes.arrayOf(PropTypes.object),
};
