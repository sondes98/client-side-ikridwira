import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/" tag={Link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/announces" tag={Link}>
              announces
            </NavLink>
          </li>
          <li>
            <NavLink to="/" tag={Link}>
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};
