import React from 'react';

import styles from './Navbar.module.css';
import { ReactComponent as TMDBLogo } from '../../assets/TMDB Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.brand}>
        <img src="https://img.icons8.com/nolan/48/movie.png" alt="brand-logo" />
        <span className={styles.brandName}>SurfMovies</span>
      </Link>
      <TMDBLogo className={styles.logo} />
    </div>
  );
}

export default Navbar;
