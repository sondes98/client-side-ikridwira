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
            <NavLink
              to="/"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/announces"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{}}
            >
              announces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              tag={Link}
              activeStyle={{ fontWeight: "bold" }}
              style={{}}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};
