import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchGenres() {
  const [genres, setGenres] = useState([]);
  const [isGenresLoading, setIsGenresLoading] = useState(false);
  const [isGenresError, setIsGenresError] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      setIsGenresLoading(true);
      setIsGenresError(false);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list`,
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const modifiedGenresData = [
          { id: null, name: 'Popular' },
          ...response.data.genres,
        ];
        setGenres(modifiedGenresData);
      } catch (error) {
        setIsGenresError(true);
      }
      setIsGenresLoading(false);
    }
    fetchGenres();
  }, []);

  return { genres, isGenresLoading, isGenresError };
}

export default useFetchGenres;
