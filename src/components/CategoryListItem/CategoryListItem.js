import React from 'react';

import styles from './CategoryListItem.module.css';

function CategoryListItem({ category, setGenre }) {
  return (
    <button className={styles.btn} onClick={() => setGenre(category)}>
      {category.name}
    </button>
  );
}

export default CategoryListItem;
