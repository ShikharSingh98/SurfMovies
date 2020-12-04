import React, { useState } from 'react';

import styles from './HomePage.module.css';
import MovieCardsList from '../../components/MovieCardsList/MovieCardsList';
import Spinner from '../../components/Spinner/Spinner';
import ShowError from '../../components/ShowError/ShowError';
import Banner from '../../components/Banner/Banner';
import GenreList from '../../components/GenreList/GenreList';
import useFetchMovies from '../../Hooks/useFetchMovies';

function HomePage() {
  const [genre, setGenre] = useState({ id: null, name: 'Popular' });

  const { isLoading, isError, movies } = useFetchMovies(genre.id);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      <Banner />
      <GenreList setGenre={setGenre} />
      <h2 className={styles.heading}>{genre.name} Movies</h2>
      <MovieCardsList movies={movies} />
    </div>
  );
}

export default HomePage;
