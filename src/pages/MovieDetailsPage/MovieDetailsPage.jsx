import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  useHistory,
  useRouteMatch,
  Switch,
  useLocation,
} from 'react-router-dom';
import { fetchMovie } from '../../services/fetchAPI';

const MovieCard = lazy(() => import('../../components/MovieCard'));
const DetailsNav = lazy(() => import('../../components/DetailsNav'));
const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { path } = useRouteMatch();
  const { current } = useRef(location.state);

  const [film, setFilm] = useState(null);
  useEffect(() => {
    fetchMovie(movieId)
      .then(data => {
        setFilm(data);
      })
      .catch(error => {
        history.push('/');
        console.warn(error);
      });
  }, [history, movieId]);

  return (
    <div>
      <button onClick={() => history.push(current ? current.from : '/')}>
        &#8592; Go back
      </button>
      {film && (
        <>
          <Suspense fallback={<h2>Loading...</h2>}>
            <MovieCard film={film} />
            <hr />
            <p>Additional information</p>
            <DetailsNav movieId={movieId} />
          </Suspense>
          <hr />
          <Suspense fallback={<h2>Loading...</h2>}>
            <Switch>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </div>
  );
}
