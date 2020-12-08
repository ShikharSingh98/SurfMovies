import React from 'react';
import ImageNotFound from '../ImageNotFound/ImageNotFound';

import styles from './MoviePoster.module.css';

function MoviePoster({ poster_path, title }) {
  if (poster_path) {
    return (
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w342${poster_path}`}
        alt=""
      />
    );
  } else {
    return <ImageNotFound movieName={title} />;
  }
}
export default MoviePoster;
