import React from 'react';

import styles from './MovieTrailerVideo.module.css';

function MovieTrailerVideo({ videoKey }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoKey}`}
      frameBorder="0"
      allowFullScreen
      title="movie video"
      className={styles.frame}
    ></iframe>
  );
}
export default MovieTrailerVideo;
