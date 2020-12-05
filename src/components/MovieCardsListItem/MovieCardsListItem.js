import React from 'react';
import ImageNotFound from '../ImageNotFound/ImageNotFound';

import styles from './MovieCardsListItem.module.css';

function MovieCardsListItem({ movie }) {
  if (movie.poster_path) {
    return (
      <img
        className={styles.image}
        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
        alt=""
      />
    );
  } else {
    return <ImageNotFound movieName={movie.title} />;
  }
}

export default MovieCardsListItem;
