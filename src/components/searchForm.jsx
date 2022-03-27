import React, { useRef } from 'react';
import searchForm from './css/searchForm.module.css';

const SearchForm = (props) => {
  const formRef = useRef();

  const getInputData = (e) => {
    e.preventDefault();
    const inputData = formRef.current.value;
    props.getSearchData(inputData);
    formRef.current.value = '';
  };

  return (
    <form action="" className={searchForm.searchBox} onSubmit={getInputData}>
      <input
        type="text"
        name="search"
        id="searchInput"
        className={searchForm.searchInput}
        placeholder="검색"
        ref={formRef}
      />
      <button className={searchForm.searchButton}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default SearchForm;
