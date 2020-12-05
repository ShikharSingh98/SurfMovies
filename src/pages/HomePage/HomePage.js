import React, { useState } from 'react';

import styles from './HomePage.module.css';
import MovieCardsList from '../../components/MovieCardsList/MovieCardsList';
import Spinner from '../../components/Spinner/Spinner';
import ShowError from '../../components/ShowError/ShowError';
import Banner from '../../components/Banner/Banner';
import GenreList from '../../components/GenreList/GenreList';
import useFetchMovies from '../../Hooks/useFetchMovies';
import SearchInput from '../../components/SearchInput/SearchInput';
import useFetchGenres from '../../Hooks/useFetchGenres';

function HomePage() {
  const [genre, setGenre] = useState({ id: null, name: 'Popular' });
  const [searchTerm, setSearchTerm] = useState('');

  const baseURL = 'https://api.themoviedb.org/3';

  let url = `${baseURL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  if (searchTerm) {
    url = `${baseURL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&include_adult=false`;
  }

  if (genre.id) {
    url = `${baseURL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre.id}&sort_by=popularity.desc&include_adult=false`;
  }
  const { isLoading, isError, movies } = useFetchMovies(url, searchTerm);

  const { genres, isGenresLoading, isGenresError } = useFetchGenres();

  function handleSearchInputChange(term) {
    setSearchTerm(term);
    setGenre({ id: null, name: 'Popular' });
  }

  function display() {
    if (isLoading) {
      return <Spinner />;
    }

    if (isError) {
      return <ShowError />;
    }
    return (
      <>
        <SearchInput
          searchTerm={searchTerm}
          handleSearchInputChange={handleSearchInputChange}
        />
        {!searchTerm ? (
          <>
            <GenreList
              setGenre={setGenre}
              genres={genres}
              isGenresLoading={isGenresLoading}
              isGenresError={isGenresError}
            />
            <h2 className={styles.heading}>{genre.name} Movies</h2>
          </>
        ) : null}

        <MovieCardsList movies={movies} />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Banner />
      {display()}
    </div>
  );
}

export default HomePage;
