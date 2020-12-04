import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchMovies(genreID) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsError(false);
      try {
        const response = await axios.get(
          genreID
            ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreID}&sort_by=popularity.desc&include_adult=false`
            : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getMovies();
  }, [genreID]);

  return {
    movies,
    isLoading,
    isError,
  };
}

export default useFetchMovies;
