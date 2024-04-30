import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const Sidebar = ({ onCategoryChange, isRecommend }) => {
  const [selected, setSelected] = useState("All");

  const handleClick = (itemName) => {
    setSelected(itemName);
  };

  let categories = [
    "Recommend",
    "All",
    "Strength Training",
    "Cardiovascular Training",
    "Flexibility and Balance",
    "Train strength and endurance",
    "Mind-Body Wellness",
    "Functional Training",
  ];

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <div
          key={category}
          className={`${styles.item} ${
            selected === category ? styles.selected : ""
          }`}
          onClick={() => {
            handleClick(category);
            onCategoryChange(category);
          }}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
