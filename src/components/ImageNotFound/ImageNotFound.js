import React from 'react';

import styles from './ImageNotFound.module.css';

function ImageNotFound({ movieName, height, width, margin }) {
  console.log(height);
  return (
    <div className={styles.container} style={{ height, width, margin }}>
      <img
        src="https://img.icons8.com/plasticine/100/000000/no-image.png"
        alt="No poster"
      />
      <span className={styles.text}>{movieName}</span>
    </div>
  );
}

export default ImageNotFound;
