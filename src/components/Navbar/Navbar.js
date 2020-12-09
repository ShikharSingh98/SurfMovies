import React from 'react';

import styles from './Navbar.module.css';
import { ReactComponent as TMDBLogo } from '../../assets/TMDB Logo.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.brand}>
        <i className={`fas fa-video ${styles.logo}`}></i>
        <span className={styles.brandName}>SurfMovies</span>
      </Link>
      <TMDBLogo className={styles.TMDBlogo} />
    </div>
  );
}

export default Navbar;
