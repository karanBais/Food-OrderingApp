import React from "react";
import "./Meals.css";

const Meals = (props) => {
  return (
    <div className="main-container">
    {props.data.map((meal, index) => (
      <div className="item" key={index}>
        <h4>{meal.dish}</h4>
        <p>{meal.info}</p>
        <h4>{meal.price}</h4>
        <hr />
      </div>
    ))}
    
  </div>
  );
};

export default Meals;
