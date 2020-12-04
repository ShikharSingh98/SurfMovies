import React from 'react';

import styles from './GenreList.module.css';
import Spinner from '../Spinner/Spinner';
import ShowError from '../ShowError/ShowError';
import GenreListItem from '../GenreListItem/GenreListItem';
import useFetchGenres from '../../Hooks/useFetchGenres';

function GenreList({ setGenre }) {
  const { genres, isLoading, isError } = useFetchGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      {genres.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} setGenre={setGenre} />
      ))}
    </div>
  );
}

export default GenreList;
