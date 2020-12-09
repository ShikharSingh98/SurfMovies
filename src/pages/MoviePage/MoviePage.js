import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Spinner from '../../components/Spinner/Spinner';
import ShowError from '../../components/ShowError/ShowError';
import MovieDetail from '../../components/MovieDetail/MovieDetail';

import styles from './MoviePage.module.css';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MovieCastList from '../../components/MovieCastList/MovieCastList';

function MoviePage() {
  const { id } = useParams();

  const [movie, setMovie] = useState({
    title: '',
    poster_path: '',
    year: '',
    genres: [],
    rating: 0,
    overview: '',
    cast: [],
    recommendations: [],
    tagline: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getMovieData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,recommendations`,
          {
            headers: {
              authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const data = response.data;
        const movie = {
          title: data.title,
          poster_path: data.poster_path,
          year: new Date(data.release_date).getFullYear(),
          genres: data.genres,
          rating: data.vote_average,
          overview: data.overview,
          cast: data.credits.cast,
          recommendations: data.recommendations.results,
          tagline: data.tagline,
        };
        setMovie(movie);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    getMovieData();
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.movieInfoContainer}>
        <MoviePoster poster_path={movie.poster_path} title={movie.title} />
        <MovieDetail {...movie} />
      </div>
      <span className={styles.heading}>CAST</span>
      <MovieCastList cast={movie.cast} />
    </div>
  );
}
export default MoviePage;
