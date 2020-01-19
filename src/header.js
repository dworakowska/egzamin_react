import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/CatalogPage">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/AboutPage">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
