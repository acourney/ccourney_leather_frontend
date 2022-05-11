import React from "react";
import { useState, useEffect } from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { Offcanvas, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";

function Navigation(props) {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="nav-bar">
      {matches && (
        <>
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
        </>
      )}
      {!matches && (
        <div className="smallscreen-nav-bar">
          <Button variant="primary" onClick={handleShow}>
            Menu
          </Button>

          <div id="logo-link">
            <Link to="/">
              <p id="main-logo">ccourney leather</p>
            </Link>
          </div>
          <div id="user-cart-and-greeting">
            <Link to="/">Cart</Link>
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Categories</Offcanvas.Title>
              Welcome, User
            </Offcanvas.Header>
            <Offcanvas.Body id="small-screen-nav-categories">
              <Link to="/">V i e w A l l</Link>
              <Link to="/">P u r s e s</Link>
              <Link to="/">W a l l e t s</Link>
              <Link to="/">B e l t s</Link>
              <Link to="/">L u g g a g e</Link>
              <Link to="/">S m a l l I t e m s</Link>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      )}
    </main>
  );
}

export default Navigation;
