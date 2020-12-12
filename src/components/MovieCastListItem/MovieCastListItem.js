import React from 'react';
import ImageNotFound from '../ImageNotFound/ImageNotFound';

import styles from './MovieCastListItem.module.css';

function MovieCastListItem({ name, character, profile_path }) {
  return (
    <div className={styles.container}>
      {profile_path ? (
        <>
          <img
            className={styles.profileImage}
            src={`https://image.tmdb.org/t/p/w342${profile_path}`}
            alt=""
          />
        </>
      ) : (
        <ImageNotFound cardSize="small" />
      )}
      <span className={styles.name}>{name}</span>
      <span className={styles.character}>{character}</span>
    </div>
  );
}
export default MovieCastListItem;
