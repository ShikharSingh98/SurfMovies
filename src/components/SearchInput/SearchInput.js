import React from 'react';

import styles from './SearchInput.module.css';

function SearchInput({ searchTerm, handleSearchInputChange }) {
  function onInputChange(event) {
    handleSearchInputChange(event.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search a movie"
      className={styles.searchInput}
      onChange={onInputChange}
      value={searchTerm}
    />
  );
}
export default SearchInput;
