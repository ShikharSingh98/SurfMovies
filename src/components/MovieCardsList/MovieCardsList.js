import React from 'react';
import MovieCardsListItem from '../MovieCardsListItem/MovieCardsListItem';

import styles from './MovieCardsList.module.css';

function MovieCardsList({ movies }) {
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieCardsListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieCardsList;
