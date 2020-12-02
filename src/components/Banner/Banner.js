import React from 'react';
import { ReactComponent as BannerImage } from '../../assets/Banner.svg';

import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.text}>Welcome to the</span>
        <span className={styles.text}>world of movies</span>
        <span className={styles.text}>Explore Now</span>
      </div>
      <BannerImage className={styles.image} />
    </div>
  );
}

export default Banner;
