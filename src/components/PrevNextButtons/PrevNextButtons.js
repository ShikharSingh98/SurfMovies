import React from 'react';

import styles from './PrevNextButtons.module.css';

function PrevNextButtons({
  onPrevButtonClick,
  onNextButtonClick,
  currentPage,
  totalPages,
}) {
  return (
    <div className={styles.container}>
      {currentPage > 1 ? (
        <button className={styles.btn} onClick={onPrevButtonClick}>
          Prev
        </button>
      ) : null}
      {currentPage < totalPages ? (
        <button className={styles.btn} onClick={onNextButtonClick}>
          Next
        </button>
      ) : null}
    </div>
  );
}
export default PrevNextButtons;
