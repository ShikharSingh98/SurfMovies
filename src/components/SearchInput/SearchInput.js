import React from 'react';

import styles from './SearchInput.module.css';

function SearchInput({ searchTerm, onSearchInputChange }) {
  return (
    <input
      type="text"
      placeholder="Search a movie"
      className={styles.searchInput}
      onChange={(event) => onSearchInputChange(event.target.value)}
      value={searchTerm}
    />
  );
}
export default SearchInput;
