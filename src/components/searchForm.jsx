import React from 'react';
import searchForm from './css/searchForm.module.css';

const SearchForm = () => {
  return (
    <form action="" className={searchForm.searchBox}>
      <input
        type="text"
        name="search"
        id="searchInput"
        className={searchForm.searchInput}
        placeholder="검색"
      />
      <button className={searchForm.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchForm;
