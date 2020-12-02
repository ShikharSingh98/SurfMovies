import React from 'react';

import styles from './ShowError.module.css';

function ShowError() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>
        Something went wrong please try again later
      </span>
    </div>
  );
}

export default ShowError;
