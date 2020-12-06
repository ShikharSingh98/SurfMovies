import React from 'react';

import styles from './GenreList.module.css';
import Spinner from '../Spinner/Spinner';
import ShowError from '../ShowError/ShowError';
import GenreListItem from '../GenreListItem/GenreListItem';

function GenreList({
  onGenreClick,
  isGenresLoading,
  isGenresError,
  genres,
  selectedGenre,
}) {
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
          onGenreClick={onGenreClick}
          selectedGenre={selectedGenre}
        />
      ))}
    </div>
  );
}

export default GenreList;
