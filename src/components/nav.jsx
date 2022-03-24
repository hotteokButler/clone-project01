import React, { memo } from 'react';
import nav from './css/nav.module.css';

const Nav = memo(() => {
  return (
    <nav className={nav.wrap}>
      <ul className={nav.sidebar}>
        <li className={nav.sidebarList}>
          <a href="">
            <i className="fa-solid fa-house"></i>
            <p className={nav.sidebarTxt}>Home</p>
          </a>
        </li>
        <li className={nav.sidebarList}>
          <a href="">
            <i className="fa-solid fa-compass"></i>
            <p className={nav.sidebarTxt}>Home</p>
          </a>
        </li>
        <li className={nav.sidebarList}>
          <a href="">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <p className={nav.sidebarTxt}>Shorts</p>
          </a>
        </li>
        <li className={nav.sidebarList}>
          <a href="">
            <i className="fa-solid fa-video"></i>
            <p className={nav.sidebarTxt}>Subscribe</p>
          </a>
        </li>
        <li className={nav.sidebarList}>
          <a href="">
            <i className="fa-solid fa-photo-film"></i>
            <p className={nav.sidebarTxt}>Storage</p>
          </a>
        </li>
      </ul>
    </nav>
  );
});

export default Nav;
