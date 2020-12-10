import React from 'react';

import styles from './MovieCastList.module.css';

import MovieCastListItem from '../MovieCastListItem/MovieCastListItem';

function MovieCastList({ cast }) {
  return (
    <div className={styles.container}>
      {cast.map(({ cast_id, ...otherProps }) => (
        <MovieCastListItem key={cast_id} {...otherProps} />
      ))}
    </div>
  );
}
export default MovieCastList;
