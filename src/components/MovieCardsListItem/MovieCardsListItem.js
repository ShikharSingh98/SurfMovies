import React from 'react';

import styles from './MovieCardsListItem.module.css';

function MovieCardsListItem({ movie }) {
  return (
    <img
      className={styles.image}
      src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
      alt="No"
    />
  );
}

export default MovieCardsListItem;
