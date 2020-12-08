import React from 'react';

import styles from './MovieDetail.module.css';

function MovieDetail({ title, genres, rating, overview, year, tagline }) {
  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <span className={styles.title}>
          {title}({year})
        </span>
        <span className={styles.tagline}>
          {tagline ? `"${tagline}"` : null}
        </span>
      </div>
      <div className={styles.ratingGenresContainer}>
        <div className={styles.ratingContainer}>
          <span className={styles.ratingScore}>{rating}</span>
          <img
            src="https://img.icons8.com/fluent/30/000000/star.png"
            alt="star"
          />
        </div>
        <div className={styles.genresContainer}>
          {genres.map((genre) => (
            <span key={genre.id} className={styles.genre}>
              {genre.name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <span className={styles.overview}>Overview</span>
        <p className={styles.description}>{overview}</p>
      </div>
    </div>
  );
}
export default MovieDetail;
