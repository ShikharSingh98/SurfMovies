import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchMovies(url, searchTerm) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getMovies() {
      setIsError(false);
      try {
        const response = await axios.get(url);
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    if (searchTerm) {
      const timeOutId = setTimeout(() => {
        getMovies();
      }, 1000);
      return function () {
        clearTimeout(timeOutId);
      };
    } else {
      getMovies();
    }
  }, [url, searchTerm]);

  return {
    movies,
    isLoading,
    isError,
  };
}

export default useFetchMovies;
