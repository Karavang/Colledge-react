import React from "react";
import items from "./data";

const Categories = ({ filterItems }) => {
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  return (
    <div>
      <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>

      {uniqueCategories.map((category, index) => (
        <button
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
