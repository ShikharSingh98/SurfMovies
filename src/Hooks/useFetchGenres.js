import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchGenres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      setIsError(false);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const modifiedGenresData = [
          { id: null, name: 'Popular' },
          ...response.data.genres,
        ];
        setGenres(modifiedGenresData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchGenres();
  }, []);

  return { genres, isLoading, isError };
}

export default useFetchGenres;
