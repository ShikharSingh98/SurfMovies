import React from 'react';
import { SyncLoader } from 'react-spinners';

import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Fetching Data</span>
      <SyncLoader color="cyan" size="10px" margin="9px" />
    </div>
  );
}

export default Spinner;
