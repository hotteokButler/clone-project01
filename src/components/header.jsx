import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import header from './css/header.module.css';
import SearchForm from './searchForm';

const Header = memo((props) => {
  return (
    <header id="header" className={header.header}>
      <Link to="/">
        <h1 className={header.logo}>
          <i className="fa-brands fa-youtube"></i>
          <span className={header.logoTxt}>YOUTUBE</span>
        </h1>
      </Link>
      <SearchForm />
      <nav>
        <button className={header.userIcon}>
          <i className="fa-solid fa-user"></i>
        </button>
        <button className={header.moreIcon}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
});

export default Header;
