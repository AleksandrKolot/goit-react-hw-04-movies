import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

DetailsNav.propTypes = {
  movieId: PropTypes.string.isRequired,
};
export default function DetailsNav({ movieId }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
      </li>
      <li>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </li>
    </ul>
  );
}
