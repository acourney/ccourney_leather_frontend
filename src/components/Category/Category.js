import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import "./Category.css";

function Category(props) {
  const url = "http://localhost:8000/items/";
  const { category } = useParams();
  const [allItems, setAllItems] = useState([]);
  const [specificItems, setSpecificItems] = useState([]);

  useEffect(() => {
    const specificItemList = [];
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.map((item) => {
          if (item.category === category) {
            specificItemList.push(item);
          }
        });

        setAllItems(data);
        setSpecificItems(specificItemList);
      })
      .catch((err) => console.log("oops error"));
  }, [category]);

  return (
    <main className="main-category-page-container">
      {specificItems.map((item) => (
        <Link to={`/${category}/${item.id}`} key={item.id}>
          <div className="card">
            <div className="card-image">
              <img src={item.photo} alt={item.name} />
              <div className="card-title">
                <h3>{item.name}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default Category;
