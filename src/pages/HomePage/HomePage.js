import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './HomePage.module.css';
import MovieCardsList from '../../components/MovieCardsList/MovieCardsList';
import Spinner from '../../components/Spinner/Spinner';
import ShowError from '../../components/ShowError/ShowError';
import Banner from '../../components/Banner/Banner';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getPopularMovies() {
      setIsError(false);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getPopularMovies();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      <Banner />
      <h2 className={styles.heading}>Popular Movies</h2>
      <MovieCardsList movies={movies} />
    </div>
  );
}

export default HomePage;
