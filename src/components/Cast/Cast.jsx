import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActors } from '../../services/fetchAPI';
import missingImg from '../../images/missingImg.svg';
import s from './Cast.module.css';

export default function Cast() {
  let { movieId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    fetchActors(movieId)
      .then(data => {
        setActors(data.cast);
      })
      .catch(error => console.warn(error));
  }, [movieId]);
  return (
    <div>
      {actors && (
        <ul className={s.ActorsList}>
          {actors.map(actor => (
            <li className={s.ActorsItem} key={actor.id}>
              <img
                src={`${
                  actor.profile_path
                    ? 'http://image.tmdb.org/t/p/original' + actor.profile_path
                    : missingImg
                }`}
                alt={actor.name}
              />
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
