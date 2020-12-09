import React from 'react';

import styles from './NoMoviesFound.module.css';

function NoMoivesFound() {
  return (
    <div className={styles.container}>
      <i className={`far fa-file-video ${styles.icon}`}></i>
      <span className={styles.text}>No Movies Found</span>
    </div>
  );
}
export default NoMoivesFound;
