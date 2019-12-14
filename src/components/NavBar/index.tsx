import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav-bar">
          <NavLink to="/" className="nav-bar__brand">
            <i className="icon-diamond"/>
          </NavLink>

          <ul className="nav-bar__nav nav nav--right">
            <li className="nav__item">
              <NavLink to="/login" className="nav__link">Login</NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/registration" className="nav__item">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
