import React from 'react';

import styles from './ImageNotFound.module.css';

function ImageNotFound({ movieName, cardSize }) {
  return (
    <div className={`${styles.container} ${styles[cardSize]}`}>
      <i className={`far fa-image ${styles.icon}`}></i>
      <span className={styles.text}>{movieName}</span>
    </div>
  );
}

export default ImageNotFound;
