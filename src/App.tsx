import React from "react";

const categories = [
  { id: 1, title: "Hats" },
  { id: 2, title: "Jackets" },
  { id: 3, title: "Sneakers" },
  { id: 4, title: "Womens" },
  { id: 5, title: "Mens" },
];

const App = () => {
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container">
          <div className="background-image" />
          <div key={id} className="category-body-conainer">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
