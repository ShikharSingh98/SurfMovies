import React from 'react';

import styles from './NoMoviesFound.module.css';

function NoMoivesFound() {
  return (
    <div className={styles.container}>
      <img
        src="https://img.icons8.com/color/48/000000/nothing-found.png"
        alt="No movies found"
      />
      <span className={styles.text}>No Movies Found</span>
    </div>
  );
}
export default NoMoivesFound;
