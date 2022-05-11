import React from "react";
import { Card, Button } from "react-bootstrap";

import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  return (
    <main className="homepage">
      {/* <div id="tools-image-container">
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
      </div> */}
      <div id="tools-image-container">
        <Card className="bg-dark text-white">
          <Card.Img src="https://imgur.com/A6BxNCk.jpg" alt="leather tools" />
          <Card.ImgOverlay>
            <div id="brandstatement-and-infobutton">
              <Card.Title id="brandstatement-title">
                This is ccourney leather
              </Card.Title>
              <Card.Text id="brandstatement-text">
                <p>Timeless designs</p>
                <p>&emsp;High quality leather</p>
                <p>&emsp;&emsp;All handmade in California</p>
              </Card.Text>
              <Button
                id="brandstatement-info-button"
                variant="outline-secondary"
              >
                Learn More
              </Button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div id="purse-with-lady-on-couch-image-container">
        <img
          id="purse-with-lady-on-couch-image"
          src="https://imgur.com/JtJkqGf.jpg"
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
