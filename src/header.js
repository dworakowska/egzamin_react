import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div>
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
        </div>
        <div className="cart">
          <Cart />
        </div>
      </nav>
    </div>
  );
}

export default Header;
