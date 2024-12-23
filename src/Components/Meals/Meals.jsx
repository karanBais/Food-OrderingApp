import React from "react";
import "./Meals.css";
import Button from "./Button";

const Meals = ({ data, onAddMeal }) => {
  return (
    <div className="main-container">
      {data.map((meal, index) => (
        <div className="main-div" key={index}>
          <div className="items">
            <div className="item">
              <h4>{meal.dish}</h4>
              <p>{meal.info}</p>
              <h4>{meal.price}</h4>
            </div>
            <div className="amount">
              <label htmlFor="amount">Amount</label>
              <input type="number" placeholder="1" />
              <Button onClick={() => onAddMeal(meal)}>+ Add</Button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Meals;
