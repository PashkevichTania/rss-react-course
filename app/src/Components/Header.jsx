import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="nav">
      <NavLink
        exact
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        exact
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
        to="/About/"
      >
        About
      </NavLink>
      <NavLink
        to="/News/"
        activeStyle={{
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        News Page
      </NavLink>
    </nav>
  </header>
);

export default Header;
