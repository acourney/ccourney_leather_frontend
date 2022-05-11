import React from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";

import "./Navigation.css";

function Navigation(props) {
  return (
    <main className="nav-bar">
      <div id="logo-link">
        <Link to="/">
          <p id="main-logo">ccourney leather</p>
        </Link>
      </div>
      <div id="user-cart-and-greeting">
        <Link to="/">Cart</Link>
        <p>Welcome, User</p>
      </div>
      <div id="category-links">
        <Link to="/">V i e w A l l</Link>
        <Link to="/">P u r s e s</Link>
        <Link to="/">W a l l e t s</Link>
        <Link to="/">B e l t s</Link>
        <Link to="/">L u g g a g e</Link>
        <Link to="/">S m a l l I t e m s</Link>
      </div>
    </main>
  );
}

export default Navigation;
