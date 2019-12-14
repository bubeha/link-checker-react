import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <NavLink to="/" className="brand-logo">Brand</NavLink>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
