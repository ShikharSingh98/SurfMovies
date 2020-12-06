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
import PrevNextButtons from '../../components/PrevNextButtons/PrevNextButtons';
import NoMoivesFound from '../../components/NoMoviesFound/NoMoivesFound';

function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState({
    id: null,
    name: 'Popular',
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const baseURL = 'https://api.themoviedb.org/3';

  let url = `${baseURL}/movie/popular?page=${currentPage}`;

  if (searchTerm) {
    url = `${baseURL}/search/movie?query=${searchTerm}&include_adult=false&page=${currentPage}`;
  }

  if (selectedGenre.id) {
    url = `${baseURL}/discover/movie?with_genres=${selectedGenre.id}&sort_by=popularity.desc&include_adult=false&page=${currentPage}&certification_country=IN&certification.lte=A`;
  }
  const { isLoading, isError, movies, totalPages } = useFetchMovies(
    url,
    searchTerm
  );

  const { genres, isGenresLoading, isGenresError } = useFetchGenres();

  function onSearchInputChange(term) {
    setSearchTerm(term);
    setSelectedGenre({ id: null, name: 'Popular' });
    setCurrentPage(1);
  }

  function onGenreClick(genre) {
    setSelectedGenre(genre);
    setCurrentPage(1);
  }

  function onNextButtonClick() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  }
  function onPrevButtonClick() {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
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
        {movies.length === 0 ? (
          <NoMoivesFound />
        ) : (
          <MovieCardsList movies={movies} />
        )}
        <PrevNextButtons
          onNextButtonClick={onNextButtonClick}
          onPrevButtonClick={onPrevButtonClick}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Banner />
      <SearchInput
        searchTerm={searchTerm}
        onSearchInputChange={onSearchInputChange}
      />
      {!searchTerm ? (
        <>
          <GenreList
            onGenreClick={onGenreClick}
            genres={genres}
            isGenresLoading={isGenresLoading}
            isGenresError={isGenresError}
            selectedGenre={selectedGenre}
          />
          <h2 className={styles.heading}>{selectedGenre.name} Movies</h2>
        </>
      ) : null}
      {display()}
    </div>
  );
}

export default HomePage;
