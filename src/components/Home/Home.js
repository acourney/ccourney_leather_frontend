import React from "react";
import { Card } from "react-bootstrap";

import "./Home.css";

function Home(props) {
  return (
    <main className="homepage">
      <div id="tools-image-container">
        <img
          id="tools-image"
          src="https://imgur.com/A6BxNCk.jpg"
          alt="leather making tools"
        />
      </div>

      <div id="floating-text">
        <span id="brand-statement">
          <p>timeless designs</p>
          <p> {"   "}high quality leather</p>
          <p> {"        "}all handmade in California</p>
        </span>
        <button id="link-to-about-button"> Learn More </button>
      </div>

      <div id="purse-with-lady-on-couch-image-container">
        <img
          id="purse-with-lady-on-couch-image"
          src="https://imgur.com/jNYHvhP.jpg"
          alt="purse with a lady on a couch"
        />
      </div>

      <div id="purse-at-wedding-ad-image-container">
        <img
          id="purse-at-wedding-ad-image"
          src="https://imgur.com/NMjsXqO.jpg"
          alt="white purse at wedding event"
        />
      </div>
    </main>
  );
}

export default Home;
