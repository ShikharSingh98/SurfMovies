import React from 'react';

import styles from './GenreListItem.module.css';

function GenreListItem({ genre, setGenre }) {
  return (
    <button className={styles.btn} onClick={() => setGenre(genre)}>
      {genre.name}
    </button>
  );
}

export default GenreListItem;
