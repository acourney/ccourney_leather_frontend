import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Details from "./components/Details/Details";

import "./App.css";
import API_URL from "./apiConfig";

function App() {
  let navigate = useNavigate();

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:id" element={<Details />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
