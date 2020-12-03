import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './CategoryList.module.css';
import Spinner from '../Spinner/Spinner';
import ShowError from '../ShowError/ShowError';
import CategoryListItem from '../CategoryListItem/CategoryListItem';

function CategoryList({ setGenre }) {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setIsError(false);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
        );
        const categoriesData = response.data.genres;
        setCategories(categoriesData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchCategories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ShowError />;
  }

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryListItem
          key={category.id}
          category={category}
          setGenre={setGenre}
        />
      ))}
    </div>
  );
}

export default CategoryList;
