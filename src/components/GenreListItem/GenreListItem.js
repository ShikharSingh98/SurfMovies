import React from 'react';

import styles from './GenreListItem.module.css';

function GenreListItem({ genre, onGenreClick, selectedGenre }) {
  return (
    <button
      className={`${styles.btn} ${
        selectedGenre.id === genre.id ? styles.active : ''
      }`}
      onClick={() => onGenreClick(genre)}
    >
      {genre.name}
    </button>
  );
}

export default GenreListItem;
