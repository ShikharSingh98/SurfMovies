import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from './HomePage.module.css';
import MovieCardsList from '../../components/MovieCardsList/MovieCardsList';
import Spinner from '../../components/Spinner/Spinner';
import ShowError from '../../components/ShowError/ShowError';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [genre, setGenre] = useState({});

  useEffect(() => {
    async function getMoviesByPopularity() {
      setIsError(false);
      try {
        const response = await axios.get(
          genre.id
            ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genre.id}&sort_by=popularity.desc&include_adult=false`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getMoviesByPopularity();
  }, [genre.id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      <Banner />
      <CategoryList setGenre={setGenre} />
      <h2 className={styles.heading}>
        {genre.name ? genre.name : 'Popular'} Movies
      </h2>
      <MovieCardsList movies={movies} />
    </div>
  );
}

export default HomePage;
