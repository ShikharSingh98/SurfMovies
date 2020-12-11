import React from 'react';

function MovieTrailerVideo({ videoKey }) {
  return (
    <iframe
      width="840"
      height="480"
      src={`https://www.youtube.com/embed/${videoKey}`}
      frameBorder="0"
      allowFullScreen
      title="movie video"
      style={{ marginTop: '5rem' }}
    ></iframe>
  );
}
export default MovieTrailerVideo;
