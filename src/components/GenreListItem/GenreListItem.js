import React from 'react';

import styles from './GenreListItem.module.css';

function GenreListItem({ genre, onGenreChange }) {
  return (
    <button className={styles.btn} onClick={() => onGenreChange(genre)}>
      {genre.name}
    </button>
  );
}

export default GenreListItem;
