import React from 'react';

import styles from './MovieCastList.module.css';

import MovieCastListItem from '../MovieCastListItem/MovieCastListItem';

function MovieCastList({ cast }) {
  return (
    <div className={styles.container}>
      {cast.map(({ id, ...otherProps }) => (
        <MovieCastListItem key={id} {...otherProps} />
      ))}
    </div>
  );
}
export default MovieCastList;
