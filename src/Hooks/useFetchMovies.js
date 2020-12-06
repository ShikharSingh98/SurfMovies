import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchMovies(url, searchTerm) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    async function getMovies() {
      setIsError(false);
      try {
        const response = await axios.get(url, {
          headers: {
            authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        });
        const moviesData = response.data.results;
        const totalPages = response.data.total_pages;
        setMovies(moviesData);
        setTotalPages(totalPages);
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
    totalPages,
  };
}

export default useFetchMovies;
