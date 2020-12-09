import React from 'react';

import styles from './ImageNotFound.module.css';

function ImageNotFound({ movieName, height, width, margin }) {
  console.log(height);
  return (
    <div className={styles.container} style={{ height, width, margin }}>
      <i className={`far fa-image ${styles.icon}`}></i>
      <span className={styles.text}>{movieName}</span>
    </div>
  );
}

export default ImageNotFound;
