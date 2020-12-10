import React from 'react';

import MovieCardsListItem from '../MovieCardsListItem/MovieCardsListItem';

import styles from './RecommendedMoviesList.module.css';

function RecommendedMoviesList({ recommendations }) {
  return (
    <div className={styles.container}>
      {recommendations.map((movie) => (
        <MovieCardsListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
export default RecommendedMoviesList;
