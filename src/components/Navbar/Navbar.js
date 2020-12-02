import React from 'react';

import styles from './Navbar.module.css';
import { ReactComponent as TMDBLogo } from '../../assets/TMDB Logo.svg';

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src="https://img.icons8.com/nolan/48/movie.png" alt="brand-logo" />
        <span className={styles.brandName}>SurfMovies</span>
      </div>
      <TMDBLogo className={styles.logo} />
    </div>
  );
}

export default Navbar;
