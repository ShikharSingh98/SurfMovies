import React from 'react';
import { useHistory } from 'react-router-dom';
import ImageNotFound from '../ImageNotFound/ImageNotFound';

import styles from './MovieCardsListItem.module.css';

function MovieCardsListItem({ movie }) {
  const history = useHistory();
  if (movie.poster_path) {
    return (
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt=""
        onClick={() => history.push(`/movie/${movie.id}`)}
      />
    );
  } else {
    return <ImageNotFound movieName={movie.title} />;
  }
}

export default MovieCardsListItem;
