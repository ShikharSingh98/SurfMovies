import React from 'react';

import styles from './GenreList.module.css';
import Spinner from '../Spinner/Spinner';
import ShowError from '../ShowError/ShowError';
import GenreListItem from '../GenreListItem/GenreListItem';

function GenreList({ onGenreChange, isGenresLoading, isGenresError, genres }) {
  if (isGenresLoading) {
    return <Spinner />;
  }

  if (isGenresError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      {genres.map((genre) => (
        <GenreListItem
          key={genre.id}
          genre={genre}
          onGenreChange={onGenreChange}
        />
      ))}
    </div>
  );
}

export default GenreList;
